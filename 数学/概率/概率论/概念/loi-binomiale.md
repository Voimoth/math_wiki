---
title: Loi binomiale
created: 2026-10-03
updated: 2026-10-03
type: concept
tags: [probabilites, lois-discretes, binomiale]
sources: [概率论 正课手写笔记]
confidence: medium
---

# Loi binomiale

> [!tip] Pourquoi
> Compter le nombre de succès dans une répétition de $n$ épreuves de Bernoulli **indépendantes** de même paramètre $p$. C'est la loi de tous les « comptages binaires répétés ».

> [!note] Définition
> Soient $n \in \mathbb{N}^*$ et $p \in [0, 1]$. Une v.a. à valeurs dans $[\![0, n]\!]$ suit la **loi binomiale** de paramètres $n$ et $p$ si
> $$\forall k \in [\![0, n]\!], \quad \mathbb{P}(X = k) = \binom{n}{k} p^k (1 - p)^{n-k}.$$
> On note $X \sim \mathcal{B}(n, p)$.

> [!note] Interprétation
> Si $A_1, \dots, A_n$ sont $n$ événements indépendants avec $\mathbb{P}(A_k) = p$ pour tout $k$, alors
> $$X = \mathrm{card}\{k \in [\![1, n]\!] \mid A_k \text{ est réalisé}\} = \sum_{k=1}^n \mathbb{1}_{A_k} \sim \mathcal{B}(n, p).$$

## Intuition
> [!tip] Idée
> Le coefficient $\binom{n}{k}$ compte les choix des $k$ rangs où l'on a un succès ; $p^k$ est la probabilité de ces succès et $(1-p)^{n-k}$ celle des échecs restants. La formule du binôme assure que la somme des poids vaut $(p + (1-p))^n = 1$.

## Exemples
> [!example]
> Nombre de « pile » en $n$ lancers d'une pièce équilibrée : $\mathcal{B}(n, 1/2)$.
> Nombre de boules rouges tirées avec remise dans une urne, sur $n$ tirages.

## Pièges
> [!warning]
> Les épreuves doivent être **indépendantes** et de **même** paramètre $p$ ; sinon la somme des indicatrices n'est pas binomiale.
> Bien distinguer $\mathcal{B}(n, p)$ (loi binomiale, notée aussi $B(n,p)$) de la tribu borélienne $\mathcal{B}(\mathbb{R})$ : la même lettre désigne deux objets sans rapport.

## Voir aussi
- [[loi-de-bernoulli]]
- [[coefficient-binomial]]
- [[loi-de-poisson]]
