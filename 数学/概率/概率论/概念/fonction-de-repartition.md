---
title: Fonction de répartition
created: 2026-10-03
updated: 2026-10-03
type: concept
tags: [probabilites, fonction-de-repartition, loi]
sources: [概率论 正课手写笔记]
confidence: medium
---

# Fonction de répartition

> [!tip] Pourquoi
> Décrire la loi d'une v.a. réelle non plus par une mesure $\mathbb{P}_X$ sur $(\mathbb{R}, \mathcal{B}(\mathbb{R}))$, mais par une simple fonction $F_X : \mathbb{R} \to [0, 1]$, monotone et régulière. Cela ramène l'étude d'une loi à l'étude d'une fonction d'une variable réelle.

> [!note] Définition
> La **fonction de répartition** de la v.a. réelle $X$ est l'application
> $$F_X : \mathbb{R} \to [0, 1], \qquad t \mapsto \mathbb{P}(X \leq t).$$

> [!note] Propriétés
> Toute fonction de répartition $F_X$ vérifie :
> 1. $F_X$ est croissante ;
> 2. $F_X$ est continue à droite ;
> 3. $\lim\limits_{x \to +\infty} F_X(x) = 1$ et $\lim\limits_{x \to -\infty} F_X(x) = 0$.

> [!note] Théorème (admis)
> La fonction de répartition détermine la loi : $\mathbb{P}_X$ est entièrement connue dès que $F_X$ l'est.

## Intuition
> [!tip] Idée
> $F_X(t)$ est la masse cumulée sur $]-\infty, t]$. Ses sauts correspondent exactement aux atomes de la loi : $\mathbb{P}(X = x) = F_X(x) - F_X(x^-)$ est la taille du saut en $x$. Une fonction $F$ qui croît continûment décrit une loi diffuse, sans masse ponctuelle.
> La connaissance de tous les $\mathbb{P}(X \leq t)$ suffit à reconstruire toute la loi car $\mathcal{B}(\mathbb{R}) = \sigma(\{]-\infty, t] \mid t \in \mathbb{R}\})$.

## Exemples
> [!example]
> Si $X \sim \mathrm{Ber}(p)$ : $F_X(t) = 0$ pour $t < 0$, $F_X(t) = 1-p$ pour $0 \leq t < 1$, $F_X(t) = 1$ pour $t \geq 1$. Sauts en $0$ (hauteur $1-p$) et en $1$ (hauteur $p$).
> Si $\mathbb{P}(X \in ]a, b[) = 0$, alors $F_X$ est constante sur $]a, b[$ : $F_X(y) - F_X(x) = \mathbb{P}(x < X \leq y) = 0$ pour $a < x < y < b$.

## Pièges
> [!warning]
> $F_X$ est continue à droite, pas nécessairement à gauche : c'est le saut à gauche qui porte la masse ponctuelle.
> Croissante et bornée ne suffisent pas : il faut aussi les limites $0$ en $-\infty$ et $1$ en $+\infty$, et la continuité à droite.
> « $\mathbb{P}_X$ nulle sur $]a,b[$ » signifie aucune masse dans l'ouvert, pas dans $[a, b]$ : $F_X$ peut encore sauter aux extrémités $a$ et $b$.

## Voir aussi
- [[variable-aleatoire]]
- [[loi-d-une-variable-aleatoire]]
