---
title: 概率论 · 20 Covariance, variance d'une somme et lois usuelles
created: 2026-10-03
updated: 2026-10-03
type: notes
tags: [probabilites, covariance, variance, lois-usuelles, markov]
sources: [概率论 正课手写笔记]
confidence: medium
---

# 20 Covariance, variance d'une somme et lois usuelles

## 20.1 Motivation

Soient $X_1,\dots,X_n,\dots$ des variables aléatoires i.i.d. avec $X_j\in L^1(\Omega)$.

- Loi des grands nombres :
$$\frac{X_1+\dots+X_n}{n}\ \xrightarrow[n\to+\infty]{?}\ \mathbb{E}[X_1],$$
soit encore
$$\frac1n\sum_{j=1}^n\bigl(X_j-\mathbb{E}[X_j]\bigr)\ \xrightarrow[n\to+\infty]{}\ 0.$$
- Théorème de la limite centrale : si $X_j\in L^2(\Omega)$,
$$\frac{1}{\sqrt n}\sum_{j=1}^n\frac{X_j-\mathbb{E}[X_j]}{\sigma(X_j)}\ \xrightarrow[n\to+\infty]{\mathcal{L}}\ \mathcal{N}_\mathbb{R}(0,1).$$

## 20.2 Covariance

> [!note] Définition 20.1
> Soient $X,Y$ deux variables aléatoires réelles d'espérance finie. Si la variable
> $$(X-\mathbb{E}[X])\cdot(Y-\mathbb{E}[Y])\in L^1(\Omega),$$
> on appelle covariance de $X$ et $Y$ (on tient compte du couple $(X,Y)$) le nombre
> $$\operatorname{Cov}(X,Y)=\mathbb{E}\bigl[(X-\mathbb{E}[X])(Y-\mathbb{E}[Y])\bigr].$$

Si $X,Y\in L^2(\Omega)$ et $\mathbb{E}[X]=\mathbb{E}[Y]=0$, alors
$$\operatorname{Cov}(X,Y)=\mathbb{E}[XY]=\langle X,Y\rangle.$$
Si de plus $\sigma(X)=\sigma(Y)=1$, alors
$$\operatorname{Cov}(X,Y)=\cos\theta(X,Y).$$

> [!info] Remarque 20.2
> Si $\operatorname{Cov}(X,Y)=0$, on dit que $X$ et $Y$ sont non corrélées.
> Si $X$ et $Y$ sont indépendantes, alors $\operatorname{Cov}(X,Y)=0$.
> Réciproquement, « non corrélées » n'implique pas l'indépendance.

> [!example] Exemple 20.3
> On considère $\Omega=\{-1,0,1\}$ et une variable aléatoire $X$ sur $\Omega$ telle que
> $$\mathbb{P}(X=-1)=\mathbb{P}(X=0)=\mathbb{P}(X=1)=\frac13.$$
> On pose $Y=X^2\in\{0,1\}$, d'où $\mathbb{P}(Y=0)=\frac13$ et $\mathbb{P}(Y=1)=\frac23$.
> Bien sûr, $X$ et $Y$ ne sont pas indépendantes. Mais
> $$\operatorname{Cov}(X,Y)=\mathbb{E}\bigl[(X-\mathbb{E}[X])(Y-\mathbb{E}[Y])\bigr]=\mathbb{E}\Bigl[X^3-\frac23X\Bigr]=0.$$

## 20.3 Variance d'une somme

> [!info] Proposition 20.4
> Soient $X_1,\dots,X_n$ des variables aléatoires de $L^2(\Omega)$. Alors
> $$\operatorname{Var}\left(\sum_{k=1}^nX_k\right)=\sum_{k=1}^n\operatorname{Var}(X_k)+2\sum_{1\le i<j\le n}\operatorname{Cov}(X_i,X_j).$$
> En particulier, si $X_i$ et $X_j$ sont non corrélées pour tous $i\ne j$, alors
> $$\operatorname{Var}\left(\sum_{k=1}^nX_k\right)=\sum_{k=1}^n\operatorname{Var}(X_k).$$

**Preuve :** Notons $m_k=\mathbb{E}[X_k]$ et $m=\sum_{k=1}^nm_k$. Alors
$$\operatorname{Var}\left(\sum_{k=1}^nX_k\right)=\mathbb{E}\Bigl[\Bigl(\sum_{k=1}^n(X_k-m_k)\Bigr)^2\Bigr]=\mathbb{E}\Bigl[\sum_{k,l=1}^n(X_k-m_k)(X_l-m_l)\Bigr]$$
$$=\sum_{k,l=1}^n\mathbb{E}\bigl[(X_k-m_k)(X_l-m_l)\bigr]=\sum_{k=1}^n\operatorname{Var}(X_k)+\sum_{k\ne l}\operatorname{Cov}(X_k,X_l)$$
$$=\sum_{k=1}^n\operatorname{Var}(X_k)+2\sum_{1\le i<j\le n}\operatorname{Cov}(X_i,X_j).\qquad\#$$

## 20.4 Espérances et variances des lois usuelles

> [!example] Exemple 20.5 (lois usuelles)
> **1. Loi uniforme discrète.** $X\sim\mathcal{U}(\{1,\dots,n\})$.
> $$\mathbb{E}[X]=\sum_{k=1}^nk\,\mathbb{P}(X=k)=\sum_{k=1}^nk\cdot\frac1n=\frac{n+1}{2}.$$
> $$\operatorname{Var}(X)=\sum_{k=1}^n\Bigl(k-\frac{n+1}{2}\Bigr)^2\mathbb{P}(X=k)=\frac1n\sum_{k=1}^n\Bigl(k-\frac{n+1}{2}\Bigr)^2=\frac{n^2-1}{12}.$$
>
> **2. Loi uniforme continue.** $X\sim\mathcal{U}([0,1])$.
> $$\mathbb{E}[X]=\int_{-\infty}^{+\infty}x\,dF_X(x)=\int_0^1x\,dx=\frac12.$$
> $$\operatorname{Var}(X)=\mathbb{E}\Bigl[\bigl(X-\tfrac12\bigr)^2\Bigr]=\int_0^1\bigl(x-\tfrac12\bigr)^2dx=\frac{1}{12}.$$
>
> **3. Loi de Bernoulli.** $X\sim\mathcal{B}e(p)$, $p\in\,]0,1[$ ; on note $q=1-p$.
> $$\mathbb{E}[X]=0\cdot q+1\cdot p=p,\qquad \operatorname{Var}(X)=\mathbb{E}\bigl[(X-p)^2\bigr]=pq.$$
>
> **4. Loi binomiale.** $X\sim\mathcal{B}(n,p)$, c'est-à-dire $\mathbb{P}(X=k)=\binom nk p^kq^{n-k}$ pour $0\le k\le n$. Soient $X_1,\dots,X_n$ i.i.d. avec $X_i\sim\mathcal{B}e(p)$ ; alors
> $$\text{Loi}(X_1+\dots+X_n)=\mathcal{B}(n,p),\qquad X\overset{\mathcal{L}}{=}X_1+\dots+X_n.$$
> D'où
> $$\mathbb{E}[X]=\mathbb{E}[X_1+\dots+X_n]=n\,\mathbb{E}[X_1]=np,\qquad \operatorname{Var}(X)=\operatorname{Var}(X_1+\dots+X_n)=n\operatorname{Var}(X_1)=npq.$$
>
> **5. Loi géométrique.** $X\sim\mathcal{G}eom(p)$, $q=1-p$.
> $$\mathbb{E}[X]=\sum_{k=1}^{+\infty}k\,p\,q^{k-1}=\frac{p}{(1-q)^2}=\frac1p.$$
> $$\operatorname{Var}(X)=\sum_{k=1}^{+\infty}\Bigl(k-\frac1p\Bigr)^2p\,q^{k-1}=\frac{q}{p^2}.$$
>
> **6. Loi de Poisson.** $X\sim\mathcal{P}(\lambda)$, $\mathbb{P}(X=n)=\mathrm{e}^{-\lambda}\frac{\lambda^n}{n!}$, $n=0,1,\dots$
> $$\mathbb{E}[X]=\sum_{n=0}^{+\infty}n\,\mathrm{e}^{-\lambda}\frac{\lambda^n}{n!}=\lambda.$$
> $$\operatorname{Var}(X)=\lambda.$$
>
> **7. Loi gaussienne.** $X:\Omega\to\mathbb{R}$ avec
> $$F_X(x)=\mathbb{P}(X\le x)=\frac{1}{\sqrt{2\pi}\sigma}\int_{-\infty}^{x}\mathrm{e}^{-\frac{(t-m)^2}{2\sigma^2}}\,dt,\qquad\sigma>0,\ m\in\mathbb{R}.$$
> Densité de $X$ :
> $$p_X(x)=\frac{1}{\sqrt{2\pi}\sigma}\mathrm{e}^{-\frac{(x-m)^2}{2\sigma^2}}.$$
> On note $X\sim\mathcal{N}(m,\sigma)$ : loi gaussienne de paramètres $m,\sigma$. Alors
> $$\mathbb{E}[X]=\int_{-\infty}^{+\infty}x\,p_X(x)\,dx=\frac{1}{\sqrt{2\pi}\sigma}\int_{-\infty}^{+\infty}x\,\mathrm{e}^{-\frac{(x-m)^2}{2\sigma^2}}\,dx=m,$$
> $$\operatorname{Var}(X)=\int_{-\infty}^{+\infty}(x-m)^2p_X(x)\,dx=\frac{1}{\sqrt{2\pi}\sigma}\int_{-\infty}^{+\infty}(x-m)^2\mathrm{e}^{-\frac{(x-m)^2}{2\sigma^2}}\,dx=\frac{\sigma^2}{\sqrt{2\pi}}\,\Gamma\!\Bigl(\frac32\Bigr)2^{3/2}=\sigma^2.$$

## 20.5 Inégalité de Markov

> [!note] Théorème 20.6 (Inégalité de Markov)
> Soit $X$ une variable aléatoire d'espérance finie. Pour tout $\lambda>0$,
> $$\mathbb{P}(|X|\ge\lambda)\le\frac1\lambda\,\mathbb{E}[|X|].$$

> [!info] Interprétation
> Si $X$ est positive, $0<\mathbb{E}[X]<+\infty$ et $c>0$, alors
> $$\mathbb{P}(X\ge c\,\mathbb{E}[X])\le\frac1c.$$
> Autrement dit, une variable aléatoire positive dépasse rarement son espérance par un facteur grand.

**Preuve :** Appliquer l'inégalité de Markov à $Y=\frac{X}{\mathbb{E}[X]}$ :
$$\mathbb{P}\bigl(X\ge c\,\mathbb{E}[X]\bigr)=\mathbb{P}(Y\ge c)\le\frac{\mathbb{E}[Y]}{c}=\frac1c.\qquad\#$$

## Voir aussi
- [[covariance]]
- [[variance]]
- [[esperance]]
- [[inegalite-de-markov]]
- [[loi-de-bernoulli]]
- [[loi-binomiale]]
- [[loi-geometrique]]
- [[loi-de-poisson]]
