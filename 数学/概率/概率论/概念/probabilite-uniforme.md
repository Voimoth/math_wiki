---
title: 均匀概率 Probabilité uniforme
created: 2026-10-03
updated: 2026-10-03
type: concept
tags: [probabilites, probabilite-uniforme, modele-discret, denombrement]
sources: [概率论 正课手写笔记]
confidence: medium
---

# Probabilité uniforme

> [!tip] Pourquoi
> Modèle le plus simple : chaque résultat élémentaire a le même poids. Ramène le calcul de probabilités à du dénombrement (compter des cas favorables et des cas possibles).

> [!note] Définition
> Soit $\Omega$ fini non vide, $\mathcal{F} = \mathcal{P}(\Omega)$. La **probabilité uniforme** est définie par $\forall\omega\in\Omega,\ p_\omega = \dfrac{1}{|\Omega|}$. Sous cette probabilité,
> $$\forall A\subseteq\Omega,\qquad \mathbb{P}(A) = \frac{|A|}{|\Omega|}.$$
>
> Cas continu : choix uniforme sur $[0,1]$, $\mathbb{P}([a,b]) = b-a$ pour $0\leq a<b\leq 1$.

## Intuition
> [!tip] Idée
> Poids identiques $\Rightarrow$ probabilité d'un événement = proportion (cardinal relatif) de cet événement. En continu, la « densité » est constante égale à $1$.

## Exemples
> [!example]
> - Dé équilibré : $\mathbb{P}(\text{pair}) = 3/6$.
> - Paradoxe des anniversaires : $\mathbb{P}(A) = 1 - \dfrac{365!}{(365-n)!\,365^n}$, et $\mathbb{P}(A) > \tfrac12$ dès $n\geq 23$.

## Pièges
> [!warning]
> - N'existe que pour un univers **fini** (ou sous forme de choix uniforme sur un intervalle de longueur finie) ; pas de probabilité uniforme sur $\mathbb{N}$.
> - En continu, $\mathbb{P}(\{x\}) = 0$ pour chaque point : un événement de probabilité nulle n'est pas impossible.

## Voir aussi
- [[espace-probabilise]]
- [[modele-discret]]
- [[mesure-de-probabilite]]
