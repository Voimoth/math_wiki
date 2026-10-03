---
title: Convergence en loi
created: 2026-10-03
updated: 2026-10-03
type: concept
tags: [probabilites, convergence, fonction-caracteristique]
sources: [概率论 正课手写笔记]
confidence: medium
---

# Convergence en loi

> [!tip] Pourquoi
> Comparer les **lois** d'une suite de variables aléatoires, sans exiger qu'elles soient définies sur le même espace ni qu'elles convergent pointe par pointe. C'est la convergence du théorème central limite.

> [!note] Définition
> Soient $X_n,X$ des variables aléatoires réelles (éventuellement sur des espaces probabilisés différents). On dit que $X_n$ converge en loi vers $X$, et on note $X_n\xrightarrow{\mathcal{L}}X$, si pour toute fonction continue bornée $f:\mathbb{R}\to\mathbb{R}$,
> $$\mathbb{E}[f(X_n)]\to\mathbb{E}[f(X)].$$

## Intuition
> [!tip] Idée
> En notant $\mu_n=\mathrm{loi}(X_n)$, la condition s'écrit $\langle\mu_n,f\rangle\to\langle\mu,f\rangle$ pour toute $f$ continue bornée : c'est la convergence faible des mesures. En pratique on l'établit via les fonctions caractéristiques (théorème de Lévy, [[theoreme-de-continuite-de-levy]]).

## Exemples
> [!example]
> Théorème central limite : la loi de $\frac{S_n-nm}{\sqrt n\,\sigma}$ converge vers $\mathcal{N}(0,1)$ ([[theoreme-central-limite]]).

## Pièges
> [!warning]
> - Convergence en loi $\neq$ convergence en probabilité : elle n'entraîne pas la convergence jointe avec une autre variable.
> - Une convergence en loi vers une constante implique la convergence en probabilité, mais l'inverse est faux en général.
> - Les lois limites peuvent être continues alors que toutes les $X_n$ sont discrètes (c'est le cas du TCL).

## Voir aussi
- [[fonction-caracteristique]]
- [[theoreme-de-continuite-de-levy]]
- [[theoreme-central-limite]]
- [[convergence-en-probabilite]]
- [[傅里叶变换]]
## Notes du cours

- [[24-Theoreme-central-limite|概率论 · 24-Theoreme-central-limite]]
