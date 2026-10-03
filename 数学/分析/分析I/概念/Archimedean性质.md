---
title: Archimedean性质
created: 2026-10-03
updated: 2026-10-03
type: concept
tags: [analysis, analysis-I, zh]
sources: [分析I 课程笔记(本人手写扫描)]
confidence: medium
---

# Archimedean性质

## 定义

> [!note] 定义
> 有序域 $K$ 满足**阿基米德性质**，若
> $$\forall a,b\in K,\ a>0\ \Rightarrow\ \exists n\in\mathbb{N},\ na>b.$$
> 其中 $na$ 表示 $n$ 个 $a$ 相加。

## 为什么

它排除了「无穷小」与「无穷大」元素：不存在大于所有自然数倍 $a$ 的元素。$\mathbb{N}$ 在 $\mathbb{R}$ 中无上界，正是这条性质。

## 证明要点

若 $\{na\mid n\in\mathbb{N}\}$ 有上界 $b$，由 Dedekind 完备它有最小上界 $\tilde b$；则 $\tilde b-a$ 不再是上界，故 $\exists na>\tilde b-a$，于是 $(n+1)a>\tilde b$，与 $\tilde b$ 为上界矛盾。故正向元素 $a$ 的倍数必超出任意 $b$。

## 等价形式

$$\text{Archimedean}\iff\forall a\in\mathbb{R},\ \lim_{n\to\infty}\frac{a}{2^n}=0.$$

这是二分法（及以 $\frac{1}{2^n}$ 控制误差的迭代）能收敛的依据。

## 方法对比

- 与完备性的关系：Dedekind 完备 $\Rightarrow$ Archimedean；而 Cauchy 完备单独推不出 Dedekind 完备，必须加上 Archimedean（见 [[Dedekind完备与Cauchy完备]]）。

## 概念性陷阱

- Archimedean 是「序」的性质，与「完备」相互独立：存在 Cauchy 完备却不 Archimedean 的有序域。
- 有理数域 $\mathbb{Q}$ 是 Archimedean 的，却不完备，说明两者确非一回事。

## 相关概念

- [[实数公理化]]
- [[Dedekind完备与Cauchy完备]]
- [[完备性的等价形式]]

## 相关笔记

- [[01-实数与序|分析I · 01-实数与序]]
- [[02-序列与实数的构造|分析I · 02-序列与实数的构造]]
- [[03-完备性六大等价|分析I · 03-完备性六大等价]]
