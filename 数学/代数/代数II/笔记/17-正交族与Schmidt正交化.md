---
title: 代数 II · 17 正交族与 Schmidt 正交化
created: 2026-10-03
updated: 2026-10-03
type: notes
tags: [algebre, orthogonalite, famille-orthogonale, pythagore, schmidt]
sources: [代数 II 正课手写笔记]
confidence: medium
---

# 17 正交族与 Schmidt 正交化（Orthogonalité, familles orthogonales）

## 规范向量与正交

> [!note] 定义（规范 / 单位向量）
> $E$ 为预 Hilbert 空间。$x\in E$ 称为规范的 / 单位的（normé / unitaire），若 $\|x\|=1$。

> [!info] 注记
> $\forall x\in E\ (x\neq 0)$，$\dfrac{x}{\|x\|}$ 称为 $x$ 的规范化。

> [!note] 定义（正交）
> 称 $x$ 与 $y$ 正交（orthogonaux），若 $(x|y)=0$。记为 $x\perp y$ 或 $y\perp x$。

> [!info] 注记
> 因 $(\cdot|\cdot)$ 正定，$x\perp x\iff x=0$；又 $(x|0)=0$，故 $\forall x\in E,\ x\perp 0$。

> [!example] 例
> $E=\mathbb{R}^n$，取基 $e=(e_1,\dots,e_n)$、$(x|y)=\sum_{i=1}^n x_iy_i$。则 $\forall i\neq j,\ e_i\perp e_j$，且每个 $e_i$ 规范。称 $e$ 为 $E$ 的规范正交基。

> [!example] 例
> $E=\{$ 周期为 $2\pi$ 的实函数 $\}$，$(f|g)=\dfrac{1}{2\pi}\displaystyle\int_0^{2\pi}fg$，则 $\sin x$ 与 $\cos x$ 正交。

## 子集的正交

> [!note] 定义（$A^\perp$）
> $E$ 为预 Hilbert 空间，$A\subset E$ 的正交（orthogonal de $A$）定义为
> $$A^\perp=\{x\in E\mid \forall a\in A,\ x\perp a\}.$$

> [!info] 注记
> $A$ 只需是一般子集，不必是子空间；易证 $A^\perp$ 是子空间。事实上对每个 $a\in A$，$\varphi_a:E\to\mathbb{R},\ x\mapsto(x|a)$ 是线性型，其核是闭子空间，且
> $$A^\perp=\bigcap_{a\in A}\ker\varphi_a.$$

> [!example] 例
>
> - $\{0\}^\perp=E$；$E^\perp=\{0\}$。
> - $E=\mathbb{R}^2$，$x=(a,b)$：$\{x\}^\perp=\operatorname{Vect}\bigl((-b,a)\bigr)$。
> - $u=(a,b,c)\in E=\mathbb{R}^3$：$\{u\}^\perp=\{(x,y,z)\in E\mid ax+by+cz=0\}$，是向量超平面。

> [!info] 命题
> 若 $A\subset B$，则 $A^\perp\supset B^\perp$。

**证明：** 由 $A^\perp=\bigcap_{a\in A}\ker\varphi_a$ 与 $B$ 的指标集更大，
$$\bigcap_{a\in A}\ker\varphi_a\supset\bigcap_{a\in B}\ker\varphi_a,$$
即 $A^\perp\supset B^\perp$。$\#$

> [!info] 命题
> $A\subset E\implies A^\perp=\operatorname{Vect}(A)^\perp$。

**证明：** 「$\supset$」显然。下证「$\subset$」：取 $x\in A^\perp$，任取 $y\in\operatorname{Vect}A$，则存在 $a_1,\dots,a_n\in A$ 与 $\lambda_1,\dots,\lambda_n\in\mathbb{R}$ 使 $y=\lambda_1a_1+\dots+\lambda_na_n$，于是
$$(x|y)=\lambda_1(x|a_1)+\dots+\lambda_n(x|a_n)=0,$$
故 $x\in\operatorname{Vect}(A)^\perp$。$\#$

## 正交族与规范正交族

> [!note] 定义（正交族、规范正交族）
> $E$ 中一族两两正交的非零向量称为正交族（une famille orthogonale）；若其中每个向量还都是规范的，则称为规范正交族（une famille orthonormale / orthonormée）。

> [!example] 例
> $E=\{$ 以 $2\pi$ 为周期的实函数 $\}$，$(f|g)=\dfrac{1}{\pi}\displaystyle\int_0^{2\pi}fg$。取
> $$f_k:x\mapsto\cos kx\quad(k\neq 0),\qquad g_k:x\mapsto\sin kx\quad(k\neq 0),\qquad f_0\equiv\frac{1}{\sqrt 2},$$
> 则 $(f_0,f_k,g_k)_{k\in\mathbb{N}^*}$ 是一个规范正交族。

## 正交族必自由

> [!info] 命题
> 每一项均非零的正交族总自由。特别地，规范正交族自由。

**证明：** 设 $(x_i)_{i\in I}$ 为正交族，$\forall i\in I,\ x_i\neq 0$。任取有限子集 $I_0\subset I$ 与系数 $\lambda_i\in\mathbb{R}\ (i\in I_0)$，若 $\sum_{i\in I_0}\lambda_ix_i=0$，则对每个 $j\in I_0$，
$$0=(x_j|0)=\Bigl(x_j\Big|\sum_{i\in I_0}\lambda_ix_i\Bigr)=\sum_{i\in I_0}\lambda_i(x_j|x_i)=\lambda_j\|x_j\|^2,$$
由 $\|x_j\|^2\neq 0$ 得 $\lambda_j=0$，故该族自由。$\#$

## 勾股定理

> [!info] 命题（勾股定理，théorème de Pythagore）
> $E$ 为预 Hilbert 空间，$(x,y)\in E^2$：
> $$x\perp y\iff \|x+y\|^2=\|x\|^2+\|y\|^2.$$

**证明：** 由极化恒等式 ①，$x\perp y\iff 0=2(x|y)=\|x+y\|^2-\|x\|^2-\|y\|^2$。$\#$

> [!info] 命题
> 若 $(x_1,\dots,x_n)\in E^n$ 是正交族，则
> $$\Bigl\|\sum_{i=1}^n x_i\Bigr\|^2=\sum_{i=1}^n\|x_i\|^2.$$

**证明：** 对 $n$ 归纳即可。$\#$

## Schmidt 正交化

> [!note] 定理（Schmidt 正交化算法）
> $E,(\cdot|\cdot)$ 为预 Hilbert 空间，$F=(e_1,\dots,e_n)$ 是自由族。则存在规范正交族 $(f_1,\dots,f_n)$ 使
> $$\forall p\in[\![1,n]\!],\qquad \operatorname{Vect}(e_1,\dots,e_p)=\operatorname{Vect}(f_1,\dots,f_p).$$

**证明：** 对 $n$ 归纳构造。取 $f_1=\dfrac{e_1}{\|e_1\|}$。设已有规范正交的 $(f_1,\dots,f_p)$，要找 $f_{p+1}$。由 $\operatorname{Vect}(e_1,\dots,e_p)=\operatorname{Vect}(f_1,\dots,f_p)$ 得
$$\operatorname{Vect}(e_1,\dots,e_{p+1})=\operatorname{Vect}(f_1,\dots,f_p,e_{p+1}).$$
令
$$g_{p+1}=e_{p+1}-\sum_{i=1}^p\lambda_if_i,$$
要求 $g_{p+1}$ 与 $f_1,\dots,f_p$ 正交，即对每个 $j\in[\![1,p]\!]$：
$$0=(e_{p+1}|f_j)-\lambda_j\|f_j\|^2\implies \lambda_j=\frac{(e_{p+1}|f_j)}{\|f_j\|^2}.$$
再取 $f_{p+1}=\dfrac{g_{p+1}}{\|g_{p+1}\|}$ 即可。$\#$

## 相关概念
- [[正交]]
- [[正交族]]
- [[Schmidt正交化]]
- [[数量积]]
