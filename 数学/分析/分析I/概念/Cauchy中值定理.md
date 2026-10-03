---
title: Cauchy中值定理（théorème des accroissements finis généralisé）
created: 2026-10-03
updated: 2026-10-03
type: concept
tags: [analysis, analysis-I, zh]
sources: [分析I 课程笔记(本人手写扫描)]
confidence: medium
---

# Cauchy中值定理（théorème des accroissements finis généralisé）

## 定义

> [!note] Th.（Cauchy）
> 设 $f,g\in C([a,b],\mathbb{R})$，在 $]a,b[$ 上可导，且 $\forall x\in]a,b[$，$g'(x)\neq0$，则存在 $c\in]a,b[$，使
> $$\frac{f'(c)}{g'(c)}=\frac{f(b)-f(a)}{g(b)-g(a)}.$$

## 证明要点

> [!tip] 化为一维 Rolle
> 令 $F(x)=f(x)-\dfrac{f(b)-f(a)}{g(b)-g(a)}\bigl(g(x)-g(a)\bigr)$，则 $F(a)=F(b)$，对 $F$ 用 [[Rolle定理]] 得 $F'(c)=0$，即得结论。注意 $g(b)\neq g(a)$：由 $g'\neq0$ 结合 [[Rolle定理]] 可保证（否则存在内点使 $g'=0$，与假设矛盾），故分式有意义。

## 为什么需要它

- 它是 [[中值定理]] 的推广：取 $g(x)=x$ 即回到 Lagrange 中值定理。
- 它同时涉及两个函数的**增量比**，因此是 [[L'Hospital法则]] 的直接工具：$0/0$ 型与 $\infty/\infty$ 型的证明都归结为「增量比 = 某中间点的导数比」。

## 概念性陷阱

- **不能分别对 $f,g$ 用中值定理再相除**：那样得到的两个中间点 $c_1\neq c_2$ 一般不相等，无法保证 $\frac{f'(c_1)}{g'(c_2)}=\frac{f'(c)}{g'(c)}$。必须构造单个辅助函数 $F$。
- **条件是 $g'\neq0$（在开区间内处处）**，不是 $g(b)\neq g(a)$；前者更强、更能排除 $g$ 的临界点。
- **仍要求实值**：对向量值函数失效。

## 相关概念

- [[中值定理]] — 取 $g(x)=x$ 的特例
- [[Rolle定理]] — 证明工具
- [[L'Hospital法则]] — 主要应用
