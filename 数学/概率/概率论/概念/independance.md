---
title: Indépendance (événements et variables aléatoires)
created: 2026-10-03
updated: 2026-10-03
type: concept
tags: [probabilites, independance, independance-mutuelle]
sources: [概率论 正课手写笔记]
confidence: medium
---

# Indépendance

> [!tip] Pourquoi
> L'indépendance formalise l'idée que deux informations ne s'influencent pas : connaître l'une ne change rien à la loi de l'autre. C'est l'hypothèse qui rend calculables les lois de sommes, les convolutions et le modèle i.i.d.

> [!note] Définition
> **Événements.** $A, B$ sont indépendants si $\mathbb{P}(A \cap B) = \mathbb{P}(A)\,\mathbb{P}(B)$. Plus généralement, $A_1, \dots, A_n$ sont mutuellement indépendants si
> $$\forall I \subseteq [\![1, n]\!], \quad \mathbb{P}\left(\bigcap_{i \in I} A_i\right) = \prod_{i \in I} \mathbb{P}(A_i).$$
> **Variables aléatoires.** $X : (\Omega, \mathcal{F}, \mathbb{P}) \to (\mathbb{R}^n, \mathcal{B}(\mathbb{R}^n))$ et $Y : (\Omega, \mathcal{F}) \to (\mathbb{R}^m, \mathcal{B}(\mathbb{R}^m))$ sont indépendantes (noté $X \perp Y$) si
> $$\forall A \in \mathcal{B}(\mathbb{R}^n),\ B \in \mathcal{B}(\mathbb{R}^m), \quad \mathbb{P}(X \in A,\ Y \in B) = \mathbb{P}(X \in A)\,\mathbb{P}(Y \in B).$$
> **Famille.** $(X_i)_{i \in I}$ sont mutuellement indépendantes si, pour toute partie finie $J \subset I$ et tous ensembles mesurables $A_j$, $\mathbb{P}\bigl(\bigcap_{j \in J}\{X_j \in A_j\}\bigr) = \prod_{j \in J} \mathbb{P}(X_j \in A_j)$.

## Intuition
> [!tip] Idée
> Une variable aléatoire est une information ; en associer une à un événement $A$ (son indicatrice $\mathbb{1}_A$) montre que l'indépendance des variables généralise celle des événements. Côté calcul : $X \perp Y$ $\iff$ $\mathbb{P}(X \in A \mid Y \in B) = \mathbb{P}(X \in A)$, et la loi conjointe est alors le produit des marginales.

## Exemples
> [!example]
> Cas discret : $X \perp Y$ $\iff$ $\mathbb{P}(X = x, Y = y) = \mathbb{P}(X = x)\,\mathbb{P}(Y = y)$ pour toutes valeurs.
> Par les fonctions de répartition (admis) : $X \perp Y$ $\iff$ $F_{X,Y}(x, y) = F_X(x)\,F_Y(y)$ pour tous $x, y$.
> Par transformation : si $X \perp Y$ et $f, g$ mesurables, alors $f(X) \perp g(Y)$ ; plus généralement des blocs disjoints de variables mutuellement indépendantes restent indépendants après transformation.
> Contre-exemple classique (deux à deux sans indépendance mutuelle) : $X, Y$ uniformes indépendantes sur $\{0, 1\}$, $Z = \mathbb{1}_{X = Y}$. Alors $X, Y, Z$ sont deux à deux indépendantes, mais $\mathbb{P}(X = 0, Y = 0, Z = 1) = \frac{1}{4} \neq \frac{1}{8} = \mathbb{P}(X = 0)\mathbb{P}(Y = 0)\mathbb{P}(Z = 1)$.

## Pièges
> [!warning]
> « Indépendantes deux à deux » $\nRightarrow$ « mutuellement indépendantes » : l'indépendance mutuelle est strictement plus forte (voir le contre-exemple ci-dessus).
> L'indépendance n'est pas une propriété des lois seules : deux variables de même loi peuvent être indépendantes ou non ; c'est une propriété de la loi *conjointe*.
> Indépendance $\neq$ « incompatibilité » : $A \cap B = \emptyset$ avec $\mathbb{P}(A), \mathbb{P}(B) > 0$ est le contraire de l'indépendance.

## Voir aussi
- [[loi-conjointe]]
- [[loi-conditionnelle]]
- [[operations-ensemblistes]]
