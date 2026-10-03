---
title: σ-代数 Tribu (σ-algèbre)
created: 2026-10-03
updated: 2026-10-03
type: concept
tags: [probabilites, tribu, sigma-algebre, evenement]
sources: [概率论 正课手写笔记]
confidence: medium
---

# Tribu (σ-algèbre)

> [!tip] Pourquoi
> Pour définir une probabilité, on veut une famille d'événements sur laquelle les opérations ensemblistes (complément, réunion dénombrable) restent internes, afin que la σ-additivité ait un sens. Sur $\mathbb{R}$ ou $[0,1]$ on ne peut pas prendre toutes les parties : la tribu borélienne est la structure qui rend la mesure bien définie.

> [!note] Définition
> Soit $\Omega$ un ensemble non vide. Une famille $\mathcal{F}\subset\mathcal{P}(\Omega)$ est une **tribu** (ou σ-algèbre) sur $\Omega$ si :
> 1. $\Omega\in\mathcal{F}$ ;
> 2. $A\in\mathcal{F}\Rightarrow A^c\in\mathcal{F}$ ;
> 3. pour toute famille dénombrable $(A_n)_{n\in\mathbb{N}}\subset\mathcal{F}$, $\bigcup_{n\in\mathbb{N}} A_n\in\mathcal{F}$.
>
> Les éléments de $\mathcal{F}$ sont les événements. Le couple $(\Omega,\mathcal{F})$ est un espace probabilisable.

## Intuition
> [!tip] Idée
> Un événement est une question à laquelle on sait répondre oui/non après l'expérience. La tribu est le « catalogue » de toutes les questions qu'on s'autorise à poser ; les trois axiomes disent qu'on peut nier une question, et réunir un nombre dénombrable de questions.

## Exemples
> [!example]
> - $\{\emptyset,\Omega\}$ : plus petite tribu (tribu triviale) ; $\mathcal{P}(\Omega)$ : plus grande tribu.
> - Lancer de dé en observant seulement la parité : $\mathcal{F} = \{\emptyset, \{2,4,6\}, \{1,3,5\}, \Omega\}$.
> - Tribu borélienne $\mathcal{B}(\mathbb{R}) = \sigma(\{\,]-\infty,t] \mid t\in\mathbb{Q}\})$.

## Pièges
> [!warning]
> - Une réunion **quelconque** (non dénombrable) n'est pas en général dans $\mathcal{F}$ ; seule la réunion dénombrable est garantie.
> - L'intersection d'une famille quelconque de tribus est une tribu, mais l'union de deux tribus n'en est pas une en général.
> - $\emptyset\in\mathcal{F}$ automatiquement ($\emptyset = \Omega^c$).

## Voir aussi
- [[tribu-engendree]]
- [[espace-probabilisable]]
- [[mesure-de-probabilite]]
- [[espace-probabilise]]
