---
title: Lipschitz函数
created: 2026-10-03
updated: 2026-10-03
type: concept
tags: [analysis, analysis-I, zh]
sources: [分析I 课程笔记(本人手写扫描)]
confidence: medium
---

# Lipschitz函数

## 定义

> [!note] 定义
> $f:I\to\mathbb{R}$ 称为 **$k$-Lipschitz**（$k$-Lip），若
> $$\exists k>0,\ \forall x,y\in I,\ |f(x)-f(y)|\leq k|x-y|.$$
> $k$ 称为 Lipschitz 常数。

## 为什么

Lipschitz 是最强、最易用的一种「连续性受控」：它给出线性的模估计，使得 $f$ 一致连续，并直接控制函数的增量。

## 证明要点 / 基本性质

- Lipschitz $\Rightarrow$ [[一致连续]]：取 $\delta=\varepsilon/k$。
- Lipschitz $\Rightarrow$ 连续；反之不然（如 $\sqrt{x}$ 在 $0$ 附近）。
- 若 $f$ 可导且 $|f'|\leq k$，则 $f$ 是 $k$-Lipschitz（中值定理/有限增量估计）。
- 两个 Lipschitz 函数的和、复合仍 Lipschitz（常数相乘）。

## 方法对比

- 与一致连续：Lipschitz 是「量化更强」的一致连续；许多证明中先证 Lipschitz 再得一致连续。
- 与可导性：局部 Lipschitz（在紧区间上）弱于 $C^1$，强于连续。

## 概念性陷阱

- $k$ 不是唯一：任何更大的常数也可用；关键是存在性。
- Lipschitz 常数依赖区间：$x^2$ 在 $[0,1]$ 上是 $2$-Lip，在 $\mathbb{R}$ 上不是 Lipschitz。
- Lipschitz 不蕴含可导（如 $|x|$ 是 $1$-Lip 但不可导）。

## 相关概念

- [[一致连续]]
- [[函数的连续]]
- [[有界闭区间上连续函数的性质]]
- [[一致连续与Lipschitz映射]]

## 相关笔记

- [[05-函数的极限与连续|分析I · 05-函数的极限与连续]]
- [[09-积分的计算与中值定理|分析I · 09-积分的计算与中值定理]]
