---
title: Logique des propositions (Logique et quantificateurs)
created: 2026-10-03
updated: 2026-10-03
type: concept
tags: [probabilites, logique]
sources: [概率论 正课手写笔记]
confidence: medium
---

# Logique des propositions

> [!tip] Pourquoi
> Formaliser les énoncés mathématiques et leurs manipulations : quantifier, combiner, nier une assertion, et surtout distinguer une implication de sa réciproque, de son inverse et de sa contraposée. C'est le langage de base sur lequel reposent toutes les définitions et démonstrations probabilistes.

> [!note] Définition
> Quantificateurs : $\exists x$ (« il existe $x$ ») et $\forall x$ (« pour tout $x$ »).
> Pour deux propositions $P$ et $Q$ :
> - $P \land Q$ : « $P$ et $Q$ » ;
> - $P \lor Q$ : « $P$ ou $Q$ » ;
> - $\neg P$ : « non $P$ », négation de $P$ ;
> - $P \Rightarrow Q$ : « $P$ implique $Q$ », « si $P$ alors $Q$ » ; $P$ est condition suffisante de $Q$, $Q$ est condition nécessaire de $P$ ;
> - $P \Leftrightarrow Q$ : $P$ et $Q$ équivalentes, « $P$ si et seulement si $Q$ » (ssi) ; $P$ est condition nécessaire et suffisante (CNS) de $Q$.

## Intuition
> [!tip] Idée
> Autour de l'implication $P \Rightarrow Q$, quatre énoncés se répondent :
> - réciproque : $Q \Rightarrow P$ ;
> - inverse : $\neg P \Rightarrow \neg Q$ ;
> - contraposée : $\neg Q \Rightarrow \neg P$.
> L'implication et sa contraposée sont logiquement équivalentes ; la réciproque et l'inverse sont équivalents entre eux, mais pas à l'implication. Montrer « $P \Leftrightarrow Q$ » revient à démontrer les deux implications $P \Rightarrow Q$ et $Q \Rightarrow P$.

## Exemples
> [!example]
> Pour prouver une équivalence « $|E| \leq |F| \iff \exists$ injection $E \to F$ », on démontre séparément le sens direct et le sens réciproque.
> Un énoncé faux en général : « $f$ injective $\Rightarrow f$ surjective » ; sa contraposée « $f$ non surjective $\Rightarrow f$ non injective » est équivalente à l'énoncé direct, pas la même chose que l'inverse.

## Pièges
> [!warning]
> Ne pas confondre réciproque et contraposée : seule la contraposée est équivalente à l'implication de départ.
> « $P$ est nécessaire à $Q$ » signifie $Q \Rightarrow P$, et non $P \Rightarrow Q$.
> La négation d'un « pour tout » est un « il existe » (et réciproquement) : $\neg(\forall x,\ P(x)) \equiv \exists x,\ \neg P(x)$.

## Voir aussi
- [[operations-ensemblistes]]
- [[application-et-bijection]]
