---
title: Tribu borélienne (Borel)
created: 2026-10-03
updated: 2026-10-03
type: concept
tags: [probabilites, tribu-borelienne, mesurabilite]
sources: [概率论 正课手写笔记]
confidence: medium
---

# Tribu borélienne de $\mathbb{R}^n$

> [!tip] Pourquoi
> Pour définir une variable (ou un vecteur) aléatoire, il faut une tribu sur l'espace d'arrivée. Sur $\mathbb{R}^n$ on prend la plus petite tribu contenant les ouverts : elle rend mesurable toute fonction continue, donc tous les calculs usuels ($+$, $-$, produit, $\min$, $\max$, $|\cdot|$).

> [!note] Définition
> La **tribu borélienne** $\mathcal{B}(\mathbb{R}^n)$ est la tribu engendrée par les ouverts de $\mathbb{R}^n$ :
> $$\mathcal{B}(\mathbb{R}^n) = \sigma(\{U : U \text{ ouvert de } \mathbb{R}^n\}).$$
> Elle est aussi engendrée par les pavés $I_1 \times \dots \times I_n$, où les $I_k$ sont des intervalles de $\mathbb{R}$.

## Intuition
> [!tip] Idée
> « Borel » = « construit à partir des ouverts par unions et intersections dénombrables et passage au complémentaire ». Toute partie de $\mathbb{R}^n$ qu'on sait décrire par des inégalités (ouverts, fermés, $]a, b[$, $\{x\}$, etc.) est borélienne. Une application mesurable pour les boréliens est exactement une application dont toutes les images réciproques de « bonnes » parties sont dans la tribu de départ.

## Exemples
> [!example]
> Sur $\mathbb{R}$ : les intervalles, les ouverts, les fermés, les singletons et tout ensemble dénombrable sont boréliens.
> Une fonction continue $f : \mathbb{R}^n \to \mathbb{R}^m$ est mesurable pour $\mathcal{B}(\mathbb{R}^n)$ et $\mathcal{B}(\mathbb{R}^m)$ : l'image réciproque d'un ouvert est ouverte, et l'image réciproque commute avec $\cap$, $\cup$, $^c$.
> Un vecteur aléatoire est une application mesurable $(\Omega, \mathcal{A}) \to (\mathbb{R}^n, \mathcal{B}(\mathbb{R}^n))$.

## Pièges
> [!warning]
> Il existe des parties de $\mathbb{R}^n$ non boréliennes (on ne peut pas prendre « n'importe quelle » partie comme événement).
> Le mot « borélien » dépend de l'espace : les générateurs naturels sont les ouverts, mais aussi les pavés $I_1 \times \dots \times I_n$ — les deux engendrent la même tribu.
> Être mesurable, ce n'est pas être continu : les indicatrices et les fonctions en escalier sont mesurables sans être continues.

## Voir aussi
- [[vecteur-aleatoire]]
- [[operations-ensemblistes]]
