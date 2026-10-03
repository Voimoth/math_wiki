---
title: Abel求和
created: 2026-10-03
updated: 2026-10-03
type: concept
tags: [analysis, analysis-I, summability, zh]
sources: [分析I 课程笔记(本人手写扫描)]
confidence: medium
---

# Abel 求和

发散级数也可能有「可求和」的值。Abel 和是最弱、最自然的一种广义和：用幂级数作正则化。

> [!note] Déf.（Abel 意义下可求和）
> 若对 $x\in[0,1]$，$\sum a_nx^n$ 均收敛，且 $\lim_{x\to1^-}\sum_{n=0}^{\infty}a_nx^n$ 存在且有限，则称 $\sum_{n=0}^{\infty}a_n$ 在 **Abel 意义下可求和**，记为
> $$\sum_{n=0}^{\infty}a_n=\lim_{x\to1^-}\sum_{n=0}^{\infty}a_nx^n\quad(A).$$

## 为什么

对每个 $0\le x<1$，引入收敛因子 $x^n$ 把级数正则化。若原级数收敛，则由 Abel 引理（$\sum c_n$ 收敛 $\Rightarrow\lim_{x\to1^-}\sum c_nx^n=\sum c_n$）知其 Abel 和就是原来的和——Abel 求和与普通求和**相容**。所以在普通和存在时它不改变答案，在普通和不存在时它仍可能给出一个值。

> [!example] 最经典的例子
> $\sum_{n=0}^{\infty}(-1)^n$ 按普通意义发散，但 $\sum_{n=0}^{\infty}(-x)^n=\frac{1}{1+x}$，令 $x\to1^-$ 得 Abel 和 $\frac12$。

## 概念要点

- 定义分成两步：先要求 $\sum a_nx^n$ 对 $0\le x<1$ 都收敛，再要求 $x\to1^-$ 的极限存在。
- 在 [[Cesàro求和]] 的定理中：$(C)\Rightarrow(A)$，即 Cesàro 可求和蕴含 Abel 可求和；Abel 求和严格更弱（更强地「模糊」级数）。
- 反向（$A\Rightarrow$ 普通和）需要额外条件，这就是[[Tauber定理]]。

> [!warning] 陷阱
> Abel 和只是极限 $\lim_{x\to1^-}(\cdot)$，不是「把 $x=1$ 代进去」；幂级数在 $x=1$ 处可能发散，极限仍可能存在。

## 相关概念

- [[Cesàro求和]]
- [[Tauber定理]]
- [[广义求和与Cesàro求和]] — Fourier 级数情形的广义求和
- [[Abel求和与Poisson核]] — Abel 求和在 Fourier 级数中的体现
