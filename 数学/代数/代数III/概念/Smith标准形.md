---
title: Smith 标准形 (forme normale de Smith)
created: 2026-10-27
updated: 2026-10-27
type: concept
tags: [algebre, modules, integer-matrices, pid]
sources: [代数III 习题课讲义 2026-10-20]
confidence: high
---

# Smith 标准形 (forme normale de Smith)

> [!question] 问题
> 域上矩阵可以用行、列变换化成对角形（秩决定一切）。换成 $\mathbb Z$ 上的矩阵，行、列变换只能取 $\mathrm{GL}_m(\mathbb Z)\times\mathrm{GL}_n(\mathbb Z)$，还能化到多简单？不变量还剩什么？

## 陈述

> [!note] 定理（Smith 标准形）
> $A\in M_{m\times n}(\mathbb Z)$，$r=\operatorname{rank}A$。存在 $P\in\mathrm{GL}_m(\mathbb Z)$、$Q\in\mathrm{GL}_n(\mathbb Z)$ 使
> $$PAQ=\begin{pmatrix}D&0\\0&0\end{pmatrix},\qquad D=\operatorname{diag}(d_1,\dots,d_r),\quad d_1\mid d_2\mid\cdots\mid d_r,$$
> $d_i$ 为正整数（$r=0$ 时右侧为零矩阵）。序列 $(d_1,\dots,d_r)$ 与 $P,Q$ 的选取无关，由 $A$ 唯一确定，称为 $A$ 的**不变因子**。

## 存在性与唯一性

**存在性.** 用整数初等变换（倍加、换行/换列、乘 $-1$）做「辗转相除消元」：取 $A$ 非零元中绝对值最小者挪到 $(1,1)$，用它对第一行、第一列做带余除法，余数严格变小；反复直到第一行第一列其余元素全为 $0$，再对余下的 $(m-1)\times(n-1)$ 块归纳。$\mathbb Z$ 是欧氏环，过程终止。最后用行列的整数倍加调整整除链 $d_i\mid d_{i+1}$。

**唯一性.** 记 $\Delta_k$ 为 $A$ 的全部 $k$ 阶子式的最大公因子（$\Delta_0=1$）。初等变换不改变 $\Delta_k$：换行/列只改符号，倍加把子式变成整数线性组合，乘 $-1$ 变符号。而 $PAQ$ 的 $k$ 阶子式的 gcd 是 $d_1\cdots d_k$（对角形上只有取前 $k$ 个对角元的子式非零，其余含零行/列）。于是
$$\Delta_k=d_1d_2\cdots d_k,\qquad d_k=\frac{\Delta_k}{\Delta_{k-1}}$$
由 $A$ 决定。

> [!note] 推论
> $A\in\mathrm{GL}_n(\mathbb Z)\iff$ 所有 $d_i=1$ $\iff$ Smith 形为 $I_n$。

## 用途

1. **有限生成 Abel 群的结构定理**：$A$ 是关系矩阵时，$\mathbb Z^n/A\mathbb Z^m\cong\mathbb Z^{n-r}\oplus\bigoplus_i\mathbb Z/d_i$。$d_i$ 就是挠部分的阶。
2. **解整系数线性方程组**：$Ax=b$ 的可解性与解的结构由 Smith 形直接读出（$P$、$Q$ 给出换基）。
3. **$\mathrm{SL}_n(\mathbb Z)$ 的生成**：互素行向量可用 $\mathrm{GL}_n(\mathbb Z)$ 化到 $e_1$（Smith 形的一行情形），这是 [[主同余子群]] 无挠性证明的一步。
4. **模 $N$ 约化的满射性**：Smith 形控制 $\mathbb Z$-模的同态像，配合中国剩余定理给出 $\mathrm{SL}_m(\mathbb Z)\twoheadrightarrow\mathrm{SL}_m(\mathbb Z/N)$。

> [!warning] 「不变因子」在两处同名、含义不同
> - 这里：$\mathbb Z$ 上矩阵的 Smith 对角元 $d_i$（整数的整除链）。
> - [[Frobenius标准型]]：$k[x]$ 上线性变换的 $f_i$（多项式的整除链）。
>
> 两者都是「主理想整环上有限生成模的结构定理」给出的不变因子，定理同一、环不同（$\mathbb Z$ vs $k[x]$）。不要混用数值对象。

> [!tip] 与域上情形的对照
> $k$ 是域时 $k$ 上矩阵只有秩这一个不变量（$d_i$ 全可取 $1$）。$\mathbb Z$ 上多出的信息就是「$k$ 的单位群只有 $k^\times$ 太小」的反面：$\mathbb Z^\times=\{\pm1\}$ 太小，无法消去非 $\pm1$ 的因子，这些因子被迫留在 $d_i$ 里。这也解释了为什么 $k[x]$ 上（$k[x]^\times=k^\times$）会留下多项式不变量。

## 相关概念

- [[代数III/概念/模]] — PID 上有限生成模的结构定理
- [[Frobenius标准型]] — 同一套「不变因子」在 $k[x]$ 上
- [[主同余子群]]
- [[代数III/概念/线性群与特殊线性群]] — $\mathrm{GL}_n(\mathbb Z)$ 与平延生成
