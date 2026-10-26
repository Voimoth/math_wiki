---
title: Tietze 扩张定理
created: 2026-10-27
updated: 2026-10-27
type: concept
tags: [topology, separation, extension]
sources: [殷浩《分析 3》点集拓扑讲义 §7.5]
confidence: high
---

# Tietze 扩张定理 (théorème d'extension de Tietze)

> [!question] 问题
> 闭子集上的连续函数，能不能整体延拓到空间上？对 $\mathbb R$ 值函数在 $T_4$ 空间中答案是肯定的，而且这个定理把「分离性」变成了分析里最常用的一种操作：先在小集合上构造函数，再扩张。

## 陈述与证明

> [!note] 定理（Tietze）
> $E$ 是 $T_4$ 的，$A\subset E$ 闭，$f:A\to\mathbb R$ 连续。则存在连续 $\tilde f:E\to\mathbb R$ 使 $\tilde f|_A=f$。

**证明骨架.**

1. **有界情形**：设 $f(A)\subset[-1,1]$。令 $F_\pm=f^{-1}([\pm\frac13,1])$，它们在 $E$ 中闭且不交。Urysohn 给 $g_1:E\to[-\frac13,\frac13]$，在 $F_-$ 上取 $-\frac13$、$F_+$ 上取 $\frac13$。则 $\sup_A|f-g_1|\le\frac23$（$F_-\cup F_+$ 上直接，其余点上两者都在 $[-\frac13,\frac13]$ 内）。
2. **迭代**：对 $f-g_1$ 同法得 $g_2$，$\sup_A|f-g_1-g_2|\le(\frac23)^2$，依此类推。$\sum g_k$ 在 $E$ 上一致收敛（$\sum(\frac13)(\frac23)^{k-1}<1$），极限连续，且在 $A$ 上等于 $f$。
3. **无界情形**：用 $\varphi(x)=\frac2\pi\arctan x$ 把 $f$ 压进 $(-1,1)$，扩张后取 $\tan\frac\pi2(\cdot)$。

> [!note] 与 Urysohn 等价
> 取 $A\cup B$（闭）上的函数 $f|_A\equiv1$、$f|_B\equiv0$，Tietze 的扩张就是 Urysohn 引理的函数。故三者等价：$T_4\iff$ Urysohn $\iff$ Tietze。证明没有用 $T_1$；有的文献把 $T_1$ 写进 normal 的定义，读时注意。

> [!note] 推论：紧性的「有界连续函数」刻画
> 度量空间 $X$ 紧 $\iff$ $X$ 上每个连续实值函数有界。
>
> 证明是 Tietze 的漂亮应用：$X$ 不紧 $\Rightarrow$ 存在无收敛子列的点列 $(x_n)$，各项可取互异；$S=\{x_n\}$ 无聚点，故闭且离散，$g(x_n)=n$ 连续；Tietze 扩张成连续 $\tilde g$，无界，矛盾。

> [!warning] 「有界连续函数」刻画不了紧：pseudocompact 空间
> $X=\mathbb N$ 配拓扑 $\{O\mid 0\in O\}\cup\{\varnothing\}$：开覆盖 $\{\{0,n\}\}$ 无有限子覆盖，不紧；但任何连续 $f:X\to\mathbb R$ 满足 $f(n)=f(0)$，故有界。这类空间叫 pseudocompact。度量空间上两者才重合。

## 目标空间不能随便换

$\mathbb R^n$ 值的情形按坐标逐条用。一般目标空间会失败，且失败是拓扑的：$X=D^2$、$A=\partial D^2=Y$，恒同映射 $A\to Y$ 没有连续扩张 $D^2\to\partial D^2$。等价的说法是圆盘到边界没有收缩（rétraction），障碍由基本群（讲义第 14 章，尚未讲授）给出：$\pi_1(D^2)=0$ 而 $\pi_1(S^1)=\mathbb Z$，收缩会诱导分裂的单射 $\pi_1(S^1)\to\pi_1(D^2)$。这也是 Brouwer 不动点定理的标准入口。

## 相关概念

- [[Urysohn引理]] — 两点版本，与本题等价
- [[分离公理]] — $T_4$ 的地位
- [[紧性]]
- [[连续映射]]
