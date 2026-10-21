---
title: 概率论 · 06 Espace probabilisable et tribus
created: 2026-10-03
updated: 2026-10-03
type: notes
tags: [probabilites, tribu, sigma-algebre, espace-probabilisable]
sources: [概率论 正课手写笔记]
confidence: medium
---

# 06 Espace probabilisable et tribus

## Espaces de probabilité

But : modéliser une « expérience aléatoire ».

> [!example] Exemple 6.1
> Expérience aléatoire : on lance un dé à 6 faces. L'ensemble des résultats possibles de l'expérience est $\Omega = \{1,2,3,4,5,6\}$.

Informellement, un « événement » est une question à laquelle on peut répondre oui ou non, après avoir observé le résultat de l'expérience.

> [!example] Exemple 6.2
> Événement : $A =$ « le dé tombe sur un nombre pair ».

Formellement, un événement est représenté par un sous-ensemble de $\Omega$.

Pour modéliser une expérience aléatoire, on doit préciser :

1. l'ensemble $\Omega$ des résultats possibles ;
2. une famille $\mathcal{F}\subset\mathcal{P}(\Omega)$ ;
3. une valeur de probabilité $\mathbb{P}(A)\in[0,1]$ pour chaque événement $A\in\mathcal{F}$.

La famille $\mathcal{F}$ et les probabilités $\mathbb{P}(A)$ doivent satisfaire un certain nombre de conditions de cohérence. On va introduire ces conditions.

## Tribus

> [!note] Définition 6.3 (tribu)
> Soit $\Omega$ un ensemble non vide. Une famille $\mathcal{F}\subset\mathcal{P}(\Omega)$ est appelée une tribu sur $\Omega$ si :
> 1. $\Omega\in\mathcal{F}$ ;
> 2. $A\in\mathcal{F}\Rightarrow A^c\in\mathcal{F}$ ;
> 3. si $(A_n)_{n\in\mathbb{N}}$ est une famille dénombrable d'éléments de $\mathcal{F}$, alors $\bigcup_{n\in\mathbb{N}} A_n\in\mathcal{F}$.
>
> (propriété de stabilité)

> [!note] Définition 6.4 (espace probabilisable)
> Pour un ensemble $\Omega\neq\emptyset$ et $\mathcal{F}$ une tribu sur $\Omega$, on appelle le couple $(\Omega,\mathcal{F})$ un espace probabilisable. Dans ce cas, les éléments de $\mathcal{F}$ sont appelés événements.

> [!info] Proposition 6.5
> Si $\mathcal{F}$ est une tribu sur $\Omega$, alors :
> 1. $\Omega\in\mathcal{F}$ ;
> 2. si $(A_n)_{n\in\mathbb{N}}$ est une famille dénombrable d'éléments de $\mathcal{F}$, alors $\bigcap_{n\in\mathbb{N}} A_n\in\mathcal{F}$ ;
> 3. si $A,B\in\mathcal{F}$, alors $A\setminus B\in\mathcal{F}$ ;
> 4. $\mathcal{F}$ est stable par intersections et unions finies.

**Preuve :**
1. $\Omega = \emptyset^c \in \mathcal{F}$.
2. $\bigcap_{n\in\mathbb{N}} A_n = \left(\bigcup_{n\in\mathbb{N}} A_n^c\right)^c \in \mathcal{F}$.
3. $A\setminus B = A\cap B^c \in \mathcal{F}$.
4. $\dots$ $\#$

> [!example] Exemple 6.6
>
> 1. Pour tout $\Omega\neq\emptyset$, $\{\emptyset,\Omega\}$ est la plus petite tribu sur $\Omega$ (on l'appelle la tribu triviale sur $\Omega$), et $\mathcal{P}(\Omega)$ est la plus grande tribu sur $\Omega$.
> 2. Pour l'expérience du lancer de dé, supposons qu'on observe uniquement la parité du résultat. Alors la tribu des événements observables est $\mathcal{F} = \{\emptyset, P, I, \Omega\}$, où $\Omega = \{1,2,3,4,5,6\}$, $P = \{2,4,6\}$ et $I = \{1,3,5\}$.

> [!note] Lemme 6.7
> L'intersection d'une famille non vide quelconque de tribus est encore une tribu sur $\Omega$. C'est-à-dire : si $(\mathcal{F}_i)_{i\in I}$ est telle que, pour tout $i\in I$, $\mathcal{F}_i$ est une tribu, alors $\bigcap_{i\in I}\mathcal{F}_i$ est une tribu.

## Tribu engendrée

> [!note] Définition 6.8 (tribu engendrée)
> Soit $C\subset\Omega$ et soit $(\mathcal{F}_i)_{i\in I}$ la famille des tribus sur $\Omega$ qui contiennent $C$. On définit
> $$\sigma(C) = \bigcap_{i\in I}\mathcal{F}_i.$$
> D'après le lemme, $\sigma(C)$ est une tribu sur $\Omega$. On l'appelle la tribu engendrée par $C$. C'est la plus petite tribu sur $\Omega$ qui contient $C$.

> [!example] Exemple 6.9
> La tribu borélienne sur $\mathbb{R}$ est $\mathcal{B}(\mathbb{R}) = \sigma(\{\,]-\infty,t] \mid t\in\mathbb{Q}\})$.

## Mesure de probabilité et espace probabilisé

> [!note] Définition 6.10 (mesure de probabilité)
> Soit $\Omega$ un ensemble non vide muni d'une tribu $\mathcal{F}$. Une application $\mathbb{P} : \mathcal{F}\to[0,1]$ est appelée mesure de probabilité si elle satisfait les axiomes suivants :
> - **A1** ($\sigma$-additivité ; $\sigma$ signifie « dénombrable ») : pour toute suite dénombrable $(A_n)_{n\in\mathbb{N}}$ d'événements deux-à-deux disjoints, on a $\mathbb{P}\!\left(\bigcup_{n\in\mathbb{N}} A_n\right) = \sum_{n\in\mathbb{N}}\mathbb{P}(A_n)$.
> - **A2** : $\mathbb{P}(\Omega) = 1$.

> [!info] Remarque 6.11
> Plus généralement, une application $\mu : \mathcal{F}\to\mathbb{R}_+\cup\{+\infty\}$ est une mesure (positive) si $\mu(\emptyset) = 0$ et $\mu$ est $\sigma$-additive.
> Par exemple, la mesure de comptage sur $\mathbb{N}$ est définie par
> $$\mu(A) = \begin{cases} \operatorname{Card}(A) & \text{si } A\subset\mathbb{N} \text{ est fini} \\ +\infty & \text{si } A\subset\mathbb{N} \text{ est infini.} \end{cases}$$
> C'est une mesure (positive) mais pas une mesure de probabilité.

> [!note] Définition 6.12 (espace probabilisé)
> Une probabilité est un triplet $(\Omega,\mathcal{F},\mathbb{P})$ tel que :
> - $\Omega$ est un ensemble non vide ;
> - $\mathcal{F}$ est une tribu sur $\Omega$ ;
> - $\mathbb{P}$ est une mesure de probabilité sur $\mathcal{F}$.
>
> Modéliser une expérience aléatoire consiste à définir son espace de probabilité.

## Voir aussi
- [[tribu]]
- [[espace-probabilisable]]
- [[tribu-engendree]]
- [[tribu-borelienne]]
- [[mesure-de-probabilite]]
- [[espace-probabilise]]
