---
title: 分析I · 数值积分与Newton法
created: 2026-10-03
updated: 2026-10-03
type: notes
tags: [analysis, analysis-I, zh]
sources: [分析I 课程笔记(本人手写扫描)]
confidence: medium
---

# 数值积分与Newton法

## 1. 数值积分

取分点
$$x_0=a<x_1<\dots<x_n=b,\qquad x_k=a+\frac{k(b-a)}n.$$

**矩形逼近：**
$$S_n(f)=h\sum_{k=0}^{n-1}f\!\left(a+\frac{k(b-a)}n\right)\to\int_a^b f.$$
**梯形逼近：**
$$S'_n(f)=\frac{b-a}{n}\sum_{k=0}^{n-1}\frac12\big(f(x_k)+f(x_{k+1})\big)\to\int_a^b f.$$

> [!info] Prop.
> 设 $f\in C^1([a,b],\mathbb{R})$，则
> $$\left|\int_a^b f-S_n(f)\right|\le\frac{M_1(b-a)^2}{2n},\qquad M_1=\max_{[a,b]}|f'|.$$

**Démo :**
$$\left|\int_{x_k}^{x_{k+1}}f-\frac{b-a}n f(x_k)\right|=\left|\int_{x_k}^{x_{k+1}}\big(f(x)-f(x_k)\big)\,dx\right|$$
$$\le\int_{x_k}^{x_{k+1}}M_1(x-x_k)\,dx=\frac12M_1(x-x_k)^2\Big|_{x_k}^{x_{k+1}}=\frac{M_1}{2}\left(\frac{b-a}n\right)^2,$$
$$\left|\int_a^b f-S_n(f)\right|\le n\cdot\frac{M_1}{2}\left(\frac{b-a}n\right)^2=\frac{M_1(b-a)^2}{2n}.\quad\#$$

> [!info] Prop.
> 设 $f\in C^2([a,b],\mathbb{R})$，则
> $$\left|\int_a^b f-S'_n(f)\right|\le\frac{M_2(b-a)^3}{12n^2},\qquad M_2=\max_{[a,b]}|f''|.$$

**Démo :**
$$\left|\int_{x_k}^{x_{k+1}}f-\frac{b-a}{2n}\big(f(x_k)+f(x_{k+1})\big)\right|
=\left|\int_{x_k}^{x_{k+1}}f(x)\,dx-\frac12\int_{x_k}^{x_{k+1}}\big(f(x_k)+f(x_{k+1})\big)dx\right|$$
不妨设 $f(x_k)=f(x_{k+1})=0$（$f$ 减一个线性函数，上式不变），上式
$$=\left|\int_{x_k}^{x_{k+1}}f\right|\le\int_{x_k}^{x_{k+1}}\frac12M_2(x-x_k)(x_{k+1}-x)\,dx=\frac{M_2}{12}(x_{k+1}-x_k)^3,$$
故
$$\left|\int_a^b f-S'_n(f)\right|\le\frac{M_2(b-a)^3}{12n^2}.\quad\#$$

## 2. Newton 法求根

设函数 $f:[a,b]\to\mathbb{R}$，$f\in C^2$，$f'>0$，$f''>0$，$f(a)<0$，$f(b)>0$。

取 $x_0=b$，作 $x_0$ 处切线与 $x$ 轴交于 $x_1$，再作 $x_1$ 处切线与 $x$ 轴交于 $x_2$，$\dots$，则 $(x_n)$ 收敛于零点：
$$x_{n+1}=\frac{x_nf'(x_n)-f(x_n)}{f'(x_n)}=x_n-\frac{f(x_n)}{f'(x_n)}.$$

估计 $|x_n-c|$ 衰减速度。

> [!info] Prop.
> $$|x_{n+1}-c|\le\frac{M_2}{2m_1}(x_n-c)^2,\qquad m_1=\min_{[a,b]}f',\quad M_2=\max_{[a,b]}f''.$$

**Démo :**
$$0=f(c)=f(x_n)+f'(x_n)(c-x_n)+\frac12f''(\xi_n)(c-x_n)^2$$
$$\Rightarrow\ \frac{f(x_n)}{f'(x_n)}+c-x_n=-\frac{f''(\xi_n)}{2f'(x_n)}(c-x_n)^2
\Rightarrow\ c-x_{n+1}=-\frac{f''(\xi_n)}{2f'(x_n)}(c-x_n)^2$$
$$\Rightarrow\ |x_{n+1}-c|\le\frac{M_2}{2m_1}(c-x_n)^2.\quad\#$$

## 3. 积分余项的 Taylor 公式（Taylor-Laplace）

> [!note] Th.
> 设 $a\in I$，$f\in\mathcal{C}^{n+1}(I,\mathbb{R})$，则 $\forall x\in I$，
> $$f(x)=T_a^n(f)(x)+\int_a^x\frac{(x-t)^n}{n!}f^{(n+1)}(t)\,dt.$$

**Démo :**
$$f(x)=f(a)+\int_a^xf'(t)\,dt=f(a)-\int_a^xf'(t)\,d(x-t)$$
$$=f(a)-\big.(x-t)f'(t)\big|_a^x+\int_a^x(x-t)f''(t)\,dt
=f(a)+(x-a)f'(a)+\int_a^x(x-t)f''(t)\,dt=\dots\ (\text{归纳}).\quad\#$$

## 相关概念

- [[数值积分]]
- [[Newton法求根与二次收敛]]
- [[积分余项（Taylor-Laplace）]]
- [[高阶Taylor公式]]
