---
title: Variable aléatoire
created: 2026-10-03
updated: 2026-10-03
type: concept
tags: [probabilites, variable-aleatoire, mesurabilite]
sources: [概率论 正课手写笔记]
confidence: medium
---

# Variable aléatoire

> [!tip] Pourquoi
> Modéliser une grandeur (numérique, vectorielle) attachée au résultat d'une expérience aléatoire, de sorte qu'on puisse parler de sa loi et calculer des probabilités comme $\mathbb{P}(X \leq t)$, $\mathbb{P}(X \in B)$. Une telle grandeur doit être « compatible » avec la structure d'événements : d'où l'exigence de mesurabilité.

> [!note] Définition
> Soit $(\Omega, \mathcal{A}, \mathbb{P})$ un espace probabilisé et $(E, \mathcal{E})$ un espace mesurable. Une **variable aléatoire** (v.a.) à valeurs dans $(E, \mathcal{E})$ est une application mesurable
> $$X : (\Omega, \mathcal{A}, \mathbb{P}) \to (E, \mathcal{E}),$$
> c'est-à-dire telle que $\forall B \in \mathcal{E}$, $X^{-1}(B) \in \mathcal{A}$. On note alors $\{X \in B\} := X^{-1}(B)$.
> Lorsque $(E, \mathcal{E}) = (\mathbb{R}, \mathcal{B}(\mathbb{R}))$, on parle de **v.a. réelle**.

> [!note] Critère de mesurabilité (v.a. réelle)
> Une application $X : (\Omega, \mathcal{A}) \to (\mathbb{R}, \mathcal{B}(\mathbb{R}))$ est une v.a. réelle si et seulement si
> $$\{X \leq t\} \in \mathcal{A}, \qquad \forall t \in \mathbb{R}.$$

## Intuition
> [!tip] Idée
> $X$ transporte la structure mesurable de $(\Omega, \mathcal{A})$ vers $(E, \mathcal{E})$ : à chaque « bon » ensemble $B$ de l'espace d'arrivée correspond un événement $X^{-1}(B)$ de l'espace de départ. La condition $\{X \leq t\} \in \mathcal{A}$ suffit parce que les $]-\infty, t]$ engendrent $\mathcal{B}(\mathbb{R})$.
> La composée d'une v.a. par une fonction mesurable reste une v.a. : $f(X) = f \circ X$ (changer d'échelle, prendre un carré, une indicatrice, etc., ne casse pas la mesurabilité).

## Exemples
> [!example]
> Toute application **constante** $X : \omega \mapsto c$ est une v.a. (dite déterministe) : $X^{-1}(B) \in \{\emptyset, \Omega\}$.
> L'**indicatrice** $\mathbb{1}_A$ d'un événement $A \in \mathcal{A}$ est une v.a. réelle.
> Sur $([0,1], \mathcal{B}([0,1]), \mathbb{P})$, l'identité $id_{[0,1]}$ est une v.a. réelle, à valeurs en infinité non dénombrable.

## Pièges
> [!warning]
> Mesurable n'implique pas continu : les indicatrices et les fonctions en escalier sont des v.a. sans être continues.
> L'espace d'arrivée $(E, \mathcal{E})$ fait partie de la définition : une même formule $\omega \mapsto X(\omega)$ n'est une v.a. que relativement à une tribu $\mathcal{E}$ fixée.
> Une v.a. et sa loi sont deux objets distincts : $X$ vit sur $\Omega$, $\mathbb{P}_X$ vit sur $(E, \mathcal{E})$.

## Voir aussi
- [[espace-probabilise]]
- [[tribu-borelienne]]
- [[mesure-de-probabilite]]
- [[loi-d-une-variable-aleatoire]]
