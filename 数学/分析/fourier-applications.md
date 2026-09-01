---
title: 傅里叶分析的应用
created: 2026-08-31
updated: 2026-08-31
type: concept
tags: [fourier-series, fourier-transform, proof-technique, learning-path]
sources: [fourier-handout-2026-raw.md]
confidence: high
---

# 傅里叶分析的应用(讲义第 6、8 章)

> 傅里叶分析的"威力展示":解方程、几何不等式、数论、分析反例。

## 1. 解方程(6.1, 8.1)

**有界区间**(分离变量,讲义 1.2 已有):热方程 $u_t = ku_{xx}$, $u(0,t)=u(l,t)=0$

$$u(x,t) = \sum_{n=1}^{\infty} a_n e^{-n^2\pi^2kt/l^2}\sin\frac{n\pi x}{l}$$

系数由初值 $f$ 的 Fourier 级数确定——**Fourier 级数是解 PDE 的"坐标分解"**。

**直线上的热方程**(8.1,用变换):$\hat{u}(\xi,t) = \hat{f}(\xi)e^{-4\pi^2\xi^2 t}$

$$u(x,t) = (f * H_t)(x), \quad H_t(x) = \frac{1}{\sqrt{4\pi t}}e^{-x^2/4t}$$

热核 $H_t$:变换把微分方程变成 ODE,解完再逆变换——**"变换→代数→逆变换"三步法**。

## 2. 等周不等式(6.2,经典)

平面上闭曲线围成的面积 $A$ 与周长 $l$ 满足:

$$A \leq \frac{l^2}{4\pi}$$

**证明思路**(讲义):参数化 $x(s), y(s)$(弧长参数,$|x'|^2+|y'|^2=1$ 平均意义下)→ 用 Parseval 把周长条件翻译成系数约束 $\sum n^2(|a_n|^2+|b_n|^2)=1$ → 面积用系数交错和表示 → Cauchy 不等式收尾。**Fourier 系数成了几何量的"坐标"**。

## 3. Weyl 等分布定理(6.3, *)

对无理数 $\alpha$,$\{n\alpha \bmod 1\}$ 在 $[0,1]$ 上均匀分布:

$$\frac{1}{N}\sum_{n=1}^{N} f(\{n\alpha\}) \to \int_0^1 f(x)\,dx \quad (f \text{ 连续})$$

证明:先用阶梯函数逼近,再对 $f(x) = e^{2\pi ikx}$ 验证(几何级数求和 $\to 0$)。**分析、数论、遍历论的交叉点**。

## 4. 连续函数有发散 Fourier 级数(6.4, *)

构造连续函数 $F$ 使 $S_N(F)(0)$ 发散(用"伸长块" $P_k$ 叠加 + 光滑化系数 $\beta_k$ 技巧)。

**意义**:即便 $f$ 连续,点态收敛也不保证——这就是为什么需要 [[fejer-kernel]] 的 Cesàro 平均(它保证一致收敛)。也说明点态收敛理论(第 3 章)的必要性。

## 5. Poisson 求和公式(8.2)

$$\sum_{n\in\mathbb{Z}} f(x+n) = \sum_{n\in\mathbb{Z}} \hat{f}(n)e^{2\pi inx}$$

**经典应用**:$\sum_{n\in\mathbb{Z}}\frac{1}{(n+\beta)^2} = \frac{\pi^2}{\sin^2(\pi\beta)}$(对三角形函数 $g$ 用 Parseval + Poisson)。

**本质**:把 $\mathbb{R}$ 上的 Fourier 变换与 $\mathbb{T}$ 上的 Fourier 级数**桥接**——这是 [[fourier-series]] 与 [[fourier-transform]] 的联络。

## 6. 海森堡不确定性原理(8.3, *)

$$\Bigl(\int_{\mathbb{R}} x^2|f(x)|^2dx\Bigr)\Bigl(\int_{\mathbb{R}} \xi^2|\hat{f}(\xi)|^2d\xi\Bigr) \geq \frac{1}{16\pi^2}\|f\|_{L^2}^4$$

**取等条件**:高斯函数 $f(x) = Ae^{-Bx^2}$。**函数与它的变换不能同时"太集中"**——量子力学与信号处理的核心原理。

## 学习提示

- 必学:1(解方程)、2(等周)、5(Poisson);(*) 项按兴趣。
- 等周不等式的证明是"Parseval 用法的教科书示范",建议亲手写一遍。
- 这章是"学了有什么用"的答案——学完傅里叶分析后要能讲出这几大应用。

## 相关概念

- [[fourier-transform]] — 直线情形的主要工具
- [[fourier-series]] — 周期情形的主要工具
- [[parseval-identity]] — 等周不等式与 Poisson 求和的引擎
- [[fejer-kernel]] — 与发散反例对比
- [[fourier-handout-2026]] — 讲义第 6、8 章
