# Wiki Schema

## Domain

傅里叶分析学习知识库 —— 面向中科大中法班数学系大二学生的傅里叶级数/傅里叶分析入门学习。
覆盖:傅里叶级数、正交系、收敛理论(Dirichlet/Fejér/L²)、傅里叶变换(后续)、以及相关分析基础。

## Conventions

- 文件名:小写、连字符、无空格(如 `fourier-series.md`)
- **页面内容语言:中文**(用户母语),数学术语保留英文原文以便检索(如 `pointwise convergence(逐点收敛)`)
- 每个 wiki 页以 YAML frontmatter 开头(见下)
- 页面之间用 `[[wikilinks]]` 互链(每页至少 2 条出链)
- 更新页面时务必更新 `updated` 日期
- 每个新页面必须加入 `index.md` 对应分区
- 每个操作必须追加到 `log.md`
- **来源标记(Provenance)**:综合 3+ 来源的页面,在段落末尾追加 `^[raw/papers/xxx.md]` 以便追溯
- 教育目的:概念页要包含「直觉」「证明要点」「学习提示」三部分,方便复习

## Frontmatter

```yaml
---
title: 页面标题
created: YYYY-MM-DD
updated: YYYY-MM-DD
type: entity | concept | comparison | query | summary
tags: [来自下方分类法]
sources: [raw/papers/xxx.md]
confidence: high | medium | low
contested: true   # 存在未解决矛盾时设置
---
```

### raw/ Frontmatter

```yaml
---
source_url: https://arxiv.org/abs/xxx
ingested: YYYY-MM-DD
sha256: <hex digest of the raw content body>
---
```

## Tag Taxonomy(本域标签)

- 主题: fourier-series, fourier-transform, convergence, orthogonal-system, harmonic-analysis, real-analysis, measure-theory
- 人物/机构: person, university, textbook
- 工具方法: proof-technique, computational, historical
- 元: comparison, learning-path, open-question

规则:页面上的每个标签必须出自此分类法。需要新标签时,先在此处添加,再使用。

## Page Thresholds

- **创建页面**:当概念/实体在 2+ 来源出现,或是一个来源的核心主题
- **追加已有页面**:来源提到已有覆盖的内容时
- **不要创建页面**:一笔带过的提及、微小细节、域外内容
- **拆分页面**:超过 ~200 行时拆分子主题并互链
- **归档页面**:内容被完全取代时移到 `_archive/`,从 index 移除

## Entity Pages(实体页)

每个重要实体一页(如经典教材、数学家、关键论文)。包含:
- 概述 / 是什么
- 关键事实与日期
- 与其他实体的关系([[wikilinks]])
- 来源引用

## Concept Pages(概念页)

每个概念/主题一页。包含:
- 定义 / 解释
- 直觉与几何图景
- 当前知识状态(该学什么、学到什么程度)
- 开放问题或常见误区
- 相关概念([[wikilinks]])
- 学习提示(针对中法班课程体系)

## Comparison Pages(对比页)

并排分析(如 Dirichlet 收敛 vs Fejér 收敛 vs L² 收敛)。包含:
- 比较什么、为什么
- 比较维度(优先表格)
- 结论或综合
- 来源

## Update Policy

新信息与已有内容冲突时:
1. 检查日期 —— 较新来源通常取代较旧的
2. 若确实矛盾,注明两种立场及日期、来源
3. 在 frontmatter 标记 `contradictions: [page-name]`
4. 在 lint 报告中标记供用户复核

## Learning Context(学习背景 — 重要)

用户:中科大中法班数学系大二。已有基础:
- 一元微积分(完整,含级数理论)
- 线性代数(完整)
- 抽象代数基础
- **尚未学习多元微积分、实变函数/测度论**

这意味着:
- 傅里叶级数入门完全可行(其核心只需要一元微积分 + 级数理论 + 内积空间直觉)
- 涉及 L² 理论时,优先用「正交投影 + 内积空间」的角度,而非测度论角度
- 法国体系路径:级数理论 → 傅里叶级数 → 傅里叶变换(后者需要更多分析基础,标记为后续目标)
