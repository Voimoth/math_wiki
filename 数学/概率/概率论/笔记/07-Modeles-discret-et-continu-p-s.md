---
title: 概率论 · 07 Modèles discret et continu, propriétés presque sûres
created: 2026-10-03
updated: 2026-10-03
type: notes
tags: [probabilites, modele-discret, probabilite-uniforme, presque-sur]
sources: [概率论 正课手写笔记]
confidence: medium
---

# 07 Modèles discret et continu, propriétés presque sûres

## Modèle discret

Dans ce cours, on va étudier un cas particulier d'espace de probabilité, pour les constructions techniques de $\mathcal{F}$ et de $\mathbb{P}$.

> [!note] Thm. 7.1
> Soit $\Omega$ un ensemble au plus dénombrable non vide, et soit $\mathcal{F} = \mathcal{P}(\Omega)$. Alors une probabilité (mesure de probabilité) $\mathbb{P}$ sur $\mathcal{F} = \mathcal{P}(\Omega)$ est entièrement déterminée par les valeurs $\mathbb{P}(\{\omega\}) := p_\omega$, $\forall\omega\in\Omega$.
>
> Plus précisément, pour toute famille de nombres $(p_\omega)_{\omega\in\Omega}$ telle que
> $$\forall\omega\in\Omega,\quad p_\omega\geq 0 \quad\text{et}\quad \sum_{\omega\in\Omega} p_\omega = 1,$$
> la formule $\mathbb{P}(A) = \sum_{\omega\in A} p_\omega$ définit une probabilité sur $(\Omega,\mathcal{F})$, et toutes les probabilités sur $(\Omega,\mathcal{F})$ se définissent de cette façon.

**Preuve :** Pour chaque $\mathbb{P}$ sur $\mathcal{P}(\Omega)$ on a la famille $(p_\omega)_{\omega\in\Omega}$. Par la $\sigma$-additivité de $\mathbb{P}$, on a, pour tout $A\subseteq\Omega$,
$$\mathbb{P}(A) = \mathbb{P}\!\left(\bigcup_{\omega\in A}\{\omega\}\right) = \sum_{\omega\in A} p_\omega.$$
Réciproquement, pour chaque famille $(p_\omega)_{\omega\in\Omega}$ telle que $\forall\omega\in\Omega,\ p_\omega\geq 0$ et $\sum_{\omega\in\Omega} p_\omega = 1$, la formule $\mathbb{P}(A) = \sum_{\omega\in A} p_\omega$ définit une probabilité. $\#$

> [!example] Exemple 7.2 (probabilité uniforme sur un ensemble fini)
> Soit $\Omega$ un ensemble fini non vide et $\mathcal{F} = \mathcal{P}(\Omega)$. La probabilité uniforme sur $\Omega$ est définie par $\forall\omega\in\Omega,\ p_\omega = \dfrac{1}{|\Omega|}$. Sous la probabilité uniforme,
> $$\forall A\subseteq\Omega,\quad \mathbb{P}(A) = \frac{|A|}{|\Omega|}.$$

> [!example] Exemple 7.3 (paradoxe des anniversaires)
> Modèle : on considère $n$ personnes dont les anniversaires se trouvent dans les 365 jours d'une année,
> $$\Omega = \{1,2,\dots,365\}^n,\qquad \mathcal{F} = \mathcal{P}(\Omega),\qquad \mathbb{P} = \text{la probabilité uniforme sur } \Omega.$$
> Soit $A =$ « au moins 2 personnes ont le même anniversaire » ; alors $A^c =$ « les $n$ anniversaires sont tous différents ».
>
> Supposons $n\leq 365$ (si $n>365$, par le principe des tiroirs, $A = \Omega$ et $A^c = \emptyset$). On a
> $$A^c = \{(a_1,\dots,a_n) \mid \forall i\neq j,\ a_i\neq a_j\},$$
> c'est l'ensemble des « $n$-arrangements de $\{1,\dots,365\}$ », donc $|A^c| = A_{365}^n = \dfrac{365!}{(365-n)!}$. D'où
> $$\mathbb{P}(A) = 1 - \mathbb{P}(A^c) = 1 - \frac{|A^c|}{|\Omega|} = 1 - \frac{365!}{(365-n)!\,365^n} = 1 - \prod_{k=0}^{n-1}\frac{365-k}{365}.$$
> Le « paradoxe » : $\mathbb{P}(A)$ peut être grand même si $n\ll 365$ ; par exemple $\mathbb{P}(A) > \dfrac{1}{2} \iff n\geq 23$.

## Modèle continu

On choisit un point « au hasard uniformément » dans l'intervalle $[0,1]$.

Modèle : $\Omega = [0,1]$, $\mathcal{F} = \mathcal{B}([0,1])$ (tribu borélienne sur $[0,1]$).

« Choix uniforme » : $\mathbb{P}([a,b]) = b-a$, $\forall\,0\leq a<b\leq 1$. Conséquence de nos hypothèses : $\forall x\in[0,1]$, $\mathbb{P}(\{x\}) = 0$.

On voit une différence entre un événement de probabilité $0$ et un événement impossible.

> [!note] Déf. 7.4 (événement négligeable et propriété presque sûre)
> Soit $A$ un événement.
> - $A$ est négligeable si $\mathbb{P}(A) = 0$.
> - $A$ est presque sûr si $\mathbb{P}(A) = 1$.
> - une propriété (dépendant de $\omega$) est vraie presque sûrement s'il existe un événement $A\in\mathcal{F}$ tel que $\mathbb{P}(A) = 1$ et la propriété est vraie $\forall\omega\in A$.

> [!info] Notation 7.5
> $p.s.$ : presque sûr. $P\text{-}p.s.$ : presque sûr sous la probabilité $P$.

> [!info] Rq. 7.6
> L'union (l'intersection) d'une famille au plus dénombrable d'événements négligeables ($p.s.$) est encore négligeable ($p.s.$). C'est une conséquence de la $\sigma$-additivité de $P$.

> [!note] Thm. 7.7
> Soient $A,B$ deux événements dans un espace probabilisé $(\Omega,\mathcal{F},P)$. Alors :
> 1. $P(\emptyset) = 0$ ;
> 2. si $A_1,\dots,A_n\in\mathcal{F}$ sont deux-à-deux disjoints, alors $P\!\left(\bigcup_{i=1}^n A_i\right) = \sum_{i=1}^n P(A_i)$ ;
> 3. $P(A^c) = 1 - P(A)$ ;
> 4. si $A\subseteq B$ alors $P(A)\leq P(B)$ ;
> 5. $P(A\cup B) = P(A) + P(B) - P(A\cap B)$ ;
> 6. $P\!\left(\bigcup_{n\in\mathbb{N}} A_n\right) \leq \sum_{n\in\mathbb{N}} P(A_n)$.

## Voir aussi
- [[modele-discret]]
- [[probabilite-uniforme]]
- [[presque-sur]]
- [[mesure-de-probabilite]]
- [[tribu-borelienne]]
