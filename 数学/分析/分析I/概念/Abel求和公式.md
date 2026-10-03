---
title: Abel求和公式（分部求和）
created: 2026-10-03
updated: 2026-10-03
type: concept
tags: [analysis, analysis-I, integration, summability, zh]
sources: [分析I 课程笔记(本人手写扫描)]
confidence: medium
---

# Abel 求和公式（分部求和）

## 定义

> [!note] Th.（分部求和 / Stieltjes 分部积分）
> 设 $\mu:[a,b]\to\mathbb{R}$ 单调增，$f\in C^1([a,b])$，则
> $$\int_a^b f'\mu\,dx=f\mu\Big|_a^b-\int_a^b f\,d\mu.$$
> 离散形式：记部分和 $A_k=\sum_{i=1}^k a_i$，则
> $$\sum_{k=m}^n a_kb_k=\sum_{k=m}^n A_k\,(b_k-b_{k+1})+A_nb_n.$$

## 为什么

它是"乘积求导"在求和/积分层面的对偶：$(fg)'=f'g+fg'$ 移项得 $f'g=(fg)'-fg'$，两边取积分就得到 $\int f'g=(fg)|-\int fg'$；把 $g$ 换成增函数 $\mu$、把 $g'$ 换成 $d\mu$，即得 Stieltjes 版本。作用是把"对 $\mu$ 的积分"转成"对 $dx$ 的积分"（或反之），使边界项把不光滑的部分隔离开。

## 证明要点

由 Stieltjes 积分的定义，对任一列分划，
$$\int_a^b f\,d\mu=\sum_{i=0}^{n-1}f(x_i)\big(\mu(x_{i+1})-\mu(x_i)\big)+o(1);$$
用 Abel（分部）变换重排求和，把 $f(x_i)$ 的差分 $f(x_i)-f(x_{i+1})$ 换出来，再把 $f$ 的差分写成 $f'(x)\,dx$ 的积分，即得 $f\mu|_a^b-\int_a^b\mu f'\,dx$。

## 概念性陷阱

- **同名不同实**：这里的"Abel 求和公式"是分部求和恒等式，与 [[Abel求和]]（用幂级数 $x\to1^-$ 给发散级数赋值的广义求和方法）是两回事。
- **边界项不能漏**：$f\mu|_a^b$ 是公式的一半；$\mu$ 有跳跃时，跳跃点对边界项与积分项的分配要一并处理。
- 离散形式中 $\sum A_k(b_k-b_{k+1})$ 要求 $b_k\to$ 待定；用于判别法时必须补上边界项 $A_nb_n$（这正是 [[Abel判别法]]、[[Dirichlet判别法]] 的起点）。

## 相关概念

- [[Riemann-Stieltjes积分]] — 公式的积分载体
- [[分部积分]] — Riemann 积分的同类恒等式
- [[Abel求和]] — 与之同名但含义不同的广义求和
- [[Abel判别法]]

## 相关笔记

- [[09-积分的计算与中值定理|分析I · 09-积分的计算与中值定理]]
- [[10-Stieltjes积分与素数分布|分析I · 10-Stieltjes积分与素数分布]]
- [[16-求和方法(Abel、Cesàro、Tauber)|分析I · 16-求和方法(Abel、Cesàro、Tauber)]]
