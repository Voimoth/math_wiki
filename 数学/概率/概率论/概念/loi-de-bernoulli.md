---
title: Loi de Bernoulli
created: 2026-10-03
updated: 2026-10-03
type: concept
tags: [probabilites, lois-discretes, bernoulli]
sources: [概率论 正课手写笔记]
confidence: medium
---

# Loi de Bernoulli

> [!tip] Pourquoi
> Modéliser une expérience à deux issues : succès / échec, oui / non, $1$ / $0$. C'est la brique élémentaire dont la répétition engendre la loi binomiale et la loi géométrique.

> [!note] Définition
> Soit $p \in [0, 1]$. Une v.a. à valeurs dans $\{0, 1\}$ suit la **loi de Bernoulli** de paramètre $p$ si
> $$\mathbb{P}(X = 1) = p, \qquad \mathbb{P}(X = 0) = 1 - p.$$
> On note $X \sim \mathrm{Ber}(p)$.

## Intuition
> [!tip] Idée
> Une seule épreuve, deux résultats : $p$ = probabilité du succès (conventionnellement codé $1$). Toute indicatrice d'événement suit une loi de Bernoulli : $\mathbb{1}_A \sim \mathrm{Ber}(p)$ dès que $\mathbb{P}(A) = p$.

## Exemples
> [!example]
> Lancer d'une pièce (pile = succès) : loi de Bernoulli de paramètre $1/2$.
> L'indicatrice d'un événement $A$ de probabilité $p$ : $\mathbb{1}_A \sim \mathrm{Ber}(p)$.

## Pièges
> [!warning]
> Attention aux conventions : ici $\{0, 1\}$ avec $1$ = succès ; certaines sources permutent les rôles de $0$ et $1$.
> La loi de Bernoulli est un cas particulier de $\mathcal{B}(n, p)$ avec $n = 1$, mais ses notations usuelles diffèrent ($\mathrm{Ber}(p)$ vs $\mathcal{B}(1, p)$).

## Voir aussi
- [[loi-binomiale]]
- [[loi-geometrique]]
- [[variable-aleatoire]]
