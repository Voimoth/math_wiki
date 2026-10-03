---
title: Théorème central limite
created: 2026-10-03
updated: 2026-10-03
type: concept
tags: [probabilites, tcl, loi-gaussienne, convergence-en-loi]
sources: [概率论 正课手写笔记]
confidence: medium
---

# Théorème central limite

> [!tip] Pourquoi
> Décrire les **fluctuations** de $\frac{S_n}{n}$ autour de sa limite $m$ : après recentrage et normalisation par $\sqrt n$, la loi tend universellement vers la loi normale centrée réduite, indépendamment de la loi des $X_k$.

> [!note] Théorème
> Soit $(X_n)$ i.i.d. avec $X_1\in L^2$. On pose $m=\mathbb{E}[X_1]$, $\sigma^2=\mathrm{Var}(X_1)$ et $S_n=\sum_{j=1}^nX_j$. Alors
> $$\frac{S_n-nm}{\sqrt n\,\sigma}\xrightarrow{\mathcal{L}}\mathcal{N}(0,1).$$

## Intuition
> [!tip] Idée
> La variable normalisée $Y_n$ est centrée et de variance $1$. Sa fonction caractéristique s'écrit $\varphi_1\big(\frac{t}{\sqrt n\,\sigma}\big)^n$ ; un développement limité en $0$ donne $\varphi_1\big(\frac{t}{\sqrt n\,\sigma}\big)=1-\frac{t^2}{2n}+o\big(\frac1n\big)$, et la puissance $n$-ième tend vers $e^{-t^2/2}$, fonction caractéristique de $\mathcal{N}(0,1)$. Le théorème de Lévy conclut.

## Exemples
> [!example]
> Approximation de la loi binomiale par la loi normale (théorème de Moivre–Laplace) ; somme de gaussiennes : $S_n\sim\mathcal{N}(0,\sqrt n)$.

## Pièges
> [!warning]
> - Le facteur de normalisation est $\sqrt n\,\sigma$ (et non $n$) : sans lui la loi limite serait dégénérée.
> - L'indépendance et l'identité de loi sont essentielles ; il faut au moins $L^2$.
> - La convergence est en loi, pas en probabilité ni presque sûre : il n'y a pas de convergence de $Y_n$ le long de chaque $\omega$.
> - La vitesse de convergence dépend de la loi (théorème de Berry–Esseen).

## Voir aussi
- [[convergence-en-loi]]
- [[theoreme-de-continuite-de-levy]]
- [[fonction-caracteristique]]
- [[loi-forte-des-grands-nombres]]
- [[傅里叶变换]]
## Notes du cours

- [[24-Theoreme-central-limite|概率论 · 24-Theoreme-central-limite]]
