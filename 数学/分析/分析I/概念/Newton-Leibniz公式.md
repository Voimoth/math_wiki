---
title: Newton-Leibniz公式（formule de Newton-Leibniz）
created: 2026-10-03
updated: 2026-10-03
type: concept
tags: [analysis, analysis-I, zh]
sources: [分析I 课程笔记(本人手写扫描)]
confidence: medium
---

# Newton-Leibniz公式（formule de Newton-Leibniz）

## 定义

> [!note] Th.（变上限积分）
> 设 $f:I\to\mathbb{R}$ 连续，$a\in I$，则 $\Phi(x)=\int_a^xf(t)\,\mathrm dt$ 是 $f$ 的一个原函数，并且是唯一在 $a$ 处取 $0$ 的原函数：
> $$\Phi'(x)=\lim_{h\to0}\frac1h\int_x^{x+h}f(t)\,\mathrm dt=f(x).$$

> [!note] Th.（Newton-Leibniz，连续情形）
> $f:I\to\mathbb{R}$ 连续，$F'=f$，则
> $$\int_a^bf(x)\,\mathrm dx=F(b)-F(a).$$

> [!note] Th.（Newton-Leibniz，可积 + 有原函数）
> 设 $f\in R([a,b])$ 且有原函数 $F$，则 $\int_a^bf(x)\,\mathrm dx=F(b)-F(a)=F(x)\big|_a^b$。

## 证明要点

> [!tip] 用 Riemann 和与振幅和
> 取分割 $x_0=a<\dots<x_n=b$，对 $F(b)-F(a)=\sum(F(x_i)-F(x_{i-1}))$ 逐段用 [[中值定理]] 代入 $F'(\xi_i)$，与上 Darboux 和比较：
> $$\Big|F(b)-F(a)-\sum M_i\Delta x_i\Big|\le\sum(M_i-m_i)\Delta x_i\to0,$$
> 由 $f$ 的可积性右端趋于 $0$，故 $F(b)-F(a)=\lim\sum M_i\Delta x_i=\int_a^bf$。

## 变限积分

> [!note] Cor.
> $f$ 连续，$\alpha,\beta$ 可导，则 $g(x)=\int_{\alpha(x)}^{\beta(x)}f(t)\,\mathrm dt$ 可导，且
> $$g'(x)=f(\beta(x))\beta'(x)-f(\alpha(x))\alpha'(x).$$

> [!example]
> 取 $f(t)=1/t$，由变上限积分可定义 $\ln x=\int_1^x\frac{\mathrm dt}t$，它是唯一满足 $f'=1/x$、$f(1)=0$ 的函数。

## 概念性陷阱

- **可积不蕴含有原函数**：阶梯（阶跃）函数 Riemann 可积，但不存在 $F$ 使 $F'=f$（否则导函数会满足 Darboux 介值性质，见 [[Darboux定理]]）。两个版本的 N-L 公式正是为区分「连续」与「可积 + 有原函数」两种情形。
- **原函数相差常数**：$\Phi(x)$ 是「在 $a$ 取 $0$」的原函数，其他原函数差一个常数，N-L 公式中常数抵消。
- **定积分与不定积分不是同一件事**：定积分是一个数（面积），原函数是函数族。

## 相关概念

- [[Riemann可积性]] — 定积分的严格定义
- [[中值定理]] — 证明工具
- [[Darboux定理]] — 说明为何二者版本不同
- [[分部积分]]、[[变量替换]] — 计算定积分的两大工具
- [[向量值函数的积分]] — 公式推广到向量值积分

## 相关笔记

- [[09-积分的计算与中值定理|分析I · 09-积分的计算与中值定理]]
