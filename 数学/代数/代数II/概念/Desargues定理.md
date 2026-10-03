---
title: Desargues 定理（Théorème de Desargues）
created: 2026-10-03
updated: 2026-10-03
type: concept
tags: [algebre, geometrie-projective, desargues]
sources: [代数 II 正课手写笔记]
confidence: medium
---

# Desargues 定理 (Théorème de Desargues)

> [!tip] 为什么需要它
> Desargues 定理刻画两个三角形之间的「透视」关系：顶点连线共点与对应边交点共线互相蕴含，是射影几何的基石之一，其逆命题恰是它的对偶命题。

> [!note] 定理
> 设 $\triangle ABC$ 与 $\triangle A'B'C'$ 的三对顶点连线 $AA', BB', CC'$ 共点，则对应边的交点 $AB \cap A'B'$、$AC \cap A'C'$、$BC \cap B'C'$ 共线（并且反之亦然）。

## 直觉
> [!tip] 想法
> 与 Pappus 同样的思路：把一张平面投影到另一张平面，使中心与顶点的连线方向变成平行，于是「共点」化为「平行」，再用相似三角形证明对应边平行。代数证明则把三个交点各写成向量的组合，三式相加为零向量即得共线。

## 例子
> [!example] 例
> 几何证明：取 $O \in \mathbb{A}^3\setminus\pi$，把平面 $OPQ$ 平移到 $\pi'$，则 $P, Q$ 的像落在 $\pi'$ 的无穷远直线上，只需证 $R$ 也在其上，即由 $AB \parallel A'B'$、$AC \parallel A'C'$ 推出 $BC \parallel B'C'$。
> 代数证明：由 $\Omega \in AA'$、$BB'$、$CC'$ 得三组向量关系，定义 $P, Q, R$ 后三式相加为零向量，故 $P, Q, R$ 共线。

## 陷阱
> [!warning] 易错
> - 定理的两个方向（顶点连线共点 ⇒ 边交点共线，及其逆）互为对偶，不要当成两条互不相干的定理。
> - 需避免退化情形（对应边平行、顶点重合等），此时结论按极限意义理解。

## 相关概念
- [[Pappus定理]]
- [[射影对偶原理]]
- [[透视投影]]

## 相关笔记

- [[35-射影定理与对偶原理|代数II · 35-射影定理与对偶原理]]
