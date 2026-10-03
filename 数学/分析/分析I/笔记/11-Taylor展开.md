---
title: 分析I · Taylor展开
created: 2026-10-03
updated: 2026-10-03
type: notes
tags: [analysis, analysis-I, zh]
sources: [分析I 课程笔记(本人手写扫描)]
confidence: medium
---

# Taylor展开

## 1. 从导数到 Taylor 多项式

$f$ 在 $a$ 点可导：
$$\lim_{h\to0}\frac{f(a+h)-f(a)}{h}=f'(a)\iff f(a+h)=f(a)+f'(a)h+\varepsilon_a(h)\cdot h.$$

**Taylor 多项式。** 若 $f$ 本身为多项式，$f(x)=a_0+a_1x+\dots+a_nx^n$，则
$$a_0=f(0),\quad a_1=f'(0),\quad a_2=\frac12f''(0),\quad\vdots\quad a_n=\frac1{n!}f^{(n)}(0),$$
故 $f(x)=\sum_{k=0}^n\frac1{k!}f^{(k)}(0)\,x^k$。

一般的 $f$：
$$f(x)=T_a^n(f)+o\big((x-a)^n\big),\qquad T_a^n(f)=\sum_{k=0}^n\frac1{k!}f^{(k)}(a)(x-a)^k.$$

## 2. Peano 余项的 Taylor 公式

> [!note] Th.（3.4）
> 设 $f$ 在 $[a-\varepsilon,a+\varepsilon]$ 上有定义，且在 $a$ 处 $n$ 阶可导，则
> $$f(x)=T_a^n(f)(x)+o\big((x-a)^n\big).$$

> [!example]
> $$e^x=1+x+\frac{x^2}{2!}+\dots+\frac{x^n}{n!}+o(x^n),$$
> $$\sin x=x-\frac{x^3}{3!}+\frac{x^5}{5!}-\dots+(-1)^n\frac{x^{2n+1}}{(2n+1)!}+\dots$$

## 3. Lagrange 余项的 Taylor 公式

> [!note] Th.（3.5）
> 设 $f:I\to\mathbb{R}$，$a\in I$ 为内点，$f$ 在 $I$ 上有直到 $n+1$ 阶导数，则
> $$f(x)=T_a^n(f)(x)+\frac1{(n+1)!}f^{(n+1)}(\xi)(x-a)^{n+1},$$
> 其中 $\xi$ 在 $x$ 与 $a$ 之间。

> [!example] 用带余项展开证不等式
> $\ln(1+x)\le x-\dfrac{x^2}{2}+\dfrac{x^3}{3}$，$\cos x\ge 1-\dfrac12x^2$。
