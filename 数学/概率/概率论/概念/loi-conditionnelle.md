---
title: Loi conditionnelle
created: 2026-10-03
updated: 2026-10-03
type: concept
tags: [probabilites, loi-conditionnelle, probabilite-conditionnelle]
sources: [概率论 正课手写笔记]
confidence: medium
---

# Loi conditionnelle

> [!tip] Pourquoi
> Savoir qu'un événement lié à $Y$ est réalisé modifie l'information disponible sur $X$. La loi conditionnelle décrit la loi de $X$ *après* cette information ; elle est le pont entre loi conjointe et indépendance.

> [!note] Définition
> Soient $X : (\Omega, \mathcal{A}) \to (E, \mathcal{E})$, $Y : (\Omega, \mathcal{A}) \to (F, \mathcal{F})$ deux variables aléatoires et $y$ une valeur de $Y$ telle que $\{Y = y\}$ soit mesurable et $\mathbb{P}(Y = y) > 0$. La **loi conditionnelle de $X$ sachant $Y = y$** est définie par
> $$\forall A \in \mathcal{E}, \quad \mathbb{P}_{X \mid Y = y}(A) = \mathbb{P}(X \in A \mid Y = y) = \frac{\mathbb{P}(\{X \in A\} \cap \{Y = y\})}{\mathbb{P}(Y = y)}.$$

## Intuition
> [!tip] Idée
> C'est la probabilité conditionnelle « appliquée à toutes les valeurs possibles de $X$ » : on restreint l'univers à $\{Y = y\}$ et on renormalise par $\mathbb{P}(Y = y)$. La condition $\mathbb{P}(Y = y) > 0$ est indispensable pour diviser.

## Exemples
> [!example]
> On lance deux dés équilibrés ; $X$ est le résultat du premier dé et $S$ la somme. Pour tout $k \in [\![1, 6]\!]$, $\mathbb{P}(X = k \mid S = 7) = \frac{1}{6}$ : la loi conditionnelle de $X$ sachant $\{S = 7\}$ est la loi uniforme, identique à la loi de $X$. C'est un cas particulier de [[independance]] (l'information « $S = 7$ » n'apporte rien sur $X$).

## Pièges
> [!warning]
> La définition exige $\mathbb{P}(Y = y) > 0$ ; pour une valeur de probabilité nulle, la loi conditionnelle ne se définit pas par cette formule.
> Ne pas confondre « conditionner sur un événement » et « conditionner sur une valeur » : la conditionnelle est une *loi* (une mesure de probabilité sur $E$), pas un simple nombre.

## Voir aussi
- [[loi-conjointe]]
- [[independance]]

## Notes du cours

- [[16-Egalite-presque-sure-loi-conjointe-loi-conditionnelle|概率论 · 16-Egalite-presque-sure-loi-conjointe-loi-conditionnelle]]
