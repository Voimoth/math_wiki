---
title: 二阶线性常系数ODE与特征方程
created: 2026-10-03
updated: 2026-10-03
type: concept
tags: [analysis, analysis-I, zh]
sources: [分析I 课程笔记(本人手写扫描)]
confidence: medium
---

# 二阶线性常系数 ODE 与特征方程

> [!note] 定义
> $y''+ay'+by=0$（$a,b$ 为常数）。试解 $y=e^{\lambda t}$，代入得 $(\lambda^2+a\lambda+b)e^{\lambda t}=0$，故非零解当且仅当
> $$\lambda^2+a\lambda+b=0,$$
> 称为**特征方程**。

> [!note] 齐次方程的解（按判别式分类）
>
> - $\Delta=a^2-4b>0$：$y=C_1e^{\lambda_1 t}+C_2e^{\lambda_2 t}$；
> - $\Delta=0$（重根 $\lambda=-a/2$）：$y=(C_1+C_2t)e^{\lambda t}$；
> - $\Delta<0$（共轭复根）：$y=e^{-\frac{a}{2}t}\left(\tilde C_1\cos\frac{\sqrt{4b-a^2}}{2}t+\tilde C_2\sin\frac{\sqrt{4b-a^2}}{2}t\right)$。

> [!note] 非齐次方程
> $y''+ay'+by=f(x)$：由解的结构，通解 = 齐次通解 + 一个特解。当右端为 $e^{\lambda x}$ 时，按 $\lambda$ 是否为特征根（单根 / 重根）猜 $ce^{\lambda x}$、$cte^{\lambda x}$、$ct^2e^{\lambda x}$；右端为 $P(x)e^{\lambda x}$ 亦可类似处理。

> [!tip] 唯一性（初值问题）的证明思路
> 断言对任意初值总能选出 $C_1,C_2$（线性代数）；于是只需证满足 $h(t_0)=h'(t_0)=0$ 的齐次解恒为零。令 $\omega=h^2+h'^2$，可得 $\omega'\leq C\omega$，$\omega(t_0)=0$，由 [[Gronwall不等式]] 型估计推出 $\omega\equiv 0$。

> [!warning] 概念性陷阱
>
> - 根的三种情形对应 $S_0$ 的三种基，但维数恒为 $2$（实系数时以实解为基）。
> - 重根时必须补出 $te^{\lambda t}$：单靠 $e^{\lambda t}$ 凑不出第二个无关解。

## 相关概念

- [[通解与特解]] — 非齐次解 = 齐次通解 + 特解
- [[Wronskian]] — 判断两个解是否无关
- [[常数变易法]] — 变系数 / 一般右端下求特解
- [[二阶线性常系数ODE]] — 分析II 中同一主题
- [[二阶线性方程理论]] — 齐次解空间与特解结构的一般理论
## 相关笔记

- [[18-常微分方程|分析I · 18-常微分方程]]
