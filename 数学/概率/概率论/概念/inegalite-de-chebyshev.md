---
title: Inégalité de Chebyshev
created: 2026-10-03
updated: 2026-10-03
type: concept
tags: [probabilites, chebyshev, variance, inegalites, concentration]
sources: [概率论 正课手写笔记]
confidence: medium
---

# Inégalité de Chebyshev

> [!tip] Pourquoi
> Contrôler la probabilité qu'une variable aléatoire s'écarte de sa moyenne à partir de sa seule variance. C'est le prototype des inégalités de concentration et l'outil de la loi faible des grands nombres.

> [!note] Théorème (Inégalité de Chebyshev)
> Soit $X\in L^2(\Omega)$. Pour tout $\lambda>0$,
> $$\mathbb{P}(|X-\mathbb{E}[X]|\ge\lambda)\le\frac{\mathrm{Var}(X)}{\lambda^2}.$$

## Intuition
> [!tip] Idée
> On applique l'inégalité de Markov ([[inegalite-de-markov]]) à $Y=(X-\mathbb{E}[X])^2$ au niveau $\lambda^2$. L'écart est mesuré en unités d'écart-type : $\lambda=k\sigma$ donne une borne $1/k^2$. L'écart typique est de l'ordre de $\sigma$ ; dépasser $k$ écarts-types est rare.

## Exemples
> [!example]
> Si $\lambda=k\,\sigma$ avec $\sigma=\sqrt{\mathrm{Var}(X)}$, alors $\mathbb{P}(|X-m|\ge k\sigma)\le1/k^2$. Pour $k=3$, la probabilité d'être à plus de $3$ écarts-types est $\le 1/9$.

## Pièges
> [!warning]
> - Borne grossière et valable pour toute loi : pour une loi gaussienne la vraie probabilité à $3\sigma$ est $\approx0{,}003$, très loin de $1/9$.
> - Exige un moment d'ordre $2$ (contrairement à Markov, où $L^1$ suffit).
> - Elle porte sur l'écart à l'espérance $|X-\mathbb{E}[X]|$ ; pour la variante unilatérale, utiliser l'inégalité de Cantelli–Bienaymé.

## Voir aussi
- [[inegalite-de-markov]]
- [[variance]]
- [[loi-faible-des-grands-nombres]]

## Notes du cours

- [[22-Loi-faible-des-grands-nombres|概率论 · 22-Loi-faible-des-grands-nombres]]
- [[23-Loi-forte-des-grands-nombres|概率论 · 23-Loi-forte-des-grands-nombres]]
