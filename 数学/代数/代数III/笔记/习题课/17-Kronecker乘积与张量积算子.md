---
title: 代数 III 习题课 · 17 Kronecker 乘积与张量积算子
created: 2026-11-12
updated: 2026-11-12
type: notes
tags: [algebre, td, tensor, normal, matrix]
sources: [代数III 习题课讲义 2026-11-06（Kronecker 乘积作业）]
confidence: high
---

# 17 Kronecker 乘积与张量积算子（2026-11-06 作业）

这次作业的目的只有一个：把矩阵的 **Kronecker 乘积**认成线性算子 $A\otimes B$ 在张量积基下的矩阵。认出来之后，「$M\otimes N$ 正规 / Hermitian / 酉」这些矩阵论断就全是 $A\otimes B$ 的算子性质加一句「矩阵与算子在同一组标准正交基下互相翻译」。

## 17.1 设定

$M=(a_{ij})\in M_m(\mathbb C)$、$N\in M_n(\mathbb C)$，

$$M\otimes N:=\begin{pmatrix}a_{11}N&\cdots&a_{1m}N\\ \vdots&&\vdots\\ a_{m1}N&\cdots&a_{mm}N\end{pmatrix}\in M_{mn}(\mathbb C).$$

$V,W$ 是维数 $m,n$ 的复内积空间，内积对第一个变量线性、第二个共轭线性，$V\otimes W$ 上取

$$\langle v_1\otimes w_1,\,v_2\otimes w_2\rangle=\langle v_1,v_2\rangle\langle w_1,w_2\rangle .$$

$T^*$ 由 $\langle Tx,y\rangle=\langle x,T^*y\rangle$ 定义；矩阵的 $*$ 是共轭转置。

## 17.2 存在唯一性（第 1 题）

映射

$$\beta:V\times W\longrightarrow V\otimes W,\qquad \beta(v,w)=Av\otimes Bw$$

是双线性的：$A$、$B$ 线性，张量积对每个变量线性，内积不参与。由 $V\otimes W$ 的万有性质（[[代数I/概念/张量积]]），存在**唯一**的线性映射 $A\otimes B:V\otimes W\to V\otimes W$ 使下图交换：

$$\begin{array}{ccc}
V\times W & \xrightarrow{\ \beta\ } & V\otimes W\\
& \searrow{\ \otimes\ } & \downarrow{\ \exists!\,A\otimes B}\\
&& V\otimes W
\end{array}$$

即 $(A\otimes B)(v\otimes w)=Av\otimes Bw$。唯一性也来自万有性质：纯张量张成 $V\otimes W$，一个线性映射被它在纯张量上的值决定。

## 17.3 矩阵就是 Kronecker 乘积（第 2 题）

取 $V,W$ 的标准正交基 $e_1,\dots,e_m$ 与 $f_1,\dots,f_n$，$A,B$ 的矩阵为 $M=(M_{ki})$、$N=(N_{lj})$，即 $Ae_i=\sum_kM_{ki}e_k$、$Bf_j=\sum_lN_{lj}f_l$。则

$$(A\otimes B)(e_i\otimes f_j)=\sum_{k=1}^{m}\sum_{l=1}^{n}M_{ki}N_{lj}\,e_k\otimes f_l .$$

按题给的顺序 $e_1\otimes f_1,\dots,e_1\otimes f_n,e_2\otimes f_1,\dots$ 排基，行列都按 $(i,j)$ 字典序编号，$(k,l)$ 行、$(i,j)$ 列的元素是 $M_{ki}N_{lj}$。按 $i$ 分块，第 $k$ 块行、第 $i$ 块列的块就是 $M_{ki}N$：

$$A\otimes B\ \text{的矩阵}=M\otimes N .$$

注意块的位置是 $M_{ki}$ 而不是 $M_{ik}$：这正是「$A$ 的矩阵作用在第一个因子」的意思，别把转置写进去。

## 17.4 复合与伴随（第 3 题）

在纯张量上算，再靠纯张量张成整个空间延拓。

**复合。** $(A\otimes B)(C\otimes D)(v\otimes w)=ACv\otimes BDw=(AC\otimes BD)(v\otimes w)$，故

$$(A\otimes B)(C\otimes D)=AC\otimes BD .$$

取 $C=D=\mathrm{Id}$ 得 $(A\otimes B)^{-1}=A^{-1}\otimes B^{-1}$：$A\otimes B$ 可逆当且仅当 $A,B$ 都可逆。

**伴随。** 对纯张量

$$\langle(A\otimes B)(v\otimes w),\,v'\otimes w'\rangle=\langle Av,v'\rangle\langle Bw,w'\rangle=\langle v\otimes w,\,(A^*\otimes B^*)(v'\otimes w')\rangle,$$

纯张量张成 $V\otimes W$，且两边对第一个变量线性、第二个共轭线性，所以

$$(A\otimes B)^*=A^*\otimes B^* .$$

矩阵形式即 $(M\otimes N)^*=M^*\otimes N^*$——$(M\otimes N)^*$ 的 $(k,l),(i,j)$ 元是 $\overline{M_{ki}N_{lj}}$，与 $M^*\otimes N^*$ 一致。

## 17.5 正规、Hermitian、酉的封闭性（第 4 题）

把 17.4 的两条式子代入即可，不需要再碰矩阵元。

**正规。** $M,N$ 正规时

$$(A\otimes B)^*(A\otimes B)=A^*A\otimes B^*B=AA^*\otimes BB^*=(A\otimes B)(A\otimes B)^*,$$

故 $M\otimes N$ 正规。

**Hermitian。** $A^*=A$、$B^*=B$ 时 $(A\otimes B)^*=A^*\otimes B^*=A\otimes B$，故 $M\otimes N$ Hermitian。

**酉。** $A^*A=\mathrm{Id}_V$、$B^*B=\mathrm{Id}_W$ 时

$$(A\otimes B)^*(A\otimes B)=A^*A\otimes B^*B=\mathrm{Id}_V\otimes\mathrm{Id}_W=\mathrm{Id}_{V\otimes W},$$

故 $M\otimes N$ 酉。

> [!note] 顺带三个结论
> 由 17.3，$M\otimes N$ 的特征值是 $\lambda_i(M)\mu_j(N)$（取 $M,N$ 的 Jordan/Schur 型即可；正规时直接对角化），奇异值是二者的乘积；$\det(M\otimes N)=(\det M)^n(\det N)^m$，$\operatorname{tr}(M\otimes N)=\operatorname{tr}M\cdot\operatorname{tr}N$。Hermitian 情形 $M,N\ge0$ 时 $M\otimes N\ge0$，这正是「张量积保持半正定」的来源。

## 相关概念

- [[代数I/概念/张量积]] — 万有性质与纯张量的唯一性
- [[代数III/笔记/正课/14-张量积的万有性质与两个群论练习|正课 14]] — 同一套万有性质的群论用法
- [[代数III/概念/酉群与极分解]] — 酉、Hermitian、正规三类矩阵的谱性质
- [[15-sl2表示|习题课 15]] — 同月讲义：$\mathfrak{sl}_2$ 的三元组，$\operatorname{Sym}^n$ 就是 $\mathbb C^2$ 的对称张量
