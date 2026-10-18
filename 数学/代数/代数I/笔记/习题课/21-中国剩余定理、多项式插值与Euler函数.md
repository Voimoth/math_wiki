---
title: 代数 I · 21 中国剩余定理、多项式插值与 Euler 函数
created: 2026-10-03
updated: 2026-10-03
type: notes
tags: [algebre, restes-chinois, interpolation, euler]
sources: [代数 I 习题课手写笔记]
confidence: medium
---

# 中国剩余定理、多项式插值与 Euler 函数

> [!tip] 问题
> 若干个关于同一个未知数的同余条件能否同时满足、且解唯一？把同余换成"在指定点取指定值"，多项式是否也有类似的"处处可指定"性质？

## 中国剩余定理

> [!note] 定理 1.1（中国剩余定理，théorème des restes chinois）
> 设 $I_1,\dots,I_r$ 是交换环 $R$ 的理想，且对任意 $i\neq j$ 有 $I_i+I_j=R$。令 $I=I_1\cap\cdots\cap I_r$，则映射
> $$\varphi:R/I\longrightarrow R/I_1\times\cdots\times R/I_r,\qquad a+I\longmapsto(a+I_1,\ \dots,\ a+I_r)$$
> 是环同构。

**Preuve :** 先证 $R=I_k+\bigcap_{j\neq k}I_j$。由 $I_1+I_j=R$（$j\neq1$），
$$R=(I_1+I_2)(I_1+I_3)\cdots(I_1+I_r)\subseteq I_1+I_2I_3\cdots I_r\subseteq I_1+\bigcap_{j\neq1}I_j\subseteq R,$$
故 $R=I_1+\bigcap_{j\neq1}I_j$；同理对任意 $k$，$R=I_k+\bigcap_{j\neq k}I_j$。

考虑环同态 $\tilde\varphi:R\to R/I_1\times\cdots\times R/I_r$，$a\mapsto(a+I_1,\dots,a+I_r)$。先证 $\tilde\varphi$ 满：只需对每个 $k$ 找到 $x_k\in R$ 使
$$\tilde\varphi(x_k)=(x_k+I_1,\dots,x_k+I_r)=(0+I_1,\dots,\underline{1+I_k},\dots,0+I_r),$$
即需 $x_k\in\bigcap_{j\neq k}I_j$ 且 $1-x_k\in I_k$。由 $1\in R=I_k+\bigcap_{j\neq k}I_j$，存在 $b\in I_k$、$x_k\in\bigcap_{j\neq k}I_j$ 使 $1=x_k+b$，于是 $1-x_k=b\in I_k$。对任意 $(a_1+I_1,\dots,a_r+I_r)$，取 $x=a_1x_1+\cdots+a_rx_r$，则
$$\tilde\varphi(x)=\tilde\varphi(a_1)\tilde\varphi(x_1)+\cdots+\tilde\varphi(a_r)\tilde\varphi(x_r)=(a_1+I_1,\dots,a_r+I_r),$$
故 $\tilde\varphi$ 满。又易验证 $\ker(\tilde\varphi)=I_1\cap\cdots\cap I_r=I$，故由同构定理，$\varphi$ 是环同构。

> [!note] 推论 1.2
> 设 $n_1,\dots,n_r$ 两两互素，$n=n_1\cdots n_r$，则有环同构
> $$\varphi:\mathbb{Z}/n\mathbb{Z}\longrightarrow\mathbb{Z}/n_1\mathbb{Z}\times\cdots\times\mathbb{Z}/n_r\mathbb{Z},\qquad a+n\mathbb{Z}\longmapsto(a+n_1\mathbb{Z},\dots,a+n_r\mathbb{Z}).$$

**Preuve :** 由 $n_i,n_j$ 互素及 $n=n_1\cdots n_r$，知 $n_i\mathbb{Z}+n_j\mathbb{Z}=\mathbb{Z}$、$n\mathbb{Z}=n_1\mathbb{Z}\cap\cdots\cap n_r\mathbb{Z}$，这正是定理 1.1 的条件。

> [!tip] 方法（求解同余方程组）
> 令 $N_k=\dfrac{n}{n_k}$，则 $N_k\mathbb{Z}=\bigcap_{j\neq k}(n_j\mathbb{Z})$、$\mathbb{Z}=n_k\mathbb{Z}+N_k\mathbb{Z}$，即关键等式 $1=b+x_k$（$b\in n_k\mathbb{Z}$、$x_k\in N_k\mathbb{Z}$）。为具体给出 $x_k$，先解同余方程
> $$N_kt_k\equiv1\pmod{n_k},$$
> 再取 $x_k=N_kt_k$；最后 $m\equiv\sum_k a_kx_k\pmod n$。

## 多项式插值

> [!note] 定理 2.1（多项式插值，interpolation polynomiale）
> 设 $k$ 是域，$a_1,\dots,a_n\in k$ 两两不同，$b_1,\dots,b_n\in k$，则存在唯一的次数小于 $n$ 的多项式 $f\in k[X]$ 使 $f(a_i)=b_i$（$i=1,\dots,n$）。

**Preuve :** 考虑理想 $I_i:=(X-a_i)$。由 $a_i\neq a_j$（$i\neq j$）得 $I_i+I_j=k[X]$。由中国剩余定理，
$$\frac{k[X]}{\textstyle\prod_i I_i}\simeq\frac{k[X]}{I_1}\times\cdots\times\frac{k[X]}{I_n},\qquad \prod_i I_i=\Bigl(\prod_{i=1}^n(X-a_i)\Bigr),$$
且 $k[X]/I_i\simeq k$。给定 $(b_1,\dots,b_n)\in k^n$，存在唯一的 $f\in k[X]/\bigcap_i I_i$ 使 $f(a_i)\equiv b_i\pmod{(X-a_i)}$，即 $f(a_i)=b_i$。

## 无重因式的例子

> [!example] 例 3.1
> 设 $f=1+X+\dfrac{1}{2!}X^2+\cdots+\dfrac{1}{n!}X^n$，则 $f$ 在 $\mathbb{Q}[X]$ 中无重因式。

**Preuve :** 易知 $f'=1+X+\cdots+\dfrac{1}{(n-1)!}X^{n-1}$ 与 $f$ 互素。若 $f$ 有重因式，则该重因式必是 $f$ 与 $f'$ 的公因子，与二者互素矛盾。故 $f$ 在 $\mathbb{Q}[X]$ 中无重因式。

## Euler 函数

> [!note] 定义 4.1（Euler 函数，indicatrice d'Euler）
> **Euler 函数** $\varphi:\mathbb{Z}_{\ge1}\to\mathbb{Z}_{\ge1}$，$n\mapsto\varphi(n):=|(\mathbb{Z}/n\mathbb{Z})^\times|$，即 $\varphi(n)$ 为 $1$ 到 $n$ 中与 $n$ 互素的整数个数。

> [!note] 命题 4.2
> 设 $p$ 为素数。
> (1) $\varphi(p^n)=p^n-p^{n-1}$，$\forall n\ge1$；
> (2) 若 $m,n\in\mathbb{Z}_{\ge1}$ 互素，则 $\varphi(mn)=\varphi(m)\varphi(n)$；
> (3) 设 $f(m)=\sum_{d\mid m,\,d>0}\varphi(d)$，$m\in\mathbb{Z}_{\ge1}$，则 $f(m)=m$。

**Preuve :**
(1) 对 $n$ 归纳。$n=1$ 时 $\varphi(p)=|(\mathbb{Z}/p\mathbb{Z})^\times|=|\{1,2,\dots,p-1\}|=p-1$。若 $\varphi(p^n)=p^n-p^{n-1}$，则 $\varphi(p^{n+1})=p\cdot\varphi(p^n)=p^{n+1}-p^n$。故对一切 $n\ge1$，$\varphi(p^n)=p^n-p^{n-1}$。
(2) 由中国剩余定理，$\mathbb{Z}/mn\mathbb{Z}\simeq\mathbb{Z}/m\mathbb{Z}\times\mathbb{Z}/n\mathbb{Z}$（$m,n$ 互素），故
$$|(\mathbb{Z}/mn\mathbb{Z})^\times|=|(\mathbb{Z}/m\mathbb{Z})^\times|\cdot|(\mathbb{Z}/n\mathbb{Z})^\times|,$$
即 $\varphi(mn)=\varphi(m)\varphi(n)$。
(3) 对 $n$ 归纳，$f(1)=1$ 显然。先算素幂：由 (2) 知 $f$ 在互素情形可乘，且
$$f(p^n)=\varphi(1)+\varphi(p)+\cdots+\varphi(p^n)=1+(p-1)+\cdots+(p^n-p^{n-1})=p^n.$$
设 $m=p_1^{\alpha_1}\cdots p_r^{\alpha_r}$，则 $f(m)=f(p_1^{\alpha_1})\cdots f(p_r^{\alpha_r})=p_1^{\alpha_1}\cdots p_r^{\alpha_r}=m$。对一般情形写 $n+1=ab$（$a,b>0$ 互素），由乘性
$$f(n+1)=\sum_{d\mid n+1,\,d>0}\varphi(d)=\sum_{d_1\mid a,\ d_2\mid b}\varphi(d_1d_2)=f(a)f(b)=ab=n+1.$$
故对一切 $n\ge1$，$f(n)=n$。

> [!note] 注记 4.3（Euler 定理，théorème d'Euler）
> 设 $a\in\mathbb{Z}$，$(a,n)=1$，则 $a^{\varphi(n)}\equiv1\pmod n$。

## 相关概念

- [[中国剩余定理]]
- [[Lagrange插值公式]]
- [[多项式函数]]
- [[欧拉函数]]
- [[同余]]
- [[商环]]
