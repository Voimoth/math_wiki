---
title: 一致连续与 Lipschitz 映射
created: 2026-10-03
updated: 2026-10-03
type: concept
tags: [analysis, continuity, lipschitz]
sources: [分析II笔记-上.md]
confidence: high
---

# 一致连续与 Lipschitz 映射

## 定义

> [!note] Déf.（Lipschitz）
> $k\ge0$。$f:A\subset E\to F$ 称为 $k$-Lipschitz，若 $\forall(x,y)\in A^2,\ \|f(x)-f(y)\|\le k\|x-y\|$；存在这样的 $k$ 就称 $f$ 是 Lip 的。

> [!note] Déf.（一致连续，uniformément continue）
> $$\forall\varepsilon>0,\ \exists\eta>0,\ \forall(x,y)\in A^2,\ \|x-y\|\le\eta\Rightarrow\|f(x)-f(y)\|\le\varepsilon.$$

## 关系

> [!note] Prop.
> Lip $\Rightarrow$ 一致连续 $\Rightarrow$ 连续；反之一般不成立。Lip 映射全体构成映射空间的一个线性子空间。

> [!warning] 一致连续 vs 连续
> 连续中 $\delta$ 依赖点，一致连续中 $\eta$ 与点无关。定义域是紧集（特别是有界闭区间）时二者等价，见 [[紧集上的连续函数]]。

## 例子

> [!example]
> - 范数映射 $x\mapsto\|x\|$（1-Lip）；
> - 到固定集合的距离 $x\mapsto d(x,A)$（1-Lip）；
> - 距离函数 $(x,y)\mapsto d(x,y)$ 在 $E\times E$（乘积范数）上 Lip：$\bigl|d(x_1,y_1)-d(x_2,y_2)\bigr|\le\|x_1-x_2\|+\|y_1-y_2\|$，仔细写比看上去难；
> - 乘积 NVS 到某个分量的投影。

> [!info] Rem.
> $f:E\to F$ 是否 Lip，与在 $E,F$ 上取哪组**等价**范数无关。

## 相关概念

- [[映射的连续]] — 连续谱系中最强的一档
- [[紧集上的连续函数]] — 紧集上连续即一致连续
- [[向量值函数的积分]] — 有限增量不等式是一致连续型估计
- [[赋范向量空间]]
