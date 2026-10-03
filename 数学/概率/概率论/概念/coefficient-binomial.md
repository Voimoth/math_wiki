---
title: Coefficient binomial et formule du binôme
created: 2026-10-03
updated: 2026-10-03
type: concept
tags: [probabilites, denombrement, combinaisons]
sources: [概率论 正课手写笔记]
confidence: medium
---

# Coefficient binomial et formule du binôme

> [!tip] Pourquoi
> Le coefficient binomial compte les façons de choisir $p$ objets parmi $n$ sans ordre ; il apparaît partout en probabilité discrète (loi binomiale, coefficients de comptage) et dans le développement de $(a+b)^n$.

> [!note] Définition
> Pour $n \in \mathbb{N}$ et $p \in \mathbb{N}$,
> $$\binom{n}{p} = \frac{A_n^p}{p!} = \frac{n!}{p!\,(n-p)!},$$
> appelé coefficient binomial, avec la convention $0! = 1$.
> Formule du binôme de Newton : pour $n \in \mathbb{N}$ et $(a, b) \in \mathbb{C}^2$ (ou dans tout anneau commutatif),
> $$(a+b)^n = \sum_{k=0}^n \binom{n}{k} a^k b^{n-k}.$$

## Intuition
> [!tip] Idée
> $\binom{n}{p}$ = « choisir $p$ parmi $n$ » sans ordre. C'est un entier, bien que défini par des factorielles. La symétrie $\binom{n}{p} = \binom{n}{n-p}$ se lit comme « choisir les $p$ gardés ou les $n-p$ écartés ».

## Exemples
> [!example]
> Pour $n = 2$ : $(a+b)^2 = a^2 + 2ab + b^2$, avec $\binom{2}{1} = 2$.
> $\binom{n}{0} = 1$, $\binom{n}{n} = 1$, $\sum_{k=0}^n \binom{n}{k} = 2^n$ (obtenu en posant $a = b = 1$).

## Pièges
> [!warning]
> Pour tout $p > n$, $\binom{n}{p} = 0$ : les formules avec factorielles ne s'appliquent qu'à $0 \leq p \leq n$.
> Ne pas confondre $\binom{n}{p}$ (sans ordre) et $A_n^p$ (avec ordre).
> La formule du binôme utilise la commutativité : elle vaut dans tout anneau commutatif, mais pas dans un anneau non commutatif.

## Voir aussi
- [[arrangement-et-combinaison]]
- [[inclusion-exclusion]]
