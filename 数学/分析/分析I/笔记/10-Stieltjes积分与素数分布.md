---
title: 分析I · Stieltjes积分与素数分布
created: 2026-10-03
updated: 2026-10-03
type: notes
tags: [analysis, analysis-I, zh]
sources: [分析I 课程笔记(本人手写扫描)]
confidence: medium
---

# Stieltjes积分与素数分布

## 1. Stieltjes 积分

设 $\mu:[a,b]\to\mathbb{R}$ 单调增。取分划 $\sigma:a=x_0<x_1<\dots<x_n=b$，记
$$m_i=\inf_{[x_{i-1},x_i]}f,\qquad M_i=\sup_{[x_{i-1},x_i]}f,$$
"区间长度"为 $\mu(x_i)-\mu(x_{i-1})$。类似于 Riemann 积分，定义上、下和
$$\overline S_\sigma(f)=\sum_{i=1}^n M_i\big(\mu(x_i)-\mu(x_{i-1})\big),\qquad
\underline S_\sigma(f)=\sum_{i=1}^n m_i\big(\mu(x_i)-\mu(x_{i-1})\big).$$

> [!note] 可积
> $f$ 是 Riemann-Stieltjes 可积的 $\iff \sup_\sigma\underline S_\sigma=\inf_\sigma\overline S_\sigma$。积分记为 $\int_a^b f\,d\mu$。

> [!example]
> $\mu(x)=\begin{cases}1,&x\in[0,1[\\ 3,&x\in[1,2]\end{cases}$，$f\in C([0,2])$，则 $\displaystyle\int_0^2 f\,d\mu=2f(1)$。

> [!info] Prop.（分部积分 / Abel 求和公式）
> $\mu:[a,b]\to\mathbb{R}$ 增，$f\in C^1([a,b])$，则
> $$\underbrace{\int_a^b f'\mu\,dx}_{\text{Riemann}}=f\mu\Big|_a^b-\underbrace{\int_a^b f\,d\mu}_{\text{Stieltjes}}.$$

**Démo :**
$$\int_a^b f\,d\mu=\sum_{i=0}^{n-1}f(x_i)\big(\mu(x_{i+1})-\mu(x_i)\big)+o(1)$$
$$=f(x_n)\big(\mu(x_n)-\mu(x_0)\big)+\sum_{i=0}^{n-1}\big(f(x_i)-f(x_{i+1})\big)\big(\mu(x_{i+1})-\mu(x_0)\big)+o(1)$$
$$=f\mu\Big|_a^b-\sum_{i=1}^{n}\mu(x_i)\big(f(x_i)-f(x_{i-1})\big)+o(1)$$
$$=f\mu\Big|_a^b-\int_a^b \mu(x)\,f'(x)\,dx.\quad\#$$

## 2. Mertens 定理与素数定理

> [!note] Th (Mertens)
> $$\sum_{p\le x}\frac1p=\log\log x+M+O\!\left(\frac1{\log x}\right),$$
> 其中 $M$ 为常数。

> [!note] 素数定理
> 记 $\pi(x)=\sum_{p\le x}1$，则 $x\to+\infty$ 时 $\pi(x)\sim\dfrac{x}{\log x}$。

> [!info] 弱化版
> $$\frac18\le\frac{\pi(x)}{x/\log x}\le 12\qquad(\forall x\in\mathbb{N}).$$

## 3. 弱形式（素数定理的初等证明）

$$\frac18\le\frac{\pi(n)}{n/\log n}\le 12.$$

**Démo :**

> [!note] Lem 1
> $$n!=\prod_{p\le n}p^{\,v_p(n!)}.$$

> [!note] Lem 2
> $C_n^{2n}$ 中 $p$ 的次数为 $\displaystyle\sum_{k\ge1}\left(\left\lfloor\frac{2n}{p^k}\right\rfloor-2\left\lfloor\frac{n}{p^k}\right\rfloor\right)$。

> [!note] Claim 1
> $$\prod_{n<p\le 2n}p\ \Big|\ C_n^{2n}\qquad(\text{由 Lem 2}).$$

$$C_n^{2n}\ \Big|\prod_{p\le 2n}p^{\,v_p(\cdot)}$$
$$\Rightarrow\ n^{\pi(2n)-\pi(n)}\le C_n^{2n}\le(2n)^{\pi(2n)},\qquad 2^{n}\le C_n^{2n}\le 2^{2n}$$
$$\Rightarrow\ n^{\pi(2n)-\pi(n)}\le 2^{2n},\qquad 2^{n}\le(2n)^{\pi(2n)}.$$

取 $n=2^k$，$k=0,1,2,\dots$：
$$\Rightarrow\ 2^{k\pi(2^{k+1})-k\,\pi(2^k)}\le 2^{2^{k+1}},\qquad 2^{2^k}\le 2^{(k+1)\pi(2^{k+1})}$$
$$\Rightarrow\ (k+1)\pi(2^{k+1})-k\,\pi(2^k)\le 2^{k+1}+\pi(2^{k+1})\le 2^{k+1}+2^k=3\cdot 2^k$$
$$(k+1)\pi(2^{k+1})\ge 2^k.$$

迭代：
$$(k+1)\pi(2^{k+1})\le 3\cdot2^k+3\cdot2^{k-1}+\dots+3\cdot2^0\le 3\cdot2^{k+1}$$
$$\Rightarrow\ \frac12\le\frac{\pi(2^{k+1})}{2^{k+1}/(k+1)}\le 3.\quad\#$$

## 4. Mertens 定理（素数倒数和）的证明

**Démo :** 先证
$$\log(N!)=N\sum_{p\le N}\frac{\log p}{p}+O(N).$$
因为
$$\log(N!)=\sum_{p\le N}\log p\cdot\left(\left\lfloor\frac Np\right\rfloor+\left\lfloor\frac N{p^2}\right\rfloor+\dots\right)
=\sum_{p\le N}\log p\left\lfloor\frac Np\right\rfloor+\sum_{p\le N}\log p\left\lfloor\frac N{p^2}\right\rfloor+\dots,$$
以 $\left\lfloor\frac Np\right\rfloor=\frac Np-\left\{\frac Np\right\}$ 代入，
$$=N\sum_{p\le N}\frac{\log p}{p}+\underbrace{\sum_{p\le N}\log p\left(\frac Np-\left\lfloor\frac Np\right\rfloor\right)}_{\le\ \log N\cdot\pi(N)=O(N)}+\underbrace{\dots}_{\sum_{p\le N}\frac{\log p}{p^2}\cdot N=O(N)}
=N\sum_{p\le N}\frac{\log p}{p}+O(N).\quad\#$$

## 5. Stirling 公式与 $\sum\log p$ 的估计

> [!note] Th (Stirling)
> $$N!=\sqrt{2\pi N}\left(\frac Ne\right)^N(1+o(1)).$$

取 $\log$：
$$\log\sqrt{2\pi N}+N\log\frac Ne+\log(1+o(1))=\log(N!)=N\sum_{p\le N}\frac{\log p}{p}+O(N)$$
$$\Rightarrow\ \sum_{p\le N}\frac{\log p}{p}=\log N+O(1).$$

记 $R(x)=\sum_{p\le x}\frac{\log p}{p}-\log x=O(1)$，则
$$\int_{p_1}^{p_n}\frac1{\log t}\,d\big(R(t)+\log t\big)=\frac1{\log p_n}\cdot\frac{\log p_n}{p_n}=\frac1{p_n}\qquad(p_i\ \text{为素数}),$$
$$\sum_{p\le x}\frac1p=\int_{1.5}^x\frac1{\log t}\,d(R(t)+\log t)=\left.\frac{R(t)+\log t}{\log t}\right|_{1.5}^x+\int_{1.5}^x\frac{R(t)+\log t}{t\log^2 t}\,dt$$
$$=\left.\frac{R(t)}{\log t}\right|_{1.5}^x+\log\log x-\log\log1.5+O\!\left(\frac1{\log x}\right)
=\log\log x+M+O\!\left(\frac1{\log x}\right).$$
