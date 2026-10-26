---
title: 代数 III 习题课 · 11 初等方阵与 SLn 的生成
created: 2026-10-27
updated: 2026-10-27
type: notes
tags: [algebre, linear-groups, td, elementary-matrices]
sources: [代数III 习题课讲义 2026-10-20]
confidence: high
---

# 11 初等方阵与 $\mathrm{SL}_n$ 的生成（2026-10-20 讲义）

约定：$R$ 为含幺交换环，$n\ge2$，$E_{ij}$ 为 $(i,j)$ 处为 $1$ 其余为 $0$ 的矩阵，$E_{ij}(\lambda)=I_n+\lambda E_{ij}$（$i\neq j$）。本讲义所称**初等方阵**（matrice élémentaire）专指这种倍加矩阵；正课里同一对象叫**平延**（transvection，见 [[代数III/概念/线性群与特殊线性群]]）。记 $\mathrm{GL}_n(R)$、$\mathrm{SL}_n(R)$、$R^\times$。前四题取实系数。

主线：初等方阵是行、列变换的矩阵形式，因此是消元的原子；本讲义把「消元」从域推到 $\mathbb Z/p^r\mathbb Z$ 与 $\mathbb Z$，落点是 $\mathrm{SL}_m(\mathbb Z)\twoheadrightarrow\mathrm{SL}_m(\mathbb Z/N)$ 与 Smith 标准形。

## 11.1 具体计算（第 1–3 题）

**第 1 题.** $\det E_{ij}(\lambda)=1$（上三角或下三角且对角为 $1$），$E_{ij}(\lambda)^{-1}=E_{ij}(-\lambda)$：由 $E_{ij}^2=0$ 得 $(I+\lambda E_{ij})(I-\lambda E_{ij})=I$。例如
$$E_{12}(2)=\begin{pmatrix}1&2&0\\0&1&0\\0&0&1\end{pmatrix},\quad E_{23}(-1)=\begin{pmatrix}1&0&0\\0&1&-1\\0&0&1\end{pmatrix},\quad E_{31}(3)=\begin{pmatrix}1&0&0\\0&1&0\\3&0&1\end{pmatrix},$$
三者行列式均为 $1$，逆分别把 $\lambda$ 换成 $-\lambda$。

**第 2 题.** 关键是记住**左行右列**且下标的方向：

- 左乘 $E_{ij}(\lambda)$：第 $i$ 行 $\leftarrow$ 第 $i$ 行 $+\lambda\cdot$ 第 $j$ 行。理由 $(E_{ij}(\lambda)A)_{i\cdot}=A_{i\cdot}+\lambda A_{j\cdot}$，其余行不变。
- 右乘 $E_{ij}(\lambda)$：第 $j$ 列 $\leftarrow$ 第 $j$ 列 $+\lambda\cdot$ 第 $i$ 列。理由 $(AE_{ij}(\lambda))_{\cdot j}=A_{\cdot j}+\lambda A_{\cdot i}$。

对 $A=\begin{pmatrix}1&2\\3&4\end{pmatrix}$：$E_{12}(2)A=\begin{pmatrix}7&10\\3&4\end{pmatrix}$（第一行加两倍第二行），$E_{21}(-1)A=\begin{pmatrix}-2&-2\\3&4\end{pmatrix}$（第二行减第一行），$AE_{12}(2)=\begin{pmatrix}1&4\\3&10\end{pmatrix}$（第二列加两倍第一列），$AE_{21}(-1)=\begin{pmatrix}-2&2\\-1&4\end{pmatrix}$（第一列减第二列）。

**第 3 题.** (a) $E_{ij}^2=0$（$i\neq j$ 时 $E_{ij}E_{ij}$ 的指标链 $i\to j$ 断开），展开即得
$$E_{ij}(a)E_{ij}(b)=I+(a+b)E_{ij}+abE_{ij}^2=E_{ij}(a+b).$$
(b) $E_{ij}(a)^{-1}=E_{ij}(-a)$；$E_{12}(2)^5=E_{12}(10)$（这是加法，不是 $2^5$）。(c) 二阶时
$$E_{12}(1)E_{21}(1)=\begin{pmatrix}2&1\\1&1\end{pmatrix}\neq\begin{pmatrix}1&1\\1&2\end{pmatrix}=E_{21}(1)E_{12}(1),$$
故初等方阵乘法不交换——这正是 $\mathrm{SL}_2$ 非交换的原子原因。

## 11.2 化成初等矩阵的乘积（第 4 题）

$A=\begin{pmatrix}1&2\\3&7\end{pmatrix}$。

(a) 第二行减三倍第一行：$E_{21}(-3)A=\begin{pmatrix}1&2\\0&1\end{pmatrix}$；第一行减两倍第二行：$E_{12}(-2)E_{21}(-3)A=I_2$。取 $Q=E_{12}(-2)$、$P=E_{21}(-3)$，则 $QPA=I_2$。

(b) $A=P^{-1}Q^{-1}=E_{21}(3)E_{12}(2)$（注：$E_{21}(3)E_{12}(2)=\begin{pmatrix}1&2\\3&7\end{pmatrix}$ 直接验算）。

(c) $A^{-1}=QP=E_{12}(-2)E_{21}(-3)=\begin{pmatrix}7&-2\\-3&1\end{pmatrix}$，与 $\frac{1}{1}\begin{pmatrix}7&-2\\-3&1\end{pmatrix}$ 一致。

> [!tip] 方法
> 「把 $A$ 化成 $I$ 的行变换序列」的矩阵乘积就是 $A^{-1}$；其逆序的逆矩阵给出 $A$ 的初等分解。这个方法本身不依赖 $2\times2$，是高斯消元的矩阵版本。

## 11.3 模 $5$ 的计算（第 5 题）

$U=\begin{pmatrix}1&2\\0&1\end{pmatrix}\in\mathrm{SL}_2(\mathbb F_5)$，$\mathrm{char}=5$ 时 $U^n=\begin{pmatrix}1&2n\\0&1\end{pmatrix}$：
$$U^2=\begin{pmatrix}1&4\\0&1\end{pmatrix},\qquad U^3=\begin{pmatrix}1&1\\0&1\end{pmatrix},\qquad U^{-1}=\begin{pmatrix}1&3\\0&1\end{pmatrix}.$$
$U^r=I\iff 2r\equiv0\pmod 5\iff 5\mid r$，故 $U$ 的阶为 $5$。（一般地 $E_{ij}(\lambda)$ 在 $\mathrm{SL}_n(K)$ 中的阶：$K=\mathbb F_p$ 时为 $p$；$\mathrm{char}\,0$ 时无穷。）

## 11.4 域上的生成问题（第 6 题）

(a) 记 $J=\begin{pmatrix}0&1\\-1&0\end{pmatrix}$。两个平延相乘给出
$$E_{12}(a)E_{21}(-a^{-1})=\begin{pmatrix}0&a\\-a^{-1}&1\end{pmatrix},\qquad E_{12}(a)E_{21}(-a^{-1})E_{12}(a)=\begin{pmatrix}0&a\\-a^{-1}&0\end{pmatrix}=\operatorname{diag}(a,a^{-1})\,J$$
（最后一步右乘 $E_{12}(a)$ 使第二列加上 $a$ 倍第一列，右下角 $1-a^{-1}a=0$）。再由 (b) 的分解 $J^{-1}=E_{12}(-1)E_{21}(1)E_{12}(-1)$，得显式乘积
$$\operatorname{diag}(a,a^{-1})=E_{12}(a)\,E_{21}(-a^{-1})\,E_{12}(a)\,E_{12}(-1)\,E_{21}(1)\,E_{12}(-1).$$
验算：$\begin{pmatrix}0&a\\-a^{-1}&0\end{pmatrix}\begin{pmatrix}0&-1\\1&0\end{pmatrix}=\begin{pmatrix}a&0\\0&a^{-1}\end{pmatrix}$。更短的路子是先证 (c)（$\mathrm{SL}_2(K)$ 由平延生成），$\operatorname{diag}(a,a^{-1})\in\mathrm{SL}_2$ 的存在性即自动成立；上式是它的显式六因子版本。

(b) $J=\begin{pmatrix}0&1\\-1&0\end{pmatrix}=E_{12}(1)E_{21}(-1)E_{12}(1)$：
$$\begin{pmatrix}1&1\\0&1\end{pmatrix}\begin{pmatrix}1&0\\-1&1\end{pmatrix}\begin{pmatrix}1&1\\0&1\end{pmatrix}=\begin{pmatrix}0&1\\-1&0\end{pmatrix}.$$
(c)(d) 由 $\mathrm{SL}_n(K)$ 的消元生成：$n=2$ 时任意 $\begin{pmatrix}a&b\\c&d\end{pmatrix}$（$ad-bc=1$）分 $a\neq0$ 与 $a=0$（此时 $b,c\neq0$，先用 $J$ 型的平延把 $a$ 弄成非零）两类，用 $R_2\leftarrow R_2-\frac caR_1$ 消去 $c$，剩下 $\operatorname{diag}(a,a^{-1})$，由 (a) 处理；$n\ge3$ 时用置换型平延把任一非对角元搬到 $(1,2)$，用 $\mathrm{SL}_2$ 的块操作把该列其余元素清零，再归纳。

## 11.5 素数幂模环（第 7–9 题）

关键事实：$\mathbb Z/p^r\mathbb Z$ 是**局部环**，非单位元全体是极大理想 $(p)$，于是「$a$ 非单位 $\Rightarrow$ $1-a$ 是单位」。所有平延恒等式（$E_{ij}^2=0$、$E_{ij}(a)E_{ij}(b)=E_{ij}(a+b)$、$E_{ij}(a)^{-1}=E_{ij}(-a)$）只用到环的加法与结合律，在 $R=\mathbb Z/p^r$ 上逐字成立。

**第 7 题.** 第 6 题的 (a)(b) 用到的 $a^{-1}$ 在 $a\in R^\times$ 时存在，故 (a)(b) 照搬（(a) 的显式分解换成上面的消元说法）。(c)(d) 的消元遇到「主元非单位」时不能直接除，改用局部环技巧：若 $a$ 非单位则 $1-a$ 是单位，先做 $R_1\leftarrow R_1+R_2$ 之类把主元换成单位（$a+b$：$a$ 非单位时 $b$ 必为单位，否则行列式不可逆），再消。于是 $\mathrm{SL}_n(R)$ 仍由平延生成。

**第 8 题.** 设 $\bar A\in\mathrm{SL}_m(\mathbb Z/p^r)$，由第 7 题写成平延之积 $\prod E_{ij}(\bar\lambda_s)$。每个 $\bar\lambda_s$ 取整数代表 $\lambda_s$，则 $\prod E_{ij}(\lambda_s)\in\mathrm{SL}_m(\mathbb Z)$（每个因子行列式 $1$）且模 $p^r$ 的像为 $\bar A$。故 $\mathrm{SL}_m(\mathbb Z)\to\mathrm{SL}_m(\mathbb Z/p^r)$ 满。

**第 9 题.** (a) 中国剩余定理给环同构 $\mathbb Z/N\cong\prod_t\mathbb Z/p_t^{r_t}$，逐分量取矩阵得群同构 $\mathrm{SL}_m(\mathbb Z/N)\cong\prod_t\mathrm{SL}_m(\mathbb Z/p_t^{r_t})$（逆极限式的逐项构造：给定各分量，用 CRT 逐元素拼出模 $N$ 的矩阵，行列式仍为 $1$）。
(b) 给定 $\bar\lambda\in\mathbb Z/p_t^{r_t}$，先取 $\lambda\in\mathbb Z$ 代表它；要「只在第 $t$ 分量出现」，用 CRT 解同余组 $\lambda_s\equiv\lambda\ (s=t)$、$\lambda_s\equiv0\ (s\neq t)$，得 $A=\prod E_{ij}(\lambda_s)$——它在第 $t$ 分量是 $E_{ij}(\lambda)$，其余分量是 $I_m$。
(c) 任一 $\bar A\in\mathrm{SL}_m(\mathbb Z/N)$ 按 (a) 分解为各分量的平延之积，每个成分由 (b) 提升为 $\mathrm{SL}_m(\mathbb Z)$ 的元素，乘起来即原像。

> [!tip] 结构性含义
> 这一串结论合起来说：**$\mathrm{SL}_m$ 的「平延生成」在环层面稳定**，从域、到 $\mathbb Z/p^r$、到 $\mathbb Z/N$、最后到 $\mathbb Z$ 都不失效；第 8、9 题就是「模 $N$ 约化」的满射性，它是后面 [[代数III/概念/主同余子群]] 的定义前提。

## 11.6 有限矩阵群的阶（第 10 题）

(a) 按列数：第一列可取任一非零向量（$p^m-1$ 种），第 $k$ 列要与前 $k-1$ 列线性无关，有 $p^m-p^{k-1}$ 种：
$$|\mathrm{GL}_m(\mathbb F_p)|=\prod_{k=1}^{m}(p^m-p^{k-1})=p^{m(m-1)/2}\prod_{k=1}^{m}(p^k-1).$$

(b) 先证约化 $\pi:\mathrm{GL}_m(\mathbb Z/p^r)\to\mathrm{GL}_m(\mathbb F_p)$ 满：给定 $\bar A$ 模 $p$ 可逆，任取整数提升 $A_0$，$\det A_0\not\equiv0\pmod p$ 故 $A_0$ 在 $\mathbb Z/p^r$ 中可逆。核 $\ker\pi=\{I+pB\}$，作为集合与 $M_m(\mathbb F_p)$ 同构（$B$ 模 $p$），故 $|\ker\pi|=p^{m^2}$。反复用 $\mathrm{GL}_m(\mathbb Z/p^{s})\to\mathrm{GL}_m(\mathbb Z/p^{s-1})$ 的核大小 $p^{m^2}$，得
$$|\mathrm{GL}_m(\mathbb Z/p^r)|=|\mathrm{GL}_m(\mathbb F_p)|\cdot p^{(r-1)m^2}=p^{(r-1)m^2}\cdot p^{m(m-1)/2}\prod_{k=1}^{m}(p^k-1)=p^{rm^2}\prod_{k=1}^{m}\bigl(1-p^{-k}\bigr),$$
最后一步用 $\prod_{k=1}^m p^k\prod_{k=1}^m(1-p^{-k})=\prod_{k=1}^m(p^k-1)$ 与 $\sum_{k=1}^m k=\frac{m(m+1)}{2}$。
核对 $m=1$：$p^{r}(1-p^{-1})=p^{r-1}(p-1)=\varphi(p^r)$，正确；$r=1$：$p^{m^2}\prod(1-p^{-k})=\prod_k(p^k-1)p^{m^2-k}$，与 (a) 一致。

> [!warning] 阶的写法不要漏因子
> 核大小是 $p^{m^2}$（每个分量有 $p$ 种选择的 $m\times m$ 矩阵），不是 $p^m$。用「逐次约化、核逐个相乘」得到 $p^{(r-1)m^2}\cdot|\mathrm{GL}_m(\mathbb F_p)|$，两条路必须对得上。

## 11.7 整数矩阵的 Smith 标准形（第 11–12 题）

**第 11 题.** (a) 用整数初等变换（倍加、换行换列、乘 $-1$）做「辗转相除消元」：在 $A$ 的非零元中取绝对值最小者挪到 $(1,1)$，用它对第一行第一列带余除法，余数严格变小；反复直到第一行第一列其余元素全为 $0$，再对余下 $(m-1)\times(n-1)$ 块归纳。由于 $\mathbb Z$ 是欧氏环，过程终止，得 $PAQ=\operatorname{diag}(d_1,\dots,d_r,0)$；再用行列的整数倍加把 $d_{i+1}$ 除不尽的余数降下来，可把整除链 $d_i\mid d_{i+1}$ 调好。
(b) 唯一性：$d_1\cdots d_k$ 等于 $A$ 的所有 $k$ 阶子式的最大公因子 $\Delta_k$（初等变换不改变各阶子式的 gcd——换行变号、倍加使子式作相应的整数线性组合、乘 $-1$ 变号）。于是 $\Delta_k$ 由 $A$ 决定，$d_k=\Delta_k/\Delta_{k-1}$ 也由 $A$ 决定（$\Delta_0=1$）。

**第 12 题.** 把 $(a_1,\dots,a_n)$ 看成一个整行向量 $r$，目标是找 $P\in\mathrm{GL}_n(\mathbb Z)$ 使其第一行为 $r$。等价地，用 $\mathrm{GL}_n(\mathbb Z)$ 的右作用（列变换）把 $r$ 化成 $e_1=(1,0,\dots,0)$：若 $rQ=e_1$，则 $e_1Q^{-1}=r$，即 $Q^{-1}$ 的第一行就是 $r$。

对 $r$ 做欧几里得算法：只要有两个非零分量，把其中一个对另一个做带余除法，用 $a_i\leftarrow a_i-qa_j$（$q$ 取商）使各分量绝对值之和严格下降。每一步是右乘一个 $E_{ij}(-q)$（或置换矩阵），都在 $\mathrm{GL}_n(\mathbb Z)$ 内，且 $\gcd$ 始终为 $1$。过程终止时只剩一个非零分量，其值必为 $\pm1$；再乘 $\operatorname{diag}(-1,1,\dots,1)$ 调成 $+1$，最后用置换把 $1$ 挪到第一位。这些操作的乘积给出 $Q$，$Q^{-1}$ 即所求。

另一条路：对 $1\times n$ 矩阵 $r$ 用第 11 题的 Smith 标准形，得 $rQ=(\Delta_1,0,\dots,0)=(1,0,\dots,0)$，同样给出 $Q$。

## 11.8 主同余子群中的有限阶元（第 13 题）

设 $A=I_n+NB$，$A^m=I_n$，$N\ge3$，要证 $A=I_n$。

(a)(b) $A$ 满足 $X^m-1=0$，该多项式在 $\mathbb C$ 上分离（$\mathrm{char}\,0$），故 $A$ 在 $\mathbb C$ 上可对角化，特征根均为 $m$ 次单位根。

(c) 反设 $A\neq I_n$。若所有特征根都不等于 $1$，则 $\det(A-I_n)=\prod_i(\zeta_i-1)$ 是若干非零代数整数之积，非零，且每个 $|\zeta_i-1|\le2$，故 $|\det(A-I_n)|\le2^n$。另一方面 $A-I_n=NB$ 给 $|\det(A-I_n)|=N^n|\det B|$，而 $\det B$ 是非零整数，于是 $|\det(A-I_n)|\ge N^n$。两式合起来 $N^n\le2^n$，与 $N\ge3$ 矛盾。故某个 $\zeta_i=1$，即 $\det(A-I_n)=0$。

(d) 由 (c)，$\det B=0$，故存在非零有理向量 $x$ 使 $Bx=0$；清分母得非零 $x\in\mathbb Z^n$，于是 $Ax=x$。由第 12 题（对 $x$ 的各坐标用互素化）存在 $P\in\mathrm{GL}_n(\mathbb Z)$ 使 $P^{-1}x=e_1$；则 $P^{-1}AP$ 固定 $e_1$，形如
$$P^{-1}AP=\begin{pmatrix}1&*\\0&A_1\end{pmatrix},\qquad A_1\in\mathrm{GL}_{n-1}(\mathbb Z),$$
且 $A_1=I_{n-1}+NB_1$（$N$ 整除 $P^{-1}AP-I$ 的每个元素，块运算保持）。

(e) 对 $n$ 归纳。$n=1$：$A=(1+Nb)$ 且 $A^m=1$ 迫使 $A=\pm1$；$A\equiv1\pmod N$ 与 $N\ge3$ 排除 $-1$，故 $A=1$。$n\ge2$：$A_1\in\mathrm{GL}_{n-1}(\mathbb Z)$ 满足同一组假设，由归纳假设 $A_1=I_{n-1}$，于是 $P^{-1}AP=\begin{pmatrix}1&u\\0&I_{n-1}\end{pmatrix}$，其 $m$ 次幂为 $\begin{pmatrix}1&mu\\0&I_{n-1}\end{pmatrix}$，等于 $I_n$ 迫使 $u=0$，故 $A=I_n$。

(f) 取模 $N$ 的同态 $\mathrm{GL}_n(\mathbb Z)\to\mathrm{GL}_n(\mathbb Z/N\mathbb Z)$，其核即主同余子群 $\Gamma(N)$；(e) 说明 $\Gamma(N)$ 无挠。

> [!info] 注记：无挠性与光滑商
> 无挠 = 无非平凡有限阶元。$\mathrm{SL}_2(\mathbb Z)$ 在上半平面 $\mathbb H$ 上的分式线性作用有核 $\{\pm I_2\}$，去核后仍有非平凡稳定子（如 $\begin{pmatrix}0&-1\\1&0\end{pmatrix}$ 固定 $i$），这些稳定子使商带轨道流形（orbifold）结构与椭圆点。$N\ge3$ 时 $\Gamma(N)$ 无挠，作用自由，$Y(N)=\Gamma(N)\backslash\mathbb H$ 是光滑黎曼面，商映射 $\mathbb H\to Y(N)$ 是无分歧全纯覆盖。无挠性消除的正是椭圆点处的分歧。完整概念见 [[代数III/概念/主同余子群]]。

---

## 相关概念

- [[代数III/概念/线性群与特殊线性群]] — 平延、生成、导群
- [[代数III/概念/Smith标准形]] — 整数环上的消元与不变因子
- [[代数III/概念/主同余子群]] — 第 13 题的落点
- [[代数III/概念/模]] — $\mathbb Z$ 上的有限生成模与结构定理
