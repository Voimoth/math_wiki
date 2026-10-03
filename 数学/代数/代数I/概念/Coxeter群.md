---
title: Coxeter 群（Groupe de Coxeter）
created: 2026-10-03
updated: 2026-10-03
type: concept
tags: [algebre, coxeter, presentation]
sources: [代数 I 习题课手写笔记]
confidence: medium
---

# Coxeter 群 (Groupe de Coxeter)

> [!tip] 为什么需要它
> 许多由反射（对合）生成的群——对称群、正多边形的对称群等——都由生成元之间的「每个生成元自逆 + $(ss')^{m} = 1$」这组关系刻画。Coxeter 群用一张对称矩阵把全部这些关系编码起来。

> [!note] 定义：Coxeter 矩阵
> 设 $S$ 是集合。一个矩阵 $M : S \times S \to \mathbb{N}^+ \cup \{+\infty\}$ 称为一个 Coxeter 矩阵，若
> ① $m(s,t) = m(t,s)$（即 $M$ 对称）；
> ② $m(s,t) = 1 \iff s = t$。

> [!example] 例
> $|S| = 4$ 时，可取
> $$M = \begin{bmatrix} 1 & 2 & 3 & 2 \\ 2 & 1 & 4 & 3 \\ 3 & 4 & 1 & +\infty \\ 2 & 3 & +\infty & 1 \end{bmatrix}$$

> [!note] 定义：Coxeter 群
> 设 $M : S \times S \to \mathbb{N}^+ \cup \{+\infty\}$ 为 Coxeter 矩阵。取生成元集 $X = S$，关系集
> $$R = \{(st)^{m(s,t)} \mid s, t \in S,\ m(s,t) \neq +\infty\} \subset F(X),$$
> 称 $W := F(X)/\langle R \rangle$ 为一个 Coxeter 群。

> [!note] 命题：$W$ 中的基本关系
> ① 对任意 $s \in S$，$m(s,s) = 1 \Rightarrow (ss)^{m(s,s)} = e \Rightarrow s^2 = e \Rightarrow s^{-1} = s$（生成元为对合）；
> ② $m(s,t) = 2$ 时 $(st)^2 = e \iff st = ts$（交换关系）；
> ③ $m(s,t) = 3$ 时 $(st)^3 = e \iff sts = tst$（辫子关系）。

> [!tip] 直觉
> 对称矩阵的对角项强制每个生成元自逆（反射）；非对角项 $m(s,t)$ 刻画两个生成元「缠绕」的程度：$m = 2$ 表示二者交换，$m = 3$ 给出辫关系，$m = +\infty$ 表示不受关系约束（自由积的情形）。

> [!warning] 陷阱
> - $m(s,t) = +\infty$ 时对 $s, t$ 不施加任何关系，不要误当作 $m = 0$。
> - 对称群是一类 Coxeter 群：取相邻对换 $S_i = (i, i+1)$ 为生成元，即得 $\mathfrak{S}_n$ 的 Coxeter 结构，见 [[代数III/概念/对称群]] 与 [[对换]]。
> - Coxeter 矩阵只给出群的展示；群本身的性质（有限性等）需另行判定。

## 相关概念

- [[群的展示]]
- [[辫群]]
- [[自由群]]
- [[代数III/概念/对称群]]
- [[对合]]

## 相关笔记

- [[13-辫群与Coxeter群|代数I · 13-辫群与Coxeter群]]
- [[14-对称群与置换的符号差|代数I · 14-对称群与置换的符号差]]
