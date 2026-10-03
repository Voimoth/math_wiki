---
title: Sylow 定理 (Théorèmes de Sylow)
created: 2026-09-10
updated: 2026-09-10
type: concept
tags: [group-theory, algebre]
sources: [代数III 课堂笔记(手写扫描)]
confidence: high
---

# Sylow 定理 (Théorèmes de Sylow)

> [!question] 本页要回答什么？
> Lagrange 定理说子群的阶整除群的阶。反过来呢？给定 $d \mid |G|$，一定存在 $d$ 阶子群吗？——**不一定**。那么最多能保证什么？

> 讲义《代数III》Sous-groupes de Sylow 一节。

## 1. 动机：Lagrange 的逆命题不成立

Lagrange 定理：若 $H \subset G$ 是子群，则 $|H|$ 整除 $|G|$。

**逆命题不成立。** 反例：$G = A_4$，$|G| = 12$，$G$ 没有 6 阶子群。（$A_4$ 有 4 阶的 $V$，但没有 6 阶子群——虽然 $6 \mid 12$。）

> [!tip] 想法：$A_4$ 没有 6 阶子群的两个证明（2026-10-02 讨论）
> 前提事实：$A_4$ 的元素普查 $1 + 3 + 8 = 12$（1 个恒等、3 个双对换、8 个三循环）；$A_4$ 的 3 阶子群有 4 个、两两交为 $\{e\}$，故恰有 8 个三阶元。
>
> **证法一（正规性路线，标准）**：$|H| = 6 \Rightarrow [A_4 : H] = 2 \Rightarrow H \triangleleft A_4$（见 [[代数III/概念/正规子群]]）。$H$ 的 3 阶子群个数 $n_3 \mid 2$ 且 $\equiv 1 \pmod 3$，故 $n_3 = 1$：$H$ 恰含 2 个三阶元。而 $A_4$ 有 8 个三阶元，故存在 $g \in A_4 \setminus H$ 为三阶元；由 $H \triangleleft A_4$，$H$ 内的三阶子群在共轭下不动，遂使 $H$ 外的三阶元被迫「回来」，导出矛盾。
>
> **证法二（排他式，不用正规性；从自己的思路整理）**：设 $H \leqslant A_4$，$|H| = 6$。由 $[A_4:H] = 2$，非平凡陪集只有一个，故 $A_4 = H \sqcup gH$（$g \notin H$ 任取）。取 $g \notin H$ 为**三阶元**（由 8 个三阶元、$H$ 只占 2 个，必存在），则 $g^2$ 也是三阶元，而它**必须落在 $H$ 或 $gH$ 之一**：
> - $g^2 \notin H$：否则 $g^2 \in H$，而 $H$ 的 3 阶元恰为 $a, a^2$（$H$ 的唯一三阶子群 $\langle a \rangle$），于是 $g = (g^2)^2 \in \langle a \rangle \subset H$，与 $g \notin H$ 矛盾。
> - $g^2 \notin gH$：若 $g^2 = g h$（$h \in H$），左消去得 $g = h \in H$，矛盾。
>
> 两个陪集都被排除 $\Rightarrow$ 矛盾。
>
> **这个排他式证明的价值**：它只用「陪集划分」+「$g^2$ 必须落进两个陪集之一」，**完全不需要正规性**，把 6 阶子群的存在性逼死在计数上。它比标准证法短，且揭示了那条计数矛盾其实与正规性无关（正规性只是把「$H$ 外的三阶元被迫回来」讲得更省力的说法）。

所以"整除"远不能保证存在。Sylow 定理给出的是**最强可能的正面答案**：对素数幂 $p^\beta$ 一定存在，而且 $p^\alpha$（$p$ 在 $|G|$ 中的最高幂次）的子群还有极强的结构信息。

## 2. 定义

> [!note] 定义：$p$-Sylow 子群
> 设 $p$ 是素数且 $p \mid |G|$。写成 $|G| = p^\alpha m$，其中 $p \nmid m$（即 $\alpha = v_p(|G|)$ 是 $p$ 在 $|G|$ 中的指数）。
>
> 称 $G$ 的阶为 $p^\alpha$ 的子群为 $G$ 的 **$p$-Sylow 子群**。
>
> 即：$p$-Sylow = **阶等于 $p$ 在 $|G|$ 中最高幂次**的 $p$-子群。

## 3. 第一个例子：$|\mathrm{GL}_n(\mathbb{F}_p)|$

> [!example] 命题：一般线性群在有限域上的阶
> $$|\mathrm{GL}_n(\mathbb{F}_p)| = (p^n - 1)(p^n - p)\cdots(p^n - p^{n-1}) = p^{\frac{n(n-1)}{2}}(p^n - 1)(p^{n-1} - 1)\cdots(p - 1)$$

**证明（数基）**：$g \in \mathrm{GL}_n(\mathbb{F}_p) \iff$ 它的列向量构成 $(\mathbb{F}_p)^n$ 的一组基。所以只需数基的个数 $(e_1, \ldots, e_n)$：

- $e_1 \neq 0$：$p^n - 1$ 种选择。
- $e_2 \notin \operatorname{Vect}(e_1)$：$e_2 \in (\mathbb{F}_p)^n - \mathbb{F}_p\cdot e_1$，$p^n - p$ 种选择。
- 一般地，已有 $e_1, \ldots, e_{k-1}$ 时，$e_k \notin \operatorname{Vect}(e_1, \ldots, e_{k-1})$，后者是 $k-1$ 维 $\mathbb{F}_p$-空间，有 $p^{k-1}$ 个元素，故 $p^n - p^{k-1}$ 种选择。

**由此读出 $p$-Sylow**：把上式改写成 $p^{\alpha}(p^n - 1)(p^{n-1} - 1)\cdots(p-1)$，其中 $\alpha = \frac{n(n-1)}{2}$，而后面每个因子 $p^i - 1$ 都与 $p$ 互素。所以 $v_p(|\mathrm{GL}_n(\mathbb{F}_p)|) = \frac{n(n-1)}{2}$。

于是**上三角单位矩阵（对角线为 1 的上三角矩阵）** 组成的子群
$$S = \left\{ \begin{pmatrix} 1 & * & \cdots \\ & 1 & \ddots \\ 0 & & 1 \end{pmatrix} \right\}$$
的对角线上方恰有 $\frac{n(n-1)}{2}$ 个自由元素，故 $|S| = p^{\frac{n(n-1)}{2}}$ —— **$S$ 是 $\mathrm{GL}_n(\mathbb{F}_p)$ 的一个 $p$-Sylow 子群**。

## 4. 关键引理

> [!note] 引理（Sylow 定理的全部技术核心）
> 设 $|G| = p^\alpha m$，$p \nmid m$，$\alpha \geqslant 1$，$S$ 是 $G$ 的 $p$-Sylow。设 $H < G$ 是任意子群。
>
> 则存在 $a \in G$ 使得 $aSa^{-1} \cap H$ 是 $H$ 的 $p$-Sylow。

> [!tip] 注
> $\forall a \in G$，$aSa^{-1}$ 是 $G$ 的 $p$-Sylow（共轭不改变阶，$p$-子群共轭后仍是 $p$-子群，阶仍为 $p^\alpha$）。

**证明（作用 + 轨道计数）**：考虑 $G$ 在 $G/S$ 上的**平移作用**。

- 对 $a \in G$，$\operatorname{Stab}(aS) = aSa^{-1}$。
- 限制到 $H$：$\operatorname{Stab}_H(aS) = H \cap aSa^{-1}$。

对每个 $a$，$aSa^{-1} \cap H$ 都是 $H$ 的 $p$-子群（因为它是 $p$-群 $aSa^{-1}$ 的子群）。要让它成为 $H$ 的 $p$-Sylow，只需让它的阶达到 $H$ 中 $p$ 的最高幂次，即要求 $p \nmid [H : H \cap aSa^{-1}]$。

而由轨道-稳定子定理，
$$[H : H \cap aSa^{-1}] = |H\cdot aS| = \text{$aS$ 在 $H$ 作用下的轨道大小}.$$
$G/S$ 是这些轨道的无交并。若 $p$ 整除**每一个**轨道的大小，则 $p \mid |G/S| = m$，与 $p \nmid m$ 矛盾。

所以存在 $a$ 使 $p \nmid [H : H \cap aSa^{-1}]$，从而 $H \cap aSa^{-1}$ 是 $H$ 的 $p$-Sylow。$\square$

> [!tip] 想法：为什么用 $G/S$ 而不是 $G$
> $|G/S| = m$ 与 $p$ 互素是关键——**计数模 $p$ 的矛盾就在这里**。这是"用陪集空间做轨道计数"的标准手法（见 [[代数III/概念/群作用]]）。

## 5. Sylow 定理

> [!note] 定理（Sylow）
> 设 $G$ 是有限群，$|G| = p^\alpha m$，$p \nmid m$，$\alpha \geqslant 1$。
>
> 1. **（存在性）** $G$ 至少有一个 $p$-Sylow 子群。更强：若 $H \subset G$ 是 $p$-子群，则存在 $G$ 的 $p$-Sylow 包含 $H$。
> 2. **（共轭性）** $G$ 的所有 $p$-Sylow 互相共轭；它们的个数 $k$ 整除 $|G|$。特别地，$G$ 有唯一 $p$-Sylow $\iff$ 存在一个**正规**的 $p$-Sylow。
> 3. **（计数）** $p$-Sylow 的个数 $k \equiv 1 \pmod p$（于是 $k \mid m$）。

> [!note] 推论（素数幂子群都存在）
> 若 $|G| = p^\alpha m$，则 $\forall \beta \leqslant \alpha$，$G$ 有 $p^\beta$ 阶子群。（由 1 取 $H$ 为 $p$-Sylow 内的 $p^\beta$ 阶子群。）

**存在性的证明（把 $G$ 塞进 $\mathrm{GL}_n(\mathbb{F}_p)$）**：

1. **Cayley 定理**：$G \hookrightarrow \mathfrak{S}_{|G|}$（$G$ 作用在自己上）。记 $n = |G|$。
2. 对任何域 $K$，$\mathfrak{S}_n \hookrightarrow \mathrm{GL}_n(K)$，$\sigma \mapsto P_\sigma$（**置换矩阵**）。
3. 于是任何 $G$ 都同构于某个 $\mathrm{GL}_n(K)$ 的子群。取 $K = \mathbb{F}_p$：$G \hookrightarrow \mathrm{GL}_n(\mathbb{F}_p)$。
4. $\mathrm{GL}_n(\mathbb{F}_p)$ 有 $p$-Sylow（第 3 节已显式构造），再用引理（取 $H = G$）即得 $G$ 有 $p$-Sylow。

> [!tip] 这条证明链的意义
> 它把"抽象有限群的 Sylow 存在性"归约到**矩阵群的具体构造**。Cayley 定理是桥：任何有限群都是置换群，而置换群是矩阵群。

**1) 与 2) 的证明**：设 $H \subset G$ 是 $p$-子群，固定 $G$ 的一个 $p$-Sylow $S$。由引理，$\exists a \in G$ 使 $aSa^{-1} \cap H$ 是 $H$ 的 $p$-Sylow。但 $H$ 本身是 $p$-群，它的 $p$-Sylow 就是它自己，故
$$H = aSa^{-1} \cap H \subset aSa^{-1},$$
即 $H$ 被某个 $p$-Sylow（即 $aSa^{-1}$）包含——这就是 1)。

若 $S'$ 是另一个 $p$-Sylow，由 1)（取 $H = S'$）存在 $a$ 使 $S' \subset aSa^{-1}$。但 $|S'| = |aSa^{-1}| = p^\alpha$，故 $S' = aSa^{-1}$——**所有 $p$-Sylow 共轭**。

于是 $G$ 在 $\{p\text{-Sylow}\}$ 上的**共轭作用**只有一个轨道，其大小 $k$ 整除 $|G|$（轨道-稳定子）。

**3) 的证明（$k \equiv 1 \bmod p$）**：设 $X = \{G\text{ 的 } p\text{-Sylow}\}$，$|X| = k$。取 $S$ 为其一，让 **$S$ 作用在 $X$ 上**（共轭作用）——$S$ 是 $p$-群。

由**类方程**（$S$-集的轨道分解，轨道大小是 $p$ 的幂，非单点轨道的大小被 $p$ 整除）：
$$|X| \equiv |X^S| \pmod p,$$
其中 $X^S = \{T \in X : \forall s \in S,\ sTs^{-1} = T\}$ 是 $S$-不动点集。

**断言 $X^S = \{S\}$**：设 $T \in X^S$。令 $H = \langle S, T\rangle$ 为 $S$ 与 $T$ 生成的子群。由 $T \in X^S$ 知 $S \subset N_G(T)$，故 $T \triangleleft H$。又 $S, T$ 都是 $G$ 的 $p$-Sylow，$|S| = |T| = p^\alpha$，它们也是 $H$ 的 $p$-Sylow；而 $T \triangleleft H$ 意味着 $T$ 是 $H$ 的**唯一** $p$-Sylow（共轭性），故 $T = S$。

所以 $|X^S| = 1$，从而 $k \equiv 1 \pmod p$。又由 2) $k \mid |G|$；结合 $k \equiv 1 \bmod p$ 与 $p \nmid m$ 可得 $k \mid m$。$\square$

## 6. 应用：按阶判断非单群

> [!example] 例 1：$|G| = 63$ ⟹ $G$ 不单
> $|G| = 63 = 3^2 \times 7$。看 7-Sylow：其个数 $k \equiv 1 \pmod 7$ 且 $k \mid 9$，故 $k = 1$。唯一的 7-Sylow 是正规子群，非平凡且非全群 ⟹ **$G$ 不单**。

> [!example] 例 2：$|G| = 48$ ⟹ $G$ 不单
> **思路（置换表示法）**：$G$ 共轭作用在 $p$-Sylow 集合上，若个数为 $k$，得态射
> $$\varphi: G \to \mathfrak{S}_k,$$
> 作用传递 ⟹ $\varphi$ 非平凡（像非平凡）。**若 $|G| \nmid k!$，则 $\varphi$ 不可能满射**，于是 $\ker\varphi \triangleleft G$ 且 $\ker\varphi \neq \{e\}$、$\ker\varphi \neq G$ ⟹ $G$ 不单。
>
> $|G| = 48 = 2^4 \times 3$。取 $p = 2$：$k$ 为奇数且 $k \mid 3$，故 $k \in \{1, 3\}$。
> - $k = 1$：2-Sylow 唯一，正规 ⟹ 不单。
> - $k = 3$：$\varphi: G \to \mathfrak{S}_3$，而 $|G| = 48 \nmid 3! = 6$，故 $\varphi$ 不满 ⟹ $\ker\varphi$ 给出真正规子群 ⟹ 不单。

> [!tip] 方法模板（"按阶判非单"三步）
> ① 取合适的素数 $p$，用 $k \equiv 1 \bmod p$ 且 $k \mid m$ 把 $k$ 压缩到极少数可能值；② $k = 1$ ⟹ 正规 Sylow ⟹ 不单；③ $k > 1$ ⟹ 置换表示 $G \to \mathfrak{S}_k$，比较 $|G|$ 与 $k!$；若 $|G| \nmid k!$ 则核给出真正规子群。**这是群论里最常用的"判非单"套路**。

## 7. 直觉与地位

- **Lagrange 给必要条件，Sylow 给充分条件（对素数幂）**。Lagrange 说"子群阶整除群阶"，Sylow 说"素数幂部分一定有子群，而且最高幂次那个子群的个数受严格限制"。
- **三条定理的性格**：存在性（1）保证有；共轭性（2）保证结构唯一（只差共轭），并把"唯一性"翻译成"正规性"；计数（3）给出可计算的判据（$k \equiv 1 \bmod p$，$k \mid m$）——**实际计算中 (3) 最常用**，因为 $k$ 的可能值往往被压缩到 1。
- **工具是纯群作用**：$G/S$ 上的平移作用（引理）、共轭作用（共轭性）、$p$-群作用的类方程（计数）。Sylow 定理是 [[代数III/概念/群作用]] 与 [[代数III/概念/同构定理]] 的巅峰应用，**没有任何新的结构被引入**。

## 8. 学习提示

- 三个 $k$ 的约束要背牢：**$k \mid m$**、**$k \equiv 1 \pmod p$**；再把 $k = 1 \iff$ 正规 记牢。
- 引理（$aSa^{-1} \cap H$ 是 $H$ 的 $p$-Sylow）是**独立的工具**，1) 和 2) 都由它一次推出——不要把它当成 Sylow 定理的附属品。
- 常见误区：把 $k \mid m$ 误记为 $k \mid |G|$（2) 说的是 $k \mid |G|$，结合 $k \equiv 1 \bmod p$ 才收紧到 $k \mid m$）。
- 术语：法语笔记里 $p$-Sylow（$p$-sous-groupe de Sylow）、conjugués（共轭）、distingué（正规）。

## 相关概念

- [[代数III/概念/群作用]] — Sylow 定理的全部工具（轨道-稳定子、共轭作用、类方程）
- [[子群与陪集]] — Lagrange 定理（本页动机的出发点）
- [[代数III/概念/正规子群]] — $k = 1 \iff$ 正规
- [[代数III/概念/同构定理]] — 置换表示的核给出正规子群
- [[代数III/概念/对称群]] — Cayley 定理中的置换群，也是下一个主题
- [[经典群]] — $\mathrm{GL}_n(\mathbb{F}_p)$ 与置换矩阵
- [[代数I/概念/类方程]] — 证明 $k\equiv 1\bmod p$ 时用 $p$-群作用的类方程
- [[代数I/概念/置换]] — Cayley 定理把有限群嵌入置换群,存在性由此归约

## 相关笔记

- [[05-群在集合上的作用|代数III · 05-群在集合上的作用]]
- [[03-Sylow定理与A5单性|代数III · 03-Sylow定理与A5单性]]
- [[07-小阶群分类|代数III · 07-小阶群分类]]
