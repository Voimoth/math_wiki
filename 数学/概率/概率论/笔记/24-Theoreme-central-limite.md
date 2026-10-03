---
title: 概率论 · 24 Théorème central limite
created: 2026-10-03
updated: 2026-10-03
type: notes
tags: [probabilites, tcl, fonction-caracteristique, convergence-en-loi, loi-gaussienne]
sources: [概率论 正课手写笔记]
confidence: medium
---

# 24 Théorème central limite

> [!info] Position du problème
> Soit $(X_n)$ i.i.d. La loi des grands nombres dit que $\frac{X_1+\dots+X_n}{n}\xrightarrow{p.s.}\mathbb{E}[X_1]=m$, c'est-à-dire $\frac{1}{n}\sum_{j=1}^n(X_j-m)\xrightarrow{p.s.}0$. Le théorème central limite décrit les **fluctuations** autour de cette limite : pour $X_j\in L^2$ de variance $\sigma^2=\mathrm{Var}(X_1)$, on normalise
> $$Y_n=\frac{\sum_{j=1}^n(X_j-m)}{\sqrt{n}\,\sigma},\qquad\text{de sorte que }\mathbb{E}[Y_n]=0,\ \mathrm{Var}(Y_n)=1,$$
> et l'on montre que $Y_n$ converge en loi vers la loi normale centrée réduite.

## Convergence en loi

> [!note] Déf. 24.1 (Convergence en loi)
> Soient $X_1,\dots,X_n$ des variables aléatoires et $X$ une variable aléatoire à valeurs dans $\mathbb{R}$ (définies éventuellement sur des espaces probabilisés différents). On dit que $X_n$ **converge en loi** vers $X$, et on note $X_n\xrightarrow{\mathcal{L}}X$, si pour toute fonction continue bornée $f:\mathbb{R}\to\mathbb{R}$,
> $$\mathbb{E}[f(X_n)]\xrightarrow[n\to+\infty]{}\mathbb{E}[f(X)].$$

> [!info] Rq. (Lecture en termes de mesures)
> La convergence en loi est une notion de convergence faible pour une suite de mesures $\mu_n=\mathrm{loi}(X_n)$ : puisque $\mathbb{E}[f(X_n)]=\int_{\mathbb{R}}f\,d\mu_n=\langle\mu_n,f\rangle$,
> $$X_n\xrightarrow{\mathcal{L}}X\iff\langle\mu_n,f\rangle\to\langle\mu,f\rangle\quad\text{pour tout }f\in C_b(\mathbb{R}).$$

## Fonctions caractéristiques

> [!note] Déf. 24.2 (Fonction caractéristique)
> Soit $X$ une variable aléatoire à valeurs dans $\mathbb{R}^n$. Sa **fonction caractéristique** est l'application $\varphi_X:\mathbb{R}^n\to\mathbb{C}$ définie par
> $$\varphi_X(z):=\mathbb{E}\big[e^{izX}\big].$$

> [!info] Rq.
> Si $\mathrm{loi}(X)=\mu$ est une mesure sur $(\mathbb{R}^n,\mathcal{B}(\mathbb{R}^n))$, alors $\varphi_X(z)=\hat\mu(z)$ est la transformée de Fourier de $\mu$. Pour une variable $X$ à valeurs dans $\mathbb{N}$, on relie $\varphi_X$ et la fonction génératrice $G_X$ par $G_X(t)=\mathbb{E}[t^X]=\mathbb{E}[\exp(X\ln t)]$.

> [!info] Prop. 24.3
> La fonction caractéristique $\varphi_X$ est continue.

> [!info] Prop. 24.4
> Soient $X,Y$ deux variables aléatoires à valeurs dans $\mathbb{R}^n$. Alors
> $$X\overset{\mathcal{L}}{=}Y\iff\varphi_X(z)=\varphi_Y(z)\quad\forall z\in\mathbb{R}^n.$$

> [!info] Prop. 24.5
> Si $X$ et $Y$ sont indépendantes, alors $\varphi_{(X,Y)}(x,y)=\varphi_X(x)\,\varphi_Y(y)$.

**Preuve :** $\varphi_{(X,Y)}(x,y)=\mathbb{E}\big[e^{ixX+iyY}\big]=\mathbb{E}\big[e^{ixX}\cdot e^{iyY}\big]=\mathbb{E}\big[e^{ixX}\big]\cdot\mathbb{E}\big[e^{iyY}\big]=\varphi_X(x)\varphi_Y(y)$, où l'avant-dernière égalité utilise l'indépendance. $\#$

## Théorème de continuité de Lévy

> [!note] Thm. 24.6 (Théorème de continuité de Lévy)
> Soit $X_1,\dots,X_n,\dots$ une suite de variables aléatoires réelles de fonctions caractéristiques $\varphi_{X_n}$. On suppose que pour tout $z\in\mathbb{R}$, $\varphi_{X_n}(z)\to\varphi(z)$. Alors les assertions suivantes sont équivalentes :
> 1) $X_n\xrightarrow{\mathcal{L}}X$ ;
> 2) $\varphi$ est continue ;
> 3) $\varphi$ est la fonction caractéristique d'une variable aléatoire $X$.
>
> En particulier, si $\varphi_{X_n}(z)\to\varphi_X(z)$ pour tout $z\in\mathbb{R}$, alors $X_n\xrightarrow{\mathcal{L}}X$.

## Exemple : la loi gaussienne

> [!example] Exemple 24.7 (Fonction caractéristique de $\mathcal{N}(0,1)$)
> Soit $\xi\sim\mathcal{N}(0,1)$, de densité $p_\xi(x)=\frac{1}{\sqrt{2\pi}}\exp\big(-\frac{x^2}{2}\big)$ et de fonction de répartition $\mathbb{P}(\xi\le x)=\int_{-\infty}^xp_\xi(y)\,dy$. Alors
> $$\varphi_\xi(s)=\mathbb{E}[e^{is\xi}]=\int_{-\infty}^{+\infty}e^{isx}p_\xi(x)\,dx=\frac{1}{\sqrt{2\pi}}\int_{-\infty}^{+\infty}e^{isx-\frac{x^2}{2}}\,dx=e^{-\frac{s^2}{2}}.$$

> [!info] Lemme 24.8
> Si $\xi\sim\mathcal{N}(m,\sigma)$, alors
> $$\varphi_\xi(s)=e^{-\frac{\sigma^2s^2}{2}+ims}.$$

> [!example] Exemple 24.9 (Moments de la loi normale centrée réduite)
> Soit $\xi\sim\mathcal{N}(0,1)$ : $\mathbb{E}[\xi]=0$, $\mathbb{E}[\xi^2]=1$. On développe $\varphi_\xi(s)=e^{-s^2/2}=\sum_{n\ge0}\frac{(-s^2/2)^n}{n!}=\sum_{n\ge0}(-1)^n\frac{s^{2n}}{2^nn!}$, et d'autre part
> $$\varphi_\xi(s)=\mathbb{E}[e^{is\xi}]=\mathbb{E}\bigg[\sum_{k\ge0}\frac{(is\xi)^k}{k!}\bigg]=\sum_{k\ge0}\frac{(is)^k}{k!}\,\mathbb{E}[\xi^k].$$
> En identifiant le terme en $s^{2n}$ (et comme $(-is)^{2n}=(-1)^ns^{2n}$), $\frac{(-1)^n}{(2n)!}\mathbb{E}[\xi^{2n}]=\frac{(-1)^n}{2^nn!}$, d'où
> $$\mathbb{E}[\xi^{2n}]=\frac{(2n)!}{2^nn!}=(2n-1)!!,\qquad\mathbb{E}[\xi^{2n-1}]=0.$$

> [!example] Exemple 24.10 (Somme de gaussiennes indépendantes)
> Soient $\xi_1,\dots,\xi_n$ i.i.d. de loi $\mathcal{N}(0,1)$ et $S_n=\sum_{i=1}^n\xi_i$. Alors
> $$\varphi_{S_n}(t)=\varphi_{\xi_1}(t)^n=e^{-\frac{nt^2}{2}},$$
> donc $S_n\sim\mathcal{N}(0,\sqrt{n})$ (loi normale centrée de variance $n$).

## Théorème central limite

> [!note] Thm. 24.11 (Théorème central limite)
> Soit $(X_n)$ une suite de variables aléatoires i.i.d. avec $X_1\in L^2(\Omega)$. On pose $m=\mathbb{E}[X_1]$, $\sigma^2=\mathrm{Var}(X_1)$ et $S_n=\sum_{j=1}^nX_j$. Alors
> $$\frac{S_n-nm}{\sqrt{n}\,\sigma}\xrightarrow{\mathcal{L}}\xi\sim\mathcal{N}(0,1).$$

**Preuve :** On admet le théorème de continuité de Lévy. On pose $Y_n=\frac{S_n-nm}{\sqrt{n}\,\sigma}$. Alors
$$\varphi_{Y_n}(t)=\mathbb{E}\left[\exp\left(i\frac{t}{\sqrt{n}\,\sigma}\sum_{k=1}^n(X_k-m)\right)\right]=\varphi_1\left(\frac{t}{\sqrt{n}\,\sigma}\right)^n,$$
où $\varphi_1(s)=\mathbb{E}\big[e^{is(X_1-m)}\big]$. Comme $X_1\in L^2(\Omega)$, on en déduit que $\varphi_1\in C^2(\mathbb{R})$ : en effet
$$\varphi_1''(s)=\mathbb{E}\big[-(X_1-m)^2e^{is(X_1-m)}\big],\qquad|\varphi_1''(s)|\le\mathrm{Var}(X_1).$$
Par le développement limité en $0$,
$$\varphi_1(s)=\varphi_1(0)+\varphi_1'(0)\,s+\frac{\varphi_1''(0)}{2}s^2+o(s^2),\qquad s\to0,$$
d'où, avec $s=\frac{t}{\sqrt{n}\,\sigma}$,
$$\varphi_1\left(\frac{t}{\sqrt{n}\,\sigma}\right)=\varphi_1(0)+\varphi_1'(0)\frac{t}{\sqrt{n}\,\sigma}+\frac{\varphi_1''(0)}{2}\frac{t^2}{n\sigma^2}+o\left(\frac{t^2}{n}\right),\qquad n\to\infty.$$
Or $\varphi_1(0)=1$, $\varphi_1'(0)=i\,\mathbb{E}[X_1-m]=0$ et $\varphi_1''(0)=-\mathrm{Var}(X_1)=-\sigma^2$, donc
$$\varphi_1\left(\frac{t}{\sqrt{n}\,\sigma}\right)=1-\frac{t^2}{2n}+\frac{\varepsilon(n)}{n}.$$
Par suite
$$\varphi_{Y_n}(t)=\left(1-\frac{t^2}{2n}+\frac{\varepsilon(n)}{n}\right)^n\xrightarrow[n\to\infty]{}e^{-\frac{t^2}{2}},$$
qui est la fonction caractéristique de $\mathcal{N}(0,1)$. Par le théorème de continuité de Lévy, $Y_n\xrightarrow{\mathcal{L}}\mathcal{N}(0,1)$. $\#$
