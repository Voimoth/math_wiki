---
title: Dirichlet判别法
created: 2026-10-03
updated: 2026-10-03
type: concept
tags: [analysis, analysis-I, series, zh]
sources: [分析I 课程笔记(本人手写扫描)]
confidence: medium
---

# Dirichlet 判别法（数项级数）

对变号级数，若一个因子只在**部分和有界**的意义下有界，另一个因子单调趋零，则级数收敛。

> [!note] Th（Dirichlet 判别法）
> 设 $(a_n)$、$(b_n)$ 为两序列，$S_n=\sum_{k=1}^n a_k$。若 $b_n$ 单调 $\to0$ 且 $(S_n)$ 有界，则 $\sum a_nb_n$ 收敛。

## 为什么

关键工具是 Abel 求和（分部求和）恒等式
$$\sum_{k=1}^p a_{n+k}b_{n+k}=\sum_{k=1}^{p-1}\tilde S_k(b_{n+k}-b_{n+k+1})+\tilde S_pb_{n+p},\qquad \tilde S_k=\sum_{i=1}^k a_{n+i}.$$
用 Cauchy 准则估计这段尾和：$\tilde S_k$ 有界（由 $S_n$ 有界）+ $\sum|b_{n+k}-b_{n+k+1}|$ 由 $b_n\to0$ 单调控制，得整体 $\le3C\varepsilon$，故部分和是 Cauchy 列。

$\sum(-1)^{n-1}a_n$（[[交错级数]]）是 $a_n=(-1)^{n-1}$、部分和 $\in\{0,1\}$ 的特例；$\sum\frac{\cos nx}{n}$（$\sin\frac x2\ne0$ 时 $\sum\cos nx$ 有界）是另一典型。

## 概念要点与陷阱

> [!warning] 「有界」是部分和有界，不是通项有界
> $(S_n)$ 有界指 $\left|\sum_{k\le N}a_k\right|\le C$ 对一切 $N$，通项 $a_n$ 本身不必趋于 $0$（如 $\cos nx$ 的通项就不趋于 $0$）。单调的是 $b_n$，不是 $a_n$。

与 [[Abel判别法]] 的区别：Dirichlet 要求 $\sum a_n$ 的部分和**有界**、$b_n\to0$；Abel 要求 $\sum a_n$ **收敛**、$b_n$ 单调有界。二者互为对照，证明共用同一个分部求和恒等式。

## 相关概念

- [[Abel判别法]]
- [[交错级数]]
- [[Abel与Dirichlet判别法]] — 一致收敛版本的对应判别法

## 相关笔记

- [[15-级数|分析I · 15-级数]]
