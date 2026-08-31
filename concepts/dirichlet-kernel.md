---
title: Dirichlet 核
created: 2026-08-31
updated: 2026-08-31
type: concept
tags: [fourier-series, convergence, proof-technique]
sources: []
confidence: high
---

# Dirichlet 核 (Dirichlet Kernel)

## 定义

$$D_N(t) = \sum_{n=-N}^{N} e^{int} = 1 + 2\sum_{n=1}^{N}\cos(nt)$$

闭式表达式(几何级数求和):

$$D_N(t) = \frac{\sin\bigl((N+\tfrac{1}{2})t\bigr)}{\sin(t/2)}$$

## 核心作用:部分和的卷积表示

傅里叶级数第 $N$ 个部分和可写成**卷积**:

$$S_N(f)(x) = \frac{1}{2\pi}\int_{-\pi}^{\pi} f(x-t)\,D_N(t)\,dt = (f * D_N)(x)$$

这是整个点态收敛理论的出发点——**研究 $S_N$ 收敛 ⟺ 研究卷积核 $D_N$ 的行为**。

## 关键性质

1. **周期性与偶性**:$D_N$ 是 $2\pi$-周期偶函数。
2. **归一化**:$\frac{1}{2\pi}\int_{-\pi}^{\pi}D_N(t)\,dt = 1$("核的总质量为 1")。
3. **符号振荡**:$D_N$ 取正负值,$\int|D_N| \sim \log N \to \infty$——这是点态收敛不平凡的根源(Du Bois-Reymond 发散例的机制)。
4. **主瓣**:$t=0$ 附近 $D_N(t) \approx \frac{\sin(Nt)}{t}$,主峰高约 $2N+1$,宽约 $1/N$——"集中到 0 附近"是收敛的直觉,但负瓣振荡造成困难。

## 直觉

- $S_N(f)(x)$ = 以 $x$ 为中心、用 $D_N$ 加权平均 $f$。$N$ 越大,$D_N$ 越"尖"、越集中在 $x$ 附近。
- 如果 $D_N$ 非负,一切会简单(像概率密度),可惜它振荡——所以点态收敛需要额外条件([[convergence-of-fourier-series]] 的 Dirichlet-Jordan 定理)。

## 证明要点

- 从 $S_N(f) = \sum_{n=-N}^{N}\hat{f}(n)e^{inx}$ 出发,代入 $\hat{f}$ 定义,交换积分求和即得卷积形式。
- 闭式表达式:$\sum_{n=-N}^{N}e^{int} = e^{-iNt}\frac{1-e^{i(2N+1)t}}{1-e^{it}}$,分子分母同乘 $e^{-it/2}$ 化简。

## 学习提示

- 中法班常把卷积处理放前面(先讲卷积与逼近恒等式的抽象框架,再特化到 $D_N$、$F_N$)。如果你课上已讲卷积,这里会很顺。
- 常见误区:混淆 $D_N$ 与 [[fejer-kernel]] $F_N$。核心区别:$D_N$ 有符号、积分绝对值发散;$F_N$ 非负、$L^1$ 范数有界。**$F_N$ 好处理,这也是 Cesàro 平均的威力来源**。
- 记住 $S_N = f * D_N$ 和 $\sigma_N = f * F_N$ 这对公式,收敛理论一大半题都靠它们。

## 相关概念

- [[fourier-series]] — 部分和的定义来源
- [[fejer-kernel]] — 正核的补救方案
- [[convergence-of-fourier-series]] — 卷积核视角的收敛定理
- [[gibbs-phenomenon]] — $D_N$ 的振荡副作用
