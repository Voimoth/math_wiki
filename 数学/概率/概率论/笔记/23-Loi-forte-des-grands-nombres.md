---
title: 概率论 · 23 Loi forte des grands nombres
created: 2026-10-03
updated: 2026-10-03
type: notes
tags: [probabilites, grands-nombres, convergence-presque-sure, borel-cantelli]
sources: [概率论 正课手写笔记]
confidence: medium
---

# 23 Loi forte des grands nombres

## Convergence presque sûre

> [!note] Déf. 23.1 (Convergence presque sûre)
> Soit $(Y_n)$ une suite de variables aléatoires et $Y$ une variable aléatoire sur $(\Omega,\mathcal{F},\mathbb{P})$. On dit que $Y_n$ **converge presque sûrement** vers $Y$, et on note $Y_n\xrightarrow{p.s.}Y$, si
> $$\mathbb{P}\Big(\lim_{n\to+\infty}Y_n=Y\Big)=1.$$

> [!info] Rq.
> La convergence presque sûre implique la convergence en probabilité ; la réciproque est fausse.

> [!info] Prop. 23.2 (Critère de convergence presque sûre)
> Soit $(Y_n)$ une suite de variables aléatoires et $Y$ une variable aléatoire. Si pour tout $\varepsilon>0$,
> $$\lim_{n\to+\infty}\mathbb{P}\left(\bigcup_{k\ge n}\{|Y_k-Y|\ge\varepsilon\}\right)=0,$$
> alors $Y_n\xrightarrow{p.s.}Y$.

**Preuve :** On décrit l'événement de non-convergence. Pour tout $\omega\in\Omega$,
$$\{\omega:\lim Y_n(\omega)\ne Y(\omega)\}=\{\omega:\limsup|Y_n(\omega)-Y(\omega)|>0\}$$
$$=\bigcup_{\varepsilon\in\mathbb{Q}_+^*}\{\omega:\limsup|Y_n(\omega)-Y(\omega)|\ge\varepsilon\}=\bigcup_{\varepsilon\in\mathbb{Q}_+^*}\limsup_n\{\omega:|Y_n(\omega)-Y(\omega)|\ge\varepsilon\}$$
$$=\bigcup_{\varepsilon\in\mathbb{Q}_+^*}\bigcap_{n\ge1}\bigcup_{k\ge n}\{\omega:|Y_k(\omega)-Y(\omega)|\ge\varepsilon\}.$$
Pour $\varepsilon>0$ fixé, les ensembles $A_n=\bigcup_{k\ge n}\{|Y_k-Y|\ge\varepsilon\}$ décroissent, donc $\mathbb{P}\big(\bigcap_{n\ge1}A_n\big)=\lim_n\mathbb{P}(A_n)=0$ par hypothèse. Comme $\mathbb{Q}_+^*$ est dénombrable, une réunion dénombrable d'ensembles négligeables est négligeable, d'où
$$\mathbb{P}\left(\bigcup_{\varepsilon\in\mathbb{Q}_+^*}\bigcap_{n\ge1}\bigcup_{k\ge n}\{|Y_k-Y|\ge\varepsilon\}\right)=0,$$
c'est-à-dire $\mathbb{P}(\lim Y_n\ne Y)=0$, soit $\mathbb{P}(\lim Y_n=Y)=1$. $\#$

## Loi forte des grands nombres (cas $L^2$)

> [!note] Thm. 23.3 (Loi forte des grands nombres, version facile)
> Soit $(X_n)$ une suite de variables aléatoires indépendantes de même loi, avec $X_1\in L^2(\Omega)$. On pose $m=\mathbb{E}[X_1]$ et $S_n=\sum_{k=1}^nX_k$. Alors
> $$\frac{S_n}{n}\xrightarrow{p.s.}m.$$

**Preuve :** Pour $\varepsilon>0$, on pose $A_n=\big\{|\frac{S_n}{n}-m|\ge\varepsilon\big\}$.

*Motivation.* L'inégalité de Chebyshev donne $\mathbb{P}(A_n)\le\frac{1}{\varepsilon^2}\mathrm{Var}\big(\frac{S_n}{n}\big)=\frac{\mathrm{Var}(X_1)}{n\varepsilon^2}$, dont la série $\sum_n\mathbb{P}(A_n)$ est divergente (série harmonique). On ne peut donc pas appliquer directement le lemme de Borel–Cantelli, puisque
$$\mathbb{P}\Big(\bigcup_{k\ge n}A_k\Big)\le\sum_{k=n}^{+\infty}\mathbb{P}(A_k)=+\infty.$$
L'idée est de **regrouper les indices en blocs** de tailles croissantes, afin de restaurer la sommabilité.

*Étape 1.* Pour tout $n\in\mathbb{N}$, on pose
$$B_n=\bigcup_{k=n^2}^{(n+1)^2-1}\left\{\left|\frac{S_k}{k}-m\right|\ge\varepsilon\right\}.$$
L'objectif est de démontrer que $\sum_n\mathbb{P}(B_n)$ converge. On écrit
$$B_n\subset\underbrace{\left\{\left|\frac{S_{n^2}}{n^2}-m\right|\ge\frac{\varepsilon}{2}\right\}}_{C_n}\cup\bigcup_{k=n^2}^{(n+1)^2-1}\underbrace{\left\{\left|\frac{S_k}{k}-\frac{S_{n^2}}{n^2}\right|\ge\frac{\varepsilon}{2}\right\}}_{D_k}.$$

*Étape 2. Estimation de $\mathbb{P}(C_n)$ et $\mathbb{P}(D_k)$.* Par Chebyshev,
$$\mathbb{P}(C_n)\le\frac{4}{\varepsilon^2}\mathrm{Var}\left(\frac{S_{n^2}}{n^2}\right)=\frac{4}{n^2\varepsilon^2}\mathrm{Var}(X_1).$$
D'autre part, en posant $Y_j=X_j-m$ (donc $\mathbb{E}[Y_j]=0$ et $\mathrm{Var}(Y_j)=\sigma^2=\mathrm{Var}(X_1)$), on a pour $k\in[n^2,(n+1)^2)$
$$\frac{S_k}{k}-\frac{S_{n^2}}{n^2}=\frac{1}{k}\sum_{j=n^2+1}^{k}Y_j+\left(\frac{1}{k}-\frac{1}{n^2}\right)\sum_{j=1}^{n^2}Y_j.$$
Donc
$$\mathbb{P}(D_k)\le\mathbb{P}\left(\left|\frac{1}{k}\sum_{j=n^2+1}^{k}Y_j\right|\ge\frac{\varepsilon}{4}\right)+\mathbb{P}\left(\left|\frac{1}{k}-\frac{1}{n^2}\right|\left|\sum_{j=1}^{n^2}Y_j\right|\ge\frac{\varepsilon}{4}\right),$$
et par Chebyshev, avec $\mathrm{Var}\big(\frac{1}{k}\sum_{j=n^2+1}^{k}Y_j\big)=\frac{k-n^2}{k^2}\sigma^2$ et $\mathrm{Var}\big(\sum_{j=1}^{n^2}Y_j\big)=n^2\sigma^2$,
$$\mathbb{P}(D_k)\le\frac{16}{\varepsilon^2}\cdot\frac{k-n^2}{k^2}\,\sigma^2+\frac{16}{\varepsilon^2}\left(\frac{1}{k}-\frac{1}{n^2}\right)^2n^2\sigma^2.$$
En sommant sur $k\in[n^2,(n+1)^2)$ et en utilisant $\frac{k-n^2}{k^2}\le\frac{k-n^2}{n^4}$, $\big(\frac{1}{k}-\frac{1}{n^2}\big)^2\le\frac{(k-n^2)^2}{n^8}$ et $k-n^2\le2n$,
$$\sum_{k=n^2}^{(n+1)^2-1}\mathbb{P}(D_k)\le\frac{C\,\mathrm{Var}(X_1)}{n^2\varepsilon^2}.$$
Par conséquent,
$$\mathbb{P}(B_n)\le\mathbb{P}(C_n)+\sum_{k=n^2}^{(n+1)^2-1}\mathbb{P}(D_k)\le\frac{C\,\mathrm{Var}(X_1)}{n^2\varepsilon^2},$$
et la série $\sum_n\mathbb{P}(B_n)$ converge.

*Conclusion.* Par le lemme de Borel–Cantelli, $\mathbb{P}\big(\bigcap_{n\ge1}\bigcup_{j\ge n}B_j\big)=0$, donc $\lim_{n\to\infty}\mathbb{P}\big(\bigcup_{j\ge n}B_j\big)=0$. Comme les $B_j$ regroupent les événements $A_k$ pour $k\in[j^2,(j+1)^2)$, on en déduit, par la Prop. 23.2, que $\frac{S_n}{n}\to m$ presque sûrement. $\#$

> [!info] Rq.
> L'hypothèse $X_1\in L^2(\Omega)$ n'est pas nécessaire : la loi forte des grands nombres reste vraie sous la seule hypothèse $X_1\in L^1(\Omega)$.

## Voir aussi
- [[loi-forte-des-grands-nombres]]
- [[convergence-presque-sure]]
- [[borel-cantelli]]
- [[limsup-d-evenements]]
- [[inegalite-de-chebyshev]]
- [[convergence-en-probabilite]]
- [[variance]]
- [[esperance]]
