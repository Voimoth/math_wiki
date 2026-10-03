---
title: C^n函数类（classe C^n）
created: 2026-10-03
updated: 2026-10-03
type: concept
tags: [analysis, analysis-I, zh]
sources: [分析I 课程笔记(本人手写扫描)]
confidence: medium
---

# C^n函数类（classe C^n）

## 定义

> [!note] Déf.（高阶可导与 $C^n$）
> $f$ 称为 **$n$ 次可导**，若其 $n-1$ 阶导数可导，记 $f^{(n)}=(f^{(n-1)})'$。
> $f\in C^n(I,\mathbb{R})$：$f$ 在 $I$ 上 $n$ 次可导且 $f^{(n)}$ **连续**（$n=0$ 时 $C^0=C$）。若 $\forall n$，$f\in C^n$，称 $f$ 为 **$C^\infty$（光滑，lisse）**。

> [!note] Prop.（分级）
> $f\in C^{p+q}(I,\mathbb{R})\iff f\in C^p(I,\mathbb{R})$ 且 $f^{(p)}\in C^q(I,\mathbb{R})$。

## 封闭性

> [!note] Th.（复合、逆、除法）
> - 若 $f\in C^n(I,\mathbb{R})$，$g\in C^n(J,\mathbb{R})$，$f(I)\subset J$，则 $g\circ f\in C^n(I)$。
> - 若 $f\in C^n$ 且 $f\neq0$，则 $1/f\in C^n$。
> - 若 $f:I\to J$ 是 $C^n$ 的严格单调函数且 $f'\neq0$，则 $f^{-1}:J\to I$ 也是 $C^n$ 的。

> [!tip] 证明要点
> 复合用归纳：$(g\circ f)'=g'\circ f\cdot f'$，若 $g'\circ f,f'\in C^{n-1}$ 则 $(g\circ f)'\in C^{n-1}$，即 $g\circ f\in C^n$。逆函数用 $(f^{-1})'(x)=\dfrac1{f'(f^{-1}(x))}$，逐级提升正则性。

## 延拓

> [!note] Th.
> 设 $f:I\setminus\{a\}$ 是 $C^n$ 的，且对 $k\in[1,n]$，$f^{(k)}$ 在 $a$ 处的单侧极限 $a_k$ 存在且有限，则 $f$ 可延拓为 $C^n$ 函数 $\tilde f:I\to\mathbb{R}$，且 $\tilde f^{(k)}(a)=a_k$。

> [!example]
> $$f(x)=\begin{cases}e^{-1/x^2},&x\neq0,\\0,&x=0\end{cases}\in C^\infty.$$
> 逐阶求导得 $f^{(k)}(x)=e^{-1/x^2}P(1/x)$（$P$ 为多项式），令 $t=1/x$ 用 $e^{t^2}$ 的增长压倒多项式，得 $\lim_{x\to0}f^{(k)}(x)=0$，故 $f^{(k)}(0)=0$。这是「$C^\infty$ 但非实解析」的标准原型（见 [[实解析函数]]）。

## 概念性陷阱

- **$n$ 次可导 $\ne C^n$**：$C^n$ 额外要求 $f^{(n)}$ 连续。所有 $C^\infty$ 函数都是 $C^n$，反之不然。
- **$C^n$ 与解析不同**：$C^\infty$ 函数不必等于其 Taylor 级数（上面的例子在 $0$ 处所有导数为 $0$，级数恒为 $0$ 而函数非零）。
- **复合的 $C^n$ 性需要内函数把定义域映入外函数定义域**（$f(I)\subset J$），否则复合无意义。
- **逆的 $C^n$ 性需要 $f'\neq0$**；$f'$ 可以变号吗？严格单调已排除变号，$f'\neq0$ 是与严格单调配套的假设。

## 相关概念

- [[导数与可导性]] — 一阶情形
- [[Leibniz公式]] — 乘积的高阶导数
- [[高阶Taylor公式]] — $C^n$ 函数的展开
- [[实解析函数]] — 比 $C^\infty$ 更强的类
