---
title: Hilbert 立方体 (cube de Hilbert)
created: 2026-10-29
updated: 2026-10-29
type: concept
tags: [topology, metrique, compacite, produit, plongement]
sources: [Topologie 口试题 2026, 殷浩《分析 3》点集拓扑讲义 §9.1]
confidence: high
---

# Hilbert 立方体 (cube de Hilbert)

> [!question] 问题
> 紧度量空间能不能塞进一个固定的、与具体空间无关的容器里？能：$[0,1]^{\mathbb N}$（可数乘积）。它的坐标由「到可数稠密集各点的距离」给出，于是整个空间被压成一串 $[0,1]$ 内的实数。这是「所有紧度量空间有同一个模型」的定理，也是 Urysohn 度量化定理的紧版本。

## 定义

> [!note] 定义
> **Hilbert 立方体**（cube de Hilbert）指
> $$H=[0,1]^{\mathbb N}=\{(x_1,x_2,\dots)\mid 0\le x_n\le1\}$$
> 配上乘积拓扑。它是紧的（Tychonoff：$[0,1]$ 紧，可数积仍紧）且可度量化，例如
> $$d_{\mathrm{cube}}(x,y)=\sum_{n\ge1}2^{-n}|x_n-y_n|$$
> 给出的拓扑与乘积拓扑一致（它诱导逐分量收敛）。

> [!tip] 为什么要乘积拓扑而不是箱拓扑
> 上面的距离里每个坐标的权重 $2^{-n}$ 使远处的坐标几乎不影响结果——这正是「只约束有限多坐标」的信息。若换成箱拓扑，$[0,1]^{\mathbb N}$ 不再紧，讨论就失去意义（见 [[箱拓扑]]）。

## 嵌入定理

> [!note] 定理
> 设 $(X,d)$ 紧度量空间。则 $X$ 同胚于 $H$ 的一个紧子集。

**构造。** 记 $\operatorname{diam}X=\sup_{x,y}d(x,y)$，$M=1+\operatorname{diam}X>0$。

1. 对每个 $m\ge1$ 取有限的 $1/m$-网 $F_m$，令 $D=\bigcup_mF_m=\{a_1,a_2,\dots\}$，可数且稠密（任何点与 $D$ 的距离小于任意 $1/m$）。
2. 定义
   $$\Phi:X\to[0,1]^{\mathbb N},\qquad \Phi(x)=\Bigl(\frac{d(x,a_1)}{M},\frac{d(x,a_2)}{M},\dots\Bigr).$$
   每个坐标 $\le\operatorname{diam}X/M<1$，落在 $[0,1]$ 中。

> [!note] 三步验证
> 1. **连续**：每个坐标 $x\mapsto d(x,a_n)/M$ 是 $1$-Lipschitz 连续；乘积拓扑下「逐分量连续 $\Rightarrow$ 连续」（[[乘积拓扑]] 的泛性质）。
> 2. **单射**：若 $\Phi(x)=\Phi(y)$，则 $d(x,a_n)=d(y,a_n)$ 对一切 $n$ 成立。取 $a_n\to x$（$D$ 稠密），由连续性得 $d(y,x)=\lim_nd(y,a_n)=\lim_nd(x,a_n)=0$，故 $x=y$。
> 3. **到像上是同胚**：$X$ 紧、$H$ 是 Hausdorff，连续单射 $X\to H$ 把闭集映成紧集、紧集在 Hausdorff 中闭，于是 $\Phi$ 是同胚 $X\cong\Phi(X)$；$\Phi(X)$ 是紧集的连续像，在 $H$ 中紧。

> [!warning] 「坐标只用距离」是关键
> 构造只用到 $d(\cdot,a_n)$，不需要 $X$ 有任何线性结构。反过来，如果只取有限多坐标，单射可能失败（区分不开距离函数相同的两点）——所以可数多个坐标不是奢侈，而是「稠密集把 $X$ 分离」的最小代价。

## 推论与邻居

> [!note] 推论
> - 紧度量空间必可分、第二可数（[[可数性公理]]）：$D$ 可数稠密，$H$ 有可数基，而同胚保持 $C_2$。
> - 紧度量空间可嵌入 $[0,1]^{\mathbb N}$，故「紧度量空间」这一类对象的万有对象是 $H$。
> - 与 Urysohn 度量化定理的关系：一般定理说「$T_4$ + 第二可数 $\Rightarrow$ 可度量化」；本页是其紧情形的具体实现，而且给出显式的坐标。

> [!tip] 与 Stone–Weierstrass、$C(K)$ 的关系
> 换一个方向，$X$ 也嵌入 $\mathbb R^D$ 或用 $C(X)$ 上的范数嵌入 Banach 空间（$x\mapsto(f(x))_{f}$）。本页的坐标换成距离函数，好处是可数个坐标就够——稠密集的功劳。

## 相关概念

- [[乘积拓扑]] — 逐分量连续即连续，构造第 1 步的关键
- [[紧性]] — Tychonoff 保证 $H$ 紧；紧 + Hausdorff 给同胚
- [[可数性公理]] — 紧度量空间可分、$C_2$
- [[稠密性]] — $D=\bigcup_mF_m$ 稠密
- [[Hausdorff距离]] — 另一个把「紧集」变成空间的构造
- [[箱拓扑]] — 换成箱拓扑则 $H$ 不紧，定理失效
