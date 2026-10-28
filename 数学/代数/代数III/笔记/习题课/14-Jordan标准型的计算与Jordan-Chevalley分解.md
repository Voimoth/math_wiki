---
title: 代数 III 习题课 · 14 Jordan 标准型的计算与 Jordan–Chevalley 分解
created: 2026-10-29
updated: 2026-10-29
type: notes
tags: [algebre, td, jordan, frobenius, nilpotent]
sources: [代数III 习题课讲义 2026-10-27（循环分解 2）]
confidence: high
---

# 14 Jordan 标准型的计算与 Jordan–Chevalley 分解（2026-10-27 讲义）

上一次（[[12-循环分解与不变因子|习题课 12]]）停在 Frobenius 分解的陈述与不变因子；这次先把它写成方阵形式，再在代数闭域上落成 Jordan 型，然后给计算流程与应用（扩域相似、转置相似、Jordan–Chevalley 分解、$\operatorname{ad}_A$）。

## 14.1 方阵形式与 Jordan 型

> [!note] 定理（Frobenius 标准型，矩阵版）
> $A\in M_n(k)$，$n\ge1$。存在首一非常数 $f_1\mid\cdots\mid f_r\in k[x]$，使 $A$ 在 $k$ 上相似于
> $$\operatorname{diag}(C_{f_1},\dots,C_{f_r}),\qquad C_f=\begin{pmatrix}0&&&-a_0\\1&\ddots&&-a_1\\&\ddots&\ddots&\vdots\\&&1&-a_{d-1}\end{pmatrix}\quad(f=x^d+\cdots+a_0).$$
> 序列 $f_1,\dots,f_r$ 由 $A$ 唯一确定，称为不变因子。

$C_f$ 正是 $k[x]/(f)$ 上「乘 $x$」在基 $1,x,\dots,x^{d-1}$ 下的矩阵，所以矩阵版与空间版是同一句话。

> [!note] 推论（$k$ 代数闭）
> 令 $f_i=\prod_\lambda(x-\lambda)^{m_{i,\lambda}}$，每个 $(x-\lambda)^{m}$ 对应一个 Jordan 块 $J_m(\lambda)$（$J_1(\lambda)=(\lambda)$）。于是
> $$A\sim\operatorname{diag}\bigl(J_{m_1}(\lambda_1),\dots,J_{m_s}(\lambda_s)\bigr),\qquad m_1+\cdots+m_s=n,$$
> 排列次序无关，且此型唯一——这就是 [[代数II/概念/Jordan标准型|Jordan 标准型]]，初等因子即各 $(x-\lambda)^m$。

## 14.2 计算 Jordan 型的流程（讲义 1.1）

1. 算 $\chi_A(x)=\det(xI-A)$，得各特征值 $\lambda$ 与代数重数 $m_\lambda$；属于 $\lambda$ 的块大小之和 $=m_\lambda$。
2. 对每个 $\lambda$，令 $d_0=0$，依次算 $d_j=\dim_k\ker(A-\lambda I)^j$ 直到 $d_j=m_\lambda$（此后不再变）。
3. 读块：块总数 $=d_1$；大小至少为 $j$ 的块有 $d_j-d_{j-1}$ 个；大小恰为 $j$ 的有
$$2d_j-d_{j-1}-d_{j+1}\quad(\text{取 }d_{j+1}=m_\lambda\ \text{当 } j\ge m_\lambda).$$

> [!tip] 为什么 $2d_j-d_{j-1}-d_{j+1}$
> $d_j=\sum_i\min(j,\text{size}_i)$，所以 $d_j-d_{j-1}=\#\{\text{size}_i\ge j\}$。恰好等于 $j$ 的个数是「$\ge j$ 的个数」减「$\ge j+1$ 的个数」：$(d_j-d_{j-1})-(d_{j+1}-d_j)$。

需要相似变换矩阵时，就构造 **Jordan 基**：对每个 $\lambda$ 取 $v$ 使 $(A-\lambda I)^mv=0$、$(A-\lambda I)^{m-1}v\neq0$，链为
$$(A-\lambda I)^{m-1}v,\ \dots,\ (A-\lambda I)v,\ v.$$
各链长度与块大小一致，全体向量作基；按链顺序排成 $P$，则 $P^{-1}AP=J$。

> [!warning] 链不能随便取
> 逐块取链时容易取到相关向量：每取一条链都要检查它与已有向量张成的子空间是否无关。等价说法：先在 $\ker(A-\lambda I)^j/\ker(A-\lambda I)^{j-1}$ 里选独立的类，再逐层提升。

## 14.3 练习 1.1.1：幂零矩阵 $A\in M_5(\mathbb Q)$

$$A=\begin{pmatrix}0&-1&2&-2&-1\\0&0&0&0&0\\0&1&0&0&0\\0&1&0&0&0\\0&1&-1&1&0\end{pmatrix}$$

**幂零性：** 直接算得 $A^2\neq0$、$A^3=0$，零化指数为 $3$。

**核维数：** $5-\operatorname{rg}A^j$ 依次为 $d_1=2$、$d_2=4$、$d_3=5$。于是块数 $=d_1=2$；大小 $\ge2$ 的块 $2$ 个，大小 $\ge3$ 的 $1$ 个，故块大小 $\{3,2\}$：
$$J=\operatorname{diag}\bigl(J_3(0),J_2(0)\bigr).$$
不变因子（升序链）由初等因子 $x^3,x^2$ 按整除链右对齐得 $f_1=x^2$、$f_2=x^3$；Frobenius 标准型为 $\operatorname{diag}(C_{x^2},C_{x^3})$，而 $\chi_A=x^5$、$\mu_A=x^3$。

**Jordan 基：** 取 $v=(-1,-1,-1,-1,-1)^{\mathsf T}$，则
$$A^2v=(1,0,0,0,0)^{\mathsf T},\qquad Av=(2,0,-1,-1,-1)^{\mathsf T}.$$
再取 $w=(0,1,1,0,0)^{\mathsf T}$（$w\in\ker A^2\setminus\ker A$，$Aw=(1,0,1,1,0)^{\mathsf T}$）。可以验证
$$\det(v,Av,A^2v,w,Aw)=1,$$
故这五个向量构成基，且按链顺序排列的 $P=(v,Av,A^2v,w,Aw)$ 满足 $P^{-1}AP=\operatorname{diag}(J_3(0),J_2(0))$。

## 14.4 练习 1.1.2：$A\in M_4(\mathbb Q)$

$$A=\begin{pmatrix}1&0&0&0\\0&1&0&0\\-2&-2&0&1\\-2&0&-1&-2\end{pmatrix}$$

$\chi_A=(x-1)^2(x+1)^2$。核维数：

- $\lambda=1$：$d_1=d_2=2$ ⇒ 两个 $1$ 阶块 $\{1,1\}$；
- $\lambda=-1$：$d_1=1,\ d_2=2$ ⇒ 一个 $2$ 阶块 $\{2\}$。

$$J=\operatorname{diag}\bigl(1,\,1,\,J_2(-1)\bigr).$$
初等因子 $\{(x-1),(x-1),(x+1)^2\}$ 按整除链对齐：$f_1=x-1$、$f_2=(x-1)(x+1)^2=x^3+x^2-x-1$，故
$$A\sim\operatorname{diag}\bigl(C_{x-1},\,C_{x^3+x^2-x-1}\bigr)=\operatorname{diag}\Bigl(1,\ \begin{pmatrix}0&0&1\\1&0&1\\0&1&-1\end{pmatrix}\Bigr),\qquad \mu_A=(x-1)(x+1)^2.$$

## 14.5 应用：扩域与转置

**练习 1.2.1** $k\subset L$ 为扩域，$A,B\in M_n(k)$。则 $A,B$ 在 $k$ 上相似 $\iff$ 在 $L$ 上相似。

理由：相似 $\iff$ 不变因子相同；不变因子的系数由 $k[x]$ 里的带余除法决定，扩域不改变它们（[[代数III/概念/Frobenius标准型]] §5）。这条是「实矩阵在 $\mathbb C$ 上相似即在 $\mathbb R$ 上相似」的一般形式。

**练习 1.2.2** $J_n(\lambda)\sim J_n(\lambda)^{\mathsf T}$。两者有相同的初等因子 $(x-\lambda)^n$，由 Jordan 型唯一性得证。

**练习 1.2.3** $A\sim A^{\mathsf T}$。$A$ 与 $A^{\mathsf T}$ 有相同的特征多项式与相同的 $d_j$（$\operatorname{rg}(A-\lambda I)^j=\operatorname{rg}((A-\lambda I)^{\mathsf T})^j$），故初等因子相同，Jordan 型（或 Frobenius 型）相同。

## 14.6 练习 1.2.4：Jordan–Chevalley 分解

复线性空间上 $u=u_s+u_n$（$u_s$ 可对角化、$u_n$ 幂零、交换）的存在唯一性，以及 $u_s,u_n\in\mathbb C[u]$：见 [[代数III/概念/Jordan-Chevalley分解]]。

这里的解法提示是：$\mu_u=\prod_\lambda(x-\lambda)^{a_\lambda}$，由中国剩余定理构造 $s(x)\equiv\lambda\pmod{(x-\lambda)^{a_\lambda}}$。**要点**：$s(u)$ 在每个广义特征空间 $\ker(u-\lambda I)^{a_\lambda}$ 上等于 $\lambda\mathrm{Id}$（因为 $(s-\lambda)(u)$ 被 $(u-\lambda I)^{a_\lambda}$ 零化），于是可对角化；$u-s(u)$ 在同一块上等于 $u-\lambda\mathrm{Id}$，幂零。

乘法形式：$u$ 可逆时 $u=u_su_u$，$u_u=\mathrm{Id}+u_s^{-1}u_n$ 幂幺，$u_s$ 与加法形式中的可对角化部分相同。

## 14.7 练习 1.2.5：$\operatorname{ad}_A$ 的分解

$\operatorname{ad}_A(X)=AX-XA=[A,X]$，$\operatorname{ad}_{[A,B]}=[\operatorname{ad}_A,\operatorname{ad}_B]$。

- $A$ 可对角化（对角元 $\lambda_i$）⇒ $\operatorname{ad}_A$ 可对角化，$E_{ij}$ 是本征向量，本征值 $\lambda_i-\lambda_j$。
- $N^s=0$ ⇒ $(\operatorname{ad}_N)^{2s-1}=0$：$\operatorname{ad}_N=L_N-R_N$ 的两项交换，展开后每一项 $L_N^{k}R_N^{2s-1-k}$ 中 $k\ge s$ 或 $2s-1-k\ge s$ 必有一个成立。
- 若 $A=A_{\mathrm{s}}+A_{\mathrm{n}}$ 是加法 Jordan–Chevalley 分解，则 $\operatorname{ad}_A=\operatorname{ad}_{A_{\mathrm{s}}}+\operatorname{ad}_{A_{\mathrm{n}}}$ 就是它的 Jordan–Chevalley 分解：交换性由前一式，半单与幂零由上两条。
- $\operatorname{ad}_A$ 可对角化 $\iff$ $A$ 可对角化：由分解的唯一性。

## 14.8 练习 1.2.6：单值化权滤过（注记）

$N^{d+1}=0$ 时讲义构造了唯一的子空间链
$$0\subseteq W_0\subseteq W_1\subseteq\cdots\subseteq W_{2d}=V,\qquad N(W_j)\subseteq W_{j-2},$$
并要求 $N^r$ 诱导 $\mathrm{Gr}_{d+r}(W_\bullet)\xrightarrow{\sim}\mathrm{Gr}_{d-r}(W_\bullet)$，再令 $P_j$ 为 $N^{j-d+1}$ 的核，得到本原分解
$$\mathrm{Gr}_j(W_\bullet)=\bigoplus_{i\ge\max(d-j,0)}N^i(P_{j+2i}).$$

这条链叫作 $N$ 的以 $d$ 为中心的**单值化权滤过**（monodromy weight filtration），$P_j$ 是本原部分。第 (3) 问（$FN=NF$ ⇒ 各 $W_j$ 是 $F$-不变）的做法是先化到 $d=2$ 的循环空间（这就是本讲循环分解的用处）。

> [!tip] 这个构造在哪里出现
> 光滑射影簇的单参数退化里，单值化算子 $T$ 经有限基变换可变成幂幺，$N=\log T$ 幂零；以 $N$ 为中心的单值化权滤过给出极限混合 Hodge 结构的权滤过。讲义把它与 Hard Lefschetz 定理、$\mathfrak{sl}_2$ 表示论的本原分解并列，几何与算术背景见讲义注记 1.2.7 引的 Schmid (1973) 与 Filippini–Ruddat–Thompson 讲义。

## 相关概念

- [[代数III/概念/Frobenius标准型]] — 一般域上的标准形与唯一性
- [[代数III/概念/Jordan-Chevalley分解]] — 本页 14.6–14.7 的完整版
- [[代数II/概念/Jordan标准型]] — 代数 II 侧的引入与块计数
- [[12-循环分解与不变因子|习题课 12]] — 上一讲：不变因子与交换子维数
- [[13-循环分解的存在性证明|习题课 13]] — 同次课的另一半：存在性的另一条证明路线
