---
title: Cauchy列构造实数
created: 2026-10-03
updated: 2026-10-03
type: concept
tags: [analysis, analysis-I, zh]
sources: [分析I 课程笔记(本人手写扫描)]
confidence: medium
---

# Cauchy列构造实数

## 定义（构造）

在已有 $\mathbb{Q}$ 的基础上，令 $X$ 为全部有理 Cauchy 列之集，$\mathbb{R}:=X/{\sim}$，其中
$$(a_n)\sim(b_n)\iff\forall\varepsilon>0,\ \exists N\in\mathbb{N},\ \forall n\geq N,\ |a_n-b_n|<\varepsilon.$$
$\sim$ 是等价关系；$\mathbb{R}$ 的元素是等价类 $[a_n]$。有理数 $r$ 对应常数列 $[r,r,r,\dots]$。

## 为什么

- 用「会收敛的对象」本身（Cauchy 列）来定义实数，缺的就是 $\mathbb{Q}$ 中收敛不了的那部分；把收敛到同一值的列粘成一个等价类，正好补上。
- 这是构造式地实现 [[实数公理化]]：先造出集合，再验证四组公理。

## 证明要点 / 定义的良定性

- 运算与序在等价类上良定义：
  $$[a_n]+[b_n]:=[a_n+b_n],\qquad [a_n]\cdot[b_n]:=[a_n b_n],$$
  $$[a_n]\leq[b_n]\iff\exists\varepsilon>0,\ \exists N,\ \forall n>N\Rightarrow b_n-a_n>\varepsilon\ [?].$$
  需验证与代表元的选取无关（「良定义」）。
- 倒数存在：$x\neq 0$ 时取 $[a_n]$，其项从某项起远离 $0$，则 $[1/a_n]$ 给出 $x^{-1}$。
- 完备性：用二分法取嵌套的有理区间 $[a_n,b_n]$，由 [[Archimedean性质]] 使 $|a_n-b_n|\le 2^{-n}|a_0-b_0|$，两端是同一等价类，即所给集合 $A$ 的最小上界。

## 方法对比

构造实数的两条经典路线：Cauchy 列（本页，度量式）与 Dedekind 分割（序式）。两者给出同构的完备有序域；Cauchy 列路线更易推广到一般度量空间。

## 概念性陷阱

- 等价关系必须把「收敛到同一实数」的列全并在一起，否则加法不封闭、解不唯一。
- 序的定义要小心：直接比项会依赖代表元，必须用「从某项起 $b_n-a_n$ 始终为正」这种最终性质。
- 构造式证明的繁琐往往在于「良定义」验证，而非定义本身。

## 相关概念

- [[Cauchy列]]
- [[实数公理化]]
- [[Archimedean性质]]
- [[确界原理]]
- [[Dedekind完备与Cauchy完备]]

## 相关笔记

- [[02-序列与实数的构造|分析I · 02-序列与实数的构造]]
