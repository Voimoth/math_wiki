---
title: Urysohn 引理
created: 2026-10-27
updated: 2026-10-27
type: concept
tags: [topology, separation, continuous-functions]
sources: [殷浩《分析 3》点集拓扑讲义 §7.4]
confidence: high
---

# Urysohn 引理 (lemme d'Urysohn)

> [!question] 问题
> $T_4$ 是纯集合论的分割性质。能否把它换成一个**连续函数**？若能，分离性就变成了分析工具：可以把「两个闭集分开」当成「造一个 $0/1$ 台阶函数」来用。

## 陈述

> [!note] 定理（Urysohn）
> $E$ 是 $T_4$ 空间，$A,B\subset E$ 不交闭集，则存在连续 $f:E\to[0,1]$ 使 $f|_A\equiv0$、$f|_B\equiv1$。
>
> 反过来，这样的 $f$ 一旦存在，$f^{-1}((-\infty,\frac13))$ 与 $f^{-1}((\frac23,\infty))$ 就是 $A,B$ 的不交开邻域。故在本讲义的约定（$T_4$ 不含 $T_1$）下
> $$T_4\iff\text{Urysohn 引理成立}.$$

## 证明的两个零件

> [!note] 零件一：夹心引理
> $F$ 闭、$O$ 开、$F\subset O$ $\Rightarrow$ 存在开集 $U$ 使 $F\subset U\subset\overline U\subset O$。
>
> 证明：$F$ 与 $E\setminus O$ 是不交闭集，$T_4$ 给不交开邻域 $V\ni F$、$W\supset E\setminus O$；则 $\overline V\subset E\setminus W\subset O$。

> [!note] 零件二：沿有理数二分
> 把 $[0,1]\cap\mathbb Q$ 排成 $r_0=0,r_1=1,r_2,\dots$，归纳地造开集 $U_r\supset A$ 使
> $$r<s\ \Longrightarrow\ \overline{U_r}\subset U_s,\qquad U_0\supset A,\quad U_1=E\setminus B .$$
> 新数 $r$ 夹在最靠近的两个已处理有理数之间，用它俩作「闭 — 开」对，调用零件一。$\mathbb Q$ 可数且稠密，这保证每步的两个邻居都已存在、且最终填满整条 $[0,1]$。

> [!tip] 函数怎么取
> $f(x)=1$（$x\in B$），否则 $f(x)=\inf\{r\in[0,1]\cap\mathbb Q\mid x\in U_r\}$。它满足
> $$x\in U_r\Rightarrow f(x)\le r,\qquad x\notin\overline{U_r}\Rightarrow f(x)\ge r,$$
> 这两条（及其逆否形式）给出 $f$ 在每个点处的两侧邻域：对 $\rho=f(x)\in(0,1)$、$\varepsilon>0$，$(\overline{U_{\rho-\varepsilon}})^c\cap U_{\rho+\varepsilon}$ 是 $x$ 的开邻域，其上 $|f-\rho|\le\varepsilon$。$\rho=0$ 或 $1$ 时只需一侧。直观上：$f$ 是「$U_r$ 的特征函数沿 $r$ 积分」的连续版本，嵌套性保证了上下界能夹住。

> [!warning] 常见误用
> 1. 只要求 $f|_A=0$、$f|_B=1$ 而忘了 $A,B$ **闭**。开集或不交的任意子集不行：$\mathbb Q$ 与 $\mathbb R\setminus\mathbb Q$ 在 $\mathbb R$ 中稠密交错，没有连续函数能在其上一个取 $0$、一个取 $1$。
> 2. 目标区间不能随便换成离散的两点空间 $\{0,1\}$：那正是「$A,B$ 可被开集分开」本身，等价于 $T_4$；Urysohn 的收获恰恰是用**连通的值域** $[0,1]$ 换取连续性。
> 3. 定理只给存在性；构造依赖有理数的枚举，不给出「具体公式」。实际使用中只需 $f^{-1}$ 的开集，不需要 $f$ 的形式。

## 与 Tietze 的关系

[[Tietze扩张定理]] 把「两点分开」升级为「闭子集上的任意连续函数可延拓」，而由 Tietze 取 $A\cup B$ 上的 $0/1$ 函数就回到 Urysohn。故 $T_4$、Urysohn、Tietze 三者等价；证明只用 $T_4$，不用 $T_1$。

## 相关概念

- [[分离公理]] — $T_4$ 与闭邻域刻画
- [[Tietze扩张定理]]
- [[连续映射]]
- [[紧性]]
