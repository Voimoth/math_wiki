---
title: 傅里叶级数的收敛理论
created: 2026-08-31
updated: 2026-08-31
type: concept
tags: [convergence, fourier-series, proof-technique]
sources: []
confidence: high
---

# 傅里叶级数的收敛理论 (Convergence of Fourier Series)

## 三种收敛模式(核心框架)

傅里叶级数收敛问题必须区分三种意义:

| 模式 | 含义 | 关键定理 | 成立条件 |
|---|---|---|---|
| **点态收敛** | 每点 $x$ 处部分和 $S_N(f)(x) \to$ 某值 | Dirichlet-Jordan 定理 | $f$ 有界变差(含分段单调) |
| **一致收敛** | $\sup_x \|S_N(f)(x) - f(x)\| \to 0$ | 傅里叶系数绝对可和(如 $f \in C^1$,或 $f$ 连续且分段光滑) | 光滑性足够强 |
| **$L^2$ 收敛** | $\|S_N(f) - f\|_{L^2} \to 0$ | Riesz-Fischer / Parseval | 只需 $f \in L^2$ |

## 关键定理

### 1. Riemann-Lebesgue 引理
$$\hat{f}(n) = \frac{1}{2\pi}\int_{-\pi}^{\pi} f(x)e^{-inx}\,dx \to 0 \quad (|n|\to\infty)$$
"高频成分最终衰减"——系数趋于 0 的必要条件,处处可用。

### 2. Dirichlet-Jordan 定理(点态收敛)
若 $f$ 在 $x_0$ 附近有界变差(充分条件:分段单调),则:

$$S_N(f)(x_0) \to \frac{f(x_0^+) + f(x_0^-)}{2}$$

即:**连续点收敛到 $f(x_0)$,跳跃间断点收敛到左右极限均值**。这是"傅里叶级数在什么意义下等于函数"的最实用答案。

### 3. Fejér 定理(一致收敛的补救)
若 $f$ 连续,则 **Cesàro 平均** $\sigma_N(f) = \frac{1}{N}\sum_{k=0}^{N-1}S_k(f)$ **一致收敛**到 $f$。
用 [[fejer-kernel]] 证明——核是正的,规避了 Dirichlet 核的振荡问题。

### 4. Carleson 定理(1966,深刻)
$f \in L^2$ 时,傅里叶级数**几乎处处**点态收敛。极其深刻的现代结果,证明极长——学习阶段知道结论即可。

## 直觉

- **为什么会有收敛问题?** 因为部分和是"用三角多项式逼近 $f$",而 $f$ 可能很粗糙(甚至不连续)。逼近"坏函数"时,傅里叶级数可能发散(Du Bois-Reymond 例:连续函数某点发散)。
- **点态 vs $L^2$**:$L^2$ 收敛像"面积逼近",点态收敛像"逐点值逼近"。面积逼近容易,逐点逼近难。
- **光滑性决定收敛速度**:$f$ 越光滑,系数衰减越快(如 $f \in C^k$ ⟹ $\hat{f}(n) = O(1/n^k)$),收敛越快。

## 学习提示(中法班路径)

- 法国体系经典讲法:先证明 **Fejér 定理**(正的核,较易)→ 推出 Weierstrass 三角逼近定理 → 再用 Dirichlet 核处理点态收敛 → 最后 $L^2$ 理论。
- 你的级数理论基础(一致收敛、绝对收敛)是直接前置。
- 常见误区:把"点态收敛"当作默认意义。做题/证明时**先声明用的是哪种收敛**。
- 不连续点的行为看 [[gibbs-phenomenon]]。

## 收敛理论地图(第3-4章概览)

> 核心问题:给定 $f$,$S_N(f)(x)$ 在 $N\to\infty$ 时收敛吗?收敛到哪?

**主线(第3章开头)**:部分和改写为卷积

$$S_N(x) = \frac{1}{2\pi}\int_{-\pi}^{\pi} f(x-s)D_N(s)\,ds, \qquad D_N(u)=\frac{\sin(N+\frac12)u}{\sin\frac u2}$$

收敛问题 → 变成"加权平均的权函数 $D_N$ 的行为"问题。

**三座里程碑**:
1. **Riemann-Lebesgue**(Lemma 3.1):系数必趋于 0——一切收敛理论的起点
2. **局部化原理**:收敛性只取决于 $x_0$ 附近取值(积分远处部分消失)
3. **Dini 条件 / Dirichlet-Jordan**:分段光滑 ⟹ $S_N \to \frac{f(x^+)+f(x^-)}2$;光滑性 ⟹ 系数 $o(1/n^k)$(3.1节)

**为什么需要 Cesàro/Abel(第4章)**:$\int|D_N| \sim \log N \to \infty$($D_N$ 振荡),点态收敛需额外条件,甚至有连续函数发散的例子。换正核 $F_N$ 解决:
- **Fejér 核三条黄金性质**:$\int F_N=1$、$F_N\ge0$、远离0处 $\to0$
- **Fejér 定理**:连续函数 ⟹ Cesàro 平均 $\sigma_N$ 一致收敛 ⟹ Weierstrass 三角逼近
- **Abel 求和**(4.2):乘 $r^n$ 再 $r\to1$,发散级数"算"出值(Hardy《Divergent Series》)

**三种收敛对比**:

| 收敛类型 | 工具 | 条件 | 结论 |
|---|---|---|---|
| 点态(第3章) | Dirichlet 核+局部化 | 分段光滑/有界变差 | 每点收敛到均值 |
| 一致(第4章 Cesàro) | Fejér 核 | 只需连续 | $\sigma_N$ 一致收敛 |
| L²(第5章) | 内积/Parseval | 只需平方可积 | $\|S_N-f\|_{L^2}\to0$ |

⚠️ **常见误区**:第4章的一致收敛是对 $\sigma_N$(Cesàro 平均),不是 $S_N$!$S_N$ 点态收敛仍需第3章条件。两个定理各管各的。

**光滑性→收敛速度阶梯**:可积(系数→0,R-L) → 分段光滑(点态收敛到均值) → 连续($\sigma_N$ 一致收敛) → $C^k$(系数 $o(1/n^k)$,一致收敛且快)

## 相关概念

- [[fourier-series]] — 被研究收敛性的对象
- [[dirichlet-kernel]] — 点态收敛的核
- [[fejer-kernel]] — 一致收敛与 Cesàro 求和
- [[parseval-identity]] — $L^2$ 收敛的等价形式
- [[gibbs-phenomenon]] — 不连续点附近的过冲
- [[orthogonal-system]] — 投影视角的收敛
