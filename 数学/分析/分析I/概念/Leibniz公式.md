---
title: Leibniz公式（formule de Leibniz）
created: 2026-10-03
updated: 2026-10-03
type: concept
tags: [analysis, analysis-I, zh]
sources: [分析I 课程笔记(本人手写扫描)]
confidence: medium
---

# Leibniz公式（formule de Leibniz）

## 定义

> [!note] Th.（Leibniz）
> 设 $n\in\mathbb{N}$，$f,g\in C^n(I,\mathbb{R})$，则 $fg\in C^n(I,\mathbb{R})$，且
> $$(fg)^{(n)}=\sum_{k=0}^n\binom nk f^{(k)}g^{(n-k)}.$$

## 证明要点

> [!tip] 归纳 + Pascal 恒等式
> $n=1$ 即乘积法则 $(fg)'=f'g+fg'$。设 $n$ 成立，对 $(fg)^{(n)}$ 再求一次导，按 $k$ 合并同项，用 $\binom nk+\binom n{k-1}=\binom{n+1}k$ 即得 $n+1$ 的情形。组合结构与二项式定理完全平行（把导数算符形式地当作「交换变量的两半」）。

## 用途与方法对比

- 求具体函数的高阶导数：把函数写成「多项式 ×（易求高阶导的函数）」的乘积，多数项因某因子的高阶导为零而消失，只留少数几项。这是求高阶导最常用的手法。
- 与逐项求导、Taylor 展开相比，Leibniz 公式的优点是把「$n$ 阶导」直接写成有限和，便于对一般 $n$ 操作。

## 概念性陷阱

- **系数是二项式系数 $\binom nk$**，不可漏掉；写开时对称于 $f,g$。
- **只对 $C^n$ 函数成立**：要求 $f,g$ 都 $n$ 次可导。
- **$f^{(k)}$ 与 $g^{(n-k)}$ 的下标互补**，$k$ 从 $0$ 到 $n$（共 $n+1$ 项）；不要与「$n$ 次导的二项展开」中的项数弄混。

## 相关概念

- [[导数的运算法则]] — 一阶乘积法则
- [[C^n函数类]] — 运算封闭性
- [[高阶Taylor公式]] — 高阶导数的另一用途
