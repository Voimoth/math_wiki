---
title: 最速降线与Euler-Lagrange方程
created: 2026-10-03
updated: 2026-10-03
type: concept
tags: [analysis, analysis-I, zh]
sources: [分析I 课程笔记(本人手写扫描)]
confidence: medium
---

# 最速降线与 Euler–Lagrange 方程

> [!note] 变分问题
> 最速降线：求一条曲线 $y(x)$，使质点从点出发在重力下滑到另一点所用时间最短。由能量守恒 $\frac12 v^2=gy$ 与弧长元得
> $$T=\int_0^L \frac{\sqrt{1+(y')^2}}{\sqrt{2gy}}\,dx .$$
> 一般地，泛函形如 $T=\int_0^L F(y,y')\,dx$。

> [!note] Euler–Lagrange 方程
> 对泛函 $J[y]=\int_0^L F(y,y',x)\,dx$，在端点固定的变分下，极值曲线满足
> $$\frac{\partial F}{\partial y}-\frac{d}{dx}\left(\frac{\partial F}{\partial y'}\right)=0 .$$

> [!tip] 推导（变分法 / 分部积分）
> 取扰动 $y+t\varphi$（$\varphi$ 在端点为零），令 $\frac{d}{dt}\big|_{t=0}J[y+t\varphi]=0$：
> $$\int_0^L\left(\frac{\partial F}{\partial y}\varphi+\frac{\partial F}{\partial y'}\varphi'\right)dx=0
> \xrightarrow{\ \text{分部积分}\ } \int_0^L\left(\frac{\partial F}{\partial y}-\frac{d}{dx}\frac{\partial F}{\partial y'}\right)\varphi\,dx=0 .$$
> 因为 $\varphi$ 任意，被积函数必须为零，即得 Euler–Lagrange 方程。

> [!tip] Beltrami 恒等式（$F$ 不显含 $x$ 时的降阶）
> 若 $F=F(y,y')$ 不显含 $x$，则
> $$\frac{d}{dx}\left(F-y'\frac{\partial F}{\partial y'}\right)=y'\left(\frac{\partial F}{\partial y}-\frac{d}{dx}\frac{\partial F}{\partial y'}\right)=0,$$
> 故 $F-y'\frac{\partial F}{\partial y'}=C$：把二阶方程降成一阶。这正是最速降线的可用形式。

> [!warning] 概念性陷阱
>
> - 变分法的合法性依赖「分部积分 + $\varphi$ 任意」；端点条件（固定）是前提。
> - Beltrami 恒等式只在 $F$ 不显含自变量时成立，是 Euler–Lagrange 的一个特例，不是另一个方程。

## 相关概念

- [[偏导数与梯度]] — $\partial F/\partial y,\ \partial F/\partial y'$ 的含义
- [[通解与特解]] — 降阶后的一阶方程如何定常数
- [[最速降线]] — 同一变分问题的物理讲义版本
- [[欧拉-拉格朗日方程]] — 泛函极值条件的理论力学表述
- [[Beltrami 恒等式]] — F 不显含 x 时降阶，本页直接用到

## 相关笔记

- [[17-等周不等式与Wirtinger-Poincaré|分析I · 17-等周不等式与Wirtinger-Poincaré]]
- [[18-常微分方程|分析I · 18-常微分方程]]
