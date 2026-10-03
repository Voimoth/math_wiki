---
title: p 进赋值（valuation p-adique）
created: 2026-10-03
updated: 2026-10-03
type: concept
tags: [algebre, arithmetique, valuation]
sources: [代数 I 正课手写笔记]
confidence: medium
---

# p 进赋值（valuation p-adique）

> [!tip] 为什么需要它
> 唯一分解把整数写成素数的幂之积。要比较两个整数「被 $p$ 整除到多少次」，只需一个数——于是把每个素数方向上的指数单独抽出来，得到 $v_p$。

> [!note] 定义（définition）
> $n\in\mathbb{Z}^*$，$p\in\mathcal{P}$。称最大的 $k\in\mathbb{N}$ 使 $p^k\mid n$ 为 $n$ 的 $p$ 进赋值，即
> $$p^k\mid n,\quad p^{k+1}\nmid n,\qquad k=v_p(n).$$
> 于是 $v_p:\mathbb{Z}^*\to\mathbb{N}$；再约定 $v_p(0)=+\infty$，得 $v_p:\mathbb{Z}\to\mathbb{N}\cup\{+\infty\}$。

> [!note] 性质
> - $v_p(ab)=v_p(a)+v_p(b)$（赋值把乘法变成加法）；
> - $v_p(a+b)\geq\min(v_p(a),v_p(b))$，且当 $v_p(a)\neq v_p(b)$ 时取等号。

> [!note] 用赋值刻画整除与 pgcd/ppcm
> $(a,b)\in(\mathbb{N}^*)^2$：
> - $b\mid a\iff\forall p\in\mathcal{P},\ v_p(b)\leq v_p(a)$；
> - $v_p(a\land b)=\min(v_p(a),v_p(b))$，$v_p(a\lor b)=\max(v_p(a),v_p(b))$。

> [!example] 例子
> $v_2(24)=3$，$v_2(40)=3$，而 $v_2(24+40)=v_2(64)=6>3$；又 $v_3(24)=1$、$v_3(9)=2$，故 $v_3(33)=1=\min(1,2)$。

> [!warning] 陷阱
> $v_p(0)=+\infty$ 是一个约定；另外 $v_p(a+b)\geq\min(v_p(a),v_p(b))$ 不总是等式（当 $v_p(a)=v_p(b)$ 时可能严格大于）。

## 相关概念

- [[算术基本定理]]
- [[素数]]
- [[p进绝对值]]

## 相关笔记

- [[17-最小公倍数、素数唯一分解与p进赋值|代数I · 17-最小公倍数、素数唯一分解与p进赋值]]
- [[18-p进赋值、同余与代数结构|代数I · 18-p进赋值、同余与代数结构]]
