---
title: Borel 子群与旗簇 (Sous-groupes de Borel et variété des drapeaux)
created: 2026-10-19
updated: 2026-10-19
type: concept
tags: [group-theory, algebre, geometrie]
sources: [代数III 习题课讲义（许金兴）]
confidence: high
---

# Borel 子群与旗簇 (Sous-groupes de Borel et variété des drapeaux)

> [!question] 一个问题
> 上三角矩阵群看起来只是「矩阵形状」的巧合：为什么把对角线以下的元素设成零，就值得单独给它一个名字？

## 1. 旗

设 $V$ 是域 $K$ 上 $n$ 维向量空间。$V$ 的一条**完全旗**（drapeau complet）是一串子空间
$$0<V_1<V_2<\cdots<V_n=V,\qquad \dim V_i=i .$$
给一条旗等价于给一组基 $(v_1,\ldots,v_n)$，令 $V_i=\operatorname{Vect}(v_1,\ldots,v_i)$；两组基给出同一条旗，当且仅当它们相差一个上三角的换基矩阵。旗是「逐层增长的坐标系」，比一组基粗，比整个空间细。

> [!note] 定义：旗簇
> 记 $\mathcal F$ 为 $V$ 的全部完全旗组成的集合，称为**旗簇**（variété des drapeaux）。固定标准基 $(e_1,\ldots,e_n)$ 与 $W_i=\operatorname{Vect}(e_1,\ldots,e_i)$，则 $x_0=(W_1,\ldots,W_n)\in\mathcal F$ 称为**标准旗**（drapeau standard）。

## 2. $\mathrm{GL}_n$ 的作用与传递性

$g\in\mathrm{GL}_n(K)$ 把旗送到旗：$g\cdot(V_1,\ldots,V_n):=(gV_1,\ldots,gV_n)$。线性同构保持包含关系与维数，所以这是 $G=\mathrm{GL}_n(K)$ 在 $\mathcal F$ 上的良定义作用。

这个作用是**传递的**：给定任意旗 $(V_i)$，取 $v_i\in V_i\setminus V_{i-1}$，则 $(v_i)$ 是一组基；令 $g(e_i)=v_i$，就有 $g\cdot x_0=(V_i)$。于是 $\mathcal F=G\cdot x_0$，由轨道-稳定子定理，$\mathcal F$ 与商集 $G/\mathrm{Stab}(x_0)$ 一一对应，即旗簇是一个**齐性空间**（espace homogène）。旗簇上的一切，都可以翻译成 $G$ 与一个子群的事情。

## 3. Borel 子群就是稳定子

> [!note] 定理
> $\mathrm{Stab}(x_0)=B$，其中 $B$ 是可逆上三角矩阵组成的子群。称 $B$ 为 $\mathrm{GL}_n(K)$ 的一个 **Borel 子群**（sous-groupe de Borel）。

两个方向都很短。若 $g$ 保持每个 $W_i$，则 $ge_i\in gW_i=W_i$，写成分量就是 $g_{ij}=0$（$j>i$）；又 $g$ 可逆，故对角元非零，$g$ 上三角。反过来，上三角可逆矩阵把 $W_i$ 送到 $W_i$（前 $i$ 个坐标只依赖前 $i$ 个坐标），故保持整条旗。

> [!tip] 想法：子群与几何对象是一枚硬币的两面
> $B$ 不是「形状碰巧为三角」的矩阵集合，它是**一条旗的稳定子**。于是 $B$ 的共轭类对应旗的集合：$gBg^{-1}$ 稳定 $g\cdot x_0$。「研究 $B$ 的共轭」与「研究旗」是同一件事，这正是把群论问题几何化的入口。

## 4. 幂幺部分已经把旗钉死

$B$ 有半直积分解 $B=T\ltimes U$：$T$ 是对角矩阵（极大环面），$U=I+\mathfrak n$ 是对角线全为 $1$ 的上三角矩阵（极大幂幺子群）。判断一条旗是否标准，只需看 $U$，不必看整个 $B$：

> [!note] 引理
> $U$ 在 $V$ 上的不动点空间恰为 $W_1=Ke_1$。

因为对 $u=I+(u_{ij})_{i<j}$ 与 $v=\sum v_j e_j$，第一个坐标 $(uv)_1=v_1$ 永远不变，故 $v_1\neq0$ 时 $v$ 不可能不动；而 $e_1$ 被所有 $u\in U$ 固定。

由此，若某条旗被 $U$ 整体固定，则 $V_1=W_1$；在 $V/V_1$ 上重复同一论证，得 $V_2=W_2$，依此类推，旗就是 $x_0$。所以：「被 $U$ 固定的旗只有标准旗」，「稳定子等于 $B$ 的旗只有标准旗」。

把这个引理用在正规化子上，就得到纯群论的结论：若 $gBg^{-1}=B$，则 $g\cdot x_0$ 的稳定子是 $gBg^{-1}=B$，故 $g\cdot x_0=x_0$，故 $g\in B$。即
$$N_G(B)=B .$$
一个无限群的正规化子等于自身，理由是「它稳定的几何对象唯一」—— 这是旗簇方法的典型收益。

## 5. 旗簇的用处

- **把共轭问题变成轨道问题**：$B$ 的共轭类 $\leftrightarrow$ 旗，正规化子 $\leftrightarrow$ 唯一性，$N_G(B)=B$ 一眼可见。
- **给出 $B$-轨道的分层**：$B$ 在 $\mathcal F$ 上的轨道只有有限多个，标号正好是置换，这就是 [[代数III/概念/Bruhat分解|Bruhat 分解]]，标号群是 [[代数III/概念/Weyl群|Weyl 群]]。
- **一般图景**：在代数群理论中，Borel 子群指极大连通可解子群，旗簇 $G/B$ 是射影簇；本课只对 $\mathrm{GL}_n$ 验证了「上三角 $=$ 旗的稳定子」这一描述，未涉及极大可解性与射影性 [未查实]。

## 相关概念

- [[代数III/概念/群作用|群作用]] — 传递性 + 轨道-稳定子定理把旗簇写成 $G/B$
- [[代数III/概念/Bruhat分解|Bruhat 分解]] — $B$ 在旗簇上只有有限多个轨道
- [[代数III/概念/Weyl群|Weyl 群]] — 这些轨道的标号
- [[代数III/概念/经典群|经典群]] — $\mathrm{GL}_n$ 及其保持结构的子群
- [[代数III/概念/商群|商群]] — $\mathcal F\cong G/B$ 是商集的几何化
- [[代数III/概念/正规子群|正规子群]] — $N_G(B)=B$ 说明 $B$ 不是正规子群
