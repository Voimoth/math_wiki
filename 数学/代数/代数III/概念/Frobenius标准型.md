---
title: Frobenius 标准型（forme de Frobenius）
created: 2026-10-19
updated: 2026-10-22
type: concept
tags: [algebre, endomorphisme, frobenius, invariants-de-similitude, modules]
sources: [代数III 正课讲义]
confidence: high
---

# Frobenius 标准型 (forme de Frobenius)

本页讲**一般域**上的相似分类：不假设 $\chi_u$ 分裂、不用特征值。特征值全在域内、要读 Jordan 块大小的情形见 [[代数II/概念/Jordan标准型]]；两套不变量（初等因子与不变因子）的换算是同一套算术，见那里的块大小公式。

> [!question] 为什么 Jordan 型不够用
> Jordan 型要求 $\chi_u$ 在 $k$ 上分裂；实平面上的旋转没有实特征值，就写不出 Jordan 型，但「它与谁相似」仍有确定答案。答案要把特征值换成域上本来就有的多项式。

## 1. 循环子空间

> [!note] 定义（vecteur cyclique, polynôme minimal de $x$）
> $x\in E$ 是**循环向量**（vecteur cyclique），若 $\operatorname{Vect}\{u^k(x)\mid k\in\mathbb{N}\}=E$；有这种向量的 $u$ 称**循环自同态**（endomorphisme cyclique），稳定的 $F$ 若 $u|_F$ 循环则称**循环子空间**（sous-espace cyclique）。
> $$I_x=\{P\in k[X]\mid P(u)(x)=0\}=(\mu_x)$$
> 是 $k[X]$ 的非零理想，$\mu_x$ 首一，称为 $x$ 的极小多项式。总有 $\mu_x\mid\mu_u$；若 $r=\deg\mu_x$，则 $x,u(x),\dots,u^{r-1}(x)$ 线性无关，张成维数 $r$ 的循环子空间。

> [!tip] 想法：为什么循环块是可约化单位
> 循环子空间上 $u$ 被 $\mu_x$ 完全决定：链由 $x$ 的像给出，$u^r(x)$ 由 $\mu_x$ 的系数回代。一个循环块的全部信息就是一个多项式，而非一组特征值——Frobenius 型因此不挑域。

## 2. 伴侣矩阵

> [!note] 定义（matrice compagnon）
> 对首一 $P(X)=X^n+a_{n-1}X^{n-1}+\cdots+a_0$，
> $$C_P=\begin{pmatrix}0&&&-a_0\\1&\ddots&&-a_1\\&\ddots&\ddots&\vdots\\&&1&-a_{n-1}\end{pmatrix}\in M_n(k).$$
> 在基 $(x,u(x),\dots,u^{n-1}(x))$ 下 $u$ 的矩阵即 $C_{\mu_x}$。

> [!note] 命题
> $\chi_{C_P}=\mu_{C_P}=P$。

**Preuve :** 在基 $(\bar 1,\bar X,\dots,\bar X^{n-1})$ 下 $C_P$ 是 $k[X]/(P)$ 上乘 $X$ 的矩阵，故 $P(C_P)=0$，$\mu_{C_P}\mid P$。又 $e_2=C_Pe_1,\dots,e_n=C_P^{n-1}e_1$，$e_1$ 循环，$\deg\mu_{e_1}=n$；夹逼得三者相等。

## 3. 循环性判据

> [!note] 定理
> 存在 $x\in E$ 使 $\mu_x=\mu_u$；特别地 $u$ 循环 $\iff\mu_u=\chi_u$。

**Preuve :** 设 $\mu_u=\prod_iP_i^{\alpha_i}$。核引理给 $E=\bigoplus_i\ker P_i^{\alpha_i}(u)$，$u$ 在各分块上的极小多项式恰为 $P_i^{\alpha_i}$（否则降一格得到更小的零化多项式）。取 $x_i$ 使 $P_i^{\alpha_i-1}(u)(x_i)\neq0$，则 $\mu_{x_i}=P_i^{\alpha_i}$ 两两互素，故 $x=\sum_ix_i$ 有 $\mu_x=\mu_u$。若 $x$ 循环，$\deg\mu_x=n=\deg\chi_u$ 且 $\mu_x\mid\mu_u\mid\chi_u$，三者相等；反之 $\mu_x=\mu_u$ 的 $x$ 张成维数 $n$ 的循环子空间。

## 4. Frobenius 定理

> [!note] 定理（Frobenius）
> 设 $u\in\mathcal{L}(E)$，$\dim E=n$。存在首一多项式 $P_1,\dots,P_r$ 与 $u$-稳定子空间 $F_1,\dots,F_r$，使
> 1. $E=F_1\oplus\cdots\oplus F_r$；
> 2. $u|_{F_i}$ 循环，极小多项式为 $P_i$；
> 3. $P_r\mid P_{r-1}\mid\cdots\mid P_1$。
>
> $(P_1,\dots,P_r)$ 由 $u$ 唯一确定、与基无关，完全刻画其相似类。

> [!info] 定义与推论
> 这些 $P_i$ 称为**相似不变量**（invariants de similitude）或**不变因子**（facteurs invariants）。合适基下 $A\sim\operatorname{diag}(C_{P_1},\dots,C_{P_r})$，$\mu_u=P_1$、$\chi_u=P_1\cdots P_r$；$r=1$ 即循环情形。

> [!warning] 两种排法都对，看方向再引用
> 本页按**降序** $P_r\mid\cdots\mid P_1$ 排（$P_1=\mu_u$ 在最前）；习题课讲义（`笔记/习题课/12-循环分解与不变因子`）按**升序** $f_1\mid\cdots\mid f_r$ 排（$f_r=\mu_\varphi$ 在最后）。同一组多项式的两种写法，$P_i=f_{r+1-i}$。引用「不变因子」时先确认作者取的是哪一端。

**Preuve（存在性）:** 取 $P_1=\mu_u$ 与 $\mu_x=\mu_u$ 的 $x$，$F_1$ 为其循环子空间（$d=\deg P_1$）。把 $x,u(x),\dots,u^{d-1}(x)$ 补成基，取对偶基中最后一个线性型 $\varphi$；$\varphi,{}^{t}u\varphi,\dots,{}^{t}u^{d-1}\varphi$ 线性无关、张成 $G\subset E^*$，其零化子 $G^\circ$ 是 $u$-稳定的、维数 $n-d$、与 $F_1$ 交为 $0$。对 $G^\circ$ 归纳，由 $P_1=\mu_u$ 得 $P_i\mid P_1$。

**Preuve（唯一性）:** 两组分解逐块比较，$P_1=Q_1=\mu_u$。若前 $i-1$ 个相同，对 $P_i(u)(E)$ 用两种分解算维数，前面相消后只剩 $\sum_{j\ge i}\dim P_i(u)(G_j)=0$，故 $Q_i\mid P_i$；交换角色得 $P_i\mid Q_i$。

## 5. 与模论：$k[X]$-模结构定理

> [!tip] 想法
> 令 $P\cdot x=P(u)(x)$，则 $E$ 是 $k[X]$-模（见 [[代数III/概念/模]]）：稳定子空间即子模，循环子空间同构于 $k[X]/(\mu_x)$，Frobenius 分解写成
> $$E\cong k[X]/(P_1)\oplus\cdots\oplus k[X]/(P_r),\qquad P_r\mid\cdots\mid P_1,$$
> 正是主理想整环 $k[X]$ 上有限生成挠模的结构定理：「不变因子」之名由此而来。

> [!tip] 整除链是排法的产物，不是额外条件
> 结构定理的第一层只给**初等因子**：$E\cong\bigoplus k[X]/(P_i^{e_i})$，$P_i$ 不可约，这些不可约幂的多重集唯一。整除链 $P_r\mid\cdots\mid P_1$ 是把同一不可约因子的各次幂按列对齐（每列从上到下取同一层）后逐行相乘得到的，不是定理之外附加的要求。所以 Frobenius 型的唯一性完全来自结构定理，整除链只决定各块怎么排成一行行。

> [!warning] 域无关性落在哪一层
> 不变因子 $P_i$ 的系数在 $k$ 里，算法只用 $k[X]$ 的带余除法，扩域不改变它们；「把 $P_i$ 分解成不可约幂」这一步才依赖域。同一个 $X^2+1$ 在 $\mathbb{R}$ 上是一个不可约因子，在 $\mathbb{C}$ 上分裂成两列。于是初等因子随扩域而变，不变因子不变，相似性也不变。

## 6. 交换子（commutant）

> [!note] 定义与命题
> $\operatorname{Com}(u)=\{v\in\mathcal{L}(E)\mid uv=vu\}$，$k[u]=\{P(u)\mid P\in k[X]\}\subset\operatorname{Com}(u)$。则
> $$u\text{ 循环}\iff k[u]=\operatorname{Com}(u).$$

**Preuve :** 循环时 $v$ 由 $v(x)$ 决定且 $v(x)=P(u)(x)$（$\deg P<n$），故 $\operatorname{Com}(u)\subset k[u]$，维数同为 $n$。$r\ge2$ 时到 $F_1$ 的投影与 $u$ 交换，但 $P(u)|_{F_1}=\mathrm{Id}$ 迫使 $P(u)|_{F_2}=\mathrm{Id}$，故它不在 $k[u]$。

## 7. 子空间与商仍循环

> [!note] 命题
> $(V,\varphi)$ 循环，$W\subset V$ 是 $\varphi$-不变子空间，则 $(W,\varphi|_W)$ 与 $(V/W,\bar\varphi)$ 都循环。

**Preuve :** 设 $V\simeq k[X]/(g)$，$W$ 不变即 $W$ 是 $k[X]$-子模、即理想，故 $W=h\cdot k[X]/(g)\simeq k[X]/(g/h)$（$h\mid g$），由 $h$ 的像生成；商 $V/W\simeq k[X]/(h)$。与 Abel 群「循环群的子群、商群都循环」逐字对应——只是把 $\mathbb Z$ 换成 $k[X]$。

> [!warning] 逆命题不成立
> $W$ 与 $V/W$ 都循环推不出 $V$ 循环：$V=k^2$、$u=\mathrm{Id}$、$W$ 为任一坐标轴。补上「$\mu_{u|_W}$ 与 $\mu_{\bar u}$ 互素」才够——此时 $\deg\operatorname{lcm}=\deg\mu_{u|_W}+\deg\mu_{\bar u}=\dim V$，夹逼得 $\mu_u=\chi_u$。

## 8. 交换子的维数公式

> [!note] 命题
> 设 $u$ 的不变因子为 $P_1\mid\cdots\mid P_r$（降序），$v\in\mathcal L(F)$ 的不变因子为 $Q_1\mid\cdots\mid Q_s$。则
> $$\dim\{T\in\operatorname{Hom}_k(E,F)\mid Tu=vT\}=\sum_{i,j}\deg\gcd(P_i,Q_j).$$

**Preuve :** 条件是 $T$ 为 $k[X]$-模同态，而
$$\operatorname{Hom}_{k[X]}\bigl(k[X]/(P_i),k[X]/(Q_j)\bigr)\cong k[X]/\bigl(\gcd(P_i,Q_j)\bigr),$$
其 $k$-维数为 $\deg\gcd$。逐块相加。特例 $F=E$、$v=u$、$r=1$ 给 $\dim\operatorname{Com}(u)=\deg P_1=n$，即 $k[u]=\operatorname{Com}(u)$。

## 陷阱

> [!warning] 易错
> - $P_1$ 是极小多项式、$P_1\cdots P_r$ 是特征多项式，整除链最大的在前。
> - 不变因子的系数落在矩阵系数所在的**最小域**内，扩域不改变它们；故实矩阵在 $\mathbb{C}$ 上相似即在 $\mathbb{R}$ 上相似。
> - Frobenius 型不是 Jordan 型的另一种排法：它允许不可约高次因子，此时没有特征值可谈；$r$ 是循环块个数而非维数，允许 $P_i=P_{i+1}$。

## 相关概念

- [[代数II/概念/Jordan标准型]] — 分裂情形：把每个 $P_i$ 拆成一次因子幂
- [[代数II/概念/Jordan标准型]] — 特征值在域内时的对应物；块大小与不变因子互为换算
- [[代数III/概念/模]] — $k[X]$-模、挠模与 PID 结构定理
- [[代数III/概念/域上代数]] — $k[u]$ 是交换子代数

## 相关笔记

- [[09-Jordan与Frobenius|代数III · 09-Jordan与Frobenius]]
