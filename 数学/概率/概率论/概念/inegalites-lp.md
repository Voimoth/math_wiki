---
title: Inégalités Lp (Hölder, Cauchy-Schwarz, inclusion des Lr)
created: 2026-10-03
updated: 2026-10-03
type: concept
tags: [probabilites, Holder, Cauchy-Schwarz, Lp, espaces]
sources: [概率论 正课手写笔记]
confidence: medium
---

# Inégalités $L^p$ et Hölder

> [!tip] Pourquoi
> Les espaces $L^r(\Omega)$ mesurent « à quelle puissance on peut intégrer » une variable. Les inégalités de Hölder et Cauchy--Schwarz relient ces espaces entre eux : elles garantissent que les produits restent intégrables et donnent le contrôle de $\mathbb{E}[XY]$ par les normes séparées, ce dont dépendent la covariance et la théorie $L^2$.

> [!note] Notation
> Pour $r\in[1,+\infty[$,
> $$L^r(\Omega):=\bigl\{X\ \big|\ \mathbb{E}[|X|^r]<+\infty\bigr\},\qquad \|X\|_{L^r(\Omega)}:=\bigl(\mathbb{E}[|X|^r]\bigr)^{1/r}.$$

> [!info] Proposition (Cauchy--Schwarz)
> Si $X,Y\in L^2(\Omega)$, alors $XY\in L^1(\Omega)$ et
> $$\bigl|\mathbb{E}[XY]\bigr|\le\sqrt{\mathbb{E}[X^2]\,\mathbb{E}[Y^2]}.$$

Sur $L^2(\Omega)$ on munit l'espace du produit scalaire $\langle X,Y\rangle:=\mathbb{E}[XY]$, avec $\langle X,X\rangle=\|X\|_{L^2(\Omega)}^2$ ; l'inégalité s'écrit alors $|\langle X,Y\rangle|\le\|X\|_{L^2}\|Y\|_{L^2}$.

> [!info] Proposition (Hölder)
> Soient $p,q\in\,]1,+\infty[$ conjugués : $\frac1p+\frac1q=1$. Si $X\in L^p(\Omega)$ et $Y\in L^q(\Omega)$, alors $XY\in L^1(\Omega)$ et
> $$\|XY\|_{L^1(\Omega)}\le\|X\|_{L^p(\Omega)}\|Y\|_{L^q(\Omega)},$$
> c'est-à-dire $\mathbb{E}[XY]\le(\mathbb{E}[|X|^p])^{1/p}(\mathbb{E}[|Y|^q])^{1/q}$. Pour $p=q=2$ on retrouve Cauchy--Schwarz.

**Principe de la preuve.** On part de l'inégalité scalaire $ab\le\frac{a^p}{p}+\frac{b^q}{q}$ ($a,b\ge0$), on l'applique à $X_1=\frac{|X|}{\|X\|_{L^p}}$ et $Y_1=\frac{|Y|}{\|Y\|_{L^q}}$ (normalisation, qui ramène au cas $\|X_1\|_{L^p}=\|Y_1\|_{L^q}=1$), puis on prend l'espérance : $\mathbb{E}[|X_1Y_1|]\le\frac1p+\frac1q=1$.

> [!note] Inclusion des espaces $L^r$
> Soit $X\in L^p(\Omega)$, $p\in[1,+\infty[$. Alors $X\in L^r(\Omega)$ pour tout $1\le r\le p$, autrement dit $L^p(\Omega)\subseteq L^r(\Omega)$.
> *Preuve.* Pour $1\le r<p$, appliquer Hölder à $|X|^r$ et $1$ avec les exposants conjugués $\frac pr$ et $\frac{p}{p-r}$ : $\mathbb{E}[|X|^r]\le\|X\|_{L^p}^r\mathbb{P}(\Omega)^{\frac{p-r}{p}}=\|X\|_{L^p}^r<+\infty$.

## Intuition

> [!tip] Idée
> Dans un espace probabilisé ($\mathbb{P}(\Omega)=1$), intégrer une puissance plus élevée est plus restrictif : plus $p$ est grand, plus $L^p$ est petit. Hölder dit que « le produit de deux variables est intégrable dès que les puissances conjuguées le sont », l'exposant $p$ et son conjugué $q$ se partageant exactement le travail.

## Exemples

> [!example]
> **Hölder finie.** Des événements $A_j$ deux à deux disjoints de probabilité $\frac1n$, et $X=\sum_j a_j\mathbb{1}_{A_j}$, $Y=\sum_j b_j\mathbb{1}_{A_j}$ avec $a_j,b_j>0$, donnent
> $$\sum_{j=1}^n a_jb_j\le\Bigl(\sum_{j=1}^n a_j^p\Bigr)^{1/p}\Bigl(\sum_{j=1}^n b_j^q\Bigr)^{1/q}.$$

## Pièges

> [!warning]
>
> - Hölder est une inégalité : on écrit $\le$, et l'égalité n'a lieu que dans des cas dégénérés (proportionnalité de $|X|^p$ et $|Y|^q$).
> - Le signe de $X,Y$ n'intervient pas : c'est $\mathbb{E}[|XY|]$ qui est majoré ; l'énoncé « $\mathbb{E}[XY]\le\ldots$ » n'est qu'une réécriture.
> - Sens de l'inclusion : dans un espace de probabilité, $L^p\subseteq L^r$ pour $r\le p$ (le contraire de ce qui se passe sur un espace de mesure infinie).
> - $\mathbb{P}(\Omega)=1$ est **essentiel** dans la preuve de l'inclusion (le facteur $\mathbb{P}(\Omega)^{(p-r)/p}$ vaut alors $1$).

## Voir aussi
- [[esperance]]
- [[variance]]
- [[covariance]]
- [[inegalite-de-markov]]
- [[Hölder不等式]]
- [[Minkowski不等式]]
## Notes du cours

- [[19-Moments-variance-et-inegalites-Lp|概率论 · 19-Moments-variance-et-inegalites-Lp]]
