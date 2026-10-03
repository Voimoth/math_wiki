---
title: Variance, moments et écart-type
created: 2026-10-03
updated: 2026-10-03
type: concept
tags: [probabilites, variance, moments, ecart-type]
sources: [概率论 正课手写笔记]
confidence: medium
---

# Variance

> [!tip] Pourquoi
> L'espérance ne dit rien de la dispersion : deux lois très différentes peuvent avoir même moyenne. La variance mesure l'écart quadratique moyen à la moyenne et sert d'outil central pour les sommes de variables (variance d'une somme, loi des grands nombres, théorème de la limite centrale).

> [!note] Définition
> Soit $r\in\mathbb{N}^*$ et $X$ une v.a. réelle. On dit que $X$ **admet un moment d'ordre $r$** si $\mathbb{E}[X^r]<+\infty$ ; le moment d'ordre $r$ est alors $\mathbb{E}[X^r]$.
>
> Soit $X$ une v.a. d'espérance finie telle que $X-\mathbb{E}[X]$ admette un moment d'ordre 2. On appelle **variance** de $X$ le nombre
> $$\operatorname{Var}(X):=\mathbb{E}\bigl[\,|X-\mathbb{E}[X]|^2\,\bigr].$$
> L'**écart-type** de $X\in L^2(\Omega)$ est $\sigma(X)=\sqrt{\operatorname{Var}(X)}$.

> [!note] Formule de calcul
> $$\operatorname{Var}(X)=\mathbb{E}[X^2]-(\mathbb{E}[X])^2.$$
> *Preuve.* Avec $m=\mathbb{E}[X]$ : $(X-m)^2=X^2-2mX+m^2$, donc $\mathbb{E}[(X-m)^2]=\mathbb{E}[X^2]-2m\mathbb{E}[X]+m^2=\mathbb{E}[X^2]-m^2$.

Une v.a. $X\in L^2(\Omega)$ est dite **centrée** si $\mathbb{E}[X]=0$ (la variance est le moment centré d'ordre 2), et **centrée réduite** si $\mathbb{E}[X]=0$ et $\sigma(X)=1$. Pour tout $X\in L^2(\Omega)$ avec $\sigma(X)\ne0$, la variable
$$X^*:=\frac{X-\mathbb{E}[X]}{\sigma(X)}$$
est centrée réduite.

## Intuition

> [!tip] Idée
> $\operatorname{Var}(X)$ est la « moyenne du carré de l'écart à la moyenne ». On centre d'abord $X$ (on retranche $\mathbb{E}[X]$), puis on prend le moment d'ordre 2. Le carré évite les compensations de signes ; l'écart-type $\sigma(X)$ est la variance ramenée à la même unité que $X$.

## Exemples

> [!example]
> - $\operatorname{Var}(X)=0$ équivaut à $X$ constante p.s. (car $\mathbb{E}\bigl[|X-\mathbb{E}[X]|^2\bigr]=0$).
> - Somme non corrélées : $\operatorname{Var}(X_1+\dots+X_n)=\sum_k\operatorname{Var}(X_k)$.

## Pièges

> [!warning]
> - $\mathbb{E}[X^2]$ n'est pas $(\mathbb{E}[X])^2$ : la différence est exactement la variance.
> - La variance n'est définie que si $X\in L^2(\Omega)$ (moment d'ordre 2 fini) ; une v.a. seulement $L^1$ n'a pas forcément de variance.
> - $X\in L^2\Rightarrow X\in L^1$, mais l'inverse est faux.
> - La variance d'une somme ne s'ajoute **pas** en général : il faut la non-corrélation (voir [[covariance]]).

## Voir aussi
- [[esperance]]
- [[covariance]]
- [[inegalites-lp]]
- [[数量积]]
## Notes du cours

- [[19-Moments-variance-et-inegalites-Lp|概率论 · 19-Moments-variance-et-inegalites-Lp]]
- [[20-Covariance-variance-d-une-somme-et-lois-usuelles|概率论 · 20-Covariance-variance-d-une-somme-et-lois-usuelles]]
- [[21-Fonctions-generatrices|概率论 · 21-Fonctions-generatrices]]
- [[22-Loi-faible-des-grands-nombres|概率论 · 22-Loi-faible-des-grands-nombres]]
- [[23-Loi-forte-des-grands-nombres|概率论 · 23-Loi-forte-des-grands-nombres]]
- [[24-Theoreme-central-limite|概率论 · 24-Theoreme-central-limite]]
