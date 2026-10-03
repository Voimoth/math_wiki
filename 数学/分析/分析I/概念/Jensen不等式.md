---
title: Jensen不等式（inégalité de Jensen）
created: 2026-10-03
updated: 2026-10-03
type: concept
tags: [analysis, analysis-I, zh]
sources: [分析I 课程笔记(本人手写扫描)]
confidence: medium
---

# Jensen不等式（inégalité de Jensen）

## 定义

> [!note] Th.（Jensen）
> 设 $f:I\to\mathbb{R}$ 凸，$x_1,\dots,x_n\in I$，$\lambda_i\in[0,1]$，$\sum_{i=1}^n\lambda_i=1$，则
> $$f\Big(\sum_{i=1}^n\lambda_i x_i\Big)\le\sum_{i=1}^n\lambda_i f(x_i).$$

## 证明要点

> [!tip] 凸性定义的归纳
> $n=2$ 即凸性定义本身。设 $n$ 成立，把 $n+1$ 项的凸组合 $\sum_{i=1}^{n+1}\lambda_ix_i$ 先写成 $\lambda_{n+1}x_{n+1}+(1-\lambda_{n+1})\big(\sum_{i=1}^n\frac{\lambda_i}{1-\lambda_{n+1}}x_i\big)$，用 $n=2$ 的凸性，再对内部 $n$ 项用归纳假设。注意归一化：$\sum_{i=1}^n\frac{\lambda_i}{1-\lambda_{n+1}}=1$。

## 用途

- 是凸性最一般的有限形式，直接导出大量经典不等式：
  - 取 $f=-\ln x$（凸）并令 $\lambda_i=1/n$，得**算术-几何平均不等式** $(x_1\cdots x_n)^{1/n}\le\frac{x_1+\cdots+x_n}{n}$。
  - 在两项情形与合适函数上，可导出 [[Young不等式]]。
- 凸可导函数的切线不等式 $f(x)\ge f(x_0)+f'(x_0)(x-x_0)$ 可视为 Jensen 的连续版本。

## 概念性陷阱

- **权必须非负且和为 $1$**（凸组合），否则结论一般不成立。加权重心若允许负权，凸性论证失效。
- **方向由凸性决定**：凸函数给「$\le$」，凹函数给「$\ge$」；换函数时要重判。
- **需要凸性在整个区间成立**（$x_i$ 之间），不只是端点。

## 相关概念

- [[凸函数]] — 定义与等价刻画
- [[Young不等式]] — 由 $-\ln$ 的凸性导出
- [[Hölder不等式]] — 由 Young 导出
