---
title: Eisenstein 判别法（critère d'Eisenstein）
created: 2026-10-03
updated: 2026-10-03
type: concept
tags: [algebre, polynomes, irreductibilite]
sources: [代数 I 正课手写笔记]
confidence: medium
---

# Eisenstein 判别法

为什么需要它：判断整系数多项式在 $\mathbb{Q}$ 上不可约没有通用算法，Eisenstein 给出一个只需检查系数被某个素数整除情况的充分条件。

> [!note] 定理（Critère d'Eisenstein）
> 设 $f=\sum_{i=0}^{n}a_iX^i\in\mathbb{Z}[X]$，$\deg f\geq1$，$a_n\neq0$。若存在素数 $p$ 使
> $$p\mid a_0,\ p\mid a_1,\ \dots,\ p\mid a_{n-1},\quad p\nmid a_n,\quad p^2\nmid a_0,$$
> 则 $f$ 在 $\mathbb{Q}[X]$ 中不可约；若 $f$ 本原，则 $f$ 在 $\mathbb{Z}[X]$ 中不可约。

> [!tip] 直觉
> 用模 $p$ 把系数「塌缩」：条件保证 $\bar f=a_nX^n$ 只含最高次项，任何分解都会在最高次与最低次处被 $p$ 整除性卡住，从而导出矛盾。

> [!example]
> 设 $p$ 为素数，$f=X^p+pX+1$ 与 $g=X^{p-1}+\cdots+X+1$ 可用此判别法证明不可约（后者需先作替换 $X\mapsto X+1$）。

> [!warning] 陷阱
> 条件是**充分不必要**：判别法失败并不表示可约。另外必须同时满足 $p\nmid a_n$ 与 $p^2\nmid a_0$，且若 $f$ 不是本原的，结论只保证在 $\mathbb{Q}[X]$ 中不可约。

## 相关概念

- [[不可约多项式]]
- [[本原多项式与容度]]
- [[最大公因子]]
- [[整环]]
