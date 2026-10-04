---
title: 概率空间 Espace probabilisé
created: 2026-10-03
updated: 2026-10-03
type: concept
tags: [probabilites, espace-probabilise, tribu, mesure-de-probabilite]
sources: [概率论 正课手写笔记]
confidence: medium
---

# Espace probabilisé (Ω, F, P)

> [!tip] Pourquoi
> C'est l'objet final qui modélise une expérience aléatoire : il regroupe l'univers, les événements observables et leurs probabilités. Modéliser une expérience aléatoire = définir son espace probabilisé.

> [!note] Définition
> Un **espace probabilisé** est un triplet $(\Omega,\mathcal{F},\mathbb{P})$ tel que :
> - $\Omega$ est un ensemble non vide ;
> - $\mathcal{F}$ est une tribu sur $\Omega$ ;
> - $\mathbb{P}$ est une mesure de probabilité sur $\mathcal{F}$.

## Intuition
> [!tip] Idée
> Trois ingrédients : *où* (résultats), *quoi* (événements), *combien* (probabilités). L'espace probabilisable $(\Omega,\mathcal{F})$ ne porte que les deux premiers ; l'espace probabilisé y ajoute la mesure.

## Exemples
> [!example]
> Lancer de dé équilibré : $\Omega = \{1,\dots,6\}$, $\mathcal{F} = \mathcal{P}(\Omega)$, $\mathbb{P}(\{\omega\}) = \tfrac16$.
> Choix uniforme sur $[0,1]$ : $\Omega = [0,1]$, $\mathcal{F} = \mathcal{B}([0,1])$, $\mathbb{P}([a,b]) = b-a$.

## Pièges
> [!warning]
>
> - Sur un même $(\Omega,\mathcal{F})$, plusieurs mesures de probabilité sont possibles (dé équilibré vs pipé).
> - Le vocabulaire « probabilité » désigne parfois le triplet entier : lire le contexte.

## Voir aussi
- [[espace-probabilisable]]
- [[mesure-de-probabilite]]
- [[tribu]]
- [[probabilite-uniforme]]

## Notes du cours

- [[06-Espace-probabilisable-et-tribus|概率论 · 06-Espace-probabilisable-et-tribus]]
- [[09-Probabilite-conditionnelle-et-formules|概率论 · 09-Probabilite-conditionnelle-et-formules]]
- [[10-Independance-et-second-lemme-de-Borel-Cantelli|概率论 · 10-Independance-et-second-lemme-de-Borel-Cantelli]]
- [[11-Variables-aleatoires-et-mesurabilite|概率论 · 11-Variables-aleatoires-et-mesurabilite]]
- [[12-Loi-d-une-variable-aleatoire|概率论 · 12-Loi-d-une-variable-aleatoire]]
- [[15-Vecteurs-aleatoires-et-tribu-borelienne|概率论 · 15-Vecteurs-aleatoires-et-tribu-borelienne]]
