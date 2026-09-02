---
title: 分离变量法
created: 2026-08-31
updated: 2026-09-02
type: concept
tags: [fourier-series, proof-technique, learning-path]
sources: [Fourier笔记.md]
confidence: high
---

# 分离变量法 (Separation of Variables)

> 讲义第 1.2 节。Fourier 级数的**起源方法**:从 PDE 到 ODE,再自然引出\"按特征函数展开\"。过程本身(尤其分离变量法)有实际意义,需要掌握。

## 物理背景(讲义 1.1)

常见偏微分方程(总是配合初值/边值条件研究,单独求解方程没有意义):

- 波方程:$\partial_t^2 u = c^2 \Delta u$
- 热方程:$\partial_t u = \Delta u$
- Laplace 方程:$\Delta u = 0$
- 薛定谔方程:$i\hbar\,\partial_t u = -\frac{\hbar^2}{2m}\Delta u + V(x)u$

热方程三种边条件:

| 边条件 | 形式 |
|---|---|
| Dirichlet | $u(0,t)=\alpha(t),\ u(l,t)=\beta(t)$($\alpha=\beta=0$ 时齐次) |
| Neumann | $\partial_x u(0,t)=\alpha(t),\ \partial_x u(l,t)=\beta(t)$(齐次即绝热) |
| Newton cooling | $\partial_x u(0,t)+\rho(u(0,t)-u_0)=0,\quad -\partial_x u(l,t)+\rho(u(l,t)-u_0)=0$ |

线性方程有**叠加原理**;以上方程与初边值皆线性。

## 方法流程(五步)

1. **假设解可分离**:$u(x,t) = X(x)T(t)$(形式操作,暂时不证明一般性)
2. **代入方程,分离变量**:整理使左边只依赖 $x$、右边只依赖 $y$ ⟹ 两边必须等于**同一个常数** $A$
3. **分解为两个 ODE**:各自求解
4. **代入边条件,确定特征值**:边条件迫使 $A$ 只能取离散值(特征值),对应特征函数
5. **叠加原理**:把所有特解线性组合成形式级数解

> **严格性(讲义 Remark 1.2)**:暂时是**形式操作**——没证明一般解就是该形式,也没证明算出的级数\"是解\"。这是后续章节的主题。

## 核心例子:热方程 + Dirichlet 边条件(讲义例 1.3)

$$\begin{cases} u_t = ku_{xx} \ u(0,t) = u(l,t) = 0 \end{cases}, \qquad u(x,t)=X(x)T(t)$$

代入得 $\dfrac{T'}{kT}=\dfrac{X''}{X}=A$(常数),拆分:$T'=kAT,\ X''=AX$。

**A 的符号讨论(关键步骤)**:

- **$A\ge 0$**:$X=C_1\sinh\sqrt{A}\,x + C_2\cosh\sqrt{A}\,x$。边条件 $X(0)=X(l)=0\Rightarrow C_1=C_2=0\Rightarrow u\equiv 0$。**舍去**。
- **$A<0$**:$X=C_1\sin\sqrt{-A}\,x + C_2\cos\sqrt{-A}\,x$。由 $X(0)=0\Rightarrow C_2=0$;$X(l)=0\Rightarrow C_1\sin(\sqrt{-A}\,l)=0$,非零解要求 $\sin(\sqrt{-A}\,l)=0$,故

$$\sqrt{-A}\,l = n\pi \ (n\in\mathbb{N}^*), \qquad \boxed{A = -\frac{n^2\pi^2}{l^2}}$$

**特征值/特征函数出现**。特解(特征函数)$u(x,t)=e^{-\frac{n^2\pi^2 k}{l^2}t}\sin\frac{n\pi x}{l}$。叠加得形式解:

$$u(x,t)=\sum_{n=0}^{\infty} a_n e^{-\frac{n^2\pi^2 k}{l^2}t}\sin\frac{n\pi x}{l}$$

初值 $u(x,0)=u_0(x)=\sum_{n=0}^{\infty} a_n \sin\frac{n\pi x}{l}$ —— **由 $f=u_0$ 求 $a_n$ 就是 Fourier 级数**,这正是 [[fourier-series]] 要研究的对象。

## 三种边条件 → 三种展开(讲义 1.2 结尾)

| 边条件 | 物理含义 | 展开基底 |
|---|---|---|
| Dirichlet $u=0$ | 边界温度固定 | 只含 **sin**(奇) |
| Neumann $\partial_x u=0$ | 边界绝热 | 只含 **cos**(偶) |
| 周期 $u(\theta)=u(\theta+2\pi)$ | 圆环 | **$a_n\cos n\theta + b_n\sin n\theta$ 完整形式** |

> 边条件的奇偶性决定基底:奇边条件(固定端点)出 sin,偶边条件(绝热)出 cos。换 Neumann 边条件得形式解含 $\cos\frac{n\pi x}{l}$;换周期边条件(圆环)得 $u=\sum(a_n\cos n\theta + b_n\sin n\theta)e^{-n^2kt}$。

## 为什么这章重要(讲义原话精神)

> \"不仅仅是为了引入一个概念,这个过程本身,尤其是分离变量法有实际意义,是需要学习掌握的。\"

分离变量法是**数学物理的基本工具**:热传导、波动、Laplace、量子力学(氢原子)全靠它。Fourier 级数只是它的\"副产品\"之一。

## 严格性分析(形式技巧如何严格化)

**结论**:分离变量法是形式操作(讲义 Remark 1.2 已承认),缺口集中在\"级数收敛\"。

| 环节 | 严格吗 | 说明 |
|---|---|---|
| 假设 $u=X(x)T(t)$ | 不严格 | 只是\"猜\"候选解,猜错无妨,后续验证兜底 |
| 分离常数 $=A$ | 严格 | 左只依赖 t、右只依赖 x ⟹ 恒等 ⟹ 常数 |
| 特征值问题 | 严格 | ODE + 边条件,Sturm-Liouville 特例 |
| 叠加(有限和) | 严格 | 线性方程 |
| 叠加(无限和)+逐项求导 | 需论证 | 依赖系数衰减 + Weierstrass M-检验(讲义 §3) |
| 初值 $u(x,0)=f(x)$ | 最不严格 | $t=0$ 时即 Fourier 级数收敛问题 → 逐点收敛理论核心 |

**严格化三步法**(现代 PDE 教材标准做法):
1. **构造**:形式上求候选解(不严格但合法)
2. **验证**:证级数收敛、逐项可导、代入方程成立(系数衰减 + M-检验)
3. **唯一性**:能量方法 $E(t)=\int w^2 dx$,$\frac{dE}{dt}=-2k\int w_x^2 dx \le 0$,$E(0)=0$ ⟹ $w \equiv 0$

三步 ⟹ 解存在且唯一 ⟹ 候选解即真解。**唯一性救场**:解只有一个,\"猜\"到的足够。

**热方程正则化**:$t>0$ 时 $e^{-n^2t}$ 指数衰减救活收敛性,即使 $f$ 不光滑级数也绝对一致收敛;但 $t=0$ 时回到 Fourier 级数收敛问题——这是全理论的**核心问题**。

## 学习提示

- **A 的符号讨论必须自己推一遍**:$A\ge0$ 为什么不行、$A<0$ 怎么解出 $\lambda$——这是理解\"特征值来自边条件\"的关键。
- 留意 Remark 1.2:**形式解 ≠ 真解**。收敛性、可微性、代入验算都是逐点收敛理论的主题(见 [[convergence-of-fourier-series]])。
- 你能做的验证:把 $u=\sum a_n e^{-n^2\pi^2kt/l^2}\sin\frac{n\pi x}{l}$ 逐项代入方程,确认每一项都是解(叠加原理的前提)。
- 衔接:分离变量法在后续章节(波动方程、圆盘 Laplace 等)会再次出现,方法是同构的。

## 相关概念

- [[fourier-series]] — 分离变量法的自然产物
- [[convergence-of-fourier-series]] — 初值展开的收敛理论
