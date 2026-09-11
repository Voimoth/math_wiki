---
title: SO(3) 的有限子群 (Sous-groupes finis de SO(3))
created: 2026-09-11
updated: 2026-09-11
type: concept
tags: [group-theory, algebre, geometrie]
sources: [代数III.pdf, 扫描全能王 2026-09-11 12.04.pdf]
confidence: high
---

# $SO(3)$ 的有限子群 (Sous-groupes finis de $SO(3)$)

> [!question] 本页要回答什么？
> 空间旋转群的有限子群有哪些？为什么只有五族？为什么 $A_5$ 会出现？——这是 Burnside 公式最漂亮的应用。

> [!info] 记号
> $SO(3)$ 是 $\mathbb{R}^3$ 中行列式为 $+1$ 的正交矩阵群，即**空间旋转群**。$G \subset SO(3)$ 指有限子群。

## 1. 分类定理

> [!note] 定理（$SO(3)$ 的有限子群）
> 设 $G \subset SO(3)$ 有限。则 $G$ 同构于下列之一：
> 1. 循环群 $\mathbb{Z}/n\mathbb{Z}$，$n \geqslant 2$（$n$ 次旋转轴）；
> 2. 二面体群 $D_{2n}$（正 $n$ 边形的等距群，$2n$ 阶）；
> 3. $\mathfrak{A}_4$；
> 4. $\mathfrak{S}_4$；
> 5. $\mathfrak{A}_5$。
>
> 这三种"例外"分别对应**正四面体、立方体/正八面体、正十二面体/正二十面体**的旋转群。

## 2. 装置：极点与作用

设 $r \in SO(3)$，$r \neq \mathrm{Id}$。则 $r$ 有**旋转轴**（不动点构成的直线）$\mathbb{R}x$；在合适的正交基下 $r$ 的矩阵为
$$\begin{pmatrix} 1 & 0 & 0 \\ 0 & \cos\theta & \sin\theta \\ 0 & -\sin\theta & \cos\theta \end{pmatrix}$$

轴与单位球面 $S^2$ 交于**两点** $p$ 与 $-p$，称为 $r$ 的**极点（pôles）**。

> [!note] 定义（极点的集合 $X$）
> $$X = \{G \setminus \{e\} \text{ 中元素的所有极点}\}$$

**关键事实**：$G$ 作用在 $X$ 上（**不是**用 $SO(3)$ 在 $\mathbb{R}^3$ 上的自然作用，而是用**共轭**诱导的作用）。理由：若 $p$ 是 $r$ 的极点，则 $g(p)$ 是 $grg^{-1}$ 的极点。

> [!tip] 这一步为什么是整个证明的枢纽
> $X$ 是**离散有限**的（$G$ 有限 ⟹ 极点只有有限多个），于是可对**有限集** $X$ 用 Burnside 公式数轨道。把"旋转群的几何"转成"有限集上的计数"——**这就是全部技巧**。见 [[群作用]]。

## 3. Burnside：轨道数 $N \in \{2, 3\}$

设 $N$ 为 $G$ 作用在 $X$ 上的轨道数。用 [[群作用]] 的 Burnside 公式
$$N = \frac{1}{|G|}\sum_{g \in G} |\mathrm{Fix}(g)|$$

- $g = e$：$\mathrm{Fix}(e) = X$，贡献 $|X|$。
- $g \neq e$：$\mathrm{Fix}(g) = \{$极点 of $g\} = \{p, -p\}$，贡献 $2$。

故
$$N = \frac{1}{|G|}\bigl(|X| + 2(|G| - 1)\bigr) \tag{$\star$}$$

设轨道为 $O_1, \ldots, O_N$，取 $x_i \in O_i$，$G_{x_i} = \operatorname{Stab}(x_i)$，则 $|O_i| = |G|/|G_{x_i}|$。代入 $|X| = \sum_i |O_i|$：
$$\sum_{i=1}^{N}\left(1 - \frac{1}{|G_{x_i}|}\right) = 2\left(1 - \frac{1}{|G|}\right) \tag{$\star\star$}$$

> [!note] 命题
> $N = 2$ 或 $N = 3$。

**证明**：因 $|G| \geqslant 2$ 有 $\frac{1}{2} \leqslant 1 - \frac{1}{|G|} < 1$。又每个 $G_{x_i}$ 含 $\mathrm{Id}$ 以及一个以 $\mathbb{R}x_i$ 为轴的旋转 $\neq \mathrm{Id}$，故 $|G_{x_i}| \geqslant 2$，即 $\frac{1}{2} \leqslant 1 - \frac{1}{|G_{x_i}|} < 1$。于是
$$\frac{N}{2} \leqslant \sum_{i=1}^{N}\left(1 - \frac{1}{|G_{x_i}|}\right) = 2\left(1 - \frac{1}{|G|}\right) < 2 \quad\Longrightarrow\quad N < 4$$
再由 $(\star)$ 排除 $N = 1$：若 $N = 1$ 则 $|X| + 2|G| - 2 = |G|$，即 $|G| = 2 - |X| \leqslant 1$，矛盾。故 $N \in \{2, 3\}$。$\square$

## 4. $N = 2$：循环群

$(\star\star)$ 给出 $\frac{1}{e_1} + \frac{1}{e_2} = \frac{2}{|G|}$，其中 $e_i = |G_{x_i}| \leqslant |G|$。故 $e_1 = e_2 = |G|$，即 $G_{x_1} = G_{x_2} = G$：$G$ 在 $X = \{x_1, x_2\}$ 上不动，$x_2 = -x_1$，$G$ 是绕该轴的**旋转群**。

> [!tip] $N = 2$ 的几何意义
> 所有元素共轴——这正是**循环群** $\mathbb{Z}/n\mathbb{Z}$（由 $\frac{2\pi}{n}$ 旋转生成）。极点只有一对 $\pm x$。

## 5. $N = 3$：三种例外

排序 $e_1 \leqslant e_2 \leqslant e_3$，$(\star\star)$ 给出
$$1 + \frac{2}{|G|} = \frac{1}{e_1} + \frac{1}{e_2} + \frac{1}{e_3} > 1$$
由 $e_1 \leqslant e_2 \leqslant e_3$ 得 $e_1 = 2$。于是 $\frac{1}{2} + \frac{2}{|G|} = \frac{1}{e_2} + \frac{1}{e_3} > \frac{1}{2}$，且 $e_2 \leqslant 3$（否则 $\frac{1}{e_2} + \frac{1}{e_3} \leqslant \frac{1}{2}$）。故

$$e_2 = 2 \quad \text{或} \quad e_2 = 3$$

### 5.1 情形 $e_1 = 2$，$e_2 = 2$：二面体群 $D_{2n}$

由 $(\star\star)$：$\frac{2}{|G|} = \frac{1}{e_3}$，即 $|G| = 2e_3$。记 $m = e_3 = |G|/2$。则
$$|O_1| = \frac{|G|}{e_1} = m = |O_2|, \qquad |O_3| = \frac{|G|}{e_3} = 2$$
（$O_3$ 就是 $\{x, -x\}$，两个极点。）

取 $x_3 \in O_3$，$G_{x_3}$ 是绕轴 $\mathbb{R}x_3$ 的循环群，阶 $n$。取 $y \in O_1$，$|G_y| = 2$，$G_y = \{\mathrm{Id}, r\}$，$r$ 是 $\pi$ 旋转。因 $x_3 \perp y$，$r(x_3) = -x_3$。在正交基 $(x, y, z)$ 下，$G$ 的元素形如
$$\begin{pmatrix} 1 & 0 & 0 \\ 0 & \cos\theta & -\sin\theta \\ 0 & \sin\theta & \cos\theta \end{pmatrix}, \qquad G_y = \left\{\mathrm{Id}, \begin{pmatrix} -1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & -1 \end{pmatrix}\right\}$$
$G_x \cap G_y = \{\mathrm{Id}\}$，$G_x$ 指数 2（正规），且 $|G_x|\,|G_y| = 2n = |G|$，故 $G = G_x G_y \simeq D_{2n}$。

### 5.2 情形 $e_1 = 2$，$e_2 = 3$：$\mathfrak{A}_4$、$\mathfrak{S}_4$、$\mathfrak{A}_5$

由 $\frac{1}{e_3} = \frac{1}{6} + \frac{2}{|G|}$ 得 $3 \leqslant e_3 < 6$，即

| $e_3$ | $\vert G\vert$ | $G$ | 多面体 |
|---|---|---|---|
| 3 | 12 | $\mathfrak{A}_4$ | 正四面体 |
| 4 | 24 | $\mathfrak{S}_4$ | 立方体 / 正八面体 |
| 5 | 60 | $\mathfrak{A}_5$ | 正十二面体 / 正二十面体 |

> [!note] 命题：$\vert G\vert = 60$ 的情形给出 $\mathfrak{A}_5$
> $|G| = 60$ 时 $G \simeq A_5$。
>
> **证明**：轨道大小 $|O_1| = 30$，$|O_2| = 20$，$|O_3| = 12$，彼此不同；故 $x$ 与 $-x$ 必在同一轨道内（否则又产生一个同大的轨道）。于是每个轨道对应一族旋转轴：
> - $O_1$：15 条轴，稳定子为 2 阶循环群 ⟹ **15 个 $\pi$ 旋转**；
> - $O_2$：10 条轴，稳定子为 3 阶循环群 ⟹ **20 个 3 阶元**；
> - $O_3$：6 条轴，稳定子为 5 阶循环群 ⟹ **24 个 5 阶元**。
>
> 计数：$1 + 15 + 20 + 24 = 60$，**穷尽了 $G$ 的全部元素**。
>
> 设 $H \triangleleft G$，$H \neq \{e\}$，逐类排除（与 [[A5单性与60阶群]] 完全相同的模板）：
> - $H$ 含 5 阶元 ⟹ 含全部 24 个 5 阶元（它含该元生成的循环群，即一个稳定子，从而含其共轭类）⟹ $|H| \geqslant 25$，由 $|H| \mid 60$ 得 $|H| \in \{30, 60\}$；$|H| = 30$ 时 $3 \mid 30$ 给 3 阶元，$|H| \geqslant 45 > 30$，矛盾。
> - $H$ 含 3 阶元 ⟹ 含 20 个 3 阶元，$|H| \geqslant 21$；同上用 Sylow 排除 $|H| = 30$。
> - $H$ 只含 2 阶元 ⟹ 含 15 个 2 阶元，$|H| \geqslant 16$；$|H| \in \{20, 30, 60\}$，前两者被 Sylow 排除。
>
> 故 $H = G$，$G$ 单，$|G| = 60$ ⟹ $G \simeq \mathfrak{A}_5$。见 [[A5单性与60阶群]] 第 5 节。$\square$

> [!note] 命题：$\vert G\vert = 24$ 的情形给出 $\mathfrak{S}_4$
> $|G| = 24$ 时 $G \simeq \mathfrak{S}_4$。
>
> **证明**：轨道大小 $|O_1| = 12$，$|O_2| = 8$，$|O_3| = 6$。取 $O_2$ 的 4 条轴（$8/2 = 4$），$G$ 作用在这 4 条直线上给出
> $$\varphi : G \to \mathfrak{S}_4$$
> 若 $g \in \ker\varphi$，则 $g$ 稳定每条直线，在每条直线上作用为 $\pm\mathrm{Id}$，故 $g^2 = \mathrm{Id}$（$g^2$ 是特征值 $1$ 重数 $\geqslant 2$ 的旋转），即 $g$ 是 $\pi$ 旋转。又 $g$ 在 4 条直线上都取 $-\mathrm{Id}$（否则 $g$ 落在某个 3 阶稳定子中），故 $g$ 的轴正交于这 4 条直线且被所有 $h \in G$ 保持——这会产生一个 3 元轨道，与轨道大小 $\{12, 8, 6\}$ 矛盾。故 $\ker\varphi = \{\mathrm{Id}\}$，$\varphi$ 单；$|G| = 24 = |\mathfrak{S}_4|$，故 $\varphi$ 是同构。

## 6. 与经典群的联系

正多面体的旋转群与 $A_4, \mathfrak{S}_4, A_5$ 的对应不是巧合：[[经典群]] 记有对偶关系（正十二面体/二十面体 ↔ 60 阶 ↔ $A_5$），这里是**从群作用一侧**独立推出的同一批群。

> [!tip] 本页在整个课程中的位置
> 这是 [[群作用]] 方法论的**最高应用**：把 Burnside 公式喂给一个几何离散集，就得到一张完整的分类表。同时它把前面积累的 [[Sylow定理]]、[[A5单性与60阶群]] 全都调用了一次——**前半部分的所有工具在这一个定理里汇合。**

## 相关概念

- [[群作用]] — Burnside 公式、轨道-稳定子、共轭作用
- [[A5单性与60阶群]] — $|G| = 60$ 单 ⟹ $\mathfrak{A}_5$；本页 5.2 的逐类排除
- [[Sylow定理]] — "含 $p \mid |H|$ 则含 $p$ 阶元"这一跳板
- [[经典群]] — $A_4, \mathfrak{S}_4, A_5$ 与正多面体
- [[对称群]] — $\mathfrak{S}_4$、$\mathfrak{A}_5$ 的结构
- [[群论学习路径]] — 本页作为"作用 + 计数"的综合练习
