---
title: 概率论 · 10 Indépendance et deuxième lemme de Borel–Cantelli
created: 2026-10-03
updated: 2026-10-03
type: notes
tags: [probabilites, independance, borel-cantelli]
sources: [概率论 正课手写笔记]
confidence: medium
---

# 10 Indépendance et deuxième lemme de Borel–Cantelli

Deux événements sont indépendants lorsque l'observation de l'un ne change pas la probabilité de l'autre. Cette notion, étendue aux familles, est exactement l'hypothèse qui manque au premier lemme de Borel–Cantelli pour obtenir l'énoncé réciproque : c'est le deuxième lemme.

## Indépendance de deux événements

Deux événements $A,B$ sont indépendants si l'observation de l'un ne change pas la probabilité de l'autre : si $\mathbb{P}(A)>0$, cela signifie $\mathbb{P}(B\mid A)=\mathbb{P}(B)$.

> [!note] Déf. 1.1
> Deux événements $A,B\in\mathcal{F}$ sont indépendants si
> $$\mathbb{P}(A\cap B) = \mathbb{P}(A)\,\mathbb{P}(B).$$

> [!info] Rq. 1.2
>
> 1. La relation d'indépendance entre deux événements est symétrique.
> 2. Si deux événements disjoints sont indépendants, alors au moins l'un des deux est négligeable. En particulier, disjonction et indépendance sont deux notions distinctes.
> 3. Un événement de probabilité $0$ ou $1$ est indépendant de tout événement.
> 4. Si $A,B$ sont indépendants, alors les couples $(A^c,B)$, $(A,B^c)$, $(A^c,B^c)$ sont aussi indépendants.

## Indépendance d'une famille d'événements

> [!note] Déf. 2.1
> Soit $(A_i)_{i\in I}$ une famille d'événements ($\forall i\in I,\ A_i\in\mathcal{F}$).
> - Cette famille est deux à deux indépendante si $\forall i\neq j\in I$, $A_i$ et $A_j$ sont indépendants, c'est-à-dire $\mathbb{P}(A_i\cap A_j)=\mathbb{P}(A_i)\mathbb{P}(A_j)$.
> - Cette famille est mutuellement indépendante si pour tout $J\subset I$ fini, $\mathbb{P}\left(\bigcap_{i\in J} A_i\right) = \prod_{i\in J}\mathbb{P}(A_i)$.

> [!info] Rq. 2.2
> Mutuellement indépendante $\Rightarrow$ deux à deux indépendante ; la réciproque est fausse.

> [!example] Exemple 2.3 (contre-exemple)
> On lance deux pièces de monnaie. Soient $A$ : «la première pièce tombe sur face», $B$ : «la deuxième pièce tombe sur face», $C$ : «les deux pièces tombent sur le même côté». Alors $\mathbb{P}(A)=\mathbb{P}(B)=\mathbb{P}(C)=\frac12$ et
> $$\mathbb{P}(A\cap B)=\mathbb{P}(B\cap C)=\mathbb{P}(C\cap A)=\frac14,\qquad \mathbb{P}(A\cap B\cap C)=\frac14.$$
> Donc $A,B,C$ sont deux à deux indépendants, mais pas mutuellement indépendants, car $\frac14\neq\frac18=\mathbb{P}(A)\mathbb{P}(B)\mathbb{P}(C)$.

> [!info] Rq. 2.4 (piège de vérification)
> Pour vérifier l'indépendance mutuelle d'une famille $(A_1,\dots,A_n)$, il ne suffit pas de vérifier que $\mathbb{P}(A_1\cap\dots\cap A_n)=\mathbb{P}(A_1)\cdots\mathbb{P}(A_n)$ : il faut vérifier la relation pour tout sous-ensemble fini $J$, donc en particulier pour toutes les sous-familles de taille $2,3,\dots,n$.

> [!info] Rq. 2.5
> Si $(A_i)_{i\in I}$ est mutuellement indépendante, alors toute famille $(B_i)_{i\in I}$ de la forme «$B_i=A_i$ ou $B_i=A_i^c$» est encore mutuellement indépendante.

> [!info] Convention
> Dire que des événements sont «indépendants» tout court signifie qu'ils sont «mutuellement indépendants».

## Deuxième lemme de Borel–Cantelli

> [!note] Thm. 3.1 (deuxième lemme de Borel–Cantelli)
> Soit $(A_n)_{n\in\mathbb{N}}$ une suite d'événements indépendants telle que $\displaystyle\sum_{n\in\mathbb{N}}\mathbb{P}(A_n)=+\infty$. Alors
> $$\mathbb{P}\left(\limsup_{n\to\infty} A_n\right) = 1.$$

> [!info] Rq. 3.2 (interprétation)
> Si les probabilités d'une suite d'événements indépendants décroissent assez lentement, alors p.s. une infinité de ces événements sont réalisés.

**Preuve :** On considère l'événement complémentaire
$$\left(\limsup_{n\to\infty} A_n\right)^c = \left(\bigcap_{k\ge1}\left(\bigcup_{n\ge k} A_n\right)\right)^c = \bigcup_{k\ge1}\left(\bigcup_{n\ge k} A_n\right)^c = \bigcup_{k\ge1}\left(\bigcap_{n\ge k} A_n^c\right).$$
Pour chaque $k$, posons $C_k=\bigcap_{n\ge k} A_n^c$. Comme la famille $(A_n)_{n\in\mathbb{N}}$ est indépendante,
$$\mathbb{P}(C_k) = \prod_{n\ge k}\mathbb{P}(A_n^c) = \prod_{n\ge k}(1-\mathbb{P}(A_n)) \le \prod_{n\ge k} \mathrm{e}^{-\mathbb{P}(A_n)} = \mathrm{e}^{-\sum_{n\ge k}\mathbb{P}(A_n)},$$
car $\mathbb{P}(A_n)\in[0,1]$ ; or $\sum_{n\ge k}\mathbb{P}(A_n)=+\infty$, donc $\mathbb{P}(C_k)=0$ pour tout $k$. La suite $(C_k)$ est croissante, donc par continuité de $\mathbb{P}$,
$$\mathbb{P}\left(\bigcup_{k\ge1} C_k\right) = \lim_{k\to\infty}\mathbb{P}(C_k) = 0,$$
et l'on en déduit aussi $\sum_{k\in\mathbb{N}}\mathbb{P}(C_k)=0$. Donc $\mathbb{P}\left(\limsup_{n\to\infty} A_n\right)=1$. $\#$

> [!info] Rq. 3.3
> L'hypothèse d'indépendance est nécessaire : sans elle, le deuxième lemme de Borel–Cantelli est faux.

> [!example] Exemple 3.4 (contre-exemple)
> Soit $A\in\mathcal{F}$ tel que $\mathbb{P}(A)\neq0$ et $\mathbb{P}(A)\neq1$, et posons $A_n=A$ pour tout $n$. Alors $\sum_{n}\mathbb{P}(A_n)=+\infty$, mais $\mathbb{P}\left(\limsup_{n\to\infty} A_n\right)=\mathbb{P}(A)\neq1$.

## Modèle : suite infinie de pile ou face

> [!note] Déf. 4.1 (modèle du pile ou face infini)
> On pose $\Omega=\{0,1\}^{\mathbb{N}^*}$ et $\mathcal{F}=\sigma(C_n)$, où $C_n=\{\omega\in\Omega \mid \omega_n=0\}$ signifie «le $n$-ième lancer tombe sur pile».

> [!info] Rq. 4.2 (interprétation)
> L'expérience aléatoire est une suite infinie de lancers de pièce de monnaie. La tribu $\mathcal{F}=\sigma(C_n)$ est celle des événements observables : on peut observer le résultat des $n$-ièmes lancers, et tous les événements constructibles à partir des $C_n$ par unions et intersections dénombrables. En particulier, tout événement ne dépendant que des $n$ premiers lancers est dans $\mathcal{F}$. Mais $\mathcal{F}$ contient aussi d'autres événements, par exemple
> $$A = \{\text{la pièce tombe sur pile une infinité de fois}\},\qquad B = \left\{\lim_{n\to\infty}\frac{P_n}{n}=\frac12\right\},$$
> où $P_n$ est le nombre de piles parmi les $n$ premiers lancers.

> [!note] Thm. 4.3 (résultat admis)
> Pour tout $p\in[0,1]$, il existe une probabilité $\mathbb{P}:\mathcal{F}\to[0,1]$ telle que
> (i) la famille $(C_n)_{n\in\mathbb{N}^*}$ soit indépendante ;
> (ii) $\mathbb{P}(C_n)=p$ pour tout $n$.
> Dans le cas particulier d'une pièce équilibrée, $p=\frac12$, et pour tout $(\varepsilon_1,\dots,\varepsilon_n)\in\{0,1\}^n$,
> $$\mathbb{P}\left(\{\omega \mid (\omega_1,\dots,\omega_n)=(\varepsilon_1,\dots,\varepsilon_n)\}\right) = \frac{1}{2^n}.$$

## Application du deuxième lemme de Borel–Cantelli

> [!info] Prop. 5.1
> Dans le modèle du pile ou face infini,
> $$\mathbb{P}\left(\{\exists\text{ une infinité de } n\in\mathbb{N}^* \text{ tels que } \omega_n=0\}\right) = 1,$$
> c'est-à-dire p.s. la pièce tombe sur pile une infinité de fois.

**Preuve :** Soit $I=\limsup_{n\to\infty} C_n$. Dans ce modèle, la suite $(C_n)$ est indépendante et $\sum_{n\in\mathbb{N}}\mathbb{P}(C_n)=+\infty$. Le deuxième lemme de Borel–Cantelli donne donc $\mathbb{P}(I)=1$. $\#$


## Voir aussi
- [[independance]]
- [[borel-cantelli]]
- [[limsup-d-evenements]]
- [[probabilite-conditionnelle]]
- [[tribu-engendree]]
- [[espace-probabilise]]
