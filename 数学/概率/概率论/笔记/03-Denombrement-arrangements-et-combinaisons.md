---
title: 概率论 · 03 Dénombrement, arrangements et combinaisons
created: 2026-10-03
updated: 2026-10-03
type: notes
tags: [probabilites, denombrement, arrangements, combinaisons]
sources: [概率论 正课手写笔记]
confidence: medium
---

# 03 Dénombrement, arrangements et combinaisons

## 1.4 Dénombrement

> [!info] Rappel (principe de bijection)
> Pour deux ensembles finis $E, F$ : s'il existe une bijection $E \to F$, alors $|E| = |F|$.

> [!info] Proposition 3.1 (principe d'addition)
> Soient $A, B$ deux ensembles finis disjoints. Alors $|A \cup B| = |A| + |B|$.

**Preuve :** Posons $n = |A|$ et $m = |B|$ ; il s'agit de construire une bijection $f : [\![1, m+n]\!] \to A \cup B$. $\#$

> [!info] Proposition 3.2 (principe de multiplication)
> Soient $A, B$ deux ensembles finis. Alors $|A \times B| = |A| \cdot |B|$.

**Preuve :** Construire une bijection $f : [\![1, mn]\!] \to A \times B$, où $m = |A|$ et $n = |B|$. $\#$

> [!info] Proposition 3.3 (généralisation)
> Soient $E_1, \dots, E_k$ des ensembles finis. Alors $|E_1 \times \dots \times E_k| = \prod_{i=1}^k |E_i|$.
> En particulier, pour $n \in \mathbb{N}^*$, $|E^n| = |E|^n$, et $|\{0, 1\}^n| = 2^n$.

> [!note] Corollaire 3.4
> Si $E$ et $F$ sont deux ensembles finis, alors $|\{f : E \to F\}| = |F|^{|E|}$.

**Preuve :** Soit $\mathcal{F} = \{f : E \to F\}$ ; on construit une bijection $\varphi : [\![1, |F|^{|E|}]\!] \to \mathcal{F}$. $\#$

> [!note] Corollaire 3.5
> Si $E$ est un ensemble fini, alors $\mathcal{P}(E)$ est fini et $|\mathcal{P}(E)| = 2^{|E|}$.

**Preuve :** La notion de fonction indicatrice définit une bijection $\mathcal{P}(E) \to \{f : E \to \{0, 1\}\}$, $A \mapsto \mathbb{1}_A$. Donc $|\mathcal{P}(E)| = |\{f : E \to \{0, 1\}\}| = 2^{|E|}$. $\#$

### Arrangements et permutations

> [!note] Définition 3.6 ($p$-arrangement)
> Soient $p \in \mathbb{N}^*$ et $E$ un ensemble fini de cardinal $n$. On appelle $p$-arrangement d'éléments de $E$ toute $p$-liste d'éléments de $E$ deux à deux distincts, et on note
> $A_n^p = \operatorname{Card}\left( \{(x_1, \dots, x_p) \in E^p \mid \forall i \neq j,\ x_i \neq x_j\} \right)$.

> [!note] Théorème 3.7
> Pour $n \in \mathbb{N}$ et $p \in \mathbb{N}^*$, on a
> $$A_n^p = \begin{cases} \dfrac{n!}{(n-p)!} & \text{si } p \leq n \\ 0 & \text{si } p > n. \end{cases}$$
> ($n!$ désigne la factorielle de $n$.)

**Preuve :** Si $p > n$, il n'existe pas de $p$-liste à éléments deux à deux distincts dans $E$. Si $p \leq n$, pour construire un $p$-arrangement d'éléments de $E$ on choisit successivement $x_1 \in E$ ($n$ choix), $x_2 \in E \setminus \{x_1\}$ ($n-1$ choix), … , $x_p \in E \setminus \{x_1, \dots, x_{p-1}\}$ ($n-(p-1)$ choix). Par le principe de multiplication,
$$A_n^p = n(n-1)\cdots(n-p+1) = \frac{n!}{(n-p)!}. \quad \#$$

> [!note] Corollaire 3.8
> Soient $E, F$ deux ensembles finis de cardinaux respectifs $p$ et $n$. Alors
> $\operatorname{Card}\{f : E \to F \mid f \text{ injective}\} = A_n^p$.

**Preuve :** Soit $u : [\![1, p]\!] \to E$ une bijection. On a la bijection
$$\varphi : \{p\text{-arrangements d'éléments de } F\} \to \{f : E \to F \text{ injective}\}, \quad (x_1, \dots, x_p) \mapsto \left( f(y) = x_{u^{-1}(y)} \right). \quad \#$$

> [!note] Définition 3.9 (permutation)
> Une permutation d'un ensemble $E$ est une bijection $E \to E$.

> [!info] Remarque
> D'après le Corollaire 2.8(3), lorsque $E$ est fini, une application $f : E \to E$ est bijective si et seulement si elle est injective. Par suite, pour $n = |E|$,
> $|\{\text{permutations de } E\}| = |\{f : E \to E \text{ injective}\}| = A_n^n = n!$.

### Principe de quotient et $p$-combinaisons

> [!note] Lemme 3.10 (principe de quotient)
> Soit $f : E \to F$ une surjection entre deux ensembles finis $E, F$. S'il existe $r \in \mathbb{N}^*$ tel que, pour tout $y \in F$, $|f^{-1}(\{y\})| = r$, alors $|F| = \dfrac{|E|}{r}$.

> [!note] Définition 3.11 ($p$-combinaison)
> Une $p$-combinaison d'éléments de $E$ est un sous-ensemble de $E$ de cardinal $p$.

## Voir aussi
- [[principes-de-denombrement]]
- [[arrangement-et-combinaison]]
- [[ensemble-fini-et-cardinal]]
