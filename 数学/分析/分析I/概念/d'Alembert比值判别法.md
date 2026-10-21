---
title: d'Alembert比值判别法
created: 2026-10-03
updated: 2026-10-03
type: concept
tags: [analysis, analysis-I, series, zh]
sources: [分析I 课程笔记(本人手写扫描)]
confidence: medium
---

# d'Alembert 比值判别法

用相邻两项之比与 $1$ 比较，判定正项级数敛散。

> [!note] Th (d'Alembert)
> 设 $\sum a_n$，$a_n\ge0$。若 $\exists q<1$，使得 $n\ge n_0$ 时 $\frac{a_{n+1}}{a_n}\le q$，则 $\sum a_n$ 收敛。

## 为什么

若从某一项起 $a_{n+1}\le q\,a_n$，则 $a_n\le a_{n_0}q^{\,n-n_0}$，通项被[[几何级数]]控制，比较即得收敛。这里同样要求比值**一致**小于 $1$。

## 比值形式的比较

> [!note] 命题
> 设 $\sum a_n$、$\sum b_n$ 正项，若 $n\ge n_0$ 时 $\frac{a_{n+1}}{a_n}\le\frac{b_{n+1}}{b_n}$，则 $\sum a_n$ 收敛 $\Rightarrow\sum b_n$ 收敛。

这是把两个正项级数的「比值」直接比较；本质是把比值当成本征参数，比值越小衰减越快。

> [!note] 定理（比值的加强/退化情形）
> 若 $\exists r>1$，使得 $n\ge n_0$ 时 $n\!\left(\frac{a_n}{a_{n+1}}-1\right)\ge r$，则 $\sum a_n$ 收敛。

## 陷阱

> [!warning] 比值判别法的失效区间
> $\frac{a_{n+1}}{a_n}\to1$ 时（如 $\sum\frac1n$、$\sum\frac1{n^2}$）判别法失效，需要[[Gauss判别法]]一类带对数项的更精细判据。注意判据只给「存在 $q<1$ 使比值 $\le q$」，逐项 $\frac{a_{n+1}}{a_n}<1$ 但不远离 $1$ 不能推出收敛。

## 方法对比

- [[Cauchy根值判别法]] 用 $\sqrt[n]{a_n}$，d'Alembert 用 $\frac{a_{n+1}}{a_n}$；后者在含阶乘、二项式系数时通常更好算，前者对幂次型通项更直接。
- 存在 $\lim\frac{a_{n+1}}{a_n}=\ell$ 时，$\lim\sqrt[n]{a_n}=\ell$，此时两种判别法给出同号结论；但二者并非总有相同的适用范围。

## 相关概念

- [[正项级数判别法]]
- [[Cauchy根值判别法]]
- [[Gauss判别法]]
- [[几何级数]]

## 相关笔记

- [[15-级数|分析I · 15-级数]]
