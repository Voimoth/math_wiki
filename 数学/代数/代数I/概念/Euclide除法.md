---
title: Euclide 除法（division euclidienne）
created: 2026-10-03
updated: 2026-10-03
type: concept
tags: [algebre, polynomes, division]
sources: [代数 I 正课手写笔记]
confidence: medium
---

# Euclide 除法

为什么需要它：它是 $K[X]$ 与 $\mathbb{Z}$ 共享的算术核心——有了带余除法，才能谈最大公因子、Bézout 等式与唯一分解，$K[X]$ 才成为 PID。

> [!note] 定理（théorème）
> 设 $(A,B)\in K[X]^2$，$B\neq 0$，则存在唯一的 $(Q,R)\in K[X]^2$ 使
> $$A=BQ+R,\qquad \deg R<\deg B.$$
> $Q$ 称为商，$R$ 称为余式。

> [!tip] 直觉
> 模 $B$ 的余式是唯一一个次数严格小于 $\deg B$ 的代表元，因此 $K[X]/(B)$ 中每个类都有唯一的「低次代表」。这正是与整数带余除法平行的结构。

> [!example]
> 取 $B=X-a$，则 $\deg R<1$，即 $R\in K$，且由 $A=(X-a)Q+R$ 得 $R=A(a)$。这是「余式定理」，也是 $(X-a)\mid A\iff A(a)=0$ 的来源。

> [!warning] 陷阱
> 若 $K$ 不是域（如 $K=\mathbb{Z}$），带余除法一般失效，因为除以首项系数未必可行。此外带余除法是**代数**性质，与域扩张无关：在 $\mathbb{R}[X]$ 中求得的 $(Q,R)$ 与在 $\mathbb{C}[X]$ 中一致。

> [!info] 推论
> 有 Euclide 除法 $\Rightarrow$ $K[X]$ 是 PID（理想都是主理想）。

## 相关概念

- [[最大公因子]]
- [[多项式环]]
- [[不可约多项式]]
- [[理想]]
- [[高阶Taylor公式]] — 多项式的泰勒展开由反复欧几里得除法得到（分析 I）

## 相关笔记

- [[16-整除与最大公因子|代数I · 16-整除与最大公因子]]
- [[28-多项式环|代数I · 28-多项式环]]
- [[29-整除与多项式函数|代数I · 29-整除与多项式函数]]
