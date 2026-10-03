---
title: Mertens定理与素数倒数和
created: 2026-10-03
updated: 2026-10-03
type: concept
tags: [analysis, analysis-I, number-theory, asymptotics, zh]
sources: [分析I 课程笔记(本人手写扫描)]
confidence: medium
---

# Mertens 定理与素数倒数和

## 定义

> [!note] Th (Mertens)
> 存在常数 $M$，使 $x\to+\infty$ 时
> $$\sum_{p\le x}\frac1p=\log\log x+M+O\!\left(\frac1{\log x}\right).$$

> [!info] 同族的另一条估计
> $$\sum_{p\le N}\frac{\log p}{p}=\log N+O(1).$$
> 记 $R(x)=\sum_{p\le x}\frac{\log p}{p}-\log x$，则 $R(x)=O(1)$。

## 为什么

素数倒数和之所以只到 $\log\log x$，是因为"素数在 $N$ 以内约有 $N/\log N$ 个"这一分布太稀疏：$\sum_{p\le x}1/p$ 与 $\sum_{n\le x}1/(n\log n)$ 同量级，而后者正是 $\log\log x$。这条定理把"$\sum 1/p$ 发散"从定性（无穷）升级为定量（对数对数）。

## 证明要点

1. **$\log N!$ 的两副面孔**：由 $v_p(N!)=\sum_{k\ge1}\lfloor N/p^k\rfloor$ 得
$$\log(N!)=\sum_{p\le N}\log p\left(\left\lfloor\frac Np\right\rfloor+\left\lfloor\frac N{p^2}\right\rfloor+\dots\right)=N\sum_{p\le N}\frac{\log p}{p}+O(N).$$
其中用 $\lfloor N/p\rfloor=N/p-\{N/p\}$ 分离主项，误差用 $\le\log N\cdot\pi(N)=O(N)$ 与 $\sum\frac{\log p}{p^2}\cdot N=O(N)$ 控制。
2. 另一方面由 Stirling 公式 $\log(N!)=\log\sqrt{2\pi N}+N\log\frac Ne+o(N)$，与上式比较得
$$\sum_{p\le N}\frac{\log p}{p}=\log N+O(1).$$
3. 把 $\sum_{p\le x}1/p$ 写成对 $R(t)+\log t$ 的 **Stieltjes 积分**，用 [[Abel求和公式]] 分部积分：
$$\sum_{p\le x}\frac1p=\int_{1.5}^x\frac1{\log t}\,d(R(t)+\log t)
=\left.\frac{R(t)}{\log t}\right|_{1.5}^x+\log\log x+O\!\left(\frac1{\log x}\right)=\log\log x+M+O\!\left(\frac1{\log x}\right).$$

## 概念性陷阱

- **同名不同实**：此处的 Mertens 定理属初等解析数论，与 [[Mertens定理]]（Cauchy 乘积那条，属级数理论）**无关**，仅同姓同名。
- $\sum 1/p$ 发散但增长极慢（$\log\log x$）；不要与 $\sum 1/n^p\,(p>1)$ 收敛混淆——素数集合"足够密"到让 $1/p$ 之和发散。
- 常数 $M$ 由积分下端 $1.5$ 等选取决定，是"显现常数"，不是定理给出的可显式简单表达的量。

## 相关概念

- [[素数定理（弱形式）]] — 同一套初等工具的另一结论
- [[Stirling公式]] — 阶乘估计
- [[Abel求和公式]] — 把和对素数求和化的分部积分
- [[Mertens定理]] — 同名的级数乘积定理
