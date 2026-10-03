---
title: Loi de Poisson
created: 2026-10-03
updated: 2026-10-03
type: concept
tags: [probabilites, lois-discretes, poisson]
sources: [概率论 正课手写笔记]
confidence: medium
---

# Loi de Poisson

> [!tip] Pourquoi
> Modéliser le nombre d'occurrences d'un événement rare parmi un grand nombre d'essais : elle apparaît comme limite de lois binomiales $\mathcal{B}(n, p_n)$ lorsque $n \to \infty$, $p_n \to 0$ et $n p_n \to \lambda$.

> [!note] Définition
> Soit $\lambda > 0$. Une v.a. à valeurs dans $\mathbb{N}$ suit la **loi de Poisson** de paramètre $\lambda$ si
> $$\forall k \in \mathbb{N}, \quad \mathbb{P}(X = k) = e^{-\lambda} \frac{\lambda^k}{k!}.$$
> On note $X \sim \mathcal{P}(\lambda)$.

> [!note] Théorème (approximation de Poisson)
> Soit $(p_n)_{n \geq 1}$ avec $p_n \in [0, 1]$ et $n p_n \to \lambda > 0$. Si $X_n \sim \mathcal{B}(n, p_n)$, alors
> $$\forall k \in \mathbb{N}, \quad \mathbb{P}(X_n = k) \longrightarrow e^{-\lambda} \frac{\lambda^k}{k!}.$$

## Intuition
> [!tip] Idée
> Le paramètre $\lambda$ est l'intensité : on accumule beaucoup d'essais, chacun avec une faible probabilité de succès, à espérance totale $n p_n \approx \lambda$ constante. La loi binomiale devient « lisse » et tend vers une série exponentielle, d'où le facteur $e^{-\lambda}$ qui normalise la somme : $\sum_k e^{-\lambda} \lambda^k / k! = e^{-\lambda} e^{\lambda} = 1$.

## Exemples
> [!example]
> Nombre de désintégrations d'un échantillon radioactif dans un intervalle de temps fixé.
> Nombre d'appels reçus par un standard sur une courte durée, ou nombre de fautes de frappe sur une page.

## Pièges
> [!warning]
> L'approximation exige $n \gg 1$ et $p \ll 1$ **avec** $n p \to \lambda$ ; prendre $n$ grand sans rendre $p$ petit ne donne pas Poisson.
> $\lambda > 0$ est sans dimension mais fixe à la fois l'espérance et la variance : ne pas oublier le facteur $e^{-\lambda}$ en croyant que $\sum_k \lambda^k / k! = 1$.

## Voir aussi
- [[loi-binomiale]]
- [[variable-aleatoire]]

## Notes du cours

- [[14-Lois-discretes-usuelles|概率论 · 14-Lois-discretes-usuelles]]
- [[20-Covariance-variance-d-une-somme-et-lois-usuelles|概率论 · 20-Covariance-variance-d-une-somme-et-lois-usuelles]]
- [[21-Fonctions-generatrices|概率论 · 21-Fonctions-generatrices]]
