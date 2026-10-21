---
title: 概率论 · 04 Coefficient binomial, binôme et dénombrabilité
created: 2026-10-03
updated: 2026-10-03
type: notes
tags: [probabilites, combinaisons, binome, denombrabilite]
sources: [概率论 正课手写笔记]
confidence: medium
---

# 04 Coefficient binomial, binôme et dénombrabilité

## 1.4 Dénombrement (suite)

### Coefficient binomial

> [!note] Théorème 4.1
> Le nombre de $p$-combinaisons d'un ensemble $E$ de cardinal $n$ est donné par $\dfrac{A_n^p}{p!}$.

> [!note] Définition 4.2 (coefficient binomial)
> Pour $n \in \mathbb{N}$ et $p \in \mathbb{N}$, on écrit
> $\dbinom{n}{p} = \dfrac{A_n^p}{p!} = \dfrac{n!}{p!\,(n-p)!}$,
> quantité appelée coefficient binomial, avec la convention $0! = 1$.

> [!info] Remarque
> $\dbinom{n}{0} = 1$, et pour tout $p > n$, $\dbinom{n}{p} = 0$.

### Principe d'inclusion-exclusion

> [!note] Théorème 4.3 (inclusion-exclusion)
> Soient $A_1, \dots, A_n$ $n$ ensembles finis (non nécessairement disjoints). On a
> $$|A_1 \cup \dots \cup A_n| = \sum_{k=1}^n (-1)^{k+1} \sum_{1 \leq r_1 < \dots < r_k \leq n} |A_{r_1} \cap \dots \cap A_{r_k}|.$$

> [!example]
>
> - $n = 2$ : $|A \cup B| = |A| + |B| - |A \cap B|$.
> - $n = 3$ : $|A \cup B \cup C| = |A| + |B| + |C| - |A \cap B| - |B \cap C| - |C \cap A| + |A \cap B \cap C|$.

### Formule du binôme de Newton

> [!note] Théorème 4.4 (binôme de Newton)
> Pour $n \in \mathbb{N}$ et $(a, b) \in \mathbb{C}^2$ (ou dans tout anneau commutatif),
> $$(a+b)^n = \sum_{k=0}^n \binom{n}{k} a^k b^{n-k}.$$

## 1.5 Dénombrabilité

> [!note] Définition 4.5 (ensemble dénombrable)
> Un ensemble $A$ est dénombrable s'il existe une bijection $\mathbb{N} \to A$. Il est dit au plus dénombrable s'il est dénombrable ou fini.

> [!info] Interprétation
> Une bijection $\mathbb{N} \to A$ donne une liste infinie de tous les éléments de $A$, sans répétition : $A = \{a_0, a_1, a_2, \dots\}$ avec $\forall i \neq j,\ a_i \neq a_j$.

> [!example] $\mathbb{Z}$ est dénombrable
> L'application $\varphi : \mathbb{N} \to \mathbb{Z}$ définie par $\varphi(2k) = k$ et $\varphi(2k+1) = -k-1$ pour tout $k \in \mathbb{N}$ est une bijection $\mathbb{N} \to \mathbb{Z}$.

> [!note] Théorème 4.6 (théorème de comparaison)
> Soit $A$ un ensemble. Les propriétés suivantes sont équivalentes :
> 1. $A$ est au plus dénombrable ;
> 2. il existe une injection $A \to \mathbb{N}$ ;
> 3. $A$ est en bijection avec une partie de $\mathbb{N}$.
> Si de plus $A \neq \emptyset$, elles équivalent aussi à : 4. il existe une surjection $\mathbb{N} \to A$.

**Preuve :** ① $\Rightarrow$ ②. Si $A$ est fini, il existe $p \in \mathbb{N}^*$ et une bijection $\varphi : \{1, \dots, p\} \to A$ ; alors $\varphi^{-1}$ donne une bijection $A \to \{1, \dots, p\} \subseteq \mathbb{N}^*$, donc une injection $A \to \mathbb{N}$. Si $A$ est dénombrable, il existe par définition une bijection $\varphi : \mathbb{N} \to A$.

② $\Rightarrow$ ③. Si $f : A \to \mathbb{N}$ est une injection, alors $f : A \to f(A)$ est une bijection vers une partie de $\mathbb{N}$.

③ $\Rightarrow$ ①. Soit $B \subseteq \mathbb{N}$ tel que $A$ soit en bijection avec $B$. Si $B$ est fini, alors $A$ est fini. Si $B$ est infini, on définit $b_0 = \min B$, puis pour tout $n \geq 1$, $b_n = \min \{b \in B \mid b > b_{n-1}\}$. Alors $n \mapsto b_n$ est une bijection $\mathbb{N} \to B$, donc $A$ est dénombrable. $\#$

## Voir aussi
- [[coefficient-binomial]]
- [[inclusion-exclusion]]
- [[arrangement-et-combinaison]]
- [[denombrabilite]]
