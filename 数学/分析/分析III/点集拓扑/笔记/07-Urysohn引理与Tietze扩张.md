---
title: 点集拓扑 · 7 Urysohn 引理与 Tietze 扩张
created: 2026-10-27
updated: 2026-10-27
type: notes
tags: [topology, notes, 分析III, 点集拓扑]
sources: [殷浩《分析 3》点集拓扑讲义 §7.4–7.5，2026-10-21 版]
confidence: high
---

# 7. Urysohn 引理与 Tietze 扩张定理

$T_4$ 说的是「闭集能被开集分开」，全是集合论语言。这一节把它翻译成**函数**：两个不交闭集能被一个连续函数取 $0$ 与 $1$ 分开；更进一步，闭子集上的连续函数能延拓到全空间。

## 7.1 Urysohn 引理

> [!note] Theorem 7.11（Urysohn）
> 设 $E$ 是 $T_4$ 的，$A,B\subset E$ 是不交闭集。则存在连续 $f:E\to[0,1]$ 使 $f|_A\equiv0$、$f|_B\equiv1$。

**证明.** 关键是一个反复要用的夹心操作。

**Claim.** 若 $F\subset E$ 闭、$O\subset E$ 开且 $F\subset O$，则存在开集 $U$ 使 $F\subset U\subset\overline U\subset O$。

Claim 的证明：$F$ 与 $E\setminus O$ 是不交闭集，$T_4$ 给不交开邻域 $V,W$，$F\subset V$。由 $V\subset E\setminus W$ 与 $E\setminus W$ 闭得 $\overline V\subset E\setminus W\subset O$，取 $U=V$。

把 $[0,1]$ 中的有理数排成一列 $r_0=0,r_1=1,r_2,\dots$（要求 $0,1$ 最先出现、每个有理数恰好出现一次）。取 $U_1=E\setminus B$（含 $A$ 的开集），由 Claim 得开集 $U_0$ 使
$$A\subset U_0\subset\overline{U_0}\subset U_1=E\setminus B.$$
归纳地，对每个 $r\in[0,1]\cap\mathbb Q$ 定义开集 $U_r\supset A$，使
$$r<s\ \Longrightarrow\ \overline{U_r}\subset U_s .$$
新加入的 $r_{k+1}$ 必夹在已定义的两个有理数 $r_i<r_{k+1}<r_j$ 之间（取最靠近的），对闭集 $\overline{U_{r_i}}$ 与开集 $U_{r_j}$ 用 Claim 得 $U_{r_{k+1}}$。

最后定义
$$f(x)=\begin{cases}1,&x\in B,\\[2pt]\inf\{r\in[0,1]\cap\mathbb Q\mid x\in U_r\},&x\notin B.\end{cases}$$
$f|_A\equiv0$（一切 $U_r\supset A$）、$f|_B\equiv1$（$B\not\subset U_1$ 且 $U_r\subset U_1$）。连续性来自四条等价形式
$$x\in U_r\Rightarrow f(x)\le r,\qquad x\notin\overline{U_r}\Rightarrow f(x)\ge r,$$
及其逆否形式：对 $f(x)=\rho\in(0,1)$ 与 $\varepsilon>0$，$\bigl(\overline{U_{\rho-\varepsilon}}\bigr)^c$ 与 $U_{\rho+\varepsilon}$ 的交是 $x$ 的开邻域，其上 $f$ 的取值落在 $[\rho-\varepsilon,\rho+\varepsilon]$；$\rho=0,1$ 时只用一侧。$\square$

> [!note] 与 $T_4$ 等价
> 反过来，若任意不交闭集都有这样的 $f$，则
> $$U=f^{-1}\bigl((-\infty,\tfrac13)\bigr),\qquad W=f^{-1}\bigl((\tfrac23,\infty)\bigr)$$
> 是 $A,B$ 的不交开邻域，即 $T_4$。所以 **$T_4$ $\iff$ Urysohn 引理成立**，不需要 $T_1$。

## 7.2 Tietze 扩张定理

> [!note] Theorem 7.12（Tietze）
> 设 $E$ 是 $T_4$ 的，$A\subset E$ 闭，$f:A\to\mathbb R$ 连续，则存在连续 $\tilde f:E\to\mathbb R$ 使 $\tilde f|_A=f$。

**证明梗概.** 先设 $f(A)\subset[-1,1]$。令 $F_1=f^{-1}([-1,-\frac13])$、$F_2=f^{-1}([\frac13,1])$，它们在 $A$ 中闭、$A$ 闭故在 $E$ 中闭且不交。Urysohn 给连续 $g_1:E\to[-\frac13,\frac13]$ 使 $g_1|_{F_1}=-\frac13$、$g_1|_{F_2}=\frac13$。逐段比较得 $\sup_A|f-g_1|\le\frac23$（$F_1\cup F_2$ 上由取值，其余点上 $f$ 与 $g_1$ 都落在 $[-\frac13,\frac13]$）。对 $f-g_1$ 重复，得 $g_k$ 使 $\sup_A|f-\sum_{j\le k}g_j|\le(\frac23)^k$。于是 $g=\sum_k g_k$ 在 $E$ 上一致收敛、连续，且 $g|_A=f$。

一般 $f$ 无界时，令 $\varphi(x)=\frac2\pi\arctan x$，对 $\varphi\circ f$ 用上一步得 $\tilde h$，再取 $\tan\frac\pi2\tilde h$（需 $\tilde h$ 取值在 $(-1,1)$ 内，由构造可保证）。

> [!note] Remark 7.13（Tietze 推 Urysohn）
> 取 $A\cup B$（闭）上的连续函数 $f|_A\equiv1$、$f|_B\equiv0$，Tietze 的扩张即是 Urysohn 的函数。故在本讲义的约定下 **$T_4$、Urysohn 引理、Tietze 定理三者等价**。

> [!note] Proposition 7.14（紧性的函数刻画）
> 度量空间 $X$ 紧 $\iff$ $X$ 上每个连续实值函数有界。

**证明.** ($\Rightarrow$) $f(X)$ 是 $\mathbb R$ 中的紧集，有界。($\Leftarrow$) 若 $X$ 不紧，由度量空间中紧 $\iff$ 序列紧，存在无收敛子列的点列 $(x_n)$；可取各项互异。令 $S=\{x_n\}$。$S$ 没有聚点：若 $x$ 是聚点，则每个 $B(x,\frac1k)\cap(S\setminus\{x\})$ 无限，取 $x_{n_k}\in B(x,\frac1k)$ 得收敛子列，矛盾。故 $S$ 闭且是离散子空间，任意函数 $g:S\to\mathbb R$ 连续；取 $g(x_n)=n$，由 Tietze（度量空间是 $T_4$）扩张成连续 $\tilde g:X\to\mathbb R$，无界，矛盾。

> [!warning] 有界连续函数不能刻画紧性：pseudocompact
> $X=\mathbb N$ 配拓扑「$O$ 开 $\iff$ $0\in O$ 或 $O=\varnothing$」：开覆盖 $\{\{0,n\}\}_{n\ge1}$ 没有有限子覆盖，故不紧。但任何连续 $f:X\to\mathbb R$ 满足 $f(n)=f(0)$（$\{0\}$ 是 $0$ 的唯一小邻域限制，反证用 $f^{-1}$ 开），故 $f$ 常值、有界。这类空间称为 **pseudocompact**。于是 Prop 7.14 的「度量」条件不可去。

> [!tip] 到一般目标空间的扩张会失败
> $\mathbb R^n$ 值的情形直接由坐标得到。但「任意目标空间」不行，且障碍是本质的：$X=D^2$、$A=\partial D^2=Y$，恒同映射 $A\to Y$ 不能连续延拓到 $D^2$——这正是基本群（讲义第 14 章，尚未讲授）与不动点定理的入口，未来课程会回到这里。

---

## 相关概念

- [[Urysohn引理]] — 概念页
- [[Tietze扩张定理]] — 概念页
- [[分离公理]] — $T_4$ 与等价刻画
- [[紧性]] — 序列紧与有界连续函数
- [[连续映射]]
