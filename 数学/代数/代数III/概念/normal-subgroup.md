---
title: 正规子群(Sous-groupe distingué)
created: 2026-09-01
updated: 2026-09-01
type: concept
tags: [group-theory, algebre]
sources: [Cours USTC 01-09-26.pdf]
confidence: high
---

# 正规子群 (Sous-groupe distingué / normal)

> [!note] 定义:正规子群
> $H \subset G$ 正规(记 $H \triangleleft G$),若:
> $$\forall g \in G,\ \forall h \in H: \quad ghg^{-1} \in H$$
> 等价条件:$gHg^{-1} = H$,即 $gH = Hg$(左陪集 = 右陪集)。

> [!tip] 想法:为什么"正规"重要?
> "正规" = 左陪集和右陪集重合 = **陪集之间可以自然相乘**:
> $$(gH)(g'H) = gg'H$$
> 这正好是 [[quotient-group|商群]] 需要的乘法结构。**没有正规性,商结构不存在**——正规子群是"能安全商掉"的子群。

## 基本例子

> [!example] 例子
> - **态射的核**:$\mathrm{Ker}\, f \triangleleft G$(任意群态射 $f$ 的核)
> - **中心**:$Z(G) = \{x \in G : \forall g,\ xg = gx\} \triangleleft G$
>   - $Z(\mathfrak{S}_2) = \mathfrak{S}_2$(交换群,中心 = 自身)
>   - $Z(\mathfrak{S}_n) = \{\mathrm{Id}\}$ 当 $n \geq 3$

> [!note] 命题:指标 2 子群
> 若 $H \subset G$ 指标 2($|G/H| = 2$),则 $H \triangleleft G$。
> **证明**:$G = H \sqcup gH = H \sqcup Hg$($\sqcup$ 不交并),故 $gH = Hg$。

## 陷阱:正规性不传递

> [!warning] 重要警示(MISE EN GARDE)
> 若 $K \triangleleft H \triangleleft G$,**未必** $K \triangleleft G$!
>
> **反例**:$A_4 \triangleleft \mathfrak{S}_4$,而 $V = \{\mathrm{Id}, (12)(34), (13)(24), (14)(23)\} \cong \mathbb{Z}/2 \times \mathbb{Z}/2$ 满足 $V \triangleleft A_4$,但 $V$ **不是** $\mathfrak{S}_4$ 的正规子群。
> 正规性**不传递**——这是最容易犯的错误。

## 学习提示

- 验证正规:检验 $ghg^{-1} \in H$(比"左=右陪集"更实用)
- "核总是正规"是常用构造:想造正规子群,就造态射的核
- 中法班术语:distingué(正规的)、normalisateur(正规化子,后续内容)

## 相关概念

- [[subgroup]] — 子群:正规子群是特殊子群
- [[quotient-group]] — 商群:正规子群 ⟹ 商结构
- [[derived-subgroup]] — 导群:一个重要正规子群
- [[isomorphism-theorems]] — 同构定理:利用正规子群分解
