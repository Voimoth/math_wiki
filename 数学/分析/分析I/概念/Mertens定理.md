---
title: Mertens定理
created: 2026-10-03
updated: 2026-10-03
type: concept
tags: [analysis, analysis-I, series, zh]
sources: [分析I 课程笔记(本人手写扫描)]
confidence: medium
---

# Mertens 定理

只要两个级数中**有一个绝对收敛**，Cauchy 乘积就收敛到乘积之积。

> [!note] Th (Mertens)
> 设 $\sum a_n$ 绝对收敛，$\sum b_n$ 收敛，则它们的 Cauchy 乘积 $\sum c_n$（$c_n=\sum_{i+j=n}a_ib_j$）收敛于 $(\sum a_n)(\sum b_n)$。

## 为什么

记部分和 $A_n=\sum_{k\le n}a_k$，$B_n=\sum_{k\le n}b_k$，$B=\sum b_k$，$\beta_k=B-B_k$。Cauchy 乘积的部分和可写成
$$\sum_{k=0}^n c_k=a_0B_n+a_1B_{n-1}+\dots+a_nB_0=A_nB-(a_0\beta_n+a_1\beta_{n-1}+\dots+a_n\beta_0).$$
$\beta_k\to0$（因 $\sum b_n$ 收敛）而 $\sum|a_n|$ 提供一致的可和性（绝对收敛是这里的「求和号可交换」的保证），故第二个括号 $\to0$，于是 $\sum_{k\le n}c_k\to AB$。

## 概念要点

这是 [[Cauchy乘积]] 三类情形中「最实用」的一条：把强条件放在一个因子上（绝对收敛），另一个因子只需收敛。它把「乘积级数收敛」的性质与其中一方的**绝对收敛**绑定，与 [[绝对收敛与条件收敛]] 的整体主题一致。

> [!warning] 前提不能对调为「都收敛」
> 两个都只条件收敛时，Cauchy 乘积可能发散（见 [[Cauchy乘积]] 中的例子），故「一个绝对收敛」不可省略。

## 相关概念

- [[Cauchy乘积]]
- [[绝对收敛与条件收敛]]
- [[级数的结合律与换序]]

## 相关笔记

- [[10-Stieltjes积分与素数分布|分析I · 10-Stieltjes积分与素数分布]]
