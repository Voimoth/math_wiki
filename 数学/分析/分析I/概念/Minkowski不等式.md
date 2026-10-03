---
title: Minkowski不等式（inégalité de Minkowski）
created: 2026-10-03
updated: 2026-10-03
type: concept
tags: [analysis, analysis-I, zh]
sources: [分析I 课程笔记(本人手写扫描)]
confidence: medium
---

# Minkowski不等式（inégalité de Minkowski）

## 定义

> [!note] Th.（Minkowski）
> 设 $p>1$，$a_i,b_i\ge0$，则
> $$\Big(\sum_i(a_i+b_i)^p\Big)^{\frac1p}\le\Big(\sum_i a_i^p\Big)^{\frac1p}+\Big(\sum_i b_i^p\Big)^{\frac1p}.$$
> 几何形式：若 $A,B\subset\mathbb{R}^n$ 为凸集，$|A+B|^{\frac1n}\le|A|^{\frac1n}+|B|^{\frac1n}$。

## 证明要点

> [!tip] 拆项后用 Hölder
> 写出
> $$\sum_i(a_i+b_i)^p=\sum_i a_i(a_i+b_i)^{p-1}+\sum_i b_i(a_i+b_i)^{p-1},$$
> 对每一项用 [[Hölder不等式]]（指数 $p$ 与 $q=\frac p{p-1}$）：
> $$\sum_i a_i(a_i+b_i)^{p-1}\le\Big(\sum_i a_i^p\Big)^{\frac1p}\Big(\sum_i(a_i+b_i)^p\Big)^{\frac{p-1}p},$$
> 对 $b$ 同法。两式相加后约去公因子 $\big(\sum(a_i+b_i)^p\big)^{\frac{p-1}p}$ 即得。

## 意义

- 说明「$\|\cdot\|_p$ 满足三角不等式」，因而是 $\mathbb{R}^n$（及函数空间）上 $p$-范数良定义的关键（见 [[赋范向量空间]]）。
- 是「两对象之和的大小不超过各自大小之和」的定量形式。

## 概念性陷阱

- **$p>1$**：$p<1$ 时三角不等式反向；$p=\infty$ 需另立（$\max$ 形式）。
- **与 Hölder 的分工**：Hölder 控制乘积的积分/和，Minkowski 控制和的范数；证 Minkowski 时用 Hölder，不要反过来。
- **几何形式中的 $\frac1n$ 指数**与线性代数中的 Brunn-Minkowski 有关，但这里只用到平移不变测度的体积可加上界。

## 相关概念

- [[Hölder不等式]] — 证明工具
- [[赋范向量空间]] — $\|\cdot\|_p$ 的三角不等式
- [[Minkowski泛函]] — 凸集构造范数

## 相关笔记

- [[07-高阶导数与凸函数|分析I · 07-高阶导数与凸函数]]
