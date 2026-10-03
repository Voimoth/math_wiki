---
title: Hölder不等式（inégalité de Hölder）
created: 2026-10-03
updated: 2026-10-03
type: concept
tags: [analysis, analysis-I, zh]
sources: [分析I 课程笔记(本人手写扫描)]
confidence: medium
---

# Hölder不等式（inégalité de Hölder）

## 定义

> [!note] Th.（离散形式）
> 设 $p,q>1$，$\frac1p+\frac1q=1$，$a_i,b_i\ge0$，则
> $$\sum_{i=1}^n a_ib_i\le\Big(\sum_{i=1}^n a_i^p\Big)^{\frac1p}\Big(\sum_{i=1}^n b_i^q\Big)^{\frac1q}.$$

> [!note] Th.（积分形式）
> 设 $f,g\in C([a,b],\mathbb{R})$，则
> $$\int_{[a,b]}|fg|\le\Big(\int_{[a,b]}|f|^p\Big)^{\frac1p}\cdot\Big(\int_{[a,b]}|g|^q\Big)^{\frac1q}.$$

## 证明要点

> [!tip] 归一化 + Young 求和
> 令 $\tilde a_i=\dfrac{a_i}{(\sum a_j^p)^{1/p}}$，$\tilde b_i=\dfrac{b_i}{(\sum b_j^q)^{1/q}}$，则 $\sum\tilde a_i^p=\sum\tilde b_i^q=1$。对每项用 [[Young不等式]]：
> $$\tilde a_i\tilde b_i\le\frac{\tilde a_i^p}p+\frac{\tilde b_i^q}q,$$
> 对 $i$ 求和，右端为 $\frac1p+\frac1q=1$，即得。积分形式完全平行：先用 Young 逐点控制，再对两边积分。

## 特例

- $p=q=2$ 即 Cauchy-Schwarz 不等式（见 [[积分不等式]]）：$\big|\sum a_ib_i\big|\le(\sum a_i^2)^{1/2}(\sum b_i^2)^{1/2}$。
- 已知一端的范数可估计另一端：$\|fg\|_1\le\|f\|_p\|g\|_q$。

## 概念性陷阱

- **共轭指数必须配对**：$p,q$ 满足 $\frac1p+\frac1q=1$；否则不等式不成立。
- **取绝对值**：积分形式中左端是 $\int|fg|$，若直接写 $\int fg$ 需要函数同号。
- **等号条件**：当且仅当 $|a_i|^p$ 与 $|b_i|^q$ 成比例（$a_i^p=c\,b_i^q$）时取等。
- **归一化步骤不能省**：直接对未归一化的 $a_ib_i$ 用 Young 会得到带 $\sum a_j^p$、$\sum b_j^q$ 的项，必须整体除以乘积才能化到 $1$。

## 相关概念

- [[Young不等式]] — 证明工具
- [[Minkowski不等式]] — 由 Hölder 导出
- [[积分不等式]] — 积分版 Cauchy-Schwarz
