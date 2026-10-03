---
title: 概率论 · 19 Moments, variance et inégalités $L^p$
created: 2026-10-03
updated: 2026-10-03
type: notes
tags: [probabilites, moments, variance, Holder, Cauchy-Schwarz, Lp]
sources: [概率论 正课手写笔记]
confidence: medium
---

# 19 Moments, variance et inégalités $L^p$

## 19.1 Moments

> [!note] Déf. 19.1
> Soit $r\in\mathbb{N}^*$ et $X$ une v.a. réelle. On dit que $X$ admet un moment d'ordre $r$ si $X^r$ est d'espérance finie, c'est-à-dire
> $$\mathbb{E}[X^r]<+\infty.$$
> Le moment d'ordre $r$ de $X$ est alors le nombre $\mathbb{E}[X^r]$.

> [!info] Rq. 19.2
> Le moment d'ordre 2 est le plus utilisé : il conduit à la notion de variance.

## 19.2 Variance et écart-type

> [!note] Déf. 19.3 (Variance)
> Soit $X$ une v.a. d'espérance finie. Si la variable aléatoire $X-\mathbb{E}[X]$ admet un moment d'ordre 2, on appelle variance de $X$ le nombre
> $$\operatorname{Var}(X):=\mathbb{E}\bigl[\,|X-\mathbb{E}[X]|^2\,\bigr].$$

> [!info] Rq. 19.4
> 1) Une v.a. intégrable $X$ est dite centrée si $\mathbb{E}[X]=0$. La variance est donc aussi appelée moment centré d'ordre 2.
> 2) $\operatorname{Var}(X)=\mathbb{E}[X^2]-(\mathbb{E}[X])^2$.

**Preuve de 2) :** on pose $m=\mathbb{E}[X]$, d'où $(X-m)^2=X^2-2mX+m^2$, puis
$$\mathbb{E}\bigl[(X-m)^2\bigr]=\mathbb{E}[X^2]-2m\,\mathbb{E}[X]+m^2=\mathbb{E}[X^2]-m^2.$$

## 19.3 Inégalité de Cauchy--Schwarz

> [!info] Prop. 19.5 (Inégalité de Cauchy--Schwarz)
> Si $X,Y\in L^2(\Omega)$, alors $XY\in L^1(\Omega)$ et
> $$\bigl|\mathbb{E}[XY]\bigr|\le\sqrt{\mathbb{E}[X^2]\cdot\mathbb{E}[Y^2]}.$$

> [!info] Notation
> Pour $r\in[1,+\infty[$,
> $$L^r(\Omega):=\bigl\{X\ \big|\ \mathbb{E}[|X|^r]<+\infty\bigr\},\qquad \|X\|_{L^r(\Omega)}:=\bigl(\mathbb{E}[|X|^r]\bigr)^{1/r}.$$
> Sur $L^2(\Omega)$ on définit le produit scalaire
> $$\langle X,Y\rangle:=\mathbb{E}[XY],\qquad \langle X,X\rangle=\mathbb{E}[X^2]=\|X\|_{L^2(\Omega)}^2.$$
> Cauchy--Schwarz s'écrit alors
> $$\bigl|\langle X,Y\rangle\bigr|\le\|X\|_{L^2(\Omega)}\,\|Y\|_{L^2(\Omega)}.$$

Interprétation géométrique : $L^2(\Omega)$ est muni d'un produit scalaire, donc d'une norme et d'un angle ; Cauchy--Schwarz est exactement l'inégalité de Cauchy--Schwarz de cet espace de Hilbert.

## 19.4 Inégalités de Hölder

> [!info] Prop. 19.6 (Inégalités de Hölder)
> Soient $p,q\in\,]1,+\infty[$ vérifiant la relation de conjugaison $\frac1p+\frac1q=1$. Soient $X\in L^p(\Omega)$ et $Y\in L^q(\Omega)$. Alors $XY\in L^1(\Omega)$ et
> $$\bigl\|XY\bigr\|_{L^1(\Omega)}\le\|X\|_{L^p(\Omega)}\,\|Y\|_{L^q(\Omega)},$$
> c'est-à-dire
> $$\mathbb{E}[XY]\le\bigl(\mathbb{E}[|X|^p]\bigr)^{1/p}\bigl(\mathbb{E}[|Y|^q]\bigr)^{1/q}.$$

> [!info] Rq. 19.7
> Pour $p=q=2$ on retrouve l'inégalité de Cauchy--Schwarz.

**Preuve :** On rappelle que, pour tous $a,b\ge0$ et $\frac1p+\frac1q=1$,
$$ab\le\frac{a^p}{p}+\frac{b^q}{q}.\qquad(*)$$
Supposons $\|X\|_{L^p(\Omega)}>0$ et $\|Y\|_{L^q(\Omega)}>0$ ; sinon l'inégalité est automatique. On pose
$$X_1:=\frac{|X|}{\|X\|_{L^p(\Omega)}},\qquad Y_1:=\frac{|Y|}{\|Y\|_{L^q(\Omega)}},$$
de sorte que $\|X_1\|_{L^p(\Omega)}=\|Y_1\|_{L^q(\Omega)}=1$. En appliquant $(*)$ avec $a=X_1(\omega)$ et $b=Y_1(\omega)$, on obtient
$$|X_1(\omega)Y_1(\omega)|\le\frac1p|X_1(\omega)|^p+\frac1q|Y_1(\omega)|^q,\qquad\forall\omega\in\Omega.$$
En prenant l'espérance et en utilisant la Prop. 18.5 (linéarité, positivité),
$$\mathbb{E}\bigl[|X_1Y_1|\bigr]\le\frac1p\,\mathbb{E}\bigl[|X_1|^p\bigr]+\frac1q\,\mathbb{E}\bigl[|Y_1|^q\bigr]=\frac1p+\frac1q=1.$$
Par conséquent
$$\mathbb{E}\!\left[\frac{|XY|}{\|X\|_{L^p(\Omega)}\|Y\|_{L^q(\Omega)}}\right]\le1\ \Longrightarrow\ \mathbb{E}[|XY|]=\|XY\|_{L^1(\Omega)}\le\|X\|_{L^p(\Omega)}\|Y\|_{L^q(\Omega)}.$$

> [!example] Exemple 19.8 (inégalité de Hölder finie)
> Soient $a_j,b_j>0$ et des événements $A_j$ deux à deux disjoints avec $\mathbb{P}(A_j)=\frac1n$. On pose
> $$X=\sum_{j=1}^n a_j\,\mathbb{1}_{A_j},\qquad Y=\sum_{j=1}^n b_j\,\mathbb{1}_{A_j}.$$
> Alors
> $$\mathbb{E}[XY]=\sum_{j=1}^n a_jb_j\,\mathbb{P}(A_j)=\frac1n\sum_{j=1}^n a_jb_j,$$
> $$\bigl\|X\bigr\|_{L^p(\Omega)}=\Bigl(\sum_{j=1}^n a_j^p\,\mathbb{P}(A_j)\Bigr)^{1/p}=\frac{1}{n^{1/p}}\Bigl(\sum_{j=1}^n a_j^p\Bigr)^{1/p},$$
> $$\bigl\|Y\bigr\|_{L^q(\Omega)}=\frac{1}{n^{1/q}}\Bigl(\sum_{j=1}^n b_j^q\Bigr)^{1/q}.$$
> En appliquant Hölder et en multipliant par $n$, on en déduit
> $$\sum_{j=1}^n a_jb_j\le\Bigl(\sum_{j=1}^n a_j^p\Bigr)^{1/p}\Bigl(\sum_{j=1}^n b_j^q\Bigr)^{1/q}.$$

## 19.5 Inclusion des espaces $L^r$

> [!note] Cor. 19.9
> Soit $X\in L^p(\Omega)$, $p\in[1,+\infty[$. Alors $X\in L^r(\Omega)$ pour tout $1\le r\le p$, autrement dit $L^p(\Omega)\subseteq L^r(\Omega)$.
> En particulier, si $X\in L^2(\Omega)$, alors $\operatorname{Var}(X)$ existe et
> $$\operatorname{Var}(X)=\mathbb{E}[X^2]-(\mathbb{E}[X])^2.$$

**Preuve :** On suppose $1\le r<p$ (le cas $r=p$ est immédiat). On écrit $\mathbb{E}[|X|^r]=\mathbb{E}\bigl[|X|^r\cdot1\bigr]$ et on applique Hölder avec les exposants conjugués $\frac pr$ et $\frac{p}{p-r}$ :
$$\mathbb{E}\bigl[|X|^r\bigr]\le\bigl\|\,|X|^r\bigr\|_{L^{p/r}(\Omega)}\bigl\|1\bigr\|_{L^{p/(p-r)}(\Omega)}=\|X\|_{L^p(\Omega)}^r\,\mathbb{P}(\Omega)^{\frac{p-r}{p}}=\|X\|_{L^p(\Omega)}^r<+\infty.$$

> [!note] Déf. 19.10
> Soit $X\in L^2(\Omega)$. L'écart-type de $X$ est le réel
> $$\sigma(X)=\sqrt{\operatorname{Var}(X)}.$$

> [!info] Notation
> Une v.a. $X\in L^2(\Omega)$ est dite centrée réduite si $\mathbb{E}[X]=0$ et $\sigma(X)=1$.
> Plus généralement, pour tout $X\in L^2(\Omega)$ avec $\sigma(X)\ne0$, la variable
> $$X^*:=\frac{X-\mathbb{E}[X]}{\sigma(X)}$$
> est centrée réduite.
