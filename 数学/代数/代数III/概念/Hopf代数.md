---
title: Hopf 代数
created: 2026-10-21
updated: 2026-10-21
type: concept
tags: [algebra, hopf, representation, tensor]
sources: [Marc Rosso 2026-10-21 讲座]
confidence: medium
---

# Hopf 代数 (Algèbre de Hopf)

> [!question] 问题
> 群表示上能"取张量积"（$\rho\otimes\sigma$ 作用在 $U\otimes W$ 上），但对偶表示、平凡表示、表示的"逆"这些操作并没有写在群的公理里。能不能把这些操作**编码成代数结构**？

## 从群代数出发

设 $G$ 是群、$k$ 是域，群代数 $k[G]$ 以 $G$ 为基、乘法由群乘法延拓。它天然带四个额外映射：

| 映射 | 定义 | 在表示论里的意思 |
|---|---|---|
| 乘法 $m:k[G]\otimes k[G]\to k[G]$ | $m(g\otimes h)=gh$ | 把两个表示"接"起来 |
| 单位 $\eta:k\to k[G]$ | $\eta(1)=e$ | 平凡表示 |
| 余乘 $\Delta:k[G]\to k[G]\otimes k[G]$ | $\Delta(g)=g\otimes g$ | **张量积表示**：$(\rho\otimes\sigma)(g)=\rho(g)\otimes\sigma(g)$ |
| 余单位 $\varepsilon:k[G]\to k$ | $\varepsilon(g)=1$ | 取"系数"，对应一维平凡分量 |
| 对极 $S:k[G]\to k[G]$ | $S(g)=g^{-1}$ | 对偶（逆）表示 |

$\Delta$ 是**代数同态**（不是反同态），这一点是关键：它保证"逐个因子作用"确实是 $k[G]$ 在张量积上的作用。把上面这套公理化，就得到 Hopf 代数。

> [!note] 定义（简版）
> $k$-代数 $(H,m,\eta)$ 若还带余乘 $\Delta:H\to H\otimes H$、余单位 $\varepsilon:H\to k$（满足余结合律与余单位律），且 $\Delta,\varepsilon$ 是代数同态，并存在对极 $S:H\to H$ 使
> $$m\circ(S\otimes\mathrm{Id})\circ\Delta=\eta\circ\varepsilon=m\circ(\mathrm{Id}\otimes S)\circ\Delta,$$
> 则称 $H$ 为 **Hopf 代数**（algèbre de Hopf）。

## 为什么要它

- **张量积表示不需要额外构造**：只要 $H$ 是 Hopf 代数，$\Delta$ 就把"两个模的张量积还是模"变成代数内部的事实。
- **对偶表示**：由 $S$ 给出（$S$ 是反同态，正好对应"逆"）。
- **函子性**：Hopf 代数的同态自动与乘、余乘、单位、余单位相容，所以"对称函数环 $\cong\bigoplus R[\mathfrak{S}_n]$"这类同构一旦成立，就同时是表示范畴层面的等价。

> [!example] 两个最重要的例子
> - $H=k[G]$：$\Delta(g)=g\otimes g$、$\varepsilon(g)=1$、$S(g)=g^{-1}$。当 $G$ 有限时 $k[G]$ 还是余半单的（Artin–Wedderburn）。
> - $H=\Lambda(x)$（对称函数环）：乘法 = LR 系数、余乘 = 拆变量 $x\mapsto(x,y)$、内积 = Hall 内积；见 Rosso 讲座笔记 §3。
> - $H=U_q(\mathfrak g)$（量子群）：$q\to1$ 退回包络代数 $U(\mathfrak g)$，但余乘在 $q\ne1$ 时非对称，这使张量积分解"变形"。

> [!warning] 陷阱
> 不要把所有"带余乘的代数"都叫 Hopf 代数：还缺对极与相容性。另一方面，$\Delta$ 必须与 $m$ 相容（是代数同态），否则 $\Delta(g)=g\otimes g$ 这类公式在张量积表示上不成立。

## 相关概念

- [[Schur-Weyl对偶]]
- [[代数III/概念/群]]
- [[代数III/概念/特征标与正交关系]]
- [[代数III/概念/域上代数]]
