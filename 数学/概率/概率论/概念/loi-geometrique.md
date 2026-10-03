---
title: Loi géométrique
created: 2026-10-03
updated: 2026-10-03
type: concept
tags: [probabilites, lois-discretes, geometrique]
sources: [概率论 正课手写笔记]
confidence: medium
---

# Loi géométrique

> [!tip] Pourquoi
> Modéliser le temps d'attente (en nombre d'épreuves) du premier succès dans une suite infinie d'épreuves de Bernoulli indépendantes. Sa propriété d'absence de mémoire en fait l'analogue discret de la loi exponentielle.

> [!note] Définition
> Soit $p \in ]0, 1[$. Une v.a. $X$ à valeurs dans $\mathbb{N}^*$ suit la **loi géométrique** de paramètre $p$ si
> $$\forall k \in \mathbb{N}^*, \quad \mathbb{P}(X = k) = p(1 - p)^{k-1}.$$
> On note $X \sim \mathcal{G}(p)$.

> [!note] Interprétation
> Si $A_1, A_2, \dots$ sont des événements indépendants avec $\mathbb{P}(A_n) = p$ pour tout $n$, alors
> $$X = \inf\{n \in \mathbb{N}^* \mid A_n \text{ est réalisé}\} \sim \mathcal{G}(p) :$$
> $X$ est le rang du premier succès.

> [!note] Propriété (absence de mémoire)
> Soit $X \sim \mathcal{G}(p)$. Pour tout $(k, l) \in (\mathbb{N}^*)^2$ :
> $$\mathbb{P}(X > k) = (1-p)^k, \qquad \mathbb{P}(X > k + l \mid X > k) = \mathbb{P}(X > l).$$

## Intuition
> [!tip] Idée
> Pour atteindre le premier succès au rang $k$, il faut $k-1$ échecs (chacun de probabilité $1-p$) puis un succès ($p$) : d'où $p(1-p)^{k-1}$. Le temps déjà écoulé n'apporte aucune information sur le temps d'attente restant : conditionner à $\{X > k\}$, la durée restante suit encore $\mathcal{G}(p)$.

## Exemples
> [!example]
> Rang du premier « pile » dans une suite de lancers d'une pièce ($p = 1/2$).
> Nombre de tirages avec remise nécessaires pour sortir une boule donnée dans une urne.

## Pièges
> [!warning]
> La convention sur le support varie : ici $X$ compte le **rang** du premier succès, donc $X \in \mathbb{N}^*$ (valeurs $1, 2, \dots$). Certains auteurs comptent le nombre d'échecs **avant** le premier succès ($X \in \mathbb{N}$, support décalé de $1$).
> L'absence de mémoire n'est vraie que pour cette paramétrisation géométrique ; elle échoue pour la loi uniforme, la binomiale, etc.

## Voir aussi
- [[loi-de-bernoulli]]
- [[variable-aleatoire]]
- [[几何级数]]
## Notes du cours

- [[14-Lois-discretes-usuelles|概率论 · 14-Lois-discretes-usuelles]]
- [[20-Covariance-variance-d-une-somme-et-lois-usuelles|概率论 · 20-Covariance-variance-d-une-somme-et-lois-usuelles]]
- [[21-Fonctions-generatrices|概率论 · 21-Fonctions-generatrices]]
