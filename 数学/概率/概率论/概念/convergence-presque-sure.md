---
title: Convergence presque sûre
created: 2026-10-03
updated: 2026-10-03
type: concept
tags: [probabilites, convergence, grands-nombres]
sources: [概率论 正课手写笔记]
confidence: medium
---

# Convergence presque sûre

> [!tip] Pourquoi
> Formaliser la convergence « pour presque tout $\omega$ », c'est-à-dire ponctuelle sauf sur un ensemble négligeable. C'est le mode de convergence de la loi forte des grands nombres.

> [!note] Définition
> Soit $(Y_n)$ une suite de variables aléatoires et $Y$ une variable aléatoire sur $(\Omega,\mathcal{F},\mathbb{P})$. On dit que $Y_n$ converge presque sûrement (p.s.) vers $Y$, et on note $Y_n\xrightarrow{p.s.}Y$, si
> $$\mathbb{P}\Big(\lim_{n\to+\infty}Y_n=Y\Big)=1.$$

> [!info] Critère
> $Y_n\xrightarrow{p.s.}Y$ dès que $\displaystyle\lim_{n\to+\infty}\mathbb{P}\Big(\bigcup_{k\ge n}\{|Y_k-Y|\ge\varepsilon\}\Big)=0$ pour tout $\varepsilon>0$. Par le lemme de Borel–Cantelli, il suffit que $\sum_n\mathbb{P}(|Y_n-Y|\ge\varepsilon)<+\infty$ pour tout $\varepsilon>0$.

## Intuition
> [!tip] Idée
> On regarde les queues $\limsup\{|Y_k-Y|\ge\varepsilon\}=\bigcap_n\bigcup_{k\ge n}\{|Y_k-Y|\ge\varepsilon\}$. La convergence p.s. équivaut à ce que ces limsups soient négligeables pour tout $\varepsilon>0$ ; il suffit donc de montrer $\mathbb{P}(\bigcup_{k\ge n}\{\dots\})\to0$.

## Exemples
> [!example]
> Loi forte des grands nombres : $\frac{S_n}{n}\xrightarrow{p.s.}m$ ([[loi-forte-des-grands-nombres]]).

## Pièges
> [!warning]
> - Bien plus forte que la convergence en probabilité : p.s. $\Rightarrow$ en probabilité, mais la réciproque est fausse.
> - « Événement de probabilité $1$ » n'est pas « événement certain » ([[presque-sur]]).
> - L'uniformité en $\varepsilon$ n'est pas requise : on fixe $\varepsilon>0$, puis on fait $n\to\infty$.

## Voir aussi
- [[presque-sur]]
- [[borel-cantelli]]
- [[limsup-d-evenements]]
- [[convergence-en-probabilite]]
- [[loi-forte-des-grands-nombres]]

## Notes du cours

- [[23-Loi-forte-des-grands-nombres|概率论 · 23-Loi-forte-des-grands-nombres]]
