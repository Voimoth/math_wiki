---
title: K-代数（K-algèbre）
created: 2026-10-03
updated: 2026-10-03
type: concept
tags: [algebre, k-algebre, anneau, homomorphisme]
sources: [代数 II 正课手写笔记]
confidence: medium
---

# K-代数 (K-algèbre)

> [!tip] 为什么需要它
> 一类代数对象同时是向量空间（能相加、能数乘）又是环（能相乘、有幺元）：多项式环 $K[X]$、矩阵环 $M_n(K)$、线性映射环 $\mathcal{L}(E)$ 都是如此。K-代数把这两种结构统一起来，使「代入 $u$」「特征值理论」等既可用环论也可用线性代数的语言处理。

> [!note] 定义
> 一个 K-代数是一个 $K$-向量空间 $A$，带有一个内部运算 $A\times A\to A$（称为乘法，multiplication），$(x,y)\mapsto xy$，满足：
> ① 乘法是 $K$-双线性的；
> ② 乘法是结合的；
> ③ 乘法有中性元 $1_A$。

> [!info] 等价的刻画
> 设 $A$ 同时是 $K$-向量空间与环，则 $A$ 是 K-代数 $\iff$ 乘法与数乘相容：
> $$\lambda(ab)=(\lambda a)b=a(\lambda b).$$
> 另有等价定义：$A$ 是环，且存在环同态 $\varphi:K\to A$；用它定义数乘 $(\lambda,a)\mapsto\varphi(\lambda)\cdot a$。

## 直觉
> [!tip] 想法
> K-代数就是「$K$ 上的环」：数乘由 $K$ 的作用给出，并要求它与环乘法相容。等价定义中的 $\varphi:K\to A$ 把 $K$ 嵌入 $A$ 的中心（因为 $\varphi(\lambda)=\lambda 1_A$ 与一切元素交换），故 $K$ 的元素可与 $A$ 中任意元素自由换位。

## 同态与同构
> [!note] 定义
> 映射 $f:A\to B$ 为 K-代数同态（homomorphisme de K-algèbres），若 $f$ 是 $K$-线性的、乘性的（$f(xy)=f(x)f(y)$）且保幺元（$f(1_A)=1_B$）。
> $f$ 为同构（isomorphisme），若存在同态 $g:B\to A$ 使 $f\circ g=\mathrm{id}_B,\ g\circ f=\mathrm{id}_A$；等价于 $f$ 是同态且是双射。
> $A=B$ 时分别称为自同态 / 自同构。

## 例子
> [!example] 例
> - $K[X]$、$K(X)=\operatorname{Frac}(K[X])$、$K[[X]]$、$K((X))=\operatorname{Frac}(K[[X]])$；
> - $M_n(K)$、$\mathcal{L}(E)$（非交换）；
> - $T_n(K)\supset D_n(K)\supset K$（上三角、对角、常值对角）、$\{$收敛实序列$\}$、$C^0(\mathbb{R})$（$\mathbb{R}$-代数）。
> - 取定基后 $\mathcal{L}(E)\cong M_n(k)$；$A\mapsto P^{-1}AP$ 是 $M_n(k)$ 的 $k$-代数自同构。

## 陷阱
> [!warning] 易错
> - 同态必须保幺元 $f(1_A)=1_B$，仅要求线性 + 乘性不够。
> - K-代数同态的核是理想（也是子向量空间），但一般不是子代数（通常不含幺元）。
> - 「环」与「K-代数」不是同一个概念：遗漏数乘相容性会漏掉结构。

## 相关概念
- [[极小多项式]]、[[零化多项式]]
- [[特征多项式]]、[[线性映射的矩阵]]

## 相关笔记

- [[09-K-代数与极小多项式|代数II · 09-K-代数与极小多项式]]
