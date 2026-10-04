---
title: 代数 I · 13 辫群与 Coxeter 群
created: 2026-10-03
updated: 2026-10-03
type: notes
tags: [algebre, groupe-de-tresses, coxeter, presentation]
sources: [代数 I 习题课手写笔记]
confidence: medium
---

# 辫群与 Coxeter 群

> [!tip] 问题
> 如何用「生成元 + 关系」来呈现一个群？辫子与反射生成的群是两类自然的例子：它们的乘法都由生成元之间的少数几条关系决定。

## 辫子群（groupe de tresses）

> [!note] 定义 1.1（辫子，tresse）
> 在 $\mathbb{R}^3$ 中，一个 $(n+1)$ 条绳的辫子是由 $2(n+1)$ 个端点（$n+1$ 个在上、$n+1$ 个在下）和 $n+1$ 条绳构成的对象，满足：
> ① 每条绳起于上方的某点，终于下方的某点；
> ② 绳与绳彼此不相交；
> ③ 任何绳与任何水平线只交一次（只能自上而下走）。

> [!note] 定义 1.2（等价与乘法）
> 两个辫子等价，若一个辫子中的绳在不绕过彼此的情况下能在空间中连续变形成另一个辫子。记 $B_n$ 为 $n+1$ 条绳的所有辫子（模等价关系）的集合。$B_n$ 中两个辫子通过上下拼接得到一个新的辫子，对应 $B_n$ 中的乘法。

> [!example] 例 1.3（三根绳的辫子与生成元）
> $B_n$ 中 $\sigma_i$ 代表第 $i$ 条绳对第 $i+1$ 条绳进行一次交叉（第 $i$ 条绳跨越第 $i+1$ 条绳）。三根绳（$B_2$）的情形：$\sigma_1$ 是第 1、2 条绳的单次交叉，$\sigma_1^{-1}$ 为其反向交叉；$\sigma_2$ 是第 2、3 条绳的单次交叉，$\sigma_2^{-1}$ 为其反向交叉；$e = \mathrm{id}$ 表示三条互不相交的平行绳。拼接的乘积如 $\sigma_1 \sigma_2 \sigma_1$ 表示依次「第 1、2 条绳交叉 → 第 2、3 条绳交叉 → 第 1、2 条绳交叉」的交替缠绕，$\sigma_2 \sigma_1 \sigma_2$ 表示依次「第 2、3 条绳交叉 → 第 1、2 条绳交叉 → 第 2、3 条绳交叉」的交替缠绕。

> [!example] 例 1.4（低阶辫群）
>
> - $B_0$ 是平凡群（由所有 1 条绳的辫子构成）；
> - $B_1 \simeq \mathbb{Z}$（由所有两条绳的辫子构成）；
> - $B_2$ 是无限非交换群（由所有三根绳的辫子构成）。

> [!note] 定义 1.5（辫子群的展示）
> 取生成元集 $X = \{\sigma_1, \dots, \sigma_n\}$，关系集 $R \subseteq F(X)$ 为
> $$R = \{\sigma_i \sigma_j \sigma_i^{-1} \sigma_j^{-1} \mid |i-j| \geqslant 2\} \cup \{\sigma_i \sigma_{i+1} \sigma_i \sigma_{i+1}^{-1} \sigma_i^{-1} \sigma_{i+1}^{-1} \mid 1 \leqslant i \leqslant n-1\},$$
> 称 $B_n = \dfrac{F(X)}{\langle R \rangle}$ 为一个辫子群。于是 $B_n$ 中有
> $$\sigma_i \sigma_j = \sigma_j \sigma_i \quad (|i-j| \geqslant 2), \qquad \sigma_i \sigma_{i+1} \sigma_i = \sigma_{i+1} \sigma_i \sigma_{i+1} \quad (1 \leqslant i \leqslant n-1).$$
> 这些关系可由图 $1-2-3-\cdots-n$ 中顶点间的邻接关系来记。

> [!example] 例 1.6（辫的等价）
> 三根绳的辫子中，$\sigma_1 \sigma_2 \sigma_2^{-1} \simeq \sigma_1$（两次交叉互相抵消），而 $\sigma_1 \sigma_2 \sigma_1 \simeq \sigma_2 \sigma_1 \sigma_2$（两者在空间中可连续变形，对应同一个群元素，即辫关系）。

## Coxeter 群（groupe de Coxeter）

> [!note] 定义 2.1（Coxeter 矩阵）
> 设 $S$ 是一个集合，一个矩阵 $M : S \times S \to \mathbb{N}^+ \cup \{+\infty\}$ 称为一个 Coxeter 矩阵，若
> ① $m(s,t) = m(t,s)$（即 $M$ 为对称矩阵）；
> ② $m(s,t) = 1 \iff s = t$。

> [!example] 例 2.2
> $|S| = 4$ 时，可取
> $$M = \begin{bmatrix} 1 & 2 & 3 & 2 \\ 2 & 1 & 4 & 3 \\ 3 & 4 & 1 & +\infty \\ 2 & 3 & +\infty & 1 \end{bmatrix}.$$

> [!note] 定义 2.3（Coxeter 群）
> 设 $M : S \times S \to \mathbb{N}^+ \cup \{+\infty\}$ 为一个 Coxeter 矩阵。取生成元集 $X = S$，关系集 $R \subset F(X)$ 为
> $$R = \{(st)^{m(s,t)} \mid s, t \in S \text{ 且 } m(s,t) \neq +\infty\},$$
> 称 $W := \dfrac{F(X)}{\langle R \rangle}$ 为一个 Coxeter 群。

> [!note] 命题 2.4（$W$ 中的基本关系）
> ① 对任意 $s \in S$，$m(s,s) = 1 \Rightarrow (ss)^{m(s,s)} = e \Rightarrow s^2 = e \Rightarrow s^{-1} = s$（生成元为对合）；
> ② $m(s,t) = 2$，则 $(st)^2 = e \iff st = ts$（交换关系）；
> ③ $m(s,t) = 3$，则 $(st)^3 = e \iff sts = tst$（辫子关系）。

## 相关概念

- [[辫群]]
- [[Coxeter群]]
- [[群的展示]]
- [[自由群]]
- [[代数III/概念/对称群]]
