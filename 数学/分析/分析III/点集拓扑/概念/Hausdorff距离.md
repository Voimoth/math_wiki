---
title: Hausdorff 距离 (distance de Hausdorff)
created: 2026-10-29
updated: 2026-10-29
type: concept
tags: [topology, metrique, compacite, hausdorff]
sources: [Topologie 口试题 2026, 殷浩《分析 3》点集拓扑讲义 §5]
confidence: high
---

# Hausdorff 距离 (distance de Hausdorff)

> [!question] 问题
> 度量空间 $(E,d)$ 上，「两个紧集相距多远」怎么定义？逐点距离不行（集合没有共同的点）。答案是：两片各自落在对方的 $\varepsilon$-邻域里才叫近。这给出 $K(E)$（$E$ 的非空紧子集全体）上的一个度量，把「紧集」本身变成一个度量空间的点。

## 定义

> [!note] 定义
> $(E,d)$ 度量空间，$K(E)=\{K\subset E\mid K\ \text{非空紧}\}$。对 $A,B\in K(E)$，
> $$d_H(A,B)=\max\Bigl\{\sup_{a\in A}d(a,B),\ \sup_{b\in B}d(b,A)\Bigr\},$$
> 其中 $d(x,S)=\inf_{s\in S}d(x,s)$。

> [!tip] 为什么 $\sup$ 是 $\max$ 而不用一般的上确界
> $S$ 紧、$d(\cdot,S)$ 连续时 $\inf$ 取到（[[紧性]] 的最值定理），$a\mapsto d(a,B)$ 在紧集 $A$ 上也取到最大值，所以两个 $\sup$ 都是有限的、可达的。$A,B$ 不必有界——紧集自动有界。

## 三条刻画

> [!note] 命题
> 1. 对任意非空 $S$，$x\mapsto d(x,S)$ 是 $1$-Lipschitz 的：$|d(x,S)-d(y,S)|\le d(x,y)$。
> 2. $d_H(A,B)=\|d(\cdot,A)-d(\cdot,B)\|_\infty=\sup_{x\in E}|d(x,A)-d(x,B)|$。
> 3. $d_H(A,B)<\varepsilon\iff A\subset B_\varepsilon\ \text{且}\ B\subset A_\varepsilon$，此处 $B_\varepsilon=\{x\mid d(x,B)<\varepsilon\}$。

**证明要点。** (1) 对 $s\in S$，$d(x,S)\le d(x,s)\le d(x,y)+d(y,s)$，对 $s$ 取下确界得 $d(x,S)\le d(x,y)+d(y,S)$，对称即得。

(2) 由 (1)，$|d(x,A)-d(x,B)|\le d_H(A,B)$ 需先证 $d_H$ 是"上界"：对 $a\in A$，$d(a,B)\le|d(a,A)-d(a,B)|$（因 $d(a,A)=0$），故 $\sup_A d(\cdot,B)\le\|d(\cdot,A)-d(\cdot,B)\|_\infty$，另一半对称。反向：$d(x,A)\le d(x,B)+d_H(A,B)$ 由三角不等式对 $b\in B$ 取极限得。两边夹。

(3) $d_H(A,B)<\varepsilon$ $\iff$ 每个 $a\in A$ 有 $d(a,B)<\varepsilon$ 且每个 $b\in B$ 有 $d(b,A)<\varepsilon$ $\iff$ $A\subset B_\varepsilon$、$B\subset A_\varepsilon$。

> [!note] 推论：$d_H$ 是 $K(E)$ 上的度量
> 正定性与对称性直接；三角不等式由 (2) 化到 $\|\cdot\|_\infty$：
> $$d_H(A,C)\le\|d(\cdot,A)-d(\cdot,B)\|_\infty+\|d(\cdot,B)-d(\cdot,C)\|_\infty=d_H(A,B)+d_H(B,C).$$
> 注意下限：$d_H(A,B)=0\Rightarrow A\subset \overline B=B$、$B\subset A$，故 $A=B$（两个都紧因而闭）。

## 近似与稠密

> [!note] 命题
> 非空有限子集在 $(K(E),d_H)$ 中稠密。特别地，紧度量空间可以看成「有限子集的极限」。

**证明。** 设 $K$ 紧、$\varepsilon>0$。紧性给出有限 $\varepsilon$-网 $F=\{a_1,\dots,a_m\}$（即 $K\subset\bigcup_i B(a_i,\varepsilon)$），$F\in K(E)$ 且 $d_H(K,F)\le\varepsilon$。$\square$

> [!tip] 用 $\varepsilon$-网读这个度量
> $d_H(K,F)$ 小，就是「$K$ 被有限点集 $F$ 逼近」。这条与 $\mathbb R^n$ 里用折线逼近曲线是同一件事；[[可数性公理]] 里「紧度量空间可分」用的也正是 $\varepsilon$-网。

## 完备性定理

> [!note] 定理
> $E$ 完备 $\iff (K(E),d_H)$ 完备。

**（$\Leftarrow$ 是容易的一半）** $x\mapsto\{x\}$ 是等距嵌入：$d_H(\{x\},\{y\})=d(x,y)$。若 $(x_n)$ 在 $E$ 中 Cauchy，则 $(\{x_n\})$ 在 $K(E)$ 中 Cauchy，收敛到某 $K\in K(E)$；由 $d_H(\{x_n\},K)\to0$ 得 $\operatorname{diam}K=0$，故 $K=\{x\}$，且 $x_n\to x$。

**（$\Rightarrow$ 的骨架，$E$ 完备）** 设 $(K_n)$ 在 $K(E)$ 中 Cauchy。

1. 取快速子列，仍记 $K_j$，使 $d_H(K_j,K_{j+1})<2^{-j}$。
2. 令 $K=\{x\in E\mid d(x,K_j)\to0\}$。它非空：沿 $j$ 逐次取 $y_j\in K_j$ 使 $d(y_j,y_{j+1})<2^{-j}$，得到 Cauchy 列，极限落在 $K$。
3. $K$ 完备：它是闭集（$d(\cdot,K_j)$ 连续，$K$ 是闭条件的交），而 $E$ 完备。
4. $K$ 全有界（totalement borné）：给定 $\varepsilon$，取 $j$ 使 $2^{1-j}<\varepsilon/2$，$K_j$ 有有限 $\varepsilon/2$-网；对 $x\in K$，$d(x,K_j)\le2^{1-j}$，故 $K_j$ 的网同时也是 $K$ 的 $\varepsilon$-网。
5. 完备 + 全有界 $\Rightarrow$ 紧（度量空间），故 $K\in K(E)$。
6. 估计 $d_H(K_j,K)\le2^{1-j}$：一侧由 $d(x,K_j)\le\sum_{l\ge j}2^{-l}$，另一侧由第 2 步的链给出；于是原 Cauchy 列（不只是子列）收敛到 $K$。

> [!warning] 容易漏的两点
> - 第 2 步构造的极限点必须在 $E$ 里，所以「$E$ 完备」不是装饰：反过来 $K(E)$ 完备也强迫 $E$ 完备，这正是逆命题的用途。
> - 第 4 步的「全有界」用的不是 $K$ 的紧性（此时还不知道），而是每个 $K_j$ 的紧性给出的有限 $\varepsilon$-网；若只取闭子集族，这个网就没了，极限只能保证是闭集。注意「$E$ 完备」并不推出「$K(E)$ 紧」：$\mathbb R$ 完备而 $K(\mathbb R)$ 不紧，例如 $K_n=[n,\infty)$ 满足 $d_H(K_n,K_{n+1})=1$，既没有收敛子列（任意两个的距离随下标增长），也说明「完备」与「紧」在 $K(E)$ 上同样要分开看。

> [!note] 补充：$K(E)$ 何时紧
> $K(E)$ 紧 $\iff$ $E$ 紧。$E$ 紧时 $K(E)$ 全有界（$E$ 的 $\varepsilon$-网给出 $K(E)$ 的有限 $\varepsilon$-网：每个紧子集落在有限个球的并里），加上上面的完备性即得紧。

## 相关概念

- [[紧性]] — $\varepsilon$-网、完备 + 全有界 $\Rightarrow$ 紧
- [[可数性公理]] — 紧度量空间可分（$\varepsilon$-网之并）
- [[序列极限与附着值]] — 完备性与 Cauchy 列
- [[Hilbert立方体]] — 紧度量空间的另一个「标准容器」
- [[闭包与聚点]] — $d_H(A,B)=0\Rightarrow A=B$ 用的紧即闭
