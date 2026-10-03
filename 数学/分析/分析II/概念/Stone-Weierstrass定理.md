---
title: Stone-Weierstrass 定理
created: 2026-10-03
updated: 2026-10-03
type: concept
tags: [analysis, approximation, algebra]
sources: [殷浩《分析 2》上册, 殷浩《分析 2》下册]
confidence: high
---

# Stone-Weierstrass 定理

$K$ 是 $\mathbb R^n$ 的紧子集（暂不引入一般紧拓扑空间），$C(K)$ 为连续函数全体。$A\subset C(K)$ 称为**代数**（对加法、乘法、数乘封闭）；闭包 $\bar A$ 是对 $\|\cdot\|_\infty$ 而言，即一致逼近。

> [!note] Déf.（分离点，sépare les points）
> $A$ 分离 $K$ 的点：$\forall x\ne y\in K,\exists f\in A,\ f(x)\ne f(y)$。

> [!note] Prop.（四个引理，证明在定理各步中）
> - $A$ 是代数 $\Rightarrow$ $\bar A$ 也是代数；
> - 分离点且 $1\in A$ $\Rightarrow$ 对任意 $x\ne y$ 与任意 $c_1,c_2$，存在 $f\in A$ 使 $f(x)=c_i$；
> - $f\in\bar A\Rightarrow|f|\in\bar A$（用 [[Weierstrass逼近定理]] 的多项式逼近 $|\cdot|$）；
> - $f,g\in\bar A\Rightarrow\max(f,g),\min(f,g)\in\bar A$（用 $\max(a,b)=\frac{(a+b)+|a-b|}2$、$\min(a,b)=\frac{(a+b)-|a-b|}2$）。

## 实值情形

> [!note] Thm.（Stone-Weierstrass，实）
> $A$ 是紧集 $K$ 上连续函数的代数，若 $A$ 分离点且 $1\in A$，则 $\bar A=C(K)$。

**Preuve（六步）：** (1) $\bar A$ 仍是代数；(2) 用分离点解线性方程组得两点插值；(3) 由 $|f|\in\bar A$ 得 $\bar A$ 对取绝对值封闭；(4) 进而对 $\max,\min$ 封闭；(5) 固定 $h,\varepsilon$ 与 $x$，对每个 $y$ 构造 $g_{x,y}$ 使 $g_{x,y}(x)=h(x)$、$g_{x,y}(y)=h(y)$，由连续性得局部下界 $g_{x,y}\ge h-\varepsilon$，用 $K$ 紧取有限个 $y_i$ 并令 $g_x=\max_i g_{x,y_i}\in\bar A$，则 $g_x(x)=h(x)$ 且 $g_x\ge h-\varepsilon$；(6) 同理对每个 $x$ 取邻域使 $g_x\le h+\varepsilon$，由紧性取有限个 $x_i$ 并令 $f=\min_i g_{x_i}$，则 $h-\varepsilon\le f\le h+\varepsilon$。

> [!example]
> - $\mathbb R^n$ 的紧集（如闭球）上的多项式全体是分离点的代数，故稠密——这是 [[Weierstrass逼近定理]] 的高维推广。
> - $S^1$ 上的三角多项式 $a_0+\sum_{n=1}^N(a_n\cos nx+b_n\sin nx)$ 全体（把 $S^1$ 看成周期函数，周期是否 $2\pi$ 都一样）。

## 复值情形

> [!warning] 复多项式不能逼近任意连续复值函数
> 复多项式仍是全纯函数，满足平均值等式 $f(z)=\frac1{|B(z,r)|}\int_{B(z,r)}f(y)dy$；不具备该性质的连续函数不可能是多项式的一致极限。

> [!note] Thm.（Stone-Weierstrass，复）
> $A\subset C(K,\mathbb C)$ 是含 $1$、分离点且**关于共轭封闭**的复代数，则 $\bar A=C(K,\mathbb C)$。
> **Preuve 要点：** 令 $A_{\mathbb R}=\{f\in A:f\ \text{实值}\}$。共轭封闭保证 $f+ig\in A\Rightarrow f,g\in A_{\mathbb R}$，分离点性质传给 $A_{\mathbb R}$。由实值版本 $\overline{A_{\mathbb R}}=C(K,\mathbb R)$，而 $C(K,\mathbb C)$ 中元素为 $f+ig$，故 $\bar A=C(K,\mathbb C)$。

## 相关概念

- [[Weierstrass逼近定理]] — 区间上的原型
- [[相对拓扑与稠密性]] — 结论即 $A$ 稠密
- [[紧集上的连续函数]] — 紧集是定理的前提
- [[一致收敛级数的性质]]

## 相关笔记

- [[08-Stone-Weierstrass|分析II · 08-Stone-Weierstrass]]
- [[11-含参变量积分|分析II · 11-含参变量积分]]
