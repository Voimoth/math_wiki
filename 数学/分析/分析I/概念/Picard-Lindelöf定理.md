---
title: Picard-Lindelöf定理
created: 2026-10-03
updated: 2026-10-03
type: concept
tags: [analysis, analysis-I, zh]
sources: [分析I 课程笔记(本人手写扫描)]
confidence: medium
---

# Picard–Lindelöf 定理（存在唯一性）

> [!note] 定理
> 考虑初值问题
> $$\begin{cases} y'=f(x,y) \\ y(x_0)=y_0 \end{cases}$$
> $f$ 在矩形 $(x_0-a,\ y_0-b)\times(x_0+a,\ y_0+b)$ 内连续，且对 $y$ 满足 **Lipschitz 条件**
> $$|f(x,y_1)-f(x,y_2)|\leq L\,|y_1-y_2|,$$
> 则初值问题在 $x_0$ 附近存在唯一解。

> [!tip] 为什么：把微分方程变成不动点问题
> 方程等价于积分方程
> $$y(x)=y_0+\int_{x_0}^{x}f(t,y(t))\,dt,$$
> 定义算子 $T\varphi = y_0+\int_{x_0}^{x}f(t,\varphi(t))\,dt$，要找 $T\varphi=\varphi$ 的不动点。

> [!note] 证明要点（Picard 迭代）
> 令 $\varphi_0=y_0$，$\varphi_{n+1}=T\varphi_n$。Lipschitz 条件给出误差估计
> $$|\varphi_{n+1}-\varphi_n|\leq \frac{L^{n}M}{(n+1)!}|x-x_0|^{n+1},$$
> 由阶乘系数知 $(\varphi_n)$ 一致收敛到 $\varphi$，且 $T\varphi=\varphi$。
> 唯一性：两解之差 $|y_1-y_2|\leq L\int|y_1-y_2|$，令 $F=\int|y_1-y_2|$ 得 $F'\leq LF$，即 $(e^{-Lx}F)'\leq 0$，从而 $F\equiv 0$。

> [!warning] 概念性陷阱
> - Lipschitz 条件是**局部**的；仅仅连续（Peano）只能保证存在性，唯一性会失效。
> - 结论是局部的：解只在 $x_0$ 附近的某个区间上有保证。
> - 误差阶乘 $\frac{1}{(n+1)!}$ 是关键——它让迭代成为压缩型，保证收敛。

## 相关概念

- [[Gronwall不等式]] — 唯一性中 $(e^{-Lx}F)'\leq 0$ 那一步
- [[一阶线性ODE与积分因子]] — 线性方程可以用同样思路（甚至可写显式解）
- [[压缩映射与不动点]] — Picard 迭代的抽象框架
- [[Lipschitz函数]] — 定理的关键假设

## 相关笔记

- [[18-常微分方程|分析I · 18-常微分方程]]
