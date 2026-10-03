---
title: Lemmes de Borel–Cantelli
created: 2026-10-03
updated: 2026-10-03
type: concept
tags: [probabilites, borel-cantelli, limsup, independance]
sources: [概率论 正课手写笔记]
confidence: medium
---

# Lemmes de Borel–Cantelli

> [!tip] Pourquoi
> Ces deux lemmes relient la convergence de la série des probabilités d'une suite d'événements au fait qu'une infinité d'entre eux se réalisent presque sûrement. C'est l'outil de base pour montrer qu'un événement est de probabilité $0$ ou $1$.

> [!note] Thm. (premier lemme de Borel–Cantelli)
> Soit $(A_n)_{n\in\mathbb{N}}$ une suite d'événements telle que $\sum_{n}\mathbb{P}(A_n)<+\infty$. Alors
> $$\mathbb{P}\left(\limsup_{n\to\infty} A_n\right) = 0.$$

> [!note] Thm. (deuxième lemme de Borel–Cantelli)
> Soit $(A_n)_{n\in\mathbb{N}}$ une suite d'événements indépendants telle que $\sum_{n}\mathbb{P}(A_n)=+\infty$. Alors
> $$\mathbb{P}\left(\limsup_{n\to\infty} A_n\right) = 1.$$

## Intuition
> [!tip] Idée
> Si les probabilités décroissent assez vite (série convergente), seul un nombre fini d'événements se réalisent p.s. Si au contraire la série diverge et que les événements sont indépendants, alors p.s. une infinité d'entre eux se réalisent. L'indépendance empêche les événements de se répéter identiquement et de se «compenser».

## Exemples
> [!example]
> Un joueur gagne au $n$-ième jeu avec probabilité $2^{-n}$ : la série $\sum 2^{-n}$ converge, donc p.s. il ne gagne qu'un nombre fini de fois (premier lemme). Dans le modèle du pile ou face infini, les $C_n$ sont indépendants et $\sum\mathbb{P}(C_n)=+\infty$ : p.s. la pièce tombe sur pile une infinité de fois (deuxième lemme).

## Pièges
> [!warning]
> Le premier lemme ne requiert aucune hypothèse d'indépendance. Le deuxième, en revanche, est faux sans elle : prendre $A_n=A$ avec $0<\mathbb{P}(A)<1$ donne $\sum\mathbb{P}(A_n)=+\infty$ mais $\mathbb{P}(\limsup A_n)=\mathbb{P}(A)\neq1$.

## Voir aussi
- [[limsup-d-evenements]]
- [[independance]]
- [[continuite-de-la-probabilite]]

## Notes du cours

- [[08-Continuite-et-premier-lemme-de-Borel-Cantelli|概率论 · 08-Continuite-et-premier-lemme-de-Borel-Cantelli]]
- [[10-Independance-et-second-lemme-de-Borel-Cantelli|概率论 · 10-Independance-et-second-lemme-de-Borel-Cantelli]]
- [[23-Loi-forte-des-grands-nombres|概率论 · 23-Loi-forte-des-grands-nombres]]
