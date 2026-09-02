---
title: Fourier 合并笔记
created: 2026-09-02
updated: 2026-09-02
type: notes
tags: [fourier-series, notes, 分析III]
confidence: high
---

# Fourier 级数 合并笔记

> 涵盖范围：第 1—3 章（引言/分离变量、定义与计算、逐点收敛理论）。第 4—8 章（Cesàro/Abel、L² 理论、应用、Fourier 变换）为后续课程，尚未覆盖。

---

## 1. Fourier 级数引言

**主线**：物理问题 → 方程(初边值问题) → 分离变量法 → Fourier 级数。这个过程本身(尤其分离变量法)有实际意义，需要掌握。

### 1.1 各种物理方程及其解释

常见偏微分方程：

- 波方程：$\partial_t^2 u = c^2 \Delta u$
- 热方程：$\partial_t u = \Delta u$
- Laplace 方程：$\Delta u = 0$
- 薛定谔方程：$i\hbar\,\partial_t u = -\frac{\hbar^2}{2m}\Delta u + V(x)u$

物理方程总是配合**初值/边值条件**来研究，"单独求解方程"没有意义。三种热方程边条件：

| 边条件 | 形式 |
|---|---|
| Dirichlet | $u(0,t)=\alpha(t),\ u(l,t)=\beta(t)$（$\alpha=\beta=0$ 时齐次） |
| Neumann | $\partial_x u(0,t)=\alpha(t),\ \partial_x u(l,t)=\beta(t)$（齐次即绝热） |
| Newton cooling | $\partial_x u(0,t)+\rho(u(0,t)-u_0)=0,\quad -\partial_x u(l,t)+\rho(u(l,t)-u_0)=0$ |

线性方程有**叠加原理**。以上方程与初边值皆线性。

### 1.2 分离变量法

**基本思想**：假设解 $u(x,y)=X(x)Y(y)$ 代入方程，整理使左边只依赖 $x$、右边只依赖 $y$，则两边必等于同一常数。PDE 化为两个 ODE。

> 严格性(Remark 1.2)：暂时是**形式操作**——没证明一般解就是该形式，也没证明算出的级数"是解"。这是后续章节的主题。

**例子 1.3(热方程 + Dirichlet 边条件)**：

$$\begin{cases} u_t = ku_{xx} \\ u(0,t)=u(l,t)=0 \end{cases}, \qquad u(x,t)=X(x)T(t)$$

代入得 $\dfrac{T'}{kT}=\dfrac{X''}{X}=A$（常数），拆分：
$$T' = kAT, \qquad X'' = AX$$

**A 的符号讨论(关键步骤)**：
- **$A\ge 0$**：$X=C_1\sinh\sqrt{A}x + C_2\cosh\sqrt{A}x$。边条件 $X(0)=X(l)=0\Rightarrow C_1=C_2=0\Rightarrow u\equiv 0$。**舍去**。
- **$A<0$**：$X=C_1\sin\sqrt{-A}\,x + C_2\cos\sqrt{-A}\,x$。由 $X(0)=0\Rightarrow C_2=0$；$X(l)=0\Rightarrow C_1\sin(\sqrt{-A}\,l)=0$，非零解要求 $\sin(\sqrt{-A}\,l)=0$，故
$$\sqrt{-A}\,l = n\pi \ (n\in\mathbb{N}^*), \qquad \boxed{A = -\frac{n^2\pi^2}{l^2}}$$

于是得特解(特征函数) $u(x,t)=e^{-\frac{n^2\pi^2 k}{l^2}t}\sin\frac{n\pi x}{l}$。由叠加原理得**形式解**：
$$u(x,t)=\sum_{n=0}^{\infty} a_n e^{-\frac{n^2\pi^2 k}{l^2}t}\sin\frac{n\pi x}{l}$$

代入初值 $\displaystyle u(x,0)=u_0(x)=\sum_{n=0}^{\infty} a_n \sin\frac{n\pi x}{l}$ —— **由 $f=u_0$ 求 $a_n$ 就是 Fourier 级数**。

若换 Neumann 边条件 $\partial_x u(0)=\partial_x u(l)=0$，得形式解含 $\cos\frac{n\pi x}{l}$；换周期边条件 $u(\theta)=u(\theta+2\pi)$(圆环)，得 $u=\sum(a_n\cos n\theta + b_n\sin n\theta)e^{-n^2kt}$。

> **历史注记(AI 生成标注)**：分离变量+模式叠加的雏形是 D. Bernoulli(1753)弦振动主张；Euler(1777)已写正交性系数公式但本人不信"任意函数"可展开；Fourier(1807 提交，1822《热的解析理论》)系统用于热方程并断言任意函数可展开，遭 Lagrange 质疑严格性。Dirichlet(1829)给出首个严格收敛定理；Riemann(1854)为研究三角级数表示创立积分；Cantor(1870)证明唯一性并走向集合论。一个求解 PDE 的形式技巧最终成为现代分析源头。

---

## 2. Fourier 级数的定义与计算

**函数类**：指定 $f$ 属于"**可积或绝对可积**"类——黎曼可积，或在分割点上允许瑕点且广义积分 $\int|f|$ 存在。改变函数在单点的取值不影响 Fourier 级数(级数由积分定义)。

### 2.1 定义

设 $f:[-\pi,\pi]\to\mathbb{R}$ 可积或绝对可积，定义(实形式)：
$$a_n=\frac{1}{\pi}\int_{-\pi}^{\pi} f(x)\cos nx\,dx, \qquad b_n=\frac{1}{\pi}\int_{-\pi}^{\pi} f(x)\sin nx\,dx \quad (n=0,1,2,\dots)$$
称 $\displaystyle \frac{a_0}{2}+\sum_{n=1}^{\infty}\bigl(a_n\cos nx+b_n\sin nx\bigr)$ 为 $f$ 的 **Fourier 级数**。

**复形式**：$C_n = \dfrac{1}{2\pi}\int_{-\pi}^{\pi} f(\theta)e^{-in\theta}d\theta$，级数 $\displaystyle\sum_{n=-\infty}^{\infty}C_n e^{inx}=\lim_{N\to\infty}\sum_{n=-N}^{N}C_ne^{inx}$。若 $f$ 实值则 $C_n=\overline{C_{-n}}=\frac12(a_n+ib_n)$($n>0$)。

> **注意(Remark 2.2)**：这里没说级数收敛、也没说收敛于 $f$。$f$ 连续时级数也未必收敛(后续给反例)。"是否收敛于 $f$" 是第 3 章的核心问题。

### 2.2 计算例子

**例 2.4($f(x)=x$)**：奇函数故 $a_n=0$；$b_n=\frac1\pi\int_{-\pi}^{\pi}x\sin nx\,dx=(-1)^{n-1}\frac{2}{n}$。故
$$x \sim \sum_{n=1}^{\infty}(-1)^{n-1}\frac{2}{n}\sin nx$$

**例 2.5($f(x)=|x|$)**：偶函数故 $b_n=0$；$a_n=\frac2\pi\int_0^\pi x\cos nx\,dx=\frac{2}{n^2\pi}\bigl[(-1)^n-1\bigr]$。

> 对比两例：|x| 连续，系数 $a_n\sim \frac{1}{n^2}$ 衰减快于 x 的 $b_n\sim\frac1n$。**函数越光滑，级数收敛越快**(见 §3.4)。

### 2.3 特殊区间

- **一般区间 $[a,b]$**：令 $g(y)=f(\frac{a+b}{2}+\frac{y}{\pi}(b-a))$ 化为 $[-\pi,\pi]$，求 $g$ 的系数后再换回。
- **$[0,\pi]$ 只含 sin**：奇延拓到 $[-\pi,\pi]$($a_n\equiv0$)。只含 cos 则偶延拓 $\tilde f(x)=f(|x|)$。同一函数可 sin 展开也可 cos 展开(见 L² 理论再解释)。

---

## 3. Fourier 级数的逐点收敛理论

**核心问题**：给 $f$，$S_N(f)$ 何时收敛？收敛到 $f$ 吗？本节给充分条件。存在连续函数其 Fourier 级数在某点/多点发散；存在(Lebesgue)可积函数几乎处处/处处发散(Zygmund 第 8 章)。

**部分和**：$S_N(x)=\dfrac{a_0}{2}+\sum_{n=1}^{N}(a_n\cos nx+b_n\sin nx)=\sum_{n=-N}^{N}C_ne^{inx}$。

### 3.1 Dirichlet 核

把 $C_n$ 代入 $S_N$ 并交换求和积分：
$$S_N(x)=\frac{1}{2\pi}\int_{-\pi}^{\pi} f(t)\sum_{n=-N}^{N}e^{in(x-t)}dt$$

括号内是等比级数，令 $u=x-t$：
$$D_N(u)=\sum_{n=-N}^{N}e^{inu}=\frac{e^{i(N+1)u}-e^{-iNu}}{e^{iu}-1}=\frac{\sin(N+\tfrac12)u}{\sin\tfrac u2}$$
称 $D_N$ 为 **Dirichlet 核**，且(部分和的卷积表示)
$$\boxed{S_N(x)=\frac{1}{2\pi}\int_{-\pi}^{\pi} f(t)D_N(x-t)dt=\frac{1}{2\pi}\int_{-\pi}^{\pi} f(x-s)D_N(s)ds}$$

(利用周期性把 $f$ 延拓到 $\mathbb{R}$；最后用 $D_N$ 为偶函数得 $S_N(x)=\frac{1}{2\pi}\int_0^\pi\bigl[f(x-s)+f(x+s)\bigr]D_N(s)ds$。)

> **直觉**：$S_N$ 是 $f$ 以 $D_N$ 为权的加权平均(卷积)。$N$ 增大时 $D_N$ 主峰高($\sim 2N+1$)变尖(宽 $\sim \frac{2\pi}{N+1/2}$)、旁瓣高频振荡。收敛问题归结为核 $D_N$ 的行为。

### 3.2 Riemann-Lebesgue 引理与局部性

**引理 3.1(Riemann-Lebesgue)**：$f$ 在 $[a,b]$ 可积或绝对可积，则
$$\lim_{n\to\infty}\int_a^b f(t)\sin nt\,dt=0 \quad(\cos nt,\ e^{int}\ \text{同理})$$

**证明(4 步逼近套路)**：
1. $f$ 常值：直接积分 $\frac{C}{n}(\cos na-\cos nb)\to0$。
2. $f$ 阶梯函数：有限小区间上常值函数的线性组合，逐段用 (1)。
3. $f$ 黎曼可积：$\forall\varepsilon>0$ 存在阶梯 $g$ 使 $\int|f-g|<\varepsilon$；固定 $g$ 用 (2)，再三角不等式得 $|\int f\sin nt\,dt|<2\varepsilon$。
4. $f$ 绝对可积(有瑕点)：设一个瑕点 $c\in(a,b)$，取 $\delta$ 使 $\int_{c-\delta}^{c+\delta}|f|<\varepsilon$，构造 $g(x)=f(x)$(当 $|x-c|>\delta$)、$g=0$(在 $[c-\delta,c+\delta]$)，对 $g$ 用 (3)，结合 $\int|f-g|<\varepsilon$。

**推论 3.2**：任何可积函数的 Fourier 系数至少趋于 0。

**定理 3.3(局部化原理)**：$f,g$ 若在某点 $x_0$ 小邻域内相同，则它们在 $x_0$ 处 Fourier 级数敛散性相同、收敛值相同。证明基于 (3.1)：$[\delta,\pi]$ 上的积分由 Riemann-Lebesgue 消失，极限只取决于 $0$ 附近(即 $x_0$ 附近)取值。

### 3.3 Dini 条件

**定义 3.4(Dini 条件)**：$f$ 在 $x$ 的空心邻域定义。若 (1) 左右极限 $f(x-),f(x+)$ 存在；(2) 存在小 $\varepsilon$ 使 $\displaystyle\int_0^{\varepsilon}\frac{|f(x-t)-f(x-)|+|f(x+t)-f(x+)|}{t}dt$ 收敛。

> 因 $\frac1t$ 在 0 附近不可积，分子须"足够小"使乘以 $\frac1t$ 后可积——本质是对 $f$ 在 $x$ 两侧收敛速度(连续性)的要求。

**充分条件**：Hölder 条件 $|f(x)-f(y)|\le C|x-y|^{\alpha}\ (\alpha>0)\Rightarrow$ Dini；分段可导且导数有界 $\Rightarrow$ Dini。例 $f(x)=\text{sgn}\,x$ 满足。
> Dini 是**充分不必要**条件。

**定理 3.6(Dini)**：$f$ $2\pi$ 周期、可积，若在 $x_0$ 满足 Dini 条件，则
$$S_N(x_0)\xrightarrow{N\to\infty}\frac{f(x_0^-)+f(x_0^+)}{2}$$

**证明要点**：利用 $\frac{1}{2\pi}\int_{-\pi}^{\pi}D_N=1$，把目标化为
$$\lim_{N\to\infty}\int_0^{\pi}\bigl[f(x-t)+f(x+t)-f(x^-)-f(x^+)\bigr]\frac{\sin(N+\tfrac12)t}{\sin\tfrac{t}{2}}dt=0.$$
对 $\varepsilon>0$ 用 Dini 条件选 $\delta$ 使 $[0,\frac{\delta}{2}]$ 上积分 $<\varepsilon$（分子被 $\frac{t}{\sin\frac t2}$ 控制、由 Dini 可积）；固定 $\delta$ 后在 $[\frac{\delta}{2},\pi]$ 上对被积函数用 Riemann-Lebesgue 引理，得积分 $<\varepsilon$。两部分合起来 $<\varepsilon$。

**例 3.8**($f(x)=x$)：$x\sim\sum(-1)^{n-1}\frac2n\sin nx$，在 $(-\pi,\pi)$ 满足定理条件。$2\pi$ 周期延拓 $\tilde f$ 在端点 $x=(2k+1)\pi$ 处左右极限平均为 0，恰为级数值 $\sum(-1)^{n-1}\frac2n\sin(n\pi)=0$。

### 3.4 函数光滑性与 Fourier 系数的关系

**定理 3.9**：$f$ 在 $[-\pi,\pi]$ 可导、$f'$ 可积或绝对可积，若 $f(-\pi)=f(\pi)$，则 $a_n=o(\frac1n),\ b_n=o(\frac1n)$。
证明(分部积分)：$a_n=\frac1\pi\int f\cos nx\,dx=\frac{1}{n\pi}\int f'\sin nx\,dx$（边界项因 $\sin n\pi=0$ 消失；$b_n$ 需 $f(-\pi)=f(\pi)$），再用 Riemann-Lebesgue。

**定理 3.10(推广)**：$f$ 有到 $k+1$ 阶导数、$f^{(k+1)}$ 可积，且 $f^{(j)}(\pi)=f^{(j)}(-\pi)\ (j=0,\dots,k)$，则 $a_n,b_n=o(\frac{1}{n^{k+1}})$。反复分部积分。

**反向**：若 $|a_n|,|b_n|\le \frac{C}{n^3}$，则 Fourier 级数及逐项求导都绝对一致收敛，收敛于一个 $C^1$ 函数 $g$（此时 $g$ 与 $f$ 的系数相同，需借助收敛性理论说明 $f=g$ 的意义——逐点/$L^2$/几乎处处）。

> **原理(不是定理)**：$f$ 越光滑，Fourier 系数趋向 0 越快。例：$f=x$ 的 $b_n\sim\frac1n$，$f=|x|$ 的 $a_n\sim\frac1{n^2}$。

### 3.5 文献注记：Zygmund《Trigonometric Series》进一步结果(第 1 卷第 2 章)

本节只讲了 Dini 一条充分条件。Zygmund 书中另有经典结果（编号沿用该书）：

1. **Dirichlet–Jordan 判别(Thm 8·1)**：$f$ 有界变差（$\Leftrightarrow f=f_1-f_2$，$f_1,f_2$ 单调）则逐点收敛到 $\frac{f(x+0)+f(x-0)}{2}$，在连续点组成的闭区间上一致收敛。
2. **逐项积分定理(Thm 8·7)**：$f$ 可积，无论级数是否收敛，逐项积分 $\frac{a_0}{2}x+\sum\frac{a_n\sin nx-b_n\cos nx}{n}$ 一致收敛于 $\int_0^x f-C$。**发散的级数逐项积分后反一致收敛**。
3. **Dini–Lipschitz 判别(Thm 10·3)**：$f$ 连续，连续性模 $\omega(\delta)=\sup_{|x-y|\le\delta}|f(x)-f(y)|$ 满足 $\omega(\delta)\log\frac1\delta\to0$（等价于一致连续即 $\lim_{\delta\to0}\omega(\delta)=0$，并更快），则 Fourier 级数一致收敛于 $f$。单点版本 $f(x\pm t)-f(x)=o(1/\log\frac1t)$ 不能保证收敛(反例见 Zygmund §2)。
4. **Lebesgue 常数(§12)**：$L_n=\frac{1}{2\pi}\int|D_n|=\frac4{\pi^2}\log n+O(1)$，且 $L_n$ 恰为 $\sup_{|f|\le1\ \text{连续}}|S_n(f;0)|$ —— 结合一致有界性原理给出"连续函数某点发散"的定量解释。
5. **Gibbs 现象(Thm 9·3)**：锯齿波 $\sum\frac{\sin nx}{n}=\frac{\pi-x}{2}$ 的部分和逐点收敛但在跳点附近不一致收敛，超出右极限比例 $\frac2\pi\int_0^\pi\frac{\sin t}{t}dt\approx1.179$（冲过跳跃约 9%），且不随 $n$ 消失。有界变差函数在每个不可去间断点出现 Gibbs 现象。
6. **系数量级(§4)**：有界变差函数 $a_n,b_n=O(\frac1n)$，不可改进为 $o(\frac1n)$（锯齿波反例）。

> Rem 3.11：Zygmund §11 的 Lebesgue 判别法逻辑上蕴含 Dini、Dini–Lipschitz、Dirichlet–Jordan，但条件不便验证。

**衔接**：下一节(§4)由 Hardy《Divergent Series》引入 Cesàro 求和与 Abel 求和（广义求和），用以处理原级数发散的情形。此为后续课程内容。
