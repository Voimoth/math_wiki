---
title: Dedekind完备与Cauchy完备
created: 2026-10-03
updated: 2026-10-03
type: concept
tags: [analysis, analysis-I, zh]
sources: [分析I 课程笔记(本人手写扫描)]
confidence: medium
---

# Dedekind完备与Cauchy完备

## 定义

> [!note] 定义
> **Dedekind 完备**：$\mathbb{R}$ 的任一非空有上界的子集都有上确界（即 [[确界原理]]）。

> [!note] 定义
> **Cauchy 完备**：$\mathbb{R}$ 中任一 Cauchy 列都收敛。

## 为什么

两种「完备」出自不同角度：Dedekind 完备是**序**层面的无缝性（补上所有分割点），Cauchy 完备是**度量**层面的收敛封闭（序列的极限不逸出）。二者对 $\mathbb{R}$ 都成立，但机制不同。

## 关系（核心结论）

$$\text{Dedekind 完备}\iff\text{Cauchy 完备}+\text{Archimedean}.$$

- Dedekind 完备 $\Rightarrow$ Archimedean（否则有正向无穷小，与上确界矛盾）。
- Dedekind 完备 $\Rightarrow$ Cauchy 完备：用确界取 Cauchy 列上界集的下确界。
- 反向：设 Cauchy 完备且 Archimedean，则任一非空有上界的 $A$ 可用二分法构造嵌套闭区间，两端列是同一 Cauchy 列，其极限即 $\sup A$。

## 方法对比

- Cauchy 完备单独**不**蕴含 Dedekind 完备：存在有序域（形式洛朗级数域，按最低次非零系数定序）Cauchy 完备但非 Archimedean，因而非 Dedekind 完备。
- 因此谈论「完备性」时必须指明是序的还是度量的；对 $\mathbb{R}$ 两者由 Archimedean 桥接。

## 概念性陷阱

- 不等价性来自 Archimedean：脱离「有序域 + Archimedean」的语境，两个概念会分道扬镳。
- Cauchy 完备是度量空间概念，Dedekind 完备依赖序结构，不可互相替代。

## 相关概念

- [[确界原理]]
- [[Cauchy列]]
- [[Archimedean性质]]
- [[完备性的等价形式]]

## 相关笔记

- [[01-实数与序|分析I · 01-实数与序]]
- [[02-序列与实数的构造|分析I · 02-序列与实数的构造]]
