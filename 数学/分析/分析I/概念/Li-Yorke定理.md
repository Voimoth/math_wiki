---
title: Li-Yorke定理
created: 2026-10-03
updated: 2026-10-03
type: concept
tags: [analysis, analysis-I, zh]
sources: [分析I 课程笔记(本人手写扫描)]
confidence: medium
---

# Li–Yorke 定理（周期三蕴含混沌）

> [!note] 定理（1975, Li–Yorke）
> 设 $f:I\to I\in C^0$。若 $f$ 有 3-周期点，则 $f$ 有**任意**周期的周期点。

> [!info] 适用范围
> 定理限制在**区间**映射。高维情形复杂得多——证明只用到区间上的介值性质与序，这正是低维特有的。

> [!tip] 证明要点：三个引理
>
> - **Lem1**：若闭区间 $J$ 满足 $f(J)\supset J$，则 $f$ 在 $J$ 中有不动点。
> - **Lem2**：若 $f(J_1)\supset J_2$，则存在 $J_1$ 的闭子区间 $K$ 使 $f(K)=J_2$。
> - **Lem3**：若有 $f(J_0)\supset J_1,\dots,f(J_{n-1})\supset J_0$（$J_i$ 闭区间），则存在 $x_0\in J_0$ 使 $f^n(x_0)=x_0$ 且 $f^i(x_0)\in J_i$。
>
> 取 3-周期轨道的三点 $\alpha<\beta<\gamma$，令 $H=[\alpha,\beta]$、$K=[\beta,\gamma]$。由介值性质 $f(H)\supseteq K$、$f(K)\supseteq H\cup K$。对任意 $n$，构造区间链（前 $n-1$ 段取 $K$、最后取 $H$），用 Lem3 得到 $x_0$ 使 $f^n(x_0)=x_0$；再论证 $x_0$ 的周期恰为 $n$，否则会落在 $K\cap H=\{\beta\}$ 而矛盾。

> [!note] 混沌（chaotic）的一种定义
> $f:I\to I\in C^0$ 称为 chaotic，若
> 1. $f$ 有任意周期的周期点；
> 2. 存在不可数集 $S$，使 $\forall (x,y)\in S^2$、$x\neq y$ 有
> $$\overline{\lim}_{n\to\infty}\operatorname{dist}\bigl(f^n(x)-f^n(y)\bigr)=+\infty,\qquad
> \underline{\lim}_{n\to\infty}\operatorname{dist}\bigl(f^n(x)-f^n(y)\bigr)=0 .$$
> 第二条即**初值敏感**：轨道既有任意接近的时刻，又有互相远离的时刻。

> [!warning] 概念性陷阱
>
> - 「周期三」是**充分**条件，不是必要；混沌不要求有 3-周期点。
> - 定理的结论只是第 1 条（周期点的存在），混沌的完整定义还要加第 2 条（不可数集 + 初值敏感）。

## 相关概念

- [[周期点]] — 3-周期点是触发器
- [[动力系统与轨道]] — 轨道与迭代的背景
- [[介值定理]] — 三个引理与证明只用到区间的介值性质

## 相关笔记

- [[20-动力系统与区间映射|分析I · 20-动力系统与区间映射]]
