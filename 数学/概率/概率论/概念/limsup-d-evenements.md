---
title: Limite supérieure et inférieure d'événements
created: 2026-10-03
updated: 2026-10-03
type: concept
tags: [probabilites, limsup, liminf, evenements]
sources: [概率论 正课手写笔记]
confidence: medium
---

# Limite supérieure et inférieure d'événements

> [!tip] Pourquoi
> «Une infinité de $A_n$ se réalisent» n'est pas un événement de la forme «tel $A_n$ se réalise» ; il faut l'écrire comme une limite d'ensembles. Ce langage est précisément celui des lemmes de Borel–Cantelli.

> [!note] Définition
> Soit $(A_n)_{n\in\mathbb{N}}$ une suite d'événements de $(\Omega,\mathcal{F})$. On pose
> $$\limsup_{n\to\infty} A_n = \bigcap_{k\ge1}\left(\bigcup_{n\ge k} A_n\right),\qquad \liminf_{n\to\infty} A_n = \bigcup_{k\ge1}\left(\bigcap_{n\ge k} A_n\right).$$

## Intuition
> [!tip] Idée
> $\omega\in\limsup_n A_n$ signifie : pour tout $k$, il existe $n\ge k$ avec $\omega\in A_n$, c'est-à-dire que $\omega$ appartient à une infinité des $A_n$. De même, $\omega\in\liminf_n A_n$ signifie que, à partir d'un certain rang, $\omega\in A_n$ : tous les $A_n$ sauf un nombre fini. On compare avec les suites réelles, où $\limsup a_n=\inf_k\sup_{n\ge k}a_n$ et $\liminf a_n=\sup_k\inf_{n\ge k}a_n$.

## Exemples
> [!example]
> Dans le modèle du pile ou face infini, $C_n=\{\omega \mid \omega_n=0\}$ («le $n$-ième lancer tombe sur pile»). Alors
> $$\limsup_{n\to\infty} C_n = \{\text{la pièce tombe sur pile une infinité de fois}\}.$$

## Pièges
> [!warning]
> On a toujours $\liminf_n A_n\subset\limsup_n A_n$, mais l'inclusion peut être stricte : «une infinité de fois» n'est pas «toutes sauf un nombre fini». D'autre part cette notion est purement ensembliste : elle ne porte à elle seule aucune information de probabilité.

## Voir aussi
- [[borel-cantelli]]
- [[continuite-de-la-probabilite]]
- [[上极限与下极限]]
- [[集合的运算]]
## Notes du cours

- [[08-Continuite-et-premier-lemme-de-Borel-Cantelli|概率论 · 08-Continuite-et-premier-lemme-de-Borel-Cantelli]]
- [[10-Independance-et-second-lemme-de-Borel-Cantelli|概率论 · 10-Independance-et-second-lemme-de-Borel-Cantelli]]
- [[23-Loi-forte-des-grands-nombres|概率论 · 23-Loi-forte-des-grands-nombres]]
