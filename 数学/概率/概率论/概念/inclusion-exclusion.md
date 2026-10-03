---
title: Principe d'inclusion-exclusion
created: 2026-10-03
updated: 2026-10-03
type: concept
tags: [probabilites, denombrement, evenements]
sources: [概率论 正课手写笔记]
confidence: medium
---

# Principe d'inclusion-exclusion

> [!tip] Pourquoi
> Compter une union d'ensembles qui se recouvrent (événements « au moins un »), là où le simple principe d'addition échoue faute de disjonction. Il corrige les doubles comptes en alternant additions et soustractions.

> [!note] Définition
> Soient $A_1, \dots, A_n$ des ensembles finis, non nécessairement disjoints. Alors
> $$|A_1 \cup \dots \cup A_n| = \sum_{k=1}^n (-1)^{k+1} \sum_{1 \leq r_1 < \dots < r_k \leq n} |A_{r_1} \cap \dots \cap A_{r_k}|.$$

## Intuition
> [!tip] Idée
> On commence par additionner les tailles, on retranche les intersections deux à deux (comptées deux fois), on rajoute les intersections triples (retranchées une fois de trop), et ainsi de suite : les signes alternent selon la taille de l'intersection.

## Exemples
> [!example]
> $n = 2$ : $|A \cup B| = |A| + |B| - |A \cap B|$.
> $n = 3$ : $|A \cup B \cup C| = |A| + |B| + |C| - |A \cap B| - |B \cap C| - |C \cap A| + |A \cap B \cap C|$.

## Pièges
> [!warning]
> Les signes alternent : $(-1)^{k+1}$, positif pour $k$ impair, négatif pour $k$ pair.
> On somme sur toutes les intersections de $k$ ensembles, pas seulement les consécutives.
> C'est la généralisation du cas disjoint ($|A \cup B| = |A| + |B|$ quand $A \cap B = \emptyset$).

## Voir aussi
- [[principes-de-denombrement]]
- [[coefficient-binomial]]
- [[集合的运算]]
## Notes du cours

- [[04-Coefficient-binomial-binome-et-denombrabilite|概率论 · 04-Coefficient-binomial-binome-et-denombrabilite]]
