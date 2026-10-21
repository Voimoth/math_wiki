---
title: Cauchy根值判别法
created: 2026-10-03
updated: 2026-10-03
type: concept
tags: [analysis, analysis-I, series, zh]
sources: [分析I 课程笔记(本人手写扫描)]
confidence: medium
---

# Cauchy 根值判别法

用通项的 $n$ 次根与 $1$ 比较，判定正项级数的敛散。

> [!note] Th (Cauchy)
> 设 $\sum a_n$，$a_n\ge0$。
> ① 若 $\exists q<1$，使得对充分大的 $n$ 有 $\sqrt[n]{a_n}\le q$，则 $\sum a_n$ 收敛；
> ② 若 $\exists$ 无穷多个 $n$ 使 $\sqrt[n]{a_n}\ge1$，则 $\sum a_n$ 发散。

## 为什么

① 中 $a_n\le q^n$，与[[几何级数]]比较即得收敛。② 中 $a_n\ge1$ 对无穷多个 $n$ 成立，通项不趋于 $0$，由[[级数与部分和]]的必要条件得发散。

判据的本质是把「衰减速度」量化为 $\limsup\sqrt[n]{a_n}$：小于 $1$ 收敛，大于 $1$ 发散；等于 $1$ 时失效（如 $\sum\frac1n$、$\sum\frac{1}{n^2}$ 都有 $\sqrt[n]{a_n}\to1$ 而敛散相反）。

## 陷阱

> [!warning] 必须与 $1$ 拉开距离
> 条件用的是 $\sqrt[n]{a_n}\le q<1$（**一致**小于 $1$），而不是 $\sqrt[n]{a_n}<1$ 逐项成立；仅 $\sqrt[n]{a_n}\to1$ 或 <1 但不远离时都不能判定。发散方向只需「无穷多个 $n$」使 $\sqrt[n]{a_n}\ge1$，不需要全部。

## 相关概念

- [[正项级数判别法]]
- [[d'Alembert比值判别法]] — 通常更易计算，二者常常同号
- [[几何级数]]

## 相关笔记

- [[15-级数|分析I · 15-级数]]
