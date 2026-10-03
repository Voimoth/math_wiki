---
title: 概率论 · 17 Indépendance de variables aléatoires
created: 2026-10-03
updated: 2026-10-03
type: notes
tags: [probabilites, independance, iid, convolution, loi-binomiale]
sources: [概率论 正课手写笔记]
confidence: medium
---

# 17 Indépendance de variables aléatoires

## 3.4 Indépendance de variables aléatoires

Soit $(\Omega, \mathcal{F}, \mathbb{P})$ un espace probabilisé.

> [!note] Déf. 17.1 (indépendance de deux événements)
> Deux événements $A, B$ sont **indépendants** si $\mathbb{P}(A \cap B) = \mathbb{P}(A) \cdot \mathbb{P}(B)$.
> Plus généralement, $A_1, \dots, A_n$ sont **mutuellement indépendants** si
> $$\forall I \subseteq [\![1, n]\!], \quad \mathbb{P}\left(\bigcap_{i \in I} A_i\right) = \prod_{i \in I} \mathbb{P}(A_i).$$

Pour passer des événements aux variables aléatoires, à un événement $A$ on associe sa variable indicatrice : $A \leftrightarrow \mathbb{1}_A$.

> [!note] Déf. 17.2 (indépendance de deux variables aléatoires)
> Soient $X : (\Omega, \mathcal{F}, \mathbb{P}) \to (\mathbb{R}^n, \mathcal{B}(\mathbb{R}^n))$ et $Y : (\Omega, \mathcal{F}) \to (\mathbb{R}^m, \mathcal{B}(\mathbb{R}^m))$. On dit que $X$ et $Y$ sont **indépendantes**, et on note $X \perp Y$, si
> $$\forall A \in \mathcal{B}(\mathbb{R}^n),\ B \in \mathcal{B}(\mathbb{R}^m), \quad \mathbb{P}(X \in A,\ Y \in B) = \mathbb{P}(X \in A) \cdot \mathbb{P}(Y \in B).$$

> [!info] Rq. 17.3
> Conséquence : si $X \perp Y$ et $\mathbb{P}(Y \in B) > 0$, alors $\mathbb{P}(X \in A \mid Y \in B) = \mathbb{P}(X \in A)$.

> [!info] Prop. 17.4 (indépendance dans le cas discret)
> Si $X$ et $Y$ sont discrètes, alors $X \perp Y$ si et seulement si
> $$\forall x \in X(\Omega),\ y \in Y(\Omega), \quad \mathbb{P}(X = x,\ Y = y) = \mathbb{P}(X = x) \cdot \mathbb{P}(Y = y).$$

**Preuve de la Prop. 17.4.** Le sens $\Rightarrow$ s'obtient en prenant $A = \{x\}$, $B = \{y\}$.
$\Leftarrow$ : réciproquement, posons $D = X(\Omega)$, $D' = Y(\Omega)$, tous deux au plus dénombrables. Pour tous ensembles mesurables $A, B$,
$$\begin{aligned}
\mathbb{P}(X \in A,\ Y \in B) &= \sum_{\substack{x \in A \cap D \\ y \in B \cap D'}} \mathbb{P}(X = x,\ Y = y) \\
&= \sum_{\substack{x \in A \cap D \\ y \in B \cap D'}} \mathbb{P}(X = x)\,\mathbb{P}(Y = y) \\
&= \left(\sum_{x \in A \cap D} \mathbb{P}(X = x)\right)\left(\sum_{y \in B \cap D'} \mathbb{P}(Y = y)\right) \\
&= \mathbb{P}(X \in A)\,\mathbb{P}(Y \in B). \quad \#
\end{aligned}$$

> [!info] Prop. 17.5 (indépendance par les fonctions de répartition, admis)
> Deux variables aléatoires réelles $X, Y$ sont indépendantes si
> $$F_{X,Y}(x, y) = F_X(x)\,F_Y(y), \quad \forall x, y \in \mathbb{R} \iff \mathbb{P}(X \leq x,\ Y \leq y) = \mathbb{P}(X \leq x)\,\mathbb{P}(Y \leq y).$$

> [!info] Prop. 17.6 (indépendance par transformation)
> Soient $X, Y$ deux variables aléatoires indépendantes à valeurs dans $\mathbb{R}^n$, et $f, g : \mathbb{R}^n \to \mathbb{R}^m$ deux applications mesurables. Alors $f(X)$ et $g(Y)$ sont indépendantes.

**Preuve de la Prop. 17.6.** Pour tous ensembles mesurables $A, B \in \mathcal{B}(\mathbb{R}^m)$,
$$\begin{aligned}
\mathbb{P}(f(X) \in A,\ g(Y) \in B) &= \mathbb{P}(X \in f^{-1}(A),\ Y \in g^{-1}(B)) \\
&= \mathbb{P}(X \in f^{-1}(A)) \cdot \mathbb{P}(Y \in g^{-1}(B)) \quad (\text{car } X \perp Y) \\
&= \mathbb{P}(f(X) \in A) \cdot \mathbb{P}(g(Y) \in B). \quad \#
\end{aligned}$$

## Indépendance d'une famille de variables

Soit $I$ un ensemble d'indices.

> [!note] Déf. 17.7
> Soit $(X_i)_{i \in I}$ une famille de variables aléatoires. On dit que $(X_i)_{i \in I}$ sont **mutuellement indépendantes** si, pour toute sous-partie finie $J \subset I$ et tous ensembles mesurables $A_j$ ($j \in J$),
> $$\mathbb{P}\left(\bigcap_{j \in J} \{X_j \in A_j\}\right) = \prod_{j \in J} \mathbb{P}(X_j \in A_j).$$

> [!info] Rq. 17.8
> $(X_i)_{i \in I}$ sont **indépendantes deux à deux** si, pour tout $i \neq j$, $X_i$ et $X_j$ sont indépendantes.
> L'indépendance mutuelle entraîne l'indépendance deux à deux ; mais la réciproque est fausse : deux à deux n'implique pas mutuellement indépendantes.

> [!example] Exemple 17.9 (deux à deux sans indépendance mutuelle)
> Soient $X, Y$ deux variables aléatoires uniformes sur $\{0, 1\}$ avec $\mathbb{P}(X = i,\ Y = j) = \frac{1}{4}$ pour tous $i, j \in \{0, 1\}$ :
>
> | $X \backslash Y$ | $0$ | $1$ |
> | :---: | :---: | :---: |
> | $0$ | $\frac{1}{4}$ | $\frac{1}{4}$ |
> | $1$ | $\frac{1}{4}$ | $\frac{1}{4}$ |
>
> Les lois marginales valent $\mathbb{P}(X = i) = \mathbb{P}(Y = j) = \frac{1}{2}$, donc $\frac{1}{4} = \mathbb{P}(X = i)\,\mathbb{P}(Y = j)$ pour tous $i, j$ : $X \perp Y$.
> On pose $Z = \mathbb{1}_{X = Y}$, de sorte que $\mathbb{P}(Z = 1) = \mathbb{P}(Z = 0) = \frac{1}{2}$. Alors
> $$\mathbb{P}(X = 0,\ Z = 0) = \mathbb{P}(X = 0,\ Y = 1) = \frac{1}{4} = \mathbb{P}(X = 0)\,\mathbb{P}(Z = 0),$$
> $$\mathbb{P}(X = 0,\ Z = 1) = \mathbb{P}(X = 0,\ Y = 0) = \frac{1}{4} = \mathbb{P}(X = 0)\,\mathbb{P}(Z = 1),$$
> et de même pour les deux autres cas ; d'où $X \perp Z$, puis $Y \perp Z$ par symétrie. Ainsi $X, Y, Z$ sont indépendantes deux à deux, mais pas mutuellement indépendantes : en effet
> $$\mathbb{P}(X = 0,\ Y = 0,\ Z = 1) = \frac{1}{4} \neq \frac{1}{8} = \mathbb{P}(X = 0)\,\mathbb{P}(Y = 0)\,\mathbb{P}(Z = 1).$$

> [!info] Prop. 17.10
> Soient $X_1, \dots, X_n$ des variables aléatoires réelles mutuellement indépendantes. Si $f : \mathbb{R}^p \to \mathbb{R}$ et $g : \mathbb{R}^{n-p} \to \mathbb{R}$ sont mesurables, alors les deux variables aléatoires $f(X_1, \dots, X_p)$ et $g(X_{p+1}, \dots, X_n)$ sont indépendantes.

**Preuve de la Prop. 17.10.** Posons $U = (X_1, \dots, X_p)$ et $V = (X_{p+1}, \dots, X_n) \in \mathbb{R}^{n-p}$. Montrons que $U \perp V$. Prenons $A = I_1 \times \dots \times I_p$ et $B = I_{p+1} \times \dots \times I_n$, où les $I_j$ sont des intervalles de $\mathbb{R}$. Par indépendance mutuelle,
$$\mathbb{P}(U \in A,\ V \in B) = \mathbb{P}(X_1 \in I_1, \dots, X_p \in I_p\ ;\ X_{p+1} \in I_{p+1}, \dots, X_n \in I_n)$$
$$= \mathbb{P}(X_1 \in I_1, \dots, X_p \in I_p)\,\mathbb{P}(X_{p+1} \in I_{p+1}, \dots, X_n \in I_n) = \mathbb{P}(U \in A)\,\mathbb{P}(V \in B).$$
Comme les produits d'intervalles engendrent les tribus boréliennes, cette égalité se généralise à tous $A \in \mathcal{B}(\mathbb{R}^p)$, $B \in \mathcal{B}(\mathbb{R}^{n-p})$, donc $U \perp V$. D'après la Prop. 17.6, $f(U)$ et $g(V)$ sont indépendantes. $\#$

> [!note] Thm. 17.11 (existence d'une suite de variables aléatoires indépendantes, admis)
> Pour toute suite $(P_n)$ de lois de probabilité, il existe un espace probabilisé $(\Omega, \mathcal{F}, \mathbb{P})$ et une suite $(X_n)$ de variables aléatoires indépendantes sur cet espace telle que, pour tout $n$, la loi de $X_n$ soit $P_n$.

> [!info] Rq. 17.12 (i.i.d.)
> En pratique, si $P_n = P$ pour tout $n$, on dit que $(X_n)$ est une suite de variables aléatoires **indépendantes et identiquement distribuées** (i.i.d.). Une telle suite modélise une suite d'épreuves identiques à résultats indépendants.

## Applications

### Convolution discrète

Soient $f, g : \mathbb{Z} \to \mathbb{R}$. On définit la **convolution discrète**
$$(f * g)(n) := \sum_{k \in \mathbb{Z}} f(n-k)\,g(k),$$
pour $f, g$ telles que $\sum_{n \in \mathbb{Z}} |f(n)| < +\infty$ et $\sum_{n \in \mathbb{Z}} |g(n)| < +\infty$.

Soient $X, Y$ deux variables aléatoires indépendantes à valeurs dans $\mathbb{Z}$, de lois $p$ et $q$ :
$$\mathbb{P}(X = n) = p(n), \quad \mathbb{P}(Y = n) = q(n), \qquad p, q : \mathbb{Z} \to [0, +\infty[, \qquad \sum_{n \in \mathbb{Z}} p(n) = \sum_{n \in \mathbb{Z}} q(n) = 1.$$
Loi de $X + Y$ : pour tout $n$,
$$\mathbb{P}(X + Y = n) = \sum_{k \in \mathbb{Z}} \mathbb{P}(X + Y = n,\ Y = k) = \sum_{k \in \mathbb{Z}} \mathbb{P}(X = n-k,\ Y = k) \overset{\text{indép.}}{=} \sum_{k \in \mathbb{Z}} p(n-k)\,q(k) = (p * q)(n).$$
Donc la loi de $X + Y$ est la convolution discrète de la loi de $X$ et de la loi de $Y$.

### Loi binomiale

Notation : $\displaystyle\binom{n}{k} = \frac{n!}{k!\,(n-k)!}$ pour $0 \leq k \leq n$.

> [!info] Prop. 17.13
> Soient $X_1, \dots, X_n$ des variables aléatoires indépendantes telles que $X_i \sim \mathrm{Ber}(p)$ avec $p \in ]0, 1[$. Alors $Y = \sum_{k=1}^n X_k \sim \mathcal{B}(n, p)$ : plus précisément,
> $$\mathbb{P}(Y = k) = \binom{n}{k} p^k (1-p)^{n-k}, \quad k \in [\![0, n]\!].$$

**Preuve de la Prop. 17.13 (démonstration combinatoire).** On a $\mathbb{P}(X_i = 1) = p$ et $\mathbb{P}(X_i = 0) = q = 1-p$. La somme $\sum_{k=1}^n X_k$ compte le nombre de succès. Pour $k \in [\![0, n]\!]$, l'événement $\{Y = k\} = \{X_1 + \dots + X_n = k\}$ est l'union disjointe, sur les parties $J \subseteq [\![1, n]\!]$ de cardinal $k$, des événements
$$\left(\bigcap_{i \in J} \{X_i = 1\}\right) \cap \left(\bigcap_{i \notin J} \{X_i = 0\}\right), \qquad \text{de probabilité } \mathbb{P}\left(\bigcap_{i \in J} \{X_i = 1\} \cap \bigcap_{i \notin J} \{X_i = 0\}\right) = p^k q^{n-k}.$$
Il y a $\binom{n}{k}$ telles parties, donc
$$\mathbb{P}(Y = k) = \binom{n}{k} p^k q^{n-k} = \binom{n}{k} p^k (1-p)^{n-k}. \quad \#$$

**Preuve de la Prop. 17.13 (démonstration par récurrence).** On note $P_n$ la propriété : $\mathbb{P}(Y_n = k) = \binom{n}{k} p^k q^{n-k}$ pour $k \in [\![0, n]\!]$, où $Y_n = \sum_{k=1}^n X_k$.

*Initialisation* : pour $n = 1$ et $k \in \{0, 1\}$,
$$\mathbb{P}(Y_1 = k) = \mathbb{P}(X_1 = k) = \begin{cases} q, & \text{si } k = 0 \\ p, & \text{si } k = 1 \end{cases} = \binom{1}{k} p^k q^{1-k},$$
donc $P_1$ est vraie.

*Hérédité* : supposons $P_n$ vraie. On a $Y_{n+1} = Y_n + X_{n+1}$, avec $Y_n$ et $X_{n+1}$ indépendantes. Pour $0 \leq k \leq n+1$,
$$\mathbb{P}(Y_{n+1} = k) = \sum_{j \in \mathbb{Z}} \mathbb{P}(Y_n = j)\,\mathbb{P}(X_{n+1} = k-j) = \mathbb{P}(Y_n = k-1)\,p + \mathbb{P}(Y_n = k)\,q$$
$$= \binom{n}{k-1} p^k q^{n-k+1} + \binom{n}{k} p^k q^{n-k+1} = \binom{n+1}{k} p^k q^{n-k+1},$$
c'est-à-dire $P_{n+1}$. La propriété est donc vraie pour tout $n \geq 1$. $\#$
