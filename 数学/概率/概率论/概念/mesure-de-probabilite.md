---
title: 概率测度 Mesure de probabilité
created: 2026-10-03
updated: 2026-10-03
type: concept
tags: [probabilites, mesure-de-probabilite, sigma-additivite, mesure]
sources: [概率论 正课手写笔记]
confidence: medium
---

# Mesure de probabilité

> [!tip] Pourquoi
> Une fois fixés $\Omega$ et la tribu $\mathcal{F}$, il faut attribuer à chaque événement un « poids » cohérent. Les deux axiomes (σ-additivité et masse totale $1$) codent exactement la compatibilité attendue d'une fréquence.

> [!note] Définition
> Soit $\Omega$ non vide muni d'une tribu $\mathcal{F}$. Une application $\mathbb{P} : \mathcal{F}\to[0,1]$ est une **mesure de probabilité** si :
> - **A1** (σ-additivité) : pour toute suite dénombrable $(A_n)_{n\in\mathbb{N}}$ d'événements deux-à-deux disjoints, $\mathbb{P}\!\left(\bigcup_{n\in\mathbb{N}} A_n\right) = \sum_{n\in\mathbb{N}}\mathbb{P}(A_n)$ ;
> - **A2** : $\mathbb{P}(\Omega) = 1$.

## Intuition
> [!tip] Idée
> « σ » signifie « dénombrable ». A1 dit que la mesure d'une réunion d'événements incompatibles deux-à-deux est la somme des mesures ; A2 normalise la masse totale à $1$.

## Exemples
> [!example]
>
> - Mesure de comptage sur $\mathbb{N}$ : $\mu(A) = \mathrm{card}(A)$ si $A$ fini, $+\infty$ sinon. C'est une mesure **positive** ($\mu(\emptyset)=0$, σ-additive) mais **pas** une probabilité ($\mu(\Omega) = +\infty \neq 1$).
> - Modèle discret : $\mathbb{P}(A) = \sum_{\omega\in A} p_\omega$ avec $p_\omega\geq 0$ et $\sum_\omega p_\omega = 1$.

## Pièges
> [!warning]
>
> - Ne pas confondre **mesure positive** ($\mu : \mathcal{F}\to\mathbb{R}_+\cup\{+\infty\}$, $\mu(\emptyset)=0$, σ-additive) et **mesure de probabilité** (à valeurs dans $[0,1]$, $\mu(\Omega)=1$).
> - La σ-additivité exige des événements deux-à-deux disjoints pour l'égalité ; sans disjonction on n'a qu'une inégalité (sous-additivité).

## Voir aussi
- [[tribu]]
- [[espace-probabilise]]
- [[espace-probabilisable]]
- [[probabilite-uniforme]]

## Notes du cours

- [[06-Espace-probabilisable-et-tribus|概率论 · 06-Espace-probabilisable-et-tribus]]
- [[07-Modeles-discret-et-continu-p-s|概率论 · 07-Modeles-discret-et-continu-p-s]]
- [[08-Continuite-et-premier-lemme-de-Borel-Cantelli|概率论 · 08-Continuite-et-premier-lemme-de-Borel-Cantelli]]
- [[09-Probabilite-conditionnelle-et-formules|概率论 · 09-Probabilite-conditionnelle-et-formules]]
- [[12-Loi-d-une-variable-aleatoire|概率论 · 12-Loi-d-une-variable-aleatoire]]
- [[18-Esperance-d-une-variable-aleatoire|概率论 · 18-Esperance-d-une-variable-aleatoire]]
