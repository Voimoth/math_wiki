---
title: 可数性 Dénombrabilité
created: 2026-10-03
updated: 2026-10-03
type: concept
tags: [probabilites, denombrabilite, cardinalite, cantor]
sources: [概率论 正课手写笔记]
confidence: medium
---

# Dénombrabilité (ensembles au plus dénombrables)

> [!tip] Pourquoi
> La σ-additivité ne parle que de familles **dénombrables** ; le modèle discret repose sur un univers $\Omega$ au plus dénombrable. La dénombrabilité est donc la frontière technique naturelle du chapitre.

> [!note] Définition
> Un ensemble $E$ est **au plus dénombrable** s'il est fini ou en bijection avec $\mathbb{N}$ ; **dénombrable** s'il est en bijection avec $\mathbb{N}$. (Théorème de comparaison : $E$ au plus dénombrable ssi il s'injecte dans $\mathbb{N}$.)

> [!info] Propriétés clés
> - Image d'un ensemble au plus dénombrable par une application quelconque : au plus dénombrable.
> - Produit fini d'ensembles au plus dénombrables : au plus dénombrable.
> - Réunion d'une famille au plus dénombrable d'ensembles au plus dénombrables, indicée par un ensemble au plus dénombrable : au plus dénombrable.
> - $\mathbb{N}^2$ est dénombrable (énumération en diagonales) ; $\mathbb{Q}$ est dénombrable (surjection $\mathbb{Z}\times\mathbb{N}^*\to\mathbb{Q}$) ; $\mathbb{Z}[X]$ est dénombrable ($\bigcup_n \mathbb{Z}_n[X]$).

## Intuition
> [!tip] Idée
> « Dénombrable » = on peut tout mettre en liste (indexer par $\mathbb{N}$). Les opérations finies/produits/énumérations dénombrables préservent cette possibilité.

## Exemples
> [!example]
> $\mathbb{Q}$ : $\mathbb{Z}\times\mathbb{N}^*\to\mathbb{Q},\ (p,q)\mapsto p/q$ est surjective, donc $\mathbb{Q}$ est l'image d'un ensemble dénombrable, donc dénombrable.

## Pièges
> [!warning]
> - « Dénombrable » exclut le fini (bijection avec $\mathbb{N}$) ; « au plus dénombrable » l'inclut.
> - Tout ensemble infini contient un sous-ensemble dénombrable, mais tout infini n'est pas dénombrable : $\mathcal{P}(\mathbb{N})$ et $\mathbb{R}$ ne le sont pas (Cantor, argument diagonal / injection $\{0,1\}^{\mathbb{N}}\to\mathbb{R}$, $(d_n)\mapsto\sum 2d_n/3^{n+1}$).

## Voir aussi
- [[mesure-de-probabilite]]
- [[probabilite-uniforme]]
- [[集合的势]]
- [[Schröder-Bernstein定理]]
## Notes du cours

- [[04-Coefficient-binomial-binome-et-denombrabilite|概率论 · 04-Coefficient-binomial-binome-et-denombrabilite]]
- [[05-Ensembles-denombrables-et-indenombrables|概率论 · 05-Ensembles-denombrables-et-indenombrables]]
