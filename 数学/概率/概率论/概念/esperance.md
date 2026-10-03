---
title: Espérance (intégrale de X, variables intégrables)
created: 2026-10-03
updated: 2026-10-03
type: concept
tags: [probabilites, esperance, integrale, L1]
sources: [概率论 正课手写笔记]
confidence: medium
---

# Espérance

> [!tip] Pourquoi
> L'espérance est la « moyenne théorique » d'une variable aléatoire : c'est l'intégrale de $X$ par rapport à la probabilité $\mathbb{P}$. Elle fournit le premier résumé numérique d'une loi et sert de brique à la variance, la covariance, la loi des grands nombres et le théorème de la limite centrale.

> [!note] Définition
> Soit $(\Omega,\mathcal{F},\mathbb{P})$ un espace probabilisé. L'espérance est l'intégrale
> $$\mathbb{E}[X]=\int_\Omega X\,d\mathbb{P},$$
> construite en quatre étapes :
> - **variables étagées positives** : si $X=\sum_{j=1}^n a_j\mathbf{1}_{A_j}$ avec $a_j\ge0$ et les $A_j$ deux à deux disjoints, alors $\mathbb{E}[X]=\sum_{j=1}^n a_j\mathbb{P}(A_j)$ ;
> - **variables bornées non négatives** : $\mathbb{E}[X]=\sup_{\tilde X\le X,\ \tilde X \text{ étagée}}\mathbb{E}[\tilde X]$ ;
> - **variables non négatives** : $\mathbb{E}[X]=\lim_{n\to+\infty}\mathbb{E}[\min(X,n)]$ (convergence monotone de Lévy) ;
> - **cas général** : $X=X^+-X^-$ avec $X^+=\max\{X,0\}$, $X^-=\max\{-X,0\}$ ; si l'un des deux nombres $\mathbb{E}[X^+],\mathbb{E}[X^-]$ est fini, on pose $\mathbb{E}[X]=\mathbb{E}[X^+]-\mathbb{E}[X^-]$.
>
> $X$ est dite **intégrable** (ou d'espérance finie) si $\mathbb{E}[|X|]<+\infty$, et l'on note alors $X\in L^1(\Omega,\mathcal{F},\mathbb{P})$.

Propriétés (admises) : $\mathbb{E}[\mathbb{1}_A]=\mathbb{P}(A)$ ; linéarité $\mathbb{E}[aX+bY]=a\mathbb{E}[X]+b\mathbb{E}[Y]$ ; positivité et $\mathbb{E}[X]=0\Rightarrow X=0$ p.s. ; monotonie ; $|\mathbb{E}[X]|\le\mathbb{E}[|X|]$.

> [!note] Formules de calcul
> - **Cas discret** ($X(\Omega)\subset\mathbb{Z}$) : $\displaystyle \mathbb{E}[f(X)]=\sum_{n\in\mathbb{Z}}f(n)\mathbb{P}(X=n)$, et en particulier $\mathbb{E}[X]=\sum_{n\in\mathbb{Z}}n\,\mathbb{P}(X=n)$.
> - **Forme générale** : $\displaystyle \mathbb{E}[f(X)]=\int_{-\infty}^{+\infty}f(x)\,dF_X(x)$ (Riemann--Stieltjes), où $F_X$ est la fonction de répartition de $X$.
> - **Cas à densité** (si $F_X\in C^1$, $p_X=F_X'$) : $\displaystyle \mathbb{E}[f(X)]=\int_{-\infty}^{+\infty}f(x)\,p_X(x)\,dx$.
> - **Produit** : si $X,Y\in L^1(\Omega)$ sont indépendantes, alors $XY\in L^1(\Omega)$ et $\mathbb{E}[XY]=\mathbb{E}[X]\,\mathbb{E}[Y]$.

## Intuition

> [!tip] Idée
> L'espérance est la moyenne des valeurs prises par $X$, pondérées par leurs probabilités : $\sum n\mathbb{P}(X=n)$ ou $\int x\,p_X(x)dx$. Le symbole $d\mathbb{P}$ cache cette pondération sous forme d'intégrale de Lebesgue, ce qui permet de traiter d'un seul coup variables discrètes, à densité et mélanges.

## Exemples

> [!example]
> $X$ telle que $\mathbb{P}(X=n)=\mathbb{P}(X=-n)=\frac{1}{2n(n+1)}$ pour $n\ge1$ : on a $\mathbb{E}[X^+]=\mathbb{E}[X^-]=+\infty$, donc $\mathbb{E}[X]$ n'est pas définie : une espérance peut être une différence $\infty-\infty$.

## Pièges

> [!warning]
> - $\mathbb{E}[X]$ n'existe pas toujours : elle vaut $\pm\infty$ si un seul des $\mathbb{E}[X^\pm]$ est fini, et n'est pas définie si les deux sont $+\infty$.
> - Ne pas confondre « espérance finie » ($\mathbb{E}[|X|]<+\infty$) et « $X$ bornée ».
> - L'additivité $\mathbb{E}[X+Y]=\mathbb{E}[X]+\mathbb{E}[Y]$ ne demande **aucune** hypothèse d'indépendance ; la multiplicativité $\mathbb{E}[XY]=\mathbb{E}[X]\mathbb{E}[Y]$, elle, l'exige.

## Voir aussi
- [[variance]]
- [[covariance]]
- [[inegalites-lp]]
