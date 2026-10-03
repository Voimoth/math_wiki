---
title: Laplace算子与调和函数
created: 2026-10-03
updated: 2026-10-03
type: concept
tags: [analysis, analysis-I, zh]
sources: [分析I 课程笔记(本人手写扫描)]
confidence: medium
---

# Laplace 算子与调和函数

> [!note] 定义
> Laplace 算子把函数映为各二阶偏导之和：
> $$\Delta f=\frac{\partial^2 f}{\partial x_1^2}+\cdots+\frac{\partial^2 f}{\partial x_n^2}=\operatorname{div}(\nabla f)=\nabla\cdot\nabla f .$$
> 若 $\Delta f=0$，称 $f$ 为**调和函数**（fonction harmonique）。

> [!example] 基本例子
> - $\mathbb{R}^3$ 中 $\Delta\frac{1}{r}=0$（$r=\sqrt{x_1^2+x_2^2+x_3^2}$）；
> - $\mathbb{R}^2$ 中 $\Delta\log r=0$（$r=\sqrt{x_1^2+x_2^2}$）。
> 这两者分别是三维、二维的「基本解」，与位势理论相关。

> [!warning] 概念性陷阱
> - 混淆 $\Delta$（Laplace 算子）与增量记号 $\Delta(h,k)$：同一个符号两种含义，注意上下文。
> - 使用 $\Delta(\log r)=0$ 时要避开 $r=0$，调和性只在定义域（挖去原点）上成立。

## 相关概念

- [[混合偏导数相等]] — 保证 $\Delta$ 的定义不依赖求导次序
- [[向量场的散度与旋度]] — $\Delta=\operatorname{div}\nabla$
