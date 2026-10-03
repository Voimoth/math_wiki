---
title: 概率论 · 22 Loi faible des grands nombres
created: 2026-10-03
updated: 2026-10-03
type: notes
tags: [probabilites, grands-nombres, inegalite-de-markov, inegalite-de-chebyshev, convergence-en-probabilite]
sources: [概率论 正课手写笔记]
confidence: medium
---

# 22 Loi faible des grands nombres

> [!info] Position du problème
> Soit $(X_n)$ une suite de variables aléatoires i.i.d. La moyenne empirique $\frac{1}{n}\sum_{k=1}^nX_k$ se rapproche-t-elle de l'espérance $\mathbb{E}[X_1]$ ? C'est l'objet des lois des grands nombres : la loi faible décrit la convergence en probabilité, la loi forte la convergence presque sûre.

## Inégalités de Markov et de Chebyshev

> [!note] Thm. 22.1 (Inégalité de Markov)
> Soit $X$ une variable aléatoire admettant une espérance finie. Pour tout $\lambda>0$,
> $$\mathbb{P}(|X|\ge\lambda)\le\frac{\mathbb{E}[|X|]}{\lambda}.$$

**Preuve :** Pour tout $\omega\in\Omega$, $\mathbb{1}_{|X|\ge\lambda}\le\dfrac{|X|}{\lambda}\mathbb{1}_{|X|\ge\lambda}$. En prenant l'espérance et par linéarité,
$$\mathbb{E}[|X|]\ge\lambda\,\mathbb{E}[\mathbb{1}_{|X|\ge\lambda}]=\lambda\,\mathbb{P}(|X|\ge\lambda),$$
d'où l'inégalité. $\#$

> [!note] Cor. 22.2 (Inégalité de Chebyshev)
> Soit $X\in L^2(\Omega)$. Pour tout $\lambda>0$,
> $$\mathbb{P}(|X-\mathbb{E}[X]|\ge\lambda)\le\frac{\mathrm{Var}(X)}{\lambda^2}.$$

**Preuve :** On pose $Y=(X-\mathbb{E}[X])^2\ge0$. Comme $X\in L^2(\Omega)$, $Y$ est d'espérance finie et $\mathbb{E}[Y]=\mathrm{Var}(X)$. D'après l'inégalité de Markov (Thm. 22.1) appliquée à $Y$ au niveau $\lambda^2$,
$$\mathbb{P}(|X-\mathbb{E}[X]|\ge\lambda)=\mathbb{P}(Y\ge\lambda^2)\le\frac{\mathbb{E}[Y]}{\lambda^2}=\frac{\mathrm{Var}(X)}{\lambda^2}. \#$$

> [!info] Rq. (Interprétation)
> La variance mesure l'ordre de grandeur des fluctuations autour de l'espérance (la moyenne) d'une variable aléatoire.

## Convergence en probabilité

> [!note] Déf. 22.3
> Soit $(Y_n)$ une suite de variables aléatoires et $Y$ une variable aléatoire. On dit que $Y_n$ **converge en probabilité** vers $Y$, et on note $Y_n\xrightarrow{\mathbb{P}}Y$, si
> $$\forall\varepsilon>0,\qquad\lim_{n\to+\infty}\mathbb{P}(|Y_n-Y|\ge\varepsilon)=0.$$

## Loi faible des grands nombres : cas $L^2$ (variables deux à deux non corrélées)

> [!info] Prop. 22.4
> Soit $(X_n)$ une suite de variables aléatoires deux à deux non corrélées, de même loi, admettant un moment d'ordre $2$. On pose $m=\mathbb{E}[X_n]$ et $S_n=\sum_{k=1}^nX_k$. Alors, pour tout $\varepsilon>0$,
> $$\mathbb{P}\left(\left|\frac{S_n}{n}-m\right|\ge\varepsilon\right)\xrightarrow[n\to+\infty]{}0.$$

**Preuve :** Par linéarité de l'espérance, $\mathbb{E}\big[\frac{S_n}{n}\big]=m$. D'autre part, comme les variables sont deux à deux non corrélées (tous les $\mathrm{Cov}(X_i,X_j)=0$ pour $i\ne j$),
$$\mathrm{Var}\left(\frac{S_n}{n}\right)=\frac{1}{n^2}\sum_{k=1}^{n}\mathrm{Var}(X_k)=\frac{\mathrm{Var}(X_1)}{n}.$$
En appliquant l'inégalité de Chebyshev (Cor. 22.2) à $\frac{S_n}{n}$,
$$\mathbb{P}\left(\left|\frac{S_n}{n}-m\right|\ge\varepsilon\right)\le\frac{\mathrm{Var}\big(\frac{S_n}{n}\big)}{\varepsilon^2}=\frac{\mathrm{Var}(X_1)}{n\,\varepsilon^2}\xrightarrow[n\to+\infty]{}0. \#$$

## Loi faible des grands nombres (théorème de Khintchine)

> [!note] Thm. 22.5 (Loi faible des grands nombres, Khintchine)
> Soit $(X_n)$ une suite de variables aléatoires i.i.d. intégrables ($X_1\in L^1(\Omega)$). On pose $S_n=\sum_{k=1}^nX_k$ et $m=\mathbb{E}[X_1]=\mathbb{E}[X_n]$. Alors
> $$\frac{S_n}{n}\xrightarrow{\mathbb{P}}m.$$

> [!info] Rq.
> Si de plus $X_1\in L^2$, ce théorème est une conséquence directe de l'inégalité de Chebyshev : $\mathbb{P}\big(\big|\frac{S_n}{n}-m\big|\ge\varepsilon\big)\le\frac{1}{\varepsilon^2}\mathrm{Var}\big(\frac{S_n}{n}\big)=\frac{\mathrm{Var}(X_1)}{n\varepsilon^2}\to0$. L'intérêt est de n'exiger que l'intégrabilité.

**Preuve :** L'idée est d'introduire une troncature. Pour tout $n$ et tout $1\le k\le n$, on pose
$$X_k^{(n)}:=X_k\,\mathbb{1}_{|X_k|\le n},\qquad m_n=\mathbb{E}\big[X_k^{(n)}\big]=\mathbb{E}\big[X_1^{(n)}\big],\qquad T_n=\sum_{k=1}^nX_k^{(n)}.$$
On décompose l'objet à contrôler :
$$\frac{S_n}{n}-m=\underbrace{\frac{S_n-T_n}{n}}_{\mathrm{I}}+\underbrace{\left(\frac{T_n}{n}-m_n\right)}_{\mathrm{II}}+\underbrace{(m_n-m)}_{\mathrm{III}},$$
et on démontre que $\mathrm{I},\mathrm{II},\mathrm{III}\to0$ en probabilité.

> [!note] Lemme 22.6
> Soit $X$ une variable aléatoire d'espérance finie ($\mathbb{E}[|X|]<+\infty$). Alors
> (i) $\displaystyle\lim_{n\to+\infty}\mathbb{E}\big[|X|\,\mathbb{1}_{|X|>n}\big]=0$ ;
> (ii) $\displaystyle\lim_{n\to+\infty}\frac{1}{n}\,\mathbb{E}\big[X^2\,\mathbb{1}_{|X|\le n}\big]=0$.

**Preuve :** (i) On écrit $\mathbb{E}[|X|]=\mathbb{E}[|X|\mathbb{1}_{|X|\le n}]+\mathbb{E}[|X|\mathbb{1}_{|X|>n}]$. Par le théorème de convergence monotone, $\mathbb{E}[|X|\mathbb{1}_{|X|\le n}]\to\mathbb{E}[|X|]<+\infty$ ; par conséquent $\mathbb{E}[|X|\mathbb{1}_{|X|>n}]\to0$.
(ii) Soit $M>0$. On a
$$\mathbb{E}\big[X^2\,\mathbb{1}_{|X|\le n}\big]=\mathbb{E}\big[X^2\,\mathbb{1}_{|X|\le M}\big]+\mathbb{E}\big[X^2\,\mathbb{1}_{M<|X|\le n}\big]\le M^2+n\,\mathbb{E}\big[|X|\,\mathbb{1}_{|X|>M}\big],$$
car $X^2\le M^2$ sur $\{|X|\le M\}$ et $X^2=|X|\cdot|X|\le n|X|$ sur $\{|X|\le n\}$. En divisant par $n$, en faisant tendre d'abord $n\to\infty$, puis $M\to\infty$, on obtient $\displaystyle\lim_{n\to\infty}\frac{1}{n}\mathbb{E}\big[|X|^2\,\mathbb{1}_{|X|\le n}\big]=0$. $\#$

**Preuve (suite et fin du Thm. 22.5) :**
*Étape 1.* Pour tout $\varepsilon>0$,
$$\left\{\left|\frac{S_n}{n}-m\right|\ge\varepsilon\right\}\subset\underbrace{\left\{\left|\frac{T_n}{n}-m_n\right|\ge\frac{\varepsilon}{3}\right\}}_{A_n}\cup\underbrace{\left\{\left|\frac{S_n-T_n}{n}\right|\ge\frac{\varepsilon}{3}\right\}}_{B_n}\cup\underbrace{\left\{|m_n-m|\ge\frac{\varepsilon}{3}\right\}}_{C_n},$$
par inégalité triangulaire (si $\big|\frac{S_n}{n}-m\big|\ge\varepsilon$, l'un des trois termes $\mathrm{I},\mathrm{II},\mathrm{III}$ dépasse $\varepsilon/3$). Par conséquent
$$\mathbb{P}\left(\left|\frac{S_n}{n}-m\right|\ge\varepsilon\right)\le\mathbb{P}(A_n)+\mathbb{P}(B_n)+\mathbb{P}(C_n).$$

*Étape 2.*
- Terme $\mathrm{III}$ : $m_n-m=\mathbb{E}\big[X_1\mathbb{1}_{|X_1|\le n}\big]-m\to0$ par le Lemme 22.6 (i). Pour $\varepsilon>0$ donné, il existe $N\in\mathbb{N}^*$ tel que $|m_n-m|<\frac{\varepsilon}{3}$ pour tout $n\ge N$ ; c'est-à-dire $\mathbb{P}(C_n)=0$ pour $n\ge N$.
- Terme $\mathrm{II}$ : $S_n-T_n=\sum_{k=1}^nX_k\mathbb{1}_{|X_k|>n}$. Par l'inégalité de Markov,
$$\mathbb{P}(B_n)=\mathbb{P}\left(|S_n-T_n|\ge\frac{n\varepsilon}{3}\right)\le\frac{3}{n\varepsilon}\,\mathbb{E}[|S_n-T_n|]\le\frac{3}{n\varepsilon}\,n\,\mathbb{E}\big[|X_1|\mathbb{1}_{|X_1|>n}\big]=\frac{3}{\varepsilon}\,\mathbb{E}\big[|X_1|\mathbb{1}_{|X_1|>n}\big]\xrightarrow{\text{Lemme 22.6 (i)}}0.$$
- Terme $\mathrm{I}$ : comme $\mathrm{Var}\big(\frac{T_n}{n}\big)=\frac{\mathrm{Var}(X_1^{(n)})}{n}\le\frac{1}{n}\mathbb{E}\big[X_1^2\mathbb{1}_{|X_1|\le n}\big]$, l'inégalité de Chebyshev donne
$$\mathbb{P}(A_n)=\mathbb{P}\left(\left|\frac{T_n}{n}-m_n\right|\ge\frac{\varepsilon}{3}\right)\le\frac{9}{n^2\varepsilon^2}\,n\,\mathrm{Var}\big(X_1^{(n)}\big)=\frac{9}{n\varepsilon^2}\,\mathbb{E}\big[X_1^2\mathbb{1}_{|X_1|\le n}\big]\xrightarrow{\text{Lemme 22.6 (ii)}}0.$$

En conclusion, pour tout $\varepsilon>0$, $\displaystyle\lim_{n\to\infty}\mathbb{P}\left(\left|\frac{S_n}{n}-m\right|\ge\varepsilon\right)=0$, c'est-à-dire $\dfrac{S_n}{n}\xrightarrow{\mathbb{P}}m$. $\#$

## Voir aussi
- [[loi-faible-des-grands-nombres]]
- [[inegalite-de-markov]]
- [[inegalite-de-chebyshev]]
- [[convergence-en-probabilite]]
- [[variance]]
- [[esperance]]
- [[covariance]]
- [[independance]]
