---
title: Pascal关系（relation de Pascal）
created: 2026-10-03
updated: 2026-10-03
type: concept
tags: [algebre, combinatoire, identite]
sources: [代数 I 正课手写笔记]
confidence: medium
---

# Pascal 关系（relation de Pascal）

为什么需要它：二项式系数不必每次用阶乘硬算。相邻两行之间存在一个加法递推，把「算一个数」变成「上一行两个数相加」。

> [!note] 定义（命题）
> 对 $n \geq 1,\ p \geq 1$：
> $$\binom{n}{p} = \binom{n-1}{p} + \binom{n-1}{p-1}$$

> [!tip] 直觉：组合证明
> 取定 $n$ 个对象中的某一个。从 $n$ 个里选 $p$ 个的方案分成两类：不含这个对象的有 $\binom{n-1}{p}$ 种，含它的有 $\binom{n-1}{p-1}$ 种。两类不重不漏，合并即得递推。

> [!example] 例子：Pascal 三角形
> 每行两端为 $1$，中间每个数等于它「肩上」两数之和：
> ```
> 1
> 1 1
> 1 2 1
> 1 3 3 1
> 1 4 6 4 1
> ```
> 第 $n$ 行（从 $n=0$ 起）即 $\binom{n}{p}$，$p=0,1,\dots,n$。

> [!warning] 陷阱
> 递推要求 $n \geq 1$ 且 $p \geq 1$；在 $p = 0$ 或 $n = 0$ 处用到它会把越界的项 $\binom{n-1}{-1}$ 引入，需靠边界值 $\binom{n}{0} = 1$ 单独处理。

## 相关概念

- [[二项式系数]] — 被递推生成的对象
- [[二项式定理]] — 使用这些系数的展开式

## 相关笔记

- [[13-二项式系数|代数I · 13-二项式系数]]
