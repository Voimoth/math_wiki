---
title: Covariance (non-corrélation, variance d'une somme)
created: 2026-10-03
updated: 2026-10-03
type: concept
tags: [probabilites, covariance, correlation, variance]
sources: [概率论 正课手写笔记]
confidence: medium
---

# Covariance

> [!tip] Pourquoi
> Deux variables peuvent être liées sans qu'on le voie sur leurs lois marginales. La covariance mesure la partie « conjointe » de leur dispersion : elle contrôle le terme croisé dans la variance d'une somme, et permet de relier indépendance, non-corrélation et orthogonalité dans $L^2$.

> [!note] Définition
> Soient $X,Y$ deux v.a. réelles d'espérance finie telles que $(X-\mathbb{E}[X])(Y-\mathbb{E}[Y])\in L^1(\Omega)$. On appelle **covariance** de $X$ et $Y$ le nombre
> $$\operatorname{Cov}(X,Y)=\mathbb{E}\bigl[(X-\mathbb{E}[X])(Y-\mathbb{E}[Y])\bigr].$$
> En particulier $\operatorname{Cov}(X,X)=\operatorname{Var}(X)$.

Propriétés.

> [!note] Propriétés
> - Si $X,Y\in L^2(\Omega)$ et $\mathbb{E}[X]=\mathbb{E}[Y]=0$, alors $\operatorname{Cov}(X,Y)=\mathbb{E}[XY]=\langle X,Y\rangle$ : la covariance est le produit scalaire de $L^2(\Omega)$.
> - Si de plus $\sigma(X)=\sigma(Y)=1$, alors $\operatorname{Cov}(X,Y)=\cos\theta(X,Y)$ : la covariance devient le cosinus de l'angle entre $X$ et $Y$.
> - Si $\operatorname{Cov}(X,Y)=0$, on dit que $X$ et $Y$ sont **non corrélées**.
> - **Variance d'une somme** : pour $X_1,\dots,X_n\in L^2(\Omega)$,
> $$\operatorname{Var}\Bigl(\sum_{k=1}^nX_k\Bigr)=\sum_{k=1}^n\operatorname{Var}(X_k)+2\sum_{1\le i<j\le n}\operatorname{Cov}(X_i,X_j).$$
> En particulier, si les $X_i$ sont deux à deux non corrélées, $\operatorname{Var}\bigl(\sum_k X_k\bigr)=\sum_k\operatorname{Var}(X_k)$.

## Intuition

> [!tip] Idée
> La covariance est le produit scalaire des variables **centrées**. Elle est positive quand $X$ et $Y$ varient « dans le même sens » autour de leurs moyennes, négative quand elles varient en sens opposés, nulle quand les fluctuations sont « orthogonales ». C'est exactement le vocabulaire géométrique de $L^2$ : $\langle X,Y\rangle=\mathbb{E}[XY]$ pour des variables centrées.

## Exemples

> [!example]
> Sur $\Omega=\{-1,0,1\}$ avec $\mathbb{P}(X=-1)=\mathbb{P}(X=0)=\mathbb{P}(X=1)=\frac13$, et $Y=X^2$ : $X$ et $Y$ ne sont pas indépendantes, mais
> $$\operatorname{Cov}(X,Y)=\mathbb{E}\Bigl[X^3-\frac23X\Bigr]=0.$$
> Non corrélées n'implique donc pas indépendance.

## Pièges

> [!warning]
> - Réciproque fausse : non corrélées $\not\Rightarrow$ indépendantes. L'indépendance entraîne la nullité de la covariance, jamais l'inverse.
> - La covariance est **bilinéaire et symétrique** ; la variance d'une somme fait donc apparaître les termes croisés, pas seulement la somme des variances.
> - L'inégalité de Cauchy--Schwarz donne $|\operatorname{Cov}(X,Y)|\le\sigma(X)\sigma(Y)$ : le « cosinus » est bien dans $[-1,1]$.

## Voir aussi
- [[variance]]
- [[esperance]]
- [[independance]]
- [[inegalites-lp]]
- [[数量积]]
- [[Cauchy-Schwarz不等式]]
## Notes du cours

- [[20-Covariance-variance-d-une-somme-et-lois-usuelles|概率论 · 20-Covariance-variance-d-une-somme-et-lois-usuelles]]
- [[22-Loi-faible-des-grands-nombres|概率论 · 22-Loi-faible-des-grands-nombres]]
