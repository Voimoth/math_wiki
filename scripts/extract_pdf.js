// PDF text extractor for text-based PDFs (LaTeX-generated) — zero deps, Node built-in zlib
// Usage: node extract_pdf.js input.pdf [output.txt]
const fs = require('fs');
const zlib = require('zlib');

const input = process.argv[2];
const output = process.argv[3] || input.replace(/\.pdf$/i, '.txt');
const buf = fs.readFileSync(input);

// Find all stream...endstream blocks
const streams = [];
const re = /stream\r?\n([\s\S]*?)\r?\nendstream/g;
let m;
while ((m = re.exec(buf.toString('latin1'))) !== null) {
  streams.push(Buffer.from(m[1], 'latin1'));
}
console.error(`Found ${streams.length} streams`);

function inflate(b) {
  try { return zlib.inflateSync(b); } catch (e) {}
  try { return zlib.inflateRawSync(b); } catch (e) {}
  return null;
}

let textOut = [];
let streamIdx = 0;
for (const s of streams) {
  streamIdx++;
  const dec = inflate(s);
  if (!dec) continue;
  const str = dec.toString('latin1');
  // Only process streams that look like content streams (contain BT/ET or Tj/TJ)
  if (!/BT|Tj|TJ|Tm|Td/.test(str)) continue;
  // Extract text-showing operators
  // Patterns: (string) Tj | [(a)(b)] TJ | <hex> Tj
  const ops = [];
  const opRe = /(?:\(((?:[^()\\]|\\.)*)\)\s*Tj|\[((?:[^\[\]\\]|\\.)*)\]\s*TJ|<([0-9a-fA-F\s]+)>\s*Tj)/g;
  let om;
  let line = '';
  while ((om = opRe.exec(str)) !== null) {
    if (om[1] !== undefined) {
      line += unescapePdf(om[1]);
    } else if (om[2] !== undefined) {
      const parts = om[2].match(/\(((?:[^()\\]|\\.)*)\)/g) || [];
      for (const p of parts) line += unescapePdf(p.slice(1, -1));
      line += ' '; // space between TJ segments
    } else if (om[3] !== undefined) {
      const hex = om[3].replace(/\s+/g, '');
      const bytes = hex.match(/.{2}/g) || [];
      line += Buffer.from(bytes.map(b => parseInt(b, 16)), 'binary').toString('latin1');
    }
  }
  if (line.trim()) textOut.push(line.trim());
}

function unescapePdf(s) {
  return s
    .replace(/\\\(/g, '(')
    .replace(/\\\)/g, ')')
    .replace(/\\\\/g, '\\')
    .replace(/\\n/g, '\n')
    .replace(/\\r/g, ' ')
    .replace(/\\t/g, ' ')
    .replace(/\\b/g, ' ')
    .replace(/\\f/g, ' ')
    .replace(/\\\d{1,3}/g, (m) => String.fromCharCode(parseInt(m.slice(1), 8)));
}

fs.writeFileSync(output, textOut.join('\n'), 'utf8');
console.error(`Wrote ${textOut.length} lines to ${output}`);
