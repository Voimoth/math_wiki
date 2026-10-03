---
title: 概率论 · 11 Variables aléatoires et mesurabilité
created: 2026-10-03
updated: 2026-10-03
type: notes
tags: [probabilites, variable-aleatoire, mesurabilite, tribu-borelienne]
sources: [概率论 正课手写笔记]
confidence: medium
---

# 11 Variables aléatoires et mesurabilité

## Fonctions mesurables et variables aléatoires

Soient $(E, \mathcal{E})$ et $(F, \mathcal{F})$ deux espaces probabilisables.

> [!note] Déf.
> Une application $f : E \to F$ est mesurable si
> $$\forall B \in \mathcal{F}, \quad f^{-1}(B) \in \mathcal{E}.$$

Soit $(\Omega, \mathcal{A}, \mathbb{P})$ un espace de probabilité.

> [!note] Déf.
> Une variable aléatoire à valeurs dans $(E, \mathcal{E})$ est une application mesurable
> $$X : (\Omega, \mathcal{A}) \to (E, \mathcal{E}).$$
> Autrement dit, une v.a. est simplement une fonction mesurable définie sur un espace probabilisé.

> [!note] Lemme
> Soient $(E, \mathcal{E})$, $(F, \mathcal{F})$, $(G, \mathcal{G})$ trois espaces probabilisables. Si $f : E \to F$ et $g : F \to G$ sont deux fonctions mesurables, alors $g \circ f : E \to G$ est aussi mesurable.

**Preuve :** Si $f$ et $g$ sont mesurables, alors pour tout $C \in \mathcal{G}$, on a $g^{-1}(C) \in \mathcal{F}$ et $f^{-1}(g^{-1}(C)) \in \mathcal{E}$, c'est-à-dire $(g \circ f)^{-1}(C) \in \mathcal{E}$. Donc $g \circ f$ est mesurable. $\#$

## Composition par une application mesurable

> [!note] Cor. 11.1
> Soit $X : (\Omega, \mathcal{A}, \mathbb{P}) \to (E, \mathcal{E})$ une v.a. et soit $f : (E, \mathcal{E}) \to (F, \mathcal{F})$ une fonction mesurable.
> Alors $f(X) := f \circ X$ est une v.a. à valeurs dans $(F, \mathcal{F})$.

> [!info] Rq. (interprétation)
> Soit $X : (\Omega, \mathcal{A}, \mathbb{P}) \to (E, \mathcal{E})$ une v.a. Alors pour tout ensemble mesurable $B \in \mathcal{E}$, l'ensemble
> $$\{X \in B\} := \{\omega \in \Omega \mid X(\omega) \in B\}$$
> est un événement (mesurable).

## Tribu borélienne et variables aléatoires réelles

> [!info] Rappel
> La tribu borélienne sur $\mathbb{R}$ est définie par
> $$\mathcal{B}(\mathbb{R}) := \sigma\{]-\infty, t] \mid t \in \mathbb{R}\}.$$
> Elle répond à toute question construite à partir de « est-ce que $x \leq t$ ? ».

> [!note] Déf. 11.2
> Lorsque $X$ est une v.a. à valeurs dans $(\mathbb{R}, \mathcal{B}(\mathbb{R}))$, on l'appelle une v.a. réelle.

> [!info] Prop. 11.3
> Soit une application $X : (\Omega, \mathcal{A}, \mathbb{P}) \to (\mathbb{R}, \mathcal{B}(\mathbb{R}))$.
> Alors $X$ est mesurable (c.-à-d. $X$ est une v.a. réelle) si et seulement si
> $$\{X \leq t\} := \{\omega \in \Omega \mid X(\omega) \leq t\} \in \mathcal{A}, \qquad \forall t \in \mathbb{R}.$$

**Preuve :**

« $\Rightarrow$ » Si $X$ est mesurable, alors $\{X \leq t\} = X^{-1}(]-\infty, t]) \in \mathcal{A}$.

« $\Leftarrow$ » Supposons $\{X \leq t\} \in \mathcal{A}$ pour tout $t \in \mathbb{R}$. Posons
$$C = \{B \in \mathcal{B}(\mathbb{R}) \mid X^{-1}(B) \in \mathcal{A}\}.$$
- $\mathbb{R} \in C$ : on a $X^{-1}(\mathbb{R}) = \Omega \in \mathcal{A}$.
- Si $(B_n)_{n \in \mathbb{N}}$ est une suite d'éléments de $C$, alors $X^{-1}(B_n) \in \mathcal{A}$ pour tout $n$, donc
$$\bigcap_{n \in \mathbb{N}} X^{-1}(B_n) = X^{-1}\Big(\bigcap_{n \in \mathbb{N}} B_n\Big) \in \mathcal{A}.$$
- Pour $B \in C$, on a $(X^{-1}(B))^c = X^{-1}(B^c) \in \mathcal{A}$.

Ainsi $C$ est stable par intersection dénombrable et par passage au complémentaire, et $\mathbb{R} \in C$ : $C$ est une tribu sur $\mathbb{R}$. Or, puisque $\{X \leq t\} = X^{-1}(]-\infty, t]) \in \mathcal{A}$, on a
$$\{]-\infty, t] \mid t \in \mathbb{R}\} \subseteq C.$$
Par définition de la tribu engendrée, $\mathcal{B}(\mathbb{R}) \subset C$, c.-à-d.
$$\forall B \in \mathcal{B}(\mathbb{R}),\ X^{-1}(B) \in \mathcal{A} \iff X \text{ est une v.a. réelle}. \qquad \#$$

## Exemples

> [!example] Exemple 11.4 (applications constantes)
> Toute application constante $X : \Omega \to E$, $\omega \mapsto c$ (où $c \in E$ ne dépend pas de $\omega$), est une v.a.

**Preuve :** Pour tout $B \in \mathcal{E}$, $X^{-1}(B) = \emptyset$ si $c \notin B$ et $X^{-1}(B) = \Omega$ si $c \in B$. Or $\emptyset$ et $\Omega$ appartiennent à toute tribu sur $\Omega$, donc $X$ est mesurable. $\#$

Une telle v.a. est dite « déterministe ».

> [!example] Exemple 11.5 (indicatrice)
> Soit $A \in \mathcal{A}$ un événement de l'espace probabilisé $(\Omega, \mathcal{A}, \mathbb{P})$. L'indicatrice $\mathbb{1}_A : \Omega \to \mathbb{R}$, définie par $\mathbb{1}_A(\omega) = 1$ si $\omega \in A$ et $\mathbb{1}_A(\omega) = 0$ si $\omega \notin A$, est une v.a. réelle.

**Preuve :** Soit $t \in \mathbb{R}$.
- Si $t \geq 1$, alors $\mathbb{1}_A^{-1}(]-\infty, t]) = \Omega \in \mathcal{A}$.
- Si $0 \leq t < 1$, alors $\mathbb{1}_A^{-1}(]-\infty, t]) = A^c \in \mathcal{A}$.
- Si $t < 0$, alors $\mathbb{1}_A^{-1}(]-\infty, t]) = \emptyset \in \mathcal{A}$.

D'après la Prop. 11.3, $\mathbb{1}_A$ est mesurable, donc c'est une v.a. réelle. $\#$

> [!example] Exemple 11.6 (identité sur $[0,1]$)
> Soit $([0, 1], \mathcal{B}([0, 1]), \mathbb{P})$ un espace probabilisé sur $[0,1]$. L'application identité
> $$id_{[0,1]} : ([0, 1], \mathcal{B}([0, 1])) \to ([0, 1], \mathcal{B}([0, 1]))$$
> est une v.a. réelle : en effet, pour tout $B \in \mathcal{B}([0, 1])$, $id_{[0,1]}^{-1}(B) = B \in \mathcal{B}([0, 1])$.
> Cette v.a. peut prendre une infinité non dénombrable de valeurs.


## Voir aussi
- [[variable-aleatoire]]
- [[tribu-borelienne]]
- [[tribu-engendree]]
- [[tribu]]
- [[espace-probabilisable]]
- [[espace-probabilise]]
