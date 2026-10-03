---
title: Fonction génératrice
created: 2026-10-03
updated: 2026-10-03
type: concept
tags: [probabilites, fonction-generatrice, serie-entiere, lois-usuelles]
sources: [概率论 正课手写笔记]
confidence: medium
---

# Fonction génératrice

> [!tip] Pourquoi
> Pour une variable à valeurs dans $\mathbb{N}$, la fonction génératrice encode toute la loi sous forme de série entière : elle permet de retrouver les probabilités (par dérivation en $0$), les moments (par dérivation en $1$) et la loi d'une somme de variables indépendantes (par produit).

> [!note] Définition
> Soit $X:\Omega\to\mathbb{N}$ une variable aléatoire. Sa fonction génératrice est
> $$G_X:[-1,1]\to\mathbb{R},\qquad G_X(t)=\mathbb{E}[t^X]=\sum_{n=0}^{+\infty}t^n\mathbb{P}(X=n).$$

> [!info] Propriétés
> - $G_X$ est analytique, de rayon de convergence $R\ge1$, et $|G_X(t)|\le1$ sur $[-1,1]$.
> - (détermine la loi) $\mathbb{P}(X=k)=\dfrac{G_X^{(k)}(0)}{k!}$.
> - (moments) $G_X'(1)=\mathbb{E}[X]$ et $G_X''(1)=\mathbb{E}[X(X-1)]$, d'où $\mathrm{Var}(X)=G_X''(1)+G_X'(1)-\big(G_X'(1)\big)^2$.
> - (somme) si $X\perp Y$ alors $G_{X+Y}=G_X\,G_Y$ ; plus généralement $G_{\sum_kX_k}=\prod_kG_{X_k}$.

## Intuition
> [!tip] Idée
> $G_X$ est la série entière dont les coefficients sont les probabilités de la loi. Dériver en $0$ lit un coefficient ; dériver en $1$ fait apparaître l'opérateur $t\frac{d}{dt}$, qui multiplie le $n$-ème coefficient par $n$ — donc fait surgir les moments. Le produit des fonctions génératrices traduit la convolution des lois à l'indépendance.

## Exemples
> [!example]
> $X\sim\mathcal{P}(\lambda)$ : $G_X(t)=e^{\lambda(t-1)}$, d'où $\mathbb{E}[X]=\mathrm{Var}(X)=\lambda$ et, par la propriété de produit, la stabilité de la loi de Poisson sous l'addition.
> $X\sim B(n,p)$ : $G_X(t)=(q+pt)^n$, d'où $\mathbb{E}[X]=np$ et $\mathrm{Var}(X)=npq$.

## Pièges
> [!warning]
> - Elle n'existe que pour des variables à valeurs dans $\mathbb{N}$ ; pour une variable réelle, on utilise la fonction caractéristique ([[fonction-caracteristique]]).
> - L'espérance s'obtient par dérivation en $1$, pas par évaluation : $G_X(1)=1$ ne donne rien.
> - La dérivabilité en $t=1$ n'est pas automatique : elle encode précisément l'existence des moments.

## Voir aussi
- [[esperance]]
- [[variance]]
- [[loi-de-poisson]]
- [[loi-binomiale]]
- [[independance]]
