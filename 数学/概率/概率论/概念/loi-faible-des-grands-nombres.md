---
title: Loi faible des grands nombres
created: 2026-10-03
updated: 2026-10-03
type: concept
tags: [probabilites, grands-nombres, convergence, khintchine]
sources: [概率论 正课手写笔记]
confidence: medium
---

# Loi faible des grands nombres

> [!tip] Pourquoi
> Répondre à la question : la moyenne empirique $\frac{S_n}{n}$ de variables i.i.d. converge-t-elle vers l'espérance commune $m$ ? La version faible affirme la convergence en probabilité, sous la seule intégrabilité.

> [!note] Théorème (Khintchine)
> Soit $(X_n)$ i.i.d. intégrables ($X_1\in L^1$). On pose $S_n=\sum_{k=1}^nX_k$ et $m=\mathbb{E}[X_1]$. Alors
> $$\frac{S_n}{n}\xrightarrow{\mathbb{P}}m.$$

> [!info] Cas $L^2$
> Si les $X_n$ ont un moment d'ordre $2$ (ou sont deux à deux non corrélées de même loi), l'inégalité de Chebyshev suffit : $\mathbb{P}\big(\big|\frac{S_n}{n}-m\big|\ge\varepsilon\big)\le\frac{\mathrm{Var}(X_1)}{n\varepsilon^2}\to0$.

## Intuition
> [!tip] Idée
> La variance de la moyenne $\mathrm{Var}(S_n/n)$ décroît comme $1/n$, ce qui fait tendre vers $0$ la probabilité de tout écart fixé. Sans moment d'ordre $2$, on **tronque** les variables au niveau $n$ pour les rendre bornées, et l'on sépare la partie tronquée (contrôlée par $1/n$) de la partie des grandes valeurs (négligeable par intégrabilité).

## Exemples
> [!example]
> Lancer de dés répété : la fréquence empirique du résultat $6$ converge en probabilité vers $1/6$.

## Pièges
> [!warning]
> - L'hypothèse est bien $X_1\in L^1$, pas seulement « $X_1$ bornée » : l'argument de troncature est indispensable.
> - La loi faible ne dit rien sur la convergence pour un $\omega$ fixé ; c'est l'objet de la loi forte ([[loi-forte-des-grands-nombres]]).
> - La preuve $L^2$ a besoin de la non-corrélation deux à deux ; l'indépendance en est un cas particulier.

## Voir aussi
- [[convergence-en-probabilite]]
- [[inegalite-de-chebyshev]]
- [[loi-forte-des-grands-nombres]]
- [[esperance]]

## Notes du cours

- [[22-Loi-faible-des-grands-nombres|概率论 · 22-Loi-faible-des-grands-nombres]]
