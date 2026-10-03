---
title: 零事件与几乎必然 Événement négligeable et presque sûr
created: 2026-10-03
updated: 2026-10-03
type: concept
tags: [probabilites, presque-sur, negligeable, p.s]
sources: [概率论 正课手写笔记]
confidence: medium
---

# Événement négligeable et propriété presque sûre

> [!tip] Pourquoi
> En probabilité continue, des événements de probabilité $0$ ou $1$ sont omniprésents (ex. $\mathbb{P}(\{x\})=0$ pour $x\in[0,1]$). Il faut un vocabulaire pour distinguer « de probabilité nulle » de « impossible », et « de probabilité $1$ » de « certain ».

> [!note] Définition
> Soit $A$ un événement.
> - $A$ est **négligeable** si $\mathbb{P}(A) = 0$.
> - $A$ est **presque sûr** si $\mathbb{P}(A) = 1$.
> - une propriété (dépendant de $\omega$) est vraie **presque sûrement** s'il existe $A\in\mathcal{F}$ tel que $\mathbb{P}(A) = 1$ et la propriété est vraie pour tout $\omega\in A$.
>
> Notation : $p.s.$ (presque sûr) ; $P\text{-}p.s.$ (presque sûr sous la probabilité $P$).

## Intuition
> [!tip] Idée
> « Presque sûr » = vrai sauf sur un ensemble négligeable. La propriété peut échouer, mais seulement sur un ensemble de probabilité nulle.

## Exemples
> [!example]
> Choix uniforme de $x\in[0,1]$ : « $x\neq 1/2$ » est vraie presque sûrement, car $\mathbb{P}(\{1/2\}) = 0$. Mais « $x = 1/2$ » n'est pas impossible.

## Pièges
> [!warning]
> - Événement de probabilité $0$ $\neq$ événement impossible ; événement de probabilité $1$ $\neq$ événement certain.
> - Une famille **au plus dénombrable** d'événements négligeables a une réunion négligeable, et une famille au plus dénombrable de $p.s.$ a une intersection $p.s.$ (conséquence de la σ-additivité) ; cela échoue pour une famille non dénombrable.

## Voir aussi
- [[espace-probabilise]]
- [[mesure-de-probabilite]]
- [[continuite-de-la-probabilite]]
