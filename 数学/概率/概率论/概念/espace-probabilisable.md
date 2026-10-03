---
title: 可概率化空间 Espace probabilisable
created: 2026-10-03
updated: 2026-10-03
type: concept
tags: [probabilites, espace-probabilisable, tribu, evenement]
sources: [概率论 正课手写笔记]
confidence: medium
---

# Espace probabilisable (Ω, F)

> [!tip] Pourquoi
> Modéliser une expérience aléatoire demande d'abord de fixer l'univers $\Omega$ des résultats et les événements que l'on sait observer. L'espace probabilisable est ce couple $(\Omega,\mathcal{F})$, avant même de parler de probabilité.

> [!note] Définition
> Pour un ensemble $\Omega\neq\emptyset$ et une tribu $\mathcal{F}$ sur $\Omega$, on appelle le couple $(\Omega,\mathcal{F})$ un **espace probabilisable**. Les éléments de $\mathcal{F}$ sont appelés événements.

## Intuition
> [!tip] Idée
> $\Omega$ = « tout ce qui peut arriver » ; $\mathcal{F}$ = « toutes les questions oui/non qu'on peut se poser ». On n'attribue des probabilités qu'aux éléments de $\mathcal{F}$.

## Exemples
> [!example]
> - Dé à 6 faces : $\Omega = \{1,\dots,6\}$, $\mathcal{F} = \mathcal{P}(\Omega)$.
> - Dé en observant la parité : même $\Omega$, $\mathcal{F} = \{\emptyset, \{2,4,6\}, \{1,3,5\}, \Omega\}$.

## Pièges
> [!warning]
> - $\Omega$ doit être non vide.
> - Deux expériences sur le même $\Omega$ peuvent avoir des tribus différentes (selon ce qu'on observe).

## Voir aussi
- [[tribu]]
- [[espace-probabilise]]
- [[mesure-de-probabilite]]
