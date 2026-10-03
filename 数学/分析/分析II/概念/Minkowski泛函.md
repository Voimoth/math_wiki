---
title: Minkowski 泛函（jauge）
created: 2026-10-03
updated: 2026-10-03
type: concept
tags: [analysis, functional-analysis, convexity]
sources: [分析II笔记.md]
confidence: high
---

# Minkowski 泛函（fonctionnelle de Minkowski / gauge）

## 问题

给定实向量空间 $V$ 的子集 $C$，何时 $\|x\|_C=\inf\{t>0:x\in tC\}$ 是范数？答案是 $C$ 为容许集时。

## 定义

> [!note] Déf.（容许集，admissible set）
> $C\subset V$ 称为**容许集**，若
> - 凸性：$x,y\in C,t\in[0,1]\Rightarrow tx+(1-t)y\in C$；
> - 平衡性：$x\in C,|\lambda|\le1\Rightarrow\lambda x\in C$；
> - 吸收性：$\forall x\in V,\exists t>0,\ x\in tC$；
> - 有界性：$C$ 不含过原点的非平凡直线，即 $x\ne0\Rightarrow\exists\lambda_0>0,\forall|\lambda|\ge\lambda_0,\lambda x\notin C$。

> [!note] Déf.（Minkowski 泛函 / gauge）
> $\|x\|_C:=\inf\{t>0:x\in tC\}$。由吸收性知该集合非空，泛函良定义且有限；可以验证它是范数（习题）。

## 想法

> [!tip] 四个条件各管什么
> 凸性与平衡性给出三角不等式与齐次性；吸收性保证泛函有限；有界性保证分离性（否则 $C$ 含一条直线，沿其方向 $\|x\|_C=0$）。这正是 [[赋范向量空间]] 三条范数公理在几何层面的镜像。

> [!info] Rem.
> 反方向：$\{x:\|x\|<1\}$ 是原点的对称开凸邻域。但这不是一一对应——开单位球与闭单位球对应同一个范数。

## 相关概念

- [[赋范向量空间]] — 容许集是范数公理的几何版本
- [[范数的等价性]] — 凸体的「大小」与范数的比较
