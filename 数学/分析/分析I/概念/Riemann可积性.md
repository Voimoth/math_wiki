---
title: Riemann可积性（intégrabilité au sens de Riemann）
created: 2026-10-03
updated: 2026-10-03
type: concept
tags: [analysis, analysis-I, zh]
sources: [分析I 课程笔记(本人手写扫描)]
confidence: medium
---

# Riemann可积性（intégrabilité au sens de Riemann）

## 定义

> [!note] Déf.（Riemann 可积）
> 设分割 $\sigma:x_0=a<\dots<x_n=b$，记网格 $\delta(\sigma)=\max_i(x_{i+1}-x_i)$，$\Delta x_i=x_{i+1}-x_i$。称 $f$ 在 $[a,b]$ 上 **Riemann 可积**，若存在 $I\in\mathbb{R}$，使 $\forall\varepsilon>0$，$\exists\delta_\varepsilon>0$：当 $\delta(\sigma)<\delta_\varepsilon$ 时，$\forall\xi_i\in[x_i,x_{i+1}]$，
> $$\Big|\sum_{i=0}^{n-1}f(\xi_i)\Delta x_i-I\Big|<\varepsilon.$$
> 记 $I=\int_{[a,b]}f$。

## Darboux 上下和

> [!note] Déf.
> 记 $M_i=\sup_{[x_i,x_{i+1}]}f$，$m_i=\inf_{[x_i,x_{i+1}]}f$，定义**上和** $\overline S(f,\sigma)=\sum M_i\Delta x_i$ 与**下和** $\underline S(f,\sigma)=\sum m_i\Delta x_i$（Darboux 和）。
> - 加细分割使上和减小、下和增大：$\sigma'$ 更细 $\Rightarrow \overline S(f,\sigma')\le\overline S(f,\sigma)$，$\underline S(f,\sigma')\ge\underline S(f,\sigma)$。
> - 任意两个分割满足 $\underline S(f,\sigma)\le\overline S(f,\sigma')$。

> [!note] Th.（充要条件）
> 记 $\overline I=\inf_\sigma\overline S(f,\sigma)$（上积分），$\underline I=\sup_\sigma\underline S(f,\sigma)$（下积分），则
> $$f\ \text{Riemann 可积}\iff\overline I=\underline I.$$

> [!tip] 证明要点
> "$\Rightarrow$"：取网格足够小的分割，$\underline S(f,\sigma)\le I\le\overline S(f,\sigma)$ 且 $\overline S-\underline S<2\varepsilon$，故 $|\overline I-\underline I|<2\varepsilon$，由 $\varepsilon$ 任意得 $\overline I=\underline I$。
> "$\Leftarrow$"：设 $\overline I=\underline I=I$，则对任一分割 $\underline S(f,\sigma)\le I\le\overline S(f,\sigma)$；网格充分小时 $\overline S-\underline S<\varepsilon$，于是任一 Riemann 和 $S$ 满足 $|S-I|<\varepsilon$，故可积。

## 可积函数类

> [!example]
> - 单调函数可积。
> - 连续函数在 $[a,b]$ 上可积。
> - 只有有限个间断点的函数可积（含所有 $CM$ 函数）。
> - 等价判据：$f$ 可积 $\iff\lim_{\delta(\sigma)\to0}\sum(M_i-m_i)\Delta x_i=0$。

## 概念性陷阱

- **「振幅和趋于零」与「网格趋于零」要分清**：可积性判据是 $\sum(M_i-m_i)\Delta x_i\to0$（当网格 $\to0$），不是单个 $(M_i-m_i)\to0$。
- **$f$ 可积 $\Rightarrow f$ 有界**：无界函数不可积（定义中 $M_i$ 无意义）。
- **Riemann 可积 $\ne$ 有原函数**：可积函数未必是某函数的导数（如阶跃函数），反之有原函数的函数也未必可积（导数可能无界）。
- **取点 $\xi_i$ 任意**：定义要求对任意取点都成立，因此不能用某一种特殊取点的极限代替。

## 相关概念

- [[阶梯函数与阶梯积分]] — 有限和的雏形
- [[分段连续函数]] — 一类可积函数
- [[Newton-Leibniz公式]] — 可积与求导的桥梁
- [[积分中值定理]] — 可积函数的平均行为
- [[向量值函数的积分]] — 积分推广到向量值函数

## 相关笔记

- [[08-积分|分析I · 08-积分]]
