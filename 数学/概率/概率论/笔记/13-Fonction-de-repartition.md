---
title: 概率论 · 13 Fonction de répartition
created: 2026-10-03
updated: 2026-10-03
type: notes
tags: [probabilites, fonction-de-repartition, loi]
sources: [概率论 正课手写笔记]
confidence: medium
---

# 13 Fonction de répartition

## Définition

> [!info] Rq. (motivation)
> La fonction de répartition est une autre description de la loi d'une v.a. réelle par une fonction « sympathique » $F : \mathbb{R} \to \mathbb{R}$.

> [!note] Déf. 13.1
> La fonction de répartition de $X$ est l'application
> $$F_X : \mathbb{R} \to [0, 1], \qquad t \mapsto \mathbb{P}(X \leq t).$$

## Propriétés

> [!info] Prop. 13.2
> Toute fonction de répartition $F_X$ vérifie :
> 1. $F_X$ est croissante ;
> 2. $F_X$ est continue à droite ;
> 3. $\displaystyle\lim_{x \to +\infty} F_X(x) = 1$ et $\displaystyle\lim_{x \to -\infty} F_X(x) = 0$.

**Preuve :**

① Pour $x \leq y$, on a $\{X \leq x\} \subseteq \{X \leq y\}$, donc $\mathbb{P}(X \leq x) \leq \mathbb{P}(X \leq y)$, i.e. $F_X(x) \leq F_X(y)$.

② Soit $(x_n)$ une suite décroissante avec $x_n \to t$. Alors la suite d'événements $(\{X \leq x_n\})$ est décroissante. Par continuité monotone de la probabilité,
$$\lim_{n \to \infty} \mathbb{P}(X \leq x_n) = \mathbb{P}\Big(\bigcap_{n \in \mathbb{N}} \{X \leq x_n\}\Big) = \mathbb{P}(X \leq t),$$
d'où $F_X(t) = \lim\limits_{n \to \infty} F_X(x_n)$.

③ Si $(x_n)$ est croissante et $x_n \to +\infty$,
$$\lim_{n \to \infty} \mathbb{P}(X \leq x_n) = \mathbb{P}\Big(\bigcup_{n \in \mathbb{N}} \{X \leq x_n\}\Big) = \mathbb{P}(\Omega) = 1.$$
Si $(x_n)$ est décroissante et $x_n \to -\infty$,
$$\lim_{n \to \infty} \mathbb{P}(X \leq x_n) = \mathbb{P}\Big(\bigcap_{n \in \mathbb{N}} \{X \leq x_n\}\Big) = \mathbb{P}(\emptyset) = 0. \qquad \#$$

> [!note] Thm. 13.3 (admis)
> La fonction de répartition d'une v.a. réelle détermine sa loi.

**Idée de la preuve :** $F_X$ détermine $\mathbb{P}(X \in ]-\infty, t])$ pour tout $t$ ; et $\mathcal{B}(\mathbb{R}) = \sigma(\{]-\infty, t] \mid t \in \mathbb{R}\})$.

> [!info] Prop. 13.4
> Soit $X$ une v.a. réelle. Alors pour tout $x \in \mathbb{R}$,
> $$\mathbb{P}(X = x) = F_X(x) - \lim_{y \to x^-} F_X(y).$$

**Preuve :**
$$\mathbb{P}(X = x) = \mathbb{P}(\{X \leq x\} \setminus \{X < x\}) = \mathbb{P}(X \leq x) - \mathbb{P}(X < x) = F_X(x) - \lim_{y \to x^-} F_X(y). \qquad \#$$

> [!info] Rq. 13.5 (interprétation)
> Pour tout $x \in \mathbb{R}$, la loi $\mathbb{P}_X$ présente une masse (non nulle) au singleton $\{x\}$ si et seulement si $F_X$ a une discontinuité en $x$.

> [!info] Rq. 13.6
> Si $\mathbb{P}_X$ donne une mesure nulle à un intervalle $]a, b[$, alors $F_X$ est constante sur $]a, b[$. En effet, pour $a < x < y < b$,
> $$F_X(y) - F_X(x) = \mathbb{P}(x < X \leq y) = \mathbb{P}_X(]x, y]) = 0.$$

## Transport de la loi

> [!info] Prop. 13.7
> Soient $X$ et $Y$ deux v.a. à valeurs dans $(E, \mathcal{E})$, et soit $f : (E, \mathcal{E}) \to (F, \mathcal{F})$ une fonction mesurable. Si $X \overset{\mathcal{L}}{=} Y$, alors $f(X) \overset{\mathcal{L}}{=} f(Y)$.
> Autrement dit, la loi de $f(X)$ ne dépend que de la loi de $X$.

**Preuve :** Soit $C \in \mathcal{F}$. Alors
$$\mathbb{P}_{f(X)}(C) = \mathbb{P}(f(X) \in C) = \mathbb{P}(f \circ X \in C) = \mathbb{P}(\{\omega \mid (f \circ X)(\omega) \in C\}) = \mathbb{P}(\{\omega \mid X(\omega) \in f^{-1}(C)\}) = \mathbb{P}_X(f^{-1}(C)). \qquad \#$$
