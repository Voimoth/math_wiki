---
title: Tauber定理
created: 2026-10-03
updated: 2026-10-03
type: concept
tags: [analysis, analysis-I, summability, tauberian, zh]
sources: [分析I 课程笔记(本人手写扫描)]
confidence: medium
---

# Tauber 定理

**Tauber 型定理**的共同形式是：把「广义可求和」升级为「普通收敛」，代价是给通项加一个**衰减控制**条件。

> [!note] Th (Tauber 第一定理)
> 设 $\sum_{n=0}^{\infty}a_n=S\ (A)$。若 $a_n=o\!\left(\frac1n\right)$（$n\to+\infty$），则 $\sum_{n=0}^{\infty}a_n$ 收敛于 $S$。

> [!note] Th (Tauber 第二定理)
> 设 $\sum_{n=0}^{\infty}a_n=S\ (A)$。如果 $\frac1n\sum_{k=0}^{n}ka_k=o(n)$（$n\to+\infty$），则 $\sum_{n=0}^{\infty}a_n=S$。

## 为什么

**第一定理：** 把 $S$ 与部分和之差拆成
$$\left|\sum_{k=0}^n a_k-S\right|\le\left|\sum_{k=0}^n a_k-f(x)\right|+\left|f(x)-S\right|,\qquad f(x)=\sum_{n\ge0}a_nx^n,$$
用 $1-x^k\le k(1-x)$ 与 $\sum_{k>n}|a_k|x^k\le\sup_{k>n}|ka_k|\cdot\frac{x^{n+1}}{1-x}$ 估计，取 $x=1-\frac1n$，则 $(1-x)\sum_{k\le n}k|a_k|$ 与 $\sup_{k>n}|ka_k|$ 都由 $ka_k\to0$ 控制，故差 $\to0$。

**第二定理：** 令 $b_n=\frac1n\sum_{k\le n}ka_k$，由 $nb_n-(n-1)b_{n-1}=na_n$ 得 $a_n=b_n-b_{n-1}+\frac{b_{n-1}}{n}$，从而 $\sum\frac{b_n}{n}$ 与 $\sum a_n$ 只差一个 Abel 可和的项；再用第一定理（$\frac1n b_{n-1}=o(\frac1n)$）得收敛。

## 概念要点

- **Abel 求和单独不能推出收敛**（$\sum(-1)^n$ 有 Abel 和 $1/2$ 却发散）；Tauber 定理给出「$a_n=o(1/n)$」这一**必要条件式**的额外控制，才把 $(A)$ 升级为普通收敛。
- 条件的形式：通项的衰减必须快过 $1/n$（或部分加权和 $o(n)$）。$\sum(-1)^n$ 的通项不趋于 $0$，自然被排除。

> [!warning] 陷阱
> 条件 $a_n=o(1/n)$ 是**充分**而非必要；也不能削弱为 $a_n=O(1/n)$（$\sum\frac{(-1)^n}{n}$ 的 $O(1/n)$ 情形要改用 [[Hardy定理]]）。

## 相关概念

- [[Abel求和]]
- [[Cesàro求和]]
- [[Hardy定理]] — $O(1/n)$ 情形下的 Tauber 型升级
