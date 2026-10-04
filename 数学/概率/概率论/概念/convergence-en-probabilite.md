---
title: Convergence en probabilité
created: 2026-10-03
updated: 2026-10-03
type: concept
tags: [probabilites, convergence, grands-nombres]
sources: [概率论 正课手写笔记]
confidence: medium
---

# Convergence en probabilité

> [!tip] Pourquoi
> Formaliser « $Y_n$ se rapproche de $Y$ avec une probabilité qui tend vers $1$ ». C'est le mode de convergence le plus faible naturellement rencontré, celui de la loi faible des grands nombres.

> [!note] Définition
> Soit $(Y_n)$ une suite de variables aléatoires et $Y$ une variable aléatoire. On dit que $Y_n$ converge en probabilité vers $Y$, et on note $Y_n\xrightarrow{\mathbb{P}}Y$, si
> $$\forall\varepsilon>0,\qquad\lim_{n\to+\infty}\mathbb{P}(|Y_n-Y|\ge\varepsilon)=0.$$

## Intuition
> [!tip] Idée
> L'écart $|Y_n-Y|$ n'est pas petit pour tout $\omega$, mais la probabilité qu'il dépasse un seuil $\varepsilon$ fixé devient négligeable. On l'obtient par l'inégalité de Chebyshev dès que les variables sont dans $L^2$.

## Exemples
> [!example]
> Loi faible des grands nombres : $\frac{S_n}{n}\xrightarrow{\mathbb{P}}m$ ([[loi-faible-des-grands-nombres]]).

## Pièges
> [!warning]
>
> - La convergence p.s. entraîne la convergence en probabilité, mais la réciproque est fausse ([[convergence-presque-sure]]).
> - La convergence en probabilité n'implique pas la convergence des espérances (sauf uniforme intégrabilité).
> - À ne pas confondre avec la convergence en loi, qui ne suppose même pas que les variables vivent sur le même espace ([[convergence-en-loi]]).

## Voir aussi
- [[inegalite-de-chebyshev]]
- [[convergence-en-loi]]
- [[convergence-presque-sure]]
- [[loi-faible-des-grands-nombres]]

## Notes du cours

- [[22-Loi-faible-des-grands-nombres|概率论 · 22-Loi-faible-des-grands-nombres]]
- [[23-Loi-forte-des-grands-nombres|概率论 · 23-Loi-forte-des-grands-nombres]]
