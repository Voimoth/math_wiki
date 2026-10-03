---
title: L'Hospital法则（règle de L'Hospital）
created: 2026-10-03
updated: 2026-10-03
type: concept
tags: [analysis, analysis-I, zh]
sources: [分析I 课程笔记(本人手写扫描)]
confidence: medium
---

# L'Hospital法则（règle de L'Hospital）

## 定义

> [!note] Th.（L'Hospital 法则）
> 设 $c\in\mathbb{R}\cup\{+\infty\}$，$I$ 为区间，$c\in I$（或 $c$ 为端点），$f,g$ 在 $I\setminus\{c\}$ 上可导，$g'(x)\neq0$，且
> $$\lim_{x\to c}\frac{f'(x)}{g'(x)}=L.$$
> 若 $\displaystyle\lim_{x\to c}f=\lim_{x\to c}g=0$（$\tfrac00$ 型）或 $\displaystyle\lim_{x\to c}|g|=+\infty$（$\tfrac{\cdot}{\infty}$ 型），则 $\displaystyle\lim_{x\to c}\frac{f(x)}{g(x)}=L$。

## 证明要点

> [!tip] 夹逼 + Cauchy 中值定理
> 不妨设 $x>c$。令
> $$m(x)=\inf_{c<\xi<x}\frac{f'(\xi)}{g'(\xi)},\qquad M(x)=\sup_{c<\xi<x}\frac{f'(\xi)}{g'(\xi)},$$
> 则对 $x>y>c$，由 [[Cauchy中值定理]] 存在 $\xi\in]y,x[$，使 $\frac{f(x)-f(y)}{g(x)-g(y)}=\frac{f'(\xi)}{g'(\xi)}\in[m(x),M(x)]$。
> - $\tfrac00$ 型：固定 $x$ 令 $y\to c$，得 $m(x)\le\frac{f(x)}{g(x)}\le M(x)$，再令 $x\to c$，两端都趋于 $L$。
> - $\tfrac{\cdot}{\infty}$ 型：把增量比改写为 $\frac{f(x)/g(y)-f(y)/g(y)}{g(x)/g(y)-1}$，令 $y\to c$ 用 $\liminf,\limsup$ 夹出 $\lim f(y)/g(y)=L$。
> 关键在于用**上/下确界**把「$\xi$ 未知」这个障碍消掉：不需要知道 $\xi$ 在哪，只需知道比值落在 $[m(x),M(x)]$ 内。

## 概念性陷阱

- **前提 $\lim\frac{f'}{g'}$ 必须存在**（有限或无穷）。若 $\frac{f'}{g'}$ 无极限，法则无效，不能反推 $\frac fg$ 无极限。例如可用 L'Hospital 处理大量极限，但遇到 $\frac{f'}{g'}$ 振荡的情形要另想办法。
- **先验证不定型**：只有 $\tfrac00$ 或 $\tfrac{\cdot}{\infty}$ 才可用；$\tfrac{\infty}{\infty}$ 型的分子分母都发散即可，不必要求分子趋于 $\infty$（分母趋于无穷时分子可为有限）。
- **不可用于循环论证**：若待求极限本身正是某个导数或某条定理的中间量，用 L'Hospital 会假定结论。经典例子是求 $\lim_{x\to0}\frac{\sin x}{x}$：直接用它验证 $\sin' =\cos$ 会循环，需先独立建立 $\sin'=\cos$。
- **一次不行可迭用**，但每一步都要重新检查不定型与条件。

## 相关概念

- [[Cauchy中值定理]] — 证明基础
- [[上极限与下极限]] — $\tfrac{\cdot}{\infty}$ 型证明用语
- [[导数与可导性]] — 导数定义

## 相关笔记

- [[06-导数与中值定理|分析I · 06-导数与中值定理]]
