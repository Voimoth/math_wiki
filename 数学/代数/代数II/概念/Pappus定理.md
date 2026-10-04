---
title: Pappus 定理（Théorème de Pappus）
created: 2026-10-03
updated: 2026-10-03
type: concept
tags: [algebre, geometrie-projective, pappus]
sources: [代数 II 正课手写笔记]
confidence: medium
---

# Pappus 定理 (Théorème de Pappus)

> [!tip] 为什么需要它
> Pappus 定理是射影平面中最经典的「共线性」定理：它说明两条直线上的三对点如何决定第三条共线，也是理解投影技巧与对偶原理的入门范例。

> [!note] 定理
> 设 $l_1, l_2$ 是平面内任两条直线，$A_i, B_i, C_i \in l_i$ 是 $l_i$ 上任三点（$i = 1, 2$）。记
> $$P = A_1B_2 \cap A_2B_1, \qquad Q = A_1C_2 \cap A_2C_1, \qquad R = B_1C_2 \cap B_2C_1,$$
> 则 $P, Q, R$ 共线。

## 直觉
> [!tip] 想法
> 证明的核心是「把图形投影到无穷远」：取适当的光源 $O$ 与平面 $\pi'$，使 $P, Q$ 的像落在 $\pi'$ 的无穷远直线上，于是共线问题化为平行问题，再用相似三角形（Thales）解决。这一招可重复用于 Desargues 定理。

## 例子
> [!example] 例
> 其对偶命题为：若 $l_1, m_1, n_1$ 共点、$l_2, m_2, n_2$ 共点，则相应交点连线三线共点。「点共线」与「线共点」由对偶原理互换。

## 陷阱
> [!warning] 易错
>
> - 退化情形（如 $P = Q$）需单独说明，结论按极限意义成立。
> - 需 $l_1 \neq l_2$；两直线重合时命题退化为平凡情形。

## 相关概念
- [[Desargues定理]]
- [[射影对偶原理]]
- [[透视投影]]

## 相关笔记

- [[35-射影定理与对偶原理|代数II · 35-射影定理与对偶原理]]
