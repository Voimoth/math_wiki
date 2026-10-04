---
title: 二阶线性常系数ODE
created: 2026-10-03
updated: 2026-10-03
type: concept
tags: [分析II, 常微分方程, 常系数, 特征方程]
sources: [殷浩《分析 2》下册]
confidence: high
---

# 二阶线性常系数 ODE

> [!note] 定义
> 设 $a,b\in K$ 是常数,考虑
> $$y''+ay'+by=c(x).$$
> $c$ 称非齐次项;对应的齐次方程是 $y''+ay'+by=0$。

## 1. 解的结构

齐次方程的解集 $S_0$ 是线性空间;非齐次方程的解集 $S=\{f+f_0: f_0\in S_0\}$ 是仿射空间。关键在求 $\dim S_0$ 与一个特解。

## 2. 齐次方程:特征方程

> [!note] 定理
> 令 $\lambda_1,\lambda_2$ 是特征方程 $\lambda^2+a\lambda+b=0$ 的两个根。
> - $\lambda_1\ne\lambda_2$:$S_0=\{x\mapsto c_1e^{\lambda_1x}+c_2e^{\lambda_2x}\}$;
> - $\lambda_1=\lambda_2=\lambda$:$S_0=\{x\mapsto(c_1+c_2x)e^{\lambda x}\}$。
> 复系数时 $c_i\in\mathbb C$。实系数时按根的类型:(i) 两实根,同上(实参数);(ii) 重根 $(c_1+c_2x)e^{\lambda x}$;(iii) 共轭复根 $\alpha\pm\beta i$,则 $c_1e^{\alpha x}\cos\beta x+c_2e^{\alpha x}\sin\beta x$。

> [!tip] 唯一性证明思路
> 先断言:对任何 $t_0$ 和初值 $A,B$,总能解出 $c_1,c_2$ 使 $f(t_0)=A$、$f'(t_0)=B$(线性代数)。于是只需证明满足 $f(t_0)=f'(t_0)=0$ 的齐次解恒为 $0$,用 $(|f|^2+|f'|^2)'\le C(|f|^2+|f'|^2)$ 的 Grönwall 型估计完成。

## 3. 非齐次方程

> [!note] 定理
> 对 $a,b\in K$ 常数与连续函数 $c$,方程 $y''+ay'+by=c(x)$ 有解。证明:把算子分解为 $\left(\frac{d}{dt}+\lambda_1\right)\left(\frac{d}{dt}+\lambda_2\right)$,依次解两个一阶线性方程。

于是解的结构彻底清楚:齐次方程解空间是二维线性空间,非齐次方程解空间是二维仿射空间。

> [!example] 特解的猜测(右端为 $e^{\lambda x}$)
>
> - $\lambda$ 不是特征根:猜 $ce^{\lambda t}$;
> - $\lambda$ 是特征单根:猜 $cte^{\lambda t}$;
> - $\lambda$ 是特征重根:猜 $ct^2e^{\lambda t}$。
> 右端形如 $P(x)e^{\lambda x}$ 也可类似处理(多项式次数按上述规则相应增加)。

> [!note] 初值问题
> 对任何 $(t_0,y_0,y_1)\in I\times K^2$,存在唯一 $f$ 满足方程以及 $f(t_0)=y_0$、$f'(t_0)=y_1$。这是解空间维数(二维)与初值条件个数(两个)的对应。

> [!example] 阻尼振动与共振
> 方程 $y''+2\lambda y'+\omega_0^2y=f(x)$($\lambda>0$ 表示阻力,$\omega_0$ 为固有频率):按 $\lambda^2$ 与 $\omega_0^2$ 的大小分三种齐次解——无周期、临界、阻尼振荡。
> 受迫项 $A\cos\omega t$:用复化方程 $Ae^{i\omega t}$ 求特解。当 $\lambda=0$ 且 $\omega\to\omega_0$ 时解趋于 $\frac{At}{2\omega_0}\sin\omega_0t$,这是共振的数学解释;此时直接猜 $e^{i\omega t}$ 形式的特解失效,需改用 $te^{i\omega_0t}$ 形式。

## 相关概念

- [[一阶线性ODE]]
- [[二阶线性方程理论]]
- [[二阶线性常系数ODE与特征方程]]（分析I）— 一元同型方程与特征方程理论
- [[牛顿决定性原理与微分方程解的唯一性]]（理论力学）— 阻尼振动/共振的力学背景

## 相关笔记

- [[12-常微分方程|分析II · 12-常微分方程]]
