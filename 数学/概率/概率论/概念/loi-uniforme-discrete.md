---
title: Loi uniforme discrète
created: 2026-10-03
updated: 2026-10-03
type: concept
tags: [probabilites, lois-discretes, loi-uniforme]
sources: [概率论 正课手写笔记]
confidence: medium
---

# Loi uniforme discrète

> [!tip] Pourquoi
> La loi discrète la plus « symétrique » : toutes les valeurs possibles ont le même poids. C'est le modèle de l'équiprobabilité sur un ensemble fini, base de tout le dénombrement probabiliste.

> [!note] Définition
> Soit $E$ un ensemble fini non vide. Une v.a. $X$ à valeurs dans $(E, \mathcal{P}(E))$ suit la **loi uniforme** sur $E$ si
> $$\forall x \in E, \quad \mathbb{P}(X = x) = \frac{1}{|E|}.$$
> On note $X \sim \mathrm{Unif}(E)$.

## Intuition
> [!tip] Idée
> « Aucune valeur n'est privilégiée » : la masse $1$ est répartie également sur les $|E|$ valeurs. La loi ne dépend que du cardinal de $E$, pas de la nature de ses éléments.

## Exemples
> [!example]
> Si $E = [\![a, b]\!] \subset \mathbb{Z}$ avec $a < b$, alors $X \sim \mathrm{Unif}([\![a, b]\!])$ vérifie $\mathbb{P}(X = k) = \dfrac{1}{b - a + 1}$ pour tout $a \leq k \leq b$.
> Le tirage d'une carte au hasard dans un jeu de $52$ cartes, ou d'un dé équilibré, sont des lois uniformes discrètes.

## Pièges
> [!warning]
> L'uniforme n'a de sens que sur un ensemble **fini** : sur $\mathbb{N}$ ou $\mathbb{R}$ il n'existe pas de loi uniforme au sens ci-dessus.
> Uniforme en valeur ne signifie pas uniforme en une autre grandeur : une transformation $f(X)$ d'une loi uniforme n'est en général pas uniforme.

## Voir aussi
- [[probabilite-uniforme]]
- [[variable-aleatoire]]
- [[ensemble-fini-et-cardinal]]
