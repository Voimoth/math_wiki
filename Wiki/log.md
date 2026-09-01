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

## [2026-08-31] create | 伽利略群概念页(理论力学开课)
- 用户开始学理论力学,提出"时空=四维仿射空间+时间函数+距离函数,伽利略群=保持二者的映射"——与 Arnold 公理化定义一致
- 创建 concepts/galilean-group.md:时空结构公理化、群定义、四子群10维表、与相对论对照
- 用户授权:数学/物理问答可直接更新 wiki,无需询问

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

## [2026-08-31] create | Fourier 引入方式对比页
- 用户问"物理路径是否真实历史",创建 comparisons/fourier-series-introductions.md
- 内容:历史真相(Euler/Bernoulli 前史、傅里叶 1807-1822)+ 四种引入路径对比(物理/正交投影/逼近论/群表示论)
- 已推送 GitHub(math_wiki 私有仓库,GCM 免密已配置)

## [2026-08-31] create | 分析II(下) 复习页
- 用户复习分析II级数,提取 分析II(1)(2).pdf 全文
- 创建 concepts/analysis2-review.md:全册因果链地图(幂级数→广义积分→含参积分→ODE)+ 控制收敛定理专题(尖峰反例、与6.19关系、证明思想、为何当时略证)
- 用户对控制收敛"没给证明"不熟,已补直觉:逐点+控制=几乎一致收敛=可交换极限
