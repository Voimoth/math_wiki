---
title: p 进绝对值（valeur absolue p-adique）
created: 2026-10-03
updated: 2026-10-03
type: concept
tags: [algebre, arithmetique, valuation]
sources: [代数 I 正课手写笔记]
confidence: medium
---

# p 进绝对值（valeur absolue p-adique）

> [!tip] 为什么需要它
> 通常的绝对值把 $\mathbb{Q}$ 完备化成 $\mathbb{R}$；把「被 $p$ 整除得越多就越小」写成绝对值，就得到一族全新的绝对值与度量，其完备化是 $\mathbb{Q}_p$。

> [!note] 定义（définition）
> 对 $r\in\mathbb{Q}$，
> $$|r|_p:=p^{-v_p(r)},\qquad\text{规定 }p^{-\infty}=0,$$
> 于是 $|\cdot|_p:\mathbb{Q}\to\mathbb{R}^*$，称为 $p$ 进绝对值（valeur absolue $p$-adique）。

> [!note] 性质
> 0. $|r|_p\geq 0$，且 $|r|_p=0\iff r=0$；
> 1. 强三角不等式：$|a+b|_p\leq\max(|a|_p,|b|_p)$，且当 $|a|_p\neq|b|_p$ 时取等号；
> 2. $|ab|_p=|a|_p|b|_p$。

> [!info] 与通常绝对值的关系
> 约定 $p=\infty$ 时 $|r|_\infty=|r|$（通常绝对值），此时是普通三角不等式 $|a+b|\leq|a|+|b|$。在分析中，满足上述 0、1、2（指三角不等式而非强三角不等式）的 $|\cdot|:\mathbb{Q}\to\mathbb{R}$ 称为一个范数（norme）/ 绝对值。

> [!note] 定理（théorème）—— Ostrowski
> $\mathbb{Q}$ 上非平凡的范数只有 $|\cdot|_p$，$p\in\mathcal{P}\cup\{\infty\}$。

> [!example] 例子
> $|p|_p=p^{-1}$；且 $\prod_{p\in\mathcal{P}\cup\{\infty\}}|r|_p=1$（$r\in\mathbb{Q}^*$）。

> [!warning] 陷阱
> 强三角不等式强于普通三角不等式，两者不能混用；在 $p$ 进距离下，三角形的三条边中总有两条相等（等腰）。

## 相关概念

- [[p进赋值]]
- [[算术基本定理]]
