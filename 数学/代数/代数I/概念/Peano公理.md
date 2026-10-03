---
title: Peano 公理（Axiomes de Peano）
created: 2026-10-03
updated: 2026-10-03
type: concept
tags: [algebre, arithmetique, axiomes]
sources: [代数 I 正课手写笔记]
confidence: medium
---

# Peano 公理（Axiomes de Peano）

> [!question] 为什么需要这个概念？
> 「自然数」我们从小就用，但它究竟是什么？Peano 公理把 $0$、后继与归纳法写成几条公理，使 $\mathbb{N}$ 成为一个可以严格推理的对象，也是逻辑学中对 $\mathbb{N}$ 的公理化。

## 定义

> [!note] 定义（Axiomes de Peano）
> ① $0$ 是自然数；
> ② 每个自然数 $a$ 都有后继 $S(a)$，也是自然数；
> ③ 任何自然数 $a,b$，$a=b\iff S(a)=S(b)$；
> ④ $0$ 不是任何自然数的后继；
> ⑤ 任何变量在自然数中的叙述 $P(a)$，若 $P(0)$ 真，且 $P(a)\Rightarrow P(S(a))$，则对任何 $n$，$P(n)$ 真。（归纳法公理）

## 直觉与动机

- ①、② 保证 $\mathbb{N}$ 非空且「总有下一步」；③ 保证后继不重复，④ 保证没有回头路、$0$ 之外的元素都有前驱。
- ⑤ 是归纳法，用来证明「对全体自然数成立」的命题，也是全部关于 $\mathbb{N}$ 的定理的工具。

## 运算的递归定义

在 Peano 公理下，加法、乘法由递归给出：

$$a+0:=a,\quad a+S(b):=S(a+b)\qquad(\forall a,b\in\mathbb{N});$$

$$a\times 0:=0,\quad a\times S(b):=a+a\times b\qquad(\forall a,b\in\mathbb{N}).$$

序则定义为

$$a\leqslant b\overset{\text{def}}{\iff}\exists c\in\mathbb{N},\ a+c=b.$$

> [!info] 注
> 通过公理 ⑤ 可以证明这些运算具有所要求的全部性质（交换律、结合律、分配律等），此处从略。

## 例子

> [!example] 例
> 由公理 ⑤ 立得归纳法原理：若 $A\subseteq\mathbb{N}$ 含 $0$ 且对后继封闭，则 $A=\mathbb{N}$。

## 陷阱

> [!warning] 易错点
> - ③ 只要求后继 $S$ 是单射（$S(a)=S(b)\Rightarrow a=b$），不要求满射；④ 说明 $0$ 不在 $S$ 的像里。
> - 真正承担「证明」职能的是公理 ⑤；少了它，可以构造出「比标准自然数更长」的模型。

## 相关概念

- [[数学归纳法]]
- [[良序]]
- [[超限归纳法]]
- [[实数公理化]] — 实数公理化以 Peano 公理的 N 为基础（分析 I）
- [[Cauchy列构造实数]] — 从 N 构造实数的途径（分析 I）

## 相关笔记

- [[10-自然数与归纳法|代数I · 10-自然数与归纳法]]
