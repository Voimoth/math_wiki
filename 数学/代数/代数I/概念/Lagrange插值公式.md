---
title: Lagrange 插值公式（interpolation de Lagrange）
created: 2026-10-03
updated: 2026-10-03
type: concept
tags: [algebre, polynomes, interpolation]
sources: [代数 I 正课手写笔记]
confidence: medium
---

# Lagrange 插值公式

为什么需要它：给定若干个点，是否存在次数受限的多项式恰好取指定的值？Lagrange 用一组「几乎处处为 $0$」的基多项式给出了存在且唯一的构造。

> [!note] 引理（lemme）
> 设 $n\in\mathbb{N}^*$，$x_1,\dots,x_n\in K$ 两两互异。则对每个 $i$，存在唯一的 $L_i\in K[X]$，$\deg L_i=n-1$，使
> $$L_i(x_j)=\delta_{ij}=\begin{cases}1,&i=j,\\0,&i\neq j.\end{cases}$$

> [!tip] 直觉
> $L_i$ 是指示函数的多项式版本：它在 $x_i$ 处取 $1$，在其余 $x_j$ 处取 $0$。构造方式是
> $$L_i=\frac{\prod_{j\neq i}(X-x_j)}{\prod_{j\neq i}(x_i-x_j)},$$
> 分母非零正来自 $x_j$ 两两互异。

> [!note] 命题（proposition）
> 设 $n\in\mathbb{N}^*$，$a_1,\dots,a_n\in K$，$x_1,\dots,x_n\in K$ 两两互异。则存在唯一的 $P\in K_{n-1}[X]$ 使 $P(x_i)=a_i$（$i=1,\dots,n$），即 $P=\sum_i a_iL_i$。

> [!example]
> 唯一性来自根的计数：两个解之差是次数 $<n$ 却至少有 $n$ 个根的多项式，只能为 $0$。这与「$K[X]$ 上中国剩余定理」是同一现象。

> [!warning] 陷阱
> 结论依赖 $x_i$ 两两互异与 $K$ 是域；在一般交换环上分母可能不可逆。此外它只保证**次数 $<n$** 的唯一解，次数更高的插值多项式不唯一（可加 $\prod(X-x_i)$ 的倍数）。

## 相关概念

- [[多项式函数]]
- [[Euclide除法]]
- [[中国剩余定理]]
- [[根与重数]]
