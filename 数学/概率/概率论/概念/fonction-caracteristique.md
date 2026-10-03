---
title: Fonction caractéristique
created: 2026-10-03
updated: 2026-10-03
type: concept
tags: [probabilites, fonction-caracteristique, transformee-de-fourier, convergence-en-loi]
sources: [概率论 正课手写笔记]
confidence: medium
---

# Fonction caractéristique

> [!tip] Pourquoi
> Outil analytique universel : définie pour toute variable aléatoire réelle, elle caractérise la loi, transforme les sommes en produits et ramène la convergence en loi à une convergence simple de fonctions (théorème de Lévy).

> [!note] Définition
> Soit $X$ une variable aléatoire à valeurs dans $\mathbb{R}^n$. Sa fonction caractéristique est
> $$\varphi_X:\mathbb{R}^n\to\mathbb{C},\qquad \varphi_X(z)=\mathbb{E}\big[e^{izX}\big].$$

> [!info] Propriétés
> - $\varphi_X$ est continue, $\varphi_X(0)=1$ et $|\varphi_X(z)|\le1$.
> - $X\overset{\mathcal{L}}{=}Y\iff\varphi_X=\varphi_Y$.
> - Si $X\perp Y$, alors $\varphi_{(X,Y)}(x,y)=\varphi_X(x)\varphi_Y(y)$ ; en particulier $\varphi_{X+Y}=\varphi_X\varphi_Y$.
> - $\varphi_X$ est la transformée de Fourier de la loi $\mu_X$ : $\varphi_X(z)=\hat\mu(z)$.

## Intuition
> [!tip] Idée
> C'est une version complexe de la fonction génératrice, mais valable dans $\mathbb{R}$. L'indépendance rend le produit linéaire : la loi de $X_1+\dots+X_n$ se lit dans $\varphi_{X_1}\cdots\varphi_{X_n}$, ce qui rend le TCL naturel.

## Exemples
> [!example]
> $\varphi(s)=e^{-s^2/2}$ pour $\mathcal{N}(0,1)$ ; $\varphi(s)=e^{-\sigma^2s^2/2+ims}$ pour $\mathcal{N}(m,\sigma)$. On en tire les moments de la loi normale : $\mathbb{E}[\xi^{2n}]=(2n-1)!!$ et $\mathbb{E}[\xi^{2n-1}]=0$.

## Pièges
> [!warning]
> - Ne pas la confondre avec la transformée de Laplace ni avec la fonction génératrice : la variable $z$ est réelle, l'exponentielle est complexe, et le module est borné par $1$.
> - Son existence ne suppose aucun moment.
> - Elle ne se confond avec une densité que pour certaines lois : on revient à la loi par inversion de Fourier.

## Voir aussi
- [[convergence-en-loi]]
- [[theoreme-de-continuite-de-levy]]
- [[theoreme-central-limite]]
- [[fonction-generatrice]]
- [[傅里叶变换]]
- [[傅里叶逆变换]]
## Notes du cours

- [[24-Theoreme-central-limite|概率论 · 24-Theoreme-central-limite]]
