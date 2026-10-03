---
title: Opérations ensemblistes (union, intersection, complémentaire)
created: 2026-10-03
updated: 2026-10-03
type: concept
tags: [probabilites, ensembles]
sources: [概率论 正课手写笔记]
confidence: medium
---

# Opérations ensemblistes

> [!tip] Pourquoi
> Les événements d'une expérience aléatoire sont des ensembles : « au moins un », « simultanément », « pas », se traduisent exactement par union, intersection, complémentaire. La stabilité de ces opérations (y compris pour des familles infinies) sera la base de la notion de tribu.

> [!note] Définition
> Soit $E$ un ensemble, $A, B$ des parties de $E$ :
> - $A \cup B$ : union (réunion) ;
> - $A \cap B$ : intersection ;
> - $A^c$ : complémentaire de $A$ dans $E$ ;
> - $A \setminus B$ : différence ;
> - $A \Delta B = (A \setminus B) \cup (B \setminus A)$ : différence symétrique.
> Pour une famille $(A_i)_{i \in I}$ (indexée par un ensemble d'indices $I$), on note $\bigcup_{i \in I} A_i$ et $\bigcap_{i \in I} A_i$. La famille est disjointe si $A_i \cap A_j = \emptyset$ pour tous $i \neq j$.

## Intuition
> [!tip] Idée
> Union = « ou », intersection = « et », complémentaire = « non ». Les formules de distributivité et le passage au complémentaire traduisent les règles logiques : le complémentaire échange unions et intersections (règles de De Morgan généralisées) :
> $(\bigcup_i A_i) \cap B = \bigcup_i (A_i \cap B)$ et $(\bigcap_i A_i) \cup B = \bigcap_i (A_i \cup B)$ ;
> $(\bigcup_i A_i)^c = \bigcap_i A_i^c$ et $(\bigcap_i A_i)^c = \bigcup_i A_i^c$.

## Exemples
> [!example]
> Produit cartésien : $A \times B = \{(a,b) \mid a \in A,\ b \in B\}$, ensemble des couples ordonnés ; en général $A \times B \neq B \times A$. On note $A^n$ le produit de $n$ copies de $A$.
> $\mathcal{P}(E)$ désigne l'ensemble des sous-ensembles de $E$ ; $\emptyset$ et $E$ sont les sous-ensembles triviaux de $E$.
> Fonction indicatrice de $A \subset E$ : $\mathbb{1}_A(x) = 1$ si $x \in A$, $0$ sinon.

## Pièges
> [!warning]
> $\emptyset$ est contenu dans tout ensemble ; l'appartenance ($\in$) ne se confond pas avec l'inclusion ($\subset$) : $x \in E$ mais $\{x\} \subset E$.
> $A \setminus B$ n'est pas le complémentaire de $B$ : $A \setminus B = A \cap B^c$.
> $A^c$ dépend de l'ensemble ambiant $E$.

## Voir aussi
- [[logique-des-propositions]]
- [[application-et-bijection]]
- [[集合的运算]]
- [[子集]]
## Notes du cours

- [[01-Logique-ensembles-et-applications|概率论 · 01-Logique-ensembles-et-applications]]
