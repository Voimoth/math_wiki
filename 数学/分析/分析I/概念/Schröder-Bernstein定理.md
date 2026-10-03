---
title: Schröder-Bernstein定理
created: 2026-10-03
updated: 2026-10-03
type: concept
tags: [analysis, analysis-I, zh]
sources: [分析I 课程笔记(本人手写扫描)]
confidence: medium
---

# Schröder-Bernstein定理

## 定理

> [!note] 定理（Schröder–Bernstein–Cantor）
> 设 $S,T$ 为两集合。若存在单射 $f:S\to T$ 与单射 $g:T\to S$，则 $|S|=|T|$。

## 为什么

它把「证明等势」化简为「两个方向各验证一个单射」，免去显式构造双射，是判断两个集合等势最常用的工具。

## 证明要点

1. 化归为：若 $B\subset A$ 且 $f:A\to B$ 单射，则 $|A|=|B|$。
2. 令 $Y=A\setminus B$，$X=Y\cup f(Y)\cup f^2(Y)\cup\dots$；关键恒等式 $X=Y\cup f(X)$。
3. 定义 $g:A\to B$：在 $X$ 上取 $f$，在 $A\setminus X$ 上取恒等映射。两段拼起来是双射：$X\to f(X)$、$A\setminus X\to B\setminus f(X)$，而 $X$ 与 $A\setminus X$ 不交、覆盖 $A$。
4. 一般情形对复合 $T\xrightarrow{g}S\xrightarrow{f}f(S)\subset T$ 套用上述引理，得 $|T|=|f(S)|=|S|$。

## 方法对比

与「显式构造双射」相比，本定理把方案拆成两个更弱的单射；代价是得到的双射是拼出来的、不自然。

## 概念性陷阱

- 两个方向必须都是**单射**；一单射一满射或两满射不能直接套用。
- 构造中「$X$ 部分被 $f$ 推入、其余不动」是核心图像；两部分不重叠是双射性的关键。

## 相关概念

- [[集合的势]]
