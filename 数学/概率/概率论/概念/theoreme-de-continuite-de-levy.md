---
title: Théorème de continuité de Lévy
created: 2026-10-03
updated: 2026-10-03
type: concept
tags: [probabilites, convergence-en-loi, fonction-caracteristique]
sources: [概率论 正课手写笔记]
confidence: medium
---

# Théorème de continuité de Lévy

> [!tip] Pourquoi
> Pont entre l'analyse (convergence simple des fonctions caractéristiques) et la probabilité (convergence en loi). C'est l'outil qui rend le théorème central limite effectivement calculable.

> [!note] Théorème
> Soit $(X_n)$ une suite de variables aléatoires réelles, de fonctions caractéristiques $\varphi_{X_n}$. Si $\varphi_{X_n}(z)\to\varphi(z)$ pour tout $z\in\mathbb{R}$, alors les assertions suivantes sont équivalentes :
> 1) $X_n\xrightarrow{\mathcal{L}}X$ ;
> 2) $\varphi$ est continue ;
> 3) $\varphi$ est la fonction caractéristique d'une variable aléatoire $X$.
>
> En particulier, si $\varphi_{X_n}\to\varphi_X$ simplement, alors $X_n\xrightarrow{\mathcal{L}}X$.

## Intuition
> [!tip] Idée
> La convergence en loi équivaut à la convergence des transformées de Fourier (« convergence faible » vue via le dual). La continuité de la limite est la clé : sans elle, la masse pourrait « s'échapper à l'infini » et la limite ne serait plus une fonction caractéristique.

## Exemples
> [!example]
> Preuve du TCL : on montre $\varphi_{Y_n}(t)\to e^{-t^2/2}$, continue et égale à la fonction caractéristique de $\mathcal{N}(0,1)$ ; le théorème donne $Y_n\xrightarrow{\mathcal{L}}\mathcal{N}(0,1)$ ([[theoreme-central-limite]]).

## Pièges
> [!warning]
>
> - La convergence simple des $\varphi_{X_n}$ ne suffit pas si la limite n'est pas continue en $0$ (masse fuyante) : c'est tout l'intérêt de l'équivalence avec 2).
> - Les fonctions caractéristiques sont continues partout ; c'est la continuité de la **limite** qu'il faut vérifier.
> - Lévy contrôle la convergence en loi, pas la convergence en probabilité.

## Voir aussi
- [[fonction-caracteristique]]
- [[convergence-en-loi]]
- [[theoreme-central-limite]]
- [[傅里叶变换]]
## Notes du cours

- [[24-Theoreme-central-limite|概率论 · 24-Theoreme-central-limite]]
