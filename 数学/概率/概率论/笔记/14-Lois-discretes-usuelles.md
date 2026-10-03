---
title: 概率论 · 14 Lois discrètes usuelles
created: 2026-10-03
updated: 2026-10-03
type: notes
tags: [probabilites, lois-discretes, bernoulli, binomiale, geometrique, poisson]
sources: [概率论 正课手写笔记]
confidence: medium
---

# 14 Lois discrètes usuelles

## 3.2 Lois discrètes usuelles

### Loi uniforme discrète

> [!note] Déf. 14.1
> Soit $E$ un ensemble fini non vide. Une v.a. $X$ à valeurs dans $(E, \mathcal{P}(E))$ suit la loi uniforme sur $E$ si
> $$\forall x \in E, \quad \mathbb{P}(X = x) = \frac{1}{|E|}.$$
> On note alors $X \sim \mathrm{Unif}(E)$ (« $X$ suit la loi uniforme sur $E$ »).

> [!example] Exemple 14.2
> Si $[\![a, b]\!] \subset \mathbb{Z}$ avec $a < b$ et si $X \sim \mathrm{Unif}([\![a, b]\!])$, alors pour tout $a \leq k \leq b$, $\mathbb{P}(X = k) = \dfrac{1}{b - a + 1}$.

### Loi de Bernoulli

> [!note] Déf. 14.3
> Soit $p \in [0, 1]$. Une v.a. à valeurs dans $\{0, 1\}$ suit la loi de Bernoulli de paramètre $p$ si
> $$\mathbb{P}(X = 1) = p, \qquad \mathbb{P}(X = 0) = 1 - p.$$
> On note $X \sim \mathrm{Ber}(p)$ (« $X$ suit la loi de Bernoulli de paramètre $p$ »).

> [!info] Rq. 14.4
> Si $A$ est un événement de probabilité $p$, alors $\mathbb{1}_A \sim \mathrm{Ber}(p)$.

### Loi binomiale

> [!note] Déf. 14.5
> Soient $n \in \mathbb{N}^*$ et $p \in [0, 1]$. Une v.a. à valeurs dans $[\![0, n]\!]$ suit la loi binomiale de paramètres $n$ et $p$ si
> $$\forall k \in [\![0, n]\!], \quad \mathbb{P}(X = k) = \binom{n}{k} p^k (1 - p)^{n-k}.$$
> On note $X \sim \mathcal{B}(n, p)$.

> [!info] Rq. 14.6
> Cette loi est bien définie car $\displaystyle\sum_{k=0}^n \mathbb{P}(X = k) = \sum_{k=0}^n \binom{n}{k} p^k (1 - p)^{n-k} = (p + (1 - p))^n = 1$.

> [!info] Interprétation
> La loi binomiale est la loi du nombre de « succès » de $n$ épreuves (tirages) de Bernoulli indépendantes de même probabilité de succès $p$.
> Autrement dit, si $A_1, \dots, A_n$ sont $n$ événements indépendants avec $\mathbb{P}(A_k) = p$ pour tout $k$, et
> $$X = \mathrm{card}\{k \in [\![1, n]\!] \mid A_k \text{ est réalisé}\} = \sum_{k=1}^n \mathbb{1}_{A_k},$$
> alors $X \sim \mathcal{B}(n, p)$.

### Loi géométrique

> [!note] Déf. 14.7
> Soit $p \in ]0, 1[$. Une v.a. $X$ à valeurs dans $\mathbb{N}^*$ suit la loi géométrique de paramètre $p$ si
> $$\forall k \in \mathbb{N}^*, \quad \mathbb{P}(X = k) = p(1-p)^{k-1}.$$
> On note $X \sim \mathcal{G}(p)$.

> [!info] Interprétation
> $X$ représente le rang (l'indice) du premier succès dans une suite infinie d'épreuves de Bernoulli indépendantes de même probabilité de succès $p$. Autrement dit, si $A_1, A_2, \dots$ sont indépendants avec $\mathbb{P}(A_n) = p$ pour tout $n$, et
> $$X = \inf\{n \in \mathbb{N}^* \mid A_n \text{ est réalisé}\},$$
> alors $X \sim \mathcal{G}(p)$.

> [!info] Prop. 14.8 (absence de mémoire)
> Soit $X \sim \mathcal{G}(p)$. Alors pour tout $(k, l) \in (\mathbb{N}^*)^2$,
> - $\mathbb{P}(X > k) = (1-p)^k$ ;
> - $\mathbb{P}(X > k + l \mid X > k) = \mathbb{P}(X > l)$ : la durée du temps déjà écoulé ne modifie pas la loi du temps d'attente restant.

**Preuve :**

① $\displaystyle\mathbb{P}(X > k) = \mathbb{P}\Big(\bigcup_{n > k} \{X = n\}\Big) = \sum_{n > k} \mathbb{P}(X = n) = \sum_{n > k} p(1-p)^{n-1} = (1-p)^k$.

② $\displaystyle\mathbb{P}(X > k + l \mid X > k) = \frac{\mathbb{P}(X > k + l)}{\mathbb{P}(X > k)} = \frac{(1-p)^{k+l}}{(1-p)^k} = (1-p)^l = \mathbb{P}(X > l)$. $\#$

### Loi de Poisson

> [!note] Déf. 14.9
> Soit $\lambda > 0$. Une v.a. à valeurs dans $\mathbb{N}$ suit la loi de Poisson de paramètre $\lambda$ si
> $$\forall k \in \mathbb{N}, \quad \mathbb{P}(X = k) = e^{-\lambda} \frac{\lambda^k}{k!}.$$
> On note $X \sim \mathcal{P}(\lambda)$.

> [!info] Rq. 14.10
> Cette loi est bien définie car $\displaystyle\sum_{k=0}^{+\infty} e^{-\lambda} \frac{\lambda^k}{k!} = e^{-\lambda} e^{\lambda} = 1$.

> [!info] Motivation (approximation de Poisson)
> Une loi binomiale comportant un grand nombre de tests et une faible probabilité de succès est approximativement une loi de Poisson ($n \gg 1$, $p \ll 1$).

> [!note] Thm. 14.11
> Soit $(p_n)_{n \geq 1}$ une suite telle que $p_n \in [0, 1]$ pour tout $n$ et $n p_n \to \lambda > 0$. Soit $X_n$ une v.a. avec $X_n \sim \mathcal{B}(n, p_n)$. Alors
> $$\forall k \in \mathbb{N}, \quad \mathbb{P}(X_n = k) \longrightarrow e^{-\lambda} \frac{\lambda^k}{k!}.$$

**Preuve :** Pour $n \geq k$,
$$\mathbb{P}(X_n = k) = \binom{n}{k} p_n^k (1-p_n)^{n-k} = \frac{n(n-1)\cdots(n-k+1)}{k!}\, p_n^k \cdot \frac{(1-p_n)^n}{(1-p_n)^k}$$
$$= \frac{1}{k!} \cdot \frac{1}{(1-p_n)^k} \cdot (n p_n)\big[(n-1)p_n\big] \cdots \big[(n-k+1)p_n\big] \cdot (1-p_n)^n \longrightarrow \frac{1}{k!} \cdot 1 \cdot \lambda^k \cdot e^{-\lambda}. \qquad \#$$

> [!info] Rq. 14.12 (vecteurs aléatoires)
> Le chapitre se poursuit par l'étude des vecteurs aléatoires : pour $n \geq 1$ on pose
> $$\mathcal{B}(\mathbb{R}^n) = \sigma\Big(\{I_1 \times \cdots \times I_n \mid I_1, \dots, I_n \text{ sont des intervalles de } \mathbb{R}\}\Big),$$
> tribu borélienne de $\mathbb{R}^n$ (elle contient tous les ouverts et tous les fermés de $\mathbb{R}^n$).


## Voir aussi
- [[loi-uniforme-discrete]]
- [[loi-de-bernoulli]]
- [[loi-binomiale]]
- [[loi-geometrique]]
- [[loi-de-poisson]]
- [[coefficient-binomial]]
- [[probabilite-uniforme]]
