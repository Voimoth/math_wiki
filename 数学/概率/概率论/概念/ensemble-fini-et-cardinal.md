---
title: Ensemble fini et cardinal
created: 2026-10-03
updated: 2026-10-03
type: concept
tags: [probabilites, ensembles, cardinal]
sources: [概率论 正课手写笔记]
confidence: medium
---

# Ensemble fini et cardinal

> [!tip] Pourquoi
> Donner un sens rigoureux à « le nombre d'éléments de $E$ ». On définit le fini par l'existence d'une bijection avec $[\![1, n]\!]$, puis on démontre que l'entier $n$ est bien unique, ce qui rend la définition du cardinal légitime.

> [!note] Définition
> Pour $n \in \mathbb{N}$, on note $[\![1, n]\!] = \{1, 2, \dots, n\}$, avec la convention $[\![1, 0]\!] = \emptyset$.
> Un ensemble $E$ est fini s'il existe $n \in \mathbb{N}$ et une bijection $f : [\![1, n]\!] \to E$.
> Si une telle bijection existe pour l'entier $n$, alors $n$ est appelé cardinal de $E$ : $\mathrm{Card}(E) = |E| = \#E = n$.
> Un ensemble est infini s'il n'est pas fini.

## Intuition
> [!tip] Idée
> Compter, c'est étiqueter les éléments par $1, 2, \dots, n$ sans répétition ni oubli. Le lemme fondamental (« injection $[\![1,n]\!] \to [\![1,m]\!] \Rightarrow n \leq m$ ») garantit qu'un tel $n$ est unique, et contrôle toutes les comparaisons de cardinaux.

## Exemples
> [!example]
> $\mathbb{N}, \mathbb{Z}, \mathbb{Q}, \mathbb{R}, \mathbb{C}$ sont infinis.
> Si $|E| = n$, on peut écrire $E = \{a_1, \dots, a_n\}$ avec $a_i \neq a_j$ pour $i \neq j$. L'ensemble vide est le seul ensemble de cardinal nul.
> Théorème de comparaison (ensembles finis $E, F$) : $|E| \leq |F| \iff$ il existe une injection $E \to F$ ; $|E| = |F| \iff$ il existe une bijection $E \to F$ ; si $E \neq \emptyset$, $|E| \leq |F| \iff$ il existe une surjection $F \to E$.

## Pièges
> [!warning]
> Un ensemble fini au sens de cette définition n'est pas « borné d'éléments » de façon vague : c'est l'existence de la bijection qui compte.
> Si $E$ est fini et $A \subseteq E$, alors $A$ est fini et $|A| \leq |E|$ — c'est faux sans l'hypothèse de finitude de $E$.
> Pour $f : E \to E$ avec $E$ fini : injective $\iff$ surjective $\iff$ bijective ; en dimension infinie ces trois propriétés se séparent.

## Voir aussi
- [[application-et-bijection]]
- [[principes-de-denombrement]]
- [[principe-des-tiroirs]]
- [[denombrabilite]]

## Notes du cours

- [[02-Ensembles-finis-cardinal-et-comparaison|概率论 · 02-Ensembles-finis-cardinal-et-comparaison]]
- [[03-Denombrement-arrangements-et-combinaisons|概率论 · 03-Denombrement-arrangements-et-combinaisons]]
- [[05-Ensembles-denombrables-et-indenombrables|概率论 · 05-Ensembles-denombrables-et-indenombrables]]
