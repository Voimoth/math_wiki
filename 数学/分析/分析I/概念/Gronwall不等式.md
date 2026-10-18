---
title: Gronwall不等式
created: 2026-10-03
updated: 2026-10-03
type: concept
tags: [analysis, analysis-I, zh]
sources: [分析I 课程笔记(本人手写扫描)]
confidence: medium
---

# Gronwall 不等式

> [!note] 命题
> 若 $y'+a(x)y\leq 0$，且 $y(0)=y_0$，则
> $$y(x)\leq \mathrm{e}^{-\varphi(x)+\varphi(0)}\,y_0,\qquad \varphi(x)=\int_{x_0}^{x}a(t)\,dt .$$

> [!tip] 为什么成立（证明要点）
> 与解线性方程完全一样，乘积分因子 $\mathrm{e}^{\varphi}$：
> $$(\mathrm{e}^{\varphi}y)'\leq 0 \implies \mathrm{e}^{\varphi}y \text{ 单调不增},$$
> 于是 $\mathrm{e}^{\varphi(x)}y(x)\leq \mathrm{e}^{\varphi(0)}y_0$。把 $\mathrm{e}^{\varphi(x)}$ 移过去即得。

> [!example] 最简单的形状
> $y'+ay\leq 0$ 与 $y(0)=0$：由 $(\mathrm{e}^{ax}y)'\leq 0$ 且 $\mathrm{e}^{ax}y|_{x=0}=0$ 得 $y(x)\leq 0$。这是把「微分不等式」化为「单调性」的典型。

> [!warning] 概念性陷阱
>
> - 用不等式而不是等式——关键正是 $(\mathrm{e}^{\varphi}y)'\leq 0$ 给出单调性，才能对函数值作估计。
> - 这是「以解的结构控制解的大小」的模板，唯一性定理里反复出现。

## 相关概念

- [[一阶线性ODE与积分因子]] — 同一个积分因子技巧
- [[Picard-Lindelöf定理]] — 用 Gronwall 型估计证明解的唯一性
- [[牛顿决定性原理与微分方程解的唯一性]] — Gronwall 估计正是 ODE 解唯一性的物理含义

## 相关笔记

- [[18-常微分方程|分析I · 18-常微分方程]]
