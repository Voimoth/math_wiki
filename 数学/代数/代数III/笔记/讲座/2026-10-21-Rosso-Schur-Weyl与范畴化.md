---
title: Rosso 讲座 2026-10-21：对称群与一般线性群的交互（Schur-Weyl、Hecke、范畴化）
created: 2026-10-21
updated: 2026-10-21
type: notes
tags: [group-theory, representation, schur-weyl, hopf-algebra, lecture]
sources: [Marc Rosso 2026-10-21 讲座（五教 5106）手写笔记 6 页, 讲座海报摘要]
confidence: medium
---

# Rosso 讲座：Interplays between symmetric groups and general linear groups

> 时间 2026-10-21 16:00–17:00，五教 5106。讲者 Marc Rosso（Université Paris Cité）。
> 原题：*Interplays between symmetric groups and general linear groups: from classical to quantum, with a view towards categorification*。

## 0. 一句话版本

$\mathfrak{S}_n$ 和 $\mathrm{GL}_d$ 本来是两个不相干的群，但它们**同时作用在同一个张量空间 $(\mathbb C^d)^{\otimes n}$ 上，而且彼此恰好是对方的换位子**。把这件事按 $n$ 排成一列，就得到对称函数环；把它形变（把 $q$ 当参数），就得到 Hecke 代数与量子群。整场讲座是这条链的四个驿站。

## 1. 为什么这两个群会碰面

- 最表面的一层：置换矩阵给出嵌入 $\mathfrak{S}_n\subset \mathrm{GL}_n(k)$。但这不是重点——重点在于**维数 $n$ 与张量幂次数相同**只是巧合，真正的一般现象是下面这条。
- 取向量空间 $V=\mathbb C^d$，看 $n$ 重张量幂 $V^{\otimes n}$。两个群都自然地作用：
  - $\mathrm{GL}_d$ 逐个因子地作用：$g(v_1\otimes\cdots\otimes v_n)=gv_1\otimes\cdots\otimes gv_n$；
  - $\mathfrak{S}_n$ 替换因子的位置：$w(v_1\otimes\cdots\otimes v_n)=v_{w^{-1}(1)}\otimes\cdots\otimes v_{w^{-1}(n)}$。
- 两者**可交换**：先换位置再同时作用 = 先作用再换位置。所以它们落在同一个自同态代数的两个互相交换的子代数里。

> [!example] 最小例子：$d=2$、$n=2$
> $V\otimes V$ 有 4 维，分成两块：对称部分（维 3，$\mathrm{Sym}^2V$）与反对称部分（维 1，$\Lambda^2V$）。$\mathfrak{S}_2$ 的两个不可约表示（平凡、符号）恰好一个作用在一块上，$\mathrm{GL}_2$ 在 3 维与 1 维上各给一个不可约表示。**这就是 Schur-Weyl 对偶最简情形，没有任何多余结构。**

> [!note] 定理（Schur–Weyl，Schur 1927）
> $\mathrm{GL}_d$ 与 $\mathfrak{S}_n$ 在 $V^{\otimes n}$ 中的像互为换位子，且
> $$V^{\otimes n}\cong\bigoplus_{\lambda\vdash n,\ \ell(\lambda)\le d} V_\lambda\otimes W_\lambda,$$
> 每个 $\lambda$ 一个因子、每个因子上的两个群各作用一个不可约表示（$V_\lambda$ 属于 $\mathfrak{S}_n$ 的 Specht 模，$W_\lambda$ 属于 $\mathrm{GL}_d$ 的最高权模）。

讲座笔记里把两个因子的归属写反过一次（$V_\lambda$ 标成 $\mathrm{GL}_d$、$W_\lambda$ 标成 $\mathfrak{S}_n$），不影响结论；标准记法是 $\mathfrak{S}_n$ 用 Specht 模 $S^\lambda$、$\mathrm{GL}_d$ 用 $V_\lambda$（Schur 函子）。[?] 笔记原页码 3。

## 2. 经典部分：Bruhat 分解与 Hecke 代数（笔记第 1–2 页）

讲者的第二条线是"用 $B$ 双不变函数把 $\mathrm{GL}_n(\mathbb F_q)$ 压缩成一个有限维代数"：

1. $\mathrm{GL}_n(k)=B\mathfrak{S}_n U$（Bruhat 分解，$B$ 上三角、$U$ 幺幂上三角）。于是 $\mathrm{GL}_n(k)$ 被 $\mathfrak{S}_n$ 的 $| \mathfrak{S}_n|=n!$ 个双陪集 $BwB$ 切成片。
2. 取双 $B$-不变函数
$$\mathcal H_n=\{f:\mathrm{GL}_n(k)\to k: f(bgb')=f(g),\ \forall b,b'\in B,\ g\in \mathrm{GL}_n(k)\},$$
在卷积下成代数；$T_w$ 取 $BwB$ 的特征函数，构成基。
3. 当 $k=\mathbb F_p$（更一般 $q=p^r$）时，$\mathcal H_n$ 由 $T_i:=T_{s_i}$（$s_i=(i\ i+1)$）生成，关系为
$$T_i^2=(q-1)T_i+q,\qquad T_iT_j=T_jT_i\ (|i-j|\ge2),\qquad T_iT_{i+1}T_i=T_{i+1}T_iT_{i+1}.$$
这正是 **Iwahori–Matsumoto 生成元与关系**；$q=1$ 时退回 $\mathfrak{S}_n$ 的群代数（$T_i^2=T_i$，$T_i\leftrightarrow s_i$）。

> [!tip] 为什么这一步重要
> 它把"$\mathrm{GL}_n(\mathbb F_q)$ 的双边不变量"变成一个只依赖 $\mathfrak{S}_n$ 的**组合**对象：换 $q$ 只改一条关系。于是同一个代数框架里可以同时容纳"置换群"（$q=1$）与"有限域上的矩阵群"（$q=p^r$），后面的量子化只是允许 $q$ 取任意参数甚至形式变量。

## 3. 对称函数：把分解数据写成生成函数（笔记第 3–5 页）

Schur-Weyl 分解里出现的是**分拆** $\lambda\vdash n$，所以自然的记账本是对称函数环：

- 变元 $x=(x_1,x_2,\dots)$，$\Lambda(x)$ = 有界次数的对称形式幂级数（对称 = 在 $\mathfrak{S}_\infty$ 的换元下不变）。
- 两组基：单项对称函数 $m_\lambda=\sum_{\alpha\sim\lambda}x^\alpha$；Schur 函数
$$s_\lambda=\frac{\det\left(x_i^{\lambda_j+d-j}\right)}{\det\left(x_i^{d-j}\right)}$$
（$d$ 足够大；令 $x_{n+1}=x_{n+2}=\cdots=0$ 就退回 $\mathrm{GL}_n$ 的 Schur 多项式，即最高权 $\lambda$ 的表示的特征标）。
- 乘法：$s_\lambda s_\mu=\sum_\nu c_{\lambda\mu}^\nu s_\nu$，$c_{\lambda\mu}^\nu$ 是 Littlewood–Richardson 系数（非负整数）。
- 余乘（comultiplication）：把变量分成两组 $x$ 与 $y$，
$$\Delta m_\lambda=\sum_{\mu\sqcup\nu=\lambda}m_\mu\otimes m_\nu,\qquad \Delta s_\nu=\sum_{\lambda,\mu}c_{\lambda\mu}^\nu\,s_\lambda\otimes s_\mu .$$
- 内积：使 $\{s_\lambda\}$ 成为正交归一基（Hall 内积）。

> [!tip] 为什么需要"余乘"
> 这不是为了形式好看：$s_\lambda$ 是 $\mathrm{GL}$ 的不可约特征标，而**两个表示的张量积的特征标 = 两个特征标之积**，所以"乘法"天然对应张量积；反过来"余乘"对应把一个表示**限制**到 $\mathrm{GL}_i\times \mathrm{GL}_j$ 再分解。Hopf 代数就是把"乘 + 余乘 + 单位 + 余单位 + 对极"打包，使"张量积表示"这件事成为代数内部的结构（见 [[Hopf代数]]）。

## 4. 范畴化：环 = 表示范畴的 Grothendieck 群（笔记第 5–6 页）

讲者给 $\Lambda(x)$ 一个"具体实现"：

- 考虑链 $\mathfrak{S}_1\subset\mathfrak{S}_2\subset\cdots$，以及 $\mathfrak{S}_i\times\mathfrak{S}_j\hookrightarrow\mathfrak{S}_{i+j}$。
- 令 $A=\bigoplus_{j\ge0}R[\mathfrak{S}_j]$，其中 $R[\mathfrak{S}_j]$ 是 $\mathfrak{S}_j$ 的有限维表示的 Grothendieck 群（形式上：同构类生成的自由 Abel 群，模掉短正合列）。
- **诱导**给出乘法 $R[\mathfrak{S}_i]\otimes R[\mathfrak{S}_j]\to R[\mathfrak{S}_{i+j}]$；
- **限制**给出余乘 $R[\mathfrak{S}_n]\to\bigoplus_{i+j=n}R[\mathfrak{S}_i]\otimes R[\mathfrak{S}_j]$。

> [!note] 定理（Hall 代数 / 对称函数的范畴化）
> 存在 Hopf 代数同构 $A\cong\Lambda(x)$：$s_\lambda\mapsto$ Specht 模 $S^\lambda$ 的类，$h_n\mapsto$ 平凡表示的诱导，$e_n\mapsto$ 符号表示的诱导。(*两个初等/完全对称函数与两种一维表示的配对按标准约定写；讲座笔记只写了 $e_n$，未标对应哪个表示。[?]*)

这就是摘要里那句"这是范畴化的第一个例子"的含义：**一个看起来只关于多项式的环，其实是某个表示范畴的 K 群；环里的乘法/余乘不是定义的，而是"诱导/限制"这两个函子的影子**。把环"范畴化"= 把等式换成函子、把系数换成维数。

## 5. 量子化：把 $q$ 放进去（笔记第 6 页）

最后一步是把第 2 节的 $q$ 从"有限域的基数"升级成自由参数：

- Hecke 代数 $\mathcal H_q(\mathfrak{S}_n)$ 作用在每个 $(\mathbb C^d)^{\otimes n}$ 上，$T_i$ 在相邻两个因子上作用（$s_i=(i\ i+1)$）：
$$T_i(e_k\otimes e_l)=\begin{cases}q\,e_k\otimes e_l,&k=l,\\ e_l\otimes e_k,&k>l,\\ e_l\otimes e_k+(q-q^{-1})\,e_k\otimes e_l,&k<l.\end{cases}$$
(*第三支的符号与系数按标准写法补全；笔记原式辨认不清。[?]*）
- 相应地有 $\mathrm{GL}_d$ 的"形变" $U_q(\mathfrak{gl}_d)$（量子群，Jimbo/Drinfeld，1980 年代），它带 Hopf 代数结构、在 $\mathbb C^d$ 上"像经典情形一样"作用，但余乘非平凡：$\Delta:V_q\to V_q\otimes V_q$ 不再是对称的。
- 结论：$\mathcal H_q(\mathfrak{S}_n)$ 与 $U_q(\mathfrak{gl}_d)$ 在 $(\mathbb C^d)^{\otimes n}$ 上仍互为换位子——**量子 Schur-Weyl 对偶**。$q\to1$ 时全部退回第 1–4 节。

## 6. 六页笔记里没展开、但你可能会问的

- 为什么 $T_i^2=(q-1)T_i+q$ 而不是像置换那样 $T_i^2=1$？因为 $T_i$ 不是对换本身，而是"$B s_i B$ 的特征函数"，而双陪集 $Bs_iB$ 的卷积自带一个"对角线上的额外权重"$q$。$q=1$ 时这个权重退化成 1。
- "最高权"是什么？$\mathrm{GL}_d$ 的不可约表示由对角子群上的权（$\mathbb Z^d$ 里的向量）标定；一个最高权 $\lambda$ 对应一个"最重的"权向量，其余权由它往下走。分拆 $\lambda\vdash n$ 恰好可以读成一个递减的权 $\lambda_1\ge\cdots\ge\lambda_d$。
- 范畴化是什么意思？把"数"换成"空间/范畴"，把"等式"换成"自然同构/函子"：$\Lambda$ 的乘法不是一条公式，而是诱导函子 $R[\mathfrak{S}_i]\times R[\mathfrak{S}_j]\to R[\mathfrak{S}_{i+j}]$。

## 7. 术语表（第一次见时按此对照）

| 术语 | 一句话 |
|---|---|
| Schur-Weyl 对偶 | $V^{\otimes n}$ 上 $\mathfrak{S}_n$ 与 $\mathrm{GL}_d$ 的作用互为换位子，张量幂按分拆分解 |
| Bruhat 分解 | $\mathrm{GL}_n(k)=B\mathfrak{S}_nU$：双边按 $n!$ 个双陪集分片 |
| Hecke 代数 | 双 $B$-不变函数在卷积下的代数，由 $T_i$ 与 Iwahori 关系生成 |
| 对称函数 | 无穷多个变元上的对称形式幂级数，基 $m_\lambda$、$s_\lambda$ |
| 余乘 $\Delta$ | 代数到张量积的代数的同态，编码"张量积表示" |
| Hopf 代数 | 带乘、余乘、单位、余单位、对极的代数；群代数与 $U_q(\mathfrak g)$ 都是 |
| 范畴化 | 把环解释成某个范畴的 Grothendieck 群，乘/余乘 = 诱导/限制 |

## 相关概念

- [[Schur-Weyl对偶]]
- [[Hopf代数]]
- [[代数III/概念/对称群]]
- [[代数III/概念/特征标与正交关系]]
- [[代数III/概念/经典群]]
- [[代数III/概念/Bruhat分解]]
- [[代数III/概念/Frobenius标准型]]
