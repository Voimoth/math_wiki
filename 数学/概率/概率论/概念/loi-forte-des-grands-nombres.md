---
title: Loi forte des grands nombres
created: 2026-10-03
updated: 2026-10-03
type: concept
tags: [probabilites, grands-nombres, convergence, borel-cantelli]
sources: [概率论 正课手写笔记]
confidence: medium
---

# Loi forte des grands nombres

> [!tip] Pourquoi
> Renforcer la loi faible : la convergence de la moyenne empirique vers l'espérance a lieu presque sûrement, c'est-à-dire pour presque tout $\omega$.

> [!note] Théorème (cas $L^2$)
> Soit $(X_n)$ i.i.d. avec $X_1\in L^2$. On pose $m=\mathbb{E}[X_1]$ et $S_n=\sum_{k=1}^nX_k$. Alors
> $$\frac{S_n}{n}\xrightarrow{p.s.}m.$$

> [!info] Remarque
> L'hypothèse $L^2$ n'est pas nécessaire : la loi forte reste vraie sous la seule hypothèse $X_1\in L^1$.

## Intuition
> [!tip] Idée
> Chebyshev ne donne que $\mathbb{P}(A_n)\lesssim1/n$, dont la série diverge, et Borel–Cantelli ne s'applique pas directement. On regroupe les indices en **blocs** $B_n=\bigcup_{k=n^2}^{(n+1)^2-1}A_k$ : la taille du bloc ($\approx2n$) compense la décroissance et l'on obtient $\mathbb{P}(B_n)=O(1/n^2)$, sommable. Borel–Cantelli conclut alors qu'il n'y a presque sûrement qu'un nombre fini de blocs « mauvais ».

## Exemples
> [!example]
> Fréquence empirique presque sûre : pour un lancer de dés répété, la fréquence de $6$ tend vers $1/6$ pour presque toute suite de lancers.

## Pièges
> [!warning]
>
> - La version $L^2$ utilise l'indépendance (pas seulement la non-corrélation) pour découper les blocs.
> - Le contrôle uniforme en $k$ à l'intérieur d'un bloc (avec $k$ entre deux carrés consécutifs) est crucial ; estimer $A_n$ seulement en $n$ ne suffit pas.
> - À ne pas confondre avec [[convergence-en-probabilite]] : ici la convergence est ponctuelle p.s.

## Voir aussi
- [[convergence-presque-sure]]
- [[borel-cantelli]]
- [[loi-faible-des-grands-nombres]]
- [[inegalite-de-chebyshev]]
- [[上极限与下极限]]
## Notes du cours

- [[23-Loi-forte-des-grands-nombres|概率论 · 23-Loi-forte-des-grands-nombres]]
