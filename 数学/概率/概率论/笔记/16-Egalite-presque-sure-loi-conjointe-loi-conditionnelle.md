---
title: 概率论 · 16 Égalité presque sûre, loi conjointe et loi conditionnelle
created: 2026-10-03
updated: 2026-10-03
type: notes
tags: [probabilites, egalite-presque-sure, loi-conjointe, loi-marginale, loi-conditionnelle]
sources: [概率论 正课手写笔记]
confidence: medium
---

# 16 Égalité presque sûre, loi conjointe et loi conditionnelle

> [!note] Déf. 16.1 (égalité presque sûre)
> Deux variables aléatoires $X, Y$ définies sur le même espace de probabilité sont dites **égales presque sûrement** si $\mathbb{P}(X = Y) = 1$, ce qui équivaut à : $\{X \neq Y\}$ est négligeable.

> [!info] Prop. 16.2
> Si $X = Y$ presque sûrement, alors $X \stackrel{\mathcal{L}}{=} Y$ (même loi).

**Preuve de la Prop. 16.2.** Soient $N = \{X \neq Y\} = \{\omega \mid X(\omega) \neq Y(\omega)\}$ et $B \in \mathcal{E}$. Alors
$$\mathbb{P}_X(B) = \mathbb{P}(X \in B) = \mathbb{P}(\{X \in B\} \cap N) + \mathbb{P}(\{X \in B\} \cap N^c).$$
Or $\mathbb{P}(\{X \in B\} \cap N) \leq \mathbb{P}(N) = 0$. De plus, sur $N^c = \{X = Y\}$ on a $\{X \in B\} \cap N^c = \{Y \in B\} \cap N^c$, d'où
$$\mathbb{P}(\{X \in B\} \cap N^c) = \mathbb{P}(\{Y \in B\} \cap N^c) = \mathbb{P}(Y \in B) - \mathbb{P}(\{Y \in B\} \cap N) = \mathbb{P}(Y \in B),$$
car $\mathbb{P}(\{Y \in B\} \cap N) \leq \mathbb{P}(N) = 0$. Finalement
$$\mathbb{P}_X(B) = \mathbb{P}(\{X \in B\} \cap N^c) = \mathbb{P}(\{Y \in B\} \cap N^c) = \mathbb{P}_Y(B),$$
donc $\mathbb{P}_X = \mathbb{P}_Y$, c'est-à-dire $X \stackrel{\mathcal{L}}{=} Y$. $\#$

> [!warning]
> La réciproque est fausse : $X \stackrel{\mathcal{L}}{=} Y$ n'implique pas $X = Y$ presque sûrement.

> [!info] Rq. 16.3 (mesurabilité de $\{X = Y\}$)
> En général, $\{X = Y\}$ n'est pas nécessairement mesurable. Si $X, Y$ sont à valeurs dans $(\mathbb{R}^n, \mathcal{B}(\mathbb{R}^n))$, alors $\{X = Y\} = \{X - Y = 0_{\mathbb{R}^n}\}$ est mesurable (image réciproque d'un fermé par l'application mesurable $X - Y$). Dans le cas général, on définit $X = Y$ p.s. par : $\exists A \in \mathcal{A}$ tel que $A \subset \{X = Y\}$ et $\mathbb{P}(A) = 1$.

## Loi conjointe et lois marginales

> [!note] Déf. 16.4 (loi conjointe)
> La **loi conjointe** des variables aléatoires réelles $X_1, \dots, X_n$ est la loi du vecteur aléatoire $(X_1, \dots, X_n)$ ; on la note $\mathbb{P}_{(X_1, \dots, X_n)}$ (mesure de probabilité sur $\mathbb{R}^n$). Dans ce contexte, les lois de $X_1, \dots, X_n$ sont appelées les **lois marginales** du vecteur aléatoire.

> [!info] Rq. 16.5
> Pour $A, B \in \mathcal{B}(\mathbb{R})$ et $X, Y$ deux variables aléatoires réelles :
> $$\mathbb{P}_{(X,Y)}(A \times B) = \mathbb{P}(X \in A \text{ et } Y \in B), \qquad \mathbb{P}_X(A) = \mathbb{P}_{(X,Y)}(A \times \mathbb{R}), \qquad \mathbb{P}_Y(B) = \mathbb{P}_{(X,Y)}(\mathbb{R} \times B).$$

> [!info] Prop. 16.6 (cas discret)
> Soient $X, Y$ deux variables aléatoires discrètes, $D = X(\Omega)$ et $D' = Y(\Omega)$ (au plus dénombrables), et $p_{xy} = \mathbb{P}(X = x, Y = y)$ pour $(x, y) \in D \times D'$. Alors
> $$\sum_{(x,y) \in D \times D'} p_{xy} = 1, \qquad \forall x \in D,\ \mathbb{P}(X = x) = \sum_{y \in D'} p_{xy}, \qquad \forall y \in D',\ \mathbb{P}(Y = y) = \sum_{x \in D} p_{xy}.$$

**Preuve de la Prop. 16.6.**
$$\mathbb{P}(Y = y) = \mathbb{P}\left(\bigsqcup_{x \in D} \{X = x,\ Y = y\}\right) = \sum_{x \in D} \mathbb{P}(X = x,\ Y = y),$$
et de même pour la loi marginale de $X$. $\#$

## Loi conditionnelle sachant une valeur de probabilité positive

> [!note] Déf. 16.7 (loi conditionnelle)
> Soient $X, Y$ deux variables aléatoires, avec $X : (\Omega, \mathcal{A}) \to (E, \mathcal{E})$, $Y : (\Omega, \mathcal{A}) \to (F, \mathcal{F})$, et $y$ une valeur de $Y$ telle que $\{Y = y\}$ soit mesurable et $\mathbb{P}(Y = y) > 0$. La **loi conditionnelle de $X$ sachant $Y = y$** est définie par
> $$\forall A \in \mathcal{E}, \quad \mathbb{P}_{X \mid Y = y}(A) = \mathbb{P}(X \in A \mid Y = y) = \frac{\mathbb{P}(\{X \in A\} \cap \{Y = y\})}{\mathbb{P}(Y = y)}.$$

> [!example] Exemple 16.8 (deux dés équilibrés)
> On lance deux dés équilibrés. Soient $X$ le résultat du premier dé ($\in [\![1, 6]\!]$) et $S$ la somme des résultats des deux dés ($\in [\![2, 12]\!]$). Considérons l'événement $\{S = 7\}$. Pour tout $k \in [\![1, 6]\!]$,
> $$\mathbb{P}(X = k,\ S = 7) = \mathbb{P}(X = k,\ S - X = 7-k) = \mathbb{P}(X = k)\,\mathbb{P}(S - X = 7-k) = \left(\frac{1}{6}\right)^2,$$
> car $S - X$ (résultat du second dé) est indépendant de $X$ et uniforme sur $[\![1, 6]\!]$. Donc
> $$\mathbb{P}(X = k \mid S = 7) = \frac{\frac{1}{36}}{\frac{1}{6}} = \frac{1}{6},$$
> c'est-à-dire que la loi conditionnelle $\mathbb{P}_{X \mid S = 7}$ est la loi uniforme sur $[\![1, 6]\!]$ :
> $$\mathbb{P}_{X \mid S = 7} = \mathbb{P}_X = \mathrm{Unif}\,[\![1, 6]\!].$$


## Voir aussi
- [[egalite-presque-sure]]
- [[presque-sur]]
- [[loi-conjointe]]
- [[loi-conditionnelle]]
- [[probabilite-conditionnelle]]
- [[vecteur-aleatoire]]
- [[loi-d-une-variable-aleatoire]]
