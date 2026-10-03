---
title: Loi conjointe et lois marginales
created: 2026-10-03
updated: 2026-10-03
type: concept
tags: [probabilites, loi-conjointe, loi-marginale]
sources: [概率论 正课手写笔记]
confidence: medium
---

# Loi conjointe et lois marginales

> [!tip] Pourquoi
> Connaître séparément la loi de $X$ et celle de $Y$ ne dit pas *comment* elles varient ensemble : on a besoin de la loi du couple $(X, Y)$. La loi conjointe est l'objet qui porte toute l'information sur le couple ; les lois de $X$ et de $Y$ n'en sont que des « projections ».

> [!note] Définition
> La **loi conjointe** des variables aléatoires réelles $X_1, \dots, X_n$ est la loi du vecteur aléatoire $(X_1, \dots, X_n)$ ; on la note $\mathbb{P}_{(X_1, \dots, X_n)}$, mesure de probabilité sur $\mathbb{R}^n$.
> Les lois de $X_1, \dots, X_n$ sont appelées les **lois marginales** du vecteur aléatoire.

## Intuition
> [!tip] Idée
> La loi conjointe répond à toutes les questions du type « $X$ dans $A$ *et* $Y$ dans $B$ ». Récupérer une loi marginale = oublier l'autre coordonnée, ce qui s'écrit en « intégrant » (ou sommant) sur toutes ses valeurs :
> $$\mathbb{P}_X(A) = \mathbb{P}_{(X,Y)}(A \times \mathbb{R}), \qquad \mathbb{P}_Y(B) = \mathbb{P}_{(X,Y)}(\mathbb{R} \times B).$$
> Le passage du joint aux marginales perd de l'information (il efface la dépendance) ; le passage inverse n'est pas possible en général.

## Exemples
> [!example]
> Dans le cas discret, avec $D = X(\Omega)$, $D' = Y(\Omega)$ et $p_{xy} = \mathbb{P}(X = x, Y = y)$ :
> $$\sum_{(x,y) \in D \times D'} p_{xy} = 1, \qquad \mathbb{P}(X = x) = \sum_{y \in D'} p_{xy}, \qquad \mathbb{P}(Y = y) = \sum_{x \in D} p_{xy}.$$
> Les lois marginales s'obtiennent en sommant le tableau à double entrée ligne par ligne (ou colonne par colonne).

## Pièges
> [!warning]
> Connaître les marginales ne détermine pas la loi conjointe : il faut aussi la dépendance (voir [[independance]]).
> Le produit cartésien $\mathbb{P}_{(X,Y)}(A \times B)$ ne suffit pas toujours à reconstituer la loi conjointe sur tout $\mathbb{R}^2$ ; il faut prendre $A, B$ dans la tribu borélienne et utiliser les propriétés de mesure.

## Voir aussi
- [[loi-conditionnelle]]
- [[independance]]

## Notes du cours

- [[16-Egalite-presque-sure-loi-conjointe-loi-conditionnelle|概率论 · 16-Egalite-presque-sure-loi-conjointe-loi-conditionnelle]]
- [[17-Independance-de-variables-aleatoires|概率论 · 17-Independance-de-variables-aleatoires]]
