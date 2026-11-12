---
title: 代数 III 习题课 · 16 Hermitian 空间的标准形
created: 2026-11-12
updated: 2026-11-12
type: notes
tags: [algebre, td, hermitian, svd, polar, normal, quadratic-form]
sources: [代数III 习题课讲义 2026-11-03（Hermitian 空间）]
confidence: high
---

# 16 Hermitian 空间的标准形（2026-11-03 讲义）

这次讲义按「允许用什么变换」把标准形问题分四块：

| 变换 | 保什么 | 标准形 |
|---|---|---|
| 酉相似 $A\mapsto U^{-1}AU$ | 谱、正规性、Hermitian 性 | Schur 上三角；正规时对角（1.1.1–1.1.2） |
| 酉相抵 $A\mapsto U_1AU_2$ | 奇异值 | 矩形对角 $\operatorname{diag}(\lambda_1,\dots,\lambda_r)$（1.1.3） |
| 正交相似（实） | 实谱与共轭对 | 实块对角（1.1.6） |
| 合同 $A\mapsto P^*AP$ | 惯性指数 | $\operatorname{diag}(I_p,-I_q,0)$（1.1.7） |

记号：$A^*={}^{t}\overline A$；$\mathrm{U}_n(\mathbb C)$、$\mathrm{SU}_n(\mathbb C)$ 分别是酉群与特殊酉群；Hermitian 方阵指 $A^*=A$；半正定指 $A\ge0$（特征值 $\ge0$）。

## 16.1 Schur 三角化（命题 1.1.1）

**命题.** $A\in M_n(\mathbb C)$。存在 $U\in\mathrm{U}_n(\mathbb C)$ 使 $U^{-1}AU$ 为上三角。

**证明.** 对 $n$ 归纳。取 $A$ 的一个单位特征向量 $v$（$\mathbb C$ 代数闭，特征值必存在），扩充成标准正交基 $v,v_2,\dots,v_n$。在这组基下

$$U^{-1}AU=\begin{pmatrix}\lambda&*\\0&B\end{pmatrix}.$$

对 $B\in M_{n-1}(\mathbb C)$ 用归纳假设得 $V^{-1}BV$ 上三角，再取 $\operatorname{diag}(1,V)$ 把两块拼起来即可。

> [!note] 对角元就是谱
> 上三角阵的对角元全是特征值（计代数重数），这对任意复方阵都成立——本讲后面所有的「对角化」都是在 Schur 型的基础上去掉非对角元。

## 16.2 正规 $\Rightarrow$ 酉对角化（命题 1.1.2）

**命题.** $A$ 正规（$AA^*=A^*A$）时，存在 $U\in\mathrm{U}_n(\mathbb C)$ 使 $U^{-1}AU$ 为对角阵。

**证明.** 先按 16.1 酉三角化，$T=U^{-1}AU$ 上三角且仍正规（$TT^*=U^{-1}AA^*U=U^{-1}A^*AU=T^*T$）。比较 $TT^*$ 与 $T^*T$ 的 $(1,1)$ 元：

$$(TT^*)_{11}=\sum_{j=1}^n|t_{1j}|^2=|\lambda_1|^2+\sum_{j>1}|t_{1j}|^2,\qquad (T^*T)_{11}=|t_{11}|^2=|\lambda_1|^2,$$

故第一行非对角元全为 $0$。对右下角的 $(n-1)$ 阶块归纳（它仍上三角、仍正规），得 $T$ 对角。

> [!tip] 等价说法
> 正规 $\iff$ 存在标准正交的特征向量基。1.2.1、1.2.2 都靠这一条。

## 16.3 奇异值分解（命题 1.1.3）

**命题.** $A\in M_{m\times n}(\mathbb C)$，$r=\operatorname{rank}A$。存在 $U_1\in\mathrm{U}_m(\mathbb C)$、$U_2\in\mathrm{U}_n(\mathbb C)$ 使

$$A=U_1\begin{pmatrix}D&0\\0&0\end{pmatrix}U_2,\qquad D=\operatorname{diag}(\lambda_1,\dots,\lambda_r),\ \lambda_1\ge\cdots\ge\lambda_r>0 .$$

**证明.** $A^*A$ 半正定，取标准正交的特征向量 $v_1,\dots,v_n$，特征值 $\lambda_1^2\ge\cdots\ge\lambda_r^2>0=\lambda_{r+1}=\cdots$。令 $u_i:=Av_i/\lambda_i$（$1\le i\le r$），则

$$\langle u_i,u_j\rangle=\frac{\langle A^*Av_i,v_j\rangle}{\lambda_i\lambda_j}=\delta_{ij},$$

且 $i>r$ 时 $\|Av_i\|^2=\langle A^*Av_i,v_i\rangle=0$，即 $Av_i=0$。把 $u_1,\dots,u_r$ 扩充成 $\mathbb C^m$ 的标准正交基，$v_1,\dots,v_n$ 已是 $\mathbb C^n$ 的标准正交基，于是 $A$ 把 $v_i\mapsto\lambda_iu_i$（$i\le r$）、$v_i\mapsto0$（$i>r$），矩阵正是上式。

**唯一性.** $\lambda_i^2$ 是 $A^*A$ 的非零特征值，唯一；$\lambda_i$ 非负，故 $\lambda_i$ 唯一。它们称为**非零奇异值**。

## 16.4 极分解（命题 1.1.4、1.1.5）

**命题（复）.** 任意 $A\in M_n(\mathbb C)$ 可唯一地写成 $A=UH$：$U$ 酉，$H$ 半正定 Hermitian，$H^2=A^*A$；$A$ 可逆时 $H$ 正定、$U$ 也唯一。

**证明.** 由 SVD，$A=U_1DU_2$（$D$ 半正定对角）。取

$$U:=U_1U_2,\qquad H:=U_2^*DU_2,$$

则 $U$ 酉、$H$ 半正定 Hermitian，且 $UH=U_1U_2U_2^*DU_2=A$；并且 $H^2=U_2^*D^2U_2=U_2^*U_1^*A^*AU_1U_2=A^*A$。

唯一性：若 $A=UH$，则 $A^*A=H^2$，而半正定阵的平方根唯一（1.2.4），故 $H=\sqrt{A^*A}$ 唯一。$A$ 可逆时 $H$ 可逆，$U=AH^{-1}$ 也唯一；$A$ 不可逆时 $U$ 在 $\ker H=\ker A$ 上可以任意取（只要求 $U$ 把 $(\ker A)^\perp$ 按 $H$ 的谱映过去），所以不唯一。

**实情形（1.1.5）.** SVD 的归纳证明在实数域逐字成立（$A^tA$ 对称半正定，实特征向量），得 $A=P_1DP_2$（$P_i$ 实正交、$D$ 半正定实对称），取 $P=P_1P_2$、$S=P_2^tDP_2$ 即可，唯一性同上。

## 16.5 实正规矩阵的标准形（命题 1.1.6）

**命题.** 实正规 $A$（$AA^t=A^tA$）可用 $P\in\mathrm{SO}_n(\mathbb R)$ 相似化为

$$P^{-1}AP=\operatorname{diag}(B_1,\dots,B_s,c_1,\dots,c_t),\qquad B_j=\begin{pmatrix}a_j&b_j\\-b_j&a_j\end{pmatrix},\ 2s+t=n .$$

**证明要点.** 把 $A$ 看成复正规阵。实特征值给出实特征向量；非实特征值 $\lambda=a+ib$ 的特征向量 $z=x+iy$ 满足

$$Ax=ax-by,\qquad Ay=bx+ay .$$

正规性保证 $z$ 与 $\overline z$ 正交，即 $x\perp y$ 且 $\|x\|=\|y\|$（展开 $\langle z,\overline z\rangle=0$）。把它们单位化，得标准正交的 $x',y'$，$A$ 在 $\operatorname{span}(x',y')$ 上的矩阵就是 $B_j=\begin{pmatrix}a&b\\-b&a\end{pmatrix}$；该平面的正交补仍 $A$-不变，归纳即可。若最终换基矩阵行列式为 $-1$，把其中一个基向量变号——块的形式不变，行列式变为 $1$。

## 16.6 Hermitian 的合同标准形（命题 1.1.7）

**命题.** Hermitian $A\in M_n(\mathbb C)$。存在可逆 $P$ 使

$$P^*AP=\operatorname{diag}(I_p,-I_q,0_{n-p-q}),$$

$(p,q)$ 唯一，称惯性指数。

**证明.** 由 16.2 酉对角化 $A=U\operatorname{diag}(\lambda_i)U^*$，把 $\lambda_i$ 的基向量分别乘 $|\lambda_i|^{-1/2}$（非零时），正、负、零特征值分别变成 $1,-1,0$，得到所需的合同标准形。唯一性：$p$ 等于「$A$ 正定子空间的最大维数」

$$p=\max\{\dim W:\ A|_W>0\},$$

这个量由二次型决定、与坐标无关；同理 $q$ 是负定子空间的最大维数。故 $(p,q)$ 唯一。

## 16.7 交换族（命题 1.1.8–1.1.10）

**1.1.8（同时三角化）.** 两两交换的一族复方阵存在**同一个** $U$ 使全部上三角。证明：先找公共特征向量——族中若有非标量阵，取它的一个非平凡特征子空间，交换性保证全族保持它，对维数归纳；全为标量阵则显然。把公共单位特征向量扩充成标准正交基，右下角的块仍两两交换，归纳。

**1.1.9.** 交换族若每个都正规，则由 1.1.8 同时三角化后，每个上三角阵仍正规，用 16.2 的关键一步（第一行非对角元为 $0$）知每个都是对角阵。

**1.1.10（实情形）.** 复化后同时酉对角化，再按公共特征值组把空间分成公共特征子空间：公共特征值全实的那些取实标准正交基；其余成对共轭出现，在一对中取一侧的标准正交基，把每个基向量的实部、虚部单位化，得到全族共同的二维实块；最后如 16.5 调整符号使换基矩阵属 $\mathrm{SO}_n(\mathbb R)$。

## 16.8 练习

### 16.8.1 迹与特征值（1.2.1）

由 16.1，$A=UTU^*$，$T$ 上三角。则

$$\operatorname{tr}(AA^*)=\operatorname{tr}(TT^*)=\sum_{i,j}|t_{ij}|^2\ \ge\ \sum_i|t_{ii}|^2=\sum_i|\lambda_i|^2 .$$

等号 $\iff$ 所有非对角元 $t_{ij}=0$ $\iff$ $T$ 对角 $\iff$ $A$ 正规。

### 16.8.2 正规阵的零积（1.2.2）

正规 $\iff$ $\|Ax\|=\|A^*x\|$ 对一切 $x$ 成立（两边平方展开）。于是

$$\ker A=\ker A^*=(\operatorname{Im}A)^\perp .$$

又正规 $B$ 给出 $\ker B=(\operatorname{Im}B)^\perp$，即 $\operatorname{Im}B=(\ker B)^\perp$。从而

$$AB=0\iff\operatorname{Im}B\subseteq\ker A=(\operatorname{Im}A)^\perp\iff\operatorname{Im}A\subseteq(\operatorname{Im}B)^\perp=\ker B\iff BA=0 .$$

只设一个正规时结论不成立：取 $A=\begin{pmatrix}0&1\\0&0\end{pmatrix}$（非正规）、$B=\operatorname{diag}(1,0)$，则 $AB=0$ 而 $BA=\begin{pmatrix}0&1\\0&0\end{pmatrix}\neq0$。

### 16.8.3 具体算一遍 SVD 与极分解（1.2.3）

$A=\begin{pmatrix}1&0\\1/2&0\end{pmatrix}$。$A^*A=\begin{pmatrix}5/4&0\\0&0\end{pmatrix}$，奇异值 $\lambda_1=\sqrt5/2$、$\lambda_2=0$。

**SVD.** $v_1=e_1$、$v_2=e_2$；$u_1=Ae_1/\lambda_1=(2/\sqrt5,\,1/\sqrt5)$，补一个与它正交的单位向量 $u_2=(-1/\sqrt5,\,2/\sqrt5)$。于是取

$$U_1=\begin{pmatrix}2/\sqrt5&-1/\sqrt5\\1/\sqrt5&2/\sqrt5\end{pmatrix},\quad D=\operatorname{diag}(\sqrt5/2,0),\quad U_2=I .$$

（$U_2=I$ 不是唯一选择：$U_2$ 可以在 $\ker A$ 上任意取，$U_1$ 相应地变。）

**极分解.** $H=\sqrt{A^*A}=\operatorname{diag}(\sqrt5/2,0)$ 唯一；$U=AH^{-1}$ 只在 $\operatorname{Im}H=\mathbb Ce_1$ 上被确定：

$$U=\begin{pmatrix}2/\sqrt5&\mp1/\sqrt5\\1/\sqrt5&\pm2/\sqrt5\end{pmatrix},$$

即两个可能的酉阵（右上、右下符号相反）。

**是否酉相似于 $D$？** 不。$A$ 的特征值是 $1,0$（$\operatorname{tr}A=1$、$\det A=0$），$D$ 的特征值是 $\sqrt5/2,0$，谱不同。这正是「奇异值不是特征值」。

### 16.8.4 半正定阵的 $k$ 次根（1.2.4）

对角化 $H=U\operatorname{diag}(\mu_i)U^*$（$\mu_i\ge0$），令 $K=U\operatorname{diag}(\mu_i^{1/k})U^*$，则 $K^k=H$，$K$ 半正定 Hermitian。

唯一性：若 $K^k=H$，则 $K$ 与 $H$ 交换，$K$ 与 $H$ 可同时酉对角化（1.1.9），$K$ 的特征值满足 $\nu_i^k=\mu_i$，又 $\nu_i\ge0$，故 $\nu_i=\mu_i^{1/k}$，$K$ 唯一。

交换性：$B$ 与 $H$ 交换 $\Rightarrow$ $B$ 与 $H$ 的谱投影交换（谱投影是 $H$ 的多项式），而

$$K=\sum_{\mu_i>0}\mu_i^{1/k}P_i,\qquad P_i=\text{$\mu_i$ 的特征投影},$$

故 $BK=KB$。

### 16.8.5 算子范数单位球的极端点（1.2.5）

**酉阵是极端点.** 设 $U$ 酉、$U=tB+(1-t)C$（$B,C$ 算子范数 $\le1$，$0<t<1$）。对任意单位 $x$：

$$1=\|Ux\|\le t\|Bx\|+(1-t)\|Cx\|\le t+(1-t)=1 .$$

等号成立意味着 $\|Bx\|=\|Cx\|=1$，并且 $Bx,Cx,Ux$ 三者同向（三角不等式取等）；由 $tBx+(1-t)Cx=Ux$ 得 $Bx=Cx=Ux$ 对一切单位 $x$ 成立，故 $B=C=U$。

**非酉阵不是极端点.** 设 $\|A\|_{\mathrm{op}}\le1$ 且 $A$ 非酉。有限维下「等距 $\iff$ 酉」，所以存在单位 $x$ 使 $\|Ax\|<1$，特别 $\operatorname{Im}A\neq\mathbb C^n$；取单位 $z\perp\operatorname{Im}A$，对 $0<\varepsilon<1$ 令

$$B_\pm=A\pm\varepsilon\,zx^*,\qquad (zx^*)y=\langle y,x\rangle z .$$

对 $y=\alpha x+w$（$w\perp x$）：$\|B_\pm y\|^2=\|Aw\|^2+\varepsilon^2|\alpha|^2\le\|w\|^2+|\alpha|^2=\|y\|^2$，故 $B_\pm$ 都在单位球里且 $\ne A$，而 $A=\tfrac12(B_++B_-)$。故极端点恰为酉阵。

### 16.8.6 $\mathrm{U}_n(\mathbb C)$ 是极大紧子群（1.2.6）

$\mathrm{U}_n$ 紧：闭、有界。设紧子群 $K\supseteq\mathrm{U}_n(\mathbb C)$，取 $g\in K$ 的极分解 $g=UH$（$H$ 半正定，特征值即 $g$ 的奇异值）。对一切整数 $m$，

$$g^m\in K,\qquad g^{-m}\in K,$$

而 $g^m$ 的奇异值是 $H$ 的奇异值的 $m$ 次方（$g^m$ 的极分解是 $U_mH^m$，奇异值为 $H^m$ 的特征值）。$K$ 紧，故 $\sup_{k\in K}\|k\|_{\mathrm{op}}<\infty$，于是 $H$ 的特征值既不能 $>1$（否则 $\|g^m\|\to\infty$）也不能 $<1$（否则 $\|g^{-m}\|\to\infty$），只能全为 $1$，即 $H=I$。故 $g$ 酉，$K=\mathrm{U}_n(\mathbb C)$。

### 16.8.7 酉群与特殊酉群连通（1.2.7）

任意酉阵 $U$ 可酉对角化 $U=V\operatorname{diag}(\mathrm{e}^{i\theta_1},\dots,\mathrm{e}^{i\theta_n})V^*$，路径 $t\mapsto V\operatorname{diag}(\mathrm{e}^{i(1-t)\theta_j})V^*$ 从 $U$ 连到 $I$，故 $\mathrm{U}_n$ 连通。若 $U\in\mathrm{SU}_n$，把每个 $\theta_j$ 看作它的一个角，$\det U=1$ 意味着 $\sum\theta_j\equiv0\pmod{2\pi}$；把其中一个角减去 $2\pi$ 的整数倍不改变矩阵，可让 $\sum\theta_j=0$ 恰好成立，上面的路径在整条过程中行列式恒为 $1$。故 $\mathrm{SU}_n$ 也连通。

### 16.8.8 准反射生成酉群（1.2.8）

**$\mathrm{U}_n$ 由准反射生成.** 对 $n$ 归纳。$U=I$ 时平凡。否则取单位 $v$ 使 $Uv\neq v$，令 $R$ 为把 $Uv$ 映到 $v$、固定超平面 $(Uv-v)^\perp$ 的 Householder 变换——它酉、不动点是超平面，即准反射。于是 $RU$ 固定 $v$，在 $v^\perp$ 上是一个 $(n-1)$ 阶酉变换，用归纳假设写成准反射之积，再乘 $R^{-1}=R$ 即可。

**$\mathrm{SU}_n$ 由准翻转生成.** 准翻转是固定一个 $(n-2)$ 维子空间、在某个二维平面 $P$ 上行列式为 $1$ 的酉变换，即 $\mathrm{diag}(A,I_{n-2})$（$A\in\mathrm{SU}_2$）。同样归纳：先找一个把 $U$ 的某个二维平面上的作用「修正」掉的准翻转，再用 $\mathrm{SU}_2$ 自身的生成（$\mathrm{SU}_2$ 由形如 $\operatorname{diag}(\mathrm{e}^{i\theta},\mathrm{e}^{-i\theta})$ 的元生成，它们正是二维的准翻转）收尾。

### 16.8.9 幂零变换何时正交循环（1.2.9）

**必要性.** 设 $N$ 在某组标准正交基下是 $x^n$ 的伴随矩阵，即 $Ne_1=0$、$Ne_j=e_{j-1}$。则 $\ker N=\mathbb Ce_1$、$\operatorname{rank}N=n-1$、$(\ker N)^\perp=\operatorname{span}(e_2,\dots,e_n)$，而 $N$ 在这些基向量上是等距：$\langle Ne_j,Ne_k\rangle=\langle e_{j-1},e_{k-1}\rangle$。

**充分性.** 设 $\operatorname{rank}N=n-1$ 且 $N$ 在 $(\ker N)^\perp$ 上是等距。单块幂零（秩 $n-1$）有 $\ker N\subseteq\operatorname{Im}N$，取单位 $e_1\in\ker N$。由于 $N:(\ker N)^\perp\to\operatorname{Im}N$ 是等距同构，可以递推地定义

$$e_{j+1}:=\bigl(N|_{(\ker N)^\perp}\bigr)^{-1}e_j\quad(j=1,\dots,n-1),$$

则 $Ne_{j+1}=e_j$，且由等距性

$$\langle e_{j+1},e_{k+1}\rangle=\langle Ne_{j+1},Ne_{k+1}\rangle=\langle e_j,e_k\rangle,$$

归纳得 $e_1,\dots,e_n$ 标准正交（$e_1\perp e_j$ 因 $e_j\in(\ker N)^\perp$），故是基，且 $N$ 的矩阵就是 $x^n$ 的伴随矩阵。正交循环。

### 16.8.10 两个 Hermitian 阵同时合同对角化（1.2.10）

$G>0$ ��以 $G^{-1/2}$ 存在。令 $C=G^{-1/2}HG^{-1/2}$，它 Hermitian，由 16.2 有 $C=U\operatorname{diag}(\mu_i)U^*$（$\mu_i$ 实）。取 $P=G^{-1/2}U$，则 $P$ 可逆，且

$$P^*GP=U^*G^{-1/2}GG^{-1/2}U=I,\qquad P^*HP=U^*G^{-1/2}HG^{-1/2}U=\operatorname{diag}(\mu_i).$$

### 16.8.11 行列式不等式（1.2.11）

先设 $B>0$：$B^{-1/2}AB^{-1/2}\ge0$，其特征值 $\nu_i\ge0$，于是

$$\det(A+B)=\det B\cdot\det(I+B^{-1/2}AB^{-1/2})=\det B\prod_i(1+\nu_i)\ge\det B,$$

等号 $\iff$ 所有 $\nu_i=0$ $\iff$ $A=0$。$B$ 仅半正定时，对 $B+\varepsilon I>0$ 用上式再令 $\varepsilon\downarrow0$（行列式连续）。

### 16.8.12 Hadamard 不等式（1.2.12）

1. $G\ge0$ 有 Cholesky 分解 $G=LL^*$（$L$ 下三角，对角元 $\ell_{jj}\ge0$）。则 $\det G=\prod_j\ell_{jj}^2$，而 $g_{jj}=\sum_{k\le j}|\ell_{jk}|^2\ge\ell_{jj}^2$，故 $\det G\le\prod_jg_{jj}$。等号 $\iff$ 每个 $j$ 只有 $\ell_{jj}$ 非零 $\iff$ $L$（从而 $G$）对角。
2. 对 $G=A^*A\ge0$ 用第 1 条：$g_{jj}=\|a_j\|^2$、$\det G=|\det A|^2$，得 $|\det A|^2\le\prod\|a_j\|^2$。等号 $\iff$ $A^*A$ 对角 $\iff$ 各列两两正交。

### 16.8.13 变分刻画与交错（1.2.13）

1. 取 $A$ 的标准正交特征基 $e_1,\dots,e_n$（$Ae_i=\lambda_ie_i$）。对 $\dim F=k$ 的 $F$，$\max_{x\in F,\|x\|=1}R_A(x)$ 至少是「$F$ 与 $\operatorname{span}(e_k,\dots,e_n)$ 的交（维数 $\ge1$）」上的最大值，而这组向量上的 Rayleigh 商 $\le\lambda_n$ 之类，逐层数维数即得

$$\lambda_i=\min_{\dim F=i}\max_{x\in F}R_A(x)=\max_{\dim F=n-i+1}\min_{x\in F}R_A(x).$$

（这就是 Courant–Fischer 极小极大原理；把 $F$ 换成 $e_1,\dots,e_i$ 张成的空间给出 $\ge\lambda_i$ 的一个界，另一侧用维数计数。）
2. $B$ 是 $A$ 在 $W=\operatorname{span}(e_1,\dots,e_{n-1})$ 上的压缩，$A|_W=B$。用极小极大：$\lambda_i(A)$ 是在 $\mathbb C^n$ 的一切 $i$ 维子空间上取极小，$\mu_i$ 只允许 $W$ 内的 $i$ 维子空间，故 $\lambda_i(A)\le\mu_i$；另一侧 $\mu_i\le\lambda_{i+1}(A)$ 用极大极小的那一半，$W$ 的 $(n-i)$ 维子空间也是 $\mathbb C^n$ 的，故 $A$ 的最大值不小于 $B$ 的。

### 16.8.14 特征值的单调性（1.2.14）

$A\le B$ 即 $B-A\ge0$，故对一切 $x$ 有 $R_A(x)\le R_B(x)$，再由 1.2.13 的极小极大

$$\lambda_i(A)=\min_{\dim F=i}\max_{x\in F}R_A(x)\le\min_{\dim F=i}\max_{x\in F}R_B(x)=\lambda_i(B).$$

于是 $\det(A+B)=\prod_i\lambda_i(A+B)\ge\prod_i\lambda_i(B)=\det B$，这是 1.2.11 的又一证明。

### 16.8.15 酉平均（1.2.15）

在 $M_n(\mathbb C)$ 上取实内积 $\langle X,Y\rangle=\operatorname{Re}\operatorname{tr}(X^*Y)$。酉共轭保这个内积，所以

$$\langle UMU^{-1},M\rangle\le\|UMU^{-1}\|\,\|M\|=\|M\|^2,\qquad \langle VMV^{-1},M\rangle\le\|M\|^2 ,$$

其中 $\|\cdot\|$ 是 Frobenius 范数。把假设两边与 $M$ 作内积：

$$2\|M\|^2=\langle UMU^{-1},M\rangle+\langle VMV^{-1},M\rangle\le2\|M\|^2,$$

故两个不等式同时取等。Cauchy–Schwarz 取等 $\Rightarrow$ $UMU^{-1}$ 是 $M$ 的实倍数，范数相同 $\Rightarrow$ $UMU^{-1}=M$；同理 $VMV^{-1}=M$。

### 16.8.16 单位向量的距离不等式（1.2.16）

1. 投影为 $v-\langle v,u\rangle u$（内积对第一个变量线性），范数 $\sqrt{1-|\langle u,v\rangle|^2}$。
2. 令 $L_u=\mathbb Cu$，$d(u,v):=\sqrt{1-|\langle u,v\rangle|^2}=\operatorname{dist}(v,L_u)$。两点集距离满足三角不等式：对任意 $x\in L_u$、$z\in L_w$，

$$\operatorname{dist}(L_u,L_w)\le\|x-z\|\le\|x-y\|+\|y-z\|,$$

先对 $x$ 取最小再对 $z$ 取最小即得 $d(u,w)\le d(u,v)+d(v,w)$。

### 16.8.17 $\mathrm{SU}_2(\mathbb C)\to\mathrm{SO}(V)$（1.2.17）

1. $V=\{M\in M_2(\mathbb C):\ \operatorname{tr}M=0,\ M^*=-M\}$，$\dim_{\mathbb R}V=3$，$\operatorname{tr}(M^*M)=\|M\|_F^2$ 是欧氏范数的平方。$U\in\mathrm{SU}_2$ 时 $\operatorname{tr}((UXU^{-1})^*UXU^{-1})=\operatorname{tr}(X^*X)$，且 $UXU^{-1}\in V$，故 $h(U)(X):=UXU^{-1}$ 是 $V$ 的正交变换。
2. $\ker h$：与一切迹零矩阵交换的只有标量阵，$\lambda I\in\mathrm{SU}_2$ 给出 $\lambda^2=1$，故 $\ker h=\{\pm I\}$。
3. $\mathrm{SU}_2$ 连通（1.2.7），$\det\circ h:\mathrm{SU}_2\to\{\pm1\}$ 连续，$h(I)=I$ 给出 $\det=1$，故像含在 $\mathrm{SO}(V)$。
4. 取 $p=\operatorname{diag}(i,-i)\in\mathrm{SU}_2\cap V$，则 $h(p)$ 固定 $\mathbb Rp$、在 $p^\perp$ 上取 $-1$：它是绕轴 $p$ 转 $\pi$。
5. 每个单位 $u\in V$ 都有 $p_u\in\mathrm{SU}_2\cap V$ 使 $h(p_u)$ 是绕 $u$ 转 $\pi$；这些半周转生成 $\mathrm{SO}(V)$，故 $h$ 满。也可数维数：$\ker h$ 有限、$\dim\mathrm{SU}_2=3$，像为三维紧连通子群，只能是 $\mathrm{SO}(V)$。
6. 对 $A,X,Y\in V$，$(AX-XA)^*=X^*A^*-A^*X^*=XA-AX=-(AX-XA)$，故 $f(A)X\in V$；并且

$$\langle f(A)X,Y\rangle+\langle X,f(A)Y\rangle=-\operatorname{tr}\bigl(f(A)[X,Y]\bigr)=0$$

（$[X,Y]\in V$，迹的循环性），故 $f(A)\in\mathfrak{so}(V)$。$\dim V=\dim\mathfrak{so}(V)=3$；若 $f(A)=0$ 则 $A$ 与一切迹零阵交换，$A$ 是标量阵，又 $\operatorname{tr}A=0$，故 $A=0$。所以 $f$ 是实线性同构。

## 相关概念

- [[代数III/概念/酉群与极分解]] — 极分解、正规性、谱定理的完整版
- [[代数III/概念/Hermite型与Signature]] — 惯性指数与合同分类
- [[代数II/概念/Jordan标准型]] — 与 SVD、Schur 型的对照：相似 vs 酉相抵
- [[14-Jordan标准型的计算与Jordan-Chevalley分解|习题课 14]] — 上一轮的 Jordan 型
