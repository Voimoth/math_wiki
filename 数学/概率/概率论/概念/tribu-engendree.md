---
title: 生成 σ-代数 Tribu engendrée σ(C)
created: 2026-10-03
updated: 2026-10-03
type: concept
tags: [probabilites, tribu, tribu-engendree, borelien]
sources: [概率论 正课手写笔记]
confidence: medium
---

# Tribu engendrée σ(C)

> [!tip] Pourquoi
> On veut souvent la plus petite tribu qui contient une famille d'ensembles donnée (« les événements que l'on sait décrire »), par exemple les intervalles $]-\infty,t]$. On la construit comme intersection de toutes les tribus qui contiennent $C$.

> [!note] Définition
> Soit $C\subset\Omega$ et $(\mathcal{F}_i)_{i\in I}$ la famille des tribus sur $\Omega$ qui contiennent $C$. On définit
> $$\sigma(C) = \bigcap_{i\in I}\mathcal{F}_i.$$
> $\sigma(C)$ est une tribu (intersection de tribus) appelée tribu engendrée par $C$ ; c'est la **plus petite** tribu sur $\Omega$ contenant $C$.

## Intuition
> [!tip] Idée
> $\sigma(C)$ « ferme » la famille $C$ sous complément et réunion dénombrable, sans rien ajouter de superflu : c'est l'engendré au sens minimal.

## Exemples
> [!example]
> Tribu borélienne : $\mathcal{B}(\mathbb{R}) = \sigma(\{\,]-\infty,t] \mid t\in\mathbb{Q}\})$. C'est la tribu sur laquelle on définit les mesures usuelles sur $\mathbb{R}$.

## Pièges
> [!warning]
> - Il faut que la famille $(\mathcal{F}_i)_{i\in I}$ soit non vide : il existe toujours au moins $\mathcal{P}(\Omega)$, qui contient $C$.
> - $\sigma(C)$ dépend de l'ensemble ambiant $\Omega$, pas seulement de $C$.
> - $\sigma(C)$ contient en général bien plus que $C$ et les opérations finies sur $C$.

## Voir aussi
- [[tribu]]
- [[espace-probabilisable]]
- [[mesure-de-probabilite]]

## Notes du cours

- [[06-Espace-probabilisable-et-tribus|概率论 · 06-Espace-probabilisable-et-tribus]]
- [[10-Independance-et-second-lemme-de-Borel-Cantelli|概率论 · 10-Independance-et-second-lemme-de-Borel-Cantelli]]
- [[11-Variables-aleatoires-et-mesurabilite|概率论 · 11-Variables-aleatoires-et-mesurabilite]]
- [[15-Vecteurs-aleatoires-et-tribu-borelienne|概率论 · 15-Vecteurs-aleatoires-et-tribu-borelienne]]
