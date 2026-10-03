---
title: Cauchy列
created: 2026-10-03
updated: 2026-10-03
type: concept
tags: [analysis, analysis-I, zh]
sources: [分析I 课程笔记(本人手写扫描)]
confidence: medium
---

# Cauchy列

## 定义

> [!note] 定义
> 实数列 $\{x_n\}$ 称为 **Cauchy 列**（柯西列），若
> $$\forall\varepsilon>0,\ \exists N\in\mathbb{N},\ \forall m,n\geq N,\ |x_n-x_m|<\varepsilon.$$

在 $\mathbb{Q}$ 上把 $\varepsilon$ 限制为有理数，即得**有理 Cauchy 列**。

## 为什么

Cauchy 列用「项与项彼此靠近」取代「项靠近某个极限值」，其定义不预设极限存在，因此适合用来构造 $\mathbb{R}$。而「任何 Cauchy 列都收敛」（**Cauchy 完备**）本身就是完备性的一条。

## 证明要点 / 基本性质

- Cauchy 列有界：取 $\varepsilon=1$，$N$ 以后的项被 $x_N\pm 1$ 夹住，前 $N$ 项只有有限个。
- 收敛列必为 Cauchy 列（三角不等式）；反之在完备空间中成立。

## 概念性陷阱

- Cauchy 列不必收敛（在非完备空间中）；「Cauchy」与「收敛」的差别正是完备性。
- 有界列不必是 Cauchy 列，例如 $(-1)^n$。
- 「有界 + 有收敛子列」是证明 Cauchy 列收敛（在 $\mathbb{R}$ 中）的关键组合，见 [[Bolzano-Weierstrass定理]] 与 [[完备性的等价形式]]。

## 相关概念

- [[Cauchy列构造实数]]
- [[完备性的等价形式]]
- [[Dedekind完备与Cauchy完备]]
- [[Bolzano-Weierstrass定理]]
