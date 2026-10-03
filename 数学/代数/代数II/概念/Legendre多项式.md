---
title: Legendre多项式（Polynômes de Legendre）
created: 2026-10-03
updated: 2026-10-03
type: concept
tags: [algebre, legendre, polynomes-orthogonaux, rodrigues]
sources: [代数 II 正课手写笔记]
confidence: medium
---

# Legendre多项式 (Polynômes de Legendre)

区间 $[-1,1]$ 上关于权 $w\equiv 1$ 的正交多项式族。由三项递推（Bonnet 公式）或 Rodrigues 公式显式给出，$L_n(1)=1$，是球坐标下 Laplace 方程分离变量的产物。

> [!tip] 为什么需要它
> 它是「$w\equiv 1$ 的最标准正交多项式」，是正交多项式理论的范本：显式公式（Rodrigues）、递推、正交性、根的分布一应俱全，也是 Gauss 数值积分与位势论的基础。

> [!note] 定义
> 在 $([-1,1],\ (f|g)=\int_{-1}^1 f(t)g(t)\,dt)$ 上由 $(1,X,X^2,\dots)$ 正交化得到的多项式族。常用归一化取 $L_0=1,\ L_1=x$，满足 $L_n(1)=1$。

> [!info] Bonnet 三项递推
> $$(n+1)L_{n+1}(x)-(2n+1)xL_n(x)+nL_{n-1}(x)=0.$$
> 一般地，首一正交族 $(Q_n)$ 满足
> $$Q_{n+2}=XQ_{n+1}-\frac{(n+1)^2}{(2n+1)(2n+3)}Q_n,\qquad Q_{n+2}\in\operatorname{Vect}(XQ_{n+1},Q_n).$$

> [!note] Rodrigues 公式
> $$Q_n=\frac{1}{2^nn!}\frac{d^n}{dx^n}(x^2-1)^n.$$

> [!info] 性质
> - 正交：$(L_m|L_n)=0\ (m\neq n)$；$(x\mapsto\tilde P_n(x))$ 与 $Q_n$ 正交。
> - $Q_n$ 与 $X^n$ 同奇偶；$\forall n\ge1$，$Q_n$ 在 $]-1,1[$ 内有 $n$ 个互异根。
> - $Q_n$ 是 Legendre 微分方程 $(x^2-1)y''+2xy'-n(n+1)y=0$ 的多项式解。

## 直觉

> [!tip] 想法
> Rodrigues 公式 $\frac{1}{2^nn!}\frac{d^n}{dx^n}(x^2-1)^n$ 说明：$(x^2-1)^n$ 的 $n$ 阶导数自动正交于所有低次多项式（因为低次多项式可写成导数），这正是正交性的来源。三项递推则反映「乘以 $X$ 只把阶数推高、推低各一阶」。

## 例子

> [!example] 例
> $L_0=1,\ L_1=x,\ L_2=\frac{3x^2-1}{2}$ 满足 Bonnet 递推与 $L_n(1)=1$；它们在 $[-1,1]$ 上两两正交。

## 陷阱

> [!warning] 易错
> - 「首一」与「标准归一化 $L_n(1)=1$」相差一个常数因子（$Q_n$ 首一，$L_n$ 满足 $L_n(1)=1$），不要混用两种归一化。
> - 正交区间是 $[-1,1]$；换区间或换权函数得到的是别的族（Chebyshev、Hermite 等）。
> - Rodrigues 公式里除的是 $2^nn!$，别漏因子。

## 相关概念
- [[正交多项式]]
- [[Schmidt正交化]]
- [[完全序列]]

## 相关笔记

- [[18-正交投影与正交多项式|代数II · 18-正交投影与正交多项式]]
