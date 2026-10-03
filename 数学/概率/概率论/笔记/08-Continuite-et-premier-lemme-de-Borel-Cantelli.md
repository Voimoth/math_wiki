---
title: 概率论 · 08 Continuité d'une probabilité et premier lemme de Borel–Cantelli
created: 2026-10-03
updated: 2026-10-03
type: notes
tags: [probabilites, continuite, borel-cantelli, sigma-additivite]
sources: [概率论 正课手写笔记]
confidence: medium
---

# 08 Continuité d'une probabilité et premier lemme de Borel–Cantelli

La $\sigma$-additivité de $\mathbb{P}$ entraîne sa continuité le long des suites monotones d'événements. On en déduit le premier lemme de Borel–Cantelli : lorsque la série des probabilités converge, presque sûrement seul un nombre fini des événements se réalisent.

## Continuité d'une probabilité

> [!info] Prop. 1.1 (continuité croissante)
> Soit $(A_n)_{n\in\mathbb{N}}$ une suite croissante d'événements ($A_n\subset A_{n+1}$). Alors
> $$\mathbb{P}\left(\bigcup_{n\ge0} A_n\right) = \lim_{n\to+\infty}\uparrow\mathbb{P}(A_n).$$

**Preuve :** Par $\sigma$-additivité appliquée à la décomposition en parties deux à deux disjointes $A_0,\ A_1\setminus A_0,\ A_2\setminus A_1,\dots$, on a
$$\mathbb{P}\left(\bigcup_{k\ge0} A_k\right) = \mathbb{P}(A_0) + \sum_{k\ge1}\mathbb{P}(A_k\setminus A_{k-1}),$$
et les sommes partielles valent
$$\mathbb{P}(A_n) = \mathbb{P}(A_0) + \sum_{k=1}^{n}\mathbb{P}(A_k\setminus A_{k-1}) \xrightarrow{n\to+\infty} \mathbb{P}\left(\bigcup_{k\ge0} A_k\right).$$

> [!info] Prop. 1.2 (continuité décroissante)
> Soit $(A_n)_{n\in\mathbb{N}}$ une suite décroissante d'événements. Alors
> $$\mathbb{P}\left(\bigcap_{n\ge0} A_n\right) = \lim_{n\to+\infty}\downarrow\mathbb{P}(A_n).$$

**Preuve :** Si $(A_n)$ est décroissante, $(A_n^c)$ est croissante ; la continuité croissante appliquée à $(A_n^c)$ donne le résultat en passant au complémentaire.

> [!info] Rq. 1.3
> Pour une suite d'événements $(A_n)_{n\in\mathbb{N}}$ quelconque, on peut écrire
> $$\mathbb{P}\left(\bigcup_{n\in\mathbb{N}} A_n\right) = \lim_{N\to\infty}\uparrow\mathbb{P}\left(\bigcup_{n=1}^{N} A_n\right),\qquad \mathbb{P}\left(\bigcap_{n\in\mathbb{N}} A_n\right) = \lim_{N\to\infty}\downarrow\mathbb{P}\left(\bigcap_{n=1}^{N} A_n\right),$$
> car $\left(\bigcup_{n\le N} A_n\right)_N$ est croissante et $\left(\bigcap_{n\le N} A_n\right)_N$ est décroissante.

## Premier lemme de Borel–Cantelli

> [!note] Lemme 2.1 (premier lemme de Borel–Cantelli)
> Soit $(A_n)_{n\in\mathbb{N}}$ une suite d'événements telle que $\displaystyle\sum_{n\ge0}\mathbb{P}(A_n) < +\infty$. Alors
> $$\mathbb{P}\left(\bigcap_{k\ge1}\left(\bigcup_{n\ge k} A_n\right)\right) = 0.$$

> [!info] Rq. 2.2
> L'événement $\bigcap_{k\ge1}\left(\bigcup_{n\ge k} A_n\right)$ est réalisé si et seulement si un nombre infini des événements $A_n$ sont réalisés. On le note
> $$\limsup_{n\to\infty} A_n = \bigcap_{k\ge1}\left(\bigcup_{n\ge k} A_n\right),$$
> à comparer avec $\limsup_{n\to\infty} a_n = \inf_{k\ge1}\left(\sup_{n\ge k} a_n\right)$ pour une suite réelle.

**Preuve :** Soit $B_k=\bigcup_{n\ge k} A_n$ pour tout $k\ge1$. La suite d'événements $(B_k)_{k\ge1}$ est décroissante. Par la continuité (décroissante) de la probabilité,
$$\mathbb{P}\left(\bigcap_{k\ge1} B_k\right) = \lim_{k\to\infty}\mathbb{P}(B_k).$$
Par la sous-additivité de la probabilité,
$$\mathbb{P}(B_k) \le \sum_{n\ge k}\mathbb{P}(A_n).$$
Donc
$$\mathbb{P}\left(\bigcap_{k\ge1} B_k\right) = \lim_{k\to\infty}\sum_{n\ge k}\mathbb{P}(A_n) = 0,$$
car la série $\sum_{n\ge0}\mathbb{P}(A_n)$ converge, donc son reste tend vers $0$. $\#$

> [!info] Rq. 2.3 (interprétation probabiliste)
> Si les probabilités d'une suite d'événements décroissent assez vite, alors p.s. seul un nombre fini des éléments sont réalisés :
> $$\mathbb{P}\bigl\{\omega \mid \omega\in A_n \text{ pour seulement un nombre fini de } n\in\mathbb{N}\bigr\} = 1.$$

> [!example] Exemple 2.4
> Un joueur joue une suite infinie de jeux telle que, pour tout $n\ge1$, la probabilité qu'il gagne au $n$-ième jeu soit $\frac{1}{2^n}$ (par exemple, on lance $n$ pièces au $n$-ième jeu et le joueur gagne seulement si toutes les pièces tombent sur «face»). Alors presque sûrement le joueur ne gagne qu'un nombre fini de jeux : p.s. il existe $k\in\mathbb{N}^*$ tel qu'il perde à tous les jeux à partir du $k$-ième jeu.

> [!info] Rq. 2.5
> Les résultats de la suite infinie des jeux ne sont pas nécessairement indépendants : le premier lemme de Borel–Cantelli ne requiert aucune hypothèse d'indépendance.
