---
title: Gamma函数与Beta函数
created: 2026-10-03
updated: 2026-10-03
type: concept
tags: [分析II, 含参积分, Gamma函数, Beta函数]
sources: [殷浩《分析 2》下册]
confidence: high
---

# Gamma 函数与 Beta 函数

> [!note] 定义
> $$\Gamma(s)=\int_0^\infty t^{s-1}e^{-t}dt,\qquad B(p,q)=\int_0^1t^{p-1}(1-t)^{q-1}dt .$$
> 二者都是含参广义积分,其定义、连续性、可导性用控制收敛定理处理。

## 1. Gamma 函数

> [!note] 基本性质
> $\Gamma$ 在 $(0,\infty)$ 上定义且光滑,并且
> 1. $\Gamma(s)>0$,$\Gamma(1)=1$;
> 2. $\Gamma(s+1)=s\Gamma(s)$(分部积分),故 $\Gamma(n+1)=n!$;
> 3. $\log\Gamma$ 是 $(0,\infty)$ 上的凸函数(Hölder 不等式)。
> 满足这三条的函数唯一,因此这是 $\Gamma$ 的一个刻画。

> [!tip] 证明要点
> 定义:在 $0$ 附近 $t^{s-1}e^{-t}\sim t^{s-1}$($s>0$ 时可积),在 $\infty$ 处 $=o(e^{-t/2})$。连续与可导:取紧邻域 $[\alpha,\beta]$,在 $0$ 附近用 $t^{\alpha-1}$(或 $t^{\alpha-1}|\log t|^k$)控制,在 $\infty$ 附近用 $e^{-t/2}$ 控制,由控制收敛定理得逐次求导合法。

## 2. Beta 函数

> [!note] 基本性质
>
> 1. $B(p,q)$ 在 $(0,\infty)^2$ 上有定义而且光滑;
> 2. $B(p,q)=B(q,p)$(换元 $u=1-t$);
> 3. $B(p+1,q+1)=\frac{pq}{(p+q+1)(p+q)}B(p,q)$。

## 3. 二者的关系

> [!note] 定理
> 对任何 $p>0,q>0$,
> $$B(p,q)=\frac{\Gamma(p)\Gamma(q)}{\Gamma(p+q)} .$$

> [!tip] 证明思路
> 把 $\Gamma(x)\Gamma(y)$ 写成 $\iint u^{x-1}v^{y-1}e^{-(u+v)}dudv$,作变量替换 $u=st$、$v=s(1-t)$,雅可比行列式为 $s$,积分分离为 $\Gamma(x+y)\cdot B(x,y)$。

> [!example] 例子
> 由关系式与 $\Gamma(n+1)=n!$,整参数时 $B(m,n)=\frac{(m-1)!(n-1)!}{(m+n-1)!}$。

## 相关概念

- [[含参变量积分]]
- [[控制收敛定理（含参积分版）]]
- [[esperance]]（概率论）— Γ/B 是 L^1 型含参积分,与概率的期望积分同源

## 相关笔记

- [[11-含参变量积分|分析II · 11-含参变量积分]]
