---
title: Dirac 符号与对偶空间
created: 2026-10-21
updated: 2026-10-21
type: concept
tags: [mechanics, linear-algebra, notation, dual-space]
confidence: high
---

# Dirac 符号与对偶空间（notation de Dirac, bra-ket）

> [!question] 问题
> 同一个矢量为什么要写成 $|x\rangle$ 与 $\langle x|$ 两副样子？"左矢"是不是只是把列向量转成行向量的记号游戏？

## 右矢、左矢与度规

欧氏空间 $E^n$ 的矢量记为**右矢**（ket）$|x\rangle$。选定原点后 $E^n\cong\mathbb R^n$，但算符、内积的陈述要与坐标选择无关，所以先不写分量。

给定内积就自动有一部机器，把矢量变成线性泛函（**度规**，讲义记 $g$）：
$$g:V\longrightarrow V^*,\qquad |x\rangle\longmapsto\langle x|:=g(|x\rangle),\qquad \langle x|y\rangle:=(x,y).$$
于是**左矢**（bra）$\langle x|$ 不是"另一个矢量"，而是 $|x\rangle$ 在对偶空间 $V^*$ 里的像：它作用于右矢上给出内积。$g$ 是线性同构（非退化内积），故每个左矢都来自唯一一个右矢——这一点在欧氏空间里看似废话，在非正定度规（相对论）里就成了要小心的地方。

> [!warning] 陷阱
> 在标准正交基下 $x^i$ 与 $x_i$ 数值相同，容易以为指标升降无内容。真正的区别是**位置**：$|x\rangle=x^i|e_i\rangle$ 是列，$\langle x|=x_i\langle e_i|$ 是行。只有在度规非平凡（斜坐标、曲线坐标、闵可夫斯基度规）时两个数组才真的不同。

## 完备性关系（单位算符）

正交归一基 $\{|e_i\rangle\}$（$\langle e_j|e_i\rangle=\delta^i_j$）给出**单位算符的分解**
$$\hat I=\sum_i|e_i\rangle\langle e_i|.$$
这是整套符号的工作马：任何"从抽象陈述回到分量"的动作都是往中间插一个 $\hat I$。例如

- 分量：$|x\rangle=\hat I|x\rangle=\sum_ix^i|e_i\rangle$，其中 $x^i=\langle e_i|x\rangle$；
- 算符的矩阵元：$A_{ji}:=\langle e_j|\hat A|e_i\rangle$（注意讲义的下标顺序：左矢给第一个下标）；
- 复合：$\langle e_i|\hat A\hat B|e_j\rangle=\sum_k\langle e_i|\hat A|e_k\rangle\langle e_k|\hat B|e_j\rangle$，即矩阵乘法——它**就是**插入 $\hat I$ 的结果，不是额外定义。

> [!tip] 想法
> 有了 $\hat I=\sum|e_i\rangle\langle e_i|$，"算符与坐标无关"与"算符可用矩阵表示"这两句话可以同时成立：算符本身是 $V\to V$ 的映射，矩阵只是它在某一组基下的像；换基就是换 $\hat I$ 的分解方式。

## 基变换

设 $\{|\xi_i\rangle\}$ 是另一组正交归一基，$T_{ij}=\langle e_i|\xi_j\rangle$（旧基写新基的分量），$(T^{-1})_{ij}=\langle\xi_i|e_j\rangle$。则

- 算符矩阵：$A'=T^{-1}AT$，$A'_{ij}=\langle\xi_i|\hat A|\xi_j\rangle$（相似变换）；
- 矢量分量：$x'^i=(T^{-1})_{ij}x^j$（即讲义 $x'=T^{-1}x$），与基向量的变换 $|\xi_j\rangle=\sum_iT_{ij}|e_i\rangle$ 方向相反。

> [!warning] 陷阱
> 基底变换矩阵与分量变换矩阵互为逆。$T$ 的定义一旦抄反，对角化、主轴化会全部反转而不报错。

## 相关概念

- [[共轭算符与对称算符]]
- [[二次型与广义本征值问题]]
- [[仿射空间]]
