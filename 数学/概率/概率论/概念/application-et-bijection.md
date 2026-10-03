---
title: Application, injection, surjection, bijection
created: 2026-10-03
updated: 2026-10-03
type: concept
tags: [probabilites, ensembles, applications]
sources: [概率论 正课手写笔记]
confidence: medium
---

# Application et bijection

> [!tip] Pourquoi
> Comparer deux ensembles sans les compter un par un : une bijection transporte exactement la structure et préserve le cardinal. C'est l'outil qui ramène tout dénombrement à la construction d'une bijection (« principe de bijection »), et la notion d'injection servira à définir les ensembles infinis dénombrables.

> [!note] Définition
> Une application $f : E \to F$ ($E$ ensemble de départ, $F$ ensemble d'arrivée) est :
> - injective si tout élément de $F$ est l'image d'au plus un élément de $E$ ;
> - surjective si tout élément de $F$ est l'image d'au moins un élément de $E$ ;
> - bijective si elle est à la fois injective et surjective.
> Si $f$ est bijective, elle admet une application réciproque $f^{-1} : F \to E$.
> Pour $A \subseteq E$ et $B \subseteq F$, l'image directe est $f(A)$ et l'image réciproque est $f^{-1}(B)$.

## Intuition
> [!tip] Idée
> Injectif = « deux points distincts ont des images distinctes » (aucune collision) ; surjectif = « tout élément d'arrivée est atteint » ; bijectif = correspondance parfaite un-à-un. Pour $f : E \to E$ avec $E$ fini, injectivité, surjectivité et bijectivité coïncident ; ce n'est plus vrai pour $E$ infini.

## Exemples
> [!example]
> $f : \mathbb{N} \to \mathbb{N}$, $n \mapsto n+1$ est injective mais non surjective : c'est le contre-exemple montrant que l'hypothèse « $E$ fini » est indispensable.
> $\varphi : \mathbb{N} \to \mathbb{Z}$ définie par $2k \mapsto k$ et $2k+1 \mapsto -k-1$ est une bijection, donc $\mathbb{Z}$ est dénombrable.

## Pièges
> [!warning]
> Injectif, surjectif, bijectif dépendent de l'ensemble d'arrivée choisi : $x \mapsto x^2$ de $\mathbb{R}$ dans $\mathbb{R}$ n'est pas surjective, mais de $\mathbb{R}$ dans $\mathbb{R}_+$ elle l'est.
> $f^{-1}(B)$ (image réciproque d'une partie) est défini même quand $f$ n'est pas bijective.
> L'application réciproque d'une bijection n'existe que dans ce cas.

## Voir aussi
- [[ensemble-fini-et-cardinal]]
- [[operations-ensemblistes]]

## Notes du cours

- [[01-Logique-ensembles-et-applications|概率论 · 01-Logique-ensembles-et-applications]]
- [[02-Ensembles-finis-cardinal-et-comparaison|概率论 · 02-Ensembles-finis-cardinal-et-comparaison]]
- [[05-Ensembles-denombrables-et-indenombrables|概率论 · 05-Ensembles-denombrables-et-indenombrables]]
