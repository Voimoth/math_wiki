---
title: Schwarzschild时空中的测地线
created: 2026-10-03
updated: 2026-10-03
type: concept
tags: [mechanics, general-relativity, geodesic, black-hole]
confidence: high
---

# Schwarzschild 时空中的测地线（géodésiques de Schwarzschild）

> [!question] 问题
> 在弯曲时空中，自由粒子怎么运动？"守恒量 + 有效势"这套有心力框架如何推广到广义相对论？

## 拉格朗日量与测地线

检验粒子沿测地线运动，即变分（见 [[测地线方程]]）
$$L=\frac12 g_{\mu\nu}\dot x^\mu\dot x^\nu,\qquad \dot x^\mu=\frac{dx^\mu}{d\tau},$$
其中 $\tau$ 为原时。Schwarzschild 坐标 $(t,r,\theta,\phi)$ 下
$$L=-\frac12\Big(1-\frac{2GM}{r}\Big)\dot t^2+\frac12\Big(1-\frac{2GM}{r}\Big)^{-1}\dot r^2+\frac12 r^2\dot\theta^2+\frac12 r^2\sin^2\theta\,\dot\phi^2 .$$
对类时粒子归一化为 $g_{\mu\nu}\dot x^\mu\dot x^\nu=-1$（光为 $0$）。

## 循环坐标直接给出两个守恒量

$L$ **不显含 $t$ 与 $\phi$**，各给一个首次积分（循环坐标；与 [[Beltrami 恒等式]] 同源）：
$$E=\Big(1-\frac{2GM}{r}\Big)\dot t\quad(\text{能量积分}),\qquad L_\phi=r^2\sin^2\theta\,\dot\phi\quad(\text{角动量积分}).$$

## 赤道面稳定性

$\theta=\pi/2,\ \dot\theta=0$ 满足 $\theta$ 的欧拉-拉格朗日方程，且 $\theta$ 方程含 $\cos\theta$ 因子，使偏离赤道面的运动被拉回，故运动可**始终限制在赤道面内**。取 $\theta=\pi/2$ 后只剩 $(t,r,\phi)$。

## 有效势

由归一条件消去 $\dot t,\dot\phi$，得径向方程
$$\dot r^2=E^2-\underbrace{\Big(1-\frac{2GM}{r}\Big)\Big(1+\frac{L_\phi^2}{r^2}\Big)}_{V_{\text{eff}}(r;L_\phi)} .$$
与牛顿模型（[[中心力场与有效势]]）相比，$V_{\text{eff}}$ 多出 $\propto 1/r^3$ 的相对论修正项，于是：

- $L_\phi>2\sqrt3\,GM$ 时 $V_{\text{eff}}$ 有**局部极大**（不稳定圆轨道）与**局部极小**（稳定圆轨道）；两个极值随 $L_\phi$ 减小而靠拢；
- $L_\phi=2\sqrt3\,GM$ 时曲线出现**拐点**（两个极值合并），半径 $r=6GM$，即最内稳定圆轨道 ISCO；更小的 $L_\phi$ 不再有稳定圆轨道；
- 局部极大高度等于 $1$（即 $E=1$）对应另一条临界曲线（边际束缚轨道）。

## 相对论版比内方程

令 $u=GM/r$（无量纲），由 $\dot r$ 方程改写成对 $\phi$ 的方程，得
$$\frac{d^2u}{d\phi^2}+u=\frac{GM}{L_\phi}+3u^2 .$$
右边 $3u^2$ 是纯 GR 项（太阳系中为二阶小量），它使轨道不再精确闭合，产生**近日点进动**（见 [[轨道进动]]）。

## 原时与坐标时

沿自由落体的测地线，原时 $\tau$ 是钟的实际读数（不变量），坐标时 $t$ 依赖坐标选择：
$$g_{\mu\nu}\dot x^\mu\dot x^\nu=-1\ \Longrightarrow\ \frac{dt}{d\tau}=\frac{E}{1-2GM/r}.$$
对从无穷远自由下落（$E=1$），径向原时 $\tau(r)$ 有限，而坐标时 $t(r)$ 在视界 $r=2GM$ 附近对数发散。概念要点：**原时是几何量，坐标时不是。**

> [!warning] 陷阱
> $1-2GM/r$ 在 $r=2GM$ 处为零：$(t,r)$ 坐标在该处奇异，但这是**坐标奇点**（曲率有限），不是物理奇点。判物理奇点要看曲率不变量。

## 相关概念

- [[测地线方程]] — 变分给出的测地线定义
- [[中心力场与有效势]] — 同一"守恒量 + 有效势"框架的牛顿版本
- [[轨道方程与比内公式]] — 比内方程与其 GR 推广
- [[轨道进动]] — $3u^2$ 项导致的近日点进动
- [[仿射参数]] — 原时作为测地线的仿射参数
