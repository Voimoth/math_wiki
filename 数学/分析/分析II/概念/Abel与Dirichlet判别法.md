---
title: Abel 与 Dirichlet 判别法
created: 2026-10-03
updated: 2026-10-03
type: concept
tags: [analysis, uniform-convergence, abel, dirichlet]
sources: [分析II笔记-上.md]
confidence: high
---

# Abel 与 Dirichlet 判别法

只讨论实变量的实值函数列（$[a,b]$ 上的函数 $a_n,b_n$）。

> [!note] Thm.（Abel / Dirichlet 判别法）
> 若满足以下之一，则 $\sum_{n\ge1}a_n(x)b_n(x)$ 在 $[a,b]$ 上一致收敛：
> - **Dirichlet**：部分和 $\sum_{n=1}^Na_n(x)$ 一致有界，且对每个固定 $x$，$b_n(x)$ 关于 $n$ 单调、当 $n\to\infty$ 时**一致**收敛到 $0$；
> - **Abel**：$\sum a_n(x)$ 一致收敛，且对每个固定 $x$，$b_n(x)$ 关于 $n$ 单调、**一致**有界。

> [!warning] 看清两个「一致」
> 「单调」是就哪个变量说的、「一致」是就哪个变量说的，都要对上。

> [!tip] 证明的关键：Abel 求和公式
> $$\sum_{k=n}^m a_kb_k=S_mb_m-S_{n-1}b_{n-1}+\sum_{k=n}^{m-1}S_k(b_k-b_{k+1}),\qquad S_k=\sum_{i\le k}a_i.$$
> 配合一致收敛的 Cauchy 判别法：在两种假设下分别证明 $\forall\varepsilon>0,\exists N,n,m>N$ 时上式一致小于 $\varepsilon$。本质上就是在数项级数证明的合适位置加上「一致」。

> [!example]
> $\sum_{n\ge1}\frac1n\cos(nx)$ 在 $[\delta,2\pi-\delta]$（$\delta>0$）上一致收敛：取 $a_n=\cos(nx)$，部分和 $\bigl|\sum_{n=1}^N\cos(nx)\bigr|=\bigl|\frac{\sin(Nx/2)\cos((N+1)x/2)}{\sin(x/2)}\bigr|\le\frac1{\sin(\delta/2)}$；$b_n=1/n$ 单调一致趋于 $0$。
> 但在 $(0,2\pi)$ 上**不**一致收敛：用 Cauchy 否命题，取 $\varepsilon=1/2,m=N+1,p=2N+3$ 使 $\sum_{n=m}^p\frac1n>1/2$，再令 $x\to0$ 得 $\sum_{n=m}^p\frac{\cos(nx)}n\to\sum_{n=m}^p\frac1n>1/2$，故存在 $x$ 破坏 Cauchy。

> [!example] 迭代积分方程
> $g:[0,1]\to\mathbb R$ 连续，$f_0=0$，$f_{n+1}(x)=g(x)+\int_0^xf_n(t)dt$。则 $(f_n)$ 一致收敛于连续 $f$ 且 $f(x)=g(x)+\int_0^xf(t)dt$。证明用 $u_n=f_n-f_{n-1}$：$u_1=g$ 有界，$|u_{n+1}|\le C\frac{x^n}{n!}$，故 $\sum u_n$ 正规收敛。

## 相关概念

- [[函数项级数的一致收敛]]
- [[Weierstrass判别法]]
- [[一致收敛级数的性质]]
- [[级数的渐近估计]]
