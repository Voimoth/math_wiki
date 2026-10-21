---
title: Schur-Weyl 对偶
created: 2026-10-21
updated: 2026-10-21
type: concept
tags: [group-theory, representation, schur-weyl, tensor]
sources: [Marc Rosso 2026-10-21 讲座]
confidence: medium
---

# Schur-Weyl 对偶 (Dualité de Schur–Weyl)

> [!question] 问题
> 对称群 $\mathfrak{S}_n$（只在 $n$ 个位置上换次序）与一般线性群 $\mathrm{GL}_d$（在 $d$ 维空间里做线性变换）没有包含关系，为什么它们的不可约表示会由**同一批分拆** $\lambda\vdash n$ 标号？

## 舞台：张量幂

设 $V=\mathbb C^d$，取 $n$ 重张量幂 $V^{\otimes n}$（维数 $d^n$）。两个群都作用在它上面：

$$g\cdot(v_1\otimes\cdots\otimes v_n)=gv_1\otimes\cdots\otimes gv_n,$$
$$w\cdot(v_1\otimes\cdots\otimes v_n)=v_{w^{-1}(1)}\otimes\cdots\otimes v_{w^{-1}(n)} .$$

第一个是"同时变换每个因子"，第二个是"只重排因子"。两者可交换：先换位置再变换 = 先变换再换位置。所以它们在 $\operatorname{End}(V^{\otimes n})$ 里给出两个互相交换的子代数，进而可以问：**它们是不是恰好互为对方的换位子？**

> [!note] 定理（Schur 1927；Weyl 后推广到半单群）
> $\mathfrak{S}_n$ 与 $\mathrm{GL}_d$ 在 $V^{\otimes n}$ 上的像互为换位子，且（作为 $\mathfrak{S}_n\times \mathrm{GL}_d$-模）
> $$V^{\otimes n}\cong\bigoplus_{\lambda\vdash n,\ \ell(\lambda)\le d}S^\lambda\otimes V_\lambda,$$
> 其中 $S^\lambda$ 是 $\mathfrak{S}_n$ 的 Specht 模（不可约表示），$V_\lambda$ 是 $\mathrm{GL}_d$ 的最高权 $\lambda$ 不可约表示（Schur 函子）。$\ell(\lambda)\le d$ 自动成立：超过 $d$ 行的分拆给出 $V_\lambda=0$。

> [!example] 最小例子：$d=2$、$n=2$
> $V\otimes V$ 的 4 维空间按"换因子"分成两块：
> $$\underbrace{\mathrm{Sym}^2V}_{\text{维 }3}\oplus\underbrace{\Lambda^2V}_{\text{维 }1},\qquad \dim=3+1=4 .$$
> $\mathfrak{S}_2$ 有平凡与符号两个表示（各 1 维），$\mathrm{GL}_2$ 在 3 维与 1 维上各有一个不可约表示，于是
> $$V^{\otimes2}\cong\bigl(S^{(2)}\otimes V_{(2)}\bigr)\oplus\bigl(S^{(1,1)}\otimes V_{(1,1)}\bigr)=(1\otimes3)\oplus(1\otimes1).$$
> 分拆 $(2)$ 与 $(1,1)$ 同时标号了两边的表示——这就是对偶的内容。

> [!example] 再一步：$d=2$、$n=3$
> $8=4\cdot1+2\cdot2$：分拆 $(3)$ 给 $\mathrm{Sym}^3V$（维 4，$\mathfrak{S}_3$ 的平凡表示），分拆 $(2,1)$ 给 2 维 $\mathrm{GL}_2$ 模与 2 维 Specht 模，分拆 $(1,1,1)$ 给 $\Lambda^3V=0$（因为 $d=2$）。

## 为什么值得记

- 它是"两个群各自都不知道对方的表示论，却能由一个组合对象（分拆）统一标号"的最干净例子，也是**双中心化子定理**（double commutant）的标准模型。
- 它给对称函数一个解释：$\mathrm{GL}_d$ 表示的特征标在对角矩阵上就是 Schur 多项式 $s_\lambda$，于是 $\Lambda(x)$ 的乘法（Littlewood–Richardson 系数）正好记录"张量积怎么分解"。
- 把 $\mathrm{GL}_d$ 换成 $U_q(\mathfrak{gl}_d)$、$\mathfrak{S}_n$ 换成 Hecke 代数 $\mathcal H_q(\mathfrak{S}_n)$，同一个分解仍成立——**量子 Schur-Weyl 对偶**。$q\to1$ 退回本页。

> [!warning] 常见混淆
> $n$ 与 $d$ 的角色不同：$n$ 是"张量因子个数"，也是分拆的大小（$\lambda\vdash n$）；$d$ 是空间维数，只限制分拆的行数 $\ell(\lambda)\le d$。所以 $\mathfrak{S}_n$ 的表示不依赖 $d$，$\mathrm{GL}_d$ 的表示不依赖 $n$，但只有 $d^n$ 维空间上的一对才配对。

## 相关概念

- [[Hopf代数]]
- [[代数III/概念/对称群]]
- [[代数III/概念/特征标与正交关系]]
- [[代数III/概念/经典群]]
- [[代数III/概念/线性群与特殊线性群]]
