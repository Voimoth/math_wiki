---
title: 概率论 · 18 Espérance d'une variable aléatoire
created: 2026-10-03
updated: 2026-10-03
type: notes
tags: [probabilites, esperance, integrale, L1, independance]
sources: [概率论 正课手写笔记]
confidence: medium
---

# 18 Espérance d'une variable aléatoire

## 18.1 Construction de l'intégrale

Soit $(\Omega,\mathcal{F},\mathbb{P})$ un espace probabilisé.

> [!note] Déf. 18.1
> On admet la construction de l'intégrale (cours de mesures et intégrales) pour toute v.a. non négative $X:\Omega\to[0,+\infty]$ :
> $$X\longmapsto \int_\Omega X\,d\mathbb{P}\in[0,+\infty].$$
> On note $\mathbb{E}[X]$ cette intégrale et on l'appelle espérance de la v.a. $X$.

La construction se fait en quatre étapes.

**Étape 1. Variables étagées positives.** Pour
$$X(\omega)=\sum_{j=1}^n a_j\,\mathbf{1}_{A_j}(\omega),\qquad a_j\ge0,\quad A_j \text{ deux à deux disjoints},$$
on pose
$$\mathbb{E}[X]=\int_\Omega X\,d\mathbb{P}:=\sum_{j=1}^n a_j\,\mathbb{P}(A_j).$$
L'espérance vérifie la propriété de linéarité : pour $X,Y$ v.a. étagées positives et $a,b>0$,
$$\mathbb{E}[aX+bY]=a\,\mathbb{E}[X]+b\,\mathbb{E}[Y].$$

**Étape 2. Variables bornées non négatives.** Pour $X\ge0$ bornée,
$$\mathbb{E}[X]:=\sup_{\substack{\tilde X\ge0 \text{ étagée}\\ \tilde X\le X}}\mathbb{E}[\tilde X]<+\infty.$$

**Étape 3. Variables non négatives.** Pour $X\ge0$,
$$\mathbb{E}[X]=\lim_{n\to+\infty}\mathbb{E}[\min(X,n)],$$
grâce au théorème de convergence monotone de Lévy.

> [!info] Rq. 18.2
> La valeur $\mathbb{E}[X]=+\infty$ est permise.

**Étape 4. Cas général.** Pour $X:\Omega\to\mathbb{R}$ on note
$$X^+=\max\{X,0\},\qquad X^-=\max\{-X,0\},$$
de sorte que
$$X=X^+-X^-,\qquad |X|=X^++X^-.$$
Si l'un au moins des deux nombres $\mathbb{E}[X^+],\mathbb{E}[X^-]$ est fini, on définit
$$\mathbb{E}[X]=\mathbb{E}[X^+]-\mathbb{E}[X^-]\in[-\infty,+\infty].$$
On ne peut pas définir $\mathbb{E}[X]$ si $\mathbb{E}[X^+]=\mathbb{E}[X^-]=+\infty$.

> [!example] Exemple 18.3
> Soit $X$ telle que
> $$\mathbb{P}(X=n)=\mathbb{P}(X=-n)=\frac{1}{2n(n+1)},\qquad n\in\mathbb{N}^*.$$
> Alors
> $$\mathbb{E}[X^+]=\sum_{n=1}^{+\infty}\frac{n}{2n(n+1)}=+\infty,\qquad \mathbb{E}[X^-]=+\infty,$$
> donc $\mathbb{E}[X]$ n'est pas définie.

## 18.2 Variables aléatoires intégrables

> [!note] Déf. 18.4
> On dit qu'une v.a. $X$ est intégrable, ou d'espérance finie, si
> $$\mathbb{E}[|X|]<+\infty.$$
> On note alors $\mathbb{E}[X]$ son espérance et $X\in\mathcal{L}^1(\Omega,\mathcal{F},\mathbb{P})$, où
> $$L^1=\bigl\{X \text{ v.a.}\ \big|\ \mathbb{E}[|X|]<\infty\bigr\}.$$
> Notation : $X\in L^1(\Omega)$, $X\in L^1$.

> [!info] Prop. 18.5 (admis)
> 1) Pour tout $A\in\mathcal{F}$, $\mathbb{E}[\mathbb{1}_A]=\mathbb{P}(A)$.
> 2) Linéarité : si $(X,Y)\in(L^1)^2$ et $a,b\in\mathbb{R}$, alors
> $$\mathbb{E}[aX+bY]=a\,\mathbb{E}[X]+b\,\mathbb{E}[Y].$$
> 3) Si $X\ge0$, alors $\mathbb{E}[X]\ge0$. De plus, si $\mathbb{E}[X]=0$, alors $X=0$ p.s.
> 4) Si $X,Y\in L^1(\Omega)$ et $X\le Y$ p.s., alors $\mathbb{E}[X]\le\mathbb{E}[Y]$.
> 5) Si $X\in L^1(\Omega)$, alors $\bigl|\mathbb{E}[X]\bigr|\le\mathbb{E}[|X|]$.

## 18.3 Calcul de l'espérance

**Cas discret.** Soit $X$ une v.a. telle que $X(\Omega)\subset\mathbb{Z}$, et $f:\mathbb{R}\to\mathbb{R}$ mesurable telle que $\mathbb{E}[|f(X)|]<+\infty$. Alors
$$\mathbb{E}[f(X)]=\sum_{n\in\mathbb{Z}}f(n)\,\mathbb{P}(X=n).$$
En particulier, avec $f=\mathrm{id}$,
$$\mathbb{E}[X]=\sum_{n\in\mathbb{Z}}n\,\mathbb{P}(X=n).$$

Soit $F_X(x)=\mathbb{P}(X\le x)$ la fonction de répartition de $X$. Alors
$$\mathbb{P}(X=n)=F_X(n)-F_X(n^-),$$
d'où
$$\mathbb{E}[f(X)]=\int_{-\infty}^{+\infty}f(x)\,dF_X(x)\qquad\text{(Riemann--Stieltjes).}$$

> [!info] Prop. 18.6
> Soit $X:(\Omega,\mathcal{F},\mathbb{P})\to(\mathbb{R},\mathcal{B}(\mathbb{R}))$ une variable aléatoire et $f:\mathbb{R}\to\mathbb{R}$ une fonction mesurable. Si $f(X)$ est intégrable, alors
> $$\mathbb{E}[f(X)]=\int_{-\infty}^{+\infty}f(x)\,dF_X(x),$$
> où $F_X$ est la fonction de répartition de $X$.

**Cas continu.** Si $F_X\in C^1$ et $p_X=F_X'$ (densité), alors
$$\mathbb{P}\bigl(X\in[x,x+dx]\bigr)=p_X(x)\,dx=dF_X(x),$$
et
$$\mathbb{E}[f(X)]=\int_{-\infty}^{+\infty}f(x)\,p_X(x)\,dx.$$

## 18.4 Espérance d'un produit de variables indépendantes

> [!info] Prop. 18.7
> Soient $X,Y\in L^1(\Omega)$ deux v.a. indépendantes. Alors $XY\in L^1(\Omega)$ et
> $$\mathbb{E}[XY]=\mathbb{E}[X]\cdot\mathbb{E}[Y].$$

**Preuve (esquisse) :** On note $F_{X,Y}(x,y)$ la fonction de répartition du couple $(X,Y)$. Puisque $X$ et $Y$ sont indépendantes,
$$F_{X,Y}(x,y)=F_X(x)\,F_Y(y).$$
D'après la Prop. 18.6,
$$\mathbb{E}[|XY|]=\iint_{\mathbb{R}^2}|x\cdot y|\,dF_{X,Y}(x,y)=\iint_{\mathbb{R}^2}|xy|\,dF_X(x)\,dF_Y(y).$$
Le théorème de Fubini--Tonelli (l'intégrande $|xy|\ge0$, et la séparation $dF_{X,Y}=dF_X\,dF_Y$ est justifiée par l'indépendance ci-dessus) fournit alors
$$\left(\int_{\mathbb{R}}|x|\,dF_X(x)\right)\left(\int_{\mathbb{R}}|y|\,dF_Y(y)\right)<+\infty,$$
c'est-à-dire $XY\in L^1(\Omega)$. Le même théorème, appliqué cette fois à $xy$ (dominé par $|xy|$, qui est intégrable), donne
$$\mathbb{E}[XY]=\iint_{\mathbb{R}^2}xy\,dF_X(x)\,dF_Y(y)=\left(\int_{\mathbb{R}}x\,dF_X(x)\right)\left(\int_{\mathbb{R}}y\,dF_Y(y)\right)=\mathbb{E}[X]\,\mathbb{E}[Y].$$

## Voir aussi
- [[esperance]]
- [[independance]]
- [[fonction-de-repartition]]
- [[mesure-de-probabilite]]
- [[presque-sur]]
- [[loi-d-une-variable-aleatoire]]
