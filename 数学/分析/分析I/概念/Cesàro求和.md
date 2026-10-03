---
title: Cesàro求和
created: 2026-10-03
updated: 2026-10-03
type: concept
tags: [analysis, analysis-I, summability, zh]
sources: [分析I 课程笔记(本人手写扫描)]
confidence: medium
---

# Cesàro 求和

用部分和的**平均值**代替部分和本身来定义级数的和，比 Abel 求和不那么「模糊」。

> [!note] Déf.（Cesàro 意义下可求和）
> 设 $S_n=\sum_{k=1}^n a_k$，令 $\sigma_n=\frac1n\sum_{k=1}^n S_k$。若 $\sigma_n\xrightarrow{n\to\infty}L$，称 $\sum_{n=1}^{\infty}a_n$ 在 **Cesàro 意义下可求和**，记为
> $$\sum_{n=1}^{\infty}a_n=L\quad(C).$$

## 为什么

普通和看 $(S_n)$ 是否收敛；Cesàro 和看 $(S_n)$ 的算术平均是否收敛。平均抹平了摆动，所以收敛范围更宽。若 $(S_n)$ 收敛则其平均值也收敛到同一极限——Cesàro 求和与普通求和**相容**。

> [!note] Th.
> $\sum_{n=1}^{\infty}a_n=S\ (C)\Rightarrow\sum_{n=1}^{\infty}a_n=S\ (A)$（Cesàro 可求和蕴含 Abel 可求和）。

**证明要点：** 不妨 $S=0$。由 $n\sigma_n-(n-1)\sigma_{n-1}=S_n$ 得 $S_n=o(n)$、$a_n=o(n)$，故 $|x|<1$ 时 $\sum a_nx^n$ 绝对收敛；再用 Abel 变换把 $\sum a_nx^n$ 写成 $(1-x)^2\sum n\sigma_nx^n$，把尾部按 $\sigma_n\le\varepsilon$ 与 $(1-x)^2\sum n|x|^n=1$ 控制，得 $x\to1^-$ 时极限为 $0$。

## 概念要点

- **求和法的层级**：普通收敛 $\Rightarrow$ Cesàro（$(C)$）$\Rightarrow$ Abel（$(A)$）；箭头不可逆。
- 结构上，Cesàro 求和把「均值」当作求和算子，与 Fourier 级数的 Fejér 平均（[[Cesàro求和与Fejér核]]）是同一思想在不同对象上的体现。

> [!warning] 陷阱
> $(C)$ 可求和的级数未必普通收敛：$\sum(-1)^n$ 的部分和 $0,1,0,1,\dots$，平均趋于 $\frac12$。不要把「Cesàro 和」与「级数的和」混用。

## 相关概念

- [[Abel求和]]
- [[Tauber定理]]
- [[广义求和与Cesàro求和]] — Fourier 级数情形的广义求和
- [[Cesàro求和与Fejér核]]

## 相关笔记

- [[16-求和方法(Abel、Cesàro、Tauber)|分析I · 16-求和方法(Abel、Cesàro、Tauber)]]
