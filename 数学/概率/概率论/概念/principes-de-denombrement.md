---
title: Principes de dénombrement (bijection, addition, multiplication, quotient)
created: 2026-10-03
updated: 2026-10-03
type: concept
tags: [probabilites, denombrement]
sources: [概率论 正课手写笔记]
confidence: medium
---

# Principes de dénombrement

> [!tip] Pourquoi
> Compter un ensemble compliqué en le ramenant à des ensembles connus. Quatre principes suffisent à traiter la plupart des dénombrements : bijection (transporter le cardinal), addition (découper en morceaux disjoints), multiplication (compter les choix successifs indépendants), quotient (passer du comptage avec répétitions au comptage sans).

> [!note] Définition
> - Principe de bijection : pour $E, F$ finis, s'il existe une bijection $E \to F$, alors $|E| = |F|$.
> - Principe d'addition : si $A, B$ finis sont disjoints, $|A \cup B| = |A| + |B|$.
> - Principe de multiplication : pour $A, B$ finis, $|A \times B| = |A| \cdot |B|$ ; plus généralement $|E_1 \times \dots \times E_k| = \prod_i |E_i|$.
> - Principe de quotient : si $f : E \to F$ est une surjection entre ensembles finis et qu'il existe $r$ tel que $|f^{-1}(\{y\})| = r$ pour tout $y \in F$, alors $|F| = |E| / r$.

## Intuition
> [!tip] Idée
> Addition = « ou bien … ou bien » sur des cas qui ne se recouvrent pas ; multiplication = « d'abord … puis … » avec des choix successifs ; quotient = « chaque fibre a la même taille, donc on divise ». Le principe de bijection est l'outil méta : tout le reste se prouve en construisant la bijection adéquate.

## Exemples
> [!example]
> $|\{f : E \to F\}| = |F|^{|E|}$ (choisir une image dans $F$ pour chacun des $|E|$ éléments).
> $|\mathcal{P}(E)| = 2^{|E|}$, via la bijection $A \mapsto \mathbb{1}_A$ de $\mathcal{P}(E)$ sur $\{f : E \to \{0,1\}\}$.
> $|\{0,1\}^n| = 2^n$ et, pour $E$ fini, $|E^n| = |E|^n$.

## Pièges
> [!warning]
> Le principe d'addition exige des ensembles disjoints ; sinon il faut le principe d'inclusion-exclusion.
> Le principe de multiplication suppose des choix dont le nombre ne dépend pas des étapes précédentes.
> Au principe de quotient, il faut que toutes les fibres aient la même taille $r$ ; c'est l'hypothèse qui fait marcher $|F| = |E|/r$.

## Voir aussi
- [[ensemble-fini-et-cardinal]]
- [[arrangement-et-combinaison]]
- [[inclusion-exclusion]]
- [[笛卡尔积]]
## Notes du cours

- [[03-Denombrement-arrangements-et-combinaisons|概率论 · 03-Denombrement-arrangements-et-combinaisons]]
