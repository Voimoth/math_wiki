---
title: Arrangement, permutation et combinaison
created: 2026-10-03
updated: 2026-10-03
type: concept
tags: [probabilites, denombrement, arrangements, combinaisons]
sources: [概率论 正课手写笔记]
confidence: medium
---

# Arrangement, permutation et combinaison

> [!tip] Pourquoi
> Compter les tirages : listes ordonnées sans répétition (arrangements), réordonnancements d'un ensemble (permutations), et sélections non ordonnées (combinaisons). Ce sont les briques élémentaires de tout calcul de probabilité sur un univers fini.

> [!note] Définition
> Soient $p \in \mathbb{N}^*$ et $E$ un ensemble fini de cardinal $n$. Un $p$-arrangement d'éléments de $E$ est une $p$-liste d'éléments de $E$ deux à deux distincts, et
> $$A_n^p = \mathrm{card}\left( \{(x_1, \dots, x_p) \in E^p \mid \forall i \neq j,\ x_i \neq x_j\} \right) = \begin{cases} \dfrac{n!}{(n-p)!} & \text{si } p \leq n \\ 0 & \text{si } p > n. \end{cases}$$
> Une permutation de $E$ est une bijection $E \to E$ ; il y en a $A_n^n = n!$.
> Une $p$-combinaison de $E$ est un sous-ensemble de $E$ de cardinal $p$ ; il y en a $\binom{n}{p} = \dfrac{A_n^p}{p!} = \dfrac{n!}{p!\,(n-p)!}$.

## Intuition
> [!tip] Idée
> Arrangement = ordre compte et répétition interdite ; on choisit les éléments un par un, d'où $n(n-1)\cdots(n-p+1)$. Une combinaison oublie l'ordre : chaque sous-ensemble de taille $p$ correspond à $p!$ arrangements, d'où la division par $p!$. Une permutation est un arrangement de tous les éléments.

## Exemples
> [!example]
> Nombre d'injections $E \to F$ avec $|E| = p$, $|F| = n$ : $A_n^p$ (à chaque $p$-arrangement de $F$ correspond une unique injection via une bijection $[\![1,p]\!] \to E$).
> $A_n^1 = n$, $A_n^n = n!$, et $|\{$permutations de $E\}| = n!$.
> $|\mathcal{P}(E)| = 2^n = \sum_{p=0}^n \binom{n}{p}$.

## Pièges
> [!warning]
> Arrangement (ordre) contre combinaison (pas d'ordre) : multiplier par $p!$ fait passer d'une combinaison aux arrangements correspondants.
> $A_n^p = 0$ dès que $p > n$, et $\binom{n}{p} = 0$ de même.
> Convention $0! = 1$, nécessaire à la cohérence des formules.

## Voir aussi
- [[coefficient-binomial]]
- [[principes-de-denombrement]]
- [[application-et-bijection]]
- [[二项式系数]]
## Notes du cours

- [[03-Denombrement-arrangements-et-combinaisons|概率论 · 03-Denombrement-arrangements-et-combinaisons]]
- [[04-Coefficient-binomial-binome-et-denombrabilite|概率论 · 04-Coefficient-binomial-binome-et-denombrabilite]]
