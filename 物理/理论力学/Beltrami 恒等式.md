---
title: Beltrami 恒等式
created: 2026-09-14
updated: 2026-10-03
type: concept
tags: [mechanics, calculus-of-variations]
confidence: high
---

# Beltrami 恒等式

> [!question] 问题
> 被积函数不显含自变量时，为什么可以直接得到一个积分守恒量，而不必解二阶方程？

## 陈述

> [!note] Beltrami 恒等式
> 若被积函数 $F(q, q')$ **不显含自变量**（例如 $F(q,q',t)$ 中的 $t$、或 $F(r,r',\theta)$ 中的 $\theta$），则极值曲线满足
> $$F - q'\frac{\partial F}{\partial q'} = \text{const} ,$$
> 即直接给出一个一阶首次积分，绕开解二阶欧拉-拉格朗日方程。

## 证明

欧拉-拉格朗日方程 $\partial_qF-\frac{d}{dt}\partial_{q'}F=0$ 两边乘 $q'$，得
$$q'\partial_qF-q'\frac{d}{dt}\partial_{q'}F=0 .$$
另一方面
$$\frac{dF}{dt}=\partial_tF+q'\partial_qF+q''\partial_{q'}F .$$
两式相减消去 $q''$ 项，得
$$\frac{d}{dt}\Big(F-q'\frac{\partial F}{\partial q'}\Big)=-\frac{\partial F}{\partial t} .$$
右端为零即得守恒量。

## 意义

> [!tip] 想法：这是"循环坐标"的变分版本
> Beltrami 恒等式与拉格朗日力学里"某个坐标不显含 ⇒ 共轭动量守恒"是同一件事的两面。看到被积函数缺一个变量，先想首次积分，别急着解二阶方程。

> [!warning] 陷阱：$q'$ 是自变量还是坐标，别混
> 恒等式里 $q'=\frac{dq}{dt}$，是"对自变量求导"。极坐标下若取 $\theta$ 为自变量，则 $r'=\frac{dr}{d\theta}$，式子变成 $F-r'\frac{\partial F}{\partial r'}=\text{const}$。**符号随自变量的取法而变，不能照抄。**

## 应用

长度泛函（[[测地线方程]]）、光程（[[费马原理]]）、时间泛函（[[最速降线]]）的共同工具。

> [!example] 旋转极小曲面（悬链面）
> 求连接两点的曲线 $y=y(x)$，使其绕 $x$ 轴旋转所得曲面面积最小。面积为
> $$\Sigma[y]=2\pi\int y\sqrt{1+y'^2}\,dx .$$
> 被积函数不显含 $x$，Beltrami 恒等式给出 $\dfrac{y}{\sqrt{1+y'^2}}=\text{const}$，解为**悬链线** $y=a\cosh\dfrac{x-b}{a}$，旋转所得曲面即**悬链面**（caténoïde）。

## 相关概念

- [[欧拉-拉格朗日方程]]
- [[费马原理]] — 光程泛函的首次积分是碰撞参数
- [[测地线方程]] — 度量不显含某坐标时直接得守恒量
- [[最速降线与Euler-Lagrange方程]] — 不显含自变量时的一阶积分，同属变分法
- [[旋转曲面]] — 旋转极小曲面（悬链面）是 Beltrami 恒等式的应用
