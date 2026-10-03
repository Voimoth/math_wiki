---
title: Young不等式（inégalité de Young）
created: 2026-10-03
updated: 2026-10-03
type: concept
tags: [analysis, analysis-I, zh]
sources: [分析I 课程笔记(本人手写扫描)]
confidence: medium
---

# Young不等式（inégalité de Young）

## 定义

> [!note] Th.（Young）
> 设 $p,q>1$ 满足共轭关系 $\dfrac1p+\dfrac1q=1$，则对 $a,b\ge0$，
> $$ab\le\frac{a^p}p+\frac{b^q}q.$$
> 等号当且仅当 $a^p=b^q$。

## 证明要点

> [!tip] 用 $-\ln$ 的凸性
> $f(x)=-\ln x$ 满足 $f''(x)=1/x^2>0$，故凸。由 $f$ 的凸性（[[Jensen不等式]] 两项情形），
> $$f\!\left(\frac{a^p}{p}+\frac{b^q}{q}\right)\le\frac1pf(a^p)+\frac1qf(b^q)=-\ln a-\ln b,$$
> 两边取指数（注意 $-\ln$ 递减）得 $ab\le\frac{a^p}p+\frac{b^q}q$。这是「加权平均的几何平均不大于几何平均」的一种落地。

## 用途

- 是 [[Hölder不等式]] 与 [[Minkowski不等式]] 的出发点：Hölder 的证明就是把 Young 逐项施用后再求和。
- 特例 $p=q=2$ 给出 $2ab\le a^2+b^2$（AM-GM 的两项情形），是大量估计的基础。

## 概念性陷阱

- **共轭指数条件 $\frac1p+\frac1q=1$ 不可忘**：$p$ 与 $q$ 一一对应，$p\to$ 哪一端由等号条件 $a^p=b^q$ 决定。
- **$a,b\ge0$**：$-\ln$ 只对正数定义，负值无意义；通常配合绝对值使用（如 $\int|fg|$ 的估计）。
- **方向与等号**要记牢：$\le$，等号在 $a^p=b^q$ 时取到。

## 相关概念

- [[Hölder不等式]] — 直接应用
- [[Jensen不等式]] — 凸性形式
- [[凸函数]] — $-\ln$ 的凸性

## 相关笔记

- [[07-高阶导数与凸函数|分析I · 07-高阶导数与凸函数]]
- [[08-积分|分析I · 08-积分]]
