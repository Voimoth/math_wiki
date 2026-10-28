---
title: Jordan–Chevalley 分解 (décomposition de Jordan–Chevalley)
created: 2026-10-29
updated: 2026-10-29
type: concept
tags: [algebre, endomorphisme, jordan, semi-simple, nilpotent]
sources: [代数III 习题课讲义 2026-10-27（循环分解 2）]
confidence: high
---

# Jordan–Chevalley 分解 (décomposition de Jordan–Chevalley)

> [!question] 问题
> 一个算子 $u$ 不能对角化时，差在哪里？$u$ 与对角矩阵的差距有两件不同的事：一部分「有特征值但块不止对角」，一部分「真对角化」。Jordan 型把两者塞进块里；Jordan–Chevalley 分解把 $u$ 直接写成**可对角化部分 + 幂零部分**之和，且两部分都是 $u$ 的多项式。它不依赖基，也不依赖 Jordan 型的排列。

## 半单与幂零

> [!note] 定义
> 设 $k$ 为域、$V$ 有限维、$u\in\operatorname{End}_k(V)$。
> - $u$ **半单**（semi-simple）指 $u$ 在代数闭包 $\bar k$ 上可对角化（等价：$\mu_u$ 在 $\bar k$ 上无重根）。特征 $0$ 时就是「可对角化」（在 $\bar k$ 上）。
> - $u$ **幂零**（nilpotent）指某个 $u^s=0$。
>
> 两个事实：幂零 $\Rightarrow$ 特征值全为 $0$；半单且幂零 $\Rightarrow u=0$（特征值既全为 $0$ 又互异地可对角化）。

## 加法分解

> [!note] 定理（Jordan–Chevalley，加法形式；$k$ 特征 $0$）
> 每个 $u\in\operatorname{End}_k(V)$ 唯一地写成
> $$u=u_s+u_n,\qquad u_s\ \text{半单},\quad u_n\ \text{幂零},\quad u_su_n=u_nu_s,$$
> 且 $u_s,u_n\in k[u]$（都是 $u$ 的多项式）。

**构造。** 在 $\bar k$ 上写 $\chi_u(x)=\prod_{i=1}^{r}(x-\lambda_i)^{m_i}$，$\lambda_i$ 互异，$V_i=\ker(u-\lambda_i)^{m_i}$，$V=\bigoplus_iV_i$（[[核分解定理]]）。由中国剩余定理取 $s\in\bar k[x]$ 使
$$s(x)\equiv\lambda_i\pmod{(x-\lambda_i)^{m_i}}\qquad(i=1,\dots,r).$$
令 $u_s=s(u)$、$u_n=u-u_s$。在 $V_i$ 上 $(s-\lambda_i)(u)=0$（它是 $(x-\lambda_i)^{m_i}$ 的倍数），故 $u_s=\lambda_i\mathrm{Id}_{V_i}$——$u_s$ 在基 $\bigcup_i V_i$ 的各块下是常数，可对角化；$u_n=u-\lambda_i\mathrm{Id}$ 在 $V_i$ 上幂零，故 $u_n$ 幂零。两者都是 $u$ 的多项式，自然交换。$\square$

> [!note] 唯一性
> 设 $u=s+n$ 是另一个分解。$s$ 与 $n$ 都与 $u$ 交换，而 $u_s,u_n\in k[u]$，所以 $s,n$ 与 $u_s,u_n$ 都交换。于是
> $$s-u_s=u_n-n$$
> 左边是交换的半单算子之差（同时可对角化 $\Rightarrow$ 半单），右边是交换的幂零算子之差（仍幂零）。既半单又幂零，故为零。

> [!warning] 「$\in k[u]$」给的到底是什么
> 唯一性本身只用到「$s,n$ 都与 $u$ 交换」（由 $s=u-n$ 与 $sn=ns$ 自动成立）加上 $u_s\in k[u]$。多项式条件真正的用处是更强的一条：**$u_s,u_n$ 与任何与 $u$ 交换的算子都交换**。于是对 $u$ 的交换子 $v$，$u_sv=vu_s$、$u_nv=vu_n$，$\operatorname{ad}_A$ 的分解才不需要再验证交换性（见下面第 4 条）。特征 $p$ 不可分的情形，分解仍存在，但不保证落在 $k[u]$ 里。

> [!tip] 与 Jordan 型的换算
> $u_s$ 就是「把每个 Jordan 块压成纯量 $\lambda_i$」得到的对角部分，$u_n$ 是块内的上三角幂零部分。所以 $u_s$ 在每个广义特征空间上取该特征值。可对角化 $\iff u_n=0$；幂零 $\iff u_s=0$。

## 乘法分解

> [!note] 定理（乘法形式）
> 若 $u$ 可逆，则唯一地
> $$u=u_s\,u_u,\qquad u_s\ \text{半单可逆},\quad u_u\ \text{幂幺（unipotent，即 }u_u-\mathrm{Id}\ \text{幂零）},\quad u_su_u=u_uu_s,$$
> 且 $u_s,u_u\in k[u]$；其中 $u_s$ 与加法分解中的可对角化部分相同。

**证明。** 由加法分解 $u=u_s+u_n$，$u$ 可逆 $\Rightarrow u_s$ 可逆（特征值非零）。令 $u_u=\mathrm{Id}+u_s^{-1}u_n$：$u_s^{-1}u_n$ 幂零且与 $u_s$ 交换，故 $u_u$ 幂幺；$u=u_s\,u_u$。唯一性由加法分解的唯一性转过去。$\square$

## 交换子算子 $\operatorname{ad}_A$

> [!note] 命题
> $A\in M_n(\mathbb C)$，$\operatorname{ad}_A(X)=AX-XA=[A,X]$。则
> 1. $\operatorname{ad}_{[A,B]}=[\operatorname{ad}_A,\operatorname{ad}_B]$（Jacobi 恒等式的变形）；
> 2. $A$ 可对角化 $\Rightarrow\operatorname{ad}_A$ 可对角化：取 $A$ 对角化后的基，$E_{ij}$ 是本征向量，本征值 $\lambda_i-\lambda_j$；
> 3. $N^s=0\Rightarrow(\operatorname{ad}_N)^{2s-1}=0$：$\operatorname{ad}_N=L_N-R_N$，$L_N,R_N$ 交换，展开 $(L_N-R_N)^{2s-1}$ 的每一项 $L_N^{k}R_N^{2s-1-k}$ 中 $k\ge s$ 或 $2s-1-k\ge s$ 总有一个成立；
> 4. 若 $A=A_{\mathrm{s}}+A_{\mathrm{n}}$ 是加法 Jordan–Chevalley 分解，则 $\operatorname{ad}_A=\operatorname{ad}_{A_{\mathrm{s}}}+\operatorname{ad}_{A_{\mathrm{n}}}$ **就是** $\operatorname{ad}_A$ 的加法 Jordan–Chevalley 分解（第 1 条给出交换性，第 2、3 条给出半单与幂零）；
> 5. 由唯一性，$\operatorname{ad}_A$ 可对角化 $\iff A$ 可对角化：$\Leftarrow$ 是第 2 条；$\Rightarrow$ 时 $\operatorname{ad}_{A_{\mathrm{n}}}=0$ 迫使 $A_{\mathrm{n}}=0$。

> [!tip] 为什么这个命题常被问
> 它把「$A$ 的性质」翻译成「$\operatorname{ad}_A$ 的性质」，而 $\operatorname{ad}$ 是李代数 $\mathfrak{gl}_n$ 的伴随表示。同一条推理在一般半单李代数里就是「$x$ 半单 $\iff\operatorname{ad}_x$ 半单」，即 Jordan–Chevalley 分解对任意线性李代数成立的原因。

## 域的依赖

> [!warning] 特征 $p$ 时 $k[u]$ 可能不够
> 上面的构造在 $\bar k$ 上取多项式，落到 $k[u]$ 需要 $\chi_u$ 的可分性：$k$ 特征 $0$ 时总是可以。特征 $p$、$\mu_u$ 不可分时（如 $u$ 满足 $u^p=\mathrm{Id}$ 而 $k$ 不含 $p$ 次单位根），半单部分未必是 $k[u]$ 中的多项式，此时只能说存在分解、在 $\bar k[u]$ 中成立。教材里通常先假设 $k$ 完美（perfect）。

## 相关概念

- [[代数III/概念/Frobenius标准型]] — 一般域上的标准形，不要求分裂
- [[代数III/概念/模]] — 同一分解的模论语言（半单模 + 幂零部分）
- [[代数II/概念/Jordan标准型]] — 分裂域上块大小的计算
- [[代数II/概念/核分解定理]] — 广义特征空间直和，构造的起点
- [[代数II/概念/极小多项式]] — $\chi_u$ 与 $\mu_u$ 的重根判据
