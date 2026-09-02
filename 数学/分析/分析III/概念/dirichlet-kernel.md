---
title: Dirichlet 核
created: 2026-08-31
updated: 2026-09-02
type: concept
tags: [fourier-series, convergence, proof-technique]
sources: [Fourier-合并笔记-2026-09-02.md]
confidence: high
---

# Dirichlet 核 (Dirichlet Kernel)

## 定义

设 $f$ 的 Fourier 部分和为 $S_N(x)=\\frac{a_0}{2}+\\sum_{n=1}^{N}(a_n\\cos nx+b_n\\sin nx)=\\sum_{n=-N}^{N}C_n e^{inx}$。把 $C_n$ 代入并交换求和与积分,括号内是等比级数。令 $u=x-t$,记

$$D_N(u)=\\sum_{n=-N}^{N}e^{inu}=\\frac{e^{i(N+1)u}-e^{-iNu}}{e^{iu}-1}=\\frac{\\sin(N+\\tfrac12)u}{\\sin\\tfrac u2}$$

称 $D_N$ 为 **Dirichlet 核**。(亦可写为 $D_N(t)=1+2\\sum_{n=1}^{N}\\cos(nt)$。)

## 核心作用:部分和的卷积表示

部分和可写成以 $D_N$ 为权的卷积:

$$\\boxed{S_N(x)=\\frac{1}{2\\pi}\\int_{-\\pi}^{\\pi} f(t)D_N(x-t)\\,dt=\\frac{1}{2\\pi}\\int_{-\\pi}^{\\pi} f(x-s)D_N(s)\\,ds}$$

> 整个点态收敛理论的出发点——**研究 $S_N$ 收敛 ⟺ 研究卷积核 $D_N$ 的行为**。利用周期性把 $f$ 延拓到 $\\mathbb{R}$,再用 $D_N$ 为偶函数得 $S_N(x)=\\frac{1}{2\\pi}\\int_0^\\pi\\bigl[f(x-s)+f(x+s)\\bigr]D_N(s)\\,ds$。

## 关键性质

1. **周期性与偶性**:$D_N$ 是 $2\\pi$-周期、偶函数。
2. **归一化**:$\\frac{1}{2\\pi}\\int_{-\\pi}^{\\pi}D_N(t)\\,dt=1$(\"核的总质量为 1\")。这是 Dini 定理证明的出发点。
3. **符号振荡与 $L^1$ 范数**:$D_N$ 取正负值,$\\int|D_N| \\sim \\log N \\to \\infty$。事实上(Lebesgue 常数,见 [[convergence-of-fourier-series]]):$L_n=\\frac{1}{2\\pi}\\int|D_n|=\\frac4{\\pi^2}\\log n+O(1)$。这是点态收敛不平凡的根源。
4. **主瓣集中**:$N$ 增大时 $D_N$ 主峰高($\\sim 2N+1$)变尖(宽 $\\sim \\frac{2\\pi}{N+1/2}$)、旁瓣高频振荡。$u=0$ 附近 $D_N(u)\\approx\\frac{\\sin(Nu)}{u}$。\"集中到 0 附近\"是收敛的直觉,但负瓣振荡造成困难。

## 直觉

- $S_N(f)(x)$ = 以 $x$ 为中心、用 $D_N$ 加权平均 $f$。$N$ 越大,$D_N$ 越\"尖\"、越集中在 $x$ 附近。
- 如果 $D_N$ 非负,一切会简单(像概率密度),可惜它振荡、$L^1$ 范数发散——所以点态收敛需要额外条件(见 [[convergence-of-fourier-series]] 的 Dini 条件与 Dirichlet-Jordan 判别;振荡的副作用则体现为 [[gibbs-phenomenon]])。

## 证明要点

- 从 $S_N(x)=\\sum_{n=-N}^{N}C_n e^{inx}$ 出发,代入 $C_n$ 定义,交换求和与积分即得卷积形式。交换的合法性依赖有限和。
- 闭式表达式:$\\sum_{n=-N}^{N}e^{int}=e^{-iNt}\\frac{1-e^{i(2N+1)t}}{1-e^{it}}$,分子分母同乘 $e^{-it/2}$ 化简得分式形式。
- **局限**:$D_N$ 有符号、$\\int|D_N|$ 发散,故点态收敛需 Dini/Dirichlet-Jordan 等额外条件。这是后续 Cesàro/Abel 求和要处理的困难(见 [[convergence-of-fourier-series]] 的 Zygmund 注记与衔接说明)。

## 相关概念

- [[fourier-series]] — 部分和的定义来源
- [[convergence-of-fourier-series]] — 卷积核视角的收敛定理
- [[gibbs-phenomenon]] — $D_N$ 的振荡副作用
