---
title: Weierstrass 逼近定理
created: 2026-10-03
updated: 2026-10-03
type: concept
tags: [analysis, approximation, polynomial]
sources: [分析II笔记.md]
confidence: high
---

# Weierstrass 逼近定理

> [!note] Thm.
> $f$ 是 $[0,1]$ 上的连续实值函数，$\forall\varepsilon>0$ 存在多项式 $g$ 使 $\sup_{[0,1]}|f-g|\le\varepsilon$。

> [!note] 等价说法
> - 存在多项式列 $g_n$ 在 $[0,1]$ 上一致收敛于 $f$；
> - 在 NVS $(C^0([a,b],\mathbb R),\|\cdot\|_\infty)$ 中多项式全体稠密。

> [!warning] 只能是实变量
> 复变量不成立：复多项式在圆周上的积分等于其常数项，故不具备该性质的连续函数不能被多项式一致逼近。

## 证明外围

> [!note] 化归
> - 折线函数可一致逼近任何连续函数（用一致连续）；
> - 折线函数是有限个 V 型函数之和（V 型函数由四点 $(a,b,c,d)$ 确定）；
> - 任何 V 型函数可由 $x\mapsto|x|$ 经平移、加线性函数、乘实数得到，而多项式在这三步下不变。
> 于是只需证明：

> [!note] Lemma.
> 存在多项式列在 $[-1,1]$（或 $[-M,M]$）上一致逼近 $x\mapsto|x|$。

## 关键引理的两条证明路线

> [!note] 方法一（递推）
> $P_0\equiv0$，$P_{n+1}(t)=\frac12(P_n(t)^2+t)$。则 $P_n$ 是多项式；对固定 $t$，$P_n(t)$ 单调增且 $\le1$，故有极限 $f(t)$，由 $f=\frac12(f^2+t)$ 得 $f(t)=1-\sqrt{1-t}$。又 $P_{n+1}-P_n$ 关于 $t$ 单调增且 $P_{n+2}-P_{n+1}=\frac12(P_{n+1}-P_n)(P_{n+1}+P_n)$，得 $0\le f(t)-P_n(t)\le f(1)-P_n(1)$，故 $P_n$ 一致收敛于 $f$。最后令 $Q_n(x)=1-P_n(1-x^2)$，则 $Q_n$ 在 $[-1,1]$ 上一致逼近 $|x|$。

> [!note] 方法二（磨光，Baby Rudin §7.26）
> 先设 $f$ 在 $[a,b]$ 外为 $0$、$f(a)=f(b)=0$。取 $Q_n(x)=c_n(1-x^2)^n$（$c_n$ 使 $\int_{-1}^1Q_n=1$），$P_n(x)=\int_{-1}^1f(x+t)Q_n(t)dt$，则 $P_n$ 一致收敛于 $f$；当 $x\in[0,1]$ 时 $P_n(x)=\int_0^1f(y)Q_n(y-x)dy$，把 $Q_n(y-x)$ 按 $x$ 展开即知 $P_n$ 是多项式。直观上 $Q_n$ 是越来越集中的权重——这就是后来的「磨光」。

## 相关概念

- [[Stone-Weierstrass定理]] — 从区间推广到紧集上的代数
- [[Weierstrass判别法]] — 同名但不同内容，注意区分
- [[相对拓扑与稠密性]] — 定理即多项式稠密
- [[一致收敛级数的性质]]
