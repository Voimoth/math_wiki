---
title: Stirling公式
created: 2026-10-03
updated: 2026-10-03
type: concept
tags: [analysis, analysis-I, series, asymptotics, zh]
sources: [分析I 课程笔记(本人手写扫描)]
confidence: medium
---

# Stirling 公式

阶乘的渐近等价，并带有可继续展开的精细形式。

> [!note] Th (Stirling)
> $$n!\sim\sqrt{2\pi n}\left(\frac{n}{e}\right)^n.$$

> [!note] Prop.（精细形式）
> $$\frac{n!}{n^n}\cdot\frac{e^n}{\sqrt n}=e^{\left(\frac{1}{12n}+O\left(\frac{1}{n^2}\right)\right)}\sqrt{2\pi}.$$

## 为什么

思路是「把乘法取对数变加法，再作渐近展开」。令 $v_n=\frac{n!}{n^n}e^n$，则
$$\ln v_{n+1}-\ln v_n=\ln(n+1)+1+n\ln n-(n+1)\ln(n+1)=1-n\ln\!\left(1+\frac1n\right)=\frac{1}{2n}-\frac{1}{3n^2}+O\!\left(\frac{1}{n^3}\right).$$
这个量是 $O(n^{-1})$，趋于 $0$，说明 $\ln v_n$ 收敛；再令 $w_n=\frac{v_n}{\sqrt n}$ 消去 $O(n^{-1})$ 的部分：
$$\ln w_{n+1}-\ln w_n=-\frac{1}{12n^2}+O\!\left(\frac1{n^3}\right),$$
于是 $\ln w_n$ 的尾部可和，$\ln w_n=\frac{1}{12n}+O(n^{-2})+w$，即 $w_n=e^{\frac{1}{12n}+O(n^{-2})}e^w$。常数 $e^w=\sqrt{2\pi}$ 用 Wallis 积分 $I_n=\int_0^{\pi/2}\sin^n x\,dx\sim\sqrt{\frac{\pi}{2n}}$ 与 $I_{2n}=\frac{(2n)!}{2^{2n}(n!)^2}\frac{\pi}{2}$ 定出。

## 概念要点

- 结构是「主项 $\left(\frac ne\right)^n\sqrt{2\pi n}$ 乘上一个 $1+O(1/n)$ 的修正因子」，修正因子取对数后是 $e^{\frac{1}{12n}+\dots}$。
- 与 [[Euler-Maclaurin公式]]、[[积分判别法]] 同属「和与积分比较」的族：这里的和是 $\ln n!=\sum\ln k$，积分是 $\int\ln x$。

> [!warning] 陷阱
> $n!\sim\sqrt{2\pi n}(n/e)^n$ 是等价量，不是等式；把 $\sim$ 当等号会丢掉相对误差 $O(1/n)$ 给出的修正。含阶乘的级数判敛散时，常需要的是「对数级」的精度（用到 $e^{\frac{1}{12n}}$ 项）而非仅主项。

## 相关概念

- [[Euler-Maclaurin公式]]
- [[积分判别法]]
- [[级数的渐近估计]] — 与积分作渐近展开的一般思路
