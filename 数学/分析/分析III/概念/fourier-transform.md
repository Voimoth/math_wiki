---
title: 傅里叶变换
created: 2026-08-31
updated: 2026-08-31
type: concept
tags: [fourier-transform, harmonic-analysis, convergence]
sources: [fourier-handout-2026-raw.md]
confidence: high
---

# 傅里叶变换 (Fourier Transform)

## 定义(讲义 7.1 约定)

对 $f: \mathbb{R} \to \mathbb{C}$:

$$\hat{f}(\xi) = \int_{-\infty}^{\infty} f(x) e^{-2\pi i x \xi}\,dx$$

> 注意讲义的记号约定:核为 $e^{-2\pi ix\xi}$(无 $\frac{1}{\sqrt{2\pi}}$ 因子),这使 Fourier 变换与逆变换完全对称。不同教材约定不同(有的用 $e^{-i\xi x}$),**做题先看约定**。

## 函数类:缓降函数(讲义特有)

**Definition 7.1**: $f \in M(\mathbb{R})$ 若 $f$ 连续且存在 $A > 0$ 使

$$|f(x)| \leq \frac{A}{1+x^2}, \quad x \in \mathbb{R}$$

- 这是讲义自创的便利函数类:比 $L^1$ 更受控,保证积分绝对收敛且性质好证;
- "2" 次方不是本质的,任何 >1 的幂都行;
- 从这一章起**考虑复值函数**(即使 $f$ 实值,$\hat{f}$ 通常也是复的)。

## 基本性质(Theorem 7.2 等)

1. **连续性 + 衰减**:$f \in M(\mathbb{R}) \Rightarrow \hat{f}$ 连续且 $\lim_{\xi\to\infty}\hat{f}(\xi) = 0$(广义 Riemann-Lebesgue)
2. **平移**:$f(x+h) \mapsto \hat{f}(\xi)e^{2\pi i h\xi}$
3. **调制**:$f(x)e^{-2\pi ixh} \mapsto \hat{f}(\xi+h)$
4. **伸缩**:$f(\delta x) \mapsto \delta^{-1}\hat{f}(\delta^{-1}\xi)$
5. **微分**:$f'(x) \mapsto 2\pi i\xi\,\hat{f}(\xi)$;$-2\pi ix f(x) \mapsto \hat{f}'(\xi)$
6. **高斯不动点**:$f(x)=e^{-\pi x^2} \Rightarrow \hat{f} = f$(讲义用 ODE 法证明:$\int e^{-\pi x^2}dx = 1$)

## 求逆公式与 L² 理论

- **求逆**(7.3):$f(x) = \int_{-\infty}^{\infty}\hat{f}(\xi)e^{2\pi ix\xi}\,d\xi$,且 $\hat{\hat{f}}(x) = f(-x)$
- **Plancherel**(7.4):$\|f\|_{L^2} = \|\hat{f}\|_{L^2}$——Fourier 变换是 $L^2(\mathbb{R})$ 上的等距同构(与级数情形的 [[parseval-identity]] 对应)
- **卷积**:$\widehat{f*g} = \hat{f}\cdot\hat{g}$(乘积公式,讲义 7.4 前)

## 直觉

- 级数把周期函数分解为离散频率 $e^{inx}$;变换把非周期函数分解为**连续谱** $e^{2\pi ix\xi}$。
- 频域视角:$\hat{f}(\xi)$ 度量"频率 $\xi$ 的成分";微分变乘法(把分析问题变代数问题)。
- 与 [[fourier-series]] 的关系:Poisson 求和公式搭桥(见 [[fourier-applications]])。

## 学习提示(中法班)

- 讲义路径:缓降函数 M(R) → 性质 → 求逆 → L²;注意 M(R) 不是 Schwartz 空间 $\mathcal{S}$,但思想一致(快速衰减换性质好)。
- 你的基础衔接:把级数理论中的"正交分解/Parseval/卷积"翻译到 $\mathbb{R}$ 上即可,结构完全平行。
- 常见误区:混淆约定(核的指数系数、积分前的常数因子);忘记伸缩公式的 $\delta^{-1}$。
- 高斯函数 $e^{-\pi x^2}$ 是"万能试金石":几乎所有性质先拿它验证。

## 相关概念

- [[fourier-series]] — 周期情形的对应物
- [[fourier-applications]] — 热核、Poisson 求和、海森堡
- [[parseval-identity]] — 级数版能量守恒,变换版叫 Plancherel
- [[fourier-handout-2026]] — 讲义第 7 章
