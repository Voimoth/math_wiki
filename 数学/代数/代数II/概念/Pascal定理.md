---
title: Pascal 定理（Théorème de Pascal）
created: 2026-10-03
updated: 2026-10-03
type: concept
tags: [algebre, geometrie-projective, pascal, conique]
sources: [代数 II 正课手写笔记]
confidence: medium
---

# Pascal 定理 (Théorème de Pascal)

> [!tip] 为什么需要它
> Pascal 定理（《Essai pour les coniques》）是 Pappus 定理在二次曲线上的推广：把两条直线换成一条二次曲线上的六个点。它的对偶就是 Brianchon 定理，体现对偶原理的威力。

> [!note] 定理（Pascal）
> 光滑（非退化）二次曲线上任取 $6$ 点，则三组「对边」所在直线的交点共线（这条线称为 Pascal 线）。

> [!info] 对偶（Théorème de Brianchon）
> 二次曲线外切 $6$ 边形的三组对顶点连线，三线共点。

## 直觉
> [!tip] 想法
> 当二次曲线退化为「两条直线之并」时，Pascal 定理退化为 Pappus 定理，因此 Pascal 可看作 Pappus 的曲线版本。证明通常先处理退化情形，再用投影 / 交比作变形。

## 例子
> [!example] 例
> 六边形 $ABCDEF$ 内接于椭圆，则 $AB \cap DE$、$BC \cap EF$、$CD \cap FA$ 三点共线。对偶地，外切六边形的三条对顶点连线共点。

## 陷阱
> [!warning] 易错
>
> - 要求二次曲线「光滑」（非退化）；退化为一对直线、一个点或空集时需另行讨论。
> - 六个点须按六边形的顺序标注，「对边」指相对的两条边，共线的是三组对边的交点。

## 相关概念
- [[Pappus定理]]
- [[射影对偶原理]]
- [[配极]]
- [[射影二次曲线]]

## 相关笔记

- [[35-射影定理与对偶原理|代数II · 35-射影定理与对偶原理]]
