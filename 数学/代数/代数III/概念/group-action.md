---
title: 群作用(Action de groupe)
created: 2026-09-01
updated: 2026-09-01
type: concept
tags: [group-theory, algebre]
sources: [Cours USTC 01-09-26.pdf]
confidence: high
---

# 群作用 (Action d'un groupe sur un ensemble)

> [!note] 定义:群作用
> 群 $G$ **作用**在集合 $X$ 上 = 有态射 $\varphi: G \to \mathcal{G}(X)$,其中 $\mathcal{G}(X)$ = $X$ 的双射群。
> 等价地:映射 $G \times X \to X$, $(g,x) \mapsto g \cdot x$ 满足:
> 1. $g \cdot (g' \cdot x) = (gg') \cdot x$
> 2. $e \cdot x = x$

> [!tip] 想法:作用 = "群通过变换体现自己"
> 群元素被实现为集合的变换(Cayley 定理:任何群作用在自己上)。同一个群可以作用在不同集合上——作用方式揭示群的不同侧面。**几何对称群、线性表示都是群作用的特例**。

## 忠实与传递

> [!note] 定义
> - **忠实**(fidèle):$\varphi$ 单射(不同 $g$ 作用不同——群"完整"嵌入 $\mathcal{G}(X)$)
> - **传递**(transitive):$\forall x, y \in X$, $\exists g$,$g \cdot x = y$(任意两点可通过群元素相连)

## 轨道与稳定子

> [!note] 定义
> - **轨道**(orbite):$O(x) = G \cdot x = \{g \cdot x : g \in G\}$
> - **稳定子**(stabilisateur):$\mathrm{Stab}(x) = G_x = \{g \in G : g \cdot x = x\}$(是 $G$ 的子群)

> [!tip] 想法:轨道 = 等价类
> $x \mathcal{R} y \iff \exists g,\ y = g \cdot x$ 是等价关系,轨道就是等价类:
> - 不同轨道不相交,轨道构成 $X$ 的**划分**
> - 作用传递 ⟺ 只有一个轨道

## 轨道-稳定子定理(核心定理)

> [!note] 轨道-稳定子定理
> $x \in X$,映射
> $$G/\mathrm{Stab}(x) \longrightarrow O(x), \qquad g \cdot \mathrm{Stab}(x) \mapsto g \cdot x$$
> 是**双射**。
> - 良定义:若 $g \cdot \mathrm{Stab}(x) = g' \cdot \mathrm{Stab}(x)$,则 $g = g'h$($h \in \mathrm{Stab}(x)$),$g \cdot x = g' \cdot (h \cdot x) = g' \cdot x$
> - 满射:由定义;单射:逆推同理由定义

> [!note] 推论
> 若 $G$ 有限,每个轨道的基数整除 $|G|$:
> $$|O(x)| = \frac{|G|}{|\mathrm{Stab}(x)|} \quad \Rightarrow \quad |O(x)| \mid |G|$$

> [!tip] 想法:定理的威力
> 轨道-稳定子定理把"几何"翻译成"代数":轨道(空间中的对象)与陪集(代数结构)一一对应。
> 它是**计数群论的发动机**:
> - **类方程**:$|G| = |Z(G)| + \sum$ 非平凡共轭类大小(中心化子/稳定子)
> - **Burnside 引理**:轨道数 = 不动点平均
> - **Sylow 定理**:$p$-子群存在性(用 $G$ 作用在 $p$-子群集合上)
> 后续课程几乎都从这里出发。

## 学习提示

- 验证作用:两条公理(结合 + 幺元)即可
- 常见作用:共轭作用($g \cdot x = gxg^{-1}$,轨道 = 共轭类,稳定子 = 中心化子)、左乘作用、置换作用
- 中法班术语:opère/agit(作用)、orbite(轨道)、stabilisateur(稳定子)、fidèle(忠实)、transitif(传递)

## 相关概念

- [[group]] — 群是作用的"主语"
- [[isomorphism-theorems]] — 轨道-稳定子定理 = 第一同构定理在作用上的应用
- [[subgroup]] — 稳定子是子群,陪集出现于定理中
