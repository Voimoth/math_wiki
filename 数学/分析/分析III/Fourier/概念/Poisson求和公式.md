---
title: Poisson求和公式
created: 2026-10-03
updated: 2026-10-03
type: concept
tags: [fourier-transform, summation, duality, 分析III]
sources: [fourier-讲义-2026-09-21.txt]
confidence: high
---

# Poisson 求和公式

> [!question] 本页要回答什么？
> 一个函数在整数点上的值之和，能否用它的 Fourier 变换在整数点上的值之和算出来？

## 定理

> [!note] Poisson 求和公式
> 设 $f\in S(\mathbb{R})$，则
> $$\sum_{n=-\infty}^{\infty}f(x+n)=\sum_{n=-\infty}^{\infty}\hat f(n)e^{2\pi inx}.$$
> 特别地，取 $x=0$：
> $$\sum_{n=-\infty}^{\infty}f(n)=\sum_{n=-\infty}^{\infty}\hat f(n).$$

## 证明要点

> [!tip]
> 左边的 $\sum_n f(x+n)$ 是**周期 1** 的函数，且因 $f$ 速降而极其正则（各级导数都一致收敛）。算它的第 $m$ 个 Fourier 系数：交换求和与积分、令 $y=x+n$，区间 $[n,n+1]$ 拼成整条实轴，恰好得到
> $$\int_0^1\sum_n f(x+n)e^{-2\pi imx}dx=\int_{-\infty}^{\infty}f(y)e^{-2\pi imy}dy=\hat f(m).$$
> 所以右边的 $\sum_n\hat f(n)e^{2\pi inx}$ 正是左边函数的 Fourier 级数，二者相等。

> [!tip] 对偶解读
> 公式把一侧的**周期化/求和**与另一侧的**采样/求和**配对：时域求和对应频域采样。这是 Fourier 分析里最基本的“对偶”之一。

> [!info] 逐点收敛的验证
> 要用“Fourier 级数收敛回原函数”这一步，需确认左边函数足够正则。在具体应用中（例如三角型核），可验证它连续可导从而满足 Dini 条件；验证逐项求导后级数一致收敛时，关键点在于 $\frac{\sin\pi t}{\pi t}$ 在 $t=0$ 是可去奇点、补值后光滑。

> [!example] 典型应用
> 由 $g(x)=\max(0,1-|x|)$ 的变换 $\hat g(\xi)=\left(\frac{\sin\pi\xi}{\pi\xi}\right)^2$ 与变换—逆变换对偶（取 $f=\hat g$ 则 $\hat f=g$），可算出
> $$\sum_{n=-\infty}^{\infty}\frac{1}{(n+\alpha)^2}=\frac{\pi^2}{\sin^2\pi\alpha},\qquad\alpha\notin\mathbb{Z}.$$

> [!info] 历史注记
> 公式可追溯到 Poisson 关于定积分与级数求和的论文（1823）。

## 概念性陷阱

> [!warning]
> 求和公式依赖对函数的正则性要求（速降是充分条件）；把它无条件地应用到一般可积函数需要额外论证。

## 相关概念

- [[傅里叶变换]]
- [[傅里叶逆变换]] — 与求和公式的对偶
- [[速降函数]] — 保证级数良好收敛
- [[热方程]] — 用求和公式联系两类热核
- [[Parseval恒等式]] — 另一类“求和与积分互换”的恒等式
