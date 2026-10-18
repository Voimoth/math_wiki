---
title: Bruhat 分解 (Décomposition de Bruhat)
created: 2026-10-19
updated: 2026-10-19
type: concept
tags: [group-theory, algebre, geometrie]
sources: [代数III 习题课讲义（许金兴）]
confidence: high
---

# Bruhat 分解 (Décomposition de Bruhat)

> [!question] 一个问题
> $\mathrm{GL}_n(K)$ 在 $K$ 无限时是无限群，上三角子群 $B$ 也不小。可是「用 $B$ 从左右两侧同时作用」之后，剩下的东西却只有有限多种。凭什么？

## 1. 陈述

设 $G=\mathrm{GL}_n(K)$，$B$ 为上三角子群，$W$ 为置换矩阵组成的子群（$W\cong\mathfrak{S}_n$）。**Bruhat 分解**（décomposition de Bruhat）是
$$G=\bigsqcup_{w\in W}BwB,$$
即每个可逆矩阵都能写成 $b_1wb_2$（$b_1,b_2\in B$，$w$ 是置换矩阵），且这样的「双陪集」两两不交、恰有 $|W|=n!$ 个。

> [!note] 等价说法
> $B\backslash G/B$ 与 $W$ 一一对应：$G$ 在「左乘 $B$、右乘 $B$」下的双陪集，被置换矩阵完全代表。

## 2. 双陪集在几何上是什么

左乘 $B$ 与右乘 $B$ 是两个不同的作用。右乘 $B$ 在商空间 $G/B$ 上诱导的作用是平凡的（$G/B$ 本来就是右乘 $B$ 的商），所以把 $G/B$ 上的 $B$-轨道按右乘 $B$ 收集起来，得到的正是双陪集 $B\backslash G/B$。

而 $G/B$ 就是旗簇 $\mathcal F$（见 [[代数III/概念/Borel子群与旗簇|Borel 子群与旗簇]]）：$gB\mapsto g\cdot x_0$。于是

> [!tip] 想法：Bruhat 分解 = 旗簇按「相对位置」分层
> $G=\bigsqcup BwB$ 与 $\mathcal F=\bigsqcup_{w} B\cdot x_0^w$ 是同一句话。群论里的「双陪集」，几何上就是「$B$ 的轨道」；分解的指标集 $W$ 就是「一条旗相对标准旗有多少种摆法」。

$G$ 能传递地搬动旗，但搬法不唯一：两种搬法相差一个右乘的 $B$。Bruhat 分解数的正是「搬法差多少」，答案是 $n!$ 种，与 $K$ 的大小无关。

## 3. 用交维数把轨道分开

对旗 $x=(V_1,\ldots,V_n)$，记录它与标准旗逐层相交的维数：
$$a_{ij}(x)=\dim(V_i\cap W_j),\qquad A(x)=(a_{ij}(x))_{n\times n}.$$

- **$B$ 不变**：$\dim(gV_i\cap W_j)=\dim(V_i\cap g^{-1}W_j)$，而上三角的 $g$ 满足 $gW_j=W_j$，故 $A(gx)=A(x)$。同一个 $B$-轨道上，$A$ 是常数。
- **$A$ 只认一个置换**：任何 $x$ 的 $A(x)$ 都等于某条「坐标重排旗」$x_0^\sigma$ 的 $A$，其中 $x_0^\sigma$ 由 $e_{\sigma(1)},\ldots,e_{\sigma(i)}$ 张成第 $i$ 层；不同的 $\sigma$ 给出不同的 $A$。
- **纤维就是一个轨道**：$\{y\in\mathcal F\mid A(y)=A(x)\}=B\cdot x_0^\sigma$，且 $\sigma$ 唯一。

于是 $\mathcal F$ 被 $A$ 的取值切成 $n!$ 块，每块恰是一个 $B$-轨道，每块含唯一一条「重排标准旗」。再用 $x_0^\sigma=w_\sigma\cdot x_0$ 与 $G/B\cong\mathcal F$ 翻译回 $G$，就得到 $BwB$ 形式的无交并。

> [!warning] 陷阱
> $A(x)$ 是**离散**的（整数矩阵），这正是分解有限的原因；但它不是完全的坐标，不能由它反推旗。分解说的是「按 $A$ 分层」，不是「旗由 $A$ 决定」。

## 4. 直接推论

- **$G$ 由 $B$ 与 $W$ 生成**：每个 $BwB$ 的元素是 $B$、$w$、$B$ 的乘积，故 $G=\langle B,W\rangle$。$B$ 加上置换矩阵就够生成整个 $\mathrm{GL}_n$。
- **$w=1$ 的块就是 $B$ 本身**（$B\cdot1\cdot B=B$，$B$ 对乘法封闭）；其余块可读作「一个上三角变换、一次坐标置换、再一个上三角变换」，即带换行记录的高斯消元。
- **双陪集有限**：$B\backslash G/B$ 是有限集，尽管 $G$ 与 $B$ 都无限。

## 5. 边界

一般约化群对 Borel 子群 $B$ 与 Weyl 群 $W$ 同样有 $G=\bigsqcup_{w\in W}BwB$；本课只对 $\mathrm{GL}_n$ 证明，一般情形未涉及 [未查实]。各块 $B\cdot x_0^w$ 在旗簇的簇结构里称 Schubert 胞腔（cellule de Schubert），其维数与闭包关系本课未讨论 [未查实]。

## 相关概念

- [[代数III/概念/Borel子群与旗簇|Borel 子群与旗簇]] — $G/B$ 是旗簇，双陪集就是 $B$-轨道
- [[代数III/概念/Weyl群|Weyl 群]] — 分解的指标集，$W=N_G(T)/T\cong\mathfrak{S}_n$
- [[代数III/概念/群作用|群作用]] — 左乘/右乘两个作用，双陪集是轨道集
- [[代数III/概念/对称群|对称群]] — $W\cong\mathfrak{S}_n$，置换是分解的组合数据
- [[代数III/概念/正规子群|正规子群]] — $B$ 非正规，故必须用双陪集而非商群
- [[代数III/概念/商群|商群]] — $G/B$ 与双陪集的区别
