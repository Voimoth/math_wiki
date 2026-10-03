---
title: Inégalité de Markov
created: 2026-10-03
updated: 2026-10-03
type: concept
tags: [probabilites, markov, inegalites, esperance]
sources: [概率论 正课手写笔记]
confidence: medium
---

# Inégalité de Markov

> [!tip] Pourquoi
> Elle borne la probabilité qu'une variable prenne une grande valeur en utilisant seulement $\mathbb{E}[|X|]$, sans connaître la loi. C'est l'inégalité de base des estimations probabilistes (concentration, loi des grands nombres), et une application directe de la positivité de l'espérance.

> [!note] Théorème (Inégalité de Markov)
> Soit $X$ une v.a. d'espérance finie. Pour tout $\lambda>0$,
> $$\mathbb{P}(|X|\ge\lambda)\le\frac1\lambda\,\mathbb{E}[|X|].$$

> [!info] Interprétation
> Si $X$ est positive, $0<\mathbb{E}[X]<+\infty$ et $c>0$, alors
> $$\mathbb{P}\bigl(X\ge c\,\mathbb{E}[X]\bigr)\le\frac1c.$$
> Autrement dit, une v.a. positive dépasse rarement son espérance par un facteur grand.

**Preuve.** Appliquer Markov à $Y=\frac{X}{\mathbb{E}[X]}$ :
$$\mathbb{P}\bigl(X\ge c\,\mathbb{E}[X]\bigr)=\mathbb{P}(Y\ge c)\le\frac{\mathbb{E}[Y]}{c}=\frac1c.\qquad\#$$

## Intuition

> [!tip] Idée
> On compare $|X|$ à $\lambda\,\mathbf{1}_{\{|X|\ge\lambda\}}$, qui est plus petit que $|X|$ et dont l'espérance vaut $\lambda\,\mathbb{P}(|X|\ge\lambda)$ ; la monotonie de l'espérance donne l'inégalité. Plus la valeur $\lambda$ est grande, plus la borne est petite : les grandes valeurs sont peu probables.

## Exemples

> [!example]
> Si $X$ est positive, $\mathbb{P}(X\ge2\,\mathbb{E}[X])\le\frac12$, $\mathbb{P}(X\ge10\,\mathbb{E}[X])\le\frac1{10}$ : au plus une proportion $1/c$ des valeurs dépasse $c$ fois l'espérance.

## Pièges

> [!warning]
> - La borne est **grossière** : elle ne dépend que de l'espérance, jamais de la dispersion. Pour une loi concentrée on obtient une estimation très pessimiste.
> - Nécessite $\mathbb{E}[|X|]<+\infty$.
> - On majore $\mathbb{P}(|X|\ge\lambda)$ (valeur absolue) ; dans le cas positif centré, on peut remplacer par $\mathbb{P}(X\ge\lambda)$.
> - Ne pas la confondre avec l'inégalité de Cauchy--Schwarz ou de Hölder, qui portent sur des moments, non sur des probabilités de dépassement.

## Voir aussi
- [[esperance]]
- [[inegalites-lp]]
- [[variance]]

## Notes du cours

- [[20-Covariance-variance-d-une-somme-et-lois-usuelles|概率论 · 20-Covariance-variance-d-une-somme-et-lois-usuelles]]
- [[22-Loi-faible-des-grands-nombres|概率论 · 22-Loi-faible-des-grands-nombres]]
