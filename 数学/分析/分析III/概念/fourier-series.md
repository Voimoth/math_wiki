---
title: 傅里叶级数
created: 2026-08-31
updated: 2026-09-02
type: concept
tags: [fourier-series, convergence, harmonic-analysis]
sources: [Fourier-合并笔记-2026-09-02.md]
confidence: high
---

# 傅里叶级数 (Fourier Series)

## 定义

设 $f:[-\\pi,\\pi]\\to\\mathbb{R}$ 可积或绝对可积(黎曼可积;或在分割点上允许瑕点且广义积分 $\\int|f|$ 存在)。定义(实形式):

$$a_n=\\frac{1}{\\pi}\\int_{-\\pi}^{\\pi} f(x)\\cos nx\\,dx, \\qquad b_n=\\frac{1}{\\pi}\\int_{-\\pi}^{\\pi} f(x)\\sin nx\\,dx \\quad (n=0,1,2,\\dots)$$

称

$$f \\sim \\frac{a_0}{2}+\\sum_{n=1}^{\\infty}\\bigl(a_n\\cos nx+b_n\\sin nx\\bigr)$$

为 $f$ 的 **Fourier 级数**。

**复形式**(更简洁):$C_n=\\dfrac{1}{2\\pi}\\int_{-\\pi}^{\\pi} f(\\theta)e^{-in\\theta}d\\theta$,级数

$$f \\sim \\sum_{n=-\\infty}^{\\infty} C_n e^{inx}=\\lim_{N\\to\\infty}\\sum_{n=-N}^{N} C_n e^{inx}$$

若 $f$ 实值,则 $C_n=\\overline{C_{-n}}=\\frac12(a_n+ib_n)$($n>0$)。

> **注意**:改变函数在单点的取值不影响 Fourier 级数(级数由积分定义,单点对积分无影响)。

## 关于符号 $\\sim$

> 这里的 $\\sim$ 表示\"形式地对应\"——**这里没说级数收敛、也没说收敛于 $f$**。$f$ 连续时级数也未必收敛(后续给反例)。\"是否收敛于 $f$\" 是逐点收敛理论的核心问题,见 [[convergence-of-fourier-series]]。

## 直觉

- **思想**:任何周期信号都能分解为\"基本谐波\" $e^{inx}$ / $\\cos nx,\\sin nx$ 的叠加;系数 $a_n,b_n$(或 $C_n$)度量频率 $n$ 的成分大小。
- **物理起源**:Fourier 级数由热传导方程(分离变量法)自然引出(见 [[separation-of-variables]]),傅里叶本人 1807 年提交、1822 年成书《热的解析理论》。
- **较光滑 → 收敛较快**:函数越光滑,系数衰减越快,级数收敛越快。这是光滑性与系数量级关系的体现(见 [[convergence-of-fourier-series]] §3.4)。

## 计算例子

**例($f(x)=x$)**:奇函数故 $a_n=0$;由分部积分 $b_n=\\frac1\\pi\\int_{-\\pi}^{\\pi}x\\sin nx\\,dx=(-1)^{n-1}\\frac{2}{n}$。故

$$x \\sim \\sum_{n=1}^{\\infty}(-1)^{n-1}\\frac{2}{n}\\sin nx$$

**例($f(x)=|x|$)**:偶函数故 $b_n=0$;$a_n=\\frac2\\pi\\int_0^\\pi x\\cos nx\\,dx=\\frac{2}{n^2\\pi}\\bigl[(-1)^n-1\\bigr]$。

> 对比两例:$|x|$ 连续,系数 $a_n\\sim \\frac{1}{n^2}$ 衰减快于 $x$ 的 $b_n\\sim\\frac1n$。**函数越光滑,级数收敛越快**。

## 特殊区间

- **一般区间 $[a,b]$**:令 $g(y)=f\\bigl(\\frac{a+b}{2}+\\frac{y}{\\pi}(b-a)\\bigr)$ 化为 $[-\\pi,\\pi]$,求 $g$ 的系数后再换回。
- **$[0,\\pi]$ 只含 sin**:奇延拓到 $[-\\pi,\\pi]$($a_n\\equiv0$)。只含 cos 则偶延拓 $\\tilde f(x)=f(|x|)$。同一函数既可 sin 展开也可 cos 展开。

## 常见误区

- 以为\"展开式 = 函数本身\"。实际只有收敛定理条件满足时才成立;不连续点处收敛到左右极限均值(见 [[convergence-of-fourier-series]])。

## 相关概念

- [[dirichlet-kernel]] — 部分和的卷积表示(逐点收敛理论的出发点)
- [[convergence-of-fourier-series]] — 何时收敛、收敛到哪里
- [[separation-of-variables]] — Fourier 级数的起源方法
