---
title: Euclid 环（anneau euclidien）
created: 2026-10-03
updated: 2026-10-03
type: concept
tags: [algebre, anneau-euclidien, division]
sources: [代数 I 习题课手写笔记]
confidence: medium
---

# Euclid 环

为什么需要它：$\mathbb{Z}$ 和 $K[X]$ 都能做带余除法，正是"余数一次比一次小"使得求最大公因数的欧几里得算法得以运行，并推出 Bézout 等式、理想主性等结论。把"带余除法"抽象成公理，就得到 Euclid 环。

> [!note] 定义（définition, anneau euclidien）
> 整环 $R$ 称为 **Euclid 环**，若存在映射 $v:R\setminus\{0\}\to\mathbb{N}$（"范数"），满足
> ① 对任意 $a\in R$、$b\in R\setminus\{0\}$，存在 $q,r\in R$ 使 $a=bq+r$，且 $r=0$ 或 $v(r)<v(b)$；
> ② 对任意 $a,b\in R\setminus\{0\}$，$v(b)\le v(ab)$。

> [!tip] 直觉
> $v$ 把"大小"数值化，条件 ① 说明可以反复做带余除法、余数严格变小，于是欧几里得算法必然终止；条件 ② 保证 $v$ 在乘法下不减小，使整除关系与范数相容。

> [!example] 例子
> - $\mathbb{Z}$：取 $v(n)=|n|$。
> - 域 $K$ 上的多项式环 $K[X]$：取 $v(P)=\deg P$。
> - 高斯整环 $\mathbb{Z}[i]$：取 $v(a+bi)=a^2+b^2$。

> [!warning] 陷阱
> - Euclid 比 PID 更强：Euclid 整环一定是 PID，但存在是 PID 而非 Euclid 的整环（如 $\mathbb{Z}\bigl[\tfrac{1+\sqrt{-19}}{2}\bigr]$）。
> - 范数 $v$ 不要求唯一，也不要求是"绝对值"；不同范数可能都满足条件。
> - 定义的前提是整环，非整环即使有带余除法也不算 Euclid 环。

## 相关概念

[[主理想整环]]、[[Euclide除法]]、[[整除]]、[[最大公因子]]、[[高斯整环]]

## 相关笔记

- [[20-素元、不可约元与准素分解|代数I · 20-素元、不可约元与准素分解]]
