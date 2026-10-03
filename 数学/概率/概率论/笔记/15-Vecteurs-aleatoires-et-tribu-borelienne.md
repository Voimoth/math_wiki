---
title: 概率论 · 15 Vecteurs aléatoires et tribu borélienne
created: 2026-10-03
updated: 2026-10-03
type: notes
tags: [probabilites, vecteur-aleatoire, tribu-borelienne, mesurabilite]
sources: [概率论 正课手写笔记]
confidence: medium
---

# 15 Vecteurs aléatoires et tribu borélienne

$\mathcal{B}(\mathbb{R}^n)$ est appelé la **tribu borélienne** de $\mathbb{R}^n$.

> [!note] Déf. 15.1
> Un **vecteur aléatoire** de dimension $n$ est une application mesurable
> $$X : (\Omega, \mathcal{A}, \mathbb{P}) \to (\mathbb{R}^n, \mathcal{B}(\mathbb{R}^n)).$$

> [!note] Thm. 15.2
> Soient $X_1, \dots, X_n : \Omega \to \mathbb{R}$. L'application
> $$X : \Omega \to \mathbb{R}^n, \quad \omega \mapsto (X_1(\omega), \dots, X_n(\omega))$$
> est un vecteur aléatoire si et seulement si $X_1, \dots, X_n$ sont des variables aléatoires réelles.
> Autrement dit, $X$ est mesurable par rapport à $\mathcal{B}(\mathbb{R}^n)$ si et seulement si les $X_i$ sont mesurables par rapport à $\mathcal{B}(\mathbb{R})$.

> [!note] Lemme 15.3
> Toute fonction continue $f : \mathbb{R}^n \to \mathbb{R}^m$ est mesurable pour les tribus $\mathcal{B}(\mathbb{R}^n)$ et $\mathcal{B}(\mathbb{R}^m)$.

**Preuve du Lemme 15.3.** Par définition de la continuité, pour tout ouvert $U$ de $\mathbb{R}^m$, $f^{-1}(U)$ est un ouvert de $\mathbb{R}^n$, donc $f^{-1}(U) \in \mathcal{B}(\mathbb{R}^n)$. Or $\mathcal{B}(\mathbb{R}^m) = \sigma(\{U : U \text{ ouvert de } \mathbb{R}^m\})$ et l'image réciproque respecte les opérations ensemblistes :
$$f^{-1}\left(\bigcap_{n \in \mathbb{N}} A_n\right) = \bigcap_{n \in \mathbb{N}} f^{-1}(A_n), \qquad f^{-1}\left(\bigcup_{n \in \mathbb{N}} A_n\right) = \bigcup_{n \in \mathbb{N}} f^{-1}(A_n),$$
$$f^{-1}(A^c) = f^{-1}(A)^c, \qquad f^{-1}(\mathbb{R}^m) = \mathbb{R}^n.$$
Il en résulte que $\{A \subset \mathbb{R}^m \mid f^{-1}(A) \in \mathcal{B}(\mathbb{R}^n)\}$ est une tribu, qui contient tous les ouverts de $\mathbb{R}^m$, donc
$$\boxed{\{A \subset \mathbb{R}^m \mid f^{-1}(A) \in \mathcal{B}(\mathbb{R}^n)\} \supset \mathcal{B}(\mathbb{R}^m).} \quad \#$$

**Preuve du Thm. 15.2.**
$\Rightarrow$ : si $X : \Omega \to \mathbb{R}^n$ est un vecteur aléatoire, alors pour tout $k \in [\![1, n]\!]$, la projection
$$\pi_k \circ X : \Omega \to \mathbb{R}, \qquad (x_1, \dots, x_n) \mapsto x_k,$$
est mesurable comme composée d'applications mesurables : $X_k$ est une variable aléatoire réelle pour tout $k \in [\![1, n]\!]$.

$\Leftarrow$ : supposons $X_1, \dots, X_n : \Omega \to \mathbb{R}$ mesurables. Soit
$$C = \{B \subset \mathbb{R}^n \mid X^{-1}(B) \in \mathcal{A}\}.$$
L'image réciproque respectant les opérations ensemblistes, $C$ est une tribu. Pour montrer $C \supset \mathcal{B}(\mathbb{R}^n)$, il suffit donc de montrer que les pavés $I_1 \times \dots \times I_n$ ($I_1, \dots, I_n$ intervalles de $\mathbb{R}$) appartiennent à $C$. Or
$$X^{-1}(I_1 \times \dots \times I_n) = \{\omega \in \Omega \mid X_k(\omega) \in I_k,\ \forall k\} = \bigcap_{k=1}^n \{X_k \in I_k\} = \bigcap_{k=1}^n X_k^{-1}(I_k) \in \mathcal{A},$$
donc $I_1 \times \dots \times I_n \in C$. Comme
$$\mathcal{B}(\mathbb{R}^n) = \sigma(\{I_1 \times \dots \times I_n \mid I_1, \dots, I_n \text{ sont des intervalles}\}),$$
on en déduit $C \supset \mathcal{B}(\mathbb{R}^n)$, c'est-à-dire que $X : (\Omega, \mathcal{A}) \to (\mathbb{R}^n, \mathcal{B}(\mathbb{R}^n))$ est mesurable. $\#$

> [!note] Cor. 15.4
> Si $X_1, \dots, X_n$ sont des variables aléatoires réelles et $f : \mathbb{R}^n \to \mathbb{R}^m$ est continue, alors
> $$f(X_1, \dots, X_n) : \Omega \to \mathbb{R}^m, \quad \omega \mapsto f(X_1(\omega), \dots, X_n(\omega))$$
> est un vecteur aléatoire.

**Preuve du Cor. 15.4.** La composée de deux fonctions mesurables est mesurable :
$$\Omega \xrightarrow{X = (X_1, \dots, X_n)} \mathbb{R}^n \xrightarrow{f} \mathbb{R}^m. \quad \#$$

> [!info] Rq. 15.5 (applications)
> Si $X, Y$ sont deux variables aléatoires réelles, alors $X + Y$, $X - Y$, $XY$, $|X|$, $\min(X,Y)$, $\max(X,Y)$ sont des variables aléatoires réelles : ce sont les composées de $(X, Y)$ avec des fonctions continues de $\mathbb{R}^2$ dans $\mathbb{R}$.


## Voir aussi
- [[vecteur-aleatoire]]
- [[tribu-borelienne]]
- [[variable-aleatoire]]
- [[tribu-engendree]]
- [[tribu]]
- [[espace-probabilise]]
