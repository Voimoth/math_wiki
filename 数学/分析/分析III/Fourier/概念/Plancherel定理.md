---
title: Plancherel定理
created: 2026-10-03
updated: 2026-10-03
type: concept
tags: [fourier-transform, l2, isometry, 分析III]
sources: [fourier-讲义-2026-09-21.txt]
confidence: high
---

# Plancherel 定理

> [!question] 本页要回答什么？
> Fourier 变换是否保持“能量”？$\int|f|^2$ 与 $\int|\hat f|^2$ 有什么关系？

## 定理

> [!note] Plancherel
> 若 $f\in S(\mathbb{R})$，则
> $$\|f\|=\|\hat f\|,\qquad\text{即}\quad\int_{-\infty}^{\infty}|f(x)|^2dx=\int_{-\infty}^{\infty}|\hat f(\xi)|^2d\xi.$$

## 证明要点

> [!tip]
> 令 $f^b(x)=f(-x)$，算得 $\widehat{f^b}=\hat f$。取卷积 $h=f*f^b$，则
> $$\hat h(\xi)=\hat f(\xi)\widehat{f^b}(\xi)=|\hat f(\xi)|^2,\qquad h(0)=\int_{-\infty}^{\infty}|f|^2(x)\,dx.$$
> 因为 $h\in S(\mathbb{R})$，由求逆公式 $h(0)=\int\hat h(\xi)\,d\xi$，即得结论。
> 关键技巧：用一个自卷积把 $|\hat f|^2$ 实现为某个速降函数的变换，从而可以调用反演。

## 意义与完备化

- 内积取 Hermite 形式 $\langle f,g\rangle=\int f\bar g\,dx$（复值函数），在此内积下 Fourier 变换是 **$S(\mathbb{R})$ 到自身的等距**。
- 定义 $L^2(\mathbb{R},\mathbb{C})$ 为 $S(\mathbb{R})$ 在 $L^2$ 范数下的**完备化**，则 Fourier 变换延拓为 $L^2(\mathbb{R},\mathbb{C})$ 到自身的等距——Hilbert 空间上的**酉算子**。

## 方法对比与陷阱

> [!info] 与级数理论的平行
> [[Parseval恒等式]] 是离散正交系下的“能量守恒”；Plancherel 是连续情形的对应物，两者都来自同一个几何事实：正交分解保持平方范数。

> [!warning]
> 在 $L^2$ 上，Fourier 变换由**均方极限**定义，因为一般的 $L^2$ 函数其直接积分未必绝对收敛；$S(\mathbb{R})$ 上的积分公式不能无条件照搬到 $L^2$。这是“先在小空间证明、再完备化”的典型例子。

## 相关概念

- [[傅里叶变换]]
- [[傅里叶逆变换]]
- [[速降函数]]
- [[Parseval恒等式]] — 离散对应物
- [[L²理论与Hilbert空间]] — 与级数理论共用的几何视角
