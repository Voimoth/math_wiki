---
title: Cayley–Hamilton 定理（théorème de Cayley–Hamilton）
created: 2026-10-03
updated: 2026-10-03
type: concept
tags: [algebre, endomorphisme, cayley-hamilton, polynome-caracteristique, polynome-annulateur]
sources: [代数 II 正课手写笔记]
confidence: medium
---

# Cayley–Hamilton 定理 (théorème de Cayley–Hamilton)

> [!tip] 为什么需要它
> 它把特征多项式从「求特征值的工具」升级为「零化多项式」：$\chi_u(u)=0$。于是 $\chi_u$ 成为一个具体的零化多项式，$\pi_u\mid\chi_u$，并且它让核分解定理能直接作用于 $\chi_u$，得到特征子空间分解。

> [!note] 定理
> 设 $u\in\mathcal{L}(E)$（$\dim E=n<+\infty$），则 $\chi_u$ 零化 $u$：
> $$\chi_u(u)=0.$$
> 等价地，对 $A\in M_n(K)$，$\chi_A(A)=0$。

> [!info] 推论
>
> - 极小多项式整除特征多项式：$\pi_u\mid\chi_u$（两者次数满足 $\deg\pi_u\le\deg\chi_u=n$）；
> - 特征值与零化多项式的根的关系：$P(u)=0\Rightarrow\operatorname{Sp}(u)\subset\{P=0\}$；
> - 若 $u$ 幂零则 $\chi_u=X^n$。

## 直觉
> [!tip] 想法
> 证明的关键构件是**伴随矩阵**（matrice compagnon）：对每个 $x\neq0$，取包含 $x$ 的最小 $u$-稳定子空间 $F_x$，$(x,u(x),\dots,u^{p-1}(x))$ 是它的基，而 $u_{F_x}$ 在此基下的矩阵正是伴随矩阵——于是 $\chi_{u_{F_x}}=\pi_{u_{F_x}}$。再用 $\chi_{u_{F_x}}\mid\chi_u$，便得 $\chi_u(u)$ 在每个 $F_x$ 上为零，从而在 $E$ 上为零。

## 例子
> [!example] 例
>
> - $A=\begin{pmatrix}0&1\\0&0\end{pmatrix}$：$\chi_A=X^2$，确有 $A^2=0$；
> - 伴随矩阵 $C$ 满足 $\chi_C=\pi_C=P$，即 Cayley–Hamilton 在「循环向量」情形取等；
> - 二阶方阵 $\chi_A=X^2-(\operatorname{Tr}A)X+\det A\cdot I_2$ 给出 $A^2-(\operatorname{Tr}A)A+(\det A)I_2=0$。

## 陷阱
> [!warning] 易错
>
> - $\chi_u(u)=0$ 中把多项式「代入」$u$，常数项 $a_0$ 要读成 $a_0\,\mathrm{id}_E$，不能当成标量加到矩阵上。
> - Cayley–Hamilton 只给出「有一个零化多项式」，它一般不最小：$\deg\pi_u$ 可以严格小于 $n$。
> - 「$\chi_A(A)=0$」并不说明 $\chi_A$ 就是极小多项式。

## 相关概念
- [[特征多项式]]、[[极小多项式]]、[[零化多项式]]、[[伴随矩阵]]、[[核分解定理]]、[[幂零]]
- [[代数III/概念/域上代数]]
- [[代数I/概念/商环]]

## 相关笔记

- [[14-Cayley-Hamilton定理与核分解|代数II · 14-Cayley-Hamilton定理与核分解]]
