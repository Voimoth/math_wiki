---
title: 概率论 · 21 Fonctions génératrices
created: 2026-10-03
updated: 2026-10-03
type: notes
tags: [probabilites, fonction-generatrice, serie-entiere, lois-usuelles]
sources: [概率论 正课手写笔记]
confidence: medium
---

# 21 Fonctions génératrices

## Définition et premières propriétés

> [!note] Déf. 21.1
> Soit $(\Omega,\mathcal{F},\mathbb{P})$ un espace probabilisé et $X:\Omega\to\mathbb{N}$ une variable aléatoire. La **fonction génératrice** de $X$ est l'application $G_X:[-1,1]\to\mathbb{R}$ définie par
> $$G_X(t):=\mathbb{E}[t^X]=\sum_{n=0}^{+\infty}t^n\,\mathbb{P}(X=n).$$

> [!info] Rq.
> Pour $t\in[-1,1]$, la série $\sum_{n\ge0}t^n\mathbb{P}(X=n)$ converge absolument et l'on a $|G_X(t)|\le1$.

> [!info] Rq.
> La fonction $G_X$ est analytique, de rayon de convergence $R\ge1$.

## La fonction génératrice détermine la loi

> [!info] Prop. 21.2
> Pour tout $k\in\mathbb{N}$, on a
> $$\mathbb{P}(X=k)=\frac{G_X^{(k)}(0)}{k!}.$$

**Preuve :** On a $G_X(t)=\sum_{n=0}^{+\infty}t^n\mathbb{P}(X=n)$ : les nombres $\mathbb{P}(X=k)$ sont les coefficients de la série entière. Par unicité des coefficients d'une série entière, $\mathbb{P}(X=k)=\dfrac{G_X^{(k)}(0)}{k!}$. $\#$

## Espérance, variance et dérivabilité en $t=1$

> [!note] Lemme 21.3
> Soit $(a_n)$ une suite de réels positifs ($a_n\ge0$) telle que la série $\sum_{n\ge1}a_n$ converge, et soit $f(t)=\sum_{n=1}^{+\infty}a_nt^n$ la série entière associée. Alors $f:[-1,1]\to\mathbb{R}$ est dérivable en $t=1$ si et seulement si la série $\sum_{n\ge1}na_n$ converge, et l'on a alors
> $$f'(1)=\sum_{n=1}^{+\infty}na_n.$$

**Preuve :** On note $R\ge1$ le rayon de convergence de la série entière $\sum a_nt^n$. La fonction $f$ est lisse pour $|t|<R$ ; en particulier $f'(t)=\sum_{n\ge1}na_nt^{n-1}$. Sans perte de généralité, on suppose $R=1$. Pour tout $t\in[0,1[$,
$$\frac{f(t)-f(1)}{t-1}=\sum_{n=1}^{+\infty}a_n(1+t+\dots+t^{n-1}).$$
- Si $f$ est dérivable en $t=1$, alors pour tout $N\in\mathbb{N}^*$,
$$\sum_{n=1}^{N}a_n(1+t+\dots+t^{n-1})\xrightarrow[t\to1^-]{}\sum_{n=1}^{N}na_n\le f'(1)<+\infty,$$
donc la série $\sum_{n\ge1}na_n$ converge.
- Réciproquement, si $\sum_{n\ge1}na_n$ converge, la fonction $g(t)=\frac{f(t)-f(1)}{t-1}=\sum_{n\ge1}a_n(1+t+\dots+t^{n-1})$ est croissante et majorée par $\sum_{n\ge1}na_n<+\infty$ (car $1+t+\dots+t^{n-1}\le n$ pour $t\le1$). Donc $\lim_{t\to1^-}g(t)$ existe et est finie, autrement dit $f$ est dérivable en $t=1$. $\#$

> [!info] Prop. 21.4
> Soit $X$ une variable aléatoire à valeurs dans $\mathbb{N}$.
> 1) $X$ est d'espérance finie $\iff$ $G_X$ est dérivable en $t=1$ ; on a alors $\mathbb{E}[X]=G_X'(1)$.
> 2) $X$ possède un moment d'ordre $2$ $\iff$ $G_X$ est deux fois dérivable en $t=1$ ; on a alors $\mathbb{E}[X(X-1)]=G_X''(1)$.

Par conséquent,
$$\mathrm{Var}(X)=\mathbb{E}[X^2]-\mathbb{E}[X]^2=\big(G_X''(1)+G_X'(1)\big)-\big(G_X'(1)\big)^2.$$

**Preuve :** On a $G_X(t)=\sum_{n\ge0}t^n\mathbb{P}(X=n)$, d'où
$$G_X'(t)=\sum_{n\ge1}nt^{n-1}\mathbb{P}(X=n),\qquad G_X''(t)=\sum_{n\ge2}n(n-1)t^{n-2}\mathbb{P}(X=n).$$
1) On applique le Lemme 21.3 à $f=G_X$ (avec $a_n=\mathbb{P}(X=n)$) : « $X$ d'espérance finie » équivaut à « $G_X$ dérivable en $1$ », et alors $G_X'(1)=\sum_{n\ge1}n\,\mathbb{P}(X=n)=\mathbb{E}[X]$.
2) De même avec $a_n=n(n-1)\mathbb{P}(X=n)$ : la dérivabilité deux fois en $1$ équivaut à $\sum_{n\ge2}n(n-1)\mathbb{P}(X=n)<+\infty$, c'est-à-dire à l'existence d'un moment d'ordre $2$, et l'on a $G_X''(1)=\mathbb{E}[X(X-1)]$. $\#$

## Fonction génératrice d'une somme de variables indépendantes

> [!info] Prop. 21.5
> 1) Soient $X$ et $Y$ deux variables aléatoires indépendantes à valeurs dans $\mathbb{N}$. Alors, pour tout réel $t$ tel que $G_X(t)$ et $G_Y(t)$ soient définis, $G_{X+Y}(t)$ est défini et
> $$G_{X+Y}(t)=G_X(t)\,G_Y(t).$$
> 2) Plus généralement, si $X_1,\dots,X_n$ sont indépendantes et $X=X_1+\dots+X_n$, alors
> $$G_X(t)=\prod_{k=1}^{n}G_{X_k}(t).$$

**Preuve :** 1) $t^{X+Y}=t^X\cdot t^Y$ est le produit de deux fonctions de deux variables aléatoires indépendantes. D'après la propriété du cours précédent, $t^{X+Y}$ est d'espérance finie et
$$\mathbb{E}[t^{X+Y}]=\mathbb{E}[t^X\cdot t^Y]=\mathbb{E}[t^X]\cdot\mathbb{E}[t^Y]=G_X(t)\,G_Y(t),$$
donc $G_{X+Y}(t)$ existe et vaut $G_X(t)G_Y(t)$. 2) Le même raisonnement. $\#$

## Exemples : fonctions génératrices des lois usuelles

> [!example] Exemple 21.6 (loi de Bernoulli)
> Soit $X\sim\mathrm{Ber}(p)$ et $q=1-p$. Alors $G_X(t)=\mathbb{E}[t^X]=q+pt$, $G_X'(t)=p=\mathbb{E}[X]$, $G_X''(t)=0$, donc $\mathrm{Var}(X)=pq$.

> [!example] Exemple 21.7 (loi binomiale)
> Soit $X\sim B(n,p)$. Comme $X\overset{\mathcal{L}}{=}X_1+\dots+X_n$ avec $X_i\sim\mathrm{Ber}(p)$ indépendantes, la Prop. 21.5 donne $G_X(t)=(q+pt)^n$. Alors $G_X'(t)=np(q+pt)^{n-1}$, $G_X''(t)=n(n-1)p^2(q+pt)^{n-2}$, et
> $$\mathrm{Var}(X)=n(n-1)p^2+np-n^2p^2=npq.$$

> [!example] Exemple 21.8 (loi géométrique)
> Soit $X\sim\mathcal{G}(p)$. Alors
> $$G_X(t)=\sum_{n=1}^{+\infty}t^n\,\mathbb{P}(X=n)=\sum_{n=1}^{+\infty}t^n\,pq^{n-1}=pt\cdot\frac{1}{1-qt}.$$
> D'où $\mathbb{E}[X]=G_X'(1)=\dfrac{p}{(1-qt)^2}\Big|_{t=1}=\dfrac{1}{p}$, puis $G_X''(t)=\dfrac{2pq}{(1-qt)^3}$, $G_X''(1)=\dfrac{2q}{p^2}$, et $\mathrm{Var}(X)=\dfrac{2q}{p^2}+\dfrac{1}{p}-\dfrac{1}{p^2}=\dfrac{q}{p^2}$.

> [!example] Exemple 21.9 (loi de Poisson)
> Soit $X\sim\mathcal{P}(\lambda)$. Alors
> $$G_X(t)=\sum_{n=0}^{+\infty}t^n\,e^{-\lambda}\frac{\lambda^n}{n!}=e^{-\lambda}e^{\lambda t}=e^{\lambda(t-1)}.$$
> On en déduit $G_X'(t)=\lambda e^{\lambda(t-1)}$, donc $\mathbb{E}[X]=G_X'(1)=\lambda$, puis $G_X''(t)=\lambda^2e^{\lambda(t-1)}$ et $\mathrm{Var}(X)=\lambda^2+\lambda-\lambda^2=\lambda$. De plus, si $X_j\sim\mathcal{P}(\lambda_j)$ ($j=1,\dots,n$) sont indépendantes et $X=\sum_{j=1}^nX_j$, alors la Prop. 21.5 donne $G_X(t)=e^{\lambda(t-1)}$ avec $\lambda=\lambda_1+\dots+\lambda_n$, d'où $X\sim\mathcal{P}(\lambda)$.
