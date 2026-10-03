---
title: Principe des tiroirs
created: 2026-10-03
updated: 2026-10-03
type: concept
tags: [probabilites, denombrement, cardinal]
sources: [概率论 正课手写笔记]
confidence: medium
---

# Principe des tiroirs

> [!tip] Pourquoi
> Prouver l'existence de deux objets partageant une propriété sans les exhiber, uniquement par un argument de comptage. C'est la forme la plus simple du raisonnement « trop d'objets pour le nombre de places », et le prototype du dénombrement par contradiction.

> [!note] Définition
> Si l'on place $n$ objets dans $m$ tiroirs avec $n > m$, alors au moins un tiroir contient au moins deux objets.

## Intuition
> [!tip] Idée
> Modéliser le placement par une application $f : E \to F$ où $E$ est l'ensemble des objets ($|E| = n$) et $F$ l'ensemble des tiroirs ($|F| = m$). Si $|E| > |F|$, une injection $E \to F$ est impossible : deux objets distincts ont le même tiroir, donc $f$ n'est pas injective et il existe $y \in F$, $x_1 \neq x_2$ dans $E$ avec $f(x_1) = f(x_2) = y$.

## Exemples
> [!example]
> Parmi $13$ personnes, au moins deux ont le même mois d'anniversaire ($13$ objets, $12$ tiroirs).
> Dans un ensemble de $n+1$ entiers pris dans $[\![1, n]\!]$, deux sont égaux.

## Pièges
> [!warning]
> Le résultat garantit un tiroir avec au moins deux objets, mais ne dit pas lequel.
> Il faut strictement $n > m$ ; avec $n \leq m$, un placement injectif est possible.
> L'argument repose sur la finitude : « $|E| > |F| \Rightarrow$ pas d'injection » utilise le lemme fondamental des ensembles finis.

## Voir aussi
- [[ensemble-fini-et-cardinal]]
- [[application-et-bijection]]

## Notes du cours

- [[02-Ensembles-finis-cardinal-et-comparaison|概率论 · 02-Ensembles-finis-cardinal-et-comparaison]]
