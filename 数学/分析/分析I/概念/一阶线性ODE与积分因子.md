---
title: 一阶线性ODE与积分因子
created: 2026-10-03
updated: 2026-10-03
type: concept
tags: [analysis, analysis-I, zh]
sources: [分析I 课程笔记(本人手写扫描)]
confidence: medium
---

# 一阶线性ODE与积分因子

> [!note] 定义
> 设 $a,f$ 是区间 $I$ 上的连续函数，一阶线性常微分方程形如
> $$y' + a(x)\,y = f(x).$$
> $f$ 称为非齐次项（second membre）；$f\equiv 0$ 时称为齐次方程。求解前必须先把 $y'$ 的系数整理成 $1$。

> [!note] 齐次方程
> $y'+a(x)y=0$ 等价于 $(\ln y)'=-a(x)$，故
> $$y = Ce^{-\varphi(x)},\qquad \varphi(x)=\int_{x_0}^{x}a(t)\,dt .$$

> [!tip] 积分因子：为什么乘 $\mathrm{e}^{\varphi}$
> 目标是把左边凑成一个函数的导数。设两边同乘 $\mu$：
> $$\mu y' + a\mu y = (\mu y)' \iff \mu' = a\mu \iff (\ln\mu)' = a,$$
> 于是取 $\mu = \mathrm{e}^{\varphi}$（$\varphi$ 是 $a$ 的原函数）即可。此时
> $$(\mathrm{e}^{\varphi}y)' = \mathrm{e}^{\varphi}f(x),$$
> 再求一次原函数就得到 $y$。

> [!warning] 概念性陷阱
>
> - 积分因子 $\mathrm{e}^{\varphi}$ 处处非零，乘它不引入也不丢失解。
> - $\varphi=\int a$ 只在单个区间上有定义，跨过 $a$ 的奇点必须分区讨论。
> - 原函数相差一个常数只改变 $\mathrm{e}^{\varphi}y$ 的常数倍，不影响解集。

## 相关概念

- [[常数变易法]] — 有了齐次解，如何凑出非齐次的一个特解
- [[通解与特解]] — 解集为什么是「一个特解 + 齐次解」
- [[Gronwall不等式]] — 同一个积分因子技巧用在微分不等号上
- [[一阶线性ODE]] — 分析II 中同一主题
## 相关笔记

- [[18-常微分方程|分析I · 18-常微分方程]]
