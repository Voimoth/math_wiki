---
title: Euclide空间（Espace euclidien）
created: 2026-10-03
updated: 2026-10-03
type: concept
tags: [algebre, espace-euclidien, prehilbertien, norme]
sources: [代数 II 正课手写笔记]
confidence: medium
---

# Euclide空间 (Espace euclidien)

「有限维的实内积空间」——一切长度、角度、投影、正交展开都发生在这里。它是 $\mathbb{R}^n$ 的标准数量积的抽象版本，也是本章大多数定理（正交基、正交投影、Bessel）的舞台。

> [!tip] 为什么需要它
> 预 Hilbert 空间（pré-Hilbertien）允许无限维，许多命题（Bessel、完全序列）在那里才显出差别；而已有规范正交基、正交投影等「构造性」结论时，有限维（欧氏空间）是最干净的设定。

> [!note] 定义
> 带一个数量积 $(\cdot|\cdot)$ 的 $\mathbb{R}$-向量空间 $E$ 称为实预 Hilbert 空间（pré-Hilbertien）。若 $\dim E=n<+\infty$，则称为欧氏空间（espace euclidien）。
>
> 其上定义
> $$\|x\|=\sqrt{(x|x)}\quad\text{（欧氏范数）},\qquad d(x,y)=\|x-y\|\quad\text{（欧氏距离）}.$$

> [!info] 基本事实
> - 任何 $n$ 维欧氏空间都同构于 $(\mathbb{R}^n,(\cdot|\cdot))$：在规范正交基下 $x=\sum_i (e_i|x)e_i$、$(x|y)=\sum_i x_iy_i$。
> - 欧氏空间必有规范正交基，且任何规范正交族都能扩充为规范正交基。

## 直觉

> [!tip] 想法
> 欧氏空间 = 向量空间 + 长度 + 角度，且维数有限。有限维让「基的存在性」可用 Zorn 引理之外的方式得到，并保证正交投影是真正的线性映射 $\pi:E\to F$ 而不是只在稠密子空间上定义。

## 例子

> [!example] 例
> - $(\mathbb{R}^n,\ \sum x_iy_i)$，典则基就是规范正交基。
> - 有限维函数空间如多项式空间配 $\int_{-1}^1 fg$，即正交多项式的活动场所。

## 陷阱

> [!warning] 易错
> - 预 Hilbert 与欧氏只差「有限维」，但正是这一点决定了：是否存在规范正交基、投影是否有定义、级数 $\sum(e_n|x)e_n$ 是否收敛到 $x$。
> - 「距离」与「范数」都由数量积导出；但反过来并非每个范数都来自数量积（见 [[极化恒等式]] 与平行四边形等式）。

## 相关概念
- [[数量积]]
- [[正交投影]]
- [[Bessel不等式]]
- [[完全序列]]
