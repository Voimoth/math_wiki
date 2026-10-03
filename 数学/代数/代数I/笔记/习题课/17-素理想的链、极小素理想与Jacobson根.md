---
title: 代数 I · 17 素理想的链、极小素理想与 Jacobson 根
created: 2026-10-03
updated: 2026-10-03
type: notes
tags: [algebre, ideal-premier, radical-de-jacobson, anneau-local]
sources: [代数 I 习题课手写笔记]
confidence: medium
---

# 素理想的链、极小素理想与 Jacobson 根

素理想集合对链的并、以及升链的交都封闭，这使 Zorn 引理可以反向使用，得到极小素理想的存在性；把这些性质移向极大理想一侧，就得到 Jacobson 根，并由此引出局部环与赋值环。

## 素理想的链

> [!note] 命题 3.1
> $R$ 是交换环，$(P_k)_{k \in I}$ 是 $R$ 中素理想的一个升链。则
> $$P := \bigcup_{k \in I} P_k, \qquad P' := \bigcap_{k \in I} P_k$$
> 均为 $R$ 的素理想。

**Preuve :**

① 任取 $(a, b) \in R^2$，若 $ab \in P$，则存在 $k \in I$ 使 $ab \in P_k$；由 $P_k$ 是素理想知 $a \in P_k$ 或 $b \in P_k$，故 $a \in P$ 或 $b \in P$。又 $1 \notin P$（否则 $1 \in P_k$ 与 $P_k$ 为真理想矛盾），故 $P$ 是真理想，从而是素理想。

② 任取 $(a, b) \in R^2$，若 $ab \in P'$，则 $\forall k \in I$ 有 $ab \in P_k$；由 $P_k$ 是素理想，$a \in P_k$ 或 $b \in P_k$。设 $a \notin P'$，则存在 $k_0 \in I$ 使 $a \notin P_{k_0}$，于是 $b \in P_{k_0}$。对任意 $k \in I$：若 $k \geqslant k_0$，由 $P_{k_0} \subseteq P_k$ 得 $a \notin P_k$，从而 $b \in P_k$；若 $k \leqslant k_0$，由 $P_k \subseteq P_{k_0}$ 得 $a \notin P_k$，从而 $b \in P_k$。故 $\forall k \in I$ 有 $b \in P_k$，即 $b \in P'$。因此 $P'$ 是素理想（它包含于真理想 $P_{k_0}$ 中，故为真理想）。

## 极小素理想

> [!note] 命题 3.2
> (1) $I$ 是交换环 $R$ 的真理想，则理想集 $\{J \triangleleft R \mid J \text{ 是素理想且 } J \supseteq I\}$ 中存在一个极小元；
> (2) $R$ 中存在一个极小素理想。

**Preuve :**

(1) 记 $\Omega = \{J \triangleleft R \mid J \text{ 是素理想且 } J \supseteq I\}$。若 $I$ 是素理想，则 $I \in \Omega$。若 $I$ 不是素理想，则 $I$ 不是极大理想，故存在真包含 $I$ 的极大理想 $J$，而极大理想总是素的，于是 $J \in \Omega$。总之 $\Omega \neq \varnothing$。任取 $\Omega$ 中一条降链 $(J_n)_{n \in \mathbb{N}}$（反向即为升链），令 $J = \bigcap_{n \in \mathbb{N}} J_n$；由命题 3.1 的 ②，$J$ 是包含 $I$ 的素理想，故 $J \in \Omega$，是这条降链在 $\Omega$ 中的下界。由 Zorn 引理，$\Omega$ 中存在极小元。

(2) 令 $I = \{0\}$，由 (1) 即得 $R$ 中存在极小素理想。

## 主理想整环中极大与素重合

> [!note] 命题 3.3
> $R$ 是主理想整环，$I = (p)$ 是 $R$ 的非零理想（$0 \neq p \in R$）。则
> $$I \text{ 是极大理想} \iff I \text{ 是素理想}.$$

**Preuve :**

"$\Rightarrow$"：极大理想必是素理想。

"$\Leftarrow$"：设 $I = (p)$ 是素理想，即任取 $(a, b) \in R^2$，$ab \in I$ 则 $a \in I$ 或 $b \in I$。若 $I$ 不是极大理想，则存在极大理想 $J \supsetneq I$；因 $R$ 是主理想整环，$J = (q)$。由 $(q) \supseteq (p)$ 得 $q \mid p$，且 $q \neq p$、$q \neq 1$。写 $p = q q'$，则 $q, q' \in R \setminus I$ 而 $qq' = p \in I$，与 $I$ 是素理想矛盾。故 $I$ 是极大理想。

## Jacobson 根与幂零根

> [!note] 定义 3.4（Jacobson 根，radical de Jacobson）
> $R$ 是一个环，$J(R)$ 是 $R$ 中所有极大理想的交集，称为环 $R$ 的 Jacobson 根。

> [!info] 注记 3.5（幂零根，nilradical）
> 记 $\operatorname{Nil}(R)$ 为 $R$ 中所有幂零元的全体，称为交换环 $R$ 的幂零根；它等于零理想的根理想 $\sqrt{\{0\}}$，也等于 $R$ 的全部素理想之交。

> [!note] 命题 3.6
> $R$ 是交换环，$x \in R$。则
> $$x \in J(R) \iff \forall y \in R,\ 1 - xy \text{ 在 } R \text{ 中可逆}.$$

**Preuve :**

"$\Rightarrow$"：设 $x \in J(R)$，则对任意 $y \in R$ 有 $xy \in J(R)$，故只需验证 $1 - u$（$u \in J(R)$）在 $R$ 中可逆。反设 $1 - u$ 不可逆，则存在极大理想 $m \supseteq (1 - u)$；由 $u \in J(R) \subseteq m$ 得 $1 = (1 - u) + u \in m$，于是 $m = R$，矛盾。

"$\Leftarrow$"：设 $\forall y \in R$，$1 - xy$ 在 $R$ 中可逆。若存在极大理想 $m$ 使 $x \notin m$，则 $m \subsetneq (x) + m$，由 $m$ 的极大性得 $(x) + m = R$。故存在 $y \in R$ 与 $a \in m$ 使 $xy + a = 1$，即 $a = 1 - xy \in m$；但 $1 - xy$ 可逆，与 $m$ 为真理想（不含可逆元）矛盾。故 $x \in J(R)$。

## 局部环与剩余域

> [!note] 定义 3.7（局部环，anneau local）
> 交换环 $R$ 若有且仅有一个极大理想 $m$，则称 $R$ 为局部环。此时商环 $R/m$ 是一个域，称为 $R$ 的剩余域（corps résiduel）。常用 $(R, m)$ 表示局部环，此时 $J(R) = m$。

> [!note] 命题 3.8
> $R$ 是交换环。则
> $$R \text{ 是局部环} \iff R \text{ 的所有非可逆元构成一个理想}.$$

**Preuve :**

"$\Rightarrow$"：设 $R$ 局部，唯一极大理想为 $m$。任取不可逆元 $a$，则 $(a) \neq R$，存在极大理想 $m_a \supseteq (a)$；由唯一性 $m_a = m$，故 $a \in m$。又可逆元不属于任何极大理想，故可逆元都在 $m$ 之外。于是 $m$ 恰为 $R$ 中全部非可逆元的集合。

"$\Leftarrow$"：设 $R$ 中全部非可逆元构成一个理想 $I$。任一真理想都由非可逆元组成，故含于 $I$；而 $I$ 本身是真理想（$1 \notin I$），故 $I$ 是唯一的极大理想，$R$ 是局部环。

## 赋值环

> [!note] 定义 3.9（赋值环，anneau de valuation）
> $F$ 是一个域，$R \subseteq F$ 是 $F$ 的子环。若
> $$\forall x \in F^*, \quad x \in R \text{ 或 } x^{-1} \in R,$$
> 则称 $R$ 是 $F$ 下的一个赋值环。

> [!note] 命题 3.10
> 每个赋值环 $R \subseteq F$ 都是局部环，即它有唯一的极大理想。

**Preuve :** 取 $I$ 为 $R$ 中所有不可逆元素的集合。任取 $(x, y) \in I^2$，$xy^{-1} \in F^*$；由赋值环条件，不妨设 $xy^{-1} \in R$（否则对称地处理 $yx^{-1} \in R$）。此时
$$y - x = y\,(1 - xy^{-1}).$$
若 $x - y$ 可逆，设存在 $z \in R$ 使 $(x - y) z = 1$，则 $y\,(1 - xy^{-1})\,z = 1$，说明 $y$ 在 $R$ 中可逆，与 $y \in I$ 矛盾。故 $x - y \in I$。类似地，任取 $x \in I$、$r \in R$，若 $rx$ 可逆则 $x$ 可逆，矛盾，故 $rx \in I$。即 $I$ 是理想；由命题 3.8，$R$ 是局部环。

## 相关概念

[[素理想]]、[[极大理想]]、[[Jacobson根]]、[[局部环]]、[[赋值环]]、[[Zorn引理]]
