// PDF text extraction via pdfjs-dist (handles CJK ToUnicode CMaps correctly)
// Usage: node extract_pdf_pdfjs.js input.pdf output.txt [pageStart pageEnd]
const fs = require('fs');
const path = require('path');

async function main() {
  const input = process.argv[2];
  const output = process.argv[3];
  const pStart = parseInt(process.argv[4] || '1', 10);
  const pEnd = parseInt(process.argv[5] || '99999', 10);

  // pdfjs-dist legacy build for Node
  const pdfjs = await import('pdfjs-dist/legacy/build/pdf.mjs');
  const cmapsPath = path.join(path.dirname(require.resolve('pdfjs-dist/package.json')), 'cmaps');
  const data = new Uint8Array(fs.readFileSync(input));
  const doc = await pdfjs.getDocument({
    data,
    useSystemFonts: true,
    cMapUrl: cmapsPath + path.sep,
    cMapPacked: true,
    standardFontDataUrl: path.join(path.dirname(require.resolve('pdfjs-dist/package.json')), 'standard_fonts') + path.sep,
  }).promise;

  const out = [];
  const nPages = doc.numPages;
  console.error(`PDF: ${nPages} pages`);
  for (let p = pStart; p <= Math.min(pEnd, nPages); p++) {
    const page = await doc.getPage(p);
    const tc = await page.getTextContent();
    let line = '';
    let lastY = null;
    for (const item of tc.items) {
      if (item.str === undefined) continue;
      const y = item.transform ? item.transform[5] : 0;
      if (lastY !== null && Math.abs(y - lastY) > 2) {
        out.push(line);
        line = '';
      }
      lastY = y;
      line += item.str;
    }
    if (line.trim()) out.push(line);
    out.push(`\n===== PAGE ${p} =====\n`);
  }
  fs.writeFileSync(output, out.join('\n'), 'utf8');
  console.error(`Wrote ${out.length} lines to ${output}`);
}

main().catch(e => { console.error('ERROR:', e.message); process.exit(1); });
