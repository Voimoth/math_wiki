---
title: Hermite 型与 Signature
created: 2026-10-21
updated: 2026-10-21
type: concept
tags: [algebre, hermitian, signature, quadratic-form]
sources: [代数 III 正课手写笔记 2026-10]
confidence: medium
---

# Hermite 型与 Signature

> [!question] 问题
> 实二次型有惯性定理（正负平方项个数不变），复向量空间上的"二次型"该长什么样？为什么它的分类只需要一个正整数对 $(r,s)$？

## 半双线性形式

$\mathbb C$-向量空间 $E$ 上 $\varphi:E\times E\to\mathbb C$ 称为**半双线性**（sesquilinéaire），若它对第一变元半线性、第二变元线性。「sesqui」= $1+\tfrac12$。若
$$\varphi(y,x)=\overline{\varphi(x,y)},$$
称 $\varphi$ **Hermite 对称**；此时 $h(x):=\varphi(x,x)\in\mathbb R$，称 $h$ 为对应的 **Hermite 型**，且 $h(\lambda x)=|\lambda|^2h(x)$。

由极化恒等式，$h$ 与 $\varphi$ 互相决定：
$$\varphi(x,y)=\tfrac14\bigl(h(x+y)-h(x-y)+i\,h(x+iy)-i\,h(x-iy)\bigr).$$

$\varphi$ **非退化**若 $\hat\varphi:E\to E^*$、$x\mapsto\varphi(x,\cdot)$ 是单射；有限维时等价于其矩阵可逆。

> [!note] 定理（标准形）
> 有限维 Hermite 型 $\varphi$ 存在基使矩阵为
> $$\operatorname{diag}(\underbrace{1,\dots,1}_{r},\underbrace{-1,\dots,-1}_{s},0,\dots,0),\qquad r+s=\operatorname{rg}\varphi,$$
> 且 $(r,s)$ 与基无关，称为 $\varphi$ 的**符号差**（signature）。

**证明骨架.** 先约化到非退化（核 $N=E^\perp$，取补 $F$）。对维数归纳：非退化时存在非迷向向量（否则由极化恒等式 $\varphi=0$），取 $e_1$ 使 $\varphi(e_1,e_1)=\pm1$，则 $E=\mathbb Ce_1\oplus(\mathbb Ce_1)^\perp$ 且限制仍非退化。

**唯一性.** 两组标准基给出 $F=\operatorname{Vect}(e_1..e_r)$（$h>0$ 处）与 $G'=\operatorname{Vect}(e'_{r'+1}..e'_{r'+s'})$（$h<0$ 处），$F\cap G'=\{0\}$，故 $r+s'\le n=r+s$，即 $s'\le s$；对称地 $s\le s'$。

## Gram 矩阵与正定

$\varphi$ 在基 $(e_i)$ 下的矩阵 $H=(\varphi(e_i,e_j))$ 是 Hermite 矩阵（$H^*={}^t\bar H=H$）；换基 $f_j=\sum p_{ij}e_i$ 时 $H'=P^*HP$。

对向量 $e_1,\dots,e_k$，**Gram 矩阵** $G=(\langle e_i,e_j\rangle)$ 半正定，正定 $\iff$ 线性无关，且 $\operatorname{rg}G=\dim\operatorname{Vect}(e_i)$。

**Cauchy–Schwarz.** $h$ 正（半正定）时 $|\varphi(x,y)|^2\le h(x)h(y)$；正定时等号 $\iff x,y$ 共线。

**范数.** 正定时 $x\mapsto\sqrt{h(x)}$ 是范数（三角不等式由 Cauchy–Schwarz），不等式取等 $\iff x,y$ 正相关。

## 谱的变分刻画（Courant–Fischer）

Hermite 型与自伴算子 $u$ 一一对应（$\varphi(x,y)=\langle u(x),y\rangle$，$u=u^*$），其特征值 $\lambda_1\le\cdots\le\lambda_n$ 满足
$$\lambda_1=\min_{\|x\|=1}\langle u(x),x\rangle,\qquad \lambda_n=\max_{\|x\|=1}\langle u(x),x\rangle,$$
$$\lambda_i=\min_{\dim F=i}\ \max_{\substack{x\in F\\\|x\|=1}}\langle u(x),x\rangle=\max_{\dim G=n-i+1}\ \min_{\substack{x\in G\\\|x\|=1}}\langle u(x),x\rangle .$$
这给出"极值—维数"的对应：$\lambda_i$ 是限制在 $i$ 维子空间上能取到的最大"能量"的最小值。$u$ 正定 $\iff$ 全部 $\lambda_i>0$。

## 与实二次型的对照

| | 实对称双线性型 | Hermite 型 |
|---|---|---|
| 对称性 | $\varphi(y,x)=\varphi(x,y)$ | $\varphi(y,x)=\overline{\varphi(x,y)}$ |
| 标准形 | $\operatorname{diag}(1^r,-1^s,0)$ | 同左 |
| 不变量 | $(r,s)$（惯性定理） | $(r,s)$（signature） |
| 极化 | 只需 $h(x+y),h(x-y)$ | 需要 $h(x\pm y)$ 与 $h(x\pm iy)$ |

## 相关概念

- [[伴随自同态]]
- [[酉群与极分解]]
- [[代数III/概念/经典群]]
- [[代数III/概念/线性群与特殊线性群]]
- [[代数III/概念/模]]
