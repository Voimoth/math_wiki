---
title: Bessel不等式（Inégalité de Bessel）
created: 2026-10-03
updated: 2026-10-03
type: concept
tags: [algebre, bessel, inegalite, serie]
sources: [代数 II 正课手写笔记]
confidence: medium
---

# Bessel不等式 (Inégalité de Bessel)

$\sum_i (e_i|x)^2\le\|x\|^2$：规范正交族下，各项「Fourier 系数」的平方和不超过向量长度的平方。它把正交投影的距离公式推广到任意（甚至无限）规范正交族。

> [!tip] 为什么需要它
> 它是 Parseval 等式（$\sum=\|x\|^2$）的「一半」，也是判断级数 $\sum(e_n|x)^2$ 收敛的依据；当等号成立时意味着 $x$ 被正交族「完整表示」，这正是完全序列的判据。

> [!note] 推论
> $E$ 为预 Hilbert 空间，$(e_1,\dots,e_n)$ 规范正交，则
> $$\forall x\in E,\qquad \sum_{i=1}^n (e_i|x)^2\le\|x\|^2.$$
> 对规范正交族 $(e_n)_{n\in\mathbb{N}}$，级数 $\sum_{n\ge0}(e_n|x)^2$ 收敛，且其和 $\le\|x\|^2$。

> [!info] 与距离公式的关系
> 当 $(e_1,\dots,e_n)$ 张成子空间 $F$ 时，Bessel 不等式正是 $d(x,F)^2=\|x\|^2-\sum_{i=1}^n (e_i|x)^2\ge 0$；等号 $\iff x\in F$。

## 直觉

> [!tip] 想法
> 把 $x$ 拆成「在 $e_i$ 方向上的分量」与「正交余项」，勾股定理给出 $\|x\|^2=\sum(e_i|x)^2+\|余项\|^2$。余项非负即得不等式；余项为零就是 Parseval 等号。

## 例子

> [!example] 例
> 在 $E=\mathcal{C}^0([0,2\pi],\mathbb{R})$、$(f|g)=\int_0^{2\pi}fg$ 中取 $F=\operatorname{Vect}(\cos x,\sin x)$，则
> $$\inf_{(a,b)}\int_0^{2\pi}(x-a\cos x-b\sin x)^2dx=d(\mathrm{Id},F)^2=\|\mathrm{Id}\|^2-\sum_{i}(e_i|\mathrm{Id})^2,$$
> 其中 $(e_i)$ 是 $F$ 的规范正交基。Bessel 不等式保证这个下确界非负。

## 陷阱

> [!warning] 易错
>
> - 不等号方向：$\sum(e_i|x)^2\le\|x\|^2$，不能反。
> - 只有当规范正交族是**完全序列**时等号才对所有 $x$ 成立；一般规范正交族的余项（即 $x$ 到 $\overline{\operatorname{Vect}}$ 的投影）可以非零。

## 相关概念
- [[完全序列]]
- [[正交投影]]
- [[Cauchy-Schwarz不等式]]
- [[正交族]]
- [[Parseval恒等式]]
- [[正交函数系]]

## 相关笔记

- [[18-正交投影与正交多项式|代数II · 18-正交投影与正交多项式]]
