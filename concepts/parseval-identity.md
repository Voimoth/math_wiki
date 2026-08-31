---
title: Parseval 恒等式
created: 2026-08-31
updated: 2026-08-31
type: concept
tags: [fourier-series, orthogonal-system, proof-technique]
sources: []
confidence: high
---

# Parseval 恒等式 (Parseval's Identity)

## 定义

对 $f \in L^2[-\pi,\pi]$:

$$\frac{1}{2\pi}\int_{-\pi}^{\pi} |f(x)|^2\,dx = \sum_{n=-\infty}^{\infty} |\hat{f}(n)|^2$$

实形式:

$$\frac{1}{\pi}\int_{-\pi}^{\pi} f(x)^2\,dx = \frac{a_0^2}{2} + \sum_{n=1}^{\infty}(a_n^2 + b_n^2)$$

即:**函数能量 = 各频率成分能量之和**("能量守恒")。

## 广义形式(更有用)

对 $f, g \in L^2$:

$$\frac{1}{2\pi}\int_{-\pi}^{\pi} f(x)\overline{g(x)}\,dx = \sum_{n=-\infty}^{\infty} \hat{f}(n)\overline{\hat{g}(n)}$$

(由极化恒等式从 Parseval 推出)

## 直觉

- 这就是线性代数里的 **Pythagoras 定理**:正交分解后,长度的平方 = 各坐标平方和。
- $f \mapsto (\hat{f}(n))_{n}$ 是 $L^2[-\pi,\pi]$ 到 $\ell^2(\mathbb{Z})$ 的**等距同构**(保范双射)——函数空间与序列空间"长得一样"。
- 物理:信号的总功率等于各谐波功率之和,是频谱分析的理论基石。

## 证明要点

- 先证 Bessel 不等式(见 [[orthogonal-system]]),再证等号成立。
- 关键一步:证明三角多项式在 $L^2$ 中稠密(由 [[fejer-kernel]] 的 Weierstrass 定理或其 $L^2$ 版本),从而投影的误差范数趋于 0。
- 等价链条:**完备性 ⟺ Parseval ⟺ $L^2$ 收敛 ⟺ Riesz-Fischer**——证明通常选最方便的一环。

## 应用

1. **计算求和**:经典例 $\sum_{n=1}^{\infty}\frac{1}{n^2} = \frac{\pi^2}{6}$(对 $f(x)=x$ 用 Parseval)。
2. **能量/范数计算**:不必做积分,直接数系数。
3. **等距同构**:把函数问题翻译成序列问题(如 $\ell^2$ 上的算子理论)。

## 学习提示

- 你的线性代数背景完美衔接:这就是"正交基下范数公式"的无穷维版本。
- 中法班注意:法国教材常在 Hilbert 空间框架(先讲一般内积空间 + 正交投影)下给出 Parseval,再落到具体三角系。
- 常见误区:Parseval 要求 $L^2$(平方可积)。对 $L^1$ 但非 $L^2$ 的函数(如 $f(x)=1/\sqrt{|x|}$ 附近),级数 $\sum|\hat f(n)|^2$ 可能发散。
- 考试高频:给一个函数算 $\sum \frac{1}{n^2}$ 类级数、验证两个函数正交性、证明 $L^2$ 收敛。

## 相关概念

- [[orthogonal-system]] — Bessel 不等式与完备性
- [[convergence-of-fourier-series]] — $L^2$ 收敛的等价形式
- [[fourier-series]] — 系数定义
