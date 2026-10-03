---
title: 概率论 · 12 Loi d'une variable aléatoire
created: 2026-10-03
updated: 2026-10-03
type: notes
tags: [probabilites, loi, variable-aleatoire, variable-aleatoire-discrete]
sources: [概率论 正课手写笔记]
confidence: medium
---

# 12 Loi d'une variable aléatoire

## Notation et définition de la loi

> [!info] Notation
> Soit $X : (\Omega, \mathcal{A}, \mathbb{P}) \to (E, \mathcal{E})$ une v.a.
> Pour $B \in \mathcal{E}$, on écrit
> $$\{X \in B\} := \{\omega \in \Omega \mid X(\omega) \in B\} = X^{-1}(B).$$
> Pour une v.a. réelle, on écrit $\{X > x_0\} := \{\omega \mid X(\omega) > x_0\} \in \mathcal{A}$ et $\{a < X \leq b\} := \{\omega \mid a < X(\omega) \leq b\} \in \mathcal{A}$.

> [!note] Déf. 12.1
> Soit $X : (\Omega, \mathcal{A}, \mathbb{P}) \to (E, \mathcal{E})$ une v.a. Sa loi, notée $\mathbb{P}_X$, est l'application
> $$\begin{aligned} \mathbb{P}_X : \mathcal{E} &\to [0, 1] \\ B &\mapsto \mathbb{P}(X \in B). \end{aligned}$$
> Elle est bien définie : pour tout $B \in \mathcal{E}$, on a $\{X \in B\} = X^{-1}(B) \in \mathcal{A}$, donc $\mathbb{P}(X^{-1}(B))$ est bien défini.

> [!note] Thm. 12.2
> La loi $\mathbb{P}_X$ est une mesure de probabilité sur $(E, \mathcal{E})$.

**Preuve :**
① $\mathbb{P}_X(E) = \mathbb{P}(X \in E) = \mathbb{P}(\Omega) = 1$.
② Soit $(E_n)_{n \in \mathbb{N}}$ une suite d'éléments deux à deux disjoints de $\mathcal{E}$. Alors $(X^{-1}(E_n))_{n \in \mathbb{N}}$ est une suite d'éléments deux à deux disjoints de $\Omega$. Par $\sigma$-additivité de $\mathbb{P}$,
$$\mathbb{P}_X\Big(\bigcup_{n \in \mathbb{N}} E_n\Big) = \mathbb{P}\Big(X^{-1}\big(\bigcup_{n \in \mathbb{N}} E_n\big)\Big) = \mathbb{P}\Big(\bigcup_{n \in \mathbb{N}} X^{-1}(E_n)\Big) = \sum_{n \in \mathbb{N}} \mathbb{P}(X^{-1}(E_n)) = \sum_{n \in \mathbb{N}} \mathbb{P}_X(E_n).$$
Donc $\mathbb{P}_X$ est $\sigma$-additive : c'est une probabilité. $\#$

> [!info] Rq. 12.3
> Réciproquement, pour toute mesure de probabilité $\mu$ sur $(E, \mathcal{E})$, il existe une v.a. $X : (\Omega, \mathcal{A}, \mathbb{P}) \to (E, \mathcal{E})$ telle que $\mu = \mathbb{P}_X$ : il suffit de considérer $(\Omega, \mathcal{A}, \mathbb{P}) = (E, \mathcal{E}, \mu)$ et $X = id_E$.

## Égalité en loi

> [!note] Déf. 12.4
> Soient $X, Y$ deux v.a. à valeurs dans le même espace probabilisé $(E, \mathcal{E})$. On dit que $X$ et $Y$ ont la même loi, ou sont équidistribuées, si $\mathbb{P}_X = \mathbb{P}_Y$.
> On écrit alors $X \overset{\mathcal{L}}{=} Y$ (« $X$ est égale à $Y$ en loi ») ou $X \overset{d}{=} Y$ (« en distribution »).

> [!warning] Attention
> $X$ et $Y$ ne sont pas nécessairement définies sur le même espace probabilisé $(\Omega, \mathcal{A}, \mathbb{P})$.

## Variables aléatoires discrètes

> [!note] Déf. 12.5
> Une v.a. $X : \Omega \to E$ est dite discrète si son image $X(\Omega) = \{X(\omega) \mid \omega \in \Omega\}$ est au plus dénombrable.
> Si $X(\Omega)$ est fini, $X$ est dite finie.

> [!info] Hypothèse
> On suppose que les singletons $\{x\}$ ($x \in E$) de l'espace d'arrivée $(E, \mathcal{E})$ sont mesurables, c.-à-d. $\forall x \in E$, $\{x\} \in \mathcal{E}$.
> Cette hypothèse est vérifiée en particulier si $E = \mathbb{R}^n$ et $\mathcal{E} = \mathcal{B}(\mathbb{R}^n)$, ou bien si $\mathcal{E} = \mathcal{P}(E)$.

> [!info] Prop. 12.6
> Soit $X$ une v.a. discrète à valeurs dans $(E, \mathcal{E})$. Alors
> $$\forall B \in \mathcal{E}, \quad \mathbb{P}(X \in B) = \sum_{x \in B \cap X(\Omega)} \mathbb{P}(X = x).$$

**Preuve :** On a
$$\{X \in B\} = \{\omega \mid X(\omega) \in B\} = \bigsqcup_{x \in B \cap X(\Omega)} \{X = x\}$$
(union disjointe au plus dénombrable), d'où le résultat par $\sigma$-additivité. $\#$

> [!example] Exemple 12.7
> Soit $X = \mathbb{1}_A$ avec $A \in \mathcal{A}$. Alors $\mathbb{P}(X = 1) = \mathbb{P}(A)$ et $\mathbb{P}(X = 0) = \mathbb{P}(A^c) = 1 - \mathbb{P}(A)$. $X$ est une v.a. réelle et discrète.


## Voir aussi
- [[loi-d-une-variable-aleatoire]]
- [[variable-aleatoire]]
- [[mesure-de-probabilite]]
- [[modele-discret]]
- [[espace-probabilise]]
