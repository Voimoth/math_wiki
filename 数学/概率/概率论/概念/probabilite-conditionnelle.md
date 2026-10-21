---
title: Probabilité conditionnelle
created: 2026-10-03
updated: 2026-10-03
type: concept
tags: [probabilites, probabilite-conditionnelle, conditionnement]
sources: [概率论 正课手写笔记]
confidence: medium
---

# Probabilité conditionnelle

> [!tip] Pourquoi
> Le modèle $(\Omega,\mathcal{F},\mathbb{P})$ décrit l'expérience avant toute observation. Si l'on apprend qu'un événement $A$ s'est réalisé, la probabilité d'un événement $B$ doit être réévaluée dans ce nouveau contexte : c'est la probabilité conditionnelle.

> [!note] Définition
> Soit $A\in\mathcal{F}$ tel que $\mathbb{P}(A)>0$. Pour tout $B\in\mathcal{F}$, on pose
> $$\mathbb{P}(B\mid A) = \frac{\mathbb{P}(B\cap A)}{\mathbb{P}(A)}.$$
> Le nombre $\mathbb{P}(B\mid A)$ est la probabilité conditionnelle de $B$ sachant $A$.

> [!note] Théorème
> Pour $A\in\mathcal{F}$ avec $\mathbb{P}(A)>0$, l'application $\mathbb{P}_A : \mathcal{F}\to[0,1]$, $B\mapsto\mathbb{P}(B\mid A)$, est une mesure de probabilité sur $(\Omega,\mathcal{F})$.

> [!info] Remarque (propriétés)
> $\mathbb{P}(A\mid A)=1$ et $\mathbb{P}(A^c\mid A)=0$ ; pour tout $B$, $\mathbb{P}(B^c\mid A)=1-\mathbb{P}(B\mid A)$. En général, il n'y a aucune relation entre $\mathbb{P}(B\mid A^c)$ et $\mathbb{P}(B\mid A)$.

> [!info] Corollaire (formule des probabilités composées)
> Pour $n\ge2$ et $A_1,\dots,A_n\in\mathcal{F}$ tels que $\mathbb{P}(A_1\cap\dots\cap A_{n-1})>0$,
> $$\mathbb{P}(A_1\cap\dots\cap A_n) = \mathbb{P}(A_1)\prod_{k=2}^{n}\mathbb{P}\left(A_k \mid \bigcap_{j=1}^{k-1} A_j\right).$$

## Intuition
> [!tip] Idée
> Conditionner par $A$, c'est restreindre l'univers à $A$ et renormaliser la probabilité pour qu'elle somme à $1$ sur $A$. L'application $\mathbb{P}_A$ est donc une probabilité à part entière : tout ce qui vaut pour $\mathbb{P}$ (axiomes, continuité, formules) reste valable pour $\mathbb{P}_A$.

## Exemples
> [!example]
> Pour $n=3$, la formule des probabilités composées se lit comme un produit télescopique :
> $$\mathbb{P}(A_1\cap A_2\cap A_3) = \mathbb{P}(A_3\mid A_1\cap A_2)\,\mathbb{P}(A_2\mid A_1)\,\mathbb{P}(A_1).$$

## Pièges
> [!warning]
> La définition exige $\mathbb{P}(A)>0$. Et conditionner par $A$ ou par $A^c$ donne en général des probabilités sans lien : on ne peut pas déduire $\mathbb{P}(B\mid A^c)$ de $\mathbb{P}(B\mid A)$.

## Voir aussi
- [[formule-des-probabilites-totales]]
- [[independance]]

## Notes du cours

- [[09-Probabilite-conditionnelle-et-formules|概率论 · 09-Probabilite-conditionnelle-et-formules]]
- [[10-Independance-et-second-lemme-de-Borel-Cantelli|概率论 · 10-Independance-et-second-lemme-de-Borel-Cantelli]]
- [[16-Egalite-presque-sure-loi-conjointe-loi-conditionnelle|概率论 · 16-Egalite-presque-sure-loi-conjointe-loi-conditionnelle]]
