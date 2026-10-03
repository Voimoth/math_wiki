---
title: 分析II · Stone-Weierstrass
created: 2026-10-03
updated: 2026-10-03
type: notes
tags: [analysis, analysis-II, zh]
sources: [殷浩《分析 2》上册]
confidence: high
---
# 8. Stone-Weierstrass

这一段来自 Baby Rudin，没有可能比它写得更好。同时，那里也有说明:为什么从实值改到复值是不对的，但是再加上共轭封闭条件就够了。

首先考虑实值。由于暂时没有学习紧拓扑空间，就考虑 $\mathbb R^n$ 的紧子集 $K$。$K$ 上定义的函数集 $A$ 称为一个代数，如果它（对加法、乘法、数乘封闭）。连续函数全体当然是一个代数，我们考虑的是其中的子代数。

> [!note] Déf. 8.1
> $A$ **分离点**（separates points），如果对任何 $x,y\in K$（$x\ne y$），存在 $f\in A$ 使 $f(x)\ne f(y)$。

## 8.1 实值函数

> [!note] Thm. 8.2 (Stone-Weierstrass)
> 设 $A$ 是紧集 $K$ 上连续函数的代数。若 $A$ 分离点且 $1\in A$，则 $\bar A=C(K)$（闭包是对 $\|\cdot\|_\infty$ 而言，也就是一致收敛逼近的文雅说法）。

**Preuve :** 1. 若 $A\subset C(K)$ 是代数，则 $\bar A$ 也是:若 $f,g\in\bar A$，有 $f_i,g_i$ 分别一致收敛于 $f,g$，则 $f_i+g_i$ 一致收敛于 $f+g$，故 $f+g\in\bar A$（乘法同理）。
2. 对任何 $x_1\ne x_2$ 与任何 $c_1,c_2\in\mathbb R$，存在 $f\in A$ 使 $f(x_i)=c_i$（$i=1,2$）。固定 $x_1,x_2$，由分离点有 $h\in A$ 使 $h(x_1)\ne h(x_2)$；解方程组 $ah(x_1)+b=c_1$、$ah(x_2)+b=c_2$，因 $h(x_1)\ne h(x_2)$ 有唯一解；又 $1\in A$，故 $ah+b\in A$。
3. 若 $f\in\bar A$，则 $|f|\in\bar A$。回忆可以找到多项式序列 $P_n$ 使 $\max_{x\in[-M,M]}|P_n(x)-|x||\to0$。因 $f\in C(K)$ 有界，设界为 $M$，于是 $P_n(f)$ 在 $K$ 上一致收敛于 $|f|$；另一方面 $P_n(f)$ 是 $f$ 的多项式，因而属于 $A$，故 $|f|\in\bar A$。
4. 若 $f,g\in\bar A$，则 $\max(f,g),\min(f,g)\in\bar A$，只需注意 $\max(a,b)=\frac{(a+b)+|a-b|}2$、$\min(a,b)=\frac{(a+b)-|a-b|}2$。
5. 给定任何连续函数 $h\in C(K)$、任何 $x\in K$ 与任何 $\varepsilon>0$，存在 $g_x\in\bar A$ 满足 $g_x(x)=h(x)$ 且 $g_x(y)\ge h(y)-\varepsilon$（$\forall y\in K$）。固定 $h,\varepsilon$，固定 $x$，对任何 $y$ 由第 2 步可找到 $g_{x,y}\in A$ 使 $g_{x,y}(x)=h(x)$、$g_{x,y}(y)=h(y)$（$x=y$ 时平凡）。由 $g_{x,y}$ 与 $h$ 在 $y$ 的连续性，存在小邻域 $B(y,r_y)$ 使 $g_{x,y}(z)\ge h(z)-\varepsilon$ 对一切 $z\in B(y,r_y)$。由 $K$ 的紧性，可取有限个 $y_1,\dots,y_m$ 使 $B(y_i,r_{y_i})$ 覆盖 $K$。令 $g_x:=\max_{i=1,\dots,m}g_{x,y_i}$，则 $g_x(x)=h(x)$、$g_x(z)\ge h(z)-\varepsilon$（$\forall z\in K$），且由第 4 步知 $g_x\in\bar A$。
6. 给定任何 $h\in C(K)$ 与任何 $\varepsilon>0$，可以找到 $f\in\bar A$ 使 $|h(x)-f(x)|\le\varepsilon$（$\forall x\in K$）。固定 $h,\varepsilon$，对每个 $x\in K$ 有第 5 步给的 $g_x$。由 $g_x$ 与 $h$ 的连续性，存在 $x$ 的邻域 $B(x,\rho_x)$ 使 $g_x(z)\le h(z)+\varepsilon$（$\forall z\in B(x,\rho_x)$）。如前，有有限个 $x_1,\dots,x_l$ 使 $B(x_i,\rho_{x_i})$ 覆盖 $K$。最后定义 $f:=\min_{i=1,\dots,l}g_{x_i}$。由第 5 步每个 $g_{x_i}\ge h-\varepsilon$，故 $f\ge h-\varepsilon$；又 $\forall z\in K$ 存在 $i$ 使 $z\in B(x_i,\rho_{x_i})$，故 $f(z)\le g_{x_i}(z)\le h(z)+\varepsilon$。

应该考虑举两个例子，至少不同于原始的 Weierstrass 定理。

> [!example] 8.3 / 8.4
> 考虑任何 $\mathbb R^n$ 上的紧集（比如闭球），$\mathbb R^n$ 上的多项式是一个可以分离点的代数。
> 考虑圆周 $S^1$ 上的连续函数 $C(S^1)$，考虑三角多项式 $a_0+\sum_{n=1}^N a_n\cos nx+b_n\sin nx$ 全体。（这里把 $S^1$ 看成周期函数；周期是不是 $2\pi$，这个结论都一样对。）

## 8.2 复值函数

同样考虑紧集 $K$ 上的复值函数。多项式全体尽管继续是代数、继续保持了分离点的性质，但是已经不能用于逼近任何连续函数了。主要原因在于，以后将会学到所有的多项式都是全纯函数，它们一定满足一个叫做平均值等式的东西
$$f(z)=\frac1{|B(z,r)|}\int_{B(z,r)}f(y)dy$$
（这里是个二元积分）。如果有连续函数这个东西不成立，自然不可能作为多项式全体的一致逼近极限。

这事可以修改。设 $C(K,\mathbb C)$ 是复值连续函数全体，$A$ 是其中一个含有 1 的、有分离点性质的（复）代数，如果它还关于共轭运算封闭，则 $\bar A=C(K,\mathbb C)$。

**Preuve（要点）:** 只需证明对任何 $f\in C(K,\mathbb R)$ 有 $f\in\bar A$。事实上 $C(K,\mathbb C)$ 中的一般函数形如 $f+ig$；若 $f,g\in\bar A$（$\bar A$ 是复代数），则 $f+ig\in\bar A$。令 $A_{\mathbb R}=\{f\in A:f\in C(K,\mathbb R)\}$，则 $A_{\mathbb R}$ 是含 1 的（实）代数。声称它分离点:注意若 $f+ig\in A$，则 $f$ 和 $g$ 都属于 $A_{\mathbb R}$（这句用到了 $A$ 关于共轭封闭的假设:因共轭封闭才有取实部封闭，才知道 $f,g\in A$，才知道 $f,g\in A_{\mathbb R}$）。若 $x,y\in K$ 被复值函数 $f+ig$ 分离，则必被 $f$ 或 $g$ 分离，故 $A_{\mathbb R}$ 分离点。由实值版本的 Stone-Weierstrass，$\overline{A_{\mathbb R}}=C(K,\mathbb R)$，从而 $\bar A=C(K,\mathbb C)$。（这里说复代数，是关于复数的数乘封闭的；$A$ 是复代数，$\bar A$ 是复代数不难证明。）
