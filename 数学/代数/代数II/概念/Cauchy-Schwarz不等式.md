---
title: Cauchy-Schwarz不等式（Inégalité de Cauchy-Schwarz）
created: 2026-10-03
updated: 2026-10-03
type: concept
tags: [algebre, cauchy-schwarz, inegalite, norme]
sources: [代数 II 正课手写笔记]
confidence: medium
---

# Cauchy-Schwarz不等式 (Inégalité de Cauchy-Schwarz)

$|(x|y)|\le\|x\|\,\|y\|$：数量积被范数乘积控制住。它是三角不等式、Bessel 不等式的源头，也是「夹角余弦」$\frac{(x|y)}{\|x\|\|y\|}$ 落在 $[-1,1]$ 的根据。

> [!tip] 为什么需要它
> 它把「内积」和「长度」定量地联系起来，从而能证明欧氏范数满足三角不等式（进而是一个范数），并给出功能分析里一切基本估计的原型，如积分形式 $\bigl|\int fg\bigr|\le\sqrt{\int f^2}\sqrt{\int g^2}$。

> [!note] 定理
> 设 $E$ 为预 Hilbert 空间，则 $\forall(x,y)\in E^2$：
> $$\bigl|(x|y)\bigr|\le\|x\|\,\|y\|.$$
> 取等 $\iff$ $x$ 与 $y$ 共线（即 $\exists\lambda\in\mathbb{R},\ y=\lambda x$ 或 $x=\lambda y$）。

> [!note] 证明要点
> 对 $y\neq 0$ 考察 $\lambda\mapsto\|x+\lambda y\|^2=\|x\|^2+2\lambda(x|y)+\lambda^2\|y\|^2\ge 0$，其判别式 $\le 0$ 即得不等式。共线时判别式为 $0$。

> [!example] 例
> $f,g\in\mathcal{C}([a,b],\mathbb{R})$：
> $$\left|\int_a^b f(t)g(t)\,dt\right|\le\sqrt{\int_a^b f^2(t)\,dt}\ \sqrt{\int_a^b g^2(t)\,dt}.$$

## 直觉

> [!tip] 想法
> 「在 $x$ 上叠加 $y$ 的方向」得到一族长度平方非负的二次函数；非负二次函数判别式非正，正是内积被范数夹住的代数写照。取等即二次函数与横轴相切，意味着 $x$ 落在 $y$ 张成的直线上。

## 陷阱

> [!warning] 易错
> - 取等条件写作「$x,y$ 共线」即可；当 $x=0$ 或 $y=0$ 时也取等，不要漏掉退化情形。
> - 它给出的是最优（sharp）估计，常数 $1$ 不能再小。

## 相关概念
- [[数量积]]
- [[正交]]
- [[Bessel不等式]]

## 相关笔记

- [[16-数量积与欧氏空间|代数II · 16-数量积与欧氏空间]]
