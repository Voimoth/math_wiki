---
title: 代数 III 习题课 · 9 有限 Abel 群的结构定理
created: 2026-10-21
updated: 2026-10-21
type: notes
tags: [group-theory, algebre, td, abelian]
confidence: high
---

# 9 有限 Abel 群的结构定理（2026-10-12 讲义）

讲义以十七道习题把结构定理拆成两条互不借款的主线：**存在性**（分裂短正合列 → 内射群与特征延拓 → 分裂出最大阶循环子群 → 归纳）与**唯一性**（用 $p$-挠层次把因子读回来）。记号：$C_n=\mathbb Z/n\mathbb Z$、$G[n]=\{x:nx=0\}$、$nG=\{nx\}$、$v_p$ 为 $p$-进指数、$\exp(G)$ 为指数。

要证的结论：每个非平凡有限 Abel 群 $G$ 有

1. 初等因子分解：$G$ 是素数幂阶循环群的直和，素数幂作为多重集唯一；
2. 不变因子分解：$G\cong C_{d_1}\oplus\cdots\oplus C_{d_r}$，$1<d_1\mid\cdots\mid d_r$，列表 $(d_1,\dots,d_r)$ 唯一。

唯一性指因子的同构类型唯一，母群中的循环子群本身并不唯一。

## 9.1 存在性：内射群、特征与分裂（习题 1–7）

> [!note] 习题 1（短五引理）
> 两行短正合列的交换图，若 $f_1,f_3$ 同时为单、同时为满或同时为同构，则 $f_2$ 也如此。

**要点.** 单：取 $b\in\ker f_2$，由 $f_3\pi_1(b)=\pi_2f_2(b)=0$ 及 $f_3$ 单得 $\pi_1(b)=0$，于是 $b=i_1(a)$；再由 $f_2i_1(a)=i_2f_1(a)=0$ 与 $i_2$ 单得 $f_1(a)=0$，$a=0$。满：任给 $b_2$，用 $f_3$ 满提升 $\pi_2(b_2)$，修正后落进 $\operatorname{im}i_2$ 再用 $f_1$ 满。同构由前两条合成。

> [!note] 习题 2（分裂的三种说法）
> 对 $0\to A\xrightarrow{i}B\xrightarrow{\pi}C\to0$：存在截面 $s$（$\pi s=\mathrm{Id}_C$）、存在收缩 $r$（$ri=\mathrm{Id}_A$）、存在同构 $F:A\oplus C\to B$（$F(a,0)=i(a)$、$\pi F(a,c)=c$）三条件等价。

**要点.** 有 $s$ 时令 $F(a,c)=i(a)+s(c)$，得 $B=i(A)\oplus s(C)$；有 $r$ 时 $B=i(A)\oplus\ker r$，且 $\pi|_{\ker r}$ 是到 $C$ 的同构，其逆即 $s$。反例：$0\to C_p\xrightarrow{\cdot p}C_{p^2}\to C_p\to0$ 不分裂——若分裂则 $C_{p^2}\cong C_p\oplus C_p$，但左端有 $p^2$ 阶元、右端没有。

> [!note] 习题 3（Hom 的左正合与内射群）
> (1) $0\to\operatorname{Hom}(M,A)\to\operatorname{Hom}(M,B)\to\operatorname{Hom}(M,C)$ 与 $0\to\operatorname{Hom}(C,M)\to\operatorname{Hom}(B,M)\to\operatorname{Hom}(A,M)$ 正合。
> (2) $I$ 内射 $\iff$ 对每个短正合列，限制 $\operatorname{Hom}(B,I)\to\operatorname{Hom}(A,I)$ 满。
> (3) 左端 $A$ 内射 $\Rightarrow$ 该列分裂。

**要点.** (1) 前正合只需 $\ker\pi$ 上的函子性，满射一般会断，这正是内射/投射要单独定义的缘由。(3) 把 $\mathrm{Id}_A$ 沿 $A\hookrightarrow B$ 延拓得 $r$，即收缩。

> [!note] 习题 4（可除群 $=$ 内射群）
> $D$ 可除指 $nD=D$。(1) 可除群的同态沿 $H\le B$ 逐步延拓到 $H+\mathbb Zb$；(2) Zorn 引理（有限 $B$ 时改用有限次延拓）；(3) 反过来内射 $\Rightarrow$ 可除，对 $n\mathbb Z\subseteq\mathbb Z$ 用 $n\mapsto d$ 的延拓；(4) $\mathbb Q$、$\mathbb Q/\mathbb Z$、$\mathbb C^\times$ 内射；非平凡有限 Abel 群都不内射，$\mu_n$（$n>1$）不内射。

**要点.** 延拓的关键：$\{k:kb\in H\}=m\mathbb Z$，取 $d$ 使 $md=f(mb)$，令 $\tilde f(h+kb)=f(h)+kd$。有限群不可除取 $n=|G|$ 即 $nG=0\ne G$。这条把「分裂」升级成一种可判定的性质：**只要一端可除/内射，短正合列必分裂**。

> [!note] 习题 5（特征群与特征延拓）
> $\hat A=\operatorname{Hom}(A,\mathbb C^\times)$。(1) $\widehat{C_n}\cong\mu_n\cong C_n$；(2) $H\le A$ 时每个 $H$ 的特征延拓到 $A$，且 $1\to\widehat{A/H}\to\hat A\to\hat H\to1$ 正合；(3) 有限 $A$ 的特征分离元素。

**要点.** (2) 延拓用的是 $\mathbb C^\times$ 的内射性（习题 4），正合列右端的满射就是「能延拓」。(3) 对 $a\ne0$ 先在 $\langle a\rangle$ 上取 $\chi(a)$ 为本原 $\operatorname{ord}(a)$ 次根，再延拓。

> [!note] 习题 6（用特征分裂出最大阶循环子群）
> 设 $n=\exp G$。(1) 存在阶为 $n$ 的 $a$；(2) 取 $\chi_0(a)=\zeta_n$ 并延拓为 $\chi$，$\chi(G)=\mu_n$；(3) $r=\chi_0^{-1}\circ\chi$ 满足 $r|_{\langle a\rangle}=\mathrm{Id}$，故 $0\to\ker r\to G\xrightarrow{r}\langle a\rangle\to0$ 分裂，$G=K\oplus\langle a\rangle$；(4) $\exp K\mid n$，对 $|G|$ 归纳得 $G\cong C_{d_1}\oplus\cdots\oplus C_{d_r}$，$d_r=n$；(5) 用 CRT 拆成素数幂。

**要点.** (1) 写 $n=\prod p^{e_p}$，每个 $p$ 在 $G(p)$ 中取阶最大的元素——$G(p)$ 中元素阶都是 $p$ 的幂，指数即最大阶，故存在阶恰为 $p^{e_p}$ 的 $a_p$；则 $a=\prod a_p$ 的阶是 $n$（不同素数部分互素）。(3) 是本题的心脏：$\chi$ 把 $G$ 满射到 $\mu_n$，而 $\langle a\rangle$ 在其上恰好同构，于是可以把 $\chi$ 拉回成一个**收缩**，得到直和分裂。归纳给出整除链，正是不变因子形状；拆素数幂给出初等因子。

> [!note] 习题 7（算例：$G=C_{12}\oplus C_{18}$）
> $\chi(\bar x,\bar y)=\exp 2\pi i\left(\frac{x}{12}+\frac{y}{18}\right)$，$a=(\bar1,\bar1)$。

**要点.** $\operatorname{ord}(a)=\operatorname{lcm}(12,18)=36=\exp G$，$\chi(a)=e^{2\pi i\cdot5/36}$ 为本原 36 次根。$\chi(\bar x,\bar y)=e^{2\pi i(3x+2y)/36}$，故 $\ker\chi=\{3x+2y\equiv0\ (36)\}\cong C_6=\langle(2,15)\rangle$。不变因子：$C_{12}\oplus C_{18}\cong C_6\oplus C_{36}$（$d_1=\gcd(12,18)=6$、$d_2=\operatorname{lcm}=36$）。收缩映射为
$$r(x,y)=(15x+22y)\,a\pmod{36},$$
（$5^{-1}\equiv29$，$29\cdot3=87\equiv15$、$29\cdot2=58\equiv22$），验证 $r(a)=a$。与 CRT 给的抽象同构相比，这里还具体给出了 $C_6$ 因子 $\ker\chi$ 与收缩 $r$。

## 9.2 唯一性：由例子读出两种因子（习题 8–13）

> [!note] 习题 8（$p$-准素分量）
> $G(p)=\{x:\exists k,\ p^kx=0\}$。(1) 不用结构定理证明 $\bigoplus_{p\mid|G|}G(p)\to G$ 是同构；(2) 任何同构都把 $G(p)$ 送到 $H(p)$，故 $G(p)$ 是特征子群；(3) 只需证有限 Abel $p$-群的循环因子唯一。

**要点.** 对 $|G|=\prod p^{e_p}$ 取幂等整数 $c_p$（$c_p\equiv1\bmod p^{e_p}$、$c_p\equiv0\bmod q^{e_q}$），$x\mapsto c_px$ 就是到 $G(p)$ 的投影，直和随 CRT 成立。特征性把「同构」限制在素数内，唯一性问题遂逐素数处理。

> [!note] 习题 9（不能嵌入的三组例子）
> (1) $C_3\oplus C_3\not\hookrightarrow C_{27}$；(2) $C_3\oplus C_9\oplus C_9\not\hookrightarrow C_3\oplus C_3\oplus C_{81}$（阶更小、$p$-挠同构，但 $(3A)[3]$ 与 $(3B)[3]$ 不同）；(3) $C_8\oplus C_8\oplus C_2$ 与 $C_8\oplus C_4\oplus C_4$ 的阶、指数、最小生成元数都相同却不同构。

**要点.** 比较的是逐层挠群的大小：$|A[3]|=9>3=|B[3]|$；(2) 中 $|(3A)[3]|=9$ 而 $|(3B)[3]|=3$；(3) 中 $|A[4]|=4\cdot4\cdot2=32$、$|B[4]|=4\cdot4\cdot4=64$。一次计数不够时必须逐层数——这正是习题 10 的形式化。

> [!note] 习题 10（用 $a_k,b_k$ 读回初等因子）
> $a_k=\log_p|G[p^k]|$、$b_k=a_k-a_{k-1}$，设 $G\cong\bigoplus C_{p^{\lambda_i}}$（降序）。(1) $a_k=\sum_i\min(k,\lambda_i)$、$b_k=\#\{i:\lambda_i\ge k\}$；(2) $b_k=\dim_{\mathbb F_p}\!\left(p^{k-1}G/p^kG\right)=\dim_{\mathbb F_p}\!\left((p^{k-1}G)[p]\right)$；(3) 由此恢复初等因子唯一性；(4) 已知 $|G[p]|=p^5$、$|G[p^2]|=p^9$、$|G[p^3]|=p^{11}$、$|G|=p^{12}$，恢复 $G$。

**要点.** $b_k$ 是「高度 $\ge k$ 的柱子个数」，即杨图的列长。第 (4) 问：$a=(5,9,11,12)$、$b=(5,4,2,1)$，故
$$G\cong C_{p^4}\oplus C_{p^3}\oplus C_{p^2}\oplus C_{p^2}\oplus C_p;$$
阶恰为 $p^3$ 的元素有 $p^{11}-p^9$ 个，阶 $p^3$ 的循环子群有 $(p^{11}-p^9)/(p^3-p^2)=p^7(p+1)$ 个。

> [!note] 习题 11（嵌入判据）
> $A=\bigoplus_{i\le r}C_{p^{\lambda_i}}$、$B=\bigoplus_{j\le s}C_{p^{\mu_j}}$，不用唯一性：(1) $A\hookrightarrow B\Rightarrow\dim(p^{k-1}A)[p]\le\dim(p^{k-1}B)[p]$；(2) $A\hookrightarrow B\iff r\le s$ 且 $\lambda_i\le\mu_i\ (i\le r)$；(3) 对同一群的两个分解双向用判据，再证唯一性；(4) 单射不必诱导 $A/pA\hookrightarrow B/pB$。

**要点.** (2) 必要性取 $k=\lambda_i$；(4) 反例 $C_p\hookrightarrow C_{p^2}$：$A/pA=C_p$、$B/pB=C_p$，但 $A\subseteq pB$，诱导映射为零。

> [!note] 习题 12（初等因子对齐成不变因子）
> 每个 $p$ 的指数从小到大排列、左端补零到长度 $r=\max_p r_p$，$d_j=\prod_p p^{e_{p,j}}$，则 $1<d_1\mid\cdots\mid d_r$ 且 $G\cong\bigoplus C_{d_j}$；反向对齐表唯一。化为标准形：$C_6\oplus C_{10}$、$C_{72}\oplus C_{120}$、$C_2\oplus C_4\oplus C_8\oplus C_9\oplus C_5\oplus C_{25}$。

**要点.** 结果分别是
$$C_6\oplus C_{10}\cong C_2\oplus C_{30},\qquad C_{72}\oplus C_{120}\cong C_{24}\oplus C_{360},$$
$$C_2\oplus C_4\oplus C_8\oplus C_9\oplus C_5\oplus C_{25}\cong C_2\oplus C_{20}\oplus C_{1800}.$$
对齐表按素数分行：$2$ 行 $e=(1,2,3)$、$3$ 行 $(0,0,2)$、$5$ 行 $(0,1,2)$，每列相乘得 $d_j$。$d_1>1$ 是去掉平凡因子：列数统一取 $r=\max_p r_p$，不足的左端补零。仅按数值大小排列任意循环因子不行——$d_j$ 必须满足整除链，这是把不同素数的指数**从右端对齐**的结果。

> [!note] 习题 13（计数与三个不变量）
> (1) 3600 阶有限 Abel 群有多少同构类？(2) $|G|=\prod d_j$、$\exp G=d_r$、最小生成元数 $d(G)=r$；(3) 用 $b_k$ 表示这三个量；(4) 在 $C_p\oplus C_p$ 中写出两个不同的循环直和分解。

**要点.** (1) $3600=2^4\cdot3^2\cdot5^2$，类数 $=p(4)p(2)p(2)=5\cdot2\cdot2=20$，整数分拆在这里进入：每个素数指数的一种分拆给一组 $\lambda$。(2) 由整除链直接读出。(3) $|G|=p^{\sum b_k}$、$r=b_1$、$\exp=p^{\max\{k:b_k>0\}}$。(4) $C_p\oplus C_p$ 中任一非平凡循环子群都有补，取不同的直线即得不同的分解——**因子由群内在确定，因子的选取不一定**。

## 9.3 对偶、投射与计算（习题 14–17）

> [!note] 习题 14（对偶与挠）
> (1) 有限 $G$ 满足 $G\cong\hat{\hat G}$，且评价映射 $x\mapsto(\chi\mapsto\chi(x))$ 是自然同构（$G\cong\hat G$ 的任一具体同构依赖选择）；(2) $H\le G$ 时 $G$ 有商群 $\cong H$，$Q$ 为商群时 $G$ 有子群 $\cong Q$；(3) $\widehat{A[n]}\cong\hat A/(\hat A)_n$，其中 $(\hat A)_n=\{\chi^n\}$，不假设 $A\xrightarrow{n}A$ 满。

> [!note] 习题 15（投射）
> $P$ 投射指对每个满射 $q:B\to C$、每个 $f:P\to C$ 存在 $g$ 使 $qg=f$。(1) 等价于 $\operatorname{Hom}(P,-)$ 保短正合；(2) 自由 Abel 群投射；(3) 右端 $C$ 投射时短正合列分裂。

**要点.** 与习题 3 对称：内射 = $\operatorname{Hom}(-,I)$ 保满射，投射 = $\operatorname{Hom}(P,-)$ 保满射。

> [!note] 习题 16（$S^1$ 的连续特征）
> 每个连续特征 $S^1\to\mathbb C^\times$ 的像落在 $S^1$，且唯一地形如 $z\mapsto z^m$，故 $\widehat{S^1}_{\rm cont}\cong\mathbb Z$。

**要点.** 先在单位根上看（稠密），连续性把整个圆上的值钉死；$\mathbb Z$ 与 $\hat{\mathbb Z}$ 的对偶关系由此显出「紧 ↔ 离散」。

> [!note] 习题 17（同态计数与直和因子）
> (1) $\operatorname{Hom}(C_m,C_n)\cong C_{\gcd(m,n)}$，并对 $G=\bigoplus C_{p^{\lambda_i}}$、$H=\bigoplus C_{p^{\mu_j}}$ 求 $|\operatorname{Hom}(G,H)|$；(2) $H\le G$ 且 $G=H+pG\Rightarrow G=H$，故自同态可逆 $\iff$ 其在 $G/pG$ 上可逆；(3) 算 $|\operatorname{End}(C_{p^3}\oplus C_p)|$ 与 $|\operatorname{Aut}(C_{p^3}\oplus C_p)|$；(4) 列出 $C_{p^2}\oplus C_p$ 的全部 $p$ 阶子群，判定哪些是直和因子，并求 $\operatorname{Aut}$ 的轨道。

**要点.** (2) 反复代入得 $G/H=p(G/H)$，而有限 $p$-群的非平凡商群满足 $pM\ne M$，故 $G/H=0$。这是 Nakayama 引理的有限版，也是「自同构 ⇔ mod $p$ 可逆」的来源。(3) $\operatorname{End}$ 是 $2\times2$ 分块，$\operatorname{Hom}(C_{p^i},C_{p^j})\cong C_{p^{\min(i,j)}}$，故 $|\operatorname{End}|=p^3\cdot p\cdot p\cdot p=p^6$；$\operatorname{Aut}(G)\to \mathrm{GL}_2(\mathbb F_p)$ 满（核 $=1+\operatorname{Hom}(G,pG)$，大小 $p^5$），故
$$|\operatorname{Aut}(G)|=p^5\cdot|\mathrm{GL}_2(\mathbb F_p)|=p^6(p-1)^2(p+1).$$
(4) $p$ 阶子群对应 $G/pG\cong\mathbb F_p^2$ 的一维子空间，共 $p+1$ 个；其中 $pG\cong C_p$ 不是直和因子，其余 $p$ 个都是。$\operatorname{Aut}(G)$ 在 $p+1$ 个上恰有两个轨道：$\{pG\}$（特征子群）与其余 $p$ 个。

## 相关概念

- [[代数III/概念/有限阿贝尔群结构]]
- [[代数III/概念/特征标与正交关系]]
- [[代数III/概念/同构定理]]
- [[代数III/概念/模]]
- [[代数I/概念/循环群]]
