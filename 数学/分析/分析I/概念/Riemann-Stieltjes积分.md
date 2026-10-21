---
title: Riemann-Stieltjes积分
created: 2026-10-03
updated: 2026-10-03
type: concept
tags: [analysis, analysis-I, integration, zh]
sources: [分析I 课程笔记(本人手写扫描)]
confidence: medium
---

# Riemann-Stieltjes 积分

## 定义

> [!note] 定义
> 设 $\mu:[a,b]\to\mathbb{R}$ 单调增。取分划 $\sigma:a=x_0<x_1<\dots<x_n=b$，记 $m_i=\inf_{[x_{i-1},x_i]}f$、$M_i=\sup_{[x_{i-1},x_i]}f$，把第 $i$ 段的"长度"取为 $\mu(x_i)-\mu(x_{i-1})$，定义上、下和
> $$\overline S_\sigma(f)=\sum_{i=1}^n M_i\big(\mu(x_i)-\mu(x_{i-1})\big),\qquad
> \underline S_\sigma(f)=\sum_{i=1}^n m_i\big(\mu(x_i)-\mu(x_{i-1})\big).$$
> 若 $\sup_\sigma\underline S_\sigma=\inf_\sigma\overline S_\sigma$，称 $f$ 关于 $\mu$ 的 Riemann-Stieltjes 可积，积分记为 $\int_a^b f\,d\mu$。

## 为什么

把 Riemann 积分中的"区间长度" $x_i-x_{i-1}$ 换成 $\mu(x_i)-\mu(x_{i-1})$，就能把"带权求和""带跳跃的求和"统一成一种积分：$\mu$ 是"权"。$\mu$ 增保证 $\mu(x_i)-\mu(x_{i-1})\ge0$，于是上和、下和的单调性与夹杂性质与 Riemann 情形完全相同，判据（上、下确界相等）形式不变。

> [!warning] 陷阱
> $\mu$ 不必连续。当 $\mu$ 在一点跳跃时，积分在该点的贡献只由被积函数在该点的值乘以跳跃量决定——权可以"集中"在一点，这是普通 Riemann 积分（$\mu(x)=x$）不会出现的情形。

> [!example]
> $\mu$ 取值 $1$（$x\in[0,1[$）、$3$（$x\in[1,2]$），只有 $x=1$ 处一次跳跃（跳跃量 $2$）；对连续 $f$，积分等于 $2f(1)$，权全部落在跳跃点。

## 方法对比

- $\mu(x)=x$ 时退化为普通 Riemann 积分；故 Stieltjes 是可积性的推广，判据、线性性、区间可加性一并继承。
- 分部积分在 Stieltjes 框架下有统一形式，见 [[Abel求和公式]]；它把对 $d\mu$ 的积分换成对 $dx$ 的积分。
- 可积性要求函数有界，与 [[Riemann可积性]] 一致；$\mu$ 增是可积性判据成立的关键前提。

## 相关概念

- [[Abel求和公式]] — Stieltjes 形式的分部积分
- [[Riemann可积性]] — 取 $\mu(x)=x$ 的特例
- [[分部积分]] — 分部求和思想的 Riemann 版本
- [[fonction-de-repartition]] — 以分布函数为积分元即概率期望的 Stieltjes 形式

## 相关笔记

- [[10-Stieltjes积分与素数分布|分析I · 10-Stieltjes积分与素数分布]]
