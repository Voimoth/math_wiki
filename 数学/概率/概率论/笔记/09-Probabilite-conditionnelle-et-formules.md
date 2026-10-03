---
title: 概率论 · 09 Probabilité conditionnelle et formules des probabilités
created: 2026-10-03
updated: 2026-10-03
type: notes
tags: [probabilites, probabilite-conditionnelle, probabilites-totales, bayes]
sources: [概率论 正课手写笔记]
confidence: medium
---

# 09 Probabilité conditionnelle et formules des probabilités

L'espace $(\Omega,\mathcal{F},\mathbb{P})$ modélise notre connaissance de l'expérience aléatoire avant toute observation de son résultat. Si l'on observe que l'événement $A$ s'est réalisé, il faut réviser le modèle : pour calculer la probabilité d'un événement $B$ après l'observation de $A$, on utilise $\mathbb{P}(B\cap A)$ normalisée par $\mathbb{P}(A)$.

## Probabilité conditionnelle

> [!note] Déf. 1.1
> Soit $A\in\mathcal{F}$ tel que $\mathbb{P}(A)>0$. Pour tout $B\in\mathcal{F}$, on pose
> $$\mathbb{P}(B\mid A) = \frac{\mathbb{P}(B\cap A)}{\mathbb{P}(A)}.$$
> Le nombre $\mathbb{P}(B\mid A)$ est appelé probabilité conditionnelle de $B$ sachant $A$.

> [!note] Thm. 1.2
> Pour $A\in\mathcal{F}$ tel que $\mathbb{P}(A)>0$, l'application
> $$\mathbb{P}_A : \mathcal{F}\to[0,1],\qquad B\mapsto\mathbb{P}(B\mid A)=\frac{\mathbb{P}(B\cap A)}{\mathbb{P}(A)}$$
> est une mesure de probabilité sur $(\Omega,\mathcal{F})$.

**Preuve :** On vérifie les deux axiomes d'une mesure de probabilité.

(A1) Soit $(B_n)_{n\in\mathbb{N}}$ une suite dénombrable deux à deux disjointe. Alors pour $i\neq j$,
$$(B_i\cap A)\cap(B_j\cap A) = (B_i\cap B_j)\cap A = \varnothing,$$
donc $(B_n\cap A)_{n\in\mathbb{N}}$ est aussi une suite dénombrable deux à deux disjointe. Par $\sigma$-additivité de $\mathbb{P}$,
$$\sum_{n\in\mathbb{N}}\mathbb{P}(B_n\cap A) = \mathbb{P}\left(\bigcup_{n\in\mathbb{N}}(B_n\cap A)\right) = \mathbb{P}\left(\left(\bigcup_{n\in\mathbb{N}} B_n\right)\cap A\right).$$
En multipliant par $\frac{1}{\mathbb{P}(A)}$, on obtient
$$\mathbb{P}\left(\bigcup_{n\in\mathbb{N}} B_n \mid A\right) = \sum_{n\in\mathbb{N}}\mathbb{P}(B_n\mid A).$$
Donc $\mathbb{P}_A$ est $\sigma$-additive.

(A2) $\mathbb{P}_A(\Omega) = \frac{\mathbb{P}(\Omega\cap A)}{\mathbb{P}(A)} = \frac{\mathbb{P}(A)}{\mathbb{P}(A)} = 1$ car $A\subset\Omega$. $\#$

> [!info] Rq. 1.3
> 1. En fait $\mathbb{P}_A(A)=1$, c'est-à-dire $\mathbb{P}(A\mid A)=1$. On a aussi $\mathbb{P}(A^c\mid A)=0$. On appelle $\mathbb{P}_A$ la probabilité conditionnelle sachant $A$.
> 2. Soit $B\in\mathcal{F}$ ; alors $\mathbb{P}(B^c\mid A) = 1-\mathbb{P}(B\mid A)$.

> [!warning]
> En général, il n'y a pas de relation analogue entre $\mathbb{P}(B\mid A^c)$ et $\mathbb{P}(B\mid A)$.

## Formule des probabilités composées

> [!info] Cor. 2.1 (formule des probabilités composées)
> Soient $n\ge2$ et $A_1,\dots,A_n\in\mathcal{F}$ tels que $\mathbb{P}(A_1\cap\dots\cap A_{n-1})>0$. Alors
> $$\mathbb{P}(A_1\cap\dots\cap A_n) = \mathbb{P}(A_1)\cdot\prod_{k=2}^{n}\mathbb{P}\left(A_k \mid \bigcap_{j=1}^{k-1} A_j\right).$$

**Preuve (cas $n=3$) :**
$$\mathbb{P}(A_1\cap A_2\cap A_3) = \frac{\mathbb{P}(A_1\cap A_2\cap A_3)}{\mathbb{P}(A_1\cap A_2)}\times\frac{\mathbb{P}(A_1\cap A_2)}{\mathbb{P}(A_1)}\times\mathbb{P}(A_1) = \mathbb{P}(A_3\mid A_1\cap A_2)\cdot\mathbb{P}(A_2\mid A_1)\cdot\mathbb{P}(A_1).$$

La formule des probabilités composées permet de calculer la probabilité que $n$ événements soient réalisés simultanément comme un produit de probabilités conditionnelles.

## Système quasi-complet et formule des probabilités totales

> [!note] Déf. 3.1 (système quasi-complet d'événements)
> Une famille au plus dénombrable $(A_i)_{i\in I}$ est appelée un système quasi-complet d'événements si
> (i) $\forall i\in I,\ A_i\in\mathcal{F}$ ;
> (ii) $\forall i\neq j,\ A_i\cap A_j=\varnothing$ (deux à deux disjoints) ;
> (iii) $\sum_{i\in I}\mathbb{P}(A_i) = 1$.

> [!info] Prop. 3.2 (formule des probabilités totales)
> Si $(A_i)_{i\in I}$ est un système quasi-complet d'événements tel que $\mathbb{P}(A_i)>0$ pour tout $i\in I$, alors pour tout $B\in\mathcal{F}$,
> $$\mathbb{P}(B) = \sum_{i\in I}\mathbb{P}(B\mid A_i)\cdot\mathbb{P}(A_i).$$

> [!info] Prop. 3.3 (formule de Bayes)
> Soient $A,B\in\mathcal{F}$ tels que $\mathbb{P}(A)>0$ et $\mathbb{P}(B)>0$. Alors
> $$\mathbb{P}(A\mid B) = \mathbb{P}(B\mid A)\frac{\mathbb{P}(A)}{\mathbb{P}(B)}.$$
