---
title: 积分余项（Taylor-Laplace）
created: 2026-10-03
updated: 2026-10-03
type: concept
tags: [analysis, analysis-I, taylor, zh]
sources: [分析I 课程笔记(本人手写扫描)]
confidence: medium
---

# 积分余项（Taylor-Laplace）

## 定义

> [!note] Th.（Taylor-Laplace）
> 设 $a\in I$，$f\in\mathcal{C}^{n+1}(I,\mathbb{R})$，则 $\forall x\in I$，
> $$f(x)=T_a^n(f)(x)+\int_a^x\frac{(x-t)^n}{n!}f^{(n+1)}(t)\,dt,$$
> 其中 $T_a^n(f)(x)=\sum_{k=0}^n\frac1{k!}f^{(k)}(a)(x-a)^k$。方括号内即为**积分余项**。

## 为什么

把一阶微积分基本定理 $f(x)=f(a)+\int_a^x f'(t)\,dt$ 一次次分部积分即可推出：每次把 $\int_a^x(x-t)^{k-1}f^{(k)}(t)\,dt$ 分部，会掉出一项 $\frac{f^{(k)}(a)}{k!}(x-a)^k$，余下项的幂次升高一阶。归根到底是 [[Newton-Leibniz公式]] 的反复迭代。它是三种余项里唯一把误差写成**显式积分**的形式。

## 证明要点

$$f(x)=f(a)+\int_a^xf'(t)\,dt=f(a)-\int_a^xf'(t)\,d(x-t)$$
$$=f(a)+\big.[-]\,(x-t)f'(t)\big|_a^x+\int_a^x(x-t)f''(t)\,dt
=f(a)+(x-a)f'(a)+\int_a^x(x-t)f''(t)\,dt,$$
再把最后一个积分重复同样的分部，逐步得到 $\int_a^x\frac{(x-t)^n}{n!}f^{(n+1)}(t)\,dt$。

## 方法对比（三种余项）

- **Peano 余项** $o\big((x-a)^n\big)$：只需 $f$ 在 $a$ 处 $n$ 阶可导，纯局部、定性，宜求极限与判极值。
- **Lagrange 余项** $\frac{f^{(n+1)}(\xi)}{(n+1)!}(x-a)^{n+1}$：需 $f\in C^{n+1}$，是中值型的**定量**估计。
- **积分余项**：需 $f^{(n+1)}$ 可积；写成显式积分后，直接由 $|f^{(n+1)}|\le M$ 放缩，估出 $\le\frac{M|x-a|^{n+1}}{(n+1)!}$，且不必引入中间点 $\xi$。

## 概念性陷阱

- 前提是 $f^{(n+1)}$ 在区间上**可积**（比"在 $a$ 处 $n$ 阶可导"强得多）；条件不足时只能用 Peano 余项。
- 三个余项给出的是**同一个** $T_a^n(f)$，差别只在余项的表达与所需前提；不要把"$o(\cdot)$ 形式"当成分数估计。

## 相关概念

- [[高阶Taylor公式]] — Peano 与 Lagrange 两种余项
- [[Newton-Leibniz公式]] — 反复迭代的出发点
- [[积分中值定理]] — 由积分余项回到 Lagrange 余项的桥梁

## 相关笔记

- [[13-数值积分与Newton法|分析I · 13-数值积分与Newton法]]
