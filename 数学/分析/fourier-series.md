---
title: 傅里叶级数
created: 2026-08-31
updated: 2026-08-31
type: concept
tags: [fourier-series, orthogonal-system, convergence, harmonic-analysis]
sources: []
confidence: high
---

# 傅里叶级数 (Fourier Series)

## 定义

对周期为 $2\pi$ 的函数 $f$($[-\pi,\pi]$ 上的可积函数),其**傅里叶级数**为:

$$f \sim \frac{a_0}{2} + \sum_{n=1}^{\infty} \bigl(a_n \cos nx + b_n \sin nx\bigr)$$

其中傅里叶系数(欧拉-傅里叶公式):

$$a_n = \frac{1}{\pi}\int_{-\pi}^{\pi} f(x)\cos(nx)\,dx, \qquad b_n = \frac{1}{\pi}\int_{-\pi}^{\pi} f(x)\sin(nx)\,dx$$

复指数形式更简洁:

$$\hat{f}(n) = \frac{1}{2\pi}\int_{-\pi}^{\pi} f(x)e^{-inx}\,dx, \qquad f \sim \sum_{n=-\infty}^{\infty} \hat{f}(n)e^{inx}$$

> 注意:这里的 $\sim$ 表示"形式地对应",**不自动意味着级数收敛到 $f$**——这正是本领域的核心问题(见 [[convergence-of-fourier-series]])。

## 直觉

- **思想**:任何周期信号都能分解为"基本谐波" $e^{inx}$ 的叠加,系数 $\hat{f}(n)$ 度量频率 $n$ 的成分大小。就像向量在正交基下分解——[[orthogonal-system]]。
- **几何图景**:$\hat{f}(n)$ 是 $f$ 在单位圆上的"投影";傅里叶级数就是把 $f$ 表示成这些投影的线性组合。
- 物理起源:热传导方程(傅里叶 1807 年),振动弦、信号处理。

## 证明要点

- 系数的正交性推导:$e^{inx}$ 族在 $L^2[-\pi,\pi]$ 上两两正交,范数 $\|e^{inx}\| = \sqrt{2\pi}$。
- 部分和算子 $S_N$ 是 $L^2$ 中到三角多项式子空间的**正交投影**——这是理解一切收敛理论(尤其 [[parseval-identity]])的钥匙。

## 学习提示(中法班路径)

- 你的基础(一元微积分 + 级数理论 + 线性代数)完全够用;傅里叶级数是"级数理论的自然延伸",法国体系里通常在 L2 分析课讲到。
- 核心先掌握三件事:**系数怎么算 → 部分和怎么写 → 什么时候收敛**。
- 常见误区:以为"展开式 = 函数本身"。实际只有当收敛定理条件满足时才成立,不连续点处收敛到左右极限均值。
- 下一步自然衔接:傅里叶变换(把周期推广到非周期),需要更多分析基础,标记为后续目标。

## 相关概念

- [[orthogonal-system]] — 傅里叶级数的数学骨架
- [[dirichlet-kernel]] — 部分和的卷积表示
- [[fejer-kernel]] — Cesàro 求和与 Fejér 定理
- [[convergence-of-fourier-series]] — 三种收敛模式
- [[parseval-identity]] — 系数与范数的对应
- [[gibbs-phenomenon]] — 不连续点附近的过冲
