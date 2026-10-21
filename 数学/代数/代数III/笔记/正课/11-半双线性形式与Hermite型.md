---
title: 代数III(群论) · 11 半双线性形式与 Hermite 型
created: 2026-10-21
updated: 2026-10-21
type: notes
tags: [group-theory, algebre, cours, hermitian]
confidence: medium
---

# Formes sesquilinéaires et formes hermitiennes

以下 $E$ 是 $\mathbb C$-向量空间（有限维时取基 $e=(e_1,\dots,e_n)$）。

## 1. Applications semi-linéaires

> [!note] Déf.
> Une application $f:E\to E'$ est **semi-linéaire** si elle est additive et
> $$\forall\lambda\in\mathbb C,\ \forall x\in E,\qquad f(\lambda x)=\bar\lambda f(x).$$

Ex. 若 $\varphi\in E^*$，则 $\bar\varphi:x\mapsto\overline{\varphi(x)}$ 是半线性的。$\ker f$ 是 $E$ 的子空间、$\operatorname{Im}f$ 是 $E'$ 的子空间。

> [!note] Matrice
> Soient $e=(e_j)$ base de $E$、$f=(f_i)$ base de $E'$。半线性 $u$ 由 $u(e_j)=\sum_i u_{ij}f_i$ 的矩阵 $A=(u_{ij})$ 完全确定；若 $x=\sum_jx_je_j$，则 $u(x)$ 在 $f$ 下坐标为 $A\bar X$（$\bar X$ 是 $x$ 坐标的共轭）。**注意区分**：线性映射给 $AX$，半线性给 $A\bar X$。

## 2. Formes sesquilinéaires

> [!note] Déf.
> $\varphi:E\times E\to\mathbb C$ 称为**半双线性**（sesquilinéaire，「sesqui」$=1+\tfrac12$），若它对**第一个**变元半线性、对**第二个**变元线性。

> [!note] Déf. (Hermitienne)
> $\varphi$ 称为**Hermite 对称**的，若 $\varphi(y,x)=\overline{\varphi(x,y)}$ 对一切 $x,y$ 成立。此时 $\varphi(x,x)\in\mathbb R$。

Ex. $E=\mathbb C^n$、$\varphi(x,y)=\sum_i\bar x_iy_i$。

由基上的值完全确定：
$$\varphi(x,y)=\sum_{i,j}\bar x_i\,y_j\,\varphi(e_i,e_j).$$

## 3. Non-dégénérescence

> [!note] Déf.
> 对 $x\in E$ 令 $\varphi_x=\varphi(x,\cdot)\in E^*$，得半线性映射 $\hat\varphi:E\to E^*$、$x\mapsto\varphi_x$。$\varphi$ 称为**非退化**（non dégénérée），若 $\hat\varphi$ 单射，即
> $$\{x\in E:\forall y,\ \varphi(x,y)=0\}=\{0\}.$$
> $\dim E<\infty$ 时等价于 $\hat\varphi$ 双射，也等价于 $\varphi$ 的矩阵可逆。

> [!note] Prop.
> $\dim E<\infty$、$\varphi$ 非退化。则正交关系是对称的（$\varphi$ 称为 réflexive）$\iff$ 存在 Hermite 对称的半双线性 $\psi$ 与 $\lambda\in\mathbb C$ 使 $\varphi=\lambda\psi$。

**Preuve.** 对固定 $x$，$y\mapsto\overline{\varphi(y,x)}$ 是线性形式，记为 $\tilde\varphi_x$，于是有半线性 $\tilde\varphi:E\to E^*$、$x\mapsto\tilde\varphi_x$。设正交关系对称，则 $\varphi_x$ 与 $\tilde\varphi_x$ 有相同的核：
$$\tilde\varphi_x(y)=0\iff\overline{\varphi(y,x)}=0\iff\varphi(y,x)=0\iff\varphi(x,y)=0\iff\varphi_x(y)=0 .$$
两个线性形式同核 $\iff$ 成比例，即 $\tilde\varphi_x=\alpha(x)\varphi_x$。令
$$h=(\hat\varphi)^{-1}\circ\tilde\varphi:E\to E ,$$
它是线性的（复合一个半线性与一个半线性的逆）。由上式
$$h(x)=(\hat\varphi)^{-1}\bigl(\alpha(x)\varphi_x\bigr)=\overline{\alpha(x)}\,x,$$
故 $h$ 是位似：$\exists\alpha\in\mathbb C$，$h(x)=\alpha x$ 对一切 $x$，即 $\tilde\varphi_x=\alpha\varphi_x$，也就是
$$\overline{\varphi(y,x)}=\alpha\,\varphi(x,y).$$
再把 $x,y$ 互换并取共轭：$\varphi(y,x)=\bar\alpha\,\overline{\varphi(x,y)}=\bar\alpha\alpha\,\varphi(y,x)=|\alpha|^2\varphi(y,x)$，故 $|\alpha|=1$。取 $\lambda$ 使 $\lambda^2=\alpha$，令 $\psi=\lambda\varphi$：
$$\overline{\psi(y,x)}=\bar\lambda\,\overline{\varphi(y,x)}=\bar\lambda\alpha\varphi(x,y)=\bar\lambda\alpha\lambda^{-1}\psi(x,y)=\alpha\lambda^{-2}\psi(x,y)=\psi(x,y).$$
故 $\psi$ 是 Hermite 对称的，$\varphi=\lambda^{-1}\psi$。

## 4. Formes hermitiennes

> [!note] Déf.
> $\varphi$ Hermite 对称时，$h:E\to\mathbb R$、$x\mapsto\varphi(x,x)$ 称为对应的 **Hermite 型**（forme hermitienne / forme quadratique hermitienne）。有 $h(\lambda x)=|\lambda|^2h(x)$。

$h$ 可以还原 $\varphi$（**极化恒等式**）：
$$\varphi(x,y)=\tfrac14\Bigl(h(x+y)-h(x-y)+i\,h(x+iy)-i\,h(x-iy)\Bigr).$$

> [!warning] 原稿 p11 此处第三项写成 $-i(x+iy)$（漏了 $h$）、且与第四项符号顺序也不一；按上式改正，并保留原稿的 $h(x+y)=h(x)+h(y)+2\operatorname{Re}\varphi(x,y)$ 作为检验。
> [!info] 注记
> 原稿这一行确实写作 $-i(x+iy)+i\,h(x-iy)$，与极化恒等式的标准形式差一个整体符号与一个 $h$；数学上只有上式能给出 $\varphi$。

## 5. Matrices hermitiennes

记 $H=(\varphi(e_i,e_j))_{i,j}$。则 $H$ 是 Hermite 矩阵：$H^*={}^t\bar H$，$H=H^*$。

> [!note] Prop.
> Hermite 矩阵构成 $\mathcal M_n(\mathbb C)$ 的 $\mathbb R$-子空间 $\mathcal H_n$，且
> $$\mathcal M_n(\mathbb C)=\mathcal H_n\oplus i\,\mathcal H_n,$$
> 其中 $i\mathcal H_n$ 是反 Hermite 矩阵（$M^*=-M$）。分解为 $H=\frac{A+A^*}{2}$、$K=\frac{A-A^*}{2i}$。

**换基.** 若 $e,f$ 是两组基、$P$ 是基变换矩阵（$f_j=\sum_ip_{ij}e_i$），则
$$H'=P^*HP .$$
这解释成 $\mathrm{GL}_n(\mathbb C)$ 作用在形式空间上：$P\cdot H=(P^{-1})^*HP^{-1}$。

## 6. Orthogonalité

> [!note] Déf.
> $x\perp y\iff\varphi(x,y)=0$。$\varphi$ Hermite 对称时该关系对称。

（原稿 p13 整页失焦，仅可辨：$V^\perp$ 的定义、isotrope 的定义、非退化时 $E=V\oplus V^\perp$ 的断言。以下按 p14 的性质补全记号：$V^\perp=\{x:\forall v\in V,\ \varphi(x,v)=0\}$；$x$ 称为**迷向**（isotrope）若 $h(x)=0$。）[?]

> [!note] Prop.
> $h$ 非退化、$\dim E<\infty$。则对子空间 $V,W$：
> 1. $V^{\perp\perp}=V$；
> 2. $(V+W)^\perp=V^\perp\cap W^\perp$；
> 3. $(V\cap W)^\perp=V^\perp+W^\perp$。

**Preuve.** 1) 恒有 $V\subset V^{\perp\perp}$；而 $\dim V^{\perp\perp}=\dim E-(\dim E-\dim V)=\dim V$（非退化给 $\dim V^\perp=\dim E-\dim V$），故相等。2) 由定义直接读出。3) 对 2) 取正交。

## 7. Base orthogonale 与标准形

> [!note] Thm.
> $\dim E<\infty$、$\varphi$ Hermite 对称。则存在基使 $\varphi$ 的矩阵为
> $$\operatorname{diag}(\underbrace{1,\dots,1}_{r},\underbrace{-1,\dots,-1}_{s},0,\dots,0),\qquad r+s=\operatorname{rg}(\varphi),$$
> 且 $(r,s)$ 与所选基无关，称为 $\varphi$ 的**符号差**（signature）。

**Preuve.** (1) 先约化到非退化：核 $N=E^\perp=\ker\hat\varphi$，取补 $F$（$E=N\oplus F$），$\varphi|_F$ 非退化（若 $x\in F$ 与 $F$ 正交，则它与整个 $E$ 正交，故 $x\in N\cap F=0$）。

(2) 对 $n=\dim E$ 归纳。$n=1$：$\varphi(e,e)=\alpha\in\mathbb R^*$；$\alpha>0$ 取 $e'=e/\sqrt\alpha$，$\alpha<0$ 取 $e'=e/\sqrt{-\alpha}$，得 $\pm1$。

$n\ge2$：存在非迷向向量（否则 $\forall x$，$h(x)=0$，由极化恒等式 $\varphi=0$，与非退化矛盾）。取 $e_1$ 使 $\varphi(e_1,e_1)=\pm1$，令 $V=\mathbb Ce_1$。$V$ 非迷向，故
$$E=V\oplus V^\perp,$$
且 $\varphi|_{V^\perp}$ 非退化，对它用归纳假设得 $e_2,\dots,e_n$，$(e_1,\dots,e_n)$ 即为所求。

**唯一性.** 设两组基给出 $\operatorname{diag}(1^r,-1^s)$ 与 $\operatorname{diag}(1^{r'},-1^{s'})$，$r+s=r'+s'=n$。令
$$F=\operatorname{Vect}(e_1,\dots,e_r),\qquad G'=\operatorname{Vect}(e'_{r'+1},\dots,e'_{r'+s'}).$$
在 $F\setminus\{0\}$ 上 $h(x)=\sum|x_i|^2>0$，在 $G'\setminus\{0\}$ 上 $h(x')=-\sum|x'_j|^2<0$，故 $F\cap G'=\{0\}$，于是
$$r+s'=\dim(F\oplus G')\le n=r+s\Longrightarrow s'\le s .$$
交换两组基的角色得 $s\le s'$，故 $s=s'$、$r=r'$。

## 8. 分类的语言

> [!note] Déf.
> 两个 Hermite 型 $\varphi,\psi$ **等价**，若存在 $u\in \mathrm{GL}(E)$ 使 $\psi(x,y)=\varphi(u(x),u(y))$。等价地 $\mathrm{GL}(E)$ 作用在形式上：
> $$(u\cdot\varphi)(x,y)=\varphi\bigl(u^{-1}(x),u^{-1}(y)\bigr).$$

于是分类问题 = 求这个作用的轨道；由标准形定理，非退化 Hermite 型在同构意义下由 signature $(r,s)$（$r+s=n$）完全确定，共 $n+1$ 类。

## 相关概念

- [[代数III/概念/经典群]]
- [[代数III/概念/线性群与特殊线性群]]
- [[代数III/概念/特征标与正交关系]]
- [[Frobenius标准型]]
- [[Schur-Weyl对偶]]
