---
title: Cauchy乘积
created: 2026-10-03
updated: 2026-10-03
type: concept
tags: [analysis, analysis-I, series, zh]
sources: [分析I 课程笔记(本人手写扫描)]
confidence: medium
---

# Cauchy 乘积

把两个级数的「乘积」定义为按对角线归并的级数。

> [!note] Déf.（Cauchy 和）
> 令 $c_n=\sum_{i+j=n}a_ib_j$，称 $\sum c_n$ 为 $\sum a_n$ 与 $\sum b_n$ 乘积的 **Cauchy 和**。形式上
> $$\left(\sum_{n\ge0}a_nx^n\right)\left(\sum_{n\ge0}b_nx^n\right)=\sum_{n\ge0}\sum_{i+j=n}a_ib_jx^n.$$

## 为什么这样定义

在幂级数里，两个形式幂级数的乘积，$x^n$ 的系数天然是 $\sum_{i+j=n}a_ib_j$。Cauchy 乘积就是把「系数乘法」翻译成级数语言。

## 收敛性

- **二者都绝对收敛**：则 $a_ib_j$ 以任何方式相加所得级数都绝对收敛，且 $\sum_{i,j}a_ib_j=(\sum a_i)(\sum b_j)$（[[级数的结合律与换序]] 的二维版本）。证明用 $M=\max\{i(k),j(k),k\le N\}$ 把部分和夹在 $(\sum_{i\le M}|a_i|)(\sum_{j\le M}|b_j|)$ 之间。
- **一个绝对收敛、一个收敛**：Cauchy 和收敛于乘积，即 [[Mertens定理]]。
- **两个都只收敛**：Cauchy 和可以发散。也要当心：它与二者乘积的和未必相等，需要额外条件（Abel 定理）。

> [!example] 一个条件收敛的例子
> $\sum_{n\ge1}(-1)^{n+1}\frac{1}{\sqrt n}$ 收敛。它与自身的 Cauchy 和：$c_n=(-1)^{n+1}\sum_{i=1}^{n-1}\frac{1}{\sqrt{i(n-i)}}$，由 $\sqrt{i(n-i)}\le\frac n2$ 得 $|c_n|\ge\frac{2(n-1)}{n}$，通项不趋于 $0$，故 Cauchy 和发散。

> [!warning] 陷阱
> 「$\sum a_n$、$\sum b_n$ 收敛」**推不出** Cauchy 和收敛。绝对收敛才是保证乘积级数良好行为的关键。

## 相关概念

- [[Mertens定理]]
- [[绝对收敛与条件收敛]]
- [[Abel求和]]

## 相关笔记

- [[15-级数|分析I · 15-级数]]
