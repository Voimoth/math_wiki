---
title: Schmidt正交化（Procédé de Schmidt）
created: 2026-10-03
updated: 2026-10-03
type: concept
tags: [algebre, schmidt, gram-schmidt, orthonormalisation]
sources: [代数 II 正课手写笔记]
confidence: medium
---

# Schmidt正交化 (Procédé de Schmidt / Gram–Schmidt)

把任意自由族改造成「张成同样一族子空间」的规范正交族。它是构造规范正交基、验证正交基存在性的算法引擎。

> [!tip] 为什么需要它
> 规范正交基好，但很少能直接看出。Gram–Schmidt 给出一条通用路径：从一个方便的基出发，逐个「减去投影并单位化」，就得到规范正交基；同时也证明欧氏空间必有规范正交基、任意规范正交族可扩充。

> [!note] 定理
> $E,(\cdot|\cdot)$ 为预 Hilbert 空间，$(e_1,\dots,e_n)$ 是自由族。则存在规范正交族 $(f_1,\dots,f_n)$ 使
> $$\forall p\in[\![1,n]\!],\qquad \operatorname{Vect}(e_1,\dots,e_p)=\operatorname{Vect}(f_1,\dots,f_p).$$
> 即逐段保持张成子空间不变。

> [!info] 递推构造
> $f_1=\dfrac{e_1}{\|e_1\|}$；设已得 $(f_1,\dots,f_p)$，令
> $$g_{p+1}=e_{p+1}-\sum_{i=1}^p (e_{p+1}|f_i)f_i,\qquad f_{p+1}=\frac{g_{p+1}}{\|g_{p+1}\|}.$$
> 其中 $g_{p+1}=e_{p+1}-\pi(e_{p+1})$，$\pi$ 是到 $\operatorname{Vect}(f_1,\dots,f_p)$ 的正交投影。由 $\|g_{p+1}\|^2=\|e_{p+1}\|^2-\sum_{i=1}^p (e_{p+1}|f_i)^2$
> 也可看出：$g_{p+1}\neq 0$ 正是因为 $e_{p+1}\notin\operatorname{Vect}(e_1,\dots,e_p)$（自由性保证）。

## 直觉

> [!tip] 想法
> 第 $p+1$ 步：拿新向量减去它在已有正交系上的投影，剩下的部分与前面全正交——这就是「垂直分量」。再除以长度即得规范向量。因为每步只做投影与缩放，张成子空间逐段不变。

## 例子

> [!example] 例
> 在 $(\mathbb{R}[X],\int_{-1}^1 fg)$ 中从 $(1,X,X^2,\dots)$ 出发正交化，得到首一/标准 Legendre 多项式族（见 [[Legendre多项式]]）。

## 陷阱

> [!warning] 易错
> - 必须从一个自由族出发，否则某步 $g_{p+1}=0$ 无法单位化（这正是对应向量落进前面张成空间）。
> - 数值计算中 $e_{p+1}$ 若几乎落在前张成空间里，$g_{p+1}$ 很小会导致不稳；理论上是精确的，工程上要用修正 Gram–Schmidt。
> - 结果依赖顺序：换一个基的排列会得到不同的规范正交族（规范正交基不唯一）。

## 相关概念
- [[正交族]]
- [[正交投影]]
- [[基]]
- [[Legendre多项式]]
- [[正交函数系]]
- [[L²理论与Hilbert空间]]

## 相关笔记

- [[17-正交族与Schmidt正交化|代数II · 17-正交族与Schmidt正交化]]
