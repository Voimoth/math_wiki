---
title: Weierstrass 判别法（正规收敛）
created: 2026-10-03
updated: 2026-10-03
type: concept
tags: [analysis, uniform-convergence, comparison-test]
sources: [殷浩《分析 2》上册, 殷浩《分析 2》下册]
confidence: high
---

# Weierstrass 判别法（优级数判别法 / 正规收敛）

> [!note] 定义（正规收敛，convergence normale）
> $\sum u_n$ **正规收敛**，若每个 $u_n$ 有界，且数项级数 $\sum\|u_n\|_\infty$ 收敛。

> [!note] 定理（Weierstrass 判别法 / 优级数判别法）
> 若存在收敛的数项级数 $\sum M_n$ 使 $\forall n,\ \sup_A\|u_n\|\le M_n$，则 $\sum u_n$ 在 $A$ 上一致（且绝对）收敛。这正是「$\sum u_n$ 正规收敛 $\Rightarrow$ 一致收敛」。

**Preuve（要点）：** $\sum\|u_n\|_\infty$ 收敛故其部分和为 Cauchy 列，由三角不等式 $\bigl\|\sum_{k=m}^n u_k(x)\bigr\|\le\sum_{k=m}^n\|u_k\|_\infty<\varepsilon$ 对一切 $x$ 成立，即 $\sum u_n$ 一致 Cauchy，由 [[函数项级数的一致收敛]] 的 Cauchy 判别法得一致收敛。

## 用法与边界

> [!tip] 为什么好用
> 把「函数项级数的一致收敛」化归为「数项级数的收敛」：只需找与 $x$ 无关的控制项 $M_n$。这是判断一致收敛最常用的工具。

> [!warning] 正规收敛强于一致收敛
> 一致收敛不一定正规：一致收敛可以靠震荡抵消，而正规收敛要求不带震荡的绝对值一致收敛，还要求每个 $u_n$ 有界。绝对一致收敛也不蕴含正规收敛。

> [!example] 绝对一致收敛但不正规
> $[0,1]$ 上 $f_n(x)=n$（当 $x=1/n$）否则 $0$。$\sum f_n$ 绝对一致收敛，但不正规。

> [!example]
> 设 $\sum a_n$ 收敛（$a_n\ge0$），则 $f(x)=\sum a_n\sin(nx)$ 在 $[0,2\pi]$ 上正规收敛（$|a_n\sin(nx)|\le a_n$），故连续。
> $\lim_{x\to\infty}\sum_{n\ge0}\frac1{x^2+n^2}=0$：在 $[1,\infty)$ 上 $\frac1{x^2+n^2}\le\frac1{n^2}$，正规收敛，故可交换极限与求和。

## 相关概念

- [[函数项级数的一致收敛]]
- [[一致收敛级数的性质]]
- [[Abel与Dirichlet判别法]]
- [[Weierstrass逼近定理]]
- [[正项级数判别法]]（分析I）— M-判别把一致收敛化归数项级数收敛

## 相关笔记

- [[07-函数项级数|分析II · 07-函数项级数]]
- [[11-含参变量积分|分析II · 11-含参变量积分]]
