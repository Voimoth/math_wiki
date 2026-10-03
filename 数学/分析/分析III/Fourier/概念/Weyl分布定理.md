---
title: Weyl分布定理
created: 2026-10-03
updated: 2026-10-03
type: concept
tags: [fourier-series, equidistribution, number-theory, 分析III]
sources: [殷浩《分析 3》Fourier 讲义]
confidence: high
---

# Weyl 分布定理（模 1 等分布）

> [!question] 本页要回答什么？
> $\langle n\gamma\rangle$（$\gamma$ 无理）在 $[0,1)$ 中稠密；它是否还“均匀”地铺满区间？怎样定义并证明“均匀”？

## 定义与定理

> [!note] 定义（等分布）
> $[0,1)$ 中的数列 $\{\xi_n\}$ 称为**等分布的**，如果对任何 $(a,b)\subset[0,1)$，
> $$\lim_{N\to\infty}\frac{\#\{1\le n\le N\mid\xi_n\in(a,b)\}}{N}=b-a.$$
> 即落入区间的经验频率趋于区间长度，故称“等分布”。

> [!note] 定理（Weyl）
> 设 $\gamma$ 是无理数，则数列 $x_n=\langle n\gamma\rangle$ 在 $[0,1)$ 中等分布。

## 证明要点

1. 用例示函数化归：取 $f$ 为 $\chi_{[a,b]}$ 的周期一延拓，则计数恰为 $\sum_{n\le N}f(\xi_n)$，问题变成
$$\lim_{N\to\infty}\frac1N\sum_{n\le N}f(\xi_n)=\int_0^1 f(x)\,dx.$$
2. 上式的两边都**保持序**、且对**一致逼近**稳定（用 $f\le g$ 与 $|f-g|\le\varepsilon$ 传递）。
3. 先对三角函数 $f(x)=e^{2\pi kix}$ 用**等比级数**直接算：$\gamma$ 无理保证公比不为 $1$，极限为 $0=\int_0^1 e^{2\pi kix}dx$。
4. 由此对三角多项式成立，再对周期 1 的连续函数成立；最后用连续函数上下夹逼 $\chi_{[a,b]}$（配合 $L^1$ 逼近与单调性），令 $\varepsilon\to0$。

> [!tip] 判据的内核
> Weyl 判据：数列等分布 $\iff$ 对每个非零整数 $k$，$\frac1N\sum_{n\le N}e^{2\pi ik\xi_n}\to0$。
> 这本质上是一个**测度的 Fourier 唯一性命题**——非零频率上 Fourier 系数全为零的测度只能是均匀（归一化 Lebesgue）测度；实现它靠三角多项式的稠密性。

> [!info] 历史注记
> - 背景是 Kronecker 定理：$\gamma$ 无理时 $\langle n\gamma\rangle$ 在 $[0,1]$ 中稠密。
> - Weyl（1916）把“模 1 等分布”抽象为一般数列的性质（使“分布”本身成为研究对象），给出上述判据，并发明“差分法”证明**多项式数列**的等分布。$\langle n\gamma\rangle$ 在他文中只是主定理的“直接推论”。
> - 常见误归属：“三间隙定理”是 Steinhaus 的猜想，证明属 Sós、Świerczkowski 等（1950 年代末），与 Weyl 无关。
> - 后续：偏差（discrepancy）的估计经 Erdős–Turán、Koksma–Hlawka 不等式成为拟 Monte Carlo 方法的基础，是 Weyl 方法的直接后代。

## 相关概念

- [[傅里叶系数唯一性]] — 与“测度的 Fourier 唯一性”同源
- [[傅里叶级数]] — 三角多项式的稠密性与一致逼近
- [[Parseval恒等式]] — 正交系上的均方工具
