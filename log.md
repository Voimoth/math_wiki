# Wiki Log

> 所有 wiki 操作的时序记录。只追加。
> 格式:`## [YYYY-MM-DD] action | subject`
> Actions: ingest, update, query, lint, create, archive, delete
> 超过 500 条时轮换:重命名为 log-YYYY.md,重新开始。

## [2026-08-31] create | Wiki initialized
- Domain: 傅里叶分析学习(中法班数学系大二)
- 结构:SCHEMA.md, index.md, log.md, raw/, entities/, concepts/, comparisons/, queries/
- 下一步:搜索并摄入傅里叶级数第一批文献

## [2026-08-31] create | 傅里叶级数 wiki 首次构建
- 创建概念页 8 个:fourier-series, orthogonal-system, dirichlet-kernel, fejer-kernel, convergence-of-fourier-series, parseval-identity, gibbs-phenomenon, fourier-learning-path
- 创建实体页 2 个:stein-shakarchi-fourier-analysis, fourier-literature
- 文献策略:arXiv 前沿论文不适合入门,改用经典教材体系(Stein-Shakarchi 等)
- 网络情况:arXiv/SemanticScholar 可访问,维基百科被墙(zh:000)

## [2026-08-31] ingest | 本地讲义 fourier.pdf(殷浩)
- 用户提供 E:\书籍\ 本地资料库(fourier.pdf = 往届学长讲义,45页)
- 用 pdfjs-dist(Node) 提取全文(中文完整):raw/papers/fourier-讲义-full.txt,3862 行
- 创建实体页 fourier-handout-2026(主教材,含章节↔概念页映射表)
- 新建概念页 fourier-transform、fourier-applications
- 重写 fourier-learning-path(以讲义章节为推进单位)
- 更新 raw/papers/fourier-handout-2026.md(目录结构摘要)
- 发现:讲义覆盖到 Fourier 变换(第7-8章),超出原假设的"级数入门"范围

## [2026-08-31] create | 分离变量法概念页
- 用户开始学第1章,创建 concepts/separation-of-variables.md(方法五步 + 例1.3 + 三种边条件对照表)
- 关联 fourier-series、fourier-applications、fourier-handout-2026
- 计划:将 wiki 推上 GitHub 仓库备份(待用户提供认证 token)
