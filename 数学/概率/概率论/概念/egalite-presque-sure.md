---
title: Égalité presque sûre
created: 2026-10-03
updated: 2026-10-03
type: concept
tags: [probabilites, egalite-presque-sure, loi]
sources: [概率论 正课手写笔记]
confidence: medium
---

# Égalité presque sûre

> [!tip] Pourquoi
> En probabilité, deux variables peuvent différer sur un ensemble d'issues de probabilité nulle sans que cela change quoi que ce soit aux calculs. L'égalité presque sûre est la bonne notion d'« égalité » dans cet univers : elle est plus faible que l'égalité point par point, mais elle suffit pour identifier les lois.

> [!note] Définition
> Deux variables aléatoires $X, Y$ définies sur le même espace de probabilité sont **égales presque sûrement** si
> $$\mathbb{P}(X = Y) = 1,$$
> ce qui équivaut à dire que $\{X \neq Y\}$ est un ensemble négligeable.

## Intuition
> [!tip] Idée
> « Presque sûrement » = « sauf sur un ensemble de probabilité nulle ». On peut modifier une variable sur un négligeable sans changer ni sa loi, ni sa moyenne, ni ses probabilités. L'égalité p.s. est donc l'égalité « aux yeux de la probabilité ».

## Exemples
> [!example]
> Si $X = Y$ presque sûrement, alors $X \stackrel{\mathcal{L}}{=} Y$ (mêmes lois).
> La réciproque est fausse : deux variables peuvent avoir même loi sans être égales p.s. (par exemple deux lancers indépendants d'un dé équilibré sont de même loi mais ne coïncident pas).
> Pour $X, Y$ à valeurs dans $(\mathbb{R}^n, \mathcal{B}(\mathbb{R}^n))$, $\{X = Y\} = \{X - Y = 0_{\mathbb{R}^n}\}$ est mesurable : dans ce cas $\mathbb{P}(X = Y) = 1$ est une définition parfaitement légitime.

## Pièges
> [!warning]
> $\{X = Y\}$ n'est pas toujours mesurable en général ; on définit alors $X = Y$ p.s. par : $\exists A \in \mathcal{A}$ avec $A \subset \{X = Y\}$ et $\mathbb{P}(A) = 1$.
> Égalité p.s. $\neq$ égalité point par point : $X = Y$ p.s. n'entraîne pas $X(\omega) = Y(\omega)$ pour tout $\omega$.
> Égalité en loi $\neq$ égalité p.s. : c'est l'implication « p.s. $\Rightarrow$ en loi » qui est vraie, pas l'autre.

## Voir aussi
- [[vecteur-aleatoire]]
- [[tribu-borelienne]]
