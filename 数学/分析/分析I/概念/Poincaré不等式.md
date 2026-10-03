---
title: Poincaré不等式
created: 2026-10-03
updated: 2026-10-03
type: concept
tags: [analysis, analysis-I, inequality, zh]
sources: [分析I 课程笔记(本人手写扫描)]
confidence: medium
---

# Poincaré 不等式

端点取零的函数，其 $L^2$ 范数被导数的 $L^2$ 范数控制，最佳常数为 $1$。

> [!note] Th (Poincaré ineq.)
> 设 $f\in C^1[0,\pi]$，$f(0)=f(\pi)=0$，则
> $$\int_0^\pi f^2(x)\,dx\le\int_0^\pi(f'(x))^2\,dx.$$

## 为什么

关键是把 $f$ 写成 $f=\varphi\sin x$，即令 $\varphi(x)=\frac{f(x)}{\sin x}$（端点条件保证 $\varphi$ 在 $]0,\pi[$ 内有界、可微）。于是
$$f'^2-f^2=(\varphi'\sin x+\varphi\cos x)^2-\varphi^2\sin^2 x=\varphi'^2\sin^2 x+\varphi^2\cos^2 x+\varphi\varphi'\sin2x-\varphi^2\sin^2 x.$$
在 $[\varepsilon,\pi-\varepsilon]$ 上积分；含 $\varphi\varphi'\sin 2x$ 与 $\varphi^2\cos 2x$ 的两项正好凑成 $\frac12\varphi^2\sin 2x$ 的边界项（分部积分），即
$$\int_\varepsilon^{\pi-\varepsilon}(f'^2-f^2)\,dx=\int_\varepsilon^{\pi-\varepsilon}\varphi'^2\sin^2 x\,dx+\frac12\varphi^2\sin2x\Big|_\varepsilon^{\pi-\varepsilon}\ \longrightarrow\ \int_0^\pi\varphi'^2\sin^2 x\,dx\ \ge0,$$
令 $\varepsilon\to0$ 即得。等号当且仅当 $\varphi'\equiv0$，即 $f=C\sin x$。

## 概念要点

- 与 [[Wirtinger不等式]] 是同一族不等式：都把函数的 $L^2$ 范数限制在导数的 $L^2$ 范数上。差别在边界条件——Wirtinger 要求 $f(a)=f(b)$ 且均值为零；Poincaré 要求 $f$ 在两个端点取零（Dirichlet 条件）。在 $[0,\pi]$ 上二者给出的常数都是 $1$。
- **变分解释**：最佳常数是 $\inf_{f\ne0}\frac{\int f'^2}{\int f^2}$（$f\in H_0^1(0,\pi)$）。设 $u$ 取到极小，则 $L(f)=\frac{\int f'^2}{\int f^2}$ 在 $u$ 处的一阶变分为零，推出
$$-\lambda u-u''=0,$$
即极小函数是 $-u''=\lambda u$ 的特征函数。这是「不等式最佳常数 = 特征值」的最简单例子。

> [!warning] 陷阱
> 端点条件 $f(0)=f(\pi)=0$ 不可省。没有它，$f\equiv$ 常数给出 $\int f^2>0$ 而 $\int f'^2=0$，不等式失效。常数是 $1$（在 $[0,\pi]$ 上），换区间要乘以区间长度平方的相应因子。

## 相关概念

- [[Wirtinger不等式]]
- [[等周不等式]]
