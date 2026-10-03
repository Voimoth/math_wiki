---
title: 概率论 · 01 Logique, ensembles et applications
created: 2026-10-03
updated: 2026-10-03
type: notes
tags: [probabilites, logique, ensembles, applications]
sources: [概率论 正课手写笔记]
confidence: medium
---

# 01 Logique, ensembles et applications

## 1.1 Vocabulaire de la logique

> [!info] Notation
> $\exists x$ : il existe $x$.
> $\forall x$ : pour tout $x$.

Soient $P$ et $Q$ deux propositions.

> [!info] Notation
> - $P \land Q$ : « $P$ et $Q$ ».
> - $P \lor Q$ : « $P$ ou $Q$ ».
> - $\neg P$ : « non $P$ », la négation de $P$.
> - $P \Rightarrow Q$ : « $P$ implique $Q$ », « si $P$ alors $Q$ » ; $P$ est une condition suffisante de $Q$, et $Q$ est une condition nécessaire de $P$.
> - $P \Leftrightarrow Q$ : $P$ et $Q$ sont équivalentes, « $P$ si et seulement si $Q$ » (ssi) ; $P$ est une condition nécessaire et suffisante (CNS) de $Q$.

> [!info] Rq.
> Pour l'implication $P \Rightarrow Q$ :
> - $Q \Rightarrow P$ est sa réciproque ;
> - $\neg P \Rightarrow \neg Q$ est son inverse ;
> - $\neg Q \Rightarrow \neg P$ est sa contraposée.

## 1.2 Opérations sur les ensembles

> [!info] Notation (de Bourbaki)
> - $\mathbb{N}$ : l'ensemble des entiers naturels, $\mathbb{N} = \{0, 1, 2, \dots\}$ et $\mathbb{N}^* = \mathbb{N} \setminus \{0\}$.
> - $\mathbb{Z}$ : l'ensemble des entiers relatifs, $\mathbb{Z} = \{\dots, -2, -1, 0, 1, 2, \dots\}$ ; $\geq 0$ : positif (ou nul), $> 0$ : strictement positif.
> - $\mathbb{Q}$ : l'ensemble des nombres rationnels, $\mathbb{Q} = \left\{ \frac{p}{q} \mid p \in \mathbb{Z},\ q \in \mathbb{N}^* \right\}$.
> - $\mathbb{R}$ : l'ensemble des nombres réels.
> - $\mathbb{C}$ : l'ensemble des nombres complexes.

> [!note] Déf. 1.1 (ensemble)
> Un ensemble est une collection d'objets (définition naïve, non axiomatique).
> Deux ensembles sont égaux s'ils contiennent les mêmes objets. L'ensemble vide est noté $\emptyset$.

Soit $E$ un ensemble.

> [!info] Notation
> - $x \in E$ : $x$ appartient à $E$, $x$ est un élément de $E$.
> - $A \subset E$ (ou $A \subseteq E$) : $A$ est inclus dans $E$, $A$ est un sous-ensemble de $E$ ; on dit aussi que $A$ est une partie de $E$.

Soient $A, B$ deux parties de $E$.

> [!note] Déf. 1.2 (opérations ensemblistes)
> - $A \cup B$ : union (réunion) de $A$ et $B$ ;
> - $A \cap B$ : intersection de $A$ et $B$ ;
> - $A^c$ : complémentaire de $A$ (par rapport à $E$) ;
> - $A \setminus B$ : différence de $A$ et $B$ ;
> - $A \Delta B = (A \setminus B) \cup (B \setminus A)$ : différence symétrique de $A$ et $B$.

### Familles de parties, produit cartésien

Soit $I$ un ensemble d'indices et, pour tout $i \in I$, $A_i$ une partie de $E$.

> [!info] Notation
> $(A_i)_{i \in I}$ est la famille de sous-ensembles de $E$ indexée par $I$ ; on note $\bigcup_{i \in I} A_i$ l'union de la famille et $\bigcap_{i \in I} A_i$ l'intersection de la famille.

> [!note] Déf. 1.3 (famille disjointe)
> La famille $(A_i)_{i \in I}$ est disjointe si $\forall i, j \in I$ tels que $i \neq j$, on a $A_i \cap A_j = \emptyset$.

> [!info] Prop. 1.4 (distributivité et complémentaire)
> Pour toute partie $B$ de $E$ :
> $\left(\bigcup_{i \in I} A_i\right) \cap B = \bigcup_{i \in I} (A_i \cap B)$ et $\left(\bigcap_{i \in I} A_i\right) \cup B = \bigcap_{i \in I} (A_i \cup B)$.
> De plus $\left(\bigcup_{i \in I} A_i\right)^c = \bigcap_{i \in I} A_i^c$ et $\left(\bigcap_{i \in I} A_i\right)^c = \bigcup_{i \in I} A_i^c$.

> [!note] Déf. 1.5 (produit cartésien)
> $A \times B = \{ (a, b) \mid a \in A,\ b \in B \}$, où $(a, b)$ est un couple ordonné ; en général $A \times B \neq B \times A$.
> Pour $n \geq 2$, on note $A^n = \underbrace{A \times A \times \dots \times A}_{n \text{ fois}}$.

> [!info] Notation
> $\mathcal{P}(E)$ désigne l'ensemble des sous-ensembles de $E$. Les ensembles $\emptyset$ et $E$ sont appelés les sous-ensembles triviaux de $E$.

> [!note] Déf. 1.6 (fonction indicatrice)
> Pour toute partie $A \subset E$, la fonction indicatrice de $A$ est
> $\mathbb{1}_A : E \to \mathbb{R}$, $x \mapsto \begin{cases} 1 & \text{si } x \in A \\ 0 & \text{si } x \notin A \end{cases}$.
> L'ensemble $E$ est l'ensemble de départ et $\mathbb{R}$ l'ensemble d'arrivée.

### Applications injectives, surjectives, bijectives

> [!note] Déf. 1.7
> Soit $f : E \to F$ une application.
> - $f$ est injective si tout élément de $F$ est l'image d'au plus un élément de $E$ ;
> - $f$ est surjective si tout élément de $F$ est l'image d'au moins un élément de $E$ ;
> - $f$ est bijective si elle est à la fois injective et surjective.

Si $f : E \to F$ est bijective, alors on peut définir son application réciproque $f^{-1} : F \to E$.

> [!note] Déf. 1.8 (image directe, image réciproque)
> Soit $B \subseteq F$ ; l'image réciproque de $B$ par $f$ est $f^{-1}(B)$.
> Soit $A \subseteq E$ ; l'image directe de $A$ par $f$ est $f(A)$.
