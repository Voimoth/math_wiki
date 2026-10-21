---
title: 代数III(群论) · 10 循环自同态的刻画与 Frobenius–Jordan 对应
created: 2026-10-21
updated: 2026-10-21
type: notes
tags: [group-theory, algebre, cours, reduction]
confidence: medium
---

# Autres caractérisations des endomorphismes cycliques

（承接上一篇：Frobenius 分解给出 $M$ 相似于 $\begin{pmatrix}C_{P\vee Q}&0\\0&C_{P\wedge Q}\end{pmatrix}$，$P\wedge Q\mid P\vee Q$，故 $(P\wedge Q,P\vee Q)$ 是相似不变量。以下把「循环」这件事换成两种等价的代数/几何表述。）

## 1. Le commutant

> [!note] 定义
> Pour $u\in L(E)$, le **commutant** de $u$ est
> $$\operatorname{Com}(u)=\{\,v\in L(E)\mid u\circ v=v\circ u\,\}.$$
> On a toujours $K[u]\subset\operatorname{Com}(u)$（多项式在 $u$ 中显然与 $u$ 交换）。

> [!note] 命题
> $u$ cyclique $\iff K[u]=\operatorname{Com}(u)$.

**Preuve.** ($\Rightarrow$) Soit $v\in\operatorname{Com}(u)$，取 $u$ 的循环向量 $x$，则 $(x,u(x),\dots,u^{d-1}(x))$ 是基（$d=\dim E$）。把 $v(x)$ 在这组基上展开：
$$v(x)=\sum_{j=0}^{d-1}a_ju^j(x)=P(u)(x),\qquad P(X)=\sum_{j=0}^{d-1}a_jX^j .$$
对 $k\ge1$，$v$ 与 $u$ 交换给出
$$v(u^k(x))=u^k\bigl(v(x)\bigr)=u^k P(u)(x)=P(u)\bigl(u^k(x)\bigr),$$
故 $v$ 与 $P(u)$ 在基上处处相等，$v=P(u)$。

($\Leftarrow$) 设 $\operatorname{Com}(u)=K[u]$，反设 $u$ 非循环，即至少有两个相似不变量；由 Frobenius 分解 $E=F_1\oplus\cdots\oplus F_r$（$r\ge2$，$F_i$ 稳定）。取 $p$ 为沿 $F_2\oplus\cdots\oplus F_r$ 到 $F_1$ 的投影：$p\circ u=u\circ p$（在 $\operatorname{Im}p=F_1$ 上 $p$ 是恒等且 $u(F_1)\subset F_1$；在 $\ker p$ 上 $p=0$ 且 $u(\ker p)\subset\ker p$），故 $p\in\operatorname{Com}(u)$，于是 $p=P(u)$ 对某 $P\in K[X]$。

在 $F_2\oplus\cdots\oplus F_r$ 上 $p=0$，故 $P(u)|_{F_2}=0$，而 $F_2$ 循环、最小多项式为 $P_2$，得 $P_2\mid P$。在 $F_1$ 上 $\mathrm{Id}-p=0$，而 $F_1$ 的最小多项式为 $P_1$，得 $P_1\mid 1-P$。又 $P_2\mid P_1\mid P$，于是 $P_2\mid P$ 且 $P_2\mid 1-P$，从而 $P_2\mid\gcd(P,1-P)=1$，$P_2$ 为常数，与 $r\ge2$ 矛盾。

## 2. Sous-espaces stables

> [!note] 命题
> On suppose $K$ infini. Alors $u\in L(E)$ cyclique $\iff u$ ne possède qu'un nombre fini de sous-espaces stables.

**Preuve.** ($\Rightarrow$) 设 $u$ 循环、$P=\mu_u$，则 $E\cong K[X]/(P)$ 且 $u$ 就是乘 $X$。乘 $X$ 不变的子空间恰是 $K[X]/(P)$ 的理想；理想与 $K[X]$ 中包含 $P$ 的理想一一对应，而 $K[X]$ 是主理想环，故理想形如 $(Q)$，$Q$ 首一、$Q\mid P$。$P$ 的首一因式只有有限个。

($\Leftarrow$) 「$u$ 循环」意为存在 $x$ 使 $E_x:=\operatorname{Vect}(x,u(x),\dots)=E$。反设没有这样的 $x$，则由稳定子空间只有有限个（记作 $E_1,\dots,E_n$，均 $\ne E$）知每个 $E_x$ 等于某个 $E_j$，于是
$$E=\bigcup_{j=1}^{n}E_j$$
是有限个真子空间之并。

> [!note] 引理
> Si $K$ est infini, $E$ n'est pas réunion d'un nombre fini de sous-espaces stricts.

（标准引理：对 $n$ 归纳；两个真子空间之并不能覆盖 $E$，因为取 $x\notin E_1\cup E_2$ 可用 $E_1$ 中的点沿一条仿射直线绕开 $E_2$。）

## 3. Le bicommutant

> [!note] 定理
> Soit $u\in L(E)$. Alors $\operatorname{Com}\bigl(\operatorname{Com}(u)\bigr)=K[u]$.

**Preuve.** 包含 $K[u]\subset\operatorname{Com}(\operatorname{Com}(u))$ 由定义。反向：取循环分解
$$E=E_1\oplus\cdots\oplus E_r,\qquad u_i=u|_{E_i}\ \text{cyclique},\quad \mu_{u_i}=P_i,\quad P_{i+1}\mid P_i .$$
每个 $E_i$ 稳定，故沿其余块到 $E_i$ 的投影与 $u$ 交换，属于 $\operatorname{Com}(u)$。

设 $v\in\operatorname{Com}(\operatorname{Com}(u))$：$v$ 与这些投影交换，故稳定每个 $E_i$，在适应分解的基下 $u=\operatorname{diag}(u_1,\dots,u_r)$、$v=\operatorname{diag}(v_1,\dots,v_r)$，$v_i=v|_{E_i}$。由 $u_i$ 循环（第 1 节）得 $v_i=Q_i(u_i)$，$Q_i\in K[X]$。

要证这些 $Q_i$ 可以取成同一个多项式。固定 $i$，构造与 $u$ 交换的线性映射 $\varphi_i:E\to E$：在 $j\ne i$ 的 $E_j$ 上取 0，在 $E_i$ 上把循环向量 $e_i$ 送到 $E_1$ 的循环向量 $e_1$，并令
$$\varphi_i\bigl(u^k(e_i)\bigr)=u^k(e_1)\qquad(0\le k\le m_i-1,\ m_i=\deg P_i),$$
（$m_i\le m_1$ 因为 $P_i\mid P_1$，故右端确实落在 $E_1$ 内）。验证 $\varphi_i\circ u=u\circ\varphi_i$：对 $k\le m_i-2$ 直接成立；对 $k=m_i-1$ 需要用 $P_i\mid P_1$，即 $u^{m_i}$ 在 $E_1$ 上与 $R_i(u)$ 一致（$P_i(X)=X^{m_i}-R_i(X)$，$\deg R_i\le m_i-1$），两边都给 $R_i(u)(e_1)$。

于是 $\varphi_i\in\operatorname{Com}(u)$，故 $v\circ\varphi_i=\varphi_i\circ v$。作用到 $e_1$：
$$v(e_1)=\varphi_i\bigl(v(e_1)\bigr)=\varphi_i\bigl(Q_1(u)(e_1)\bigr)=Q_1(u)(e_1).$$
再对 $u^k(e_1)$ 重复同样的计算（$Q_i(u)$、$Q_1(u)$ 都与 $u^k$ 交换）得 $Q_i(u)|_{E_1}=Q_1(u)|_{E_1}$，从而 $v=Q_1(u)$。

## 4. De Frobenius à Jordan

设 $u$ 的特征多项式分裂。Frobenius 定理把问题化归为**矩阵 compagnon** $C_P$（$P$ 分裂）的 Jordan 分解。

> [!note] 命题
> Dans chaque sous-espace caractéristique, il y a un unique bloc de Jordan de taille $\alpha_i$ :
> $$\begin{pmatrix}\lambda_i&1&&\\&\ddots&\ddots&\\&&\lambda_i&1\\&&&\lambda_i\end{pmatrix}.$$

**Preuve.** 先证 $C_P$ 的每个特征值的几何重数为 1：
$$C_P=\begin{pmatrix}0&&&-a_0\\1&\ddots&&\vdots\\&\ddots&0&-a_{n-2}\\&&1&-a_{n-1}\end{pmatrix},\qquad
\lambda\mathrm{Id}-C_P=\begin{pmatrix}\lambda&&&a_0\\-1&\lambda&&\vdots\\&\ddots&\ddots&a_{n-2}\\&&-1&\lambda+a_{n-1}\end{pmatrix}.$$
后者的一个 $(n-1)\times(n-1)$ 子式是下三角、对角全为 $-1$，故可逆，于是 $\operatorname{rg}(\lambda\mathrm{Id}-C_P)\ge n-1$；在特征值处秩恰为 $n-1$，$\dim\ker=1$。而 $\dim\ker$ 就是该特征值的 Jordan 块个数，故唯一。

## 5. De Jordan à Frobenius

> [!note] 注记
> Un bloc de Jordan $J_{\lambda,r}$ donne un endomorphisme cyclique, avec $\chi(X)=\mu(X)=(X-\lambda)^r$.

> [!note] 引理
> Soit $M$ diagonale par blocs de Jordan $J_{\lambda_i,r_i}$. Alors $M$ est cyclique $\iff$ les $\lambda_i$ sont deux à deux distincts.

**Preuve.** 循环 $\iff\chi_M=\mu_M$。而
$$\chi_M=\prod_i(X-\lambda_i)^{r_i},\qquad \mu_M=\operatorname{ppcm}_i\bigl((X-\lambda_i)^{r_i}\bigr),$$
故 $\chi_M=\mu_M\iff$ 各 $(X-\lambda_i)^{r_i}$ 两两互素 $\iff\lambda_i$ 两两不同。

> [!tip] 从 Jordan 读回 Frobenius：Young 型对齐
> 每个特征值 $\lambda_i$ 有 $\alpha_i$ 个 Jordan 块，大小 $r_{i,1}\ge r_{i,2}\ge\cdots\ge r_{i,m_i}$。把它们排成一张「Young 型」表格：每一列对应一个特征值，每行取同一"层"的块，
> $$\begin{array}{cccc}(X-\lambda_1)^{r_{1,1}}&(X-\lambda_2)^{r_{2,1}}&\cdots&(X-\lambda_s)^{r_{s,1}}\ \longrightarrow P_1\\ &(X-\lambda_2)^{r_{2,2}}&\cdots&\\ \vdots&&&\vdots\\ (X-\lambda_1)^{r_{1,m_1}}&(X-\lambda_2)^{r_{2,m_2}}&\cdots&(X-\lambda_s)^{r_{s,m_s}}\ \longrightarrow P_r\end{array}$$
> 每行相乘得 $P_j$，则 $P_1\mid P_2\mid\cdots\mid P_r$，每个 $P_j$ 给一个循环块，这就是不变因子。

## 相关概念

- [[Frobenius标准型]]
- [[代数III/概念/模]]
- [[代数III/概念/域上代数]]
- [[代数III/概念/对称群]]
- [[Schur-Weyl对偶]]
