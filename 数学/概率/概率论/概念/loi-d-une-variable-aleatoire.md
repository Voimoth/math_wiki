---
title: Loi d'une variable aléatoire
created: 2026-10-03
updated: 2026-10-03
type: concept
tags: [probabilites, loi, variable-aleatoire]
sources: [概率论 正课手写笔记]
confidence: medium
---

# Loi d'une variable aléatoire

> [!tip] Pourquoi
> Une v.a. $X$ peut être définie sur des espaces très différents ; seul le comportement probabiliste de ses valeurs compte. La **loi** $\mathbb{P}_X$ est l'objet qui transporte toute la probabilité sur l'espace d'arrivée et qui ne dépend que de $X$.

> [!note] Définition
> Soit $X : (\Omega, \mathcal{A}, \mathbb{P}) \to (E, \mathcal{E})$ une v.a. Sa **loi**, notée $\mathbb{P}_X$, est l'application
> $$\begin{aligned} \mathbb{P}_X : \mathcal{E} &\to [0, 1] \\ B &\mapsto \mathbb{P}(X \in B) = \mathbb{P}(X^{-1}(B)). \end{aligned}$$
> Elle est bien définie car $X$ est mesurable, donc $\{X \in B\} \in \mathcal{A}$.

> [!note] Propriété
> $\mathbb{P}_X$ est une mesure de probabilité sur $(E, \mathcal{E})$ : $\mathbb{P}_X(E) = 1$ et $\mathbb{P}_X$ est $\sigma$-additive.

> [!note] Égalité en loi
> Soient $X, Y$ deux v.a. à valeurs dans le même $(E, \mathcal{E})$. On dit qu'elles ont la même loi, ou sont **équidistribuées**, si $\mathbb{P}_X = \mathbb{P}_Y$ ; on écrit $X \overset{\mathcal{L}}{=} Y$ (ou $X \overset{d}{=} Y$).
> $X$ et $Y$ ne sont pas nécessairement définies sur le même espace probabilisé.

## Intuition
> [!tip] Idée
> La loi = « la distribution de masse » que $X$ pousse sur $(E, \mathcal{E})$ à partir de $\mathbb{P}$. Deux v.a. peuvent différer comme applications et avoir la même loi : seule importe la probabilité des valeurs, pas leur réalisation concrète.
> Réciproquement, toute probabilité $\mu$ sur $(E, \mathcal{E})$ est la loi d'une v.a. : prendre $(\Omega, \mathcal{A}, \mathbb{P}) = (E, \mathcal{E}, \mu)$ et $X = id_E$. C'est ce qui justifie qu'« étudier les v.a. » revient souvent à « étudier des probabilités ».

## Exemples
> [!example]
> Si $X = \mathbb{1}_A$ avec $\mathbb{P}(A) = p$, alors $\mathbb{P}_X(\{1\}) = p$ et $\mathbb{P}_X(\{0\}) = 1-p$ : $X$ suit une loi de Bernoulli.
> Si $X$ est une v.a. discrète, sa loi est entièrement déterminée par les poids $\mathbb{P}(X = x)$, $x \in X(\Omega)$, et $\mathbb{P}(X \in B) = \sum_{x \in B \cap X(\Omega)} \mathbb{P}(X = x)$.

## Pièges
> [!warning]
> $X \overset{\mathcal{L}}{=} Y$ n'implique pas $X = Y$ (égalité entre applications) : l'égalité en loi est beaucoup plus faible.
> Deux v.a. à valeurs dans le même espace n'ont pas de « même loi » définie si les espaces d'arrivée (espaces probabilisables) diffèrent.
> Ne pas confondre $\mathbb{P}(X \in B)$ (probabilité, sur $\Omega$) et $\mathbb{P}_X(B)$ (image, sur $E$) : ce sont les mêmes nombres, mais vus de deux espaces distincts.

## Voir aussi
- [[variable-aleatoire]]
- [[mesure-de-probabilite]]
- [[fonction-de-repartition]]

## Notes du cours

- [[12-Loi-d-une-variable-aleatoire|概率论 · 12-Loi-d-une-variable-aleatoire]]
- [[13-Fonction-de-repartition|概率论 · 13-Fonction-de-repartition]]
- [[16-Egalite-presque-sure-loi-conjointe-loi-conditionnelle|概率论 · 16-Egalite-presque-sure-loi-conjointe-loi-conditionnelle]]
- [[17-Independance-de-variables-aleatoires|概率论 · 17-Independance-de-variables-aleatoires]]
- [[18-Esperance-d-une-variable-aleatoire|概率论 · 18-Esperance-d-une-variable-aleatoire]]
