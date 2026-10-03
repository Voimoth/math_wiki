---
title: Abel判别法
created: 2026-10-03
updated: 2026-10-03
type: concept
tags: [analysis, analysis-I, series, zh]
sources: [分析I 课程笔记(本人手写扫描)]
confidence: medium
---

# Abel 判别法（数项级数）

若 $\sum a_n$ 收敛而 $b_n$ 单调有界，则逐项相乘后仍收敛。

> [!note] Th（Abel 判别法）
> 设 $(a_n)$、$(b_n)$ 为两序列。若 $\sum a_n$ 收敛，$b_n$ 单调有界，则 $\sum a_nb_n$ 收敛。

## 为什么

与 [[Dirichlet判别法]] 共用 Abel 求和（分部求和）恒等式
$$\sum_{k=1}^p a_{n+k}b_{n+k}=\sum_{k=1}^{p-1}\tilde S_k(b_{n+k}-b_{n+k+1})+\tilde S_pb_{n+p},\qquad \tilde S_k=\sum_{i=1}^k a_{n+i}.$$
$\sum a_n$ 收敛使尾部 $\tilde S_k$ 一致小，$b_n$ 单调有界使 $\sum|b_{n+k}-b_{n+k+1}|$ 被 $|b_{n+1}-b_{n+p}|$ 控制，于是同样用 Cauchy 准则得 $\le3C\varepsilon$。

它是 Dirichlet 判别的「对偶」：把「部分和有界、$b_n\to0$」换成「$\sum a_n$ 收敛、$b_n$ 单调有界」。Abel 判别法可由 Dirichlet 判别法经「平移掉 $b$ 的极限」推出，反之不显然。

## 陷阱

> [!warning] 看清单调与有界的对象
> 单调有界的是 $b_n$；$\sum a_n$ 只需收敛（可条件收敛）。切勿把「$b_n$ 有界」误当成「$a_n$ 有界」，也勿把 $\sum a_nb_n$ 收敛的条件误记成 $\sum b_n$ 收敛。

## 相关概念

- [[Dirichlet判别法]]
- [[交错级数]]
- [[Abel与Dirichlet判别法]] — 一致收敛版本的对应判别法
- [[Abel求和]] — 幂级数极限形式的 Abel 型结论

## 相关笔记

- [[15-级数|分析I · 15-级数]]
