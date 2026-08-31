---
title: 正交函数系
created: 2026-08-31
updated: 2026-08-31
type: concept
tags: [orthogonal-system, fourier-series, proof-technique]
sources: []
confidence: high
---

# 正交函数系 (Orthogonal Systems)

## 定义

$L^2[a,b]$ 中的函数族 $\{\varphi_n\}$ 称为**正交系**,若

$$\langle \varphi_m, \varphi_n \rangle = \int_a^b \varphi_m(x)\overline{\varphi_n(x)}\,dx = 0 \quad (m \neq n)$$

若还满足 $\|\varphi_n\| = 1$,则称**标准正交系 (orthonormal system)**。

## 直觉

- 这就是有限维内积空间正交基(线性代数)的无穷维推广——你的线性代数基础直接迁移。
- 傅里叶级数的本质:在正交系 $\{e^{inx}\}$ 上做**正交投影**,系数就是"坐标"。
- 类比:$\mathbb{R}^3$ 中向量按标准基分解;函数空间 $L^2$ 中函数按谐波基分解。

## 关键定理

1. **Bessel 不等式**:对任意标准正交系 $\{e_n\}$ 和 $f \in L^2$:

$$\sum_n |\langle f, e_n \rangle|^2 \leq \|f\|^2$$

   "任意正交系下,投影坐标的平方和不超过原向量长度平方"——几何上显然,证明也直接。
2. **完备性 (completeness)**:若 Bessel 不等式中等号对所有 $f$ 成立,称 $\{e_n\}$ 完备(即构成正交基)。对 $\{e^{inx}\}$ 恰有 $\sum |\hat{f}(n)|^2 = \|f\|^2$,即 [[parseval-identity]]。
3. **Riesz-Fischer**:系数平方可和的序列必对应某个 $L^2$ 函数——$L^2$ 与 $\ell^2$ "同构"。

## 证明要点

- Bessel 不等式:对有限和 $g_N = \sum_{n \leq N} c_n e_n$,利用 $\|f - g_N\|^2 \geq 0$,取 $c_n = \langle f,e_n\rangle$ 展开即得。
- 完备性 ⟺ Parseval ⟺ $L^2$ 收敛(三者等价,一环扣一环)。

## 学习提示

- 中法班体系:L2 课程里这通常放在"内积空间与正交投影"框架下讲,和法国教材的习惯一致(先 Hilbert 空间,再具体到三角系)。
- 常见误区:正交性依赖具体区间和权函数;换区间 $[a,b]$ 要重算范数。
- 进阶:Gram-Schmidt 过程(线性代数已有)→ 勒让德多项式等正交多项式系。

## 相关概念

- [[fourier-series]] — 本概念的直接应用
- [[parseval-identity]] — 完备正交系的标志
- [[convergence-of-fourier-series]] — 正交投影视角下的收敛
