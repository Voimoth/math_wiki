---
title: 概率论 · 05 Dénombrabilité et ensembles infinis
created: 2026-10-03
updated: 2026-10-03
type: notes
tags: [probabilites, denombrabilite, cardinalite, cantor]
sources: [概率论 正课手写笔记]
confidence: medium
---

# 05 Dénombrabilité et ensembles infinis

## Image d'un ensemble au plus dénombrable

> [!note] Cor. 5.1
> L'image d'un ensemble au plus dénombrable par une application (quelconque) est au plus dénombrable.

## Produits finis et unions dénombrables

> [!example] Exemple 5.2
> $\mathbb{N}^2$ est dénombrable : on l'énumère en parcourant les diagonales,
> $$(0,0),\ (0,1),\ (1,0),\ (0,2),\ (1,1),\ (2,0),\ \dots$$

> [!note] Thm. 5.3 (utile pour le chapitre 2)
> ① Un produit fini d'ensembles au plus dénombrables est au plus dénombrable.
> ② Si $(A_i)_{i\in I}$ est une famille d'ensembles au plus dénombrables, indicée par un ensemble $I$ au plus dénombrable, alors $\bigcup_{i\in I} A_i$ est au plus dénombrable.

**Preuve :**
① Soient $A,B$ deux ensembles au plus dénombrables. Par le théorème de comparaison, il existe deux injections $f : A\to\mathbb{N}$ et $g : B\to\mathbb{N}$. Alors
$$\varphi : A\times B \to \mathbb{N}^2,\qquad (a,b)\mapsto (f(a),f(b))$$
est injective. Comme $\mathbb{N}^2$ est en bijection avec $\mathbb{N}$, $A\times B$ est au plus dénombrable. Le produit fini
$$A_1\times\cdots\times A_n = ((A_1\times A_2)\times A_3)\times\cdots$$
est alors au plus dénombrable.

② Soit $I$ un ensemble au plus dénombrable et, pour tout $i\in I$, un ensemble $A_i$ au plus dénombrable. On peut lister les éléments de $I$ et ceux des $A_i$ :
$$I = \{i_0, i_1,\dots\},\qquad A_{i_n} = \{a_{n,0}, a_{n,1},\dots\}.$$
Alors $\bigcup_{i\in I} A_i = \{a_{k,j}\}$ est dénombrable. $\#$

> [!note] Cor. 5.4
> $\mathbb{Q}$ est dénombrable, car $\mathbb{Z}\times\mathbb{N}^* \to \mathbb{Q},\ (p,q)\mapsto \dfrac{p}{q}$ est surjective.

> [!example] Exemple 5.5
> $\mathbb{Z}[X]$ est dénombrable, car $\mathbb{Z}[X] = \bigcup_{n\in\mathbb{N}} \mathbb{Z}_n[X]$.

## Ensembles infinis non dénombrables

Question : y a-t-il des ensembles infinis non dénombrables ? Si oui, exemples ?

> [!note] Thm. 5.6 (Cantor)
> Soit $E$ un ensemble quelconque. Il n'existe pas de bijection entre $E$ et $\mathcal{P}(E)$.

**Preuve :** (par l'absurde) Supposons qu'il existe une bijection $\Phi : E\to\mathcal{P}(E)$. On définit
$$A = \{x\in E \mid x\notin \Phi(x)\}.$$
On a $A\in\mathcal{P}(E)$. Mais pour tout $x\in E$ : si $x\in A$, alors $x\notin \Phi(x)$, donc $A\neq\Phi(x)$ ; et si $x\notin A$, alors $x\in\Phi(x)$, donc aussi $A\neq\Phi(x)$. Car $A\neq\Phi(x)$ pour tout $x\in E$, on a $\Phi(E)\neq\mathcal{P}(E)$ : $\Phi$ n'est pas surjective, c'est absurde. $\#$

> [!note] Cor. 5.7
> $\mathcal{P}(\mathbb{N})$ n'est pas dénombrable.

> [!info] Notation 5.8
> $$\{0,1\}^{\mathbb{N}} = \{f : \mathbb{N}\to\{0,1\}\} = \{(d_0,d_1,\dots) \mid \forall i\in\mathbb{N},\ d_i\in\{0,1\}\}.$$
> Évidemment $\{0,1\}^{\mathbb{N}}$ est en bijection avec $\mathcal{P}(\mathbb{N})$, donc il n'est pas dénombrable.

> [!note] Thm. 5.9
> $\mathbb{R}$ n'est pas dénombrable.

**Preuve :** On définit
$$\Phi : \{0,1\}^{\mathbb{N}} \to \mathbb{R},\qquad (d_n)_{n\in\mathbb{N}} \mapsto \sum_{n=0}^{+\infty} \frac{2d_n}{3^{n+1}}.$$
$\Phi$ est injective.

## Voir aussi
- [[denombrabilite]]
- [[ensemble-fini-et-cardinal]]
- [[application-et-bijection]]
