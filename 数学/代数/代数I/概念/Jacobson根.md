---
title: Jacobson 根（radical de Jacobson）
created: 2026-10-03
updated: 2026-10-03
type: concept
tags: [algebre, radical-de-jacobson, anneau-local]
sources: [代数 I 习题课手写笔记]
confidence: medium
---

# Jacobson 根

把所有极大理想交起来，得到一个理想 $J(R)$；它刻画了环中「用 $1 - xy$ 永远造不出不可逆元」的元素。$J(R)$ 是研究局部环与单位群的常用工具。

> [!note] 定义（définition, radical de Jacobson）
> $R$ 是环，$J(R)$ 是 $R$ 中所有极大理想的交集，称为环 $R$ 的 Jacobson 根。

> [!note] 命题（元素刻画）
> $R$ 是交换环，$x \in R$。则
> $$x \in J(R) \iff \forall y \in R,\ 1 - xy \text{ 在 } R \text{ 中可逆}.$$

> [!tip] 证明要点
> 「$\Rightarrow$」把 $x$ 换成 $xy$，化归为证 $1 - u$（$u \in J(R)$）可逆；若 $1 - u$ 落在某个极大理想 $m$ 中，由 $u \in m$ 得 $1 \in m$，矛盾。
> 「$\Leftarrow$」若 $x$ 不属于某极大理想 $m$，则 $(x) + m = R$，于是某个 $1 - xy$ 落在 $m$ 中，不可能是可逆元。

> [!example] 例子
> - $R$ 是局部环，唯一极大理想为 $m$，则 $J(R) = m$。
> - $\mathbb{Z}$ 中 $J(\mathbb{Z}) = \bigcap_p (p) = (0)$。

> [!warning] 陷阱
> - $J(R)$ 一般不等于幂零根 $\operatorname{Nil}(R)$：有 $\operatorname{Nil}(R) \subseteq J(R)$，但反向不成立。
> - 对某些环「所有极大理想之交」为零理想（如 $\mathbb{Z}$），此时 $J(R) = 0$ 仍是有效信息。
> - 条件「$\forall y$」比单独「$1 - x$ 可逆」更强。

## 相关概念

[[极大理想]]、[[幂零根]]、[[局部环]]、[[理想]]、[[赋值环]]、[[代数III/概念/模]]

## 相关笔记

- [[17-素理想的链、极小素理想与Jacobson根|代数I · 17-素理想的链、极小素理想与Jacobson根]]
