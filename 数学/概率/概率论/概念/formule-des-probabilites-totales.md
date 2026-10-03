---
title: Formule des probabilités totales et formule de Bayes
created: 2026-10-03
updated: 2026-10-03
type: concept
tags: [probabilites, probabilites-totales, bayes, systeme-quasi-complet]
sources: [概率论 正课手写笔记]
confidence: medium
---

# Formule des probabilités totales et formule de Bayes

> [!tip] Pourquoi
> Pour calculer $\mathbb{P}(B)$ sans le connaître directement, on découpe l'univers en cas disjoints recouvrants (un système quasi-complet) et on additionne la contribution conditionnelle de chaque cas. La formule de Bayes en est le renversement : elle exprime $\mathbb{P}(A\mid B)$ à partir de $\mathbb{P}(B\mid A)$.

> [!note] Définition (système quasi-complet d'événements)
> Une famille au plus dénombrable $(A_i)_{i\in I}$ est un système quasi-complet d'événements si
> (i) $\forall i\in I,\ A_i\in\mathcal{F}$ ;
> (ii) $\forall i\neq j,\ A_i\cap A_j=\varnothing$ ;
> (iii) $\sum_{i\in I}\mathbb{P}(A_i)=1$.

> [!note] Prop. (formule des probabilités totales)
> Si $(A_i)_{i\in I}$ est un système quasi-complet avec $\mathbb{P}(A_i)>0$ pour tout $i$, alors pour tout $B\in\mathcal{F}$,
> $$\mathbb{P}(B) = \sum_{i\in I}\mathbb{P}(B\mid A_i)\cdot\mathbb{P}(A_i).$$

> [!note] Prop. (formule de Bayes)
> Soient $A,B\in\mathcal{F}$ avec $\mathbb{P}(A)>0$ et $\mathbb{P}(B)>0$. Alors
> $$\mathbb{P}(A\mid B) = \mathbb{P}(B\mid A)\frac{\mathbb{P}(A)}{\mathbb{P}(B)}.$$

## Intuition
> [!tip] Idée
> Les $A_i$ forment une partition de $\Omega$ (aux négligeables près, puisque $\sum\mathbb{P}(A_i)=1$). En écrivant $B=\bigsqcup_i (B\cap A_i)$ et en appliquant la $\sigma$-additivité à $\mathbb{P}(B\cap A_i)=\mathbb{P}(B\mid A_i)\mathbb{P}(A_i)$, on obtient la formule des probabilités totales.

## Exemples
> [!example]
> Un système quasi-complet classique est $\{A,A^c\}$ avec $0<\mathbb{P}(A)<1$. Alors
> $$\mathbb{P}(B) = \mathbb{P}(B\mid A)\mathbb{P}(A) + \mathbb{P}(B\mid A^c)\mathbb{P}(A^c).$$

## Pièges
> [!warning]
> Les $A_i$ doivent être deux à deux disjoints : sommer les $\mathbb{P}(B\mid A_i)\mathbb{P}(A_i)$ sur des événements qui se recouvrent compte plusieurs fois les intersections. La formule de Bayes exige de plus $\mathbb{P}(B)>0$, sinon les conditionnements sachant $B$ n'ont pas de sens.

## Voir aussi
- [[probabilite-conditionnelle]]
- [[independance]]

## Notes du cours

- [[09-Probabilite-conditionnelle-et-formules|概率论 · 09-Probabilite-conditionnelle-et-formules]]
