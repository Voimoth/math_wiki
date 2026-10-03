---
title: Continuité d'une probabilité
created: 2026-10-03
updated: 2026-10-03
type: concept
tags: [probabilites, continuite, sigma-additivite]
sources: [概率论 正课手写笔记]
confidence: medium
---

# Continuité d'une probabilité

> [!tip] Pourquoi
> La $\sigma$-additivité de $\mathbb{P}$ ne concerne que les réunions dénombrables d'événements deux à deux disjoints ; elle ne dit rien a priori sur la probabilité d'une réunion croissante ou d'une intersection décroissante. La continuité permet justement de passer du fini au dénombrable le long des suites monotones, et c'est l'outil qui rend possibles les lemmes de Borel–Cantelli.

> [!note] Définition
> Soit $\mathbb{P}$ une mesure de probabilité sur $(\Omega,\mathcal{F})$. Pour toute suite monotone d'événements :
> - si $(A_n)$ est croissante, $\mathbb{P}\left(\bigcup_{n\ge0} A_n\right) = \lim_{n\to+\infty}\uparrow\mathbb{P}(A_n)$ ;
> - si $(A_n)$ est décroissante, $\mathbb{P}\left(\bigcap_{n\ge0} A_n\right) = \lim_{n\to+\infty}\downarrow\mathbb{P}(A_n)$.

> [!info] Idée de la preuve (cas croissant)
> On pose $B_n = A_n\setminus A_{n-1}$ (pour $n\geq 1$) : les $B_n$ sont deux-à-deux disjoints et
> $$\bigcup_{k\in\mathbb{N}} A_k = A_0\cup\left(\bigcup_{k\geq 1} B_k\right),\qquad A_n = A_0\cup\left(\bigcup_{k=1}^{n} B_k\right),$$
> puis on applique la σ-additivité.

## Intuition
> [!tip] Idée
> Pour une suite croissante, on découpe la réunion en tranches deux à deux disjointes $A_0,\ A_1\setminus A_0,\ A_2\setminus A_1,\dots$ La $\sigma$-additivité donne la probabilité de la réunion comme somme d'une série, et les sommes partielles valent exactement $\mathbb{P}(A_n)$ : la convergence de ces sommes partielles est la probabilité de la réunion. Le cas décroissant se déduit du cas croissant en passant au complémentaire, car $(A_n^c)$ y devient croissante.

## Formule générale
Pour une suite quelconque (non nécessairement monotone),
$$\mathbb{P}\left(\bigcup_{n\in\mathbb{N}} A_n\right) = \lim_{N\to\infty}\uparrow\mathbb{P}\left(\bigcup_{n=1}^{N} A_n\right),\qquad \mathbb{P}\left(\bigcap_{n\in\mathbb{N}} A_n\right) = \lim_{N\to\infty}\downarrow\mathbb{P}\left(\bigcap_{n=1}^{N} A_n\right),$$
car $\left(\bigcup_{n\le N} A_n\right)_N$ est croissante et $\left(\bigcap_{n\le N} A_n\right)_N$ est décroissante.

## Exemples
> [!example]
> Sur $\Omega=[0,1]$ muni de la probabilité uniforme, posons $A_n=[0,1-\frac1n]$ (croissante) et $B_n=[0,\frac1n]$ (décroissante). Alors
> $$\mathbb{P}\left(\bigcup_n A_n\right)=\mathbb{P}([0,1))=1=\lim_n\mathbb{P}(A_n),\qquad \mathbb{P}\left(\bigcap_n B_n\right)=\mathbb{P}(\{0\})=0=\lim_n\mathbb{P}(B_n).$$

## Pièges
> [!warning]
> La monotonie est indispensable : la continuité ne s'applique pas directement à une suite quelconque, il faut d'abord la monotiser par les réunions ou intersections partielles. Par ailleurs ce sont des limites de probabilités, pas des limites d'ensembles : l'égalité $\mathbb{P}(\lim A_n)=\lim \mathbb{P}(A_n)$ requiert précisément l'hypothèse de monotonie.

## Voir aussi
- [[borel-cantelli]]
- [[limsup-d-evenements]]
