---
title: 一阶线性ODE
created: 2026-10-03
updated: 2026-10-03
type: concept
tags: [分析II, 常微分方程, 一阶线性]
sources: [分析II(2).pdf]
confidence: high
---

# 一阶线性 ODE

> [!note] 定义
> 设 $a,b$ 是区间 $I$ 上的 $K$ 值连续函数,一阶线性常微分方程是
> $$y'+a(x)y=b(x).$$
> $b$ 称为非齐次项(second membre);$b\equiv0$ 时称为齐次方程 $y'+a(x)y=0$。$y'$ 的系数必须先整理成 $1$。

## 1. 解空间的结构

> [!note] 命题
> - 齐次方程的解集 $S_0$ 包含 $0$ 函数且对线性组合封闭,是一个线性空间;
> - 若非齐次方程有特解 $f_1$,则其解集 $S=\{f_1+g: g\in S_0\}$,即 $S$ 是一个仿射空间。
> 因此求解分两步:先求 $S_0$,再找哪怕一个特解。

## 2. 求解:积分因子与常数变异

> [!note] 齐次方程
> $S_0$ 是一维的。设 $\varphi$ 是 $a$ 的原函数,则 $f_0(x)=e^{-\varphi(x)}$ 是 $S_0$ 的一个非零解,且 $S_0=\{\lambda f_0:\lambda\in K\}$。

> [!note] 常数变异法(特解)
> 设解形如 $f(x)=\lambda(x)e^{-\varphi(x)}$,代入方程得 $\lambda'(x)=e^{\varphi(x)}b(x)$,故一个特解是
> $$f(x)=e^{-\varphi(x)}\int_{x_0}^xe^{\varphi(t)}b(t)dt .$$

> [!tip] 凑微分(同一计算的另一观点)
> 乘上 $e^{\varphi(x)}$ 把左边变成全微分:$(e^{\varphi}y)'=e^{\varphi}(y'+a(x)y)=e^{\varphi}b$。于是直接求原函数就得到 $e^{\varphi}y$,进而得到 $y$。

> [!note] 初值问题
> 若系数在 $I$ 上连续,则对任何 $t_0\in I$、$y_0\in K$,初值问题 $y'+a(x)y=b(x)$、$y(t_0)=y_0$ 存在唯一解。存在性靠调整齐次解 $ce^{-\varphi}$ 的常数;唯一性靠齐次解"有一点为 $0$ 即恒为 $0$"。

> [!example] 例子
> $y'+y=\cos x$;$y'+\cos x\,y=0$;$y'+ay=P(x)e^{\lambda x}$:当 $\lambda\ne-a$ 时找 $Q(x)e^{\lambda x}$ 形式的特解,当 $\lambda=-a$ 时找 $R(x)e^{-ax}$($R$ 无常数项、次数加 $1$)。
> 物理模型 $y'+\frac1\tau y=\frac{A(t)}{\tau}$(温度、RC 电路、下落雨滴、化学反应),在 $0$ 落在区间内时解为 $y(t)=e^{-t/\tau}\int_0^te^{s/\tau}\frac{A(s)}{\tau}ds$。

## 相关概念

- [[二阶线性常系数ODE]]
- [[一阶线性方程组]]
