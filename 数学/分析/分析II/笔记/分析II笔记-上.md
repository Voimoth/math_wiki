---
title: 分析II笔记(上)
created: 2026-10-03
updated: 2026-10-03
type: notes
tags: [analysis, analysis-II, normed-space, topology, uniform-convergence, zh]
sources: [分析II(1).pdf]
confidence: high
---

# 分析II 笔记(上):赋范向量空间、连续与一致收敛

> 教材:殷浩《分析 2》上册。本章记 $K$ 表示 $\mathbb R$ 或 $\mathbb C$，一开始不限定有限维。

## 1. 赋范向量空间

### 1.1 一般内容

#### 1.1.1 定义和例子

> [!note] Déf. 1.1（范数，norme）
> 给定 $K$ 向量空间 $E$，$E$ 上的一个**范数**是映射 $N:E\to\mathbb R_+$，满足
> - （齐次性）$\forall(\lambda,x)\in K\times E,\ N(\lambda x)=|\lambda|N(x)$；
> - （三角不等式）$\forall(x,y)\in E^2,\ N(x+y)\le N(x)+N(y)$；
> - （分离性）$\forall x\in E,\ (N(x)=0)\Rightarrow(x=0)$。
> 范数的意义是测量大小。三角不等式最重要，它基本上说三角形两边之和大于第三边；由齐次性还有 $N(0)=0$，以及 $\bigl|N(x)-N(y)\bigr|\le N(x+y)\le N(x)+N(y)$。

> [!note] Déf. 1.2（赋范向量空间，espace vectoriel normé）
> 向量空间 $E$ 带上一个范数 $N$ 称为**赋范向量空间**，记为 $(E,N)$。范数常记为 $\|\cdot\|$，故也写 $(E,\|\cdot\|)$。（英文 normed vector space，缩写 NVS；法语缩写 evn。）

> [!example] 1.3
> - $\mathbb R,\mathbb C$ 配上绝对值就是赋范向量空间。
> - 在 $K^n$ 上定义 $\|x\|_\infty:=\max(|x_1|,\dots,|x_n|)$、$\|x\|_1:=\sum_{i=1}^n|x_i|$。
> - 在 $K^n$ 上定义 $\|x\|_2=\sqrt{|x_1|^2+\cdots+|x_n|^2}$。
> - 内积空间（预 Hilbert 空间，préhilbertien）上的欧氏范数（norme euclidienne）$\|x\|_2:=\sqrt{\langle x,x\rangle}$。
> - 在 $K^n$ 上定义 $\|x\|_p$（$p\ge1$）。为此需要 Minkowski 不等式
> $$\left(\sum_{i=1}^n|a_i+b_i|^p\right)^{1/p}\le\left(\sum_{i=1}^n|a_i|^p\right)^{1/p}+\left(\sum_{i=1}^n|b_i|^p\right)^{1/p}.$$
> 同一个空间上可以有很多不一样的范数,即不同的「大小」观念。

> [!example] 1.4
> 设 $I$ 是有界闭区间，$C^0(I,\mathbb R)$ 上的范数 $\|f\|:=\max_{t\in I}|f|$。

> [!example] 1.5
> 设 $I$ 是有界闭区间，$C^0(I)$ 上 $\|f\|:=\int_I|f|$；对 $p>1$，$\|f\|_p:=\left(\int_I|f|^p\right)^{1/p}$。
> **陷阱**：用积分定义范数要小心。上面故意选连续函数空间；若是黎曼可积函数空间，会有函数范数为 0 而函数本身不是零函数。

> [!example] 1.6
> 设 $I$ 是有界闭区间，$C^1(I,\mathbb R)$ 上的范数 $\|f\|:=\sup_{t\in I}|f|+|f'|$。

> [!info] Rem. 1.7
> 以上例子需要有界闭区间，范数才是有限数。直接在 $C^0(\mathbb R,\mathbb R)$ 上照搬不行，只能限制在所有有界连续函数上。

稍微深入一点的话题(自己考虑):三角不等式也许可以取到等号,研究例子;集合 $\{x\in E:\|x\|<1\}$ 是凸集,反过来在合适意义下一个对称的原点的开凸邻域就决定了一个范数。

> [!note] 补充:从凸集构造范数——Minkowski 泛函
> 设 $V$ 为实向量空间。称 $C\subset V$ 为**容许集**（admissible set），若
> - 凸性：$x,y\in C,t\in[0,1]\Rightarrow tx+(1-t)y\in C$；
> - 平衡性：$x\in C,|\lambda|\le1\Rightarrow\lambda x\in C$；
> - 吸收性：$\forall x\in V,\exists t>0,\ x\in tC$；
> - 有界性：$C$ 不含过原点的非平凡直线。
> 定义 $\|x\|_C:=\inf\{t>0:x\in tC\}$，称为关于 $C$ 的 Minkowski 泛函（functional）或规范函数（gauge function）。由吸收性它良定义且有限；验证它是范数留作习题。这个对应不是简单的一一对应:开单位球与闭单位球对应同一个范数。

#### 1.1.2 范数决定的距离

暂时不引入抽象距离空间，只说赋范向量空间上的距离函数 $d:E\times E\to\mathbb R_+$，$d(x,y):=\|y-x\|$。它满足
- $d(x,y)=d(y,x)$；
- $d(x,y)\ge0$，取等当且仅当 $x=y$；
- $d(x,y)+d(y,z)\ge d(x,z)$。

配置这个距离，就真的「三角形两边之和大于第三边」了。法国书上有句有趣的注意:在抽象的赋范向量空间中，说两点之间线段最短——un plus court chemin entre deux points est la ligne droite(思考题:为什么用不定冠词?)。还有一条叫**平移不变性**:$d(x,y)=d(x+z,y+z)$，它只对赋范向量空间的距离有意义。

> [!note] Déf. 1.8
> 给定非空 $A\subset E$ 与 $x\in E$，$x$ 到 $A$ 的距离 $d(x,A)=\inf\{d(x,a):a\in A\}$；推广到 $A,B\subset E$，$d(A,B)=\inf\{d(a,b):a\in A,b\in B\}$。
> **陷阱**：这不是传统的距离函数，$d(A,B)=0$ 不表示 $A=B$，更没有 $d(A,B)+d(B,C)\ge d(A,C)$。（真的集合间距离可搜 Hausdorff 距离。）

> [!example] 1.9
> 在 $\mathbb R^2$ 中设 $x=(-1,1)$，$A$ 是直线 $y=2x$。对 $\|\cdot\|_1,\|\cdot\|_2,\|\cdot\|_\infty$ 分别计算 $x$ 到 $A$ 的距离，进而说明距离概念也依赖范数的选择。

#### 1.1.3 开球，闭球

> [!note] Déf. 1.10
> 设 $a\in E$，$r>0$。
> - 以 $a$ 为中心、$r$ 为半径的开球 $B(a,r)=\{x\in E:d(a,x)<r\}$；
> - 闭球 $B_f(a,r)=\{x\in E:d(a,x)\le r\}$；
> - sphère（球面）$S(a,r)=\{x\in E:d(a,x)=r\}$。
> 开球与闭球都是凸集（验证）。因为范数选择很多，球可能不「圆」，尤其在无穷维空间里。

> [!example] 1.11
> 在 $\mathbb R^2$ 上画出对应 $1,2,\infty$ 范数的「球」。

#### 1.1.4 有界集合，有界映射

> [!note] Déf. 1.12
> $E$ 的子集 $A$ 称为**有界**，若存在正实数 $R$ 使 $\forall a\in A,\|a\|\le R$。有界集必含在一个以原点为中心的巨球中，且 $\sup\{d(x,y):(x,y)\in A^2\}$ 有限，称为 $A$ 的**直径**（最远两点的距离；这里取 sup，不一定取到）。

> [!note] Déf. 1.13
> 映射 $f:X\to E$ 称为**有界**，若 $f(X)$ 是 $E$ 的有界部分，等价地 $\exists M\in\mathbb R_+,\forall x\in X,\|f(x)\|\le M$。
> 有界映射全体记为 $B(X,E)$，它是全体函数空间 $F(X,E)$ 的一个线性子空间。（自己定义什么叫点列 $(x_n)$ 有界。）

#### 1.1.5 赋范向量空间的例子

回忆 $K^n$ 上的范数 $\|x\|_\infty=\max(|x_1|,\dots,|x_n|)$、$\|x\|_1=|x_1|+\cdots+|x_n|$、$\|x\|_p=(|x_1|^p+\cdots+|x_n|^p)^{1/p}$（$p>1$）；通融一下，前两行可理解为 $p=\infty$ 与 $p=1$。

抽象有限维 $K$ 空间上也可以定基后定义这些范数，但要注意这样定义的范数与基的选择有关。无穷维空间的例子多半以前讲过:$B(X,K)$ 上的 $N_\infty$ 范数；$C([0,1],\mathbb R)$ 上的 $\|f\|=\sup_{[0,1]}|f|$、$\|f\|_1=\int_0^1|f|$、$\|f\|_p=(\int_0^1|f|^p)^{1/p}$ 等等。

> [!example] 1.14
> $K_n[X]$ 表示次数不超过 $n$ 的多项式，取 $n+1$ 个两两不同的点 $a_1,\dots,a_{n+1}$。证明 $\|P\|=\max\{|P(a_1)|,\dots,|P(a_{n+1})|\}$ 是范数。

关于范数等价性:（1）应证明有常数 $C(p,q)$ 使 $C(p,q)\|x\|_p\le\|x\|_q\le C(p,q)^{-1}\|x\|_p$，此时称两范数**等价**（考虑球的问题），以后会发现在 $K^n$ 上有必然性；（2）无穷维需看不等价的例子，如 $I=[a,b]$ 上连续函数 $C(I,K)$ 的 $N_1(f)=\int_a^b|f|$ 与 $N_2(f)=(\int_a^b|f|^2)^{1/2}$。自行定义 $N_p$ 并研究不同 $p$ 是否等价；至少能看出 $N_1$ 与 $N_\infty$ 不等价。

#### 1.1.6 构造新的赋范向量空间

**方法一:子空间诱导范数。** $(E,\|\cdot\|)$ 是 NVS、$F$ 是线性子空间时 $(F,\|\cdot\|)$ 是 NVS。

**方法二:用一个线性单射。** $u:F\to E$ 线性单射、$E$ 有范数 $\|\cdot\|$，则 $N(x)=\|u(x)\|$ 是 $F$ 上的范数（验证略）。

> [!example] 1.15
> 1. 子空间诱导是这里的特例。
> 2. $E=C([a,b],\mathbb R)$ 配 $\|\cdot\|_1$，$\omega:[a,b]\to\mathbb R$ 连续严格正，$u(f)=\omega f$；由单射方法得范数 $N(f)=\int_a^b\omega(x)|f(x)|dx$（也可直接验证）。

> [!example] 1.16
> 所有有界数列 $E=B(\mathbb N,K)$ 上，$N(u)=\sup_{n\in\mathbb N}\frac{|u_n|}{2^n}$ 是范数。

**方法三:有限乘积。**

> [!note] Prop. 1.17
> 设 $(E_1,\varphi_1),\dots,(E_p,\varphi_p)$ 是 $p$ 个 NVS，则
> $$\varphi:E_1\times\cdots\times E_p\to\mathbb R_+,\quad (x_1,\dots,x_p)\mapsto\max(\varphi_1(x_1),\dots,\varphi_p(x_p))$$
> 是乘积空间上的范数（norme produit）。它类似 $K^n$ 上 $\|\cdot\|_\infty$ 的感觉。（习题:自行定义 $\|\cdot\|_p$ 并证明这些范数等价。）

**方法四:** $(E,\|\cdot\|)$ 是 NVS，$E^*=\{\varphi:E\to\mathbb R:\varphi\ \text{线性}\}$ 是线性空间，对 $\varphi\in E^*$ 令 $\|\varphi\|:=\sup_{v\in E,\|v\|\le1}|\varphi(v)|$。可以验证它满足三角不等式，但定义本身可能是无穷，故不良好:（1）$E$ 有限维时可以证明不会是无穷，于是定义了有限维 NVS 的对偶 NVS；（2）无穷维只能改为 $E^*=\{\varphi:E\to\mathbb R:\varphi\ \text{有界线性}\}$，其中有界指 $\sup_{\|v\|\le1,v\in E}\varphi(v)<+\infty$。

### 1.2 赋范向量空间中的序列

本节内容本质上还是数列,只是叫「点列」更合适。总假设 $E$ 是 NVS。

#### 1.2.1 收敛序列

（定义）点列收敛、极限唯一性、点列的极限；不收敛叫发散。（性质）收敛点列的线性组合收敛；收敛点列的模（数列）收敛，进而收敛点列必有界。

> [!example] 1.18
> $C([0,1],\mathbb R)$ 上有两个范数 $N_1$ 与 $N_\infty$。设 $f_n(x)=x^n$，证明 $f_n$ 在 $N_1$ 下收敛于 $0$，但在 $N_\infty$ 下不收敛。这很正常:不同范数本质上应理解为 $(E,N_1)$ 与 $(E,N_2)$ 是不同的赋范向量空间，点列性质不同很正常。

乘积空间中的点列。设 $(E_1,\|\cdot\|_1),\dots,(E_p,\|\cdot\|_p)$，约定乘积空间的范数为 $\|(x_1,\dots,x_p)\|=\max(\|x_1\|_1,\dots,\|x_p\|_p)$。

> [!note] Prop. 1.19
> 通项为 $(a_n^{(1)},\dots,a_n^{(p)})$ 的点列收敛，当且仅当每个 $k$ 通项为 $a_n^{(k)}$ 的点列收敛。且若 $a_n^{(k)}\to l_k$，则原点列收敛于 $(l_1,\dots,l_p)$。

#### 1.2.2 子列、附着值

（定义）子列。（性质）收敛序列的所有子列收敛于同一极限。（定义）一个序列的**附着值**定义为某个子列的极限。一个序列的附着值可能不止一个；但如果只有一个，数列一定收敛吗?(未必)

#### 1.2.3 比较关系

本节只给定义:两个点列 $a,b$ 如何定义 $a=O(b)$ 与 $a=o(b)$（用 $\varepsilon$-$N$ 语言）。注意这里 $a,b$ 是 NVS 中的点列、点之间不能比较大小，比较是各自范数的比较，对方向完全没有约束。

### 1.3 赋范向量空间的拓扑

在学习抽象拓扑空间之前，用赋范向量空间的拓扑过渡一下。理解拓扑时可以心里想着 $\mathbb R^n$。

#### 1.3.1 开集

> [!note] Déf. 1.20
> $E$ 的子集 $U$ 称为 $E$ 的**开集**（在 $E$ 中开），如果以下两个等价命题成立:
> (1) $\forall x\in U,\exists r>0,\ B(x,r)\subset U$；(2) $\forall x\in U,\exists r>0,\ B_f(x,r)\subset U$。
> 空集也是开集,这是一个逻辑的 trick。（性质）所有开球都是开集。

> [!example] 1.21
> 证明:在 $\mathbb R$ 中 $(a,b)$ 是开集；在 $\mathbb C$ 中 $(a,b)\subset\mathbb R$ 不是。

> [!note] Prop. 1.22
> - 任意多个（甚至不可数）开集的并是开集；
> - 有限多个开集的交是开集。
> 这里「有限」是重要的（应举例说明）。

> [!example] 1.23
> 证明 $E$ 中任何开集都可以写成开球的并。注意:甚至不能要求可数多个。

#### 1.3.2 闭集

> [!note] Déf. 1.24
> $E$ 的子集称为**闭集**（在 $E$ 中闭），如果它的补集是开集。由定义知空集和全空间都是闭集（也都是开集）。

> [!example] 1.25
> $(-\infty,1]$ 是 $\mathbb R$ 中的闭集。（性质）所有闭球都是闭集。

> [!note] Prop. 1.26
> - 任意多个闭集的交是闭集；
> - 有限多个闭集的并是闭集。
> 需要举例说明「有限」的重要性:可以有开集可数交之后变成闭集,可以有闭集可数并之后变成开集。

> [!note] Lemma 1.27
> 设 $F$ 在 $E$ 中闭且 $x\notin F$，则 $d(x,F)$ 严格正。（对开集不对。）

> [!note] Lemma 1.28
> 任何 $E$ 中的 (1) 开集一定可以写成可数多个闭集的并；(2) 闭集一定可以写成可数多个开集的交。

最后强调:更多的集合既不是开集也不是闭集。

#### 1.3.3 一点处的邻域

> [!note] Déf. 1.29
> 给定 $A\subset E$ 与 $a\in E$，称 $A$ 是 $a$ 的**邻域**（voisinage），若存在 $r>0$ 使 $B(a,r)\subset A$。直观上表达「附近」。有距离时这个概念不重要（总能用距离函数表达同样的意思）；抽象到拓扑空间后它更有意义。

> [!example] 1.30 / 1.31
> 开集是其内任何点的邻域。$A$ 是 $a$ 的邻域当且仅当存在含 $a$ 的开集含于 $A$。

> [!note] Prop. 1.32
> - $x$ 的有限多个邻域之交仍是 $x$ 的邻域；
> - 若 $A$ 是 $x$ 的邻域，则任何包含 $A$ 的 $E$ 的子集也是 $x$ 的邻域。

#### 1.3.4 内点，集合的内部

> [!note] Déf. 1.33
> 点 $x$ 在 $A\subset E$ 的**内部**（$x$ 是 $A$ 的**内点**），若 $A$ 是 $x$ 的邻域，即存在 $r>0$ 使 $B(x,r)\subset A$。所有内点的全体称为 $A$ 的内部，记 $A^\circ$ 或 $\operatorname{Int}(A)$。
> 小性质（需熟练掌握）:开集是自己的内部；$x$ 是有限个集合的内点当且仅当是它们交的内点；$A\subset B\Rightarrow\operatorname{Int}(A)\subset\operatorname{Int}(B)$；$A$ 的内部是包含在 $A$ 中的最大开集；$A$ 是开集当且仅当 $A=A^\circ$。

#### 1.3.5 附着点、附着点集

> [!note] Déf. 1.34
> $x$ 是集合 $A\subset E$ 的**附着点**（$x$ 附着于 $A$），若对任何 $r>0$ 有 $B(x,r)\cap A\ne\varnothing$。所有附着点构成 $A$ 的**附着集**（更常叫**闭包**），记 $\bar A$ 或 $\operatorname{Adh}(A)$。附着点既可在 $A$ 中也可在 $A$ 外。
> 初等命题难以穷尽:任何 $A$ 有 $A\subset\bar A$；$\overline{E\setminus A}=\operatorname{Int}(E\setminus A)$；$\bar A=E\setminus\operatorname{Int}(E\setminus A)$；$\operatorname{Int}(A)=E\setminus\operatorname{Adh}(E\setminus A)$；$\bar A$ 永远是闭集，且是包含 $A$ 的所有闭集中最小的；$\bar A$ 是所有包含 $A$ 的闭集之交；$A$ 是闭集当且仅当 $A=\bar A$。以上将来在抽象拓扑空间中也对。下面的性质用到距离，只对距离空间（当然 NVS）成立。

> [!note] Prop. 1.35
> 设 $A$ 是 $E$ 的非空子集，则 $x\in\bar A\iff d(x,A)=0$。

> [!note] Prop. 1.36（附着点的序列刻画）
> 点 $x$ 是 $A$ 的附着点，当且仅当存在 $A$ 中点的序列收敛于 $x$。

**Preuve :** 若 $x$ 是附着点，对每个 $n\in\mathbb N$，在 $B(x,1/n)$ 中至少有一个 $A$ 中的点,取它为 $a_n$（严格地可对每个 $n$ 用 $B(x,1/n)\cap A\ne\varnothing$ 归纳选取；这些 $a_n$ 有重复甚至恒同一点也不影响结论）。反过来若有 $a_n\to x$，直接用定义。

> [!example] 1.37
> $E$ 是 NVS、$A$ 是线性子空间，则 $\bar A$ 也是（收敛点列的线性组合仍收敛）。将来会看见:若 $E$ 有限维，这句话没有意思,因为 $\bar A=A$。

> [!example] 1.38
> 设 $(u_n)$ 是 $E$ 中的点列，对任何 $p\in\mathbb N$ 定义 $A_p=\{u_n:n\ge p\}$。证明点列 $(u_n)$ 的附着值集合是 $\bigcap_{p\in\mathbb N}\bar A_p$。

**Preuve :** (1) 若 $x$ 是附着值，有子列 $u_{n_k}\to x$，于是对任何 $p$ 有 $x\in\bar A_p$，进而在交中。(2) 若 $x\in\bigcap_p\bar A_p$，对任何 $p$ 有 $x_p\in A_p$ 使 $d(x,x_p)<1/p$；这个 $x_p$ 对应 $n_p>p$ 使 $x_p=u_{n_p}$，故 $u_{n_p}\to x$。还可要求 $n_p$ 严格递增:先任取 $n_0$，再递归要求 $n_p>\max(n_{p-1},p)$ 且 $d(x,u_{n_p})<1/p$。

> [!note] Prop. 1.39（闭集的序列刻画）
> $A$ 是闭集，当且仅当 $A$ 中收敛点列的极限还在 $A$ 中。后半句的理解是:有极限是假设，极限在 $A$ 中是结论。这解释了「闭包」的由来,意思是对序列极限运算封闭。

> [!note] Déf. 1.40
> $D\subset A$ 称为在 $A$ 中**稠密**，如果以下三个等价条件之一成立:
> (1) $\bar D\supset A$；(2) $\forall a\in A,\forall r>0,\exists x\in D,\|x-a\|\le r$；(3) $\forall a\in A$ 存在 $D$ 中点列收敛于 $a$。

> [!example] 1.41
> $GL_n(K)$ 在 $M_n(K)$ 中稠密（$M_n(K)$ 上范数不少，以后会证明等价，现在随便取一个）。可用 $det(A+\epsilon I)$ 是 $\epsilon$ 的 $n$ 次多项式、最多 $n$ 个零点，故一定有 $\epsilon_i\to0$ 使其非零。

> [!example] 1.42
> 阶梯函数 $E([a,b],K)$ 在 $C([a,b],K)$ 中（关于 $\|\cdot\|_\infty$）稠密,本质上就是以前学过的定理的包装。书上还说:将要证明多项式全体（$C([a,b],K)$ 的子空间）在 $C([a,b],K)$ 配 $\|\cdot\|_\infty$ 时稠密。

> [!info] 注记
> 教材定义开集、闭集、闭包等概念时首推小球语言，随后又给出「点列刻画」，实际上是等价定义。喜欢用哪个随意。

#### 1.3.6 边界 (Frontière)

> [!note] Déf. 1.43
> 设 $A\subset E$，$A$ 的**边界**记 $\operatorname{Fr}(A)$（更常见 $\partial A$），定义为 $\operatorname{Fr}(A)=\bar A\setminus A^\circ$。
> 等价性质:$x\in\operatorname{Fr}(A)$ 当且仅当对任何 $r>0$，$B(x,r)\cap A\ne\varnothing$ 且 $B(x,r)\cap(E\setminus A)\ne\varnothing$。又有 $\operatorname{Fr}(A)=\bar A\cap\overline{E\setminus A}$。

> [!example] 1.44 / 1.45
> 球 $B(x,r)$ 的边界、区间 $(a,b)$ 的边界等。至少还有:有理数 $Q$ 在 $\mathbb R$ 中的边界。

小性质:任何集合的边界自动是闭集；$A$ 和 $E\setminus A$ 有相同的边界；$A^\circ,\partial A,\overline{E\setminus A}$ 构成空间 $E$ 的一个不交分解；$\overline{E\setminus A}=\operatorname{Int}(E\setminus A)$。

#### 1.3.7 相对开集、相对闭集、相对邻域

不考虑整个空间、而只考虑一个子集时（如定义域 $A\subset E$ 不是全空间），要用「相对」概念。有距离时这些概念容易理解。

> [!note] Déf. 1.47
> 设 $A$ 是 $E$ 的子集。
> - $A$ 的子集 $U$ 称为**相对于 $A$ 开**，如果存在 $E$ 中的开集 $\tilde U$ 使 $U=\tilde U\cap A$；
> - $A$ 的子集 $F$ 称为**相对于 $A$ 闭**，如果存在 $E$ 中的闭集 $\tilde F$ 使 $F=\tilde F\cap A$；
> - $a\in A$，$A$ 中子集 $V$ 称为 $a$ 相对于 $A$ 的**邻域**，如果存在 $a$ 在 $E$ 中的邻域 $\tilde V$ 使 $V=\tilde V\cap A$。

> [!example] 1.48 / 1.49
> 以各种区间为例展示上述概念。$E$ 是 NVS、$A\subset E$、$G\subset A$，以下等价:(1) $G$ 相对于 $A$ 开；(2) $\forall x\in G,\exists r>0,\ B(x,r)\cap A\subset G$。

> [!example] 1.50
> 考虑 $\mathbb N\subset\mathbb R$，自然数集合中的相对开集和相对邻域是什么?$Q$ 呢?（$Q\cap(0,1)$ 是相对开的；$Q\cap(-\pi,\pi)$ 既相对开又相对闭。）

> [!example] 1.51（相对闭集的序列刻画）
> $G\subset A\subset E$，$E$ 是 NVS。以下等价:(1) $G$ 相对于 $A$ 闭；(2) $G$ 中点列 $(x_n)$ 如果收敛于 $A$ 中的元素 $l$，则一定 $l\in G$（注意 $l$ 必须在 $A$ 中）。

### 1.4 范数的比较

> [!note] Déf. 1.52（控制）
> 设 $E$ 上有两个范数 $N_1,N_2$。说 $N_1$ 被 $N_2$ **控制**，如果存在 $\alpha>0$ 使 $\forall x\in E,\ N_1(x)\le\alpha N_2(x)$。

> [!note] Déf. 1.53（等价）
> 若 $N_1,N_2$ 彼此控制,即存在 $\alpha>0$ 使 $\forall x\in E,\ \frac1\alpha N_1(x)\le N_2(x)\le\alpha N_1(x)$，则说它们**等价**（不难验证这真的是等价关系）。

若 $E$ 有限维,可以证明所有这些范数等价（再等等）；无穷维中则见到不等价的例子。

#### 1.4.1 例子

能操作的例子不多,主要考虑 $C([a,b],\mathbb R)$ 上定义过的 $\|\cdot\|_\infty$ 与 $\|\cdot\|_p$ 之间的比较。

> [!example] 1.54
> 设 $E$ 是使 $\sum_{n\ge1}|a_n|$ 收敛的数列 $(a_n)$ 全体,类比定义 $E$ 上的 $\|\cdot\|_\infty$ 与 $\|\cdot\|_1$。这两个范数等价不?谁控制谁?

#### 1.4.2 控制和等价的意义

控制是单向的、等价是双向的（只讲一遍，另外一边不用证明）。假设 $N_2$ 控制 $N_1$:
- 在 $N_2$ 中有界的集合自然在 $N_1$ 中有界；
- 在 $N_2$ 中收敛的序列也在 $N_1$ 中收敛；
- 在 $N_1$ 中开的子集在 $N_2$ 中也开；
- 在 $N_1$ 中闭的子集在 $N_2$ 中也闭。

这种单向命题的另外一边都有反例，以 $C([a,b],\mathbb R)$ 的 $\|\cdot\|_\infty$ 与 $\|\cdot\|_1$ 为例（注意这里是 $\|\cdot\|_\infty$ **控制** $\|\cdot\|_1$）:
> [!warning] 反例
> (1) $\|\cdot\|_1$ 有界而非 $\|\cdot\|_\infty$ 有界；(2) $\|\cdot\|_1$ 收敛而非 $\|\cdot\|_\infty$ 收敛；(3) $\{f:\|f\|_\infty<1\}$ 在 $\|\cdot\|_\infty$ 下是开的，但在 $\|\cdot\|_1$ 下不开（可在外面找点列收敛于里面的点）；(4) $\{f:f(a)=0\}$ 在 $\|\cdot\|_\infty$ 下闭，但在 $\|\cdot\|_1$ 下不闭。

若是双向的，那么只要说这些东西都等价就好了。

## 2. 映射的局部研究、连续

用 $K$ 表示 $\mathbb R$ 或 $\mathbb C$，$E,F$ 永远是 $K$ 上的 NVS，$A$ 是 $E$ 的子集，范数都写成 $\|\cdot\|$（常可通过元素属于哪个集合判断当前指哪个空间的范数）。

### 2.1 映射的极限

#### 2.1.1 定义、一般性质

> [!note] Déf. 2.1
> 设 $f:A\to F$，$a$ 是 $A$ 的附着点，$l\in F$。称 $f$ 在 $a$ 趋向于 $l$，若
> $$\forall\varepsilon>0\quad\exists\eta>0\quad\forall x\in A\quad\|x-a\|\le\eta\Rightarrow\|f(x)-l\|\le\varepsilon.$$
> 记号 $f\xrightarrow[a]{}l$ 或 $f(x)\xrightarrow[x\to a]{}l$。等价表述（用开球）:$\forall\varepsilon>0,\exists\eta>0,\ f(B(a,\eta)\cap A)\subset B(l,\varepsilon)$。

这里要求 $a$ 是附着点是有道理的，否则纯粹卡逻辑的 bug,$f$ 可以趋向于任何东西。定义自然包含 $a$ 在内部或边界的情况；一元函数极限的区间边界也是用这种话语表述的。

> [!example] 2.2
> 设 $f:Q\to\mathbb R$，若 $x$ 的最简分数表示是 $\pm\frac pq$ 则 $f(x)=q$。讨论 $f$ 在 $a\in\mathbb R$ 处的极限:不论 $a$ 是不是有理数（$f(a)$ 是不是有定义），它总是附着点，总可以讨论极限。

> [!note] Déf. 2.3
> 设 $a\in A$，若 $f$ 在 $a$ 点有极限，则称 $f$ 在 $a$ 点**连续**。
> 这是法式的讲法,不愿去心，以至于连续是极限概念在 $a\in A$ 时的特殊情形。常见中文教材喜欢去心定义极限、再用极限等于函数值定义连续。若非要讨论去心，请主动考虑 $f$ 在 $A\setminus\{a\}$ 上的限制在 $a$ 点的极限。

> [!note] Prop. 2.4（极限的序列刻画）
> $f$ 在 $a$ 趋向于 $l$，当且仅当对任何 $A$ 中趋于 $a$ 的序列 $(u_n)$ 有 $f(u_n)\to l$。这个定理下文用得超级多，比定义多。作为推论自然有连续的序列刻画。（性质:极限的唯一性,略。）有了唯一性，极限才是良好定义的概念，才能出 $\lim_{x\to a}f(x)$ 这种记号。

> [!warning] 关键补充:沿直线连续 ≠ 连续
> 比如 $\mathbb R^2$ 上的函数 $f$ 在原点连续，和沿着每一条直线（甚至不经过原点的）连续，不是同样的概念，可以有反例:
> $$f(x,y)=\frac{x^2y}{x^4+y^2}\ \text{若}\ (x,y)\ne(0,0),\qquad f(0,0)=0.$$
> 它还提示了一种构造反例的办法:找一段经过原点的圆弧，让函数在圆弧上除原点以外的地方取 1、在其它地方包括原点取 0。

> [!info] Rem. 2.5
> 上面的问题中，如果把「每一条直线」改成「每条经过原点的 $C^1$ 曲线」，结论还对吗?（这问题应该困难，不是习题。）不难想象高维空间或其它乘积空间对应的结论。

#### 2.1.2 无穷极限（仅对实值函数）

> [!note] Déf. 2.6
> 设 $f:A\to\mathbb R$，$a$ 附着于 $A$。
> - $f$ 在 $a$ 趋向 $+\infty$，若 $\forall R\in\mathbb R,\exists\eta>0,\forall x\in A,\|x-a\|\le\eta\Rightarrow f(x)\ge R$；
> - （趋于负无穷略）。

#### 2.1.3 无穷处的极限

定义域 $A\subset E$。任何意义上的无穷都不是 $A$（$E$）的点，但趋于「无穷」还是可以理解的。除去 $\mathbb R$ 特殊（有正负无穷之分），其余空间不区分沿各个方向的无穷，而是统称无穷。

> [!note] Déf. 2.7
> 设 $f:A\to F$，$A$ 无界。称 $f$ 当 $\|x\|\to+\infty$ 时趋向于 $l$，若
> $$\forall\varepsilon>0\quad\exists M\in\mathbb R\quad\forall x\in A\quad\|x\|\ge M\Rightarrow\|f(x)-l\|\le\varepsilon.$$
> 则记 $f(x)\xrightarrow[\|x\|\to\infty]{}l$。定义中 $A$ 无界很重要，否则谈不上趋于无穷。$\mathbb R$ 特殊，可有 $+\infty$ 和 $-\infty$ 处的极限（对 $f:A\to F$，$A\subset\mathbb R$）。特别地，数列 $(u_n)$ 可看成 $A=\mathbb N$ 的情形，从而把数列极限与 $A$ 上函数在 $+\infty$ 的极限统一起来。用序列刻画这种 $\pm\infty$ 处极限的性质（叙述与证明略）同样有。

#### 2.1.4 取值于乘积空间的映射

考虑 $p$ 个 NVS 的乘积 $E_1\times\cdots\times E_p$ 带乘积范数。

> [!note] Prop. 2.8
> 设 $f$ 取值于 $E_1\times\cdots\times E_p$，$f_1,\dots,f_p$ 是 $f$ 的分量，则 $f$ 在 $a$ 点趋向于 $l=(l_1,\dots,l_p)$，当且仅当每个 $f_k$ 在 $a$ 趋向于 $l_k$。

#### 2.1.5 连续延拓

设 $f:A\to F$，若要把定义域延拓到另外一点 $a\notin A$，必须要求 $a$ 是附着点（不然没有意思），也即 $a\in\bar A\setminus A$（注意以前学过 $\bar A\setminus A\subset\operatorname{Adh}(A)$）。

> [!note] 例 2.9（连续延拓，常识习题）
> 设 $f:A\subset E\to F$ 连续，而且对任何 $a\in\bar A\setminus A$，$f$ 在 $a$ 点有有限的极限，则存在唯一的延拓 $\tilde f:\bar A\to F$。

> [!info] Rem. 2.10
> 你总是可以对任何 $a\in\bar A\setminus A$ 补充定义 $\tilde f(a)$ 为 $f$ 在 $a$ 的极限。证明的关键点是:为什么 $\tilde f$ 在每个点连续?补充定义有可能破坏原有点的连续性，而且附着点彼此之间也可以有干扰，所以 $\tilde f$ 在任何点的连续性都不显然，需要证明。

**Preuve :** 定义 $\tilde f(a)=f(a)$（$a\in A$），$\tilde f(a)=\lim_a f$（$a\in\bar A\setminus A$）。任取 $a\in\bar A$，往证 $\tilde f$ 在 $a$ 点连续。利用 Prop. 2.4 考虑 $\bar A$ 中收敛于 $a$ 的点列 $(a_n)$，想证明 $\tilde f(a_n)\to\tilde f(a)$，分情况讨论。
(1) $a\in A$。这时 $a_n$ 也要分情况:若 $a_n\in A$，令 $b_n=a_n$；若 $a_n\in\bar A$，利用 $\tilde f(a_n)$ 的定义可找到 $b_n\in A$ 使 $\bigl|\tilde f(a_n)-f(b_n)\bigr|$ 与 $\|b_n-a_n\|$ 都不超过 $1/n$。于是 $b_n\in A$、$b_n\to a$，由 $f$ 在 $a$ 的连续性（Prop. 2.4）有 $\lim f(b_n)=f(a)=\tilde f(a)$，进而 $\lim\tilde f(a_n)=\tilde f(a)$。
(2) $a\in\bar A\setminus A$。同样地取 $b_n\in A$，只是这时利用 $\tilde f(a)$ 的定义:$\tilde f(a)=\lim_a f=\lim_n f(b_n)=\lim_n\tilde f(a_n)$。
最后唯一性比较显然:只需比较 $a\in\bar A\setminus A$ 处的取值，因为 $a$ 是附着点，一定有 $A$ 中点列 $(b_n)$ 收敛于 $a$，由两个（假设的）函数在 $a$ 的连续性知它们在 $a$ 的取值都是 $f(b_n)$ 的极限，再由极限唯一性得证。

> [!info] Rem. 2.11
> 著名例子:设 $E=C([0,1],\mathbb R)$（严格说应取它，因为阶梯函数在 $C([0,1],\mathbb R)$ 中关于 $\|\cdot\|_\infty$ 稠密），$A=E([0,1],\mathbb R)$ 表示阶梯函数，定义 $f:A\to\mathbb R$ 使 $f(x)$ 等于这个阶梯函数的积分。若考虑 $E$ 上 $\|\cdot\|_\infty$ 范数，这个习题讲述的正是我们学过的积分定义。

#### 2.1.6 比较关系

主要是定义 $O$ 和 $o$，即上学期学过的控制函数与可忽略函数的简单推广。

> [!note] Déf. 2.12
> 设 $f:A\to F$、$\varphi:A\to F$。称 $f$ 在 $a$ 附近被 $\varphi$ **控制**（f est dominée par $\varphi$），若存在常数 $C\ge0$ 使:
> - 当 $a\in\operatorname{Adh}(A)$:存在 $r>0$ 使 $\forall x\in A\cap B(a,r),\ \|f(x)\|\le C\|\varphi(x)\|$；
> - 当 $a=+\infty$（言下之意 $A\subset\mathbb R$）:存在 $r\in\mathbb R$ 使 $\forall x\in A,x\ge r\Rightarrow\|f(x)\|\le C\|\varphi(x)\|$；
> - （负无穷略）。$o$ 对应的定义略。
> 注意所有这些定义与其说是关于 $f$ 和 $\varphi$，不如说是关于 $\|f\|$ 和 $\|\varphi\|$。

### 2.2 极限运算

设定 $f:A\subset E\to F$，在每点叙述和证明（略）:线性组合的极限；$f$ 与标量函数 $\varphi:A\to K$ 数乘的极限；若 $F=K$，分母不为零时倒数的极限、商的极限；复合函数的极限（设 $E,F,G$ 是三个 $K$-NVS，$A\subset E,B\subset F$，$f:A\to F$，$g:B\to G$，$f(A)\subset B$，若 $f\xrightarrow[a]{}b$ 则 $b$ 是 $B$ 的附着点，又若 $g\xrightarrow[b]{}l$ 则 $g\circ f\xrightarrow[a]{}l$）。书上的证明又走序列刻画线路，也可走不等式、$\varepsilon$-$\delta$ 线路。

冷静一下:设 $E$ 是带范数的 $K$ 向量空间，若 $x_n\to x$、$\lambda_n\to\lambda$，问为什么 $\lambda_nx_n\to\lambda x$?

### 2.3 整体连续

> [!note] Déf. 2.13
> 映射称为**连续**，如果它在定义域的每点都连续。
> 注意按这套讲法，在一点处连续和在这点有极限是一个意思:因为不去心，若 $a\in A$，那么 $\lim_a f$ 只要存在就一定等于 $f(a)$。

> [!note] Lemma 2.14
> 设 $f:A\subset E\to F$ 连续，对任何 $B\subset A$，映射 $f|_B:B\to F$ 连续。（证明略。）

简单情况 $E=\mathbb R^n$、$f:U\subset E\to\mathbb R$ 就是多变量函数，上面定义的连续不能理解为固定任何 $n-1$ 个分量关于另外一个分量作为一元函数连续，可以有反例。而且细品，就算证明 $f(x,y)=e^x\sin y$ 是连续函数也不是显然的事情。当 $E$ 无穷维时更需要举例，值得详细计算。

> [!example] 2.15
> $E=C^0(I,\mathbb R)$ 配上 $\|\cdot\|_\infty$。
> (1) $\Psi_1:E\times E\to E,\ \Psi_1(f,g)=fg$，$\Psi_1$ 连续吗?为什么?
> (2) $\Psi_2:E\to E,\ \Psi_2(f)=e^f$，问题同上。

**Preuve :** (1) 连续是逐点证明的，固定 $(f,g)$，设 $(f_n,g_n)\to(f,g)$，则
$\|\Psi_1(f,g)-\Psi_1(f_n,g_n)\|\le\sup_t|f-f_n|\cdot\sup_t|g|+\sup_t|f_n|\cdot\sup_t|g-g_n|=\|f-f_n\|\|g\|+\|f_n\|\|g-g_n\|$；因 $f_n\to f$，$n$ 充分大时 $\|f_n\|\le\|f\|+1$，故存在依赖于 $f,g$ 的常数 $M$ 使 $\|\Psi_1(f,g)-\Psi_1(f_n,g_n)\|\le M\|(f,g)-(f_n,g_n)\|\to0$。
(2) 固定 $f$、$f_n\to f$，$\|\Psi_2(f)-\Psi_2(f_n)\|=\sup_t|e^f-e^{f_n}|$。$n$ 充分大时存在 $M$ 使 $|f(t)|,|f_n(t)|\le M$；由微分中值定理存在 $\xi_{n,t}$（$|\xi_{n,t}|\le M$）使 $|e^{f(t)}-e^{f_n(t)}|\le e^M|f(t)-f_n(t)|$，故 $\|\Psi_2(f)-\Psi_2(f_n)\|\le e^M\|f-f_n\|\to0$。（注意 $M$ 与 $f$ 有关，故没有证明 $\Psi_2$ 是 Lip 的；这个证明与 $e^f$ 不特别有关，任何连续可微的函数都可以。）

如此可以构造很多例子:把这个空间和范数改成其它的，试试看结论还对不对?

#### 2.3.1 Lipschitz 映射

> [!note] Déf. 2.16
> 设 $k\ge0$。称映射 $f$ 是 $k$-Lip 的，如果 $\forall(x,y)\in A^2,\ \|f(x)-f(y)\|\le k\|x-y\|$。称 $f$ 是 Lip 的，如果存在 $k\ge0$ 使 $f$ 是 $k$-Lip 的。
> 简单性质:Lip 映射全体在所有映射构成的向量空间中是一个子空间；Lip 映射必须连续。

> [!example] 2.17
> - 范数映射本身 $x\mapsto\|x\|$ 是 Lip 的；
> - 到某个固定集合 $A$ 的距离 $x\mapsto d(x,A)$；
> - 距离函数 $(x,y)\mapsto d(x,y)$（定义域理解为 $E^2$ 用乘积范数，比看上去难:$\bigl|d(x_1,y_1)-d(x_2,y_2)\bigr|\le\|x_1-x_2\|+\|y_1-y_2\|\le2\|(x_1,y_1)-(x_2,y_2)\|$）；
> - 乘积 NVS 到某个分量的投影。

> [!example] 2.18
> 映射 $f:E\to F$ 是否 Lip，与 $E,F$ 上取的等价范数无关。

#### 2.3.2 连续映射的运算

简单说:连续映射的线性组合、标量积、复合是连续的（每点用一下前面的定理）。引入记号 $C(A,F)$ 表示从 $A$ 到 $F$ 的连续映射全体，它是一个向量空间（对一般的 $A$ 想给一个范数变成 NVS 还是不容易的，以后再论）。

> [!note] Prop. 2.19（倒数连续）
> 设 $f:A\to K$ 连续且不取零值，则映射 $\frac1f:A\to K,\ x\mapsto\frac1{f(x)}$ 连续。（还是转成点列对应的定理。）

> [!example] 2.20
> 设 $I$ 是区间，$\Psi_3:C(I,\mathbb R)\to\mathbb R,\ \Psi_3(f)=\int_I(e^{f^2}+f)$。证明 $\Psi_3$ 连续。（最优的思路是不直接用定义，而是用运算和复合的想法，利用例 2.15。）

#### 2.3.3 连续映射的开（闭）集原像刻画

这个性质看上去很奇怪，但却是连续的本质特征，将来会成为定义。回忆:$A\subset E$ 的子集 $U$ 相对开，若存在 $E$ 中开集 $O$ 使 $U=O\cap A$；$F\subset A$ 相对闭，若 $A\setminus F$ 是 $A$ 的相对开集。

> [!note] Prop. 2.21
> 设 $f:A\to F$，则以下等价:
> 1. $f$ 是连续映射；
> 2. 所有 $F$ 的闭集的原像是 $A$ 中的相对闭集；
> 3. 所有 $F$ 的开集的原像是 $A$ 中的相对开集。

**Preuve :** $(1\Rightarrow3)$ 设 $O$ 在 $F$ 中开、$x\in f^{-1}(O)$。由开集定义存在 $\varepsilon>0$ 使 $B(f(x),\varepsilon)\subset O$；由 $f$ 在 $x$ 连续存在 $\delta>0$ 使 $f(B(x,\delta)\cap A)\subset B(f(x),\varepsilon)\subset O$（这里需要交 $A$，不然没有定义），进而 $B(x,\delta)\cap A\subset f^{-1}(O)$，故 $f^{-1}(O)$ 相对开。$(3\Rightarrow1)$ 设 $x\in A$，对任何 $\varepsilon>0$，开集 $B(f(x),\varepsilon)$ 的原像相对开，故存在 $\delta>0$ 使 $B(x,\delta)\cap A\subset f^{-1}(B(f(x),\varepsilon))$，于是 $\forall y\in B(x,\delta),\ \|f(y)-f(x)\|\le\varepsilon$。$(3\Rightarrow2)$ 设 $T$ 是 $F$ 中闭集，则 $T^c$ 开、$f^{-1}(T^c)$ 相对开，而 $f^{-1}(T)=A\setminus f^{-1}(T^c)$，$A$ 减去相对开集是相对闭集。$(2\Rightarrow3)$ 一样。

这个性质很常用:只要知道 $f$ 连续（甚至取 $A$ 是全空间），就知道 $\{f>a\}$ 是开集、$\{f=a\}$ 是闭集之类。特别地，固定 $A$ 后距离函数 $x\mapsto d(x,A)$ 连续（需要证明），所以以前证过 $\{x:d(x,A)\le1/n\}$ 是闭集就自然了。

#### 2.3.4 一致连续性

> [!note] Déf. 2.22
> 称映射 $f:A\subset E\to F$ 是**一致连续的**，如果
> $$\forall\varepsilon>0\quad\exists\eta>0\quad\forall(x,y)\in A^2\quad\|x-y\|\le\eta\Rightarrow\|f(x)-f(y)\|\le\varepsilon.$$
> 一致连续本来是重点难点，但单变量学过了，没有本质的变化。简单性质:一致连续当然连续；Lip 函数当然一致连续。

### 2.4 线性映射的连续性

线性映射线性代数研究得多，但那时不谈连续性、不求导数。分两种情况:有限维时范数本来就不重要（将要证明），线性代数足够了；无穷维时连续性就不显然，相应的学问变成「泛函分析」。因为线性，连续不需要每点去看，看原点足以。

> [!note] Prop. 2.23
> 线性映射 $u:E\to F$ 连续，当且仅当存在 $k\ge0$ 使
> $$\forall x\in E\qquad\|u(x)\|\le k\|x\|.$$

**Preuve :** 第一部分:只需验证在原点连续。设 $u$ 线性，证「$u$ 在 $E$ 上连续 $\iff$ $u$ 在 $0$ 处连续」。必要性显然。充分性:设 $u$ 在 $0$ 连续，任取 $x_0$，设 $\varepsilon>0$，存在 $\delta>0$ 使 $\|x\|<\delta\Rightarrow\|u(x)\|<\varepsilon$；对 $\|x-x_0\|<\delta$ 有 $\|u(x)-u(x_0)\|=\|u(x-x_0)\|<\varepsilon$（第一个等号用了线性，不等号用了原点连续），故 $u$ 在 $x_0$ 连续。
第二部分:连续 $\iff$ 有界性条件。$(\Rightarrow)$ 取 $\varepsilon=1$，存在 $\delta>0$ 使 $\|x\|\le\delta\Rightarrow\|u(x)\|\le1$。对非零 $x$，$\|\delta x/\|x\|\|=\delta$，故 $\|u(\delta x/\|x\|)\|\le1$，由线性左边等于 $\frac\delta{\|x\|}\|u(x)\|$，得 $\|u(x)\|\le\frac1\delta\|x\|$，取 $k=1/\delta$；$x=0$ 时显然。$(\Leftarrow)$ 设 $\|u(x)\|\le k\|x\|$，任取 $\varepsilon>0$，取 $\delta=\frac\varepsilon{k+1}$（$k=0$ 时 $u\equiv0$ 显然连续），则 $\|x\|<\delta$ 时 $\|u(x)\|\le k\|x\|<k\frac\varepsilon{k+1}<\varepsilon$，故在原点连续，由第一部分得处处连续。

> [!note] Déf. 2.24
> 满足条件 (2.1) 的常数 $k$ 的下确界称为该线性映射的**算子范数**，记作 $\|u\|$。可以证明所有 $E$ 到 $F$ 的连续（有界）线性映射全体配上这个算子范数是一个 NVS。
> 回忆「有界线性映射」:$u:E\to F$ 使 $\sup_{v\in E,\|v\|\le1}\|u(v)\|<\infty$。不难看出这与连续等价。所以对线性映射而言，连续就是有界。实际上有界线性映射是更常用的名字。（有限维时这个定语没有用，无穷维才重要。）

> [!example] 2.25
> 1. 考虑 $\mathbb R^n$ 上 $\|\cdot\|_\infty$，任何线性映射都有界（可从矩阵的观点看）。
> 2. 考虑 $C([0,\pi],K)$ 上的无穷范数，证明 $\varphi:C([0,\pi],K)\to K,\ f\mapsto\int_0^\pi f(t)\sin t\,dt$ 连续。
> 3. 考虑 $C([0,\pi],K)$ 上的 1-范数，证明 $\varphi:f\mapsto f(1)$ 不连续。

## 3. 紧性、道路连通性、有限维

这些概念点集拓扑都会再学，现在先入个门。

### 3.1 紧性

#### 3.1.1 定义

> [!note] Déf. 3.1
> $A\subset E$ 称为**紧的**（compact, compacité），如果 $A$ 中的每个点列至少有一个附着点在 $A$ 中（任何点列都有子列收敛于 $A$ 中的点）。这东西典型就是 $\mathbb R$ 中 Weierstrass 定理的推广。更准确的名字是「列紧」。

> [!info] Rem. 3.2
> 紧这个名字是给另外一个性质的:任何开覆盖一定有有限的子覆盖。这两个概念是有差别的。法国书暂时只用列紧。

简单性质:
(1) 设 $F\subset E$ 是子空间、$A\subset F$，则 $A$ 在 $F$ 中紧和 $A$ 在 $E$ 中紧等价。（它在说:紧是集合自己的事情，和外面的空间没关系。作为对比，开性和闭性就不是这样，比如 $(a,b)$ 是 $\mathbb R$ 里的开集、但不是 $\mathbb C$ 里的开集。）
(2) 紧集中的点列收敛，当且仅当它有唯一的附着点。（回忆 $\mathbb R$ 中数列有唯一附着点不表示收敛。）
(3) 所有的紧集都必须有界，而且是闭的。
(4) 紧集的闭子集是紧集。（这里「闭子集」针对大空间而言；反正紧集一定是大空间的闭集，两种说法没有差别。）
但不能反过来说:有界闭集是紧集，一般不对。

> [!example] 3.3
> 考虑 $C([0,1],\mathbb R)$ 配无穷范数，所有范数小于等于 1 的点集即单位球 $B$，它是有界闭集。但 $f_n(x)=x^n$ 没有收敛的子列。这是将来一个更大定理的特殊简单情况。

> [!note] Thm. 3.4
> 设 $E_1,\dots,E_p$ 是 $p$ 个 NVS，$A_1,\dots,A_p$ 是各自空间的紧集，则 $A_1\times\cdots\times A_p$ 是 $E_1\times\cdots\times E_p$ 中的紧集。

**Preuve :** 只需证 $p=2$ 情形，一般情形由归纳法可得。设 $(z_n)=((x_n,y_n))$ 是 $A_1\times A_2$ 中任一点列。因 $A_1$ 紧，$(x_n)$ 有子列 $(x_{\varphi(n)})$ 收敛于某 $a\in A_1$；因 $A_2$ 紧，$(y_{\varphi(n)})$ 有子列 $(y_{\varphi(\psi(n))})$ 收敛于某 $b\in A_2$；于是 $(z_{\varphi(\psi(n))})$ 收敛于 $(a,b)\in A_1\times A_2$。

特别地，$\mathbb R^n$ 中的有界闭集是紧的:因为有界，可把它看成巨大闭方块 $[-M,M]\times\cdots\times[-M,M]\subset\mathbb R^n$ 的闭子集，而大方块是紧的（用上述定理），所以任何有界闭集都是紧的。

#### 3.1.2 紧集上的连续映射

基本上需要把当时区间 $[a,b]$ 上的连续函数性质重复一遍。

> [!note] Prop. 3.5（紧集在连续映射下的像是紧集）
> 设 $A\subset E$ 紧、$f:A\to F$ 连续，则 $f(A)$ 紧。

**Preuve :** 取其中点列 $y_k=f(x_k)$。因 $x_k\in A$，不妨设子列 $x_{\varphi(k)}\to a\in A$，由 $f$ 在 $a$ 连续，$f(x_{\varphi(k)})\to f(a)\in f(A)$，故 $f(A)$ 紧。

> [!note] Cor. 3.6（紧集上的连续函数取到最值）
> 设 $A$ 是非空紧集、$f:A\to\mathbb R$ 连续，则 $f$ 有界，且能取到最大最小值。

**Preuve :** 像集紧故有界。至于取到:有界必有上确界，取 $a_n\in A$ 使 $f(a_n)\to\sup f(A)<\infty$，$a_n$ 有子列收敛，再用 $f$ 连续。

> [!note] Thm. 3.7
> 紧集上的连续函数是一致连续的。

**Preuve（反证）:** 若不是一致连续，存在 $\varepsilon>0$，对任何 $n$ 存在 $A$ 中 $(x_n,y_n)$ 使 $\|x_n-y_n\|<1/n$ 且 $\|f(x_n)-f(y_n)\|>\varepsilon$。用紧性找到子列（再找它的子列）使 $x_{n_k}\to x'$、$y_{n_k}\to y'$；由 $\|x_{n_k}-y_{n_k}\|<1/n_k\to0$ 及三角不等式知 $x'=y'$，由后一条并用 $f$ 连续发现 $\|f(x')-f(y')\|\ge\varepsilon$，矛盾。
（一元时证这个定理要求高得多，用的是有限覆盖。下面的等价性将来证，一般度量空间成立、一般拓扑空间不成立，但现在这个证明很容易推广到度量空间。）

> [!note] Thm. 3.8
> $A\subset E$ 是紧的（迁就本书定义，实际应说列紧），当且仅当对任何 $A$ 的开覆盖 $A\subset\bigcup_{\alpha\in I}O_\alpha$，存在 $\alpha_1,\dots,\alpha_m$ 使 $A\subset\bigcup_{i=1}^mO_{\alpha_i}$。

**Preuve（概要）:** 右推左:任取点列 $(a_n)$，不妨设 $\{a_n\}$ 是无穷集（否则子列收敛自然成立，鸽笼原理）。(1) 证明一定有点 $a\in A$，对任何 $r>0$，$B(a,r)$ 中有 $\{a_n\}$ 的无穷多个点:不然每点都有个小开球内部只含有限多个，用这些小球覆盖 $A$、再用紧性，与无穷个不同点矛盾。(2) 在这个 $a$ 附近找到收敛的子列。
左推右:设有开覆盖 $\{O_\alpha\}$，定义 $\varphi(x)=\sup\{r>0:\exists\alpha,B(x,r)\subset O_\alpha\}$。(1) 验证 $\varphi$ 连续（实际上下半连续足以）。(2) 用列紧性，$\varphi$ 作为连续正函数有正的全局下界 $r_0$。(3) 在 $A$ 中找极大的点集，使两两距离大于等于 $r_0$（极大即再多任何一点都不行；用归纳法逐点加，若加不停就得到两两距离 $\ge r_0$ 的点列，与列紧性矛盾）。(4) 用这个点集选有限个 $O_\alpha$（不够就说明刚才的不极大），这有限个就够了。

> [!example] 3.9
> 证明:若 $A$ 是闭集、$B$ 是紧集且 $A\cap B=\varnothing$，则 $d(A,B)>0$。

**Preuve :** 考虑 $f(x)=d(x,A)$ 在 $B$ 上的限制，是 $B$ 上的连续函数，且因 $x\notin A$ 有 $f(x)>0$；由前面的定理取到最小值，进而有正下界。

> [!example] 3.10
> 证明:若 $A$ 是紧集，则存在 $x,y\in A$ 使 $d(x,y)=\sup_{(a,b)\in A^2}d(a,b)$。右边这个数（不论能否取到）叫做集合 $A$ 的直径。

**Preuve :** 可以把 $d$ 看成 $A\times A\to\mathbb R_+$ 的函数，它连续，而 $A\times A$ 紧，进而有上界且被取到。

无穷维空间中紧集的例子，最直白的需用大定理；先看一个更容易从定义出发证明的例子。

> [!example] 3.11
> 设 $E=\{(a_n)_{n\in\mathbb N}:\sup_n|a_n|<\infty\}$ 配范数 $\|a\|=\sup_n|a_n|$，定义 $A=\{a\in E:\sum_{n=1}^\infty n|a_n|\le1\}$。证明 $A$ 是紧的。

**Preuve :** 第一步 $A$ 有界且闭:有界性 $\|a\|=\sup_n|a_n|\le\sum_n n|a_n|\le1$；闭性:设 $a^{(k)}\in A$ 且 $a^{(k)}\to a$，对任意 $N$ 有 $\sum_{n=1}^Nn|a_n|=\lim_k\sum_{n=1}^Nn|a_n^{(k)}|\le1$，令 $N\to\infty$ 得 $a\in A$。
第二步列紧:设 $(a^{(k)})$ 是 $A$ 中点列，因各坐标有界，用对角线法取子列 $(a^{(\varphi(k))})$ 使对每个 $n$ 有 $a_n^{(\varphi(k))}\to a_n$。关键估计:对 $\varepsilon>0$ 取 $N>1/\varepsilon$，则对任意 $x\in A$，$\sup_{n\ge N}|x_n|\le\sup_{n\ge N}\frac1n\sum_{m=1}^\infty m|x_m|\le\frac1N<\varepsilon$。于是 $\sup_{n\ge N}|a_n^{(\varphi(k))}|<\varepsilon$、$\sup_{n\ge N}|a_n|\le\varepsilon$；取 $k$ 足够大使 $\max_{n<N}|a_n^{(\varphi(k))}-a_n|<\varepsilon$，则 $\|a^{(\varphi(k))}-a\|<3\varepsilon$，故 $a^{(\varphi(k))}\to a\in A$。关键:必须在对数范数意义下收敛，仅每个分量收敛是不够的。

### 3.2 道路连通性

#### 3.2.1 道路

> [!note] Déf. 3.12
> 设 $A\subset E$，$x,y\in A$。连续映射 $p:[a,b]\to A$ 且 $p(a)=x,p(b)=y$，则称 $p$ 是连接 $x,y$ 的**道路**；若存在这样的道路，就说 $x,y$ 是通过道路连通的。

给定 $A$，$x,y$ 道路连通是一个等价关系，进而可以有等价类:$A=\bigsqcup_{\alpha\in I}A_\alpha$，每个 $A_\alpha$ 中的点之间道路连通，称为（一个）**道路连通分支**。

> [!note] Déf. 3.13
> 集合 $A$ 称为**道路连通的**，如果它只有一个道路连通分支。

> [!example] 3.14 / 3.15 / 3.16
> $\mathbb R\setminus\{0\}$ 不是道路连通的（用介值定理,这个例子体现了介值定理和道路连通之间的关系）。
> 若 $E$ 是维数大于 1 的 NVS，则 $E\setminus\{a\}$ 是道路连通的。
> 若 $A,B$ 分别道路连通且 $A\cap B\ne\varnothing$，则 $A\cup B$ 道路连通（有限个当然可以，无穷个也可以）。

> [!note] Prop. 3.17
> 道路连通集合在连续映射下的像是道路连通的。（注意是「像」不是「原像」。证明简单。）这正是某种介值定理的推广:比如 $A$ 道路连通、$f:A\to\mathbb R$ 连续、有正有负，则必须取零值。

> [!example] 3.18
> 证明不存在 $\mathbb C$ 到 $\mathbb R$ 的连续双射。反证:若有设为 $f$，则 $\mathbb C\setminus\{0\}$ 到 $\mathbb R\setminus\{f(0)\}$ 还是双射，前者道路连通、后者不是，而 $f$ 连续，矛盾。

> [!example] 3.19
> 设 $A$ 是 $E$ 的道路连通子集。(1) 若 $B\subset A$ 既是相对（于 $A$）开集又是相对闭集，则要么 $B=\varnothing$ 要么 $B=A$；(2) 证明 $A$ 不能被分解成两个非空相对开集的不交并。这个性质将来会作为「连通」的定义。上述习题基本说:道路连通推出连通；反之不然，反例著名，以后再讲。

**Preuve :** 若 $B\ne\varnothing$ 也不是 $A$，令 $C=A\setminus B$ 非空；从 $B,C$ 中分别取 $b,c$，由 $A$ 道路连通有道路 $\gamma:[0,1]\to A$ 使 $\gamma(0)=b,\gamma(1)=c$；研究 $\{s\in[0,1]:\gamma(s)\in B\}$ 的上确界，去找矛盾,这个点既不能在 $B$ 中也不能在 $C$ 中。

### 3.3 有限维向量空间上范数等价

这个事情说过多次，现在有了紧集上的连续函数性质，可以证明了。

> [!note] Thm. 3.20
> $K^n$ 中的所有范数等价。

**Preuve :** (1) 设 $\|\cdot\|$ 是任何一个范数，$\|\cdot\|_\infty$ 是无穷范数，利用三角不等式和自然基底易证 $\|(a_1,\dots,a_n)\|\le C\|(a_1,\dots,a_n)\|_\infty$。(2) 利用上面的不等式证明 $x\mapsto\|x\|$ 在无穷范数意义下连续。(3) 考虑无穷范数意义下的单位球 $S=\{x\in K^n:\|x\|_\infty=1\}$，它是有界闭集进而是紧的（前面只考虑了 $\mathbb R$，$\mathbb C$ 也对）。(4) $x\mapsto\|x\|$ 作为这个紧集上的连续函数有正下界 $c$，进而 $\forall x\in E,\|x\|\ge c\|x\|_\infty$。

所有有限维向量空间都线性同构于 $K^n$，所以也可以说:所有有限维 NVS 都是一样的。有了这个定理，谈有限维空间上的函数映射连续时不需要特别说明什么范数；取基之后连续性和极限可以逐分量讨论，且和具体取什么基无关。进一步，有限维 NVS 上也有:紧当且仅当有界闭。

#### 3.3.1 有限维出发的连续线性映射、多项式、多线性映射

所有有限维空间之间的线性映射自动连续（矩阵观点:取基定义 $K^n$ 上通常的范数，把函数表示成矩阵乘法，连续性显然）。实际上只要求定义域有限维就够了:

> [!note] Thm. 3.21
> 从有限维空间 $E$ 到任何 NVS $F$ 的线性映射都是连续的。

**Preuve :** 在 $E$ 上取基，考虑成 $K^n$，利用 $\|f((a_1,\dots,a_n))\|\le|a_1|\|f((1,0,\dots))\|+\cdots+|a_n|\|f((0,\dots,1))\|$。

作为对比，需要给出无穷维空间上不连续的线性映射。

> [!example] 3.22
> 设 $E$ 是仅有有限项非零的数列构成的线性空间，$f:E\to E$，$f((a_1,a_2,\dots))=(1a_1,2a_2,3a_3,\dots)$。它无界，进而不连续。

> [!info] Rem. 3.23
> 这个例子中的 $E$ 是 NVS 但不完备（稍后学）。想要一个完备的例子很困难，甚至有定理说这样的例子不可能直接「写」出来，必须通过选择公理。

$K^n$ 上的多项式不需要多言。书上打算定义一种 $E$ 上的多项式（仅限有限维）。

> [!note] Déf. 3.24
> 设 $E$ 有限维，$B=(e_1,\dots,e_n)$ 是一组基。映射 $f:E\to K$ 称为一个**多项式**，如果存在一组几乎是零的系数 $(\lambda_{k_1,\dots,k_n})_{(k_1,\dots,k_n)\in\mathbb N^n}$ 使
> $$f(x)=\sum_{(k_1,\dots,k_n)\in\mathbb N^n}\lambda_{k_1,\dots,k_n}x_1^{k_1}\cdots x_n^{k_n}$$
> 对任何 $x=\sum_{k=1}^nx_ke_k$ 成立。所谓一组几乎是零（une famille presque nulle de scalaires）意思是仅有有限个非零,这样省了具体指出次数的麻烦，写出统一的表达式。

与一般多项式的区别:尽管定义用到基，但 $f$ 作为映射本身是抽象的、不依赖于基的选择；只要有一组基使定义成立，换一个基也对，只是系数需要变换，变换公式是「可以算」的。这种抽象的价值正如:我们有时强调「线性映射不完全等于矩阵」。

> [!example] 3.25
> 从 $M_n(K)$ 到 $K$ 的映射 $\operatorname{Tr}$ 和 $\det$ 都是多项式（前者线性，后者由定义显然）。要抽象，就考虑从有限维空间 $E$ 到自身的线性映射 $L(E,E)$，那么 $\operatorname{Tr}$ 和 $\det$ 也是良定义的。

> [!note] Thm. 3.26
> 所有多项式都是连续的。（因为 $E$ 上范数无所谓，取好基就等价于证明 $K^n$ 到 $K$ 的多项式连续:考虑分量映射再四则运算。）

系列好性质:作为 $M_n(K)$ 子集的 $GL_n(K)$ 上映射 $A\mapsto A^{-1}$ 连续；$GL_n(\mathbb R)$ 不是道路连通的（$n>1$），但 $GL_n(\mathbb C)$ 是。

代数课学过多线性映射。类似于线性映射的连续与有界是两个等价说法，多线性映射也有（不论维数）:

> [!note] Thm. 3.27
> 设 $E_i$ 是 $p$ 个 NVS、$F$ 也是，则多线性映射 $f:E_1\times\cdots\times E_p\to F$ 连续，当且仅当存在常数 $C$ 使
> $$\|f(x_1,\dots,x_p)\|\le C\|x_1\|\cdots\|x_p\|$$
> 对任何 $(x_1,\dots,x_p)$ 成立。

**Preuve :** (1) 设 $f$ 连续，取 $\varepsilon=1$，存在 $\delta$ 使 $\|(x_1,\dots,x_p)\|\le\delta\Rightarrow\|f(x_1,\dots,x_p)\|\le1$。对任意 $(x_i)$，$(\delta\frac{x_1}{\|x_1\|},\dots,\delta\frac{x_p}{\|x_p\|})$ 的范数等于 $\delta$，由多线性性取 $C=\delta^{-p}$ 可证。(2) 以 $p=2$ 为例:$f(x_1,x_2)-f(x_1+h_1,x_2+h_2)=-[f(x_1+h_1,x_2)-f(x_1,x_2)]-[f(x_1+h_1,x_2+h_2)-f(x_1+h_1,x_2)]=-f(h_1,x_2)-f(x_1+h_1,h_2)$，故用假设的不等式得 $\|f(x_1,x_2)-f(x_1+h_1,x_2+h_2)\|\le C\|x_2\|\|h_1\|+C\|x_1+h_1\|\|h_2\|\le C(\|x_2\|+\|x_1\|+1)\|(h_1,h_2)\|$（用了 $\|(h_1,h_2)\|\le1$ 时 $\|x_1+h_1\|\le\|x_1\|+1$），取 $\delta=\min(1,\frac\varepsilon{C(\|x_2\|+\|x_1\|+1)})$ 即可。

前面证过了:$E_i$ 有限维时自动连续，进而自动有这个不等式；但无穷维有反例（对于多线性映射，这个不等式就是连续）。

> [!note] Thm. 3.28
> 如果每个 $E_i$ 都是有限维的，则多线性映射 $E_1\times\cdots\times E_p\to F$ 连续。

**Preuve :** 在每个 $E_i$ 上取基，利用多线性性展开，以 $K^n\times K^m$ 示意:$f(x,y)=\sum_{i,a}x_iy_af(e_i,f_a)$。考虑 $K^n\times K^m\to K,\ (x,y)\mapsto x_i$，它连续（走定义），$y_a$ 类似，而 $f(x,y)$ 是这些映射的线性组合。

特殊情况:若 $E_1,\dots,E_p$ 都一样、$F=K$，则多线性 $f:E^p\to F$ 诱导 $E$ 上的多项式 $\hat f(x)=f(x,\dots,x)$。（反过来:先定义 $k$ 次齐次多项式，再定义对称多线性映射，可以发现 $E$ 上 $k$ 次齐次多项式与 $E\times\cdots\times E$（$k$ 个）上的多线性映射有对应关系。）

一个自然的多线性映射就是乘法（双线性）。若 $(E,+,\times)$ 是一个 $K$ 代数、且有限维，则自然有常数 $C$ 使 $\|x\times y\|\le C\|x\|\|y\|$（因为肯定连续）。不同的范数对应不同的 $C$。显然总可以取到一个范数使 $\|x\times y\|\le\|x\|\|y\|$，这样的范数叫 **norme sous-multiplicative**，它很方便。

> [!example] 3.29 / 3.30
> 以 $M_n(\mathbb R)$ 为例:具体的哪个范数有这个性质?（最直接的是 Frobenius 范数，所有系数的平方和，用 Cauchy-Schwarz 不等式可证它次乘性；但它在单位矩阵上取值 $\sqrt n$，这使得它不同于任何从 $\mathbb R^n$ 上的范数诱导而来的范数。）
> 设 $E$ 是（可能无穷维的）NVS，考虑 $E$ 到自身的有界线性映射 $L(E,E)$，它是一个代数，其上有一个自然的范数满足上述性质。（取 $E=(\mathbb R^n,\|\cdot\|_1)$，诱导的 $L(E,E)=M_n(\mathbb R)$ 范数是矩阵各列元素绝对值之和的最大值；用无穷范数则诱导范数是各行元素绝对值之和的最大值。）

## 4. 实变量向量值函数

本节讨论 $f:I\subset\mathbb R\to E$，且要求 $E$ 是有限维，讨论求导与积分。原则上无穷维本章内容也都可以对应过去，但至少需再假设 $E$ 完备（因为要取极限）。这一节应理解为非常简单:取一个基，逐分量求导、逐分量积分不就可以了?（就算有直接抽象的定义，也很容易证明它等价于逐分量的求导和积分。）很多时候只提概念和性质，注重例子（主要是矩阵有关的）。

### 4.1 导数

还是把导数定义为斜率函数的极限:$f:I\to E$，$a\in I$，
$$\tau_a(f):I\setminus\{a\}\to E,\qquad t\mapsto\frac{f(t)-f(a)}{t-a}.$$
若 $\tau_a(f)$ 在 $a$ 有极限，则称 $f$ 在 $a$ 点可导，极限就是导数，记为 $f'(a)$。

> [!example] 4.1
> 若 $E=\mathbb R^3$，可以把 $f$ 想象为描述粒子运动的轨迹，则 $f'(t)$ 就是瞬时速度（矢量）。

> [!info] Rem. 4.2
> 同样可以证明一个等价的「可微」定义（略）。

2. 可导必连续；若 $E$ 中选了基 $(e_i)$ 且 $f(a)=\sum_{i=1}^nf_i(a)e_i$，那么可以逐分量运算 $f'(a)=\sum_{i=1}^nf_i'(a)e_i$。

> [!example] 4.3
> $f:I\to M_2(\mathbb R),\ f(t)=\begin{pmatrix}\cos t&\sin t\\-\sin t&\cos t\end{pmatrix}$，这个矩阵表示旋转角度 $t$（或理解成以单位速度 1 转时间 $t$）。算一下 $f'(t)$ 和 $f'(0)$。物理中很喜欢研究刚体运动，用到大量类似的东西。

3. 左右导数（略），导函数（略）。

4. 导函数运算。
4.1 可导函数的线性组合还是可导的。
4.2 设 $f:I\to E$、$L:E\to F$（有限维到有限维），则 $(L\circ f)'(a)=L(f'(a))$。直接用定义证明，取极限时用到 $L$ 的连续性质（或把分量都写出来）。

> [!info] Rem. 4.4
> 这个定理是以后「链式法则」的特殊情况:复合映射，只不过外层复合了一个线性函数。

4.3 双线性映射:

> [!note] Prop. 4.5
> 设 $E,F,G$ 是三个有限维空间，$B:E\times F\to G$ 双线性。若 $f:I\to E$ 和 $g:I\to F$ 在 $a$ 处可导，则 $B(f,g)$ 也在 $a$ 处可导，而且
> $$B(f,g)'(a)=B(f'(a),g(a))+B(f(a),g'(a)).$$
> 这本质上推广了最初的 Leibniz 法则。直接用定义证明，某一步肯定会用到有限维空间上的双线性映射连续（有界）。

> [!example] 4.6
> 设 $M(t)$ 是可导的矩阵值函数。
> (1) 证明 $t\mapsto{}^tM(t)M(t)$ 可导（${}^tM$ 表示 $M$ 的转置）:先 $t\mapsto{}^tM(t)$ 可导，再由 Leibniz 法则。
> (2) 若对所有 $t$ 矩阵 $M(t)$ 是正交的，求证 ${}^tMM'(t)$ 是反对称矩阵（之前平面的旋转是一个特例）。

**Preuve :** 第二问考虑恒等式 ${}^tM(t)M(t)\equiv I$，求导得 ${}^tM'(t)M(t)+{}^tM(t)M'(t)=0$；再用观察:${}^tM(t)M'(t)$ 的转置是 ${}^tM'(t)M(t)$。

4.3（定义域的复合）$f:I\to E$、$\varphi:J\to\mathbb R$ 且 $\varphi(J)\subset I$，则 $(f\circ\varphi)'(a)=\varphi'(a)f'(\varphi(a))$（$\varphi'(a)$ 是数、$f'(\varphi(a))$ 是向量）。

5. $C^1$ 映射，略；$C^k$ 映射，略；定义域延拓 $I\setminus\{a\}$ 到 $I$，略。

### 4.2 积分

积分的定义跟以前一样:先理解阶梯函数，然后说分段连续函数被阶梯函数逼近等等。最终可以对分段连续的 $f:I\to E$ 定义积分，具备各种初等性质（线性性、区间可加性等）；也可以给 $E$ 取基（如果还没有），然后逐分量做以前学过的函数积分再合起来。同样用类似以前的办法理解 $\int_{[a,b]}$ 与 $\int_a^b$ 的联系。

这个性质显然，但不是很容易通过分量来理解:

> [!note] Prop. 4.7
> 对任何 $f\in CM([a,b],E)$，
> $$\left\|\int_{[a,b]}f(t)dt\right\|\le\int_{[a,b]}\|f(t)\|dt.$$

**Preuve :** 先考虑弱版本 $\|\int_{[a,b]}f(t)dt\|_\infty\le C\int_{[a,b]}\|f(t)\|_\infty dt$。（课上通过选基证明了它；也可以通过等价范数观点看:取基自然有 $\|\cdot\|_\infty$，由范数等价性弱版本等价于上式，再用分量写开可转化为单变量微积分的对应定理。）然后考虑原始定理:利用逼近性质，对任何 $f\in CM([a,b],E)$ 与任何 $\varepsilon>0$，存在阶梯 $g\in E([a,b],E)$ 使 $\int_a^b\|f-g\|\le\varepsilon$。直接用定义得
$$\left\|\int_a^bg\right\|\le\sum_{i=1}^m\|g_i\|(a_i-a_{i-1})=\int_a^b\|g\|.$$
另外用弱版本有 $\|\int_a^bf-\int_a^bg\|\le C\int_a^b\|f-g\|\le C\varepsilon$，以及 $\bigl|\int_a^b\|g\|-\int_a^b\|f\|\bigr|\le\int_a^b\|f-g\|\le\varepsilon$。综合即得。（这个证明可能不是最好的，因为它没法给无穷维使用，但无穷维这个结论是对的。）

以下内容没有显著变化，略:原函数（仅考虑连续映射 $f:I\to E$ 的原函数，在相差「常数」的意义下唯一）；基本定理（Newton-Leibniz 公式，技术性的要求连续依旧，也还是有两种形式）。

有限增量不等式:是曾经的有限增量定理（Lagrange 中值定理），现在只能是不等式了，反例之前出现过。取 $f:I\to\mathbb R^3,\ t\mapsto(\cos t,\sin t,t)$，考虑 $f(2\pi)-f(0)$，发现不存在 $\xi$ 使 $f(2\pi)-f(0)=2\pi f'(\xi)$（很容易理解，因为三维）。所以只能退而求其次:

> [!note] Thm. 4.8（有限增量不等式）
> 设 $f\in C(I,E)$ 且在 $I$ 的内部是 $C^1$。若存在 $\lambda\in\mathbb R$ 使 $\forall t\in\mathring I,\|f'(t)\|\le\lambda$，则 $\forall(a,b)\in I^2,\ \|f(b)-f(a)\|\le\lambda|b-a|$。

**Preuve :** $\|f(b)-f(a)\|=\|\int_a^bf'(t)dt\|\le\int_a^b\|f'(t)\|dt\le\lambda|b-a|$。

这个定理中 $\lambda$ 前面不再有系数，是某种最优的表述；若利用范数等价转分量来证明，这个系数难以做到最好。现在的办法用微积分基本定理，简单漂亮但建立在强假设上。理论上有限增量不等式只要求 $f$ 在 $I$ 上可导、在 $\mathring I$ 上连续，结论就成立；若如此则上述证明不能用（微积分基本定理需要更多假设），解决办法留给感兴趣的同学。

关于 Taylor 展开系列定理，记住几点:(1) 条件给足结论都对，比较好记的是积分余项的分部积分推导；(2) 要理解到好，需要关注区分不同余项的定理成立条件的不同。这一点 $E$ 值函数和一元函数没有任何区别。（略。）

## 5. 取值于有限维 NVS 中的级数

这一节把级数理论推广到有限维 NVS 值。有了之前的理论这段也可以省略:只要取基，所有理论都可以逐分量讨论。重点看一些常见例子。同样，若懂完备，本节对完备的无穷维 NVS 也成立。

回忆数项级数学过的内容:正项判别法、变号判别法、条件收敛、绝对收敛等。现在「点」在 NVS 中，根本没有符号这个说法，所以很多内容不能搬过来；但条件收敛和绝对收敛的概念还存在，只是更多强调后者。

### 5.1 取值于有限维 NVS 中的级数

设 $E$ 是有限维 NVS，$(u_n)$ 取值于其中。部分和 $S_n=\sum_{p=0}^nu_p$，$S_n$ 是 $E$ 中的点列；若 $S_n$ 收敛，就说级数 $\sum u_n$ 收敛，把极限叫级数的和，记 $\sum_{n=0}^{+\infty}u_n$。

> [!example] 5.1
> 设 $A=\begin{pmatrix}0&1&2\\0&0&1\\0&0&0\end{pmatrix}$，证明级数 $\sum A^n$ 收敛。这个题目特殊，本质上并没有无穷多项，因为 $A^3$ 起就都是 0。

> [!example] 5.2
> 研究通项为 $A^n$ 的级数的收敛性，其中 $A=\frac12\begin{pmatrix}1&a\\0&1\end{pmatrix}$（$a\in\mathbb C$）。考虑 $A=\frac12I+B$，其中 $B=\begin{pmatrix}0&a/2\\0&0\end{pmatrix}$；不论 $a$ 多大，由于 $B^2=0$，在 $A^n=(I/2+B)^n$ 的展开中非零项只有 $I$ 和 $B$ 的一次项。

> [!example] 5.3
> 设 $\alpha\in\mathbb R$，$A\in M_p(\mathbb R)$ 是对称矩阵且 $\forall\lambda\in\operatorname{sp}(A),|\lambda|<1$。研究级数 $\sum n^\alpha A^n$ 的收敛性。

**Preuve :** 利用对称矩阵可对角化，直接考虑对角线上的元素，证明每个对角线元素对应的数列收敛；既然逐分量收敛，那么收敛。

#### 5.1.1 绝对收敛的级数

> [!note] Déf. 5.4
> 取值于 $E$ 的级数 $\sum u_n$ **绝对收敛**，如果（实）级数 $\sum\|u_n\|$ 收敛。
> 由等价范数和分量观点可以推出:绝对收敛一定收敛，而且这个定义和等价范数的选择没有关系。（脑筋急转弯:当年数项级数的条件收敛有著名的 Riemann 重排定理，现在还有么?）

> [!note] Lemma 5.5
> 设 $(u_n)$ 是 $E$ 中点列，若 $\sum u_n$ 收敛，则 $\bigl\|\sum_{n=0}^\infty u_n\bigr\|\le\sum_{n=0}^\infty\|u_n\|$。（证明:先考虑部分和对应的等式再取极限，注意说明两侧极限的理由；其实不论收敛与否这个式子都良定义。）

这可能是这一段最值得考虑的例子。设 $A\in M_p(K)$，在 $M_p(K)$ 上选取一个 sous-multiplicative 范数，即 $\|AB\|\le\|A\|\|B\|$（之前说过这样的范数必须存在，但没理由是唯一的）。若 $\|A\|<1$，则 $\|A^n\|\le\|A\|^n$，这样几何级数 $\sum A^n$ 肯定收敛。

> [!info] Rem. 5.6
> 一个有意思的问题:$\sum A^n$ 的收敛性应该和范数选择无关，但上面讨论用到了一个好范数。会不会对一个本来不能收敛的 $A$ 找到好范数使 $\|A\|<1$?（肯定不能。）所谓谱半径范数（矩阵特征值绝对值最大值）应是最「好」的范数。设 $\rho(A)$ 是谱半径，$\|\cdot\|$ 是任何次乘性范数，则必须有 $\|A\|\ge\rho(A)$；Gelfand 公式:对所有次乘性范数有 $\lim_{n\to\infty}\|A^n\|^{1/n}=\rho(A)$。注意 $\rho(A)$ 不是范数:取 $A=\begin{pmatrix}0&1\\0&0\end{pmatrix}$ 则 $\rho(A)=0$ 但 $A\ne0$。

作为这个重要几何级数的应用:只要 $\|A\|<1$，$I-A$ 就是可逆矩阵，实际上它的逆由收敛的级数给出 $(I-A)\sum_{n=0}^\infty A^n=I$（用极限定义证明这个等式）。

> [!example] 5.7
> 如果 $A\in M_n(K)$，证明 $\sum\frac{A^n}{n!}$ 是绝对收敛的，其和定义为 $A$ 的指数，记为 $e^A$ 或 $\exp(A)$。证明不难，不过小心:一般来讲没有 $e^{A+B}=e^Ae^B$。

这一段的目的至少是能够自如地考虑矩阵级数、绝对收敛的矩阵级数的各种性质（乘积、交换）。

## 6. 函数列极限

本章中 $E$ 是有限维 $K$ 向量空间，$A$ 是 $E$ 中有非空内点的集合。所谓函数指的是从 $A$ 到 $K$ 的映射，全体记为 $F(A,K)$。

### 6.1 序列的收敛方式

回忆:如果考虑 $F(A,K)$ 的子空间上的各种范数，我们已经知道什么叫 $f_n$ 在该范数意义下收敛。

#### 6.1.1 简单收敛

> [!note] Déf. 6.1
> 设 $f\in F(A,K)$。
> - 称序列 $(f_n)$ **简单收敛**于 $f$，如果对任何 $x\in A$ 都有 $f_n(x)\xrightarrow[n\to\infty]{}f(x)$；
> - 称序列简单收敛，如果它简单收敛于某个 $f$。
> 定义域不一定一元；值域虽然写的是一元，推广到多元也可以。

> [!example] 6.2
> 老朋友:$f_n:[0,1]\to\mathbb R,\ x\mapsto x^n$ 简单收敛于 $f(x)=0\ (x\in[0,1))$、$f(1)=1$。

简单性质:简单收敛的线性组合还是简单收敛，乘积也是；连续函数的简单收敛极限不一定连续；有界函数的简单收敛极限不一定有界；单调增函数的简单收敛极限还是单调增（严格单调保不住）。

#### 6.1.2 一致收敛

一致收敛当然是数学分析课最核心的内容之一。考虑 $F$（有限维）值的情况。

> [!note] Déf. 6.3
> $f_n:A\to F$ 称为**一致收敛**于 $f:A\to F$，如果对任何 $\varepsilon>0$ 存在 $N\in\mathbb N$，对任何 $x\in A$、任何 $n>N$ 有 $\|f_n(x)-f(x)\|_F<\varepsilon$。这个定义和 $F$ 的（等价）范数没关系。

> [!example] 6.4
> 上面的老朋友 $x^n$ 不是一致收敛的。

**Preuve :** 极限函数已知，若一致收敛也必须收敛到它。用定义的否命题:$\exists\varepsilon>0;\forall N\in\mathbb N;\exists x\in[0,1];\exists n>N;\ |x^n-0|>\varepsilon$。只要取 $\varepsilon=1/2$，对任何 $N$ 取 $n=N+1$、$x=\sqrt[N+1]{2/3}$。

同样的意思也可以用范数收敛表达（注意这个表达比上面还是有点不同:上面的定义可以考虑无界的函数列）。若 $B(A,F)$ 表示所有有界函数的集合、$\|f\|_\infty=\sup_{x\in A}\|f(x)\|$，则一致收敛当且仅当 $f_n$ 在 NVS $(B(A,F),\|\cdot\|_\infty)$ 中收敛于 $f$，即 $\|f_n-f\|_\infty\to0$。显然一致收敛是比简单收敛强的概念。

> [!example] 6.5
> $f_n:\mathbb R\to\mathbb R,\ x\mapsto\sin(x+\frac1n)$。

**Preuve :** $f_n$ 逐点收敛于 $\sin x$。由有限增量公式及 $|f_n'|=|\cos(x+\frac1n)|\le1$ 一致有界，得 $|f_n(x)-f(x)|\le\sup|f_n'|\cdot\frac1n\le\frac1n$ 对一切 $x$，故 $\|f_n-f\|_\infty\le\frac1n\to0$，即 $f_n\rightrightarrows f$ 于 $\mathbb R$。

> [!example] 6.6
> $f_n:[0,1]\to\mathbb R,\ x\mapsto x^n(1-x)$。

**Preuve :** 逐点收敛于 0。求最大值点:$f_n'(x)=x^{n-1}[n-(n+1)x]=0$ 得 $x=\frac n{n+1}$（舍去 $x=0$），故 $\|f_n\|_\infty=f_n(\frac n{n+1})=\frac{n^n}{(n+1)^{n+1}}=\frac1{n+1}(1+\frac1n)^{-n}\to0$，故 $f_n\rightrightarrows0$。

> [!warning] 证明不一致收敛的常用方法
> 设 $f_n$ 简单收敛于 $f$，为证不一致，可以:验证对无穷多个 $n$，$f_n-f$ 不是有界的（奢侈一点，只要 $\|f_n-f\|_\infty$ 不趋于 0 即可）；或者找到 $A$ 中的点列 $(x_n)$ 使数列 $(|f_n(x_n)-f(x_n)|)$ 不趋于 0。

> [!example] 6.7
> $f_n:\mathbb R\to\mathbb R,\ x\mapsto\frac{nx}{1+n^2x^2}$。

**Preuve :** 不一致，直接取点列 $x_n=\frac1n$，带入得 $f_n(x_n)=\frac12$，不趋于 0 即可（潜台词:若一致收敛，其极限必须与简单收敛的极限一致，因而必须是 0 函数）。也可以（作为习题）证明在 $\mathbb R\setminus(-\delta,\delta)$ 上一致收敛。

> [!example] 6.8
> 研究在 $\mathbb R_+$ 上的简单与一致收敛:1. $f_n(x)=(x+\frac1n)^2$；2. $f_n(x)=(x+\frac{e^{-x}}n)^2$。

**Preuve :** (1) 逐点收敛于 $f(x)=x^2$，但 $\sup_{\mathbb R_+}|f_n-f|\ge\lim_{x\to\infty}\frac{2x}n+\frac1{n^2}=\infty$，故不一致。(2) 逐点收敛于 $x^2$；由 $|f_n(x)-x^2|=2xe^{-x}/n+e^{-2x}/n^2\le\frac2{en}+\frac1{n^2}$（因 $\max xe^{-x}=\frac1e$），得 $\sup_{\mathbb R_+}|f_n-f|\to0$，故一致收敛。

> [!info] 点
> 做这种题不要只知道用定理，需要用人话说原因，找到一种感觉，再用定理表达自己的感觉。面对初等函数（或具体问题产生的函数列）有这种感觉并能够表达，是学习的目标。

一致收敛的序列的线性组合还是一致收敛的，但是:

> [!example] 6.9
> 给出例子说明 $f_n$ 和 $g_n$ 分别一致收敛，但 $(f_ng_n)$ 不一定一致收敛。（如果要求都在 $B(A,K)$ 中，那么就没有反例了。）

#### 6.1.3 一些定义

有些时候函数定义在 $A$ 上、在 $A$ 上一致收敛做不到，但能够做到下面这种弱一点的定义。

> [!note] Déf. 6.10
> 称 $(f_n)$ 在 $A$ 中**每点的邻域上一致收敛**，如果对任何 $a\in A$，存在 $a$ 的相对邻域 $U$，使 $(f_n|_U)$ 在 $U$ 上一致收敛。

> [!example] 6.11
> $f_n(x)=x^n$ 在 $(0,1)$ 上不是一致收敛的，但它在 $(0,1)$ 每点的邻域上一致收敛。同样现象还有个常用说法:称以上的 $f_n$ 在 $(0,1)$ 上**内闭一致收敛**。（大概意思:对于任何 $[a,b]\subset(0,1)$，在 $[a,b]$ 上一致；这和「每点的邻域上一致收敛」等价。「内闭」大约因为 $[a,b]$ 是内部的闭集。这个说法可推广到 $A$ 是 $\mathbb R^n$ 中开集的情况，也好用；但 $A$ 可能不是开集、也可能无界，所以这个提法不如法国书上的定义好。）

> [!info] Rem. 6.12
> 函数列一致收敛的判别暂时内容不多，转头讲函数项级数（内容多不少）。但这两个问题本质上是等价的。

### 6.2 一致收敛和极限

这是非常重点的内容。早就见过例子使连续函数的极限不连续，也可以说一般并没有
$$\lim_{x\to a}\lim_{n\to\infty}f_n(x)=\lim_{n\to\infty}\lim_{x\to a}f_n(x),$$
本质上就是极限号一般不能交换次序。

下面是一个错误的证明，体会一下:

> [!warning] 错误证明:连续函数简单极限连续
> 固定 $a\in A$。对任何 $\varepsilon>0$，存在 $N$ 使 $n>N$ 时 $|f_n(a)-f(a)|<\varepsilon$（(6.1)）；利用 $f_n$ 连续，存在 $\delta>0$ 使 $|x-a|<\delta$ 时 $|f_n(x)-f_n(a)|<\varepsilon$（(6.2)）；利用 $x$ 处收敛，存在 $N'$ 使 $n>N'$ 时 $|f(x)-f_n(x)|<\varepsilon$（(6.3)）。由三式得 $|x-a|<\delta$ 时 $|f(x)-f(a)|<3\varepsilon$。这是「典型的常数依赖问题」:上述 $\delta$ 依赖 $n>N$，为了 $n$ 能用依赖 $n>N'$，$N'$ 又依赖 $x$，而 $x$ 又被要求和 $a$ 的距离小于 $\delta$，所以循环了。这个结论本身不对，不可能证明出来。

> [!note] Lemma 6.13
> 如果 $f_n$ 在 $A$ 上一致收敛于 $f$，而且 $f_n$ 在 $a$ 点连续，则 $f$ 也在 $a$ 连续。

**Preuve :** 对任何 $\varepsilon$，存在 $N$ 使 $n\ge N\Rightarrow\|f_n(x)-f(x)\|<\varepsilon$ 对一切 $x\in A$（(6.4)）。取定一个这样的 $n$，利用 $f_n$ 在 $a$ 连续，存在 $\delta>0$ 使 $\|x-a\|<\delta,x\in A\Rightarrow\|f_n(x)-f_n(a)\|<\varepsilon$。把 (6.4) 用两次（在 $x$ 和 $a$），结合上式，对任何 $\|x-a\|<\delta,x\in A$ 有 $\|f(x)-f(a)\|<3\varepsilon$。

> [!note] Prop. 6.14
> $f_n$ 在 $A$ 上一致收敛于 $f$，而且 $f_n$ 在 $A$ 上连续，则 $f$ 在 $A$ 上连续。

#### 6.2.1 双重极限定理

基本上还是上面那个定理。如果 $a$ 仅仅是 $A$ 的附着点且 $a\notin A$，那么 $\lim_a f$ 不是连续的问题、而是极限是否存在的问题，有完全类似的版本。（略。）最有启发性的还是双指标序列情况。

> [!note] 例 6.15（证明作为很好的习题）
> 设 $(u_{n,p})_{(n,p)\in\mathbb N^2}$ 是取值于 $F$ 的双指标序列，假设 $\forall n,\lim_{p\to\infty}u_{n,p}=\alpha_n$ 且 $\forall p,\lim_{n\to\infty}u_{n,p}=\beta_p$，其中一个极限关于另一个变量一致。证明序列 $(\alpha_n)$ 和 $(\beta_p)$ 都收敛且极限相等，并验证这个极限也是 $(u_{n,n})$ 的极限。

简单总结:极限号不能随便换，只要有一边是一致的，就可以了。

### 6.3 积分、求导的极限

因为积分和求导本质上也是通过极限定义的，所以当极限号和积分号（或求导）交换时，类似的故事会重演。

> [!example] 6.16 / 6.17
> $\lim_{n\to\infty}\int_0^1x^n(1-x)dx=0$（这个例子简单，它一致收敛于 0）。
> 找一个例子，说明 $f_n$ 简单收敛到 0（在 $[0,1]$ 上），但是 $\lim_{n\to\infty}\int_{[0,1]}f_n=\infty$（画图比较容易，不介意分段连续的话很容易写出初等函数）。

> [!info] 点
> 在所有这种交换的情况，一致收敛只不过是充分但不必要的条件。可以找到例子:$f_n$ 不是在 $[0,1]$ 上一致收敛于 0，但是 $\int_{[0,1]}f_n\to0$。

#### 6.3.1 极限的积分

本节考虑区间 $I\subset\mathbb R$ 上定义的 $F$ 值函数。

> [!note] Thm. 6.18
> 设 $I=[a,b]$（$a<b$）且函数 $f_n$ 连续。若序列 $(f_n)$ 一致收敛于 $f$，则 $\int_{[a,b]}f_n\xrightarrow[n\to\infty]{}\int_{[a,b]}f$。

> [!info] Rem. 6.19
> 定理中关于 $f_n$ 的连续条件完全是技术性的:若 $f_n$ 黎曼可积且一致收敛于 $f$，则 $f$ 也黎曼可积，且积分可交换。（注意:若只假设 $f_n$ 分段连续，其一致极限未必分段连续，但必连续，因而积分号仍可交换。）
> 证明过于简单，略。这个定理的条件很奢侈，很多时候结论成立而条件不成立，但追求更好的条件暂时做不到。等着著名的控制收敛定理。

#### 6.3.2 极限的原函数

法国人不太讲究不定积分，统一用变上限积分解决。

> [!note] Thm. 6.20
> 设 $(f_n)$ 是 $I$ 上取值于 $F$ 的连续函数列，在 $I$ 的每个线段上一致收敛于连续函数 $f$。设 $a\in I$，$\Psi_n(x)=\int_a^xf_n(t)dt$、$\Psi(x)=\int_a^xf(t)dt$，则 $(\Psi_n)$ 在每个线段上一致收敛于 $\Psi$。

#### 6.3.3 极限的导数

现在学的定理基本上不算是正面回答问题，而是利用导数和积分的关系，把问题转化了。

> [!note] Thm. 6.21
> 设 $f_n$ 是 $C^1$ 的。如果序列 $(f_n)$ 简单收敛于 $f$，又假设序列 $(f_n')$ 在 $I$ 的任何闭区间上一致收敛（即内闭一致，或在每点邻域一致），则
> - 函数 $f$ 是 $C^1$ 的，而且 $\forall x\in I,\ f'(x)=\lim_{n\to\infty}f_n'(x)$；
> - （作为副产品）序列 $(f_n)$ 在 $I$ 的任何闭区间上一致收敛。

**Preuve :** 固定 $a\in I$。起初关于 $f$ 的性质基本什么都不知道。对任何 $n$ 用 NL 公式 $f_n(x)-f_n(a)=\int_a^xf_n'(t)dt$；对上式取极限（利用一致收敛假设），$f(x)-f(a)=\int_a^x\lim_{n\to\infty}f_n'(t)dt$。因为一致收敛的极限连续，所以 $x\mapsto\int_a^x\lim f_n'$ 连续；再利用变上限积分的性质（上学期某定理），它是可导的，而且导数 $f'(x)$ 就是 $\lim_{n\to\infty}f_n'(x)$。
至于副产品，对给定 $[\alpha,\beta]\subset I$，$|f_n(x)-f(x)|\le|f_n(x)-f_n(\alpha)-(f(x)-f(\alpha))|+|f_n(\alpha)-f(\alpha)|=\bigl|\int_\alpha^x(f_n'-f')\bigr|+|f_n(\alpha)-f(\alpha)|\le\int_\alpha^\beta|f_n'-f'|+|f_n(\alpha)-f(\alpha)|$；对任何 $\varepsilon>0$，利用 $\alpha$ 处的简单收敛存在 $N_1$、利用一致收敛存在 $N_2$ 即可。

不难考虑高阶导数的极限:如果涉及 $k$ 阶导数的极限，前面 $k-1$ 阶都只要简单收敛就够了。

## 7. 函数项级数

### 7.1 收敛方式

#### 7.1.1 定义

函数项级数本质上就是部分和函数的函数项极限，所以基本概念部分差不多，但讲了极限还是要讲级数。以下概念的定义略:简单收敛；一致收敛；在某个点的邻域内一致收敛；在区间 $I$ 的每点的邻域内一致收敛（内闭一致收敛）；（也许不需要正式定义）绝对一致收敛。

最初的例子直接用定义去证明一致收敛。或者说定义的另外一种形式:一致收敛首先简单收敛，所以可以先做这个（判断一下），然后在极少数情况下余项可以算好（或估计好），以至于定义可以等价为余项函数对应的一致收敛于 0。余项函数定义为 $R_n(x)=\sum_{k=n+1}^\infty u_k(x)$。

> [!example] 7.1
> $\sum_{n\ge1}(-1)^n\frac{x^n}{n}$ 在 $[0,1]$ 上是一致收敛的。

**Preuve :** 对固定 $x\in[0,1]$，$\sum(-1)^n\frac{x^n}{n}$ 是交错级数，数列 $\frac{x^n}{n}$ 关于 $n$ 单调递减趋于 0，由 Leibniz 判别法收敛。记 $S_n(x)=\sum_{k=1}^n(-1)^k\frac{x^k}{k}$、$R_n(x)=\sum_{k=n+1}^\infty(-1)^k\frac{x^k}{k}$，用交错级数余项性质 $|R_n(x)|\le\frac{x^{n+1}}{n+1}\le\frac1{n+1}$ 对一切 $x\in[0,1]$ 成立。上界与 $x$ 无关且趋于 0，故 $R_n$ 一致趋于 0，原级数一致收敛。（注:余项 $R_n(x)$ 的定义依赖级数的收敛性；一致收敛的等价表述正是部分和序列一致收敛于极限函数，即余项一致趋于 0。）

> [!example] 7.2
> 考虑 $u_n:\mathbb R_+\to\mathbb R,\ u_n(x)=\frac1{x+n^2}$。

**Preuve :** 对固定 $x$，$u_n(x)\sim n^{-2}\to0$，故逐点收敛于 0。对余项，由 $x\ge0$ 得 $|R_n(x)|=\sum_{k=n+1}^\infty\frac1{x+k^2}\le\sum_{k=n+1}^\infty\frac1{k^2}\to0$，上界与 $x$ 无关，故一致收敛。

#### 7.1.2 Cauchy 表述

> [!info] 点
> 要想用 Cauchy 表述，函数的值域 $F$ 必须是「完备」的。本章开始要求 $F$ 是有限维 NVS，自然可以；甚至可以不要显式提到完备概念，因为可以转到分量上去。

> [!note] Déf. 7.3
> 设 $u_n:A\to F$，函数项级数 $\sum u_n$ 称为**一致 Cauchy 的**，如果对任何 $\varepsilon>0$ 存在 $N>0$，对任何 $n>m>N$、任何 $x\in A$ 有 $\|\sum_{k=m}^nu_k(x)\|<\varepsilon$。

> [!note] Prop. 7.4
> $u_n:A\to F$，$\sum u_n$ 一致收敛，当且仅当一致 Cauchy。

**Preuve :** 左推右略。设一致 Cauchy。(1) 首先对任何固定 $x$，$F$ 值级数 $\sum_nu_n(x)$ 是 Cauchy 的；由有限维取分量，每个分量是 Cauchy 数列，利用 $K$ 的完备性收敛，进而 $\sum u_n(x)$ 收敛，设极限为 $\sum_{n=1}^\infty u_n(x)\in F$。(2) 说明一致性:对任何 $\varepsilon>0$，Cauchy 定义中有 $N$，对任何 $m,p>N$、任何 $x\in A$ 有 $\|\sum_{n=m}^pu_n(x)\|\le\varepsilon$。在上式中令 $p\to\infty$，利用 (1) 的结论和范数连续性得 $\|\sum_{n=m}^\infty u_n(x)\|\le\varepsilon$，这就是余项一致趋于 0 的意思。

这个 Cauchy 一般是反着用，利用它的否命题去证明不一致收敛（稍后见例 7.8）。

#### 7.1.3 正规收敛

法国人定义了 convergence normale，也许可以翻译成正规收敛，对应我们（至少常和史的书）没有直接定义这个概念。

> [!note] Déf. 7.5
> 函数项级数 $\sum u_n$ 称为**正规收敛**，如果
> 1. 对任何 $n\in\mathbb N$，$u_n$ 是有界的；
> 2. 级数 $\sum N_\infty(u_n)$ 收敛。
> 有了正规收敛的概念，也可以说比如:在某点的邻域内正规收敛、在 $I$ 内闭正规收敛等等。

> [!note] 注意
> - 正规收敛肯定是一致收敛（对应中文教材叫优级数定理:因为 $\sum N_\infty(u_n)$ 收敛，所以它作为数列 Cauchy，利用三角不等式就知道 $u_n$ 一致 Cauchy）；
> - 一致收敛不一定是正规收敛（原因之一:收敛可以是震荡抵消所致，一致收敛也一样；正规收敛有点像绝对收敛，是不考虑震荡的。另外，就算绝对值一致收敛的级数也不能说就是正规收敛的，因为它始终要求函数有界）。

> [!example] 7.6
> 定义 $[0,1]$ 上的函数 $f_n(x)=\frac1n$（若 $x=\frac1n$）、$f_n(x)=0$（若 $x\ne\frac1n$）。可以证明 $\sum f_n$ 是绝对一致收敛的，但不是正规的。

### 7.2 补充:Abel/Dirichlet 判别法

这是一段补充，只讨论实变量的实值函数列的情况。

> [!note] Thm. 7.7
> 设 $a_n,b_n$ 为定义在 $[a,b]$ 上的函数。若满足
> (1)（Dirichlet 判别法）部分和 $\sum_{n=1}^Na_n(x)$ 一致有界，且对每个固定的 $x$，$b_n(x)$ 关于 $n$ 单调，同时 $b_n(x)$ 当 $n\to\infty$ 时一致收敛到 0，
> (2)（Abel 判别法）级数 $\sum_{n=1}^\infty a_n(x)$ 一致收敛，且对每个固定的 $x$，$b_n(x)$ 关于 $n$ 单调，同时 $b_n(x)$ 一致有界，
> 则级数 $\sum_{n=1}^\infty a_n(x)b_n(x)$ 一致收敛。

> [!info] 点
> 记这个结论时要注意「单调」是关于哪个变量的单调、「一致」是关于哪个变量的一致。应该在数项级数中学过，本质上就是在合适的地方加入「一致」。证明的关键是如下的 Abel 求和公式（配合一致收敛的 Cauchy 判别法）:
> $$\sum_{k=n}^ma_kb_k=\sum_{k=n}^m(S_k-S_{k-1})b_k=\sum_{k=n}^mS_kb_k-\sum_{k=n-1}^{m-1}S_kb_{k+1}=S_mb_m-S_{n-1}b_{n-1}+\sum_{k=n}^{m-1}S_k(b_k-b_{k+1}).$$
> 在不同假设下分别证明:$\forall\varepsilon>0$ 存在 $N$，当 $n,m>N$ 时上面一致小于 $\varepsilon$。处理 Dirichlet 直接用；处理 Abel 时注意用 $S_k$ 表示从 $a_n$ 到 $a_{n+k}$ 的求和。

> [!example] 7.8
> $\sum_{n\ge1}\frac1n\cos(nx)$。证明该级数在 $[\delta,2\pi-\delta]$ 上对任意 $\delta>0$ 一致收敛，但在 $(0,2\pi)$ 上不一致收敛。

**Preuve :** 取 $a_n(x)=\cos(nx)$、$b_n(x)=\frac1n$。$b_n$ 与 $x$ 无关，满足单调下降（一致）趋于 0。当 $x\in[\delta,2\pi-\delta]$ 时 $\bigl|\sum_{n=1}^Na_n(x)\bigr|=\bigl|\frac{\sin(Nx/2)\cos((N+1)x/2)}{\sin(x/2)}\bigr|\le\frac1{\sin(\delta/2)}$，故一致收敛。
为证不一致，用 Cauchy 否命题:存在 $\varepsilon>0$，对任何 $N$ 存在 $m,p>N$、$x\in(0,2\pi)$ 使 $\bigl|\sum_{n=m}^p\frac{\cos nx}n\bigr|>\varepsilon$。取 $\varepsilon=1/2$，对任何 $N$ 取 $m=N+1$、$p=2N+3$，则 $\sum_{n=m}^p\frac1n>1/2$；利用 $\sum_{n=m}^p\frac{\cos(nx)}n\xrightarrow[x\to0]{}\sum_{n=m}^p\frac1n$，故存在 $x$ 使其大于 $1/2$。

> [!example] 7.9
> 设 $g:[0,1]\to\mathbb R$ 连续，$(f_n)$ 归纳定义为 $f_0=0$、$\forall n\in\mathbb N,\forall x\in[0,1],\ f_{n+1}(x)=g(x)+\int_0^xf_n(t)dt$。证明函数列 $(f_n)$ 一致收敛于一个连续函数 $f$，满足 $f(x)=g(x)+\int_0^xf(t)dt$。

**Preuve :** 令 $u_0=0$、$u_n=f_n-f_{n-1}$，则 $u_{n+1}=\int_0^xu_n(t)dt$。又 $u_1=f_1=g$ 有界，于是归纳可得 $|u_{n+1}|\le C\frac{x^n}{n!}$（其实 $[0,1]$ 不重要），从而 $\sum u_n$ 一致收敛，进而 $f_n$ 一致收敛，极限当然连续，也满足那个等式。这个题目有点像通过迭代的方式求出一种（积分）方程的解，这个思想以后还会用。

### 7.3 一致收敛的性质

有显然的几个性质（本质上都能转化为对应函数极限的定理，因此证明不需要）。

#### 7.3.1 连续性

> [!note] Prop. 7.10
> 若函数项级数 $\sum u_n$ 在 $A$ 上一致收敛，且所有 $u_n$ 在 $A$ 上连续，则和 $\sum_{n=0}^\infty u_n$ 在 $A$ 上连续。

> [!info] Rem.
> 这个定理可以在每点附近用（其实这个版本也许用得更多），以下形式:设 $u_n$ 在开区间 $I$ 连续（但并不在 $I$ 上一致收敛），若 $\sum u_n$ 在每点的邻域内一致收敛（内闭一致），则和函数在 $I$ 上连续。

> [!example] 7.11
> 结合之前做过的题目知 $x\mapsto\sum_{n=1}^\infty\frac{\cos nx}n$ 在 $(0,2\pi)$ 上连续。而当 $x=0$ 时这个级数不收敛，和函数在 $x\to0$ 时的极限需要小心，暂时不能推出它趋于 $\infty$，虽然很像。（补充:该极限确实是无穷;所求函数是 $\sum_{n\ge1}\frac{z^n}{n}$ 的实部，后者在 $\{|z|\le1\}\setminus\{1\}$ 上收敛且等于 $-\ln(1-z)$（需要幂级数知识），于是 $\sum_{n\ge1}\frac{\cos nx}n=-\ln(2\sin\frac x2)$。）

> [!example] 7.12 / 7.13
> 设 $H=\{z\in\mathbb C:\operatorname{Re}(z)>1\}$，函数 $\xi(z)=\sum_{n=1}^\infty\frac1{n^z}$ 在 $H$ 上连续（把 $n^z$ 理解为 $e^{z\log n}$，$n^z$ 的模长是 $n^{\operatorname{Re}(z)}$）。
> 回忆 $\exp M=\sum_{k=0}^\infty\frac{M^k}{k!}$（对任何矩阵 $M$），现在知道这个映射 $\exp:M_n(K)\to M_n(K)$ 连续；类似地 $\exp:L(E)\to L(E)$ 也连续。

因为连续和极限基本上是差不多的（按法国书的讲法，只是 $a$ 在不在 $A$ 的问题），对应有极限和 $\sum$ 交换的定理（自己写、自己证）。

> [!note] Thm. 7.14
> 若级数 $\sum u_n$ 在附着于 $A$ 的 $a$ 的邻域上一致收敛，且对 $n\in\mathbb N$ 函数 $u_n$ 在 $a$ 有有限极限 $l_n$，则 $\sum l_n$ 收敛且
> $$\lim_{x\to a}\sum_{n=0}^\infty u_n(x)=\sum_{n=0}^\infty\left(\lim_{x\to a}u_n(x)\right).$$
> 注意:$\sum l_n$ 收敛是结论，不是假设。

> [!example] 7.15
> 计算 $\lim_{x\to\infty}\sum_{n=0}^\infty\frac1{x^2+n^2}$。

**Preuve :** 先算求和再取极限会难；反过来先取极限，则每一项的极限都是 0，再求和肯定是 0。关键是为什么可以交换极限和求和的次序:用上面的定理，只要证明该函数项级数一致收敛。事实上 $\sup_{x\in[1,\infty)}\frac1{x^2+n^2}\le\frac1{n^2}$，而 $\sum\frac1{n^2}$ 收敛，故原级数在 $[1,\infty)$ 上正规收敛（进而一致收敛），结果等于 0。

> [!example] 7.16
> 计算 $\lim_{x\to0^+}x\sum_{n=0}^\infty\frac1{x+n^2}$。

**Preuve :** 在 $(0,1]$ 上 $\frac1{x+n^2}\le\frac1{n^2}$，而 $\sum\frac1{n^2}$ 收敛，所以 $\sum\frac1{x+n^2}$ 在 $(0,1]$ 上一致收敛，而且和函数有界（不超过 $\sum_{n=1}^\infty\frac1{n^2}$）。再乘以 $x$，原极限等于 0。

#### 7.3.2 线段上的逐项积分

本质上是讨论积分号和无穷求和交换的问题。没有条件是不行的（可以构造例子:直接从函数极限对应的老朋友，构造一个级数的部分和是那个函数列就可以了）。假设 $I$ 是区间（有非空内点），$u_n$ 是 $I$ 上定义的 $F$ 值函数。

> [!note] Thm. 7.17
> 设 $a\in I$，函数 $u_n$ 连续。若级数 $\sum u_n$ 在 $I$ 的每个线段上一致收敛，则
> $$\forall x\in I,\qquad\int_a^x\left(\sum_{n=0}^\infty u_n(t)\right)dt=\sum_{n=0}^\infty\int_a^xu_n(t)dt.$$
> 定理的名字非常合理；并不需要重新证明，只需意识到部分和函数 $S_n$ 在 $I$ 上内闭一致收敛，然后用之前的定理。

> [!example] 7.18
> 设 $(a_n)$ 是非负数列且 $\sum a_n$ 收敛。1. 证明 $f:[0,2\pi]\to\mathbb R,\ f(x)=\sum_{k=0}^\infty a_k\sin(kx)$ 连续（因为正规收敛进而一致收敛）。2. 计算 $\int_{[0,2\pi]}f$（逐项计算，绝大多数都是 0）。

> [!example] 7.19
> 设 $(z,r)\in\mathbb C^*\times\mathbb R_+^*$ 且 $r\ne|z|$。1. 对所有 $t\in[0,2\pi]$，把 $\frac1{z-re^{it}}$ 写成几何级数和的形式。2. 计算 $I(r,z)=\int_0^{2\pi}\frac{dt}{z-re^{it}}$。

**Preuve（要点）:** 若 $r<|z|$，$\frac1{z-re^{it}}=\frac1z\cdot\frac1{1-\frac rze^{it}}=\frac1z\sum_{n=0}^\infty(\frac rz)^ne^{itn}$（复数级数，绝对收敛且关于 $t$ 一致），故可逐项积分。若 $|z|<r$，$\frac1{z-re^{it}}=-\frac{e^{-it}}{r}\cdot\frac1{1-\frac zre^{-it}}=-\frac{e^{-it}}r\sum_{n=0}^\infty(\frac zr)^ne^{-int}$，后续推理类似可以逐项积分，但结果不同。

#### 7.3.3 逐项求导

> [!note] Thm. 7.20
> 设函数 $u_n$ 是 $C^1$。若
> - 级数 $\sum u_n$ 简单收敛，
> - 级数 $\sum u_n'$ 在 $I$ 的每个线段上一致收敛，
> 则函数 $\sum_{n=1}^\infty u_n$ 是 $C^1$ 且 $\left(\sum_{n=0}^\infty u_n\right)'=\sum_{n=0}^\infty u_n'$。
> 注意条件:需要能够对部分和函数 $S_n$ 使用之前的定理，进而要求 $S_n'$ 一致收敛。对 $\sum u_n$ 的要求不重要，其实还可以放松:只要假设有一个点收敛，就可以证明其它点也会收敛（利用区间的连通性和 NL 公式）。

> [!example] 7.21 / 7.22
> 对 $x>1$，求 $\xi(x)=\sum_{n=1}^\infty\frac1{n^x}$ 的导数。
> 在 $(0,2\pi)$ 上证明 $f(x)=\sum_{n=1}^\infty\frac{\sin nx}{n^2}$ 是 $C^1$ 的。不难看出函数 $f$ 定义中的级数收敛得很好，$f$ 是连续的（任何 $x\in\mathbb R$），但可导性需要躲开一些点（比如 $x=0,2\pi$）——只是不会证明这些点可导，还是真的不可导?可以证明不?

> [!example] 7.23 / 7.24
> 设 $M$ 是任何矩阵，则 $f(t)=\exp(tM)$ 可导且 $f'(t)=Mf(t)$。
> 设 $f:[0,\infty)\to\mathbb R,\ f(x)=\sum_{n=0}^\infty\frac{e^{-nx}}{n^2+1}$。证明 $f$ 在 $(0,\infty)$ 是 $C^\infty$ 的，问它在 0 点可不可导。

**Preuve :** 定义 $f$ 的级数一致收敛是显然的（事实上正规收敛）；逐项求导级数 $\sum_{n\ge0}\frac{-n}{n^2+1}e^{-nx}$ 在 $x>0$ 处收敛没问题，在 $x\ge\delta$ 上一致收敛也没问题；继续求导类似，故 $f$ 在 $(0,\infty)$ 上光滑。在 0 点有问题:一阶导数的那个级数在 $[0,\delta)$ 上不一致收敛（可以反用定义证明，因为 $\frac{-n}{n^2+1}$ 基本上就是 $-\frac1n$；也可以反证:若一致收敛，因为逐项都在 $x=0$ 附近连续，最终的极限应该也在 0 连续，但 $x=0$ 对应的级数明显不收敛）。所以不能用定理判断 $f$ 在 0 点可导，只好用定义研究 $\frac{f(x)-f(0)}x$ 在 $x\to0^+$ 时的极限。因 $f$ 在 $[0,x]$ 上连续、在 $(0,x)$ 上可导，有限增量定理说它等于 $f'(\xi(x))$（某 $\xi(x)\in(0,x)$）。若证明 $f'(x)=\sum\frac{-n}{n^2+1}e^{-nx}\xrightarrow[x\to0]{}-\infty$ 就可以结束:对任何固定 $M>0$，先选 $N$ 使 $\sum_{n=0}^N\frac{-n}{n^2+1}<-4M$，再取 $x_0$ 使 $e^{-Nx_0}=\frac12$，则当 $x<x_0$ 时 $\sum_{n=0}^\infty\frac{-n}{n^2+1}e^{-nx}\le\sum_{n=0}^N\frac{-n}{n^2+1}\cdot\frac12<-2M$（因为 $n>N$ 的通项均为负）。

> [!example] 7.25
> 证明函数 $f(x)=\sum_{n=0}^\infty\frac{(-1)^n}{x+n}$ 在 $(0,\infty)$ 上是 $C^\infty$ 的。

**Preuve :** 光滑可以逐点看，进而只要取 $0<a<b<\infty$，在 $[a,b]$ 上证明各阶导数都一致收敛。比如对函数本身用 Dirichlet:$\sum(-1)^n$ 部分和一致有界，$\frac1{x+n}$ 在 $[a,b]$ 上关于 $n$ 单调且一致收敛于 0。求一次导数 $\sum_{n\ge0}\frac{(-1)^{n+1}}{(x+n)^2}$，如此在 $[a,b]$ 上证明一致收敛反而更加容易，高阶导数也是。

### 7.4 渐近

这个部分比较困难，在于它研究的问题很有意义，但拿不出比较全面的解决办法，只能以一点例子展示一点常用的思路。一旦遇到问题就可能很难。

第一个思路:找等价的替换，但注意这只是思路，没有定理保证一定可以这样做，需要具体问题具体证明。

> [!example] 7.26
> 设 $f$ 在 $\mathbb R_+^*$ 上由 $f(x)=\sum_{n=1}^\infty\frac1{1+n^2x}$ 定义。给出 $\infty$ 处的一个简单的等价。

**Preuve :** 直观上 $x\to\infty$ 时 $f(x)$ 越来越小，速度未知，要求的就是这个。猜想 $\frac1{1+n^2x}\sim\frac1{n^2x}$。如果可以等价代换，就知道 $f(x)\sim_\infty\left(\sum_{n=1}^\infty\frac1{n^2}\right)\frac1x$（括号里是个实数）。证明这个等价，只要证明 $f(x)-\sum_{n=1}^\infty\frac1{n^2x}=o(1/x)$，或 $x\left(f(x)-\sum_{n=1}^\infty\frac1{n^2x}\right)=o(1)$。左边等于 $\sum_{n=1}^\infty\frac{n^2x-(1+n^2x)}{(1+n^2x)n^2x}$，其通项 $\le\frac1{xn^4}$；易见 $\frac1x\sum_{n\ge1}\frac1{n^4}$ 收敛，而且和函数当 $x\to\infty$ 时趋于 0。

> [!info] Rem. 7.27
> 这个类型的题目果然困难。尝试求 $x\to\infty$ 时 $x\mapsto\sum_{n=1}^\infty\frac1{x+n^2}$ 的渐近就不会了（大概能证明这个极限是 0）。

第二个思路:把 $u_n(x):=u(x,n)$ 和 $\int_n^{n+1}u(x,t)dt$ 比较，利用积分的性质。同样需要自己负责精确把握误差。（更重要的也许是:冷静分析为了证明我想要的极限或渐近，需要得到怎样的误差估计。）

> [!example] 7.28
> 同上 $f$，研究 $x\to0$ 时的渐近。

**Preuve :** 不难看出 $x\to0$ 时 $f(x)$ 多半是去 $\infty$ 了。考虑 $g(x)=\int_1^\infty\frac1{1+t^2x}dt$，比较 $f_n(x)=\frac1{1+n^2x}$ 与 $\int_n^{n+1}\frac{dt}{1+t^2x}$:由单调性，左边大一点，左边减右边不超过 $f(n)-f(n+1)$，进而 $\sum_{n=1}^\infty f_n-g(x)$ 不超过 $f(1)$，是一个固定有限数。但是
$$g(x)=\int_1^\infty\frac{dt}{1+t^2x}=\frac1{\sqrt x}\left(\frac\pi2-\arctan\sqrt x\right)\sim_0\frac{\pi}{2\sqrt x},$$
于是（$f-g=o(g)$）$f(x)\sim_0\frac{\pi}{2\sqrt x}$。

### 7.5 应用一:Peano 曲线

一个 Peano 曲线也通常叫 space-filling 曲线。

> [!note] Thm. 7.29
> 存在一个连续映射 $f:\mathbb R\to\mathbb R^2$，使得它是满射。

这里只证明 $\mathbb R^2$，实际上 $\mathbb R^n$ 都对；定义域中的 $\mathbb R$ 不是很本质，只要是有内点的区间都一样；最后，只要能构造一个映射像集包含一个小球，就可以模仿这个映射构造像集铺满的映射。下面用构造函数列的办法构造一列 $f_n:[0,1]\to\mathbb R^2$，使得像集盖满一个三角形。

定义 $f_0$ 是折线，使 $f_0([0,1/2])$ 是线段 $AB$、$f_0([1/2,1])$ 是线段 $BC$。性质就是从三角形 $ABC$ 的一个角进入，过一个顶点从另一个角出。

定义 $f_1$ 使得 $[0,1/4]\to(A\to b\to c)$、$[1/4,1/2]\to(c\to B\to a)$、$[1/2,3/4]\to(a\to c\to b)$、$[3/4,1]\to(b\to a\to C)$。

如果 $f_k$ 已经定义好了，$f_k$ 在 $[\frac i{4^k},\frac{i+1}{4^k}]$ 区间上走一个边长为 $2^{-k}$ 的小三角形的两条边，则 $f_{k+1}$ 在同样的区间上是一个分 8 段的折线，要点是 $f_{k+1}$ 在这一段上的像集也在上述 $2^{-k}$ 三角形中。严格表述为
$$|f_k-f_{k+1}|\le C2^{-k}.$$
上式说明 $f_n$ 是一致收敛的，进而有一个连续的极限（就是所求的 $f$）。

为什么 $f$ 填满了整个三角形?因为对任何 $x$、任何 $n$，边长为 $2^{-n}$ 的三角形一共有 $4^n$ 个，$f_n$ 的像经过了其中的每一个，所以存在 $t_n\in[0,1]$ 使 $|f_n(t_n)-x|\le C2^{-n}$。因为 $[0,1]$ 紧，于是有子列 $t_{n_k}\to t_0$，对这个子列的上式取极限、利用 $f_n$ 一致收敛于 $f$，可知 $\lim_{k\to\infty}f_{n_k}(t_{n_k})=f(t_0)=x$。

> [!info] Rem. 7.30
> 这里应该有一个思考题:连续曲线是可以覆盖平面的，可导的曲线可以么?我们应该有能力说明 $C^1$ 的曲线不可以。

### 7.6 应用二:连续处处不可导函数

本节构造一个属于 Weierstrass 的例子（历史上 Weierstrass 的例子是借助三角函数构造的，这个例子根据法国书的习题是 Van der Waerden 构造的）。

> [!note] Thm. 7.31
> 存在一个处处连续但是处处不可导的函数。

1. 令 $f(x)=d(x,\mathbb Z)=\min(x-\lfloor x\rfloor,\lfloor x\rfloor+1-x)$，则它是一个以 1 为周期的连续函数。令
$$F(x)=\sum_{n=1}^\infty10^{-n}f(10^nx).$$
几何意义明显。不难证明因为一致收敛，$F$ 是连续的。

2.（难点是为什么这个东西每点都不可导。）

> [!note] Lemma 7.32
> 设 $F$ 在 $x$ 点可导，则对任何数列 $(a_n),(b_n)$，如果 $a_n\nearrow x$ 且 $b_n\searrow x$，则 $\frac{F(b_n)-F(a_n)}{b_n-a_n}\to F'(x)$。这里单调收敛其实不是本质的，一方面下面用这个版本，另一方面避免了分母为 0 的可能性。

**Preuve :** 左边等于 $\frac{b_n-x}{b_n-a_n}\cdot\frac{F(b_n)-F(x)}{b_n-x}+\frac{x-a_n}{b_n-a_n}\cdot\frac{F(x)-F(a_n)}{x-a_n}$，然后用 $\varepsilon$-$N$ 来写。

对于任何 $x\in\mathbb R$，令 $b_n$ 是所有 $n$ 位小数中小于等于 $x$ 的最大的那个（从左逼近 $x$）、$a_n$ 是所有 $n$ 位小数中大于 $x$ 的最小的那个（从右逼近 $x$）。不难看出 $b_n$ 单调增而 $a_n$ 单调减，而且 $a_n-b_n=10^{-n}$（应用引理时只需把引理中的 $a_n$ 与这里的 $b_n$ 对调、引理中的 $b_n$ 与这里的 $a_n$ 对调即可）。由定义
$$F(b_n)-F(a_n)=\sum_{k=1}^\infty10^{-k}\left(f(10^kb_n)-f(10^ka_n)\right)=\sum_{k=1}^{n-1}10^{-k}\left(f(10^kb_n)-f(10^ka_n)\right).$$
下面的讨论本质上想说明:这时的 $10^kb_n$ 和 $10^ka_n$ 在 $f$ 的同一个斜坡上，不允许跨两个斜坡。对任何 $k=1,\dots,n-1$，$10^kb_n$ 至少有一位小数，设为 $10^kb_n=L.\alpha_1\alpha_2\cdots$，讨论:如果 $\alpha_1=0,1,2,3,4$，则 $L\le10^ka_n,10^kb_n\le L+0.5$；若 $\alpha_1=5,6,7,8,9$，则 $L+0.5\le10^ka_n,10^kb_n\le L+1$。不论是哪种，$10^{-k}\left(f(10^kb_n)-f(10^ka_n)\right)=\pm(b_n-a_n)$。换言之
$$\frac{F(b_n)-F(a_n)}{b_n-a_n}=\sum_{k=1}^{n-1}\pm1,$$
它必为整数且与 $n-1$ 同奇偶，随 $n$ 变化不可能收敛，与引理要求的极限存在矛盾，故 $F$ 处处不可导。（注:虽然 $a_n$ 比 $b_n$ 多一个 $10^{-k}$，也就是至多最后一个数位，但是存在进位的可能性，所以是可能等于 $L+0.5$ 的。）

### 7.7 Weierstrass 逼近定理

本节讲著名的 Weierstrass 逼近定理，证明很少有人记得住，但结论是每一个学过数学分析的人都知道的。

> [!note] Thm. 7.33
> 设 $f$ 是 $[0,1]$ 上的连续函数，对于任何 $\varepsilon>0$，存在多项式 $g$ 使得 $\sup_{[0,1]}|f-g|\le\varepsilon$。

作为推论，也可以等价地说下面两句:1. 存在一列多项式 $g_n$ 使得 $g_n$ 在 $[0,1]$ 上一致收敛于 $f$；2. 在 NVS $(C^0([a,b],\mathbb R),\|\cdot\|_\infty)$ 中多项式是稠密的。注意:以上定理只能是 $\mathbb R$ 变量的函数，$\mathbb C$ 变量肯定不对（不难证明复变量的多项式在圆圈上的积分等于它的常数项，所以只要你的连续函数不具备这个性质，就不能指望一致逼近成立）。

#### 7.7.1 证明外围

利用这几句话把问题约化:折线函数可以一致逼近任何连续函数（用一致连续）；折线函数不过是有限个 V 型函数的和（V 型函数本质上只依赖于四个实数 $(a,b,c,d)$，可归纳证明任何折线函数必须是有限个这样的 V 型函数的和）；所以最后只要考虑一个函数 $x\mapsto|x|$（任何其它的 V 型函数都是绝对值函数通过三步——平移、加上一个线性函数、乘以一个实数——得到，而多项式在这三步下不变）。只需要证明:

> [!note] Lemma 7.34
> 存在多项式序列一致逼近 $x\mapsto|x|$ 在 $[-1,1]$ 上。（这里 $[-1,1]$ 是虚指，任何 $[-M,M]$ 都可以。）

#### 7.7.2 关键引理证明（方法 1）

法国书上的证明，很难理解想法。设 $P_0(t)\equiv0$，且对任何 $n\in\mathbb N$ 令 $P_{n+1}(t)=\frac12(P_n(t)^2+t)$（$t\in[0,1]$），不难看出 $P_n(t)$ 是多项式。

用归纳法证明:对固定 $t$，$P_n(t)$ 随 $n$ 递增；对固定 $t$，$P_n(t)\le1$，因而一致有界，故 $\lim_{n\to\infty}P_n(t)$ 存在，记为 $f(t)$；且 $f(t)=\frac12(f(t)^2+t)$，由此 $f(t)=1-\sqrt{1-t}$。再声称 $P_n(t)$ 在 $[0,1]$ 上一致收敛到 $f$:用归纳法证明 (1) $P_n(t)$ 关于 $t$ 递增；(2) $P_{n+1}-P_n$ 也关于 $t$ 递增，事实上
$$P_{n+2}-P_{n+1}=\frac12(P_{n+1}-P_n)(P_{n+1}+P_n).$$
于是 $0\le f(t)-P_n(t)\le f(1)-P_n(1)$ 对一切 $t\in[0,1]$，有这个不等式就有 $P_n$ 一致收敛于 $f$ 了。（如果你懂 Dini 定理，就不需要下面这段证明；不过 Dini 也算大定理，下面证明初等。）

最后令 $Q_n(x)=1-P_n(1-x^2)$，则 $Q_n$ 在 $[-1,1]$ 上一致收敛于 $1-f(1-x^2)=|x|$。

#### 7.7.3 关键引理证明（方法 2）

见 Baby Rudin Section 7.26（写得清楚，包括最后抽象的 Stone-Weierstrass）。Rudin 的证明概要:

1. 设 $f$ 是 $[a,b]$ 上的连续函数。可以减去一个线性函数，假设 $f(a)=f(b)=0$；再令 $f$ 在 $[a,b]$ 外为 0，于是假设 $f$ 定义在 $\mathbb R$ 上且连续。不妨设 $[a,b]=[0,1]$。
2. 令 $Q_n(x)=c_n(1-x^2)^n$，其中 $c_n$ 取得使 $\int_{-1}^1Q_n(x)dx=1$（这是一种惯用伎俩，之后我们会说这个事情叫磨光；直观地看 $Q_n$ 的几何意义，就是一个越来越集中的权重）。令 $P_n(x)=\int_{-1}^1f(x+t)Q_n(t)dt$（$\forall x\in\mathbb R$），我们声称 $P_n$ 在 $[0,1]$ 上一致收敛于 $f$。这是一个我们不知道要重复多少遍的逻辑、反复使用的证明片段。
3. $P_n$ 在 $[0,1]$ 上的限制是 $x$ 的多项式。做变量代换 $x+t=y$（因 $t\in[-1,1]$，$y\in[-1+x,1+x]$），
$$P_n(x)=\int_{-1+x}^{1+x}f(y)Q_n(y-x)dy.$$
当 $x\in[0,1]$ 时 $[-1+x,1+x]\supset[0,1]$，而 $f$ 在 $[0,1]$ 之外恒等于 0，所以 $P_n(x)=\int_0^1f(y)Q_n(y-x)dy$。因为 $Q_n(y-x)$ 是一个多项式，$Q_n(y-x)=b_{2n}(y)x^{2n}+\cdots+b_1(y)x+b_0(y)$，代入得 $P_n(x)=\int_0^1f(y)\left(\sum_{k=0}^{2n}b_k(y)x^k\right)dy$，这明显是 $x$ 的多项式（把 $x^k$ 放到积分外面去）。

## 8. Stone-Weierstrass

这一段来自 Baby Rudin，没有可能比它写得更好。同时，那里也有说明:为什么从实值改到复值是不对的，但是再加上共轭封闭条件就够了。

首先考虑实值。由于暂时没有学习紧拓扑空间，就考虑 $\mathbb R^n$ 的紧子集 $K$。$K$ 上定义的函数集 $A$ 称为一个代数，如果它（对加法、乘法、数乘封闭）。连续函数全体当然是一个代数，我们考虑的是其中的子代数。

> [!note] Déf. 8.1
> $A$ **分离点**（separates points），如果对任何 $x,y\in K$（$x\ne y$），存在 $f\in A$ 使 $f(x)\ne f(y)$。

### 8.1 实值函数

> [!note] Thm. 8.2 (Stone-Weierstrass)
> 设 $A$ 是紧集 $K$ 上连续函数的代数。若 $A$ 分离点且 $1\in A$，则 $\bar A=C(K)$（闭包是对 $\|\cdot\|_\infty$ 而言，也就是一致收敛逼近的文雅说法）。

**Preuve :** 1. 若 $A\subset C(K)$ 是代数，则 $\bar A$ 也是:若 $f,g\in\bar A$，有 $f_i,g_i$ 分别一致收敛于 $f,g$，则 $f_i+g_i$ 一致收敛于 $f+g$，故 $f+g\in\bar A$（乘法同理）。
2. 对任何 $x_1\ne x_2$ 与任何 $c_1,c_2\in\mathbb R$，存在 $f\in A$ 使 $f(x_i)=c_i$（$i=1,2$）。固定 $x_1,x_2$，由分离点有 $h\in A$ 使 $h(x_1)\ne h(x_2)$；解方程组 $ah(x_1)+b=c_1$、$ah(x_2)+b=c_2$，因 $h(x_1)\ne h(x_2)$ 有唯一解；又 $1\in A$，故 $ah+b\in A$。
3. 若 $f\in\bar A$，则 $|f|\in\bar A$。回忆可以找到多项式序列 $P_n$ 使 $\max_{x\in[-M,M]}|P_n(x)-|x||\to0$。因 $f\in C(K)$ 有界，设界为 $M$，于是 $P_n(f)$ 在 $K$ 上一致收敛于 $|f|$；另一方面 $P_n(f)$ 是 $f$ 的多项式，因而属于 $A$，故 $|f|\in\bar A$。
4. 若 $f,g\in\bar A$，则 $\max(f,g),\min(f,g)\in\bar A$，只需注意 $\max(a,b)=\frac{(a+b)+|a-b|}2$、$\min(a,b)=\frac{(a+b)-|a-b|}2$。
5. 给定任何连续函数 $h\in C(K)$、任何 $x\in K$ 与任何 $\varepsilon>0$，存在 $g_x\in\bar A$ 满足 $g_x(x)=h(x)$ 且 $g_x(y)\ge h(y)-\varepsilon$（$\forall y\in K$）。固定 $h,\varepsilon$，固定 $x$，对任何 $y$ 由第 2 步可找到 $g_{x,y}\in A$ 使 $g_{x,y}(x)=h(x)$、$g_{x,y}(y)=h(y)$（$x=y$ 时平凡）。由 $g_{x,y}$ 与 $h$ 在 $y$ 的连续性，存在小邻域 $B(y,r_y)$ 使 $g_{x,y}(z)\ge h(z)-\varepsilon$ 对一切 $z\in B(y,r_y)$。由 $K$ 的紧性，可取有限个 $y_1,\dots,y_m$ 使 $B(y_i,r_{y_i})$ 覆盖 $K$。令 $g_x:=\max_{i=1,\dots,m}g_{x,y_i}$，则 $g_x(x)=h(x)$、$g_x(z)\ge h(z)-\varepsilon$（$\forall z\in K$），且由第 4 步知 $g_x\in\bar A$。
6. 给定任何 $h\in C(K)$ 与任何 $\varepsilon>0$，可以找到 $f\in\bar A$ 使 $|h(x)-f(x)|\le\varepsilon$（$\forall x\in K$）。固定 $h,\varepsilon$，对每个 $x\in K$ 有第 5 步给的 $g_x$。由 $g_x$ 与 $h$ 的连续性，存在 $x$ 的邻域 $B(x,\rho_x)$ 使 $g_x(z)\le h(z)+\varepsilon$（$\forall z\in B(x,\rho_x)$）。如前，有有限个 $x_1,\dots,x_l$ 使 $B(x_i,\rho_{x_i})$ 覆盖 $K$。最后定义 $f:=\min_{i=1,\dots,l}g_{x_i}$。由第 5 步每个 $g_{x_i}\ge h-\varepsilon$，故 $f\ge h-\varepsilon$；又 $\forall z\in K$ 存在 $i$ 使 $z\in B(x_i,\rho_{x_i})$，故 $f(z)\le g_{x_i}(z)\le h(z)+\varepsilon$。

应该考虑举两个例子，至少不同于原始的 Weierstrass 定理。

> [!example] 8.3 / 8.4
> 考虑任何 $\mathbb R^n$ 上的紧集（比如闭球），$\mathbb R^n$ 上的多项式是一个可以分离点的代数。
> 考虑圆周 $S^1$ 上的连续函数 $C(S^1)$，考虑三角多项式 $a_0+\sum_{n=1}^N a_n\cos nx+b_n\sin nx$ 全体。（这里把 $S^1$ 看成周期函数；周期是不是 $2\pi$，这个结论都一样对。）

### 8.2 复值函数

同样考虑紧集 $K$ 上的复值函数。多项式全体尽管继续是代数、继续保持了分离点的性质，但是已经不能用于逼近任何连续函数了。主要原因在于，以后将会学到所有的多项式都是全纯函数，它们一定满足一个叫做平均值等式的东西
$$f(z)=\frac1{|B(z,r)|}\int_{B(z,r)}f(y)dy$$
（这里是个二元积分）。如果有连续函数这个东西不成立，自然不可能作为多项式全体的一致逼近极限。

这事可以修改。设 $C(K,\mathbb C)$ 是复值连续函数全体，$A$ 是其中一个含有 1 的、有分离点性质的（复）代数，如果它还关于共轭运算封闭，则 $\bar A=C(K,\mathbb C)$。

**Preuve（要点）:** 只需证明对任何 $f\in C(K,\mathbb R)$ 有 $f\in\bar A$。事实上 $C(K,\mathbb C)$ 中的一般函数形如 $f+ig$；若 $f,g\in\bar A$（$\bar A$ 是复代数），则 $f+ig\in\bar A$。令 $A_{\mathbb R}=\{f\in A:f\in C(K,\mathbb R)\}$，则 $A_{\mathbb R}$ 是含 1 的（实）代数。声称它分离点:注意若 $f+ig\in A$，则 $f$ 和 $g$ 都属于 $A_{\mathbb R}$（这句用到了 $A$ 关于共轭封闭的假设:因共轭封闭才有取实部封闭，才知道 $f,g\in A$，才知道 $f,g\in A_{\mathbb R}$）。若 $x,y\in K$ 被复值函数 $f+ig$ 分离，则必被 $f$ 或 $g$ 分离，故 $A_{\mathbb R}$ 分离点。由实值版本的 Stone-Weierstrass，$\overline{A_{\mathbb R}}=C(K,\mathbb R)$，从而 $\bar A=C(K,\mathbb C)$。（这里说复代数，是关于复数的数乘封闭的；$A$ 是复代数，$\bar A$ 是复代数不难证明。）
