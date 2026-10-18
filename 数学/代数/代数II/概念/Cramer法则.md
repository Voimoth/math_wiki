---
title: Cramer法则（Règle de Cramer）
created: 2026-10-03
updated: 2026-10-03
type: concept
tags: [algebre, cramer, determinant, systeme-lineaire]
sources: [代数 II 正课手写笔记]
confidence: medium
---

# Cramer 法则 (Règle de Cramer)

> [!tip] 为什么需要它
> 当方程个数与未知数相等、且系数方阵可逆时，Cramer 法则用行列式之比直接写出唯一解。它是理论推导（而非数值计算）中最常用的显式解公式。

> [!note] 命题
> 设 $A\in \mathrm{GL}_n(K)$，$B\in M_{n,1}(K)$，则 $AX=B$ 的唯一解为
> $$X=\begin{pmatrix}\Delta_1^b/|A|\\\vdots\\\Delta_n^b/|A|\end{pmatrix},\qquad \Delta_j^b=\det(A_1\mid\cdots\mid A_{j-1}\mid B\mid A_{j+1}\mid\cdots\mid A_n),$$
> 即 $\Delta_j^b$ 是把 $A$ 的第 $j$ 列换成 $B$ 所得矩阵的行列式。

> [!info] 命题（等价条件）
> $n$ 个未知数、$n$ 个方程的方程组是 Cramer 方程组（有唯一解）$\iff$ 相伴齐次方程组只有零解 $\iff A\in \mathrm{GL}_n(K)\iff\det(A)\neq0$。

## 直觉
> [!tip] 想法
> 由 $A^{-1}={}^t\operatorname{Com}(A)/\det(A)$ 得 $X=\dfrac{1}{\det A}\,{}^t\operatorname{Com}(A)B$，而 ${}^t\operatorname{Com}(A)B$ 的第 $j$ 个分量恰是把第 $j$ 列换成 $B$ 后的行列式 $\Delta_j^b$。

## 例子
> [!example] 例
> $n=2$：对 $\begin{cases}ax+by=e\\cx+dy=f\end{cases}$，$x=\dfrac{\begin{vmatrix}e&b\\f&d\end{vmatrix}}{\begin{vmatrix}a&b\\c&d\end{vmatrix}}$，$y=\dfrac{\begin{vmatrix}a&e\\c&f\end{vmatrix}}{\begin{vmatrix}a&b\\c&d\end{vmatrix}}$。

## 陷阱
> [!warning] 易错
>
> - 必须先验证 $\det(A)\neq0$（即 $A$ 可逆），否则不能使用。
> - $\Delta_j^b$ 是把第 $j$ 列换成 $B$，不要换成行。
> - 数值实践中 Cramer 法则代价高，通常改用行变换求解。

## 相关概念
- [[代数II/概念/行列式]]
- [[伴随矩阵]]
- [[线性方程组]]
- [[初等变换]]
- [[代数I/概念/消元法]]

## 相关笔记

- [[05-矩阵求逆与初等变换|代数II · 05-矩阵求逆与初等变换]]
- [[08-方阵行列式的计算与伴随矩阵|代数II · 08-方阵行列式的计算与伴随矩阵]]
