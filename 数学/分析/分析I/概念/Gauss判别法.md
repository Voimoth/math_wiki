---
title: Gauss判别法
created: 2026-10-03
updated: 2026-10-03
type: concept
tags: [analysis, analysis-I, series, asymptotics, zh]
sources: [分析I 课程笔记(本人手写扫描)]
confidence: medium
---

# Gauss 判别法

当比值 $\frac{a_n}{a_{n+1}}$ 的展开落到 $1+\frac1n+\frac{\beta}{n\log n}$ 这种「临界」形态时，[[d'Alembert比值判别法]]失效，需要用对数因子刻画的 Gauss 判别法。

> [!note] Th (Gauss)
> 设 $a_n>0$ 且
> $$\frac{a_n}{a_{n+1}}=1+\frac1n+\frac{\beta}{n\log n}+o\!\left(\frac{\beta}{n\log n}\right),$$
> 则当 $\beta>1$ 时 $\sum a_n$ 收敛。

## 为什么

阈值的形式由参照级数 $b_n=\frac{1}{n(\log n)^\alpha}$ 决定。它是「Riemann 级数的对数额外一层」：$\sum\frac{1}{n(\log n)^\alpha}$ 收敛 $\iff\alpha>1$。计算它的比值
$$\frac{b_n}{b_{n+1}}=\frac{n+1}{n}\left(\frac{\log(n+1)}{\log n}\right)^\alpha=\left(1+\frac1n\right)\left(1+\frac{\log(1+\frac1n)}{\log n}\right)^\alpha=1+\frac1n+\frac{\alpha}{n\log n}+o\!\left(\frac{1}{n\log n}\right).$$
与待判级数的比值展开比较：系数 $\alpha$ 对应 $\beta$，故收敛当且仅当 $\beta>1$。证明取 $\alpha=\frac{\beta+1}{2}$（介于 $1$ 与 $\beta$ 之间）作中间级数，用比值判别法的比较形式夹出。

## 概念要点

- 阈值不是「$1/n$ 的幂」而是「$1/(n\log n)$」，说明**对数因子可以改变临界判据**。
- 证明是「用比值比较」而非「用通项比较」：$\frac{b_n}{b_{n+1}}\le\frac{a_n}{a_{n+1}}$ 时 $\sum a_n$ 收敛。

> [!warning] 判别法只到对数一层
> 更精细的情形（如 $\frac{1}{n\log n\log\log n}$）需要再往下的对数层，Gauss 判别法不再适用。

## 相关概念

- [[d'Alembert比值判别法]]
- [[正项级数判别法]]
- [[积分判别法]]
