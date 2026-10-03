---
title: Vecteur aléatoire (variable aléatoire vectorielle)
created: 2026-10-03
updated: 2026-10-03
type: concept
tags: [probabilites, vecteur-aleatoire, mesurabilite]
sources: [概率论 正课手写笔记]
confidence: medium
---

# Vecteur aléatoire

> [!tip] Pourquoi
> Beaucoup de quantités aléatoires ne sont pas des nombres mais des $n$-uplets : hauteur et poids d'un individu, résultat d'une suite d'épreuves, etc. Le vecteur aléatoire rassemble plusieurs variables en un seul objet mesurable, ce qui permet de parler de leur loi jointe et de leur indépendance.

> [!note] Définition
> Un **vecteur aléatoire** de dimension $n$ est une application mesurable
> $$X : (\Omega, \mathcal{A}, \mathbb{P}) \to (\mathbb{R}^n, \mathcal{B}(\mathbb{R}^n)).$$
> Autrement dit, $X = (X_1, \dots, X_n)$ avec chaque coordonnée $X_k : \Omega \to \mathbb{R}$ mesurable.

## Intuition
> [!tip] Idée
> Un vecteur aléatoire est simplement un $n$-uplet de variables aléatoires réelles, examinées ensemble. La mesurabilité pour $\mathcal{B}(\mathbb{R}^n)$ équivaut à la mesurabilité de chaque coordonnée : il n'y a pas de condition « supplémentaire » de nature produit.

## Exemples
> [!example]
> Si $X_1, \dots, X_n$ sont des variables aléatoires réelles, alors $\omega \mapsto (X_1(\omega), \dots, X_n(\omega))$ est un vecteur aléatoire.
> Si $f : \mathbb{R}^n \to \mathbb{R}^m$ est continue et $X_1, \dots, X_n$ sont des variables aléatoires réelles, alors $f(X_1, \dots, X_n)$ est un vecteur aléatoire (composée d'applications mesurables).
> Cas particuliers : $X + Y$, $X - Y$, $XY$, $|X|$, $\min(X, Y)$, $\max(X, Y)$ sont des variables aléatoires réelles dès que $X, Y$ le sont.

## Pièges
> [!warning]
> Ne pas confondre « $X$ mesurable comme vecteur » et « chaque $X_k$ mesurable » : le théorème dit bien l'équivalence, mais elle repose sur le fait que $\mathcal{B}(\mathbb{R}^n)$ est engendrée par les pavés.
> La composition $f(X_1, \dots, X_n)$ reste un vecteur aléatoire seulement si $f$ est mesurable (par exemple continue) ; elle exige la mesurabilité *conjointe*, pas seulement celle de chaque variable prise séparément.

## Voir aussi
- [[tribu-borelienne]]
- [[egalite-presque-sure]]
