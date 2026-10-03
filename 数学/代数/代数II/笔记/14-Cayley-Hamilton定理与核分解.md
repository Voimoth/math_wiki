---
title: 代数 II · 14 Cayley–Hamilton 定理与核分解
created: 2026-10-03
updated: 2026-10-03
type: notes
tags: [algebre, cayley-hamilton, decomposition-des-noyaux, matrice-compagnon, polynome-annulateur, recurrence]
sources: [代数 II 正课手写笔记]
confidence: medium
---

# 14 Cayley–Hamilton 定理与核分解（Ch. 2 · Cayley–Hamilton, décomposition des noyaux）

## Cayley–Hamilton 定理

> [!note] 定理 14.1（Cayley–Hamilton）
> 设 $u\in\mathcal{L}(E)$，$\dim E=n<+\infty$。则 $\chi_u$ 零化 $u$：
> $$\chi_u(u)=0.$$
> 等价地，对 $A\in M_n(K)$，$\chi_A(A)=0$。

### 回顾：伴随矩阵（matrice compagnon）

> [!info] 引理 14.2（伴随矩阵）
> 设 $(a_0,\dots,a_{p-1})\in K^p$，
> $$C=\begin{pmatrix}0&\cdots&0&-a_0\\ 1&\ddots&&-a_1\\ &\ddots&&\vdots\\ &&1&-a_{p-1}\end{pmatrix}\in M_p(K)$$
> 是多项式 $P=X^p+a_{p-1}X^{p-1}+\cdots+a_1X+a_0$ 的**伴随矩阵**。则 $C$ 的特征多项式与极小多项式相等：
> $$\chi_C=\pi_C=P.$$

**证明：** 设 $(E_0,\dots,E_{p-1})$ 是 $K^p$ 的典范基。直接计算得
$$C^0E_0=E_0,\quad C^1E_0=E_1,\quad C^2E_0=E_2,\ \dots,\ C^kE_0=E_k\quad(0\le k\le p-1),$$
故 $(E_0,CE_0,\dots,C^{p-1}E_0)$ 是基，于是 $\deg\pi_C\ge p=\deg P$。又
$$C^pE_0=CE_{p-1}=\begin{pmatrix}-a_0\\-a_1\\\vdots\\-a_{p-1}\end{pmatrix}=-a_0E_0-a_1E_1-\cdots-a_{p-1}E_{p-1}=-\sum_{i=0}^{p-1}a_iC^iE_0,$$
故 $P(C)E_0=0$。因 $K[C]$ 交换，$P(C)E_k=P(C)C^kE_0=C^kP(C)E_0=0$（$0\le k\le p-1$），故 $P(C)=0$。于是 $\pi_C\mid P$，结合 $\deg\pi_C\ge\deg P$ 得 $\pi_C=P$。$\#$（$\chi_C=P$ 的计算见 [[特征多项式]]。）

> [!info] 引理 14.3
> 设 $u\in\mathcal{L}(E)$，$0\neq x\in E$。
> ① 存在包含 $x$ 且被 $u$ 稳定的**最小**子空间 $F_x$；
> ② 若 $\dim F_x=p$，则 $(x,u(x),\dots,u^{p-1}(x))$ 是 $F_x$ 的一组基。

**证明：** ① 令 $F_x:=\bigcap\{F\subset E\mid x\in F,\ u(F)\subset F\}$：该集合非空（含 $E$）且对交封闭，故 $F_x$ 是含 $x$ 的最小稳定子空间。
② 由 $F_x$ 的极小性，$F_x$ 由 $(u^k(x))_{k\ge0}$ 生成。若 $(x,u(x),\dots,u^{p-1}(x))$ 线性相关，设 $m$ 是最小的使 $(x,\dots,u^m(x))$ 相关的下标，则由关系式 $u^m(x)\in\operatorname{Vect}(x,\dots,u^{m-1}(x))$ 推出 $W:=\operatorname{Vect}(x,\dots,u^{m-1}(x))$ 在 $u$ 下稳定且含 $x$；而 $\dim W=m<p=\dim F_x$，与 $F_x$ 极小矛盾。故该族自由，又它张成 $F_x$，即为基。$\#$

**定理 14.1 的证明：** 对任意 $x\in E$（若 $x=0$ 结论显然；否则取 $F_x$ 如引理 14.3，$p=\dim F_x$），按基 $(x,u(x),\dots,u^{p-1}(x))$ 展开 $u^p(x)$：
$$u^p(x)=-\sum_{i=0}^{p-1}a_iu^i(x),$$
即 $u_{F_x}$ 在该基下的矩阵是引理 14.2 中的伴随矩阵，故 $\chi_{u_{F_x}}=\pi_{u_{F_x}}=P$（$P=X^p+a_{p-1}X^{p-1}+\cdots+a_0$）。
由 $F_x$ 稳定得 $\chi_{u_{F_x}}\mid\chi_u$（命题 12.1），设 $\chi_u=\chi_{u_{F_x}}Q$，则
$$\chi_u(u)(x)=\chi_{u_{F_x}}(u_{F_x})\bigl(Q(u)(x)\bigr)=0.$$
$x$ 任意，故 $\chi_u(u)=0$。$\#$

## 核分解定理（décomposition des noyaux）

> [!note] 定理 14.4（核分解定理）
> 设 $u\in\mathcal{L}(E)$，$0\neq\dim E=n<+\infty$；$P_1,\dots,P_r\in K[X]$ 两两互素，$P=P_1\cdots P_r$。则
> $$\operatorname{Ker}\bigl(P(u)\bigr)=\bigoplus_{k=1}^r\operatorname{Ker}\bigl(P_k(u)\bigr).$$

**证明：** 对 $r$ 归纳，只需证 $r=2$。$P_1,P_2$ 互素 $\iff$ 存在 $(A,B)\in K[X]^2$ 使 $AP_1+BP_2=1$。
一方面 $\operatorname{Ker}(P_1(u)),\operatorname{Ker}(P_2(u))\subset\operatorname{Ker}(P(u))$。反之，对 $x\in\operatorname{Ker}(P(u))$，由 $A(u)P_1(u)+B(u)P_2(u)=\mathrm{id}_E$ 得
$$x=A(u)P_1(u)x+B(u)P_2(u)x.$$
其中 $P_2(u)\bigl(A(u)P_1(u)x\bigr)=A(u)P(u)x=0$，故 $A(u)P_1(u)x\in\operatorname{Ker}(P_2(u))$；同理 $B(u)P_2(u)x\in\operatorname{Ker}(P_1(u))$。于是 $\operatorname{Ker}(P_1(u))+\operatorname{Ker}(P_2(u))=\operatorname{Ker}(P(u))$。
再证和为直和：若 $x\in\operatorname{Ker}(P_1(u))\cap\operatorname{Ker}(P_2(u))$，则 $P_1(u)x=P_2(u)x=0$，故
$$x=A(u)P_1(u)x+B(u)P_2(u)x=0,$$
即 $\operatorname{Ker}(P_1(u))\cap\operatorname{Ker}(P_2(u))=\{0\}$。$\#$

> [!note] 推论 14.5
> 条件同上。若 $P$ 零化 $u$（$P(u)=0$），则 $E=\bigoplus_{k=1}^r\operatorname{Ker}(P_k(u))$。

> [!note] 推论 14.6
> 若 $\chi_u=P_1\cdots P_r$（各 $P_k$ 两两互素），则 $E=\bigoplus_{k=1}^r\operatorname{Ker}(P_k(u))$。

## 应用：线性递推与常系数微分方程

> [!example] 例 14.7（二阶线性递推）
> 设 $(a,b)\in K^2$，序列 $(u_n)\in K^{\mathbb{N}}$ 满足 $u_{n+2}=au_{n+1}+bu_n$。定义移位算子
> $$T:K^{\mathbb{N}}\to K^{\mathbb{N}},\qquad (u_n)_{n\in\mathbb{N}}\mapsto(u_{n+1})_{n\in\mathbb{N}},$$
> 则 $T^2u=aTu+bu$，即 $u\in\operatorname{Ker}(Q(T))$，其中 $Q=X^2-aX-b\in K[X]$。
> 若 $Q$ 在 $K$ 上有互异根 $\lambda_1,\lambda_2$，即 $Q=(X-\lambda_1)(X-\lambda_2)$，由核分解
> $$\operatorname{Ker}(Q(T))=\operatorname{Ker}(T-\lambda_1\mathrm{id})\oplus\operatorname{Ker}(T-\lambda_2\mathrm{id})=\{A\lambda_1^n+B\lambda_2^n\mid(A,B)\in K^2\}.$$

> [!example] 例 14.8（常系数线性微分方程）
> $$(\mathrm{ED})\quad f^{(p)}+a_{p-1}f^{(p-1)}+\cdots+a_1f'+a_0f=0,\qquad f\in\mathcal{C}^\infty(\mathbb{R},\mathbb{C}).$$
> 特征多项式 $C(X)=X^p+a_{p-1}X^{p-1}+\cdots+a_1X+a_0$。微分算子
> $$D:\mathcal{C}^\infty(\mathbb{R},\mathbb{C})\to\mathcal{C}^\infty(\mathbb{R},\mathbb{C}),\qquad f\mapsto f'$$
> 是 $\mathbb{C}$-线性的，且 $f$ 是 $(\mathrm{ED})$ 的解 $\iff$ $f\in\operatorname{Ker}(C(D))$。
> 若 $C=\prod_{k=1}^r(X-\lambda_k)^{p_k}$，由核分解 $\operatorname{Ker}(C(D))=\bigoplus_{k=1}^r\operatorname{Ker}\bigl((D-\lambda_k)^{p_k}\bigr)$。
> 记 $e_\lambda(x)=e^{\lambda x}$，则 $D(e_\lambda)=\lambda e_\lambda$，即 $e_\lambda\in\operatorname{Ker}(D-\lambda)$。对 $p$ 归纳可证
> $$(D-\lambda)^p(fe_\lambda)=e_\lambda\,D^p(f)\qquad(\forall f\in\mathcal{C}^\infty(\mathbb{R},\mathbb{C})),$$
> 于是 $\operatorname{Ker}(D-\lambda)^p=\{x\mapsto Q(x)e^{\lambda x}\mid Q\in\mathbb{C}_{p-1}[X]\}$ 是 $p$ 维的，基为 $(e^{\lambda x},xe^{\lambda x},\dots,x^{p-1}e^{\lambda x})$。从而
> $$\dim\operatorname{Ker}(C(D))=\sum_kp_k=\deg C.$$

> [!example] 例 14.9（一般线性递推序列）
> $$\forall n\in\mathbb{N},\quad u_{n+p}+a_{p-1}u_{n+p-1}+\cdots+a_1u_{n+1}+a_0u_n=0.$$
> 令 $C(X)=X^p+a_{p-1}X^{p-1}+\cdots+a_1X+a_0\in K[X]$，则 $(u_n)$ 满足条件 $\iff$ $u\in\operatorname{Ker}(C(T))$。若 $C$ 分裂，$C=\prod_{k=1}^r(X-\lambda_k)^{p_k}$，则
> $$u\in\operatorname{Ker}(C(T))=\bigoplus_{k=1}^r\operatorname{Ker}(T-\lambda_k)^{p_k},\qquad \dim\operatorname{Ker}(T-\lambda_k)^{p_k}=p_k.$$
> - 若 $\lambda_k=0$：$\operatorname{Ker}(T^{p_k})=\{(u_n)\mid n\ge p_k\Rightarrow u_n=0\}$；
> - 若 $\lambda_k\neq0$：$(T-\lambda_k)^{p_k}$ 把 $\bigl(P(n)\lambda_k^n\bigr)_n$ 映为 $\bigl(\lambda_k^nQ(n)\bigr)_n$，其中 $Q(n)=\lambda_k\bigl(P(n+1)-P(n)\bigr)$ 满足 $\deg Q\le\deg P-1$；两边维数一致，故
> $$\operatorname{Ker}(T-\lambda_k)^{p_k}=\{P(n)\lambda_k^n\mid P\in K_{p_k-1}[X]\}.$$
> 于是通项
> $$u_n=\sum_{k=1}^sP_k(n)\lambda_k^n,\qquad \deg P_k\le p_k-1.$$

## 应用：计算 $A^m$

> [!info] 注记 14.10
> 递推 $u_{n+2}=au_{n+1}+bu_n$ 可写成矩阵形式
> $$\begin{pmatrix}u_{n+2}\\u_{n+1}\end{pmatrix}=\begin{pmatrix}a&b\\1&0\end{pmatrix}\begin{pmatrix}u_{n+1}\\u_n\end{pmatrix}=A\begin{pmatrix}u_{n+1}\\u_n\end{pmatrix}=\cdots=A^{n+1}\begin{pmatrix}u_1\\u_0\end{pmatrix},$$
> 于是求通项归结为求 $A^m$。把 $A$ 三角化：存在 $P\in GL_n(K)$ 使 $P^{-1}AP=T=D+N$（$D$ 对角、$N$ 幂零，且 $DN=ND$，即上三角的对角部分与严格上三角部分）。由二项式定理（$D,N$ 交换）及 $N^n=0$，
> $$A^m=P^{-1}(D+N)^mP=\sum_{k=0}^{n-1}\binom{m}{k}P^{-1}D^{m-k}N^kP.$$

## 相关概念

- [[Cayley-Hamilton定理]]、[[核分解定理]]、[[伴随矩阵]]、[[零化多项式]]、[[极小多项式]]、[[特征多项式]]
