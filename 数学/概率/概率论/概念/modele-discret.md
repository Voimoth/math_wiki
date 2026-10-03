---
title: 离散模型 Modèle discret
created: 2026-10-03
updated: 2026-10-03
type: concept
tags: [probabilites, modele-discret, denombrable, probabilite-uniforme]
sources: [概率论 正课手写笔记]
confidence: medium
---

# Modèle discret

> [!tip] Pourquoi
> Cas particulier le plus maniable d'espace de probabilité, où les constructions techniques de $\mathcal{F}$ et $\mathbb{P}$ disparaissent : sur un univers au plus dénombrable, $\mathcal{F} = \mathcal{P}(\Omega)$ et $\mathbb{P}$ n'est fixée que par les poids des singletons.

> [!note] Définition
> Soit $\Omega$ un ensemble au plus dénombrable non vide et $\mathcal{F} = \mathcal{P}(\Omega)$. Une probabilité $\mathbb{P}$ sur $\mathcal{F}$ est **entièrement déterminée** par $p_\omega := \mathbb{P}(\{\omega\})$, $\omega\in\Omega$. Réciproquement, toute famille $(p_\omega)_{\omega\in\Omega}$ avec $p_\omega\geq 0$ et $\sum_{\omega\in\Omega} p_\omega = 1$ donne une probabilité par
> $$\mathbb{P}(A) = \sum_{\omega\in A} p_\omega.$$

## Intuition
> [!tip] Idée
> On n'a qu'à répartir une masse totale $1$ sur les points de $\Omega$ ; la probabilité d'un ensemble est la somme des masses de ses points.

## Exemples
> [!example]
> - Probabilité uniforme sur un ensemble fini : $p_\omega = 1/|\Omega|$, d'où $\mathbb{P}(A) = |A|/|\Omega|$.
> - Paradoxe des anniversaires : $\Omega = \{1,\dots,365\}^n$ avec la probabilité uniforme.

## Pièges
> [!warning]
> - Ce théorème exige $\Omega$ **au plus dénombrable** ; si $\Omega$ est non dénombrable, les $p_\omega = \mathbb{P}(\{\omega\})$ ne suffisent pas à déterminer $\mathbb{P}$ (une probabilité continue peut avoir tous ses $p_\omega = 0$).
> - Les $p_\omega$ doivent sommer à $1$ exactement.

## Voir aussi
- [[probabilite-uniforme]]
- [[espace-probabilise]]
- [[denombrabilite]]

## Notes du cours

- [[07-Modeles-discret-et-continu-p-s|概率论 · 07-Modeles-discret-et-continu-p-s]]
- [[12-Loi-d-une-variable-aleatoire|概率论 · 12-Loi-d-une-variable-aleatoire]]
