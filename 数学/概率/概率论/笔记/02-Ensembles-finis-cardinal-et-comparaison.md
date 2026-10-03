---
title: 概率论 · 02 Ensembles finis, cardinal et comparaison
created: 2026-10-03
updated: 2026-10-03
type: notes
tags: [probabilites, ensembles, cardinal, denombrement]
sources: [概率论 正课手写笔记]
confidence: medium
---

# 02 Ensembles finis, cardinal et comparaison

## 1.3 Ensembles finis et cardinal

> [!info] Notation
> Pour $n \in \mathbb{N}$, on note $[\![1, n]\!] = \{1, 2, \dots, n\}$, avec la convention $[\![1, 0]\!] = \emptyset$.

> [!note] Déf. 2.1 (ensemble fini)
> Un ensemble $E$ est fini s'il existe $n \in \mathbb{N}$ et une bijection $f : [\![1, n]\!] \to E$.

> [!note] Lemme 2.2 (lemme fondamental)
> Soient $(m, n) \in \mathbb{N}^*$. S'il existe une injection $f : [\![1, n]\!] \to [\![1, m]\!]$, alors $n \leq m$.

**Preuve :** (par récurrence sur $m$)

Initialisation : si $m = 0$, alors $[\![1, m]\!]$ est vide. L'application $f : [\![1, n]\!] \to \emptyset$ ne peut exister que si $[\![1, n]\!] = \emptyset$, c'est-à-dire $n = 0$ ; donc $n \leq m$ est vrai.

Hérédité : supposons le résultat vrai pour $m$, et soit $f : [\![1, n]\!] \to [\![1, m+1]\!]$ une injection. Si $n = 0$, alors $n \leq m+1$ et c'est terminé. Supposons $n \geq 1$, et soit $p : [\![1, m+1]\!] \to [\![1, m+1]\!]$ la permutation qui échange $f(n)$ et $m+1$. Alors $g = p \circ f$ est une application $g : [\![1, n]\!] \to [\![1, m+1]\!]$ telle que $g(n) = m+1$, et $g$ est injective. La restriction de $g$ à $[\![1, n-1]\!]$ donne une injection $[\![1, n-1]\!] \to [\![1, m]\!]$. Par hypothèse de récurrence, on a $n-1 \leq m$, donc $n \leq m+1$.

Le résultat est donc vrai pour $m+1$, et le lemme est démontré par récurrence. $\#$

> [!note] Déf. 2.3 (cardinal)
> Soit $E$ un ensemble fini. S'il existe une bijection $f : [\![1, n]\!] \to E$ pour l'entier $n$, alors $n$ est appelé le cardinal de $E$, et on écrit
> $\mathrm{Card}(E) = |E| = \#E = n$.

> [!info] Rq.
> Cette définition pose problème : on ne sait pas a priori si un tel entier $n$ est unique. L'unicité est établie par le lemme suivant.

> [!note] Lemme 2.4 (unicité du cardinal)
> Soit $E$ un ensemble fini. L'entier $n$ tel qu'il existe une bijection $[\![1, n]\!] \to E$ est unique.

**Preuve :** Supposons qu'il existe deux bijections $f : [\![1, n]\!] \to E$ ($n \in \mathbb{N}$) et $g : [\![1, m]\!] \to E$ ($m \in \mathbb{N}$). Alors $g^{-1} \circ f : [\![1, n]\!] \to [\![1, m]\!]$ est une bijection, en particulier une injection, donc $n \leq m$ par le lemme fondamental. De la même façon, $f^{-1} \circ g$ est une injection de $[\![1, m]\!]$ dans $[\![1, n]\!]$, donc $m \leq n$. Ainsi $m = n$, d'où l'unicité de la valeur de $n$. $\#$

Grâce au lemme précédent, la définition du cardinal pour les ensembles finis est bien posée.

> [!info] Rq.
> L'ensemble vide $\emptyset$ est le seul ensemble de cardinal nul.
> Si $|E| = n$, on peut représenter les éléments de $E$ comme une suite ordonnée finie : $E = \{a_1, a_2, \dots, a_n\}$ avec $a_i \neq a_j$ pour tout $i \neq j$.

> [!note] Déf. 2.5 (ensemble infini)
> Un ensemble infini est un ensemble qui n'est pas fini.

> [!example]
> $\mathbb{N}, \mathbb{Z}, \mathbb{Q}, \mathbb{R}, \mathbb{C}$ sont tous des ensembles infinis.

### Théorème de comparaison et corollaires

> [!note] Thm. 2.6 (théorème de comparaison)
> Soient $E, F$ deux ensembles finis.
> 1. $|E| \leq |F|$ ssi il existe une injection $E \to F$.
> 2. $|E| = |F|$ ssi il existe une bijection $E \to F$.
> 3. Si $E \neq \emptyset$, alors $|E| \leq |F|$ ssi il existe une surjection $F \to E$.

**Preuve :** Soient $n = |E|$ et $m = |F|$, et $u : [\![1, n]\!] \to E$, $v : [\![1, m]\!] \to F$ deux bijections.

1. Supposons qu'il existe une injection $f : E \to F$. Alors $v^{-1} \circ f \circ u : [\![1, n]\!] \to [\![1, m]\!]$ est injective ; par le lemme fondamental, $n \leq m$, c'est-à-dire $|E| \leq |F|$. Réciproquement, si $n \leq m$, l'application $i : [\![1, n]\!] \to [\![1, m]\!]$, $k \mapsto k$, est injective, donc $v \circ i \circ u^{-1} : E \to F$ est une injection.

2. Supposons qu'il existe une bijection $f : E \to F$. Puisque $f$ est injective, le point 1. donne $|E| \leq |F|$. De même $f^{-1} : F \to E$ est injective, donc $|F| \leq |E|$, d'où $|E| = |F|$. Réciproquement, si $|E| = |F|$, alors $v \circ u^{-1}$ est une bijection $E \to F$.

3. Supposons $E \neq \emptyset$, c'est-à-dire $n \geq 1$, et soit $g : F \to E$ une surjection. Alors $u^{-1} \circ g \circ v : [\![1, m]\!] \to [\![1, n]\!]$ est surjective ; pour chaque $i \in [\![1, n]\!]$, on pose $r(i) =$ le plus petit élément de $g^{-1}(\{i\})$. L'application $r$ est une injection $[\![1, n]\!] \to [\![1, m]\!]$, donc $|E| \leq |F|$ par le lemme fondamental. Réciproquement, si $n \leq m$, on définit la surjection
$$s : [\![1, m]\!] \to [\![1, n]\!], \quad k \mapsto \begin{cases} k & \text{si } k \leq n \\ 1 & \text{si } k > n, \end{cases}$$
et $u \circ s \circ v^{-1}$ est une surjection $F \to E$. $\#$

> [!note] Cor. 2.7
> Soient $E, F$ deux ensembles finis. S'il existe une injection $E \to F$ et une injection $F \to E$, alors $|E| = |F|$.

> [!note] Cor. 2.8
> Soit $E$ un ensemble fini.
> 1. Si $A \subseteq E$, alors $A$ est fini et $|A| \leq |E|$.
> 2. Si $f : E \to F$ est une application, alors $f(E)$ est fini et $|f(E)| \leq |E|$ ; de plus $|f(E)| = |E|$ si et seulement si $f$ est injective.
> 3. Si $f : E \to E$, alors $f$ est injective si et seulement si $f$ est surjective ; dans ce cas $f$ est bijective.

**Preuve :** Soit $n = |E|$, de sorte que $E = \{a_1, a_2, \dots, a_n\}$.

1. Si $A \subseteq E$, alors $A$ s'écrit $A = \{a_{i_1}, a_{i_2}, \dots, a_{i_p}\}$ avec $1 \leq i_1 < i_2 < \dots < i_p \leq n$ ; donc $A$ est fini et $|A| = p \leq n$.

2. On a $f(E) = \{f(a_1), f(a_2), \dots, f(a_n)\}$, donc $f(E)$ contient au plus $n$ éléments, d'où $|f(E)| \leq n$. On a $|f(E)| = n$ s'il n'y a pas de valeurs répétées parmi $f(a_1), \dots, f(a_n)$, c'est-à-dire si $f$ est injective.

3. $f$ injective $\Rightarrow |f(E)| = |E|$ (car $f : E \to f(E)$ est bijective) $\Rightarrow f(E) = E \Rightarrow f$ surjective. Réciproquement, $f$ surjective $\Rightarrow f(E) = E \Rightarrow |f(E)| = |E| \Rightarrow f$ injective. Donc $f$ est injective ssi $f$ est surjective ; la bijectivité leur est alors équivalente.

> [!warning]
> L'hypothèse « $E$ est fini » est indispensable dans le Cor. 2.8(3). Si $E$ est infini on a le contre-exemple $f : \mathbb{N} \to \mathbb{N}$, $n \mapsto n+1$, qui est injective mais non surjective.

> [!note] Cor. 2.9 (principe des tiroirs)
> Si l'on place $n$ objets dans $m$ tiroirs avec $n > m$, alors au moins un tiroir contient au moins deux objets.

**Preuve :** Soit $f : E \to F$ l'application qui associe à chaque objet le tiroir où il est placé ($E$ = ensemble des objets, $F$ = ensemble des tiroirs). Comme $|E| > |F|$, l'application $f$ n'est pas injective : il existe $y \in F$ et $x_1, x_2 \in E$ tels que $f(x_1) = f(x_2) = y$ avec $x_1 \neq x_2$. $\#$
