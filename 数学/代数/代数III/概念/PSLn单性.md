---
title: PSL_n 单性 (Simplicité de PSL_n)
created: 2026-10-19
updated: 2026-10-19
type: concept
tags: [group-theory, algebre, linear-groups, simplicity]
sources: [代数III 正课讲义第 8 讲]
confidence: high
---

# PSL_n 单性 (Simplicité de $\mathrm{PSL}_n$)

> [!question] 本页要回答什么？
> $\mathrm{SL}_n$ 有非平凡中心，永远不单。商掉中心得到的 $\mathrm{PSL}_n$ 却是单群，只有两个例外。为什么必须商中心？为什么恰好 $(n,K)=(2,\mathbb{F}_2),(2,\mathbb{F}_3)$ 例外？

$K$ 为域，$n\geq2$。

## 1. 为什么商掉中心

> [!note] 定义
> $$\mathrm{PGL}_n(K)=\mathrm{GL}_n(K)/K^\times\mathrm{Id},\qquad \mathrm{PSL}_n(K)=\mathrm{SL}_n(K)/Z(\mathrm{SL}_n)=\mathrm{SL}_n(K)/\mu_n(K)\mathrm{Id}.$$

动机是几何的：$\mathrm{GL}_n(K)$ 作用在射影空间 $\mathbb{P}(K^n)=(K^n\setminus\{0\})/K^\times$ 上，即作用在过原点的直线上。

> [!note] 引理（作用之核恰是标量）
> 若 $g\in\mathrm{GL}_n(K)$ 稳定每条直线，则 $g=\lambda\mathrm{Id}$。

**证明要点**：对一切 $v\neq0$，$gv$ 与 $v$ 共线。取线性无关的 $v,w$，写 $gv=\lambda v$、$gw=\mu w$；$g(v+w)$ 又必须与 $v+w$ 共线，比较系数得 $\lambda=\mu$，对一组基即得 $g=\lambda\mathrm{Id}$：关键是对**和**用一次条件，把各特征值粘成同一个数。

于是 $\mathrm{PGL}_n$、$\mathrm{PSL}_n$ 都忠实地嵌入 $\mathfrak{S}(\mathbb{P}(K^n))$：中心正是"看不出动了哪里"的那部分，这就是商掉中心的几何含义（中心计算见 [[代数III/概念/线性群与特殊线性群]]）。

> [!note] 命题
> $\mathrm{PSL}_n(K)$ 在 $\mathbb{P}(K^n)$ 上的作用是 2-重传递的（2-transitif）：任意两条不同直线可送到任意两条。

**证明要点**：两条不同直线给出线性无关的一对向量，用基的扩充定理（théorème de la base incomplète）把两对各补成基，唯一的线性映射把第一组基送到第二组；若行列式为 $d\neq1$，把第一个基向量的像改成 $\frac1d e'_1$，直线不变而行列式变 $1$。

## 2. 2-重传递给出的极大子群

> [!note] 命题
> 若 $G$ 在 $X$ 上 2-重传递，则每个点稳定子 $G_x$ 都是极大子群（sous-groupe maximal）。

**证明要点**：由传递性把 $X$ 认成 $G/G_x$。设 $G_x\subsetneq K\subsetneq G$，取 $k\in K\setminus G_x$、$g\in G\setminus K$；2-重传递给出 $u$ 同时固定 $x$ 并把 $kx$ 送到 $gx$，即 $u\in G_x\subset K$、$g^{-1}uk\in G_x\subset K$，故 $g\in K$，矛盾。

## 3. 单性定理与证明骨架

> [!note] 定理
> 除 $(n,K)=(2,\mathbb{F}_2)$、$(2,\mathbb{F}_3)$ 外，$\mathrm{PSL}_n(K)$ 是单群（simple）。

由[[代数III/概念/同构定理|子群对应定理]]，$\mathrm{PSL}_n$ 的正规子群对应 $\mathrm{SL}_n$ 中含 $Z(\mathrm{SL}_n)$ 的正规子群，故只需证：若 $Z(\mathrm{SL}_n)\subset N\triangleleft\mathrm{SL}_n$，则 $N=Z(\mathrm{SL}_n)$ 或 $N=\mathrm{SL}_n$。

**第一段（$N$ 稳定某直线 $D$）**。$\mathrm{SL}_n$ 在 $\mathbb{P}$ 上传递、$N$ 正规，故 $gNg^{-1}\subset\mathrm{Stab}(gD)$ 对一切 $g$ 成立，即 $N$ 稳定每条直线；由引理 $N$ 全由标量组成，$N\subset Z(\mathrm{SL}_n)$。

**第二段（$N$ 不稳定任何直线）**。取 $P=\mathrm{Stab}(Ke_1)$（即 $\mathrm{SL}_n$ 中的上三角矩阵），由 2-重传递与上一节，$P$ 极大。$N\not\subset P$，故 $PN\supsetneq P$，极大性给 $PN=\mathrm{SL}_n$。令
$$K=\langle E_{1j}(\lambda)\mid j\geq2,\ \lambda\in K\rangle\triangleleft P,$$
其中平延的位置互不相交，故 $K$ 交换。于是 $\pi(K)\triangleleft\pi(P)=\mathrm{SL}_n/N$ 交换，从而 $KN=\pi^{-1}(\pi(K))\triangleleft\mathrm{SL}_n$ 且含 $K$。正规性把 $K$ 的共轭全搬进 $KN$，而平延的单参数子群彼此共轭（见 [[代数III/概念/线性群与特殊线性群]]），故 $KN$ 含全部 $E_{ij}(\lambda)$，生成 $\mathrm{SL}_n$；于是 $\mathrm{SL}_n/N$ 交换，$\mathfrak{D}(\mathrm{SL}_n)\subset N$（[[代数III/概念/导群]]）。

**收尾**。定理的假设正是 $\mathfrak{D}(\mathrm{SL}_n)=\mathrm{SL}_n$，故 $N=\mathrm{SL}_n$。

> [!tip] 全场关键
> 两段落点完全不同：第一段纯几何（传递性 + 作用忠实），第二段纯代数（$P$ 极大 + $K$ 交换 + 平延共轭）。把它们缝起来的是完美性——没有 $\mathfrak{D}(\mathrm{SL}_n)=\mathrm{SL}_n$，第二段只能停在"$N$ 包含导群"。完美性失效的 $(n,K)$ 恰好就是单性失效的那两个：两条定理共用同一条换位子公式，例外自然重合。

## 4. 两个例外

> [!example] $n=2$，$K=\mathbb{F}_2$
> $|\mathrm{GL}_2(\mathbb{F}_2)|=6$，且 $\mathrm{GL}_2=\mathrm{SL}_2=\mathrm{PSL}_2\cong\mathfrak{S}_3$（$\mathbb{P}(\mathbb{F}_2^2)$ 只有 $3$ 个点）：非交换，但 $\mathfrak{A}_3$ 正规，故不单。

> [!example] $n=2$，$K=\mathbb{F}_3$
> $|\mathbb{P}(\mathbb{F}_3^2)|=\frac{3^2-1}{3-1}=4$，作用忠实，故 $\mathrm{PGL}_2(\mathbb{F}_3)\hookrightarrow\mathfrak{S}_4$；而 $|\mathrm{PGL}_2(\mathbb{F}_3)|=\frac{(3^2-1)(3^2-3)}{3-1}=24=|\mathfrak{S}_4|$，故 $\mathrm{PGL}_2(\mathbb{F}_3)\cong\mathfrak{S}_4$。$\mathrm{PSL}_2$ 在其中指数 $2$，而 $\mathfrak{S}_4$ 唯一的指数 $2$ 子群是 $\mathfrak{A}_4$，故 $\mathrm{PSL}_2(\mathbb{F}_3)\cong\mathfrak{A}_4$，不单。

> [!warning] 陷阱
>
> - 单的是 $\mathrm{PSL}_n$，不是 $\mathrm{SL}_n$（后者中心非平凡）。
> - $\mathrm{PGL}_n$ 一般也**不**单：$\mathrm{PGL}_n/\mathrm{PSL}_n\cong K^\times/(K^\times)^n$，$K=\mathbb{Q}$、$n=2$ 时这个商无限（平方类）。
> - 例外由 $(n,|K|)$ 决定，与特征无关：$\mathrm{PSL}_2(\mathbb{F}_4)$ 阶 $60$、按定理单，再由[[代数III/概念/A5单性与60阶群|60 阶单群唯一]]得 $\cong\mathfrak{A}_5$。

## 相关概念

- [[代数III/概念/线性群与特殊线性群]] — 中心、完美性、平延共轭：本页的三个输入
- [[代数III/概念/导群]]
- [[代数III/概念/群作用]]
- [[代数III/概念/A5单性与60阶群]]
- [[代数III/概念/正规子群]]
- [[代数III/概念/商群]]
