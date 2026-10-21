---
title: 代数III(群论) · 13 酉群、极分解与特征值的 min-max
created: 2026-10-21
updated: 2026-10-21
type: notes
tags: [group-theory, algebre, cours, unitary, polar]
confidence: medium
---

# $U_n(\mathbb C)$, décomposition polaire, min-max

## 1. Interprétation matricielle de Gram–Schmidt

> [!note] 命题 (QR)
> $A\in \mathrm{GL}_n(\mathbb C)$。则存在**唯一**的酉矩阵 $U$ 与对角元 $>0$ 的上三角 $T$ 使
> $$A=UT .$$

**Preuve.** 把 $A$ 的列 $C_1,\dots,C_n$ 看作 $\mathbb C^n$ 的基，对它做 Gram–Schmidt 得正交归一基 $V_1,\dots,V_n$；由构造 $C_i=\sum_{k\le i}V_kt_{ki}$（上三角），以 $V_j$ 为列的矩阵 $U$ 酉，$T=(t_{ki})$ 上三角，$A=UT$。

> [!note] 注记
> 若 $(v_1,\dots,v_k)$ 是 $F$ 的正交归一基，则 $F$ 上的正交投影为
> $$p(x)=\sum_{i=1}^{k}\langle x,v_i\rangle v_i .$$

## 2. Le groupe unitaire

> [!note] 定义
> $$U_n(\mathbb C)=\{M\in\mathrm{GL}_n(\mathbb C)\mid MM^*=M^*M=\mathrm{Id}\},\qquad SU_n(\mathbb C)=\{M\in U_n(\mathbb C)\mid\det M=1\},$$
> 且 $SU_n(\mathbb C)\triangleleft U_n(\mathbb C)$。

> [!note] 命题
> $Z(U_n(\mathbb C))=\{\lambda\,\mathrm{Id}:|\lambda|=1\}$。

**Preuve.** 设 $M$ 在中心。只需证 $M$ 是位似：固定单位向量 $X$，取 $u\in U_n$ 使 $u(X)=\alpha X$（$|\alpha|=1$）、$u=\mathrm{Id}$ 在 $(\mathbb C X)^\perp$ 上（在适当的正交归一基下 $u=\operatorname{diag}(\alpha,1,\dots,1)$，确实酉）。$M$ 与 $u$ 交换，故稳定 $u$ 的 $\alpha$-特征子空间 $\mathbb C X$，即 $MX=\lambda X$。对每个 $X$ 都如此，故 $M$ 为位似；再转置共轭得 $|\lambda|=1$。

> [!note] 命题
> $U_n(\mathbb C)$ 与 $SU_n(\mathbb C)$ 紧。

**Preuve.** $U_n$ 有界：$\|M\|=\sup_{\|X\|=1}\|M(X)\|=1$。$U_n=f^{-1}(0)$，$f(M)=MM^*-\mathrm{Id}$ 连续，故闭。有限维赋范空间中闭且有界即紧；$SU_n$ 是 $U_n$ 的闭子集。

> [!note] 命题
> $U_n(\mathbb C)$ 道路连通。

**Preuve.** $M$ 酉可酉对角化：$M=P\operatorname{diag}(\mathrm{e}^{i\theta_1},\dots,\mathrm{e}^{i\theta_n})P^{-1}$（$P\in U_n$）。取
$$\gamma(t)=P\operatorname{diag}(\mathrm{e}^{it\theta_1},\dots,\mathrm{e}^{it\theta_n})P^{-1},$$
则 $\gamma$ 连续、$\gamma(0)=\mathrm{Id}$、$\gamma(1)=M$，且每点都在 $U_n$ 中。

## 3. Racine carrée positive

> [!note] 定义
> $u$ Hermite。称 $u$ **正**（positif）若 $\forall x,\ \langle u(x),x\rangle\ge0$，等价于 $\operatorname{Sp}(u)\subset\mathbb R_{\ge0}$；**严格正**同理（$\operatorname{Sp}\subset\mathbb R_{>0}$）。

等价性的两个方向：若 $\langle u(x),x\rangle\ge0$ 而 $u(x)=\lambda x$，则 $\lambda\|x\|^2\ge0$；反之取正交归一特征基，$\langle u(x),x\rangle=\sum\lambda_i|x_i|^2$。

> [!note] 命题
> $u$ Hermite 正。则存在**唯一**的 Hermite 正 $v$ 使 $u=v^2$。

**Preuve.** 存在：在正交归一特征基下取 $\sqrt{\lambda_i}$。唯一：$v$ 与 $u$ 交换，故稳定 $u$ 的每个特征子空间；在每个特征子空间上 $v$ 仍 Hermite，可对角化，其平方等于 $\lambda\,\mathrm{Id}$ 迫使特征值为 $\sqrt{\lambda}$。

## 4. Décomposition polaire

> [!note] 定理
> $A\in \mathrm{GL}_n(\mathbb C)$。则存在唯一的 $(U,H)$，$U\in U_n(\mathbb C)$、$H$ Hermite 严格正，使
> $$A=UH .$$

**Preuve.** 必要性：$A^*A=H^2$，而 $A^*A$ Hermite 正定（$\langle A^*AX,X\rangle=\|AX\|^2$，正定因 $A$ 可逆），由第 3 节 $H$ 唯一存在，取 $U=AH^{-1}$，则 $U^*U=H^{-1}A^*AH^{-1}=\mathrm{Id}$，故 $U$ 酉。

> [!note] 定理 (奇异情形)
> $A\in M_n(\mathbb C)$。则存在 $U\in U_n(\mathbb C)$、$H$ Hermite 正**半**定使 $A=UH$；此时**唯一性一般不成立**（在 $\ker A$ 上 $U$ 可任意）。

**Preuve.** $\mathrm{GL}_n$ 在 $M_n$ 中稠密，取 $A_k\to A$，$A_k=U_kH_k$（$H_k>0$）；$U_n$ 紧，取子列 $U_{\varphi(k)}\to U\in U_n$，则 $H_{\varphi(k)}=U^*_{\varphi(k)}A_{\varphi(k)}\to U^*A=H$，且 $H$ Hermite、正（内积不等式取极限）。

> [!note] Application
> $U_n(\mathbb C)$ 是 $\mathrm{GL}_n(\mathbb C)$ 的**极大紧子群**：若 $K$ 是含 $U_n$ 的紧子群，则 $K=U_n$。

理由：$A\in K$ 写成 $A=UH$，则 $H=U^{-1}A\in K$ 是正 Hermite 的紧群元素；紧群中正 Hermite 元素只可能是 $\mathrm{Id}$（否则其特征值 $\lambda\ne1$ 给出无界幂次），故 $A\in U_n$。

## 5. Réduction simultanée

> [!note] 定理 1.
> $A,B\in\mathcal H_n(\mathbb C)$，$A>0$。则存在 $P\in \mathrm{GL}_n(\mathbb C)$ 与对角 $D$ 使
> $$A=P^*P,\qquad B=P^*DP .$$
> 即 $P$ 使 $A$ 成为标准内积、$B$ 成对角（同时化）。

**Preuve.** 以 $A$ 作内积 $\langle X,Y\rangle_A={}^t\bar XAY$，令 $\varphi(X,Y)={}^t\bar XBY$。存在唯一 $A$-自伴 $u$ 使 $\varphi(X,Y)=\langle u(X),Y\rangle_A$，其矩阵 $C$ 满足 $C^*A=AC=B$。$C$ 在 $A$-正交归一基下对角（谱定理），设 $P$ 是从标准基到该基的过渡矩阵，则在标准基下 $A=P^*P$、$B=P^*DP$。

> [!note] 定理 2.
> $A\in\mathcal H_n$ 正定、$C\in\mathcal H_n$。则 $AC$ **可对角化**（$AC$ 本身一般不是 Hermite 的）。

**Preuve.** 对 $(A^{-1},C)$ 用 Théorème 1：$A^{-1}=P^*P$、$C=P^*DP$，于是 $AC=P^{-1}D P$（相似于对角阵）。

## 6. Min-max（Courant–Fischer）

$u=u^*$，特征值 $\lambda_1\le\cdots\le\lambda_n$，正交归一特征基 $e_i$，$\langle u(x),x\rangle=\sum\lambda_i|x_i|^2$。

> [!note] 命题
> $$\lambda_1=\min_{\|x\|=1}\langle u(x),x\rangle,\qquad \lambda_n=\max_{\|x\|=1}\langle u(x),x\rangle,$$
> 分别由 $x=e_1$、$x=e_n$ 取到。

> [!note] 定理 (Courant–Fischer)
> $$\lambda_i=\min_{\substack{F\subset E\\ \dim F=i}}\ \max_{\substack{x\in F\\ \|x\|=1}}\langle u(x),x\rangle=\max_{\substack{G\subset E\\ \dim G=n-i+1}}\ \min_{\substack{x\in G\\ \|x\|=1}}\langle u(x),x\rangle .$$

**Preuve（min-max 一侧）.** 取 $G_i=\operatorname{Vect}(e_i,\dots,e_n)$（$\dim=n-i+1$）；对任意 $\dim F=i$ 有 $F\cap G_i\ne\{0\}$，取单位向量 $y\in F\cap G_i$，则 $\langle u(y),y\rangle\ge\lambda_i$，故 $\max_{F}\ge\lambda_i$；而取 $F=F_i:=\operatorname{Vect}(e_1,\dots,e_i)$ 时 $\max$ 恰为 $\lambda_i$（在 $F_i$ 上 $\langle u(x),x\rangle\le\lambda_i$，等号在 $e_i$）。max 一侧对 $-u$ 用同一结论。

## 7. Matrice de Gram

> [!note] 定义
> $e_1,\dots,e_k\in E$ 的 **Gram 矩阵**为
> $$G(e_1,\dots,e_k)=\bigl(\langle e_i,e_j\rangle\bigr)_{1\le i,j\le k}.$$
> 若 $e_1,\dots,e_k$ 线性无关，它就是内积在 $\operatorname{Vect}(e_1,\dots,e_k)$ 上的矩阵；其行列式 $>0$，而 $\det G=\bigl(\operatorname{Vol}\bigr)^2$。

## 相关概念

- [[代数III/概念/经典群]]
- [[代数III/概念/线性群与特殊线性群]]
- [[Schur-Weyl对偶]]
- [[代数III/概念/特征标与正交关系]]
