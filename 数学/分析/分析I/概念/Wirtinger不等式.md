---
title: Wirtinger不等式
created: 2026-10-03
updated: 2026-10-03
type: concept
tags: [analysis, analysis-I, inequality, zh]
sources: [分析I 课程笔记(本人手写扫描)]
confidence: medium
---

# Wirtinger 不等式

一类「一维 Poincaré 不等式」：均值为零、端点相同的函数的 $L^2$ 范数被其导数的 $L^2$ 范数控制，常数最佳。

> [!note] Lem (Wirtinger ineq.)
> 设 $f\in C^1[a,b]$ 且 $f(a)=f(b)$，$\int_a^b f(x)\,dx=0$，则
> $$\int_a^b f^2\,dx\le\frac{(b-a)^2}{4\pi^2}\int_a^b(f'(x))^2\,dx.$$
> 等号成立 $\iff f(x)=A\sin\frac{2\pi(x-a)}{b-a}+\mu\cos\frac{2\pi(x-a)}{b-a}$。

两个条件都不可少：$f(a)=f(b)$ 使 $f$ 可周期延拓；$\int_a^b f=0$（均值为零）去掉了常数项（否则 $f\equiv1$ 时右边为 $0$，不等式失败）。

## 为什么

取 $a=0,b=2\pi$。先由中值性：$\varphi(x)=f(x+\pi)-f(x)$ 满足 $\varphi(0)\varphi(\pi)=-(f(\pi)-f(0))^2\le0$，故有 $\theta$ 使 $f(\pi+\theta)=f(\theta)$（存在「半个周期的对称点」）。再令 $G(x)=(f'(x)-f'(0))^2\cot(x-\theta)$，由 $\cot$ 以 $\pi$ 为周期知 $G(2\pi)=G(0)$，于是 $\int_0^{2\pi}G'=0$。而
$$G'=-\left(f'-(f'-f'(0))\cot(x-\theta)\right)^2+f'^2-(f'-f'(0))^2,$$
代入并用 $\int_0^{2\pi}f'=f(2\pi)-f(0)=0$ 化简，得 $f'(0)=0$，等号条件化为 $f'=f'\cot(x-\theta)$，解出 $f=C\sin(x-\theta)$。

## 应用：等周不等式

把 [[等周不等式]] 的边界 $\sigma(t)=(x(t),y(t))$，$t\in[0,L]$（弧长参数）写成坐标函数。平移使其均值为零，则面积 $2S=\int(xy'-x'y)\,dt$，用 Cauchy–Schwarz 与 Wirtinger 分别控制 $\int(x'^2+y'^2)$ 与 $\int(x^2+y^2)$，得 $4S^2\le\frac{L^2}{4\pi^2}\left(\int(x'^2+y'^2)\,dt\right)^2$，即 $S\le\frac{L^2}{4\pi}$。这是「用一维不等式攻几何」的范例。

> [!warning] 陷阱
> 条件 $f(a)=f(b)$ 与 $\int f=0$ 是两个独立条件。$b-a$ 出现在常数 $\frac{(b-a)^2}{4\pi^2}$ 中，说明不等式对区间尺度敏感；换到 $[0,\pi]$ 时通过仿射变换 $\varphi(x)=f$ 的伸缩重新标准化。

## 相关概念

- [[Poincaré不等式]] — 同一类不等式的 Dirichlet 边界版本
- [[等周不等式]]
- [[傅里叶级数]] — 经典证明用傅里叶级数/正交展开

## 相关笔记

- [[17-等周不等式与Wirtinger-Poincaré|分析I · 17-等周不等式与Wirtinger-Poincaré]]
