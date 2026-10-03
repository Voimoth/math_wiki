---
title: Euler-Maclaurin公式
created: 2026-10-03
updated: 2026-10-03
type: concept
tags: [analysis, analysis-I, series, asymptotics, zh]
sources: [分析I 课程笔记(本人手写扫描)]
confidence: medium
---

# Euler-Maclaurin 公式

把离散和 $\sum f(k)$ 与积分 $\int f$ 之差写成**边界项 + 余项**，是求渐近展开的通用工具。

> [!note] Lemme（1 阶 Euler–Maclaurin 公式）
> 设 $f\in C^1$，则
> $$\sum_{k=1}^n f(k)=\int_1^n f(x)\,dx+\frac{f(1)+f(n)}{2}+\int_1^n\left(x-\lfloor x\rfloor-\frac12\right)f'(x)\,dx.$$

## 为什么

在每一格上用一次分部积分。记 $\tilde B_1(x)=x-\lfloor x\rfloor-\frac12$（周期性对称函数），则
$$\int_k^{k+1}\tilde B_1(x)f'(x)\,dx=\left.f(x)\tilde B_1(x)\right|_k^{k+1}-\int_k^{k+1}f(x)\,dx=\frac{f(k+1)+f(k)}{2}-\int_k^{k+1}f(x)\,dx.$$
对 $k=1,\dots,n-1$ 求和即得。核心机制：把求和写成积分、把边界项吸收成中点梯形修正，再用带符号交替积分的 $\tilde B_1$ 作余项。

## 用途

- 得到调和和与 $\ln n$ 的差（[[级数与部分和]] 中 $H_n-\ln n\to\gamma$）以及 $\sum_{k=n}^\infty k^{-\alpha}$ 的等价量。
- 是 [[Stirling公式]] 精细形式的出发点：把 $\ln n!$ 与 $\int\ln$ 比较，再作展开。
- 也是[[积分判别法]]「带导数版本」的证明基础。

> [!warning] 概念陷阱
> 余项 $\int\tilde B_1 f'$ 一般**不消失**，只是被 $f'$ 的可积性控制；忽略它会把「求和 $\approx$ 积分 + 中点」当成等式。

## 相关概念

- [[积分判别法]]
- [[Stirling公式]]
- [[级数的渐近估计]] — 与积分比较求渐近的常用思路

## 相关笔记

- [[15-级数|分析I · 15-级数]]
