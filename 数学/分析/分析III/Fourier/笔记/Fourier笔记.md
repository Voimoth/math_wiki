---
title: Fourier 合并笔记
created: 2026-09-02
updated: 2026-10-03
type: notes
tags: [fourier-series, notes, 分析III]
confidence: high
---

# Fourier 级数 笔记

> [!info] 涵盖范围
> 第 1—8 章（引言/分离变量、定义与计算、逐点收敛理论、Cesàro/Abel 广义求和、L² 理论、Fourier 级数的应用、Fourier 变换、Fourier 变换的应用）。讲义现为 61 页完整版（fourier-讲义-2026-09-21，2026-09 版），第 1—8 章正文齐备；其中第 6—8 章为本次续写（§6.3、§6.4 带 (*) 号，属选读）。

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

> [!info] 严格性(Remark 1.2)
> 暂时是**形式操作**——没证明一般解就是该形式，也没证明算出的级数"是解"。这是后续章节的主题。

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

> [!info] 历史注记(AI 生成标注)
> 分离变量+模式叠加的雏形是 D. Bernoulli(1753)弦振动主张；Euler(1777)已写正交性系数公式但本人不信"任意函数"可展开；Fourier(1807 提交，1822《热的解析理论》)系统用于热方程并断言任意函数可展开，遭 Lagrange 质疑严格性。Dirichlet(1829)给出首个严格收敛定理；Riemann(1854)为研究三角级数表示创立积分；Cantor(1870)证明唯一性并走向集合论。一个求解 PDE 的形式技巧最终成为现代分析源头。

**详注(§1.3，讲义原文要点)**：引言的"物理问题—方程—分离变量—Fourier 级数"线路完全是**马后炮**，所述并非实际历史顺序。

- **各物理现象不是同时进入视野的**。最早是**弦振动**：Taylor(1713)导出方程雏形并发现单个振动模式是正弦形的；d'Alembert(1747)求出行波通解；**D. Bernoulli(1753)断言任意振动都是正弦模式的叠加**——这等价于"任意函数可展开为三角级数"，**遭到 Euler 等人的反对**。Laplace 方程源自 18 世纪 80 年代 Laplace 与 Legendre 的位势论研究；热方程则是 Fourier(1807 提交、1822 出版《热的解析理论》)的工作；薛定谔方程更是晚至 1926 年。
- **"初边值问题"的提法也不是一开始就被认可的**。早期数学家只想"解一个问题"，端点固定之类的约束是物理事实而非独立的数学数据。当年 **Euler 与 d'Alembert 关于"什么样的曲线可以作初始形状"的争论**，本质上就是**初值与边值的相容性问题**。方程与初边值条件的配合、以及**适定性(Hadamard，20 世纪初明确提出)**是后来的自觉。
- **分离变量法在 Fourier 之前就有端倪**：Bernoulli(1753)的模式叠加主张，乃至 Euler(1777，生前未发表)写下的系数公式都在其中；但 **Fourier 首先将它系统地、广泛地用于热方程**。

**那场争论的实质("什么是函数")**：Bernoulli 的主张立刻遭到 Euler 和 d'Alembert 的反对，理由很尖锐——正弦级数展开的函数既是**周期的**、又"**处处解析**"，而弦的初始形状可以是随手拨出的、**带尖角**的曲线，两者怎么可能相等？争论表面是技术性的，实质却是"什么是函数"这个根本问题：在 18 世纪数学家心目中，**函数就是由一个解析表达式给出的东西**，而初值曲线显然不必如此。耐人寻味的是，**Euler 本人(1777 年写下，死后才发表)其实已经利用三角函数的正交性写出了展开系数的积分公式，但他仍不相信这种展开能表示"任意"函数**，公式也就埋没在文稿里。

**Fourier 的处境**：审稿人之一 **Lagrange 坚决反对**其中的三角级数部分，认为收敛性毫无证明，论文因此迟迟不能发表；Fourier 1811 年以此题再获科学院大奖，**评奖报告依旧批评其不够严格**。直到 1822 年《热的解析理论》出版，这套方法才公之于世。书中明确断言任意函数可展为三角级数。

**问题的解决分两步走**：

1. **Dirichlet(1829)给出第一个严格的收敛定理**：分段单调、分段连续的有界函数，其 Fourier 级数逐点收敛。这不仅补上了 Fourier 方法缺的证明，更重要的是——**为了把定理的条件说清楚，"函数"的概念本身被迫现代化**：Dirichlet(1837)给出的函数定义实质上已经是今天的样子(每个 $x$ 对应唯一确定的 $y$，且明确允许"完全无规律地画出"的依赖关系，尽管他名义上定义的是"连续函数")。
2. **理论外延的扩大**：Riemann(1854)为研究"什么样的函数可以用三角级数表示"而创立以他命名的积分；**Cantor(1870)证明三角级数表示的唯一性，并由此走向集合论**。

一个求解偏微分方程的形式技巧，最终成为现代分析的主要源头之一。

---

## 2. Fourier 级数的定义与计算

**函数类**：指定 $f$ 属于"**可积或绝对可积**"类——黎曼可积，或在分割点上允许瑕点且广义积分 $\int|f|$ 存在。改变函数在单点的取值不影响 Fourier 级数(级数由积分定义)。

### 2.1 定义

设 $f:[-\pi,\pi]\to\mathbb{R}$ 可积或绝对可积，定义(实形式)：
$$a_n=\frac{1}{\pi}\int_{-\pi}^{\pi} f(x)\cos nx\,dx, \qquad b_n=\frac{1}{\pi}\int_{-\pi}^{\pi} f(x)\sin nx\,dx \quad (n=0,1,2,\dots)$$
称 $\displaystyle \frac{a_0}{2}+\sum_{n=1}^{\infty}\bigl(a_n\cos nx+b_n\sin nx\bigr)$ 为 $f$ 的 **Fourier 级数**。

**复形式**：$C_n = \dfrac{1}{2\pi}\int_{-\pi}^{\pi} f(\theta)e^{-in\theta}d\theta$，级数 $\displaystyle\sum_{n=-\infty}^{\infty}C_n e^{inx}=\lim_{N\to\infty}\sum_{n=-N}^{N}C_ne^{inx}$。若 $f$ 实值则 $C_n=\overline{C_{-n}}=\frac12(a_n+ib_n)$($n>0$)。

> [!warning] 注意(Remark 2.2)
> 这里没说级数收敛、也没说收敛于 $f$。$f$ 连续时级数也未必收敛(后续给反例)。"是否收敛于 $f$" 是第 3 章的核心问题。

### 2.2 计算例子

**例 2.4($f(x)=x$)**：奇函数故 $a_n=0$；$b_n=\frac1\pi\int_{-\pi}^{\pi}x\sin nx\,dx=(-1)^{n-1}\frac{2}{n}$。故
$$x \sim \sum_{n=1}^{\infty}(-1)^{n-1}\frac{2}{n}\sin nx$$

**例 2.5($f(x)=|x|$)**：偶函数故 $b_n=0$；$a_n=\frac2\pi\int_0^\pi x\cos nx\,dx=\frac{2}{n^2\pi}\bigl[(-1)^n-1\bigr]$。

> [!tip] 对比两例
> |x| 连续，系数 $a_n\sim \frac{1}{n^2}$ 衰减快于 x 的 $b_n\sim\frac1n$。**函数越光滑，级数收敛越快**(见 §3.4)。

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

> [!tip] 直觉
> $S_N$ 是 $f$ 以 $D_N$ 为权的加权平均(卷积)。$N$ 增大时 $D_N$ 主峰高($\sim 2N+1$)变尖(宽 $\sim \frac{2\pi}{N+1/2}$)、旁瓣高频振荡。收敛问题归结为核 $D_N$ 的行为。

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

> [!info] Dini 条件的直觉
> 因 $\frac1t$ 在 0 附近不可积，分子须"足够小"使乘以 $\frac1t$ 后可积——本质是对 $f$ 在 $x$ 两侧收敛速度(连续性)的要求。

**充分条件**：Hölder 条件 $|f(x)-f(y)|\le C|x-y|^{\alpha}\ (\alpha>0)\Rightarrow$ Dini；分段可导且导数有界 $\Rightarrow$ Dini。例 $f(x)=\text{sgn}\,x$ 满足。
> [!warning] Dini 条件的定位
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

> [!tip] 原理(不是定理)
> $f$ 越光滑，Fourier 系数趋向 0 越快。例：$f=x$ 的 $b_n\sim\frac1n$，$f=|x|$ 的 $a_n\sim\frac1{n^2}$。

### 3.5 文献注记：Zygmund《Trigonometric Series》进一步结果(第 1 卷第 2 章)

本节只讲了 Dini 一条充分条件。Zygmund 书中另有经典结果（编号沿用该书）：

1. **Dirichlet–Jordan 判别(Thm 8·1)**：$f$ 有界变差（$\Leftrightarrow f=f_1-f_2$，$f_1,f_2$ 单调）则逐点收敛到 $\frac{f(x+0)+f(x-0)}{2}$，在连续点组成的闭区间上一致收敛。
2. **逐项积分定理(Thm 8·7)**：$f$ 可积，无论级数是否收敛，逐项积分 $\frac{a_0}{2}x+\sum\frac{a_n\sin nx-b_n\cos nx}{n}$ 一致收敛于 $\int_0^x f-C$。**发散的级数逐项积分后反一致收敛**。
3. **Dini–Lipschitz 判别(Thm 10·3)**：$f$ 连续，连续性模 $\omega(\delta)=\sup_{|x-y|\le\delta}|f(x)-f(y)|$ 满足 $\omega(\delta)\log\frac1\delta\to0$（等价于一致连续即 $\lim_{\delta\to0}\omega(\delta)=0$，并更快），则 Fourier 级数一致收敛于 $f$。单点版本 $f(x\pm t)-f(x)=o(1/\log\frac1t)$ 不能保证收敛(反例见 Zygmund §2)。
4. **Lebesgue 常数(§12)**：$L_n=\frac{1}{2\pi}\int|D_n|=\frac4{\pi^2}\log n+O(1)$，且 $L_n$ 恰为 $\sup_{|f|\le1\ \text{连续}}|S_n(f;0)|$ —— 结合一致有界性原理给出"连续函数某点发散"的定量解释。
5. **Gibbs 现象(Thm 9·3)**：锯齿波 $\sum\frac{\sin nx}{n}=\frac{\pi-x}{2}$ 的部分和逐点收敛但在跳点附近不一致收敛，超出右极限比例 $\frac2\pi\int_0^\pi\frac{\sin t}{t}dt\approx1.179$（冲过跳跃约 9%），且不随 $n$ 消失。有界变差函数在每个不可去间断点出现 Gibbs 现象。
6. **系数量级(§4)**：有界变差函数 $a_n,b_n=O(\frac1n)$，不可改进为 $o(\frac1n)$（锯齿波反例）。

> [!info] Rem 3.11 (Zygmund)
> Zygmund §11 的 Lebesgue 判别法逻辑上蕴含 Dini、Dini–Lipschitz、Dirichlet–Jordan，但条件不便验证。另外（Thm 11·10）：若 $f\in L^p$（$p>1$），则 $S[f]$ 在 $f$ 的 Lebesgue 集合上（特别地几乎处处）收敛到 $f$ —— 这是 Carleson 定理的古典前身。

### 3.6 历史注记(§3.6)

逐点收敛理论的历史，是**乐观猜想与著名反例交替**的历史。

- **Fourier 本人(1822)** 相信"任意函数"都可表示为三角级数，但没有给出证明。
- **第一个严格的充分性定理属于 Dirichlet(1829)**：分段单调、分段连续的有界函数，其 Fourier 级数逐点收敛(在间断点收敛于左右极限的平均)。
- **Riemann** 为研究"函数何时可由三角级数表示"写下的就职论文(1854 完成，1867 发表)中**引入了以他命名的积分**。
- 此后半个多世纪，人们倾向于相信**连续函数的 Fourier 级数处处收敛**;直到 **du Bois-Reymond(1873)构造出第一个反例：连续函数的 Fourier 级数可以在一点发散**。
- **Fejér(1900)证明 Cesàro 平均总是收敛**，表明困难出在**求和方式**上而不在函数本身。
- **Kolmogorov(1923，1926)** 进一步构造了 $L^1$ 函数，其 Fourier 级数**几乎处处发散、乃至处处发散**，逐点收敛在 $L^1$ 中彻底破灭。
- 另一方向上，**Lusin 猜想(1915)**：$L^2$ 函数的 Fourier 级数几乎处处收敛。这一猜想悬置半个世纪，由 **Carleson(1966)证明**，**Hunt(1968)** 推广到 $L^p$($p>1$);特别地，**连续函数的 Fourier 级数几乎处处收敛**。
- 同年 **Kahane–Katznelson** 证明：**任何零测集上，都可以找到某个连续函数在其上发散**。

**衔接**：下一节(§4)由 Hardy《Divergent Series》引入 **Cesàro 求和与 Abel 求和**(广义求和)，用以处理原级数发散的情形。

---

## 4. 其它类型的逐点收敛

本节考虑一些比较奇怪的问题。**还是逐点收敛，但如果做不到原始意义的逐点收敛，还可以换一种"也是合理的"、但不一样的观点来看这个收敛性。**

### 4.1 公理化定义:弱意义收敛

以下定义取自《Divergent Series》。我们可以抽象地定义一种弱的级数收敛:

**定义 4.1(弱意义收敛)**：称 $\sum a_n$ 弱意义收敛于 $s$，记为 $\sum a_n\sim s$，当且仅当:

- 若 $\sum a_n\sim s$，则 $\sum(ka_n)\sim ks$;
- 若 $\sum a_n\sim s$ 且 $\sum b_n\sim t$，则 $\sum(a_n+b_n)\sim s+t$;
- $\sum_{n\ge0}a_n\sim s$ 当且仅当 $\sum_{n\ge1}a_n\sim s-a_0$;
- 若 $\sum a_n = s$(严格意义)，则 $\sum a_n\sim s$。

这些公理化的定义看上去非常合理，而且:

**例子 4.2**：由以上公理可证 $1-1+1-1+\cdots\sim\dfrac12$。

设 $a_n=(-1)^n$。则 $\sum_{n\ge0}a_n\sim 1+\sum_{n\ge1}a_n$；另一方面 $\sum_{n\ge0}a_n\sim-\sum_{n\ge1}a_n$。两式联立，于是只能是 $1/2$。

> [!warning] 必须有某些重要的性质不再成立了，比如：级数求和的**结合律**。

### 4.2 Cesàro 求和

**动机**：回忆数列极限的著名命题——设数列 $a_n$ 收敛于 $a$，则 $\dfrac{a_1+\cdots+a_n}{n}\to a$，但反之不一定对。考虑对应的级数版本：设级数 $\sum a_n$ 的部分和 $S_n=\sum_{i=1}^{n}a_i$，则原来的级数收敛于 $S$ 一定可以推出
$$\frac{S_1+\cdots+S_n}{n}\longrightarrow S.$$
我们考虑一些在原始意义下不能收敛的 Fourier 级数，也许可以在这个弱一些的意义下收敛呢。这种求和方式称为 **Cesàro 求和**。

**定理 4.3**：设 $f$ 是 $2\pi$ 周期，可积或绝对可积。则 $f$ 的 Fourier 级数的 Cesàro 求和在 $f$ 的连续点处收敛于 $f$。进一步，如果 $f$ 是**处处连续**的，则 $f$ 的 Cesàro 求和**一致收敛**于 $f$。

> [!info] Remark 4.4
> 这个收敛的条件愉快多了，只要求连续，可惜不是原来的级数了。

**证明**：思路和原来一样，先通过计算把 Cesàro 求和的部分和表示为卷积形式。回忆
$$S_n = \int_{-\pi}^{\pi}f(\theta-\varphi)D_N(\varphi)d\varphi,$$
其中(**注意和前文不一样，我把系数 $\frac{1}{2\pi}$ 放进 $D_N$ 的定义了**)
$$D_N(\varphi) = \frac{1}{2\pi}\frac{\sin(N+\frac12)\varphi}{\sin\frac{\varphi}{2}}.$$
然后令
$$F_N = \frac{D_0+\cdots+D_{N-1}}{N},$$
则
$$F_N(\varphi) = \frac{1}{2\pi N}\frac{\sin\frac{\varphi}{2}+\cdots+\sin(N-\frac12)\varphi}{\sin\frac{\varphi}{2}}
= \frac{1}{2\pi N}\frac{1}{(\sin\frac{\varphi}{2})^2}\cdot\frac{1}{2}\bigl(1-\cos N\varphi\bigr)
= \frac{1}{2\pi N}\left(\frac{\sin\frac{N}{2}\varphi}{\sin\frac{\varphi}{2}}\right)^2.$$
把上式最右边称为 $N$ 阶的 **Fejér 核**。则 Cesàro 求和的部分和
$$\sigma_N(\theta) = \int_{-\pi}^{\pi}f(\theta-\varphi)F_N(\varphi)d\varphi.$$

对比 Dirichlet 核与 Fejér 核(同一组 $N$，都归一化为积分为 1)：

| | $D_N$ | $F_N$ |
|---|---|---|
| 旁瓣 | 正负振荡(阴影为负值区域)，$\|D_N\|_1\sim\log N$ | 恒为正且迅速消失 |
| 峰高 | $2N+1$ 线性增长 | 同样线性增长 |
| 主瓣宽 | $\frac{2\pi}{N+1/2}$ 收缩 | 同样收缩 |

发现它有如下三点:

- $\displaystyle\int_{-\pi}^{\pi}F_N(\theta)d\theta = 1$;
- $F_N\ge 0$;
- 对于任何 $\delta>0$，$\displaystyle\lim_{N\to\infty}\sup_{\delta\le|\varphi|\le\pi}F_N(\varphi) = 0$。

有了这三条，剩下的定理证明是**著名的套路**。

> [!tip] 关于这个"套路"
> 其实需要写这个套路，不然就不能感受**一致逼近**的意思。实际上就是在写上述套路的过程中，发现那个 $N$ **和具体点的位置没有关系**——仅仅是用到了"**一致连续**"的性质。

作为这个定理的一个推论，我们有:

**定理 4.5**：$2\pi$ 周期的连续函数可以被三角多项式**一致逼近**。

> 回忆，这个定理其实我们讲过的——我们通过证明了抽象的 **Stone-Weierstrass 定理**证明过这个东西。现在等于又有一个证明。

作为 Fejér 一致收敛定理的另一个应用，我们回答上一节讨论光滑性与系数衰减时(第 15 页)遗留下来的问题：**一个函数被它的 Fourier 系数决定到什么程度？**

**定理 4.6(唯一性定理)**：设 $f$ 是 $2\pi$ 周期，可积或者绝对可积。如果 $f$ 的所有 Fourier 系数都是零，即 $a_n=b_n=0$，$n=0,1,2,\cdots$，那么 $f$ 在它的**每个连续点**处等于 0。特别地，如果 $f$ 连续，则 $f\equiv0$。

**证明(三步)**：

**第一步**。对任何三角多项式 $P(x)$，由 Fourier 系数的定义和积分的线性性，$\displaystyle\int_{-\pi}^{\pi}f(x)P(x)dx = 0$。

**第二步**。设 $g$ 是任何 $2\pi$ 周期的连续函数。由刚证明的定理 4.5(它是 Fejér 一致收敛定理的推论)，存在一列三角多项式 $P_k$ 一致收敛到 $g$。于是
$$\left|\int_{-\pi}^{\pi}f(x)g(x)dx\right| = \left|\int_{-\pi}^{\pi}f(x)\bigl(g(x)-P_k(x)\bigr)dx\right| \le \sup_x|g-P_k|\cdot\int_{-\pi}^{\pi}|f(x)|dx \longrightarrow 0,$$
所以对一切 $2\pi$ 周期连续函数 $g$ 都有 $\displaystyle\int_{-\pi}^{\pi}fg\,dx = 0$。

**第三步**。往证 $f$ 在它的任何连续点 $x_0$ 处等于 0。如若不然，不妨设 $f(x_0)>0$。由连续性，存在 $\delta>0$，使得
$$f(x) > \frac{f(x_0)}{2},\qquad \forall x\in[x_0-\delta,x_0+\delta].$$
(由周期性，$x_0=\pm\pi$ 视为圆周上的同一点，无妨设 $x_0\in(-\pi,\pi)$，并把 $\delta$ 取得更小使 $[x_0-\delta,x_0+\delta]\subset(-\pi,\pi)$。)取**"三角帽"函数**
$$g(x) = \max\left(0,\ 1-\frac{|x-x_0|}{\delta}\right),\qquad x\in[-\pi,\pi],$$
则 $g(\pm\pi)=0$，以 $2\pi$ 为周期延拓后 $g$ 仍是连续函数，而且 $g\ge0$。于是
$$\int_{-\pi}^{\pi}f(x)g(x)dx = \int_{x_0-\delta}^{x_0+\delta}f(x)g(x)dx \ge \frac{f(x_0)}{2}\int_{x_0-\delta}^{x_0+\delta}g(x)dx = \frac{f(x_0)}{2}\cdot\delta > 0,$$
与第二步矛盾。所以 $f$ 在它的每个连续点处等于 0。

**推论 4.7**：如果两个可积(或者绝对可积)函数 $f,g$ 的 Fourier 系数完全相同，那么 $f$ 和 $g$ 在它们的**公共连续点**处相等；特别地，若 $f,g$ 都连续，则 $f\equiv g$。换句话说，**一个连续函数由它的 Fourier 系数唯一决定**。

> [!warning] Remark 4.8
> 结论中的"连续点"**不能改进为"每个点"**：改动 $f$ 在一点(甚至有限多个点)的值不改变任何积分，因而不改变任何 Fourier 系数。将来在实变函数课程中会证明(Lebesgue)：**黎曼可积函数的间断点组成零测集，即它几乎处处连续**；到那时本定理自动升级为更强的形式——系数全零的可积函数几乎处处等于零。
>
> 另外，如果预先知道 $f$ 连续，那么不需要上面三步的证明：Fejér 定理给出 $\sigma_N(f)$ 一致收敛于 $f$，而系数全零又给出 $\sigma_N(f)\equiv0$，所以此时直接有 $f\equiv0$ 处处成立。

### 4.3 Abel 求和

还是本节开头那个发散级数 $1-1+1-1+\cdots$。前面我们用几条公理"证明"了它应该等于 $1/2$；用刚讲过的 Cesàro 求和也能算出同一个数(部分和在 $1,0$ 之间交替，其算术平均趋于 $1/2$)。还可以考虑另一种思路(**Abel 求和**)：
$$1+x+x^2+\cdots = \frac{1}{1-x}.$$
当 $x\to-1$ 时，左边逐项趋于我们讨论的级数，右边有极限，又是 $1/2$。

这几种看上去不同的想法把同一个发散级数"算出"了同一个值，这**不是巧合**。更多这样的例子可以看 Hardy 的书《Divergent Series》。

**定义 4.9**：一个级数 $\sum_k c_k$ 称为 **Abel 可和于 $s$**，如果对于任何 $0\le r<1$，级数 $A(r)=\sum_{k=1}^{\infty}c_kr^k$ 收敛，而且 $\lim_{r\to1}A(r)=s$。

> 这个定义背后的意思是很明显的，加上这个额外的 $r^k$，明显是有利于收敛的。

**引理 4.10**：设 $\sum_k c_k$ 收敛，则它在 Abel 求和意义上收敛到同一个数。

**证明**：回忆之前关于级数收敛的 **Abel 判别法**，可知如果原来的级数是收敛的，那么对于任何 $0\le r<1$，$A(r)$ 收敛(而且关于 $0\le r<1$ 是一致的)。有一致收敛的函数项级数性质，取极限 $r\to1$ 可以和求和交换。

反之是不对的，比如下面这个例子。

**例子 4.11**：
$$1-2+3-4+\cdots = \sum_{k=0}^{\infty}(-1)^k(k+1)$$
是 Abel 可和的，**Abel 和为 $1/4$**。

这时利用之前求幂级数和函数的技巧，可以算出
$$A(r) = \sum_{k=0}^{\infty}(-1)^k(k+1)r^k = \frac{1}{(1+r)^2}.$$
令 $r\to1$ 即得 Abel 和 $1/4$。此外，这个级数的部分和是 $1,-1,2,-2,\cdots$，前 $n$ 项和为 $(-1)^{n+1}\lceil n/2\rceil$，于是前 $2m$ 个部分和的算术平均恒为 0，而前 $2m-1$ 个部分和的算术平均为 $\frac{m}{2m-1}\to\frac12$，两个子列极限不同，故算术平均没有极限，所以它**不是 Cesàro 可和的**；这一点在下面比较 Cesàro 与 Abel 求和的定理证明中还会用到。

**定理 4.12**：对于给定的级数 $\sum c_n$，**严格收敛推出 Cesàro 意义下收敛，Cesàro 意义下收敛推出 Abel 意义下收敛；而且这两个推出都不可逆。**

**证明**：前一句话是显然的。下面证明后一句。本证明级数从 1 开始求和。设 $S_n=c_1+\cdots+c_n$ 是部分和，另 $\sigma_n=\frac{S_1+\cdots+S_n}{n}$，所以 Cesàro 意义下收敛的意思，就是 $\lim_{n\to\infty}\sigma_n$ 有极限。

作为准备证明下面的**形式上**的等式(并不是说级数收敛且相等，只是说左右两边的级数对应系数相同，完全是同一个级数，至于收不收敛都再说)：
$$\sum c_nr^n = (1-r)^2\sum(n\sigma_n)r^n. \tag{4.1}$$
看法如下：因为 $\frac{1}{1-r}=\sum_{n\ge0}r^n$，由幂级数乘法(系数是卷积)，一个幂级数乘以 $\frac{1}{1-r}$ 之后，第 $n$ 个系数恰好是原来前 $n$ 个系数之和。也就是说，**乘以 $\frac{1}{1-r}$ 就是取部分和**。于是
$$\sum_{n\ge1}S_nr^n = \frac{1}{1-r}\sum_{n\ge1}c_nr^n.$$
而 $n\sigma_n = S_1+\cdots+S_n$ 又是 $(S_n)$ 的部分和，再操作一次，得
$$\sum_{n\ge1}n\sigma_nr^n = \frac{1}{1-r}\sum_{n\ge1}S_nr^n = \frac{1}{(1-r)^2}\sum_{n\ge1}c_nr^n.$$
两边乘以 $(1-r)^2$ 就是 (4.1)。

现在假设 Cesàro 收敛，即 $\sigma_n\to\sigma$。不难看出 (4.1) 右侧的级数在 $r\in[0,1)$ 时收敛，进而左侧也收敛。只需要证明 $\lim_{r\to1^-}\text{RHS}=\sigma$。通过调整 $c_1$，不妨设 $\sigma=0$。用定义，对于任何 $\varepsilon>0$，存在 $N$，使得 $n>N$ 时 $|\sigma_n|<\varepsilon$。目标是找 $\delta>0$，使得当 $1-\delta<r<1$ 时
$$\left|(1-r)^2\sum_{n=1}^{\infty}(n\sigma_n)r^n\right| \le 2\varepsilon.$$
把和分成 $n\le N$ 与 $n>N$ 两段。前一段是有限和，$(1-r)^2\to0$，故可以取 $\delta>0$，使得 $1-\delta<r<1$ 时其绝对值 $\le\varepsilon$。对于后一段，利用 $|\sigma_n|<\varepsilon$ 和(之前级数的知识)$\sum_{n=1}^{\infty}nr^n=\frac{r}{(1-r)^2}$，
$$\left|(1-r)^2\sum_{n>N}(n\sigma_n)r^n\right| \le \varepsilon(1-r)^2\sum_{n>N}nr^n \le \varepsilon(1-r)^2\cdot\frac{r}{(1-r)^2} \le \varepsilon.$$
两段相加即得所要的估计。

最后，只要研究级数 $1-2+3-4+5-\cdots$ 就可以说明 **Abel 收敛不能推出 Cesàro 求和收敛**。

**定理 4.13**：设 $f$ 可积或者绝对可积，若 $f$ 在 $x_0$ 点连续，则它的 Fourier 级数的 **Abel 求和**在 $x_0$ 点收敛于 $f(x_0)$。另外，如果 $f$ 连续，则一致收敛。

> 注：我们现在讨论的 Fourier 级数是函数项级数，所以对应的 Abel 求和也是每点考虑进而也是函数的极限问题。

> [!info] Remark 4.14
> 这里可能需要灵活一下 Abel 求和的定义。Fourier 级数的复形式是**双头**的，实形式需要把 $\sin$ 和 $\cos$ 看成一个项。

**证明**：因为 $f$ 的假设，$f$ 的 Fourier 系数 $c_n$ 是有界的，进而，函数项级数
$$\sum_{-\infty}^{\infty}r^{|n|}c_ne^{in\theta}$$
对于任何 $0\le r<1$ 是一致收敛的。实际上，把 $r$ 和 $\theta$ 都当成参数，关于 $0\le r<1-\delta$ 也是一致收敛的。我们记和函数为 $A(r,\theta)$。

再次和之前的讨论类似，算一个 $A(r,\theta)$ 的表达式
$$A(r,\theta) = \sum_{-\infty}^{\infty}r^{|n|}\left(\frac{1}{2\pi}\int_{-\pi}^{\pi}f(\phi)e^{-in\phi}d\phi\right)e^{in\theta}
= \frac{1}{2\pi}\int_{-\pi}^{\pi}f(\phi)\left(\sum_{-\infty}^{\infty}r^{|n|}e^{-in(\phi-\theta)}\right)d\phi
= \frac{1}{2\pi}\int_{-\pi}^{\pi}f(\varphi)P_r(\theta-\varphi)d\varphi
= \frac{1}{2\pi}\int_{-\pi}^{\pi}f(\theta-\omega)P_r(\omega)d\omega,$$
其中
$$P_r(\theta) = \sum_{-\infty}^{\infty}r^{|n|}e^{in\theta}.$$
换一种写法(用 $z=re^{i\theta}$)
$$P_r(\theta) = 1+\sum_{n=1}^{\infty}z^n+\sum_{n=1}^{\infty}(\bar z)^n = 1+\frac{z}{1-z}+\frac{\bar z}{1-\bar z} = \frac{1-r^2}{1-2r\cos\theta+r^2}.$$
可以观察出这个函数的性质

- $\displaystyle\frac{1}{2\pi}\int_{-\pi}^{\pi}P_r(\theta)d\theta = 1$;
- $P_r(\theta)\ge0$;
- 对于任何 $\delta>0$，$\displaystyle\lim_{r\to1}\max_{\delta\le|\theta|\le\pi} = 0$。

于是我们又可以引用**著名的套路**。

> [!info] Remark 4.15
> 其实这个定理不需要重新证明，可以由前面的结论组合出来。第一个结论：在 $f$ 的连续点 $x_0$ 处，Fejér 定理(定理 4.3)给出 Fourier 级数 Cesàro 可和于 $f(x_0)$，再由定理 4.12(Cesàro 可和 $\Rightarrow$ Abel 可和)即得。第二个结论也一样：$f$ 连续时 Fejér 定理给出 $\sigma_N$ 一致收敛于 $f$，而定理 4.12 证明中的估计只用到对 $|\sigma_N-\sigma|$ 的控制，关于 $\theta$ 是一致的，故 $A(r,\theta)$ 一致收敛于 $f$。**这里保留 Poisson 核的直接证明，是因为它顺手给出了下面解 Laplace 方程边值问题所需的显式表达式。**

**定理 4.16**(*)：设 $f$ 是 $2\pi$ 周期的连续函数，$a_n,b_n$ 是其 Fourier 系数。令
$$u(r,\theta) = \frac{a_0}{2}+\sum_{n=1}^{\infty}r^n(a_n\cos n\theta+b_n\sin n\theta),\qquad r<1,$$
并补充定义 $u(1,\theta)=f(\theta)$。则 $u$ 是 Dirichlet 问题
$$\begin{cases}\Delta u = 0, & x^2+y^2<1,\\ u(1,\theta)=f(\theta)\end{cases}$$
的解，即：$u$ 在开圆盘 $x^2+y^2<1$ 内是 $C^\infty$ 的**调和函数**，并且在闭圆盘上连续。

> [!tip] (*) 这个定理其实有更多的内涵：它实际上已经**解出了平面单位圆盘上的 Dirichlet 问题**。

**证明**：$f$ 连续，故可积，其 Fourier 系数有界：记 $M=\frac{1}{\pi}\int_{-\pi}^{\pi}|f(x)|dx$，则 $|a_n|,|b_n|\le M$。于是对任何 $r_0<1$，在 $r\le r_0$ 上，定义 $u$ 的级数以及逐项求导任意次之后的级数都被收敛的数项级数 $2M\sum_nn^kr_0^n$ 控制，因而一致收敛。所以 $u$ 在开圆盘内是 $C^\infty$ 的，而且 $\Delta$ 可以逐项作用。(逐项求导在原点附近也没有问题：在 $r\le r_0$ 上级数是 $z,\bar z$ 的幂级数。)每一项 $r^n\cos n\theta=\operatorname{Re}z^n$ 和 $r^n\sin n\theta=\operatorname{Im}z^n$ 都是调和的：比如用平面 Laplace 算子的极坐标形式
$$\Delta u = \partial_r^2u+\frac{1}{r}\partial_ru+\frac{1}{r^2}\partial_\theta^2u$$
直接验算。因此 $\Delta u=0$ 在开圆盘内成立。

边值条件就是定理 4.13：$f$ 连续时，$u(r,\theta)\to f(\theta)$($r\to1$)关于 $\theta$ 一致。注意这不只是径向极限：当 $(r,\theta)\to(1,\theta_0)$ 时，
$$|u(r,\theta)-f(\theta_0)| \le \sup_\theta|u(r,\theta)-f(\theta)|+|f(\theta)-f(\theta_0)| \longrightarrow 0,$$
即 $u$ 沿任何路径趋于边界点都有正确的极限。故补充定义 $u(1,\theta)=f(\theta)$ 之后，$u$ 在闭圆盘上连续。

### 4.4 文献注记:Hardy《Divergent Series》(§4.3)

发散级数理论的系统性经典著作是 **G. H. Hardy《Divergent Series》**(Oxford: Clarendon Press, 1949;Hardy 去世后出版，来自他多年讲授此课程的讲义)。本节开头的公理化定义即取自该书第一章。围绕着我们讲过的内容，自然有三个问题，书里各给出了远为完整的回答。以下定理与章节的编号沿用该书。

**(1) 除了 Cesàro 的 $(C,1)$ 和 Abel 的 $(A)$，还有别的吗？** 有很多，而且各有来头。算术平均可以直接推广：$(C,1)$ 只是 Cesàro 平均 $(C,k)$ 的最低阶，对任何 $k>-1$(甚至非整数 $k$)都有定义(第五章);与之平行的 **Hölder 平均 $(H,k)$** 是反复取普通算术平均。换一个核就得到一个新方法：**Euler 平均 $(E,q)$** 用二项分布式的权(第八章)，**Borel 方法**用 Poisson 分布式的权 $e^{-x}x^n/n!$(第八、九章)，**Nörlund 平均 $(N,p)$** 用任意权序列的卷积(第四章，Cesàro 是其特例)，**Riesz 典型平均**则用任意的"类型"序列。直接从 Fourier 级数理论中还能长出别的方法(§4.17，和我们讲义的关系最直接)：把 $\frac12+\cos\theta+\cos2\theta+\cdots$ 的 Fejér 核换成 $(1+\cos\theta)^m$ 型的核，就得到 **de la Vallée-Poussin 方法 $(VP)$**;放弃核的正性，则有 **Riemann 的 $(R,2)$ 方法**，它是一般三角级数理论(Riemann 的 Habilitationsschrift)的基本工具。最后，**Hausdorff 平均**(第十一章)用"矩量序列"给出统一框架，Cesàro、Hölder、Euler 方法都是它的特例。反过来也有警示：存在一些正则方法，连 $1-1+1-1+\cdots$ 都求不了和(§4.15)。所以光满足我们开头那几条公理，还远远不够确定一个方法的行为。

**(2) 这些方法之间的强弱关系是什么？** 我们只讨论了严格收敛 $\Rightarrow(C,1)\Rightarrow(A)$，且反向不成立;书中的核心结果有：Cesàro 方法随阶数严格增强 $(C,k)\Rightarrow(C,k')$($k'>k$)，且真包含;而 $(H,k)$ 与 $(C,k)$ 总是等价的("等价性定理"，§5.8)。**Abel 方法比所有 Cesàro 方法都强**：$(C,k)\Rightarrow(A)$ 对每个 $k$ 成立(Thm. 55，是我们证的 $k=1$ 情形的推广);并且存在对任何阶 $k$ 都不 Cesàro 可和、却 Abel 可和的级数(Thm. 56，用 $e^{1/(1-x)}$ 的展开构造)。这比我们的例子 $1-2+3-4+\cdots$(只说明 Abel 强于 $(C,1)$)说的多得多。Euler 方法随 $q$ 增强(Thm. 118)，且凡 Euler 可和的级数必 Borel 可和(Thm. 128)。对 Hausdorff 方法，包含与等价关系可以用矩量函数完全刻画(§11.10)。反方向是 **Tauber 定理**：可和性再加上对 $a_n$ 的额外限制，回到普通收敛。从 Tauber 本人的两个定理，到 Littlewood 的 $a_n=O(1/n)$ 条件、Hardy–Littlewood 的深化、"高指标定理"(第七章)，直到 **Wiener 用 Fourier 变换语言给出的统一理论**(第十二章)——这是全书最深的部分。

**(3) 这套理论有厉害的应用吗？** 有，举三个。**素数定理**：Wiener 的 Tauber 定理最出名的应用就是给出素数定理的一个证明(§12.11，书中讲 Ingham 的版本)，Tauber 型定理把素数定理从对 $\zeta(s)$ 函数零点分布的依赖中解放出来，只需用到 $\zeta(s)$ 在 $\Re s=1$ 上无零点。**解析延拓**：Borel 方法的"可和性多边形"(§8.8)能把幂级数求和到收敛圆之外——例如 $\sum z^n$ 的 Euler 和 Borel 和方法在一个比 $|z|<1$ 大得多的区域里给出 $\frac{1}{1-z}$，这可以看作解析延拓的一种求和论实现。**给 Euler 的"算式"一个说法**：借助 Euler–Maclaurin 公式和 $\zeta$ 函数(第十三章)，Euler、Ramanujan 那类计算——比如 $1+2+3+\cdots=\zeta(-1)=-\frac{1}{12}$——可以被严格地定义为一种求和(§13.17)，当然 Hardy 也警告这种定义适用范围窄、用起来要非常小心。

---

## 5. Fourier 级数的 $L^2$ 理论

**另外一种看法。**

### 5.1 定义(§5.1)

1. **向量空间，无穷维的**。常见的例子是函数空间，比如 $C([a,b])$ 为 $[a,b]$ 上的连续函数全体；类似的可以考虑可积函数之类的。向量空间有 $\mathbb{R}$ 线性和 $\mathbb{C}$ 线性的，比如上述函数取值不同。
2. **内积**，给定实向量空间 $V$，可以定义内积；复向量空间可以定义 **Hermite 内积**，我们统一都记作 $\langle x,y\rangle$。
3. **重要的例子**，就是在 $C([-\pi,\pi])$ 或者是 $\mathcal{R}([-\pi,\pi])$ 上定义的，
$$\langle f,g\rangle := \int_{-\pi}^{\pi}fg\,dx;\qquad\text{or}\qquad \langle f,g\rangle = \int_{-\pi}^{\pi}f\bar g\,dx.$$
当然，同样重要的例子，还有 $\ell^2$ 表示
$$\left\{(x_n)_{n\in\mathbb{N}}\ \middle|\ \sum_{n=1}^{\infty}|x_n|^2<\infty\right\}.$$
定义内积 $\langle(x_n),(y_n)\rangle = \sum_{n=1}^{\infty}x_ny_n$。
4. 无论哪种情况，都诱导了范数 $\|f\| = \sqrt{\langle f,f\rangle}$。

> [!info] Remark 5.1
> 以后我们主要理解 $C([a,b],\mathbb{R})$ 的情况吧。复的类似。可积函数空间有个坑，就是范数为 0，不一定是恒为 0 的函数。这个小问题以后再解决。
>
> 这段理论最好是在所谓 $L^2$ 空间中定义，问题是由于积分理论的不足，就暂时在连续函数空间中写吧。其实更好的也许是"分段连续"函数？各种选择也许都有问题。

5. 有了内积，就有"单位"、"正交"的概念了。

**定义 5.2**：称一组向量 $\{e_k\in V\mid k\in K\}$ 为**单位正交系**，如果 $\forall i,j\in K$，$\langle e_i,e_j\rangle = \delta_{ij}$。

虽然是无穷维，但是"线性相关"的概念还是保留了，强调"**有限**线性组合"。

**例子 5.3**：对我们而言最重要的例子是 $C([-\pi,\pi])$ 上的正交系
$$\frac{1}{\sqrt{2\pi}},\quad \frac{1}{\sqrt{\pi}}\cos nx,\quad \frac{1}{\sqrt{\pi}}\sin nx,\ \cdots$$
或者对应的复的版本 $\frac{1}{\sqrt{2\pi}}e^{inx}$，$\forall n\in\mathbb{Z}$。

直接验证就好了。注意，在定义内积的时候也许可以引入一个常数，使得这些向量的归一化简单一点。

当然可以自行考虑别的区间上的类似这种三角函数的正交系。同时应该牢记：**正交系天然的存在很多很多。这只不过是一种选择而已。** 这种选择正对应的 Fourier 的想法，不排除(确实如此)别的选择也有意义。至于为什么这个选择这么优秀，以至于 Fourier 理论有很大用处，这一点以后还可以谈。(作为**算子的特征值**。)

6. **完备性**。定义了范数之后，Cauchy 列的概念自然就有了。于是就有了完备性的概念。对我们来说以上两个重要的例子有

**引理 5.4**：$C([-\pi,\pi])$ **不是完备的**；$\ell^2$ **是**。

**证明**：前半句话已经很熟悉了，我们为此批评过好多次黎曼积分了。注意完备性是**和范数的选择有关**的，以前批评多半是针对 $\|f\|=\int_{[-\pi,\pi]}|f|$ 这个范数，现在批评是针对 $\|f\|=(\int_{[-\pi,\pi]}|f|^2)^{1/2}$。意思差不多，考虑 $f(x)=x^n$ 就可以了。

设 $(x^{(i)})_{i\in\mathbb{N}}$ 是 $\ell^2$ 中的 Cauchy 列。不难看出对于任何 $k\in\mathbb{N}$，实数列 $(x^{(i)}_k)_{i\in\mathbb{N}}$ 是 Cauchy 的。进而有 $a=(a_1,a_2,\cdots)$ 使得 $x^{(i)}_k\xrightarrow{i\to\infty}a_k$。下面证明 $a\in\ell^2$，而且 $\|x^{(i)}-a\|\xrightarrow{i\to\infty}0$。

给定 $\varepsilon>0$，由 Cauchy 列的定义，存在 $i_0$，使得 $i,j\ge i_0$ 时 $\|x^{(i)}-x^{(j)}\|<\varepsilon$。于是对任何 $K\in\mathbb{N}$，
$$\sum_{k=1}^{K}|x^{(i)}_k-x^{(j)}_k|^2 \le \|x^{(i)}-x^{(j)}\|^2 < \varepsilon^2.$$
固定 $i\ge i_0$，令 $j\to\infty$：$K$ 固定时这只是有限项的和，由逐坐标收敛，得
$$\sum_{k=1}^{K}|x^{(i)}_k-a_k|^2\le\varepsilon^2,\qquad \forall K\in\mathbb{N}.$$
再令 $K\to\infty$，得 $\|x^{(i)}-a\|\le\varepsilon$，$\forall i\ge i_0$。这同时给出两件事：$x^{(i)}-a\in\ell^2$，而 $x^{(i)}\in\ell^2$，由 $\ell^2$ 是线性空间知 $a\in\ell^2$；以及 $\|x^{(i)}-a\|\to0$($i\to\infty$)。

> [!info] Remark 5.5
> 以上证明是**经典思路**，多用于证明赋范向量空间中的收敛问题：**先利用分量(或者逐点)收敛找到极限对象；再证明这个对象确实在原来的赋范向量空间中；最后证明这个收敛是在范数意义下的。** 上面的证明把后两步合起来了。

> [!info] Remark 5.6
> 实际上，此处我们可以按照当年从 $\mathbb{Q}$ 到 $\mathbb{R}$ 的操作，去抽象的定义出一个包含连续函数集合的完备内积空间。现在就不操作了，将来我们知道它叫 $L^2([-\pi,\pi])$。

**定义 5.7**：**完备的内积空间称为 Hilbert 空间。**

本节的故事，最好的版本是针对(可分)Hilbert 空间去叙述的。目前需要委婉一点。

### 5.2 有限维逼近(§5.2)

我们假设有内积空间 $V$，和单位正交系 $\{e_i\mid i\in\mathbb{N}\}$。定义 $V_n$ 是由 $e_1,\cdots,e_n$ 张成的 $n$ 维线性空间
$$V_1\subset V_2\subset\cdots$$

**引理 5.8(有限维逼近)**：任给 $f\in V$，固定 $n$，在 $V_n$ 中有且仅有一个 $f_n$ 距离 $f$ 最近，i.e.
$$\|f-f_n\| = \inf_{g\in V_n}\|f-g\|.$$
而且
$$f_n = \sum_{k=1}^{n}\langle f,e_k\rangle e_k,$$
有著名的 **Bessel 不等式**
$$\sum_{k=1}^{\infty}|\langle f,e_k\rangle|^2\le\|f\|^2.$$

**证明**：关键是找一个 $f_n\in V_n$，使得误差 $f-f_n$ 与 $V_n$ **正交**。令
$$f_n := \sum_{k=1}^{n}\langle f,e_k\rangle e_k.$$
由单位正交性，对每个 $j=1,\cdots,n$ 都有
$$\langle f-f_n,e_j\rangle = \langle f,e_j\rangle-\sum_{k=1}^{n}\langle f,e_k\rangle\langle e_k,e_j\rangle = 0.$$
所以 $f-f_n$ 与 $V_n$ 中的每个向量都正交。

现在任取 $g\in V_n$。因为 $f_n-g\in V_n$，由**勾股定理**，
$$\|f-g\|^2 = \|(f-f_n)+(f_n-g)\|^2 = \|f-f_n\|^2+\|f_n-g\|^2 \ge \|f-f_n\|^2.$$
等号成立当且仅当 $g=f_n$。这就同时证明了最近点的存在性、唯一性以及所给的公式。

最后，在上面的恒等式中取 $g=0$，再利用单位正交性，得到
$$\|f\|^2 = \|f-f_n\|^2+\|f_n\|^2 = \|f-f_n\|^2+\sum_{k=1}^{n}|\langle f,e_k\rangle|^2. \tag{5.1}$$
右边第一项非负，故系数平方和的每个部分和都不超过 $\|f\|^2$。令 $n\to\infty$，即得 Bessel 不等式。

### 5.3 均方收敛(§5.3)

而且因为 $V_n\subset V_{n+1}$，一定有
$$\|f-f_n\|\ge\|f-f_{n+1}\|.$$
现在问题是：是不是有
$$\lim_{n\to\infty}\|f-f_n\| = 0\ ?$$
**这个事情并不是对所有的正交系成立的。** 比如你本来有一组 $e_i$ 使得这件事情成立。你拿走其中的第一个，剩下的也是无穷多个(可数多个)。剩下的那些 $f_n$ 实际上是 $f$ 在 $V_n$ 上的**投影**。因为有内积，这种投影概念都还有的。一定不可能具有这个性质的。比如，你就让 $f=e_1$。在有限维的时候，基的个数是等于维数的，少一个就看出个数不对。对于无穷维的空间而言，少一个也不行，但是不能用数数的办法体现。

**定义 5.9**：设 $V$ 是一个 Hilbert 空间，一组单位正交系 $\{e_i\}$，称为是**完备的**(这时称**正交基**)，如果对于任何的 $f\in V$ 有
$$\lim_{n\to\infty}\|f-f_n\| = 0,$$
其中 $f_n=\sum_{k=1}^{n}\langle f,e_k\rangle e_k$。这一组 $f_n$ 可以说是 $f$ 的"**均方意义**"下的逼近。

> [!warning] Remark 5.10
> 需要说明"均方"收敛是个**新概念**，可以找到一列均方收敛的函数列，使得对于任何的 $x$，函数值都不收敛。(不是说 Fourier 级数是这样啊)虽然没有逐点的意义但是它确实是"接近"了。

**定理 5.11**：设 $V$ 是 Hilbert 空间，$\{e_i\}$ 是一组完备正交系(或者叫一组基)，**当且仅当**，对于任何的 $f$，
$$\|f\|^2 = \sum_{n=1}^{\infty}|\langle f,e_n\rangle|^2.$$

> [!tip] Remark 5.12
> 这个定理的结论有点像是**无穷维的"勾股定理"**。

**证明**：只要看 (5.1) 就知道了。

当然我们可以回到 $V=C([-\pi,\pi],\mathbb{R})$ 的例子，然后取这组 $e_i$ 就是
$$\frac{1}{\sqrt{2\pi}},\quad \frac{1}{\sqrt{\pi}}\cos nx,\quad \frac{1}{\sqrt{\pi}}\sin nx,\ \cdots$$
不难算出 $V_{2n+1}$ 就是"次数不超过"$n$ 的三角多项式，而且 $f_{2n+1}$ 就是(Fourier 级数的部分和)
$$f_{2n+1} = \frac{a_0}{2}+\sum_{k=1}^{n}\bigl(a_k\cos kx+b_k\sin kx\bigr).$$
这些个三角函数是不是构成基呢？**是的。** 我们先在 $2\pi$ 周期的连续函数空间(记作 $\tilde C([-\pi,\pi])$)上证明这一点。

**定理 5.13**：设 $f$ 是 $2\pi$ 周期的实值连续函数。那么 $f$ 的 Fourier 级数在**均方意义下**收敛于 $f$。而且有如下著名的 **Parseval 等式**
$$\frac{a_0^2}{2}+\sum_{n=1}^{\infty}\bigl(a_n^2+b_n^2\bigr) = \frac{1}{\pi}\int_{-\pi}^{\pi}|f|^2dx = \frac{1}{\pi}\|f\|^2.$$

**证明**：记 $S_n=f_{2n+1}$ 为 $f$ 的 $n$ 阶 Fourier 部分和。由引理 5.8，它是 $V_{2n+1}$ 中距离 $f$ 最近的点。因此，**只要能用三角多项式在均方意义下逼近 $f$，Fourier 部分和就至少能逼近得一样好**。

任给 $\varepsilon>0$，由三角多项式一致逼近定理(定理 4.5)，可取一个次数不超过 $N$ 的三角多项式 $h$，使得 $\max_{[-\pi,\pi]}|f-h|<\varepsilon/\sqrt{2\pi}$。当 $n\ge N$ 时，$h\in V_{2n+1}$，所以
$$\|f-S_n\|\le\|f-h\|\le\sqrt{2\pi}\max_{[-\pi,\pi]}|f-h|<\varepsilon.$$
这就证明了 $S_n$ 在均方意义下收敛于 $f$。

最后，将前面已经写出的 $S_n=f_{2n+1}$ 代入勾股恒等式 (5.1)，利用三角函数的正交性，得到
$$\|f\|^2 = \|f-S_n\|^2+\pi\left(\frac{a_0^2}{2}+\sum_{k=1}^{n}(a_k^2+b_k^2)\right).$$
令 $n\to\infty$，右边的误差项趋于 0，再除以 $\pi$，就是所需的 Parseval 等式。

**推论 5.14**：上面的定理的证明用到了三角多项式的一致逼近，所以只对 $2\pi$ 周期的连续函数 $f$ 叙述。但这个限制**不是本质的**：利用连续函数可以在 $L^2$ 意义下逼近任何"$f^2$ 广义可积"的函数(我们还必须要求 $f$ 本身也是可积或者绝对可积，不然 Fourier 系数定义都有问题)，均方收敛和 Parseval 等式对这样的 $f$ 同样成立。

也就是说，前面那个关于 $C$ 和 $\tilde C$ 的顾虑其实不是真正的 gap：换空间再完备化，得到的还是同一个 $L^2$。

我们可以考虑一个从内积空间 $\tilde C([-\pi,\pi])$ 到 $\ell^2$ 的映射 $\mathcal{F}$
$$\mathcal{F}(f) := \left(\sqrt{\pi}\sqrt{2}\,a_0,\ \cdots,\ \sqrt{\pi}a_n,\ \sqrt{\pi}b_n,\ \cdots\right).$$
Parseval 等式实际上说明上述映射是**等距**。当然也是**单射**。问题**它不是满射**。

这里就是那个**完备化的套路**。我们可以定义 $L^2([-\pi,\pi])$ 作为 $\tilde C([-\pi,\pi])$ 中 Cauchy 序列的等价类，然后使用诱导的内积。我们可以证明它是一个 **Hilbert 空间**，而且和 $\ell^2$ 是**等距**的。基本上这个等距，就是所谓 **$L^2$ 理论**。

关于这套理论及其推广的历史，详见本节末的历史注记(小节 5.5)。

### 5.4 推广(§5.4，讲个故事而已，没有什么需要记住的)

上面整个故事就是因为有一组由三角函数给出的基。那么很自然的问有没有别的。下面再给一个：**Legendre 多项式**。

在 $[0,1]$ 上，定义函数
$$L_n(x) = \frac{d^n}{dx^n}(x^2-1)^n,\qquad n=0,1,2,\cdots$$

1. 易见 $L_n$ 是一个多项式；而且 $\deg(L_n)=n$。进而任何一个 $n$ 次多项式 $P$ 一定可以写成 $L_n$ 的线性组合。
2. **正交性**。计算
$$A_{mn} = \int_{-1}^{1}\frac{d^m}{dx^m}(x^2-1)^m\frac{d^n}{dx^n}(x^2-1)^n dx.$$
只要不停的做分部积分，就可以证明
$$A_{mn} = \delta_{mn}\frac{(n!)^2\,2^{2n+1}}{2n+1}.$$
进而，如果定义 $\hat L_n = \frac{L_n}{\|L_n\|}$，我们得到一组**正交系**。
3. **为什么这个是完备的？**(如果理解了 Fourier 对应的证明，这个不困难。)
4. 这组基实际上可以理解成是多项式序列 $1,x,x^2,\cdots$ 通过 **Gram-Schmidt 正交化方法**得到的。

给定这些自然就要一整套类似 Fourier 的展开理论。

**(*)** 另外，为什么三角函数组成的正交基可以用来求解方程(在引言中)？还利用了它们是下面这个**特征值问题**的解：
$$u''(x)+\lambda u(x) = 0\qquad(\text{要求 } u \text{ 是 } 2\pi \text{ 周期的}).$$
这个理论是线性代数中**对称矩阵特征向量性质**的无穷维推广。

类似的，上面的 $L_n$ 也恰好是某个特征值问题的特征函数：
$$\bigl((1-x^2)u'(x)\bigr)'+\lambda u(x) = 0,\qquad x\in(-1,1),$$
其中要求 $u$ 在端点 $\pm1$ 处有界(正则)。此时特征值是 $\lambda_n=n(n+1)$，对应的特征函数是 $L_n$。展开写就是
$$(1-x^2)L_n''-2xL_n'+n(n+1)L_n = 0.$$
(验证：对 $y=(x^2-1)^n$ 求一次导得 $(x^2-1)y'=2nxy$，两边用 Leibniz 公式求 $n+1$ 次导即可。)这与三角函数的情形**完全平行**：三角函数是周期边条件下 $u''+\lambda u=0$ 的特征函数，$L_n$ 则是上述正则边条件下 $\bigl((1-x^2)u'\bigr)'+\lambda u=0$ 的特征函数；这同样解释了为什么 $L_n$ 两两正交。

### 5.5 历史注记(§5.5)

我们在这里把 Legendre 多项式作为 Fourier 展开的推广，这是**按数学结构安排**的讲法。历史上，Legendre 多项式出现得很早：**Legendre 在 1783 年提交的关于均匀球状天体引力的研究中引入了这类函数**，论文于 1785 年出版。当时的具体问题，是怎样计算这类天体对外部质点的引力。我们今天用正交化来构造这些多项式，**原来的发现过程则来自天体力学中的计算**。

到了 **1830 年代，Sturm 和 Liouville** 开始系统研究一大类二阶微分方程及其函数展开。Liouville 的 1836 年论文开头，考虑的就是**非均匀细杆的热传导**：材料性质随位置变化，分离变量以后，所需的函数也随之改变。用今天的语言说，在适当的边界条件下，微分算子的**自伴性**使不同特征值对应的特征函数正交；至于能否用它们展开一般函数，还需要证明**完备性**。这样，三角函数、Legendre 多项式以及许多别的函数系，就有了共同的研究方向：**从方程寻找合适的正交系，再研究它的展开理论。**

**Fourier 级数的 $L^2$ 理论又是怎样产生的？** 其中一条线索，是**逐渐把注意力放到平方误差的积分上**。**Parseval 在 1799 年的论文中**已经提出了把系数乘积之和与积分联系起来的公式，当时主要把它当作**级数求和的方法**。到了十九世纪后期和二十世纪初，对这些公式的严格研究也使均方逼近的意义越来越清楚。一个和本讲义很接近的例子是 **Hurwitz 的 1902 年论文**：他为了研究 Fourier 级数的几何应用，先对有界可积函数证明 Parseval 等式，其中明确使用了**平方误差恒等式**。用我们现在的记号，取单位正交系 $\{e_k\}$，令 $c_k=\langle f,e_k\rangle$，这个恒等式就是
$$\left\|f-\sum_{k=1}^{N}c_ke_k\right\|^2 = \|f\|^2-\sum_{k=1}^{N}|c_k|^2.$$
因此，**Parseval 等式恰好是在说：有限维最佳逼近的平方误差趋于零**。这里的"平方"有明确的几何理由，正交性可以消去交叉项，使误差与坐标的平方和直接联系起来。这样，从无穷级数是否逐点表示一个函数的研究中，又发展出了关于距离、投影和最佳逼近的研究。

接着还有一个反过来的问题：**先给一列平方可和的数 $c_k$，它们一定能作为某个函数的展开系数吗？** 令 $P_N=\sum_{k=1}^{N}c_ke_k$，正交性给出
$$\|P_M-P_N\|^2 = \sum_{k=N+1}^{M}|c_k|^2\longrightarrow 0\qquad(M>N\to\infty).$$
这说明 $P_N$ 是 Cauchy 列。要由此找到一个极限函数，还必须知道所处的函数空间是**完备**的。连续函数空间在这个范数下不完备，于是问题已经牵涉到应该允许哪些函数作为极限。本节用 Cauchy 列的等价类来扩大空间，正好呈现了这个困难。

**Lebesgue 在 1902 年的博士论文中**系统发展了新的积分理论，为这些问题提供了合适的工具。**1907 年，Frigyes Riesz 和 Ernst Fischer 各自独立的工作**确立了后来所谓的 **Riesz–Fischer 定理**。它把均方极限落实在平方可积的可测函数中，也解决了上面的系数实现问题。对完备单位正交系，再结合 Parseval 等式，就得到 $L^2$ 与 $\ell^2$ 之间的**等距同构**；函数在这里按几乎处处相等来识别。

Riesz 后来回忆，是阅读 **Fatou 的论文**，特别是其中关于积分与极限的工具，帮助他在 1907 年得到这个结果。他把这一对应形容为函数空间与无穷维坐标空间之间的一张"**永久往返票**"，并说明它最初服务于积分方程的研究。这里可以看到本节背后几条问题的汇合：Fourier 展开、函数的逼近、新的积分理论，以及 Hilbert 所研究的无穷维坐标空间。

沿着这个方向，还可以看到几种很有意思的发展。

**(1) 从圆周到球面。** 圆周上的三角函数可以换成球面上的**球谐函数**。在轴对称的情形，球谐函数又归结为 $P_n(\cos\theta)$，其中 $P_n$ 是通常归一化的 Legendre 多项式。这样，Legendre 多项式便与球面上的 Fourier 展开联系起来；地球表面上的函数，也可以按球面的不同振动模式来分解。

**(2) 从离散频率到连续频率。** 在实直线上，Fourier 变换的频率参数连续变化。**1910 年，Plancherel** 把均方理论推进到这一情形。采用适当归一化以后，Fourier 变换成为 $L^2(\mathbb{R})$ 上的**酉算子**，仍然保持平方范数。对于一般的 $L^2$ 函数，这个变换要通过均方极限来定义，因为直接写出的积分未必绝对收敛。

**(3) 从整段振动到局部细节。** **Haar 在 1909 年的博士论文、1910 年的期刊论文**中研究了一组由分段常值函数构成的正交系。用今天的眼光看，它用不断二分的小区间来组织函数：每个小区间上取左半段为正、右半段为负的函数，再作归一化。对应的系数测量两半区间的平均值之差，因此同时记录**位置和尺度**。在 $[0,1]$ 上加上常数函数，就得到一组完备单位正交系，保留了均方展开与 Parseval 等式。这也是后来**小波理论**的一个早期来源。

**(4) 从圆周的加法到一般的对称群。** 复指数满足 $e^{in(\theta+\phi)}=e^{in\theta}e^{in\phi}$，所以它还记录了圆周群的运算。**Peter 和 Weyl 在 1927 年的工作**把这条思路推广：用今天的表述，**紧群的不可约酉表示的矩阵系数，经适当归一化后，构成其 $L^2$ 空间的一组正交基**。圆周群的不可约表示都是一维的，因而普通 Fourier 级数就包含在其中。到了旋转群，展开系数自然变成了矩阵，函数展开也就与对称性的研究联系起来。

**9 月 26 日 的课结束在这里。**

---

## 结论:三种收敛意义的层级

| 收敛类型 | 工具 | 条件 | 结论 |
|---|---|---|---|
| 点态(第 3 章) | Dirichlet 核 + 局部化 | 分段光滑/有界变差/Dini | 每点收敛到左右极限均值 |
| 一致(第 4 章 Cesàro) | Fejér 核 | 只要 $f$ 连续 | $\sigma_N\rightrightarrows f$ |
| Abel(第 4 章) | Poisson 核 | 只要 $f$ 连续 | $A(r,\theta)\to f$，且解出圆盘 Dirichlet 问题 |
| 均方 $L^2$(第 5 章) | 内积/正交集/Parseval | 只要平方可积 | $\|S_N-f\|\to0$ |

**注意(常见误区)**：第 4 章的一致收敛是对 $\sigma_N$(Cesàro 平均)或 $A(r,\theta)$(Abel 求和)，**不是** $S_N$！$S_N$ 的点态收敛仍需第 3 章的条件。各定理各管各的。

**光滑性 → 收敛速度阶梯**：可积(系数 $\to0$，Riemann-Lebesgue) → 分段光滑(点态收敛到均值) → 连续($\sigma_N$ 一致收敛) → $C^k$(系数 $o(1/n^k)$，一致收敛且快)。

## 概念页索引(本课程)

- [[分离变量法]] — 第 1 章(物理动机、齐次化、完备性与唯一性)
- [[傅里叶级数]] — 第 2 章(定义、算例、区间变换)
- [[狄利克雷核]] — 第 3 章工具(部分和的卷积表示)
- [[傅里叶级数收敛]] — 第 3 章主线(R-L 引理、局部化、Dini、光滑性)
- [[吉布斯现象]] — 第 3 章 Zygmund 注记(间断点过冲)
- [[广义求和与Cesàro求和]] — 第 4 章入口(公理化弱收敛、Hardy 注记)
- [[Cesàro求和与Fejér核]] — 第 4 章工具(Fejér 核三性质、定理 4.5)
- [[Abel求和与Poisson核]] — 第 4 章(定理 4.12/4.13/4.16、圆盘 Dirichlet 问题)
- [[傅里叶系数唯一性]] — 第 4 章定理 4.6(补上第 3 章的缺口)
- [[L²理论与Hilbert空间]] — 第 5 章主线(内积、投影、Bessel、Parseval、完备化)
- [[正交函数系]] — 第 5 章一般框架
- [[Parseval恒等式]] — 第 5 章定理 5.11/5.13
- [[勒让德多项式]] — 第 5 章 §5.4 推广
- [[傅里叶学习路径]] — 学习路线图
- [[傅里叶文献]] — 教材与参考资料

---

> [!info] 第 6—8 章（讲义 2026-09-21 版，61 页完整版，正文齐备）
> 本部分续写讲义第 6—8 章。第 6 章 Fourier 级数的应用（§6.1 解方程、§6.2 等周不等式、§6.3 Weyl 分布定理 (*)、§6.4 连续函数的发散级数 (*)、§6.5 历史注记）；第 7 章 Fourier 变换（§7.1 缓降函数、§7.2 速降函数、§7.3 求逆公式、§7.4 $L^2$ 理论）；第 8 章 Fourier 变换的应用（§8.1 直线上的热方程、§8.2 Poisson 求和公式、§8.3 海森堡不确定性原理、§8.4 历史注记）。带 (*) 的小节为选读；§6.5、§8.4 历史注记由 AI 生成，供背景参考。

## 6. Fourier 级数的应用

**主线**：把前几章建立的理论落到具体问题上——严格求解热方程、证明等周不等式与 Weyl 等分布定理，并构造出 Fourier 级数在一点发散的连续函数。

### 6.1 求解方程

回到引言中试图求解的热方程初边值问题（周期边条件）：
$$\begin{cases}\partial_t u=\partial_x^2 u \\ u(0,\theta)=f(\theta).\end{cases}$$
这里不计较条件的最优，设 $f$ 很光滑，比如 $C^{l+1}$。要严肃讨论为什么引言中用分离变量法得到的形式解是真正的解。

1. 将 $f$ 展开得 Fourier 系数，利用函数光滑性与 Fourier 系数衰减的关系，知道
$$|a_n|,\ |b_n|\le M\,n^{-l}.$$
2. 回忆分离变量给出的形式解
$$u(t,\theta)=\sum_{n=0}^{\infty}\bigl(a_n\cos n\theta+b_n\sin n\theta\bigr)e^{-n^2kt}.$$
右边为什么收敛？实际上可以证明右边在 $[0,\infty)\times[-\pi,\pi]$ 上一致收敛；更进一步，右边的级数的逐项求导也一致收敛（只要 $l$ 够大，可以逐项求很多次导数）。
3. 如果逐项求导成立，那么只要代入方程计算，所有的形式计算就都是严格的了。

> [!tip] 逐项求导为何合法（脚注 30、31）
> 之前学的含参变量积分只有一个参数，现在 $(t,\theta)$ 都是参数。可以逐个分量去理解：对 $t$ 求导时把 $\theta$ 固定当常数，对 $\theta$ 求导时把 $t$ 看成常数，用之前的定理说明求导与求和可交换。
>
> 这里成功的关键又一次用到 $(\cos n\theta)''=-n^2\cos n\theta$。这是 Fourier 级数所选取的基优秀的原因：它本质上是算子 $Lu=\partial_\theta^2 u$ 的特征向量，而这些特征向量正好构成 Hilbert 空间的一组基——线性代数对应定理的推广。

### 6.2 应用：等周不等式

问题：平面上定长的曲线围成的最大面积是多少？答案：圆。我们假装有如下定理：

> [!note] 定理 6.1（等周不等式）
> 设 $\Gamma$ 是 $\mathbb{R}^2$ 上的简单闭曲线，长度为 $l$，$A$ 是该曲线围成的区域面积。则
> $$A\le\frac{l^2}{4\pi},$$
> 而且等号成立当且仅当 $\Gamma$ 是圆周。

> [!info] Remark 6.2
> 我们没有能力正经地证明。曲线、围成、长度这些概念比较深。仅对“光滑有正则参数化的简单闭曲线”证明。

设有参数化曲线 $\gamma:[a,b]\to\mathbb{R}^2$，$\gamma(t)=(x(t),y(t))$。简单意味着 $\gamma$ 除去 $a,b$ 之外是单射；闭意味着 $\gamma(a)=\gamma(b)$；长度是 $\int_a^b|\gamma'|dt$。不妨设曲线的参数恰好表示弧长（这种参数化存在），则 $l=b-a$ 且 $|\gamma'(s)|=1$。面积公式：
$$A=\frac12\int_a^b\bigl(x(t)y'(t)-y(t)x'(t)\bigr)dt=\int_a^b x(t)y'(t)\,dt.$$

**证明**（不妨设 $l=2\pi$，$\gamma:[0,2\pi]\to\mathbb{R}^2$，继续用复的形式）。对 $x(s)$ 和 $y(s)$ 分别作复形式 Fourier 展开
$$x(s)\sim\sum_n a_n e^{ins},\qquad y(s)\sim\sum_n b_n e^{ins},$$
进而 $x'(s)\sim\sum_n a_n(in)e^{ins}$，$y'(s)\sim\sum_n b_n(in)e^{ins}$。弧长条件 $\int_0^{2\pi}\bigl((x')^2+(y')^2\bigr)ds=2\pi$ 和 Parseval 等式（见 [[Parseval恒等式]]）推出
$$(6.1)\qquad\sum_{n=-\infty}^{\infty}n^2\bigl(|a_n|^2+|b_n|^2\bigr)=1.$$

> [!info] 脚注 33（内积约定）
> 这里的（复值）内积定义为 $\langle f,g\rangle=\dfrac{1}{2\pi}\displaystyle\int_{[-\pi,\pi]}f(x)\overline{g(x)}\,dx$，则 $e^{inx}$ 是一组单位正交基；若 $f\sim\sum_n c_ne^{inx}$，$g\sim\sum_n d_ne^{inx}$，则 $\langle f,g\rangle=\sum_n c_n\overline{d_n}$。

利用 $A=\int_0^{2\pi}x(s)y'(s)\,ds$，
$$\begin{aligned}
A&\overset{(a)}{=}2\pi\sum_n a_n\overline{nb_n}\\
&\overset{(c)}{\le}2\pi\sum_{n=-\infty}^{\infty}|a_n|\,|nb_n|\\
&\overset{(d)}{\le}2\pi\sum_{n=-\infty}^{\infty}|na_n|\,|nb_n|\\
&\overset{(b)}{\le}\pi\sum_{n=-\infty}^{\infty}n^2\bigl(|a_n|^2+|b_n|^2\bigr)=\pi.
\end{aligned}$$

> [!info] 取等号的条件
> - (a) 那一步没有要求，注意 $y'$ 是实值函数，所以你可以认为上面有一个共轭；
> - (b) 要求：对 $n\ne0$，$|a_n|=|b_n|$；
> - (d) 要求：对 $|n|>1$，必须有 $a_nb_n=0$；结合前一点，对任何 $|n|>1$ 必须有 $a_n=b_n=0$；
> - (c) 与 $a_0,b_0$ 没有关系，要求 $a_1b_1-a_{-1}b_{-1}=|a_1||b_1|+|a_{-1}||b_{-1}|$。另外由于 $x,y$ 实值，$a_{-1}=\overline{a_1}$，$b_{-1}=\overline{b_1}$。$a_1b_1$ 减去自己的共轭等于自己模长的 2 倍，说明它是纯虚数，故 $b_1=a_1\cdot(\pm i)$；
> - 利用总长 $2\pi$ 的条件，$|a_1|=|b_1|=\frac12$。

最后设 $a_1=u+iv$，则 $b_1=-v+iu$（或差一个符号），得
$$x(s)=a_0+2u\cos\theta-2v\sin\theta,\qquad y(s)=b_0-2v\cos\theta-2u\sin\theta,$$
不难看出这是半径为 1 的圆。

证法的历史来历以及等周问题本身的故事，见 §6.5。

### 6.3 Weyl 的分布定理 (*)

设 $x$ 是实数，$\langle x\rangle\in[0,1)$ 表示 $x$ 的小数部分。

> [!note] 定义 6.3（等分布）
> $[0,1)$ 中的数列 $\{\xi_n\}$ 称为**等分布的**，如果对于任何 $(a,b)\subset[0,1)$，有
> $$\lim_{N\to\infty}\frac{\#\{1\le n\le N\mid\xi_n\in(a,b)\}}{N}=b-a.$$
> 落入区间的概率恰好是 $b-a$，故称等分布。

> [!note] 定理 6.4（Weyl）
> 设 $\gamma$ 是无理数，则数列 $x_n=\langle n\gamma\rangle$ 在 $[0,1)$ 中等分布。

**证明**（分步）。
1. 设 $f$ 是 $\chi_{[a,b]}$ 作周期一延拓得到的函数，则 $\#\{1\le n\le N\mid\xi_n\in(a,b)\}=\sum_{n=1}^{N}f(\xi_n)$（这里 $\xi_n=\langle n\gamma\rangle$）。因此只要证明
$$(6.2)\qquad\lim_{N\to\infty}\frac1N\sum_{n=1}^{N}f(\xi_n)=b-a=\int_0^1 f(x)\,dx.$$
2. 为证明 (6.2)，注意它两边都保持“序”，而且与“一致逼近”关系好：若 $f\le g$，则 $\frac1N\sum f(\xi_n)\le\frac1N\sum g(\xi_n)$ 且 $\int_0^1 f\le\int_0^1 g$；若 $|f-g|\le\varepsilon$，则两边的偏差都 $\le\varepsilon$。
3. 先看 $f$ 是周期一的三角函数（固定 $k\in\mathbb{N}\setminus\{0\}$），$f(x)=e^{2\pi kix}$，则 (6.2) 的左边可以利用等比级数直接算出
$$\frac1N\sum_{n=1}^{N}e^{(2\pi k\gamma)in}\longrightarrow0=\int_0^1 e^{2\pi kix}\,dx.$$
（$k=0$ 时显然成立；这个极限用到 $\gamma$ 是无理数，等比级数求和时才能确保对任何 $k$ 分母都不为 0。）
4. 于是 (6.2) 对三角多项式成立，进而对所有周期 1 的连续函数成立（因为可以一致逼近）。最后对 $f=\chi_{[a,b]}$，对任何 $\varepsilon>0$，取连续函数 $f_1\le f$ 且 $\int_0^1|f-f_1|(t)\,dt\le\varepsilon$。利用单调性
$$\lim_{N\to\infty}\frac1N\sum_{n=1}^{N}f(\xi_n)\ge\lim_{N\to\infty}\frac1N\sum_{n=1}^{N}f_1(\xi_n)=\int_0^1 f_1(x)\,dx\ge\int_0^1 f(x)\,dx-\varepsilon.$$
在 $f$ 的上方使用类似的逼近，得到另一个方向的不等式，然后令 $\varepsilon\to0$。证毕。

> [!info] 讲义更正
> 此处讲义有一处勘误批注（“之前的版本有问题，课上有问题，更正如下”），脚注 34 又指出后面并不用一致逼近这一点，称其为误导。

Weyl 定理的历史背景见 §6.5。

### 6.4 连续函数可以有发散的 Fourier 级数 (*)

（参考 Stein 第 3.2.2 节。）

从一个计算题开始，计算函数
$$f(\theta)=\begin{cases}i(\pi-\theta), & 0<\theta<\pi,\\ i(-\pi-\theta), & -\pi<\theta\le0.\end{cases}$$
它的 Fourier 级数为 $\displaystyle\sum_{n\ne0}\frac{e^{in\theta}}{n}$，对应的部分和
$$S_N(\theta)=\sum_{1\le|n|\le N}\frac{e^{in\theta}}{n}=\sum_{1\le n\le N}\frac{e^{in\theta}-e^{-in\theta}}{n}.$$
它的逐点收敛性质是已知的，尤其在 $\theta=0$ 处必须收敛于 0（确实，在 0 点实际上是 $n$ 和 $-n$ 项抵消才是 0）。单独看 $n\ge1$ 的部分，对应的是调和级数，不收敛。这个现象是下面构造的基础。

> [!note] 引理 6.5
> $\max_\theta|S_N(\theta)|$ 关于 $N$ 一致有界。

**证明**（不平凡）。这是 Abel 和
$$A_r(\theta)=\sum_{1\le n<\infty}r^n\frac{e^{in\theta}-e^{-in\theta}}{n}.$$
断言 $\max_\theta|A_r(\theta)|\le C$ 关于 $r$ 一致。这一步简单，只要回忆 Poisson 核（见 [[Abel求和与Poisson核]]）
$$A_r(\theta)=\frac{1}{2\pi}\int_{-\pi}^{\pi}f(\theta-\varphi)P_r(\varphi)\,d\varphi,$$
把绝对值放进去，利用 $f$ 有界、$P_r(\theta)$ 的总权为 1。
不平凡的是计算 $A_r(\theta)$ 和 $S_N(\theta)$ 的差。令 $c_n=\dfrac{e^{in\theta}-e^{-in\theta}}{n}$，对于任何 $N$，直接取 $r=1-\frac1N$（至于为什么这么取，不知道）。计算
$$S_N(\theta)-A_r(\theta)=\sum_{1\le n\le N}c_n(1-r^n)-\sum_{n\ge N+1}c_nr^n.$$
初等公式表明 $1-r^n=(1-r)(1+r+\cdots+r^{n-1})\le n(1-r)$，于是
$$|S_N(\theta)-A_r(\theta)|\le\sum_{1\le n\le N}|c_n|\,n(1-r)+\sum_{n\ge N+1}|c_n|\,n\left(\frac1N\right)^n.$$
由 $c_n$ 的表达式看出 $n|c_n|$ 有界，进而
$$|S_N(\theta)-A_r(\theta)|\le NC(1-r)+\frac{C}{N}\sum_{n\ge0}r^n\le C,$$
最后充分利用了 $r=1-\frac1N$。

整个例子构造的想法与具体实现：取权重 $\alpha_k$ 与尺度 $N_k$（讲义取 $\alpha_k=\frac{1}{k^2}$，$N_k=3^{2^k}$），令
$$P_k=e^{2N_ki\theta}\sum_{1\le|n|\le N_k}\frac{e^{in\theta}}{n}.$$
$P_k$ 是一个三角多项式，其“阶”从 $N_k$ 到 $3N_k$。前面乘上一个有界的函数，就把 $-N_k$ 到 $N_k$ 阶的部分平移到 $N_k$ 到 $3N_k$ 了。妙处在于之前求和是一对对求的，平移之后再算 Fourier 级数的和就是一个个分别求和的。
前面关于部分和一致有界的引理保证
$$F(\theta)=\sum_{k=1}^{\infty}\alpha_kP_k(\theta)$$
是一致收敛的函数项级数，进而 $F$ 连续。因为一致收敛，在算 $F$ 的 Fourier 系数时可以逐项积分，进而 $F$ 的 Fourier 级数系数就如同设计的一样。但 $F$ 的 Fourier 级数部分和在 0 点是不可能收敛的，因为
$$S_{2N_k}(0)-S_{N_k}(0)=\alpha_k\sum_{n=N_k}^{2N_k}\left(-\frac1n\right)\sim-\alpha_k\log N_k\to-\infty.$$

### 6.5 历史注记

（本小节由 AI 生成，供背景参考。）

本节的几个应用里，有两个可以直接对号到历史上的原始论文：等周不等式的证明就是 Hurwitz（1902）的证明，分布定理的证明就是 Weyl（1916）的判据与证法。它们分别是“Fourier 级数的几何应用”和“Fourier 级数的数论应用”两条线索的源头。第一个应用（严格求解热方程）所接续的历史——Fourier 本人与热方程的故事——已见第一节的历史注记（§1.3）。

**等周不等式**。问题本身很古老：Zenodorus（约公元前 2 世纪）已经论说过“定长的闭曲线中圆围成的面积最大”，但著作失传，仅靠 Pappus《数学汇编》第五卷等后人转述保留。近代第一个有影响的论证属于 Steiner：1838 年的短文给出所谓“Steiner 对称化”——把沿一个方向的每条弦换成关于该方向的垂直平分线居中的等长弦，则面积不变而周长不增，除非图形本来就关于该轴对称；1841/42 年的长文又给出包括“四铰链法”在内的五种改进程序，于是面积最大者的每个内接角都必须是直角，由 Thales 定理的逆命题，曲线只能是圆。但两类论证都在同一步失足：“若原曲线是面积最大者”。Steiner 证明的是任何非圆的图形都可以被改进，这只能说明最大值若可达到则必在圆处达到；最大值的存在性本身并没有证明。Dirichlet 当时就指出了这个缺口，Steiner 始终不接受。

这个缺口不是孤立的疏忽，而是时代的病症：Dirichlet–Riemann 在位势问题中也默认“下确界必被某个容许函数达到”。1870 年前后 Weierstrass 给出反例（在 $C^1[-1,1]$ 中以 $x(-1)=-1$、$x(1)=1$ 为边条件极小化 $\int_{-1}^1 t^2\dot x^2\,dt$，下确界为 0 但任何 $C^1$ 函数都达不到），确立了这类缺口的真实危险性。Weierstrass 本人在 1870 年代的柏林变分法讲义中给出了等周问题的第一个完整证明，但讲义生前未发表，直到 1927 年才据听课笔记整理收入《全集》第七卷。第一个发表的严格证明属于他的学生 Edler（1882），做法是在 Steiner 自己的框架内补入存在性论证，不过只针对凸曲线；Schwarz 在 1884 年给出的著名严格证明则是三维（球面）的情形。

也许有人会问：1882 年，“严格化”所需的概念——可求长、有界变差、几乎处处可微——都还没有，Edler 的修补怎么可能？答案是 Steiner–Edler 定理的对象从头到尾是凸曲线，而凸性恰好规避了后来逼出测度论的全部病态：凸曲线的长度就是内接折线长度的上确界，单调收敛，无需任何一般定义。相比之下，一般的“可求长曲线”要等 Jordan 为 Fourier 级数收敛问题引入有界变差函数（1881）、又在《分析教程》中证明“可求长当且仅当参数化函数有界变差”（1893）才有定义；“有界变差函数几乎处处可微”要等 Lebesgue 的博士论文（1902）；“弧长等于积分”当且仅当参数化绝对连续，则是 Vitali（1905–1908）与 Tonelli（1908）的工作。所以准确地说：先有凸曲线的严格证明，后有“有界变差”这顶分析帽子。一般可求长曲线的等周定理之所以到二十世纪才完整，与其说是证明难，不如说是定理的陈述本身要等概念齐备才写得出来。

本节的证法来自 Hurwitz：1901 年先投三页通报，1902 年全文发表，标题就叫《Fourier 级数的若干几何应用》。这是第一个完全不用几何作图的证明：弧长条件经 Parseval 等式变成系数的平方和，面积经 Green 公式变成系数的双线性型，逐项比较 $k\le k^2$ 即得不等式，等号条件一并落出——本节证明的每一步都在其中。同一篇论文还先对有界可积函数证明了 Parseval 等式（见 §5.5）。值得指出的是，这个证明内含了后来所谓 Wirtinger 不等式（一维的 Poincaré 不等式）的第一次几何应用，开创了“用谱间隙写几何不等式”的路线；经 Hardy–Littlewood–Pólya《不等式》（1934）收录后，它成为这个定理的标准证法之一。Hurwitz 为逐项求导假设了边界分段光滑；对一般可求长曲线的直接初等处理，最后由 E. Schmidt（1939）给出，只用 Green 公式和 Cauchy–Schwarz 不等式。

**Weyl 的分布定理**。背景是 Kronecker 定理（1880 年代）：$\gamma$ 无理时，$\langle n\gamma\rangle$ 在 $[0,1]$ 中稠密。Weyl（1916）问的是更精细的问题：稠密还不够，轨道是否“均匀”地铺满区间？他的论文做了三件事。第一，把“模 1 等分布”定义为任意数列的一般性质——此前只有具体数列的具体稠密性，这个抽象化本身使分布成为一个可以研究的对象。第二，给出判据：数列等分布当且仅当对每个非零整数 $k$，$\frac1N\sum_{n\le N}e^{2\pi ik\xi_n}\to0$；本节的证明用的正是这个判据加等比级数求和，判据的内核其实是一个关于测度的 Fourier 唯一性命题——非零频率上 Fourier 系数全为零的测度只能是均匀测度。第三，对没有封闭公式可用的相位，Weyl 发明了“差分法”：把指数和取模平方并作平移，相位差的次数降一，归纳到底；由此证明一般多项式数列的等分布：只要多项式有非常数项的无理系数，$\langle P(n)\rangle$ 就等分布。

值得说明的是这两个结果在 Weyl 自己论文里的地位。皇家学会的 Weyl 讣告（1957）说得直白：$\langle n\gamma\rangle$ 的等分布“已被其他人用多种方法证明过”，在文中只是主定理的“直接推论”（immediate deduction）——本节的等比级数估计就是全部所需；“更重要的推论”是多项式数列的等分布。同一篇讣告评价此文“对后来解析数论几乎所有工作都具有根本重要性”。这条时间线容易写反：并非“Weyl 提出问题、Hardy 看出应用”。Hardy 和 Littlewood 早在 1914 年就系统研究过 $\langle n^k\gamma\rangle$ 的分布并给出定量误差项，方法是用 theta 函数的 Jacobi 虚变换加 Poisson 求和——这正是后来圆法 major arc 结构的原始版本；但模变换是二次相位的专利，高次走不通，Weyl 的差分法不依赖任何模性、对任意次数有效，所以是真正的突破而不只是简化。1919 年起，Hardy–Littlewood 绕开单项式的局限，把“有理点局部化加消去”的结构独立出来发展成圆法。两人实为互相吸收：Hardy–Littlewood 给 Weyl 提供了问题，Weyl 给 Hardy 提供了把指数和当作通用对象的视角。

最后澄清一个常见的误归属：$\langle n\gamma\rangle$ 的前 $N$ 个点把 $[0,1]$ 分成至多三种长度的区间，这个“三间隙定理”是 Steinhaus 的猜想，第一批证明属于 Sós、Świerczkowski 等人，已是 1950 年代末的事，与 Weyl 无关。另一个方向的后续也值得记一笔：等分布的定量化——偏差（discrepancy）的估计——经 Erdős–Turán 不等式归结为指数和估计，正是 Weyl 方法的直接后代，并经 Koksma–Hlawka 不等式成为拟 Monte Carlo 方法的基础。

## 7. Fourier 变换

**主线**：把频率从离散推向连续——Fourier 变换的定义、性质、求逆公式与 $L^2$ 等距。

给定合适的 $f$，准备定义含参变量的积分
$$\hat f(\xi):=\int_{-\infty}^{\infty}f(x)e^{-2\pi ix\xi}\,dx.$$
这个函数称为函数 $f$ 的 Fourier 变换。讨论 Fourier 变换的时候，很难仅仅局限在实值函数讨论，所以从这里开始，我们都是考虑复值函数；即使 $f$ 是实值的，它的 Fourier 变换通常也不是。这个东西很有用，有很多优秀的性质。一个主要的困难是：如果对于性质很好的 $f$，那么这些性质很容易证明；对于性质一般的 $f$，很多看上去很简单的性质证明艰难多了。

### 7.1 缓降函数

我们约定
$$\int_{-\infty}^{\infty}f(x)\,dx=\lim_{N\to\infty}\int_{-N}^{N}f(x)\,dx.$$

> [!note] 定义 7.1（缓降函数）
> $f:\mathbb{R}\to\mathbb{C}$ 称为**缓降的**，记为 $f\in M(\mathbb{R})$，如果 $f$ 是连续的，而且存在 $A>0$，使得
> $$|f(x)|\le\frac{A}{1+x^2},\qquad x\in\mathbb{R}.$$

注记：以上定义中的 $2$ 不是很本质的，你可以考虑换成任何比 $1$ 大的数。缓降函数的 Fourier 变换定义良好——虽然这不是最广泛的一类可以定义 Fourier 变换的函数，但至少是比较方便的一类。

关于缓降函数，罗列如下初等性质：
- 线性：$\forall f,g\in M(\mathbb{R})$，$\forall a,b\in\mathbb{C}$，$\displaystyle\int_{-\infty}^{\infty}(af+bg)\,dx=a\int_{-\infty}^{\infty}f\,dx+b\int_{-\infty}^{\infty}g\,dx$；
- 平移不变性：对任何 $h\in\mathbb{R}$，$\displaystyle\int_{-\infty}^{\infty}f(x+h)\,dx=\int_{-\infty}^{\infty}f(x)\,dx$；
- 伸缩：$\displaystyle\delta\int_{-\infty}^{\infty}f(\delta x)\,dx=\int_{-\infty}^{\infty}f(x)\,dx$；
- 平移连续性：$\displaystyle\lim_{h\to0}\int_{-\infty}^{\infty}|f(x-h)-f(x)|\,dx=0$。

证明过于简单就不多说了。

> [!note] 定理 7.2
> 设 $f\in M(\mathbb{R})$，则 $\hat f(\xi)$ 是连续函数，而且 $\displaystyle\lim_{\xi\to\infty}\hat f(\xi)=0$。

（证明利用缓降的定义，转化成有界区间上的积分。）

> [!example] 例子 7.3
> 设 $f(x)=\chi_{[-1,1]}(x)$，则
> $$\hat f(\xi)=\int_{-\infty}^{\infty}f(x)e^{-2\pi ix\xi}dx=\int_{-1}^{1}e^{-2\pi ix\xi}dx=2\int_0^1\cos(2\pi x\xi)\,dx=\frac{\sin 2\pi\xi}{\pi\xi}.$$

> [!example] 例子 7.4
> 设 $g(x)=\begin{cases}1-|x|,&|x|<1,\\0,&\text{otherwise}.\end{cases}$ 则
> $$\hat g(\xi)=2\int_0^1(1-x)\cos(2\pi x\xi)\,dx=\cdots=\frac{\sin^2(\pi\xi)}{\pi^2\xi^2}.$$

形式上还是有“函数越光滑对应的 Fourier 变换在 $\xi$ 趋于无穷时越快收敛于 0”。巧的是上面两个例子的 Fourier 变换还是实值的，因为它们是偶函数。

### 7.2 速降函数

> [!note] 定义 7.5（速降函数）
> $f:\mathbb{R}\to\mathbb{C}$ 称为**速降的**，如果 $f$ 无穷次连续可微，而且对于任何 $k,l\in\mathbb{N}$，都有
> $$\sup_{x\in\mathbb{R}}|x|^k\,|f^{(l)}(x)|\le C(k,l)<\infty.$$
> 记全体速降函数为 $S(\mathbb{R})$。

注意速降函数一定是缓降的：取 $k=0$ 和 $k=2$ 可知 $f$ 连续而且 $|f(x)|\le\frac{C}{1+x^2}$。所以速降函数的 Fourier 变换一定是定义良好的。

> [!example] 例子 7.6
> - 速降函数 $f$ 的任何导数都是速降的；
> - 速降函数乘以任何多项式函数都是速降的；
> - $f(x)=e^{-x^2}$ 是速降的；
> - 紧支集的光滑函数是速降的。

速降函数看上去很苛刻，但是是证明 Fourier 有关性质最愉快的函数空间。

> [!info] 命题 7.7
> 设 $f\in S(\mathbb{R})$：
> - 平移函数 $f(x+h)$ 的 Fourier 变换为 $\hat f(\xi)e^{2\pi ih\xi}$；
> - $f(x)e^{-2\pi ixh}\mapsto\hat f(\xi+h)$；
> - 伸缩：$f(\delta x)\mapsto\delta^{-1}\hat f(\delta^{-1}\xi)$；
> - 导数：$f'(x)\mapsto2\pi i\xi\hat f(\xi)$；
> - 乘以 $x$：$-2\pi ixf(x)\mapsto\dfrac{d\hat f}{d\xi}(\xi)$。

以上证明都很简单，略。但是它们合起来可以证明：

> [!note] 定理 7.8
> Fourier 变换把速降函数映射到速降函数。

### 7.3 求逆公式

求逆公式本身很好看，证明也不错。问题是需要用到一些广义积分的性质，不能说我们没有讲过，但是肯定不熟悉。好在如果仅仅考虑速降函数，对应的性质成立是不难想象的。

> [!note] 引理 7.9
> 1. $\displaystyle\int_{-\infty}^{\infty}e^{-\pi x^2}dx=1$；
> 2. 若 $f(x)=e^{-\pi x^2}$，则 $\hat f(\xi)=f(\xi)$。

**证明**。第一个性质是一个重要的结论，迟早要知道，至少有如下技巧证明：
$$\int_{-\infty}^{\infty}e^{-\pi x^2}dx\cdot\int_{-\infty}^{\infty}e^{-\pi y^2}dy=\int_{\mathbb{R}^2}e^{-\pi r^2}r\,dr\,d\theta=1.$$
第二个性质的证明利用了常微分方程（初值问题）的解的唯一性。易见 $f$ 满足方程
$$f'(x)=-2\pi xf(x),\qquad f(0)=1.$$
令 $F(\xi)=\int_{-\infty}^{\infty}f(x)e^{-2\pi ix\xi}dx$。利用引理第一条，有 $F(0)=1$（需要花力气去说明下面的计算是合理的），
$$\begin{aligned}
F'(\xi)&=\int_{-\infty}^{\infty}f(x)(-2\pi ix)e^{-2\pi ix\xi}dx\\
&\overset{\text{ODE}}{=}\int_{-\infty}^{\infty}if'(x)e^{-2\pi ix\xi}dx\\
&=(-i)\int_{-\infty}^{\infty}f(x)\cdot(-2\pi i\xi)e^{-2\pi ix\xi}dx=-2\pi\xi F(\xi).
\end{aligned}$$
由常微分方程的唯一性，$F(\xi)=f(\xi)$。

卷积和 Fourier 变换有好的性质。

> [!note] 引理 7.10
> 若 $f,g\in S(\mathbb{R})$，则
> $$\int_{-\infty}^{\infty}f(x)\hat g(x)\,dx=\int_{-\infty}^{\infty}\hat f(y)g(y)\,dy.$$

**证明**。下面这个交换积分次序是合理的（需要花点力气，不过速降没问题）。
$$\int_{-\infty}^{\infty}f(x)\hat g(x)\,dx=\int_{-\infty}^{\infty}f(x)\int_{-\infty}^{\infty}g(y)e^{-2\pi ixy}dy\,dx=\int_{-\infty}^{\infty}\!\!\int_{-\infty}^{\infty}f(x)g(y)e^{-2\pi ixy}dx\,dy=\text{交换次序}=\text{右边}.$$

> [!note] 定理 7.11（求逆公式）
> 若 $f\in S(\mathbb{R})$，则
> $$f(x)=\int_{-\infty}^{\infty}\hat f(\xi)e^{2\pi ix\xi}d\xi.$$

**证明**。利用 $e^{-\pi x^2}$ 的 Fourier 变换是自身，和初等性质。我们发现
$$G_\delta(x)=e^{-\pi\delta x^2}$$
的 Fourier 变换是
$$K_\delta(x)=\frac{1}{\sqrt\delta}e^{-\pi x^2/\delta}.$$
（观察当 $\delta\to0$ 时，这两个函数的形态：$G_\delta$ 渐渐地变成常值函数 1；$K_\delta$ 渐渐地变成那种“著名套路”中那个集中的权。）利用前一个引理
$$(7.1)\qquad\int_{-\infty}^{\infty}f(x)K_\delta(x)\,dx=\int_{-\infty}^{\infty}\hat f(y)G_\delta(y)\,dy.$$
令 $\delta\to0$，定理证明结束。

> [!info] 讲义更正
> 这个版本的求逆公式不好用，后面的例子说明了这个问题（课上并更正了一个符号，目前写的是对的）。一个常见的定理如下。

> [!note] 定理 7.12（见 Rudin《Real and Complex Analysis》定理 9.11）
> 如果 $f\in L^1$，而且 $\hat f\in L^1$，而且
> $$g(x)=\int_{-\infty}^{\infty}\hat f(t)e^{2\pi ixt}dt,\qquad\forall x\in\mathbb{R},$$
> 则 $g$ 连续，而且 $g=f$ 几乎处处。

> [!note] 推论 7.13
> 如果 $f$ 和 $\hat f$ 都是缓降的，定理 7.11 肯定成立。

可以“理解”我们不可能从 $f$ 缓降推出 $\hat f$ 缓降；类似地也不可能从 $f$ 可积推出 $\hat f$ 可积。比如考虑在 $f$ 上加入一个非常振动、但是衰减非常快的函数，直观上这会给 $\hat f$ 在 $\xi$ 大的地方增加取值。所以定理成立的条件多半要同时约束 $f$ 和 $\hat f$。从定理证明的角度看，我们需要各种条件保证 (7.1) 成立：这个式子证明不复杂，本质上就是一个交换积分次序，但因为我们学习的积分理论比较弱，所以吃亏了。

于是我们可以定义 Fourier 逆变换，对于任何 $f\in S(\mathbb{R})$，
$$\check f(x)=\int_{-\infty}^{\infty}f(\xi)e^{2\pi ix\xi}d\xi.$$
我们发现这个逆变换和变换差不多：$\check f(x)=\hat f(-x)$。既然 $\hat f$ 仍是速降函数，可以把上式中的 $f$ 换成 $\hat f$，得到 $\check{\hat f}(x)=\hat{\hat f}(-x)$。而由求逆公式，左边正是 $f(x)$，所以
$$(7.2)\qquad f(x)=\hat{\hat f}(-x).$$
换言之 $\hat{\hat f}(x)=f(-x)$。进而发现 Fourier 变换四次回到自己——Fourier 变换是一个周期为四的映射。

把本节的内容组装起来，这是课上觉得想当然、但细细看应该要说明的结论：

> [!note] 引理 7.14
> Fourier 变换 $\mathcal{F}:S(\mathbb{R})\to S(\mathbb{R})$ 是线性同构，其逆映射就是 Fourier 逆变换 $\check{\ }$。

**证明**。线性性由积分的线性性可得；$\mathcal{F}$ 把 $S(\mathbb{R})$ 映入 $S(\mathbb{R})$ 由上一小节的定理保证。
单射：若 $\hat f=0$，由求逆公式（定理 7.11），$f=\check{\hat f}=0$。
满射：对任何 $g\in S(\mathbb{R})$，令 $f=\check g$。由 $\check g(x)=\hat g(-x)$ 知 $f$ 也是速降的，而且
$$\hat f(\xi)=\int_{-\infty}^{\infty}\hat g(-x)e^{-2\pi ix\xi}dx=\int_{-\infty}^{\infty}\hat g(y)e^{2\pi iy\xi}dy=g(\xi),$$
最后一步是对 $g$ 用求逆公式。

### 7.4 L² 理论

和 Fourier 级数的理论类似，我们也可以在向量空间 $S(\mathbb{R})$ 上定义一个内积
$$\langle f,g\rangle=\int_{-\infty}^{\infty}f\bar g\,dx.$$
（记得我们考虑的是复值函数，所以速降函数空间也是复向量空间，这里需要一个 Hermite 内积。）本节的主要定理：

> [!note] 定理 7.15
> Fourier 变换是 $S(\mathbb{R})$ 到自身的等距。

> [!note] 定义 7.16（卷积）
> 对于合适的 $f,g$，$f$ 和 $g$ 的卷积定义为
> $$(f*g)(x)=\int_{-\infty}^{\infty}f(y)g(x-y)\,dy.$$

（至少速降函数是可以的，将来会说基本上 $L^1$ 就可以。）对于速降函数，卷积有性质：

> [!note] 引理 7.17
> 设 $f,g\in S(\mathbb{R})$，则
> - $f*g\in S(\mathbb{R})$；
> - $f*g=g*f$；
> - $\widehat{f*g}(\xi)=\hat f(\xi)\hat g(\xi)$。

**证明**。1. 当我们对卷积 $f*g$ 求导的时候，求导可以穿透积分号（因为大家速降，所以可以严格证明）。然后我们乘以 $x^l$，
$$\begin{aligned}
x^l(f*g)^{(k)}(x)&=\int_{-\infty}^{\infty}f(y)\,x^l g^{(k)}(x-y)\,dy\\
&=\int_{-\infty}^{\infty}f(y)\,\bigl((x-y)+y\bigr)^l g^{(k)}(x-y)\,dy\\
&=\int_{-\infty}^{\infty}\sum_{j=0}^{l}\binom{l}{j}y^{j}f(y)\cdot(x-y)^{l-j}g^{(k)}(x-y)\,dy\le C(k,l,f,g)<\infty.
\end{aligned}$$
上面最后一行用到 $f$ 和 $g$ 速降的性质。由 $k,l$ 的任意性，我们知道 $f*g$ 是速降的。
2. 平凡的。
3. 代入定义直接计算即可。
$$\begin{aligned}
\widehat{f*g}(\xi)&=\int_{-\infty}^{\infty}f*g(x)e^{-2\pi ix\xi}dx=\int_{-\infty}^{\infty}\!\!\int_{-\infty}^{\infty}f(y)g(x-y)\,dy\,e^{-2\pi ix\xi}dx\\
&=\int_{-\infty}^{\infty}f(y)e^{-2\pi iy\xi}\left(\int_{-\infty}^{\infty}g(x-y)e^{-2\pi i(x-y)\xi}\,d(x-y)\right)dy\\
&=\hat g(\xi)\int_{-\infty}^{\infty}f(y)e^{-2\pi iy\xi}\,dy=\hat g(\xi)\hat f(\xi).
\end{aligned}$$

**大定理**：

> [!note] 定理 7.18（Plancherel）
> 若 $f\in S(\mathbb{R})$，则 $\|f\|=\|\hat f\|$。

**证明**（这个证明不难看懂，不过还是不容易想到）。令 $f^b(x)=f(-x)$，计算
$$\widehat{f^b}(\xi)=\int_{-\infty}^{\infty}f(-x)e^{-2\pi ix\xi}dx=\int_{-\infty}^{\infty}f(-x)e^{2\pi ix\xi}dx=\int_{-\infty}^{\infty}f(y)e^{-2\pi iy\xi}dy=\hat f(\xi).$$
设 $h(x)=(f*f^b)(x)$，则 $\hat h(\xi)=\hat f(\xi)\widehat{f^b}(\xi)=|\hat f(\xi)|^2$，且
$$h(0)=(f*f^b)(0)=\int_{-\infty}^{\infty}f(y)f^b(0-y)\,dy=\int_{-\infty}^{\infty}|f|^2(x)\,dx.$$
因为 $h\in S(\mathbb{R})$，用求逆公式 $h(0)=\int_{-\infty}^{\infty}\hat h(\xi)\,d\xi$。

有了这个公式，我们可以做一些和 Fourier 级数类似的“完备化操作”：准备定义 $L^2(\mathbb{R},\mathbb{C})$ 为 $S(\mathbb{R})$ 在这个范数下的完备化。那么我们得到一个 Hilbert 空间 $L^2(\mathbb{R},\mathbb{C})$ 到自身的等距：Fourier 变换。

（9 月 20 日的课结束在这里。）

## 8. Fourier 变换的应用

**主线**：Fourier 变换的三个应用——求解直线上的热方程、Poisson 求和公式、海森堡不确定性原理。

### 8.1 求解直线上的热方程

现在我们考虑在 $\mathbb{R}$ 上求解方程
$$\begin{cases}\partial_t u=\partial_x^2 u,\\ u(x,0)=f(x).\end{cases}$$

> [!info] Remark 8.1
> 这里我们没有提出任何边条件。其一，既然考虑 $\mathbb{R}$ 似乎并没有边；其二，可以认为有物理过程对应，就是无穷远处啥也没有（所谓啥也没有，其实也是一个条件）；其三，数学上不提边条件还是会出问题的（唯一性不对）。

形式上，我们可以在方程两边同时进行 Fourier 变换，继而
$$\begin{cases}\partial_t\hat u(\xi,t)=-4\pi^2\xi^2\hat u(\xi,t),\\ \hat u(\xi,0)=\hat f(\xi).\end{cases}$$
这可以看成是以 $\xi$ 为参数的一族 ODE，容易求得
$$\hat u(\xi,t)=\hat f(\xi)e^{-4\pi^2\xi^2t}.$$
再求逆变换可得 $u(x,t)=f*H_t$，其中 $\widehat{H_t}=e^{-4\pi^2\xi^2t}$，
$$H(x,t)=\frac{1}{\sqrt{4\pi t}}e^{-\frac{x^2}{4t}}.$$
那么我们形式上有求解公式
$$u(x,t)=\int_{\mathbb{R}}f(y)\frac{1}{\sqrt{4\pi t}}e^{-\frac{|x-y|^2}{4t}}\,dy.$$

这段“变换、解一族 ODE、再反演”的形式计算并不是后人的整理：Fourier 变换本来就是为解方程发明的。而它从一个解方程的技巧，逐步成长为整个线性偏微分算子理论的骨架——这条历史线路详见 §8.4。

### 8.2 Poisson 求和公式

> [!note] 定理 8.2（Poisson 求和公式）
> 设 $f\in S(\mathbb{R})$，则
> $$\sum_{n=-\infty}^{\infty}f(x+n)=\sum_{n=-\infty}^{\infty}\hat f(n)e^{2\pi inx}.$$
> 特别地，当 $x=0$，
> $$\sum_{n=-\infty}^{\infty}f(n)=\sum_{n=-\infty}^{\infty}\hat f(n).$$

> [!info] Remark 8.3
> 我们也可以从下面这个特殊的结论往上推，只要固定 $x$，用 $g(y)=f(x+y)$ 就可以了。

**证明**。左边是一个周期 1 的函数，这个级数收敛得很好（这正是速降的用处；可以验证这个级数的任何阶导数都是一致收敛的）。我们计算它的 Fourier 级数，因为这个函数性质这么好，那么对应的 Fourier 级数一定收敛回到它。我们计算 Fourier 系数（$m$ 阶）
$$\begin{aligned}
&\int_0^1\sum_{n=-\infty}^{\infty}f(x+n)e^{-2\pi imx}dx=\sum_{n=-\infty}^{\infty}\int_0^1 f(x+n)e^{-2\pi imx}dx\\
&=\sum_{n=-\infty}^{\infty}\int_n^{n+1}f(y)e^{-2\pi imy}dy=\int_{-\infty}^{\infty}f(y)e^{-2\pi imy}dy=\hat f(m).
\end{aligned}$$
所以看见右边正好是 Fourier 级数。

Poisson 求和公式的应用：

> [!example] 例子 8.4
> 求证：$\forall\alpha\in\mathbb{R}\setminus\mathbb{Z}$，
> $$\sum_{n=-\infty}^{\infty}\frac{1}{(n+\alpha)^2}=\frac{\pi^2}{(\sin\pi\alpha)^2}.$$

暴力计算可得 $g(x)=\begin{cases}1-|x|,&|x|\le1,\\0,&\text{otherwise}\end{cases}$ 的 Fourier 变换 $\hat g(\xi)=\left(\dfrac{\sin\pi\xi}{\pi\xi}\right)^2$。利用 Fourier 变换和逆变换之间的关系（见 (7.2)），可以令 $f=\hat g$，知道 $\hat f=g$。对这个 $f$ 用 Poisson 求和公式
$$\sum_{n=-\infty}^{\infty}\frac{(\sin\pi(n+\alpha))^2}{\pi^2(n+\alpha)^2}=\sum_{n=-\infty}^{\infty}\hat f(n)e^{2\pi in\alpha}=e^{2\pi i0\alpha}=1,$$
进而得所要等式。（若 $\alpha$ 是整数，则上面那一步相当于两边同时除以了 0。）

为什么可以用 Poisson 求和公式？回忆证明，主要是对周期 1 函数
$$F(x)=\sum_{n=-\infty}^{\infty}\left(\frac{\sin\pi(x+n)}{\pi(x+n)}\right)^2$$
使用 Fourier 级数。我们希望对应的 Fourier 级数逐点收敛回到 $F$ 自己。过去证明中关于 $F$ 的 Fourier 系数计算部分保持不变（那里只用到了 $F$ 的级数一致收敛，这由 $|\sin\pi(x+n)|\le1$ 和比较判别法立刻得到）。为了“希望”成立，我们验证 $F$ 是连续可导的：那么 $F$ 处处满足 Dini 条件，Fourier 级数逐点收敛回到 $F$。用函数项级数逐项求导的定理，$F$ 本身的级数已经一致收敛，只要验证逐项求导之后的级数还是一致收敛的：
$$\left[\left(\frac{\sin\pi(x+n)}{\pi(x+n)}\right)^2\right]'=2\frac{\sin\pi(x+n)}{\pi(x+n)}\cdot\frac{\pi\cos\pi(x+n)\cdot\pi(x+n)-\pi\sin\pi(x+n)}{\pi^2(x+n)^2}.$$
注意 $\dfrac{\sin\pi t}{\pi t}$ 在 $t=0$ 处是可去奇点，补充定义值为 1 以后是光滑函数，所以级数的每一项本来都是光滑的；下面的估计只是在 $|x+n|$ 大的时候才用。由 $|\sin|,|\cos|\le1$，当 $|x+n|\ge1$ 时通项的绝对值不超过
$$\frac{2}{\pi|x+n|}\cdot\frac{\pi|x+n|+1}{\pi(x+n)^2}\le\frac{C}{1+n^2},$$
其中 $C$ 与 $x\in[0,1]$ 和 $n$ 无关。而当 $x\in[0,1]$ 时，$|x+n|<1$ 的项至多两项（$n=0,-1$），它们是固定的 $C^1$ 函数，导数在 $[0,1]$ 上有界。合起来，求导后的级数在 $[0,1]$ 上一致收敛，$F$ 是连续可导的，Poisson 求和公式对这个 $f$ 确实成立。

> [!example] 例子 8.5（$\mathbb{S}^1$ 和 $\mathbb{R}$ 上热核的关系）
> 单位周长圆周上的热方程初值问题的解，也可以表示成一个与热核卷积的形式。以 $f(x)\sim\sum_n c_ne^{2\pi inx}$ 为初值的 Fourier 展开，则解是
> $$u(x,t)=\sum_{n=-\infty}^{\infty}e^{-4\pi^2n^2t}c_ne^{2\pi inx}=\int_0^1 f(y)H_t(x-y)\,dy,$$
> 其中 $H_t(x)=\displaystyle\sum_{n=-\infty}^{\infty}e^{-4\pi^2n^2t}e^{2\pi inx}$（这个函数天生是 $x$ 的周期 1 函数；物理意义明确，但似乎没有见过更加简单的表达形式）。
> Claim：$\forall x$，$H_t(x)=\displaystyle\sum_{n=-\infty}^{\infty}H_t(x+n)$，其中 $H_t(x)=\dfrac{1}{\sqrt{4\pi t}}e^{-\frac{x^2}{4t}}$。
> 证明直接对 $H_t$ 用 Poisson 求和公式，只需要回忆 $\widehat{H_t}(\xi)=e^{-4\pi^2\xi^2t}$。

### 8.3 海森堡不确定性原理

> [!note] 定理 8.6（不确定性原理）
> 设 $\psi\in S(\mathbb{R})$，使得 $\displaystyle\int_{-\infty}^{\infty}|\psi(x)|^2dx=1$。则
> $$\left(\int_{-\infty}^{\infty}x^2|\psi(x)|^2dx\right)\left(\int_{-\infty}^{\infty}\xi^2|\hat\psi(\xi)|^2d\xi\right)\ge\frac{1}{16\pi^2}.$$
> 而且取等号，当且仅当存在 $B>0$ 和 $A\in\mathbb{C}$，$|A|^2=\sqrt{2B/\pi}$，使得
> $$\psi(x)=Ae^{-Bx^2}.$$

> [!info] Remark 8.7
> 事实上，上述结论可以写成（对于任何 $x_0,\xi_0$）
> $$\left(\int_{-\infty}^{\infty}(x-x_0)^2|\psi(x)|^2dx\right)\left(\int_{-\infty}^{\infty}(\xi-\xi_0)^2|\hat\psi(\xi)|^2d\xi\right)\ge\frac{1}{16\pi^2}.$$
> 不难看出，使得左边取到最小的 $x_0$ 和 $\xi_0$ 分别是函数 $x$ 和 $\xi$ 在权重 $|\psi(x)|^2$ 和 $|\hat\psi|^2$ 下的平均值（期望）。只需针对这个值证明不等式，然而我们可以考虑 $\psi$ 的一个平移和相位变化使得对应的 $x_0,\xi_0$ 都是 0。这里用到了平移的 Fourier 变换公式。

**证明**。
$$1=\int_{-\infty}^{\infty}|\psi(x)|^2dx=-\int_{-\infty}^{\infty}x\frac{d}{dx}|\psi(x)|^2dx=-\int_{-\infty}^{\infty}x\bigl(\psi\bar\psi'+\psi'\bar\psi\bigr)dx.$$
Schwarz 不等式说
$$1\le2\left(\int_{-\infty}^{\infty}x^2|\psi|^2dx\right)^{1/2}\left(\int_{-\infty}^{\infty}|\psi'|^2dx\right)^{1/2}.$$
另一方面，利用求导的 Fourier 变换公式以及 Plancherel（见 [[Plancherel定理]]）可知
$$\int_{-\infty}^{\infty}|\psi'|^2dx=4\pi^2\int_{-\infty}^{\infty}|\xi|^2|\hat\psi(\xi)|^2d\xi.$$

**取等号的条件**：从第一步等号到 Schwarz 不等式，实际经历了两步放缩（注意 $\psi\bar\psi'+\psi'\bar\psi=2\operatorname{Re}(\psi\bar\psi')$）
$$1=-2\operatorname{Re}\int_{-\infty}^{\infty}x\psi\bar\psi'\,dx\le2\left|\int_{-\infty}^{\infty}x\psi\bar\psi'\,dx\right|\le2\left(\int_{-\infty}^{\infty}x^2|\psi|^2dx\right)^{1/2}\left(\int_{-\infty}^{\infty}|\psi'|^2dx\right)^{1/2}.$$
要取等号，两个不等号必须同时取等。第二个是 Schwarz 不等式，取等要求 $x\psi$ 与 $\bar\psi'$ 线性相关，即存在常数 $\lambda\in\mathbb{C}$ 使得
$$\psi'(x)=\lambda x\psi(x),\qquad\forall x\in\mathbb{R}.$$
第一个不等号取等要求 $-\operatorname{Re}\int_{-\infty}^{\infty}x\psi\bar\psi'dx=\left|\int_{-\infty}^{\infty}x\psi\bar\psi'dx\right|$，即 $\int_{-\infty}^{\infty}x\psi\bar\psi'dx$ 是非正实数。代入 $\psi'=\lambda x\psi$ 得
$$\int_{-\infty}^{\infty}x\psi\bar\psi'\,dx=\bar\lambda\int_{-\infty}^{\infty}x^2|\psi|^2dx,$$
所以 $\lambda$ 必须是非正实数；若 $\lambda=0$，则 $\psi$ 是常数，与 $\|\psi\|_{L^2}=1$ 矛盾。记 $\lambda=-2B$，$B>0$，解方程 $\psi'=-2Bx\psi$ 得
$$\psi(x)=Ae^{-Bx^2}.$$
最后由归一化条件 $1=\int_{-\infty}^{\infty}|\psi|^2dx=|A|^2\sqrt{\pi/(2B)}$ 定出 $|A|^2=\sqrt{2B/\pi}$，而 $A$ 的相位任意。反过来，直接代入可知这一族函数确实使两个不等号同时取等。

### 8.4 历史注记

（本小节由 AI 生成，供背景参考。）

Fourier 变换和微分方程的关系比 Fourier 级数更直接：这个变换本身就是为解微分方程发明的。1822 年《热的解析理论》第九章第一节的标题就是“无限长直线上热的自由运动”——正是本节第一个应用的问题。Fourier 在那里做完整套本节的计算：叠加 $e^{-q^2t}\cos qx$ 型的解，再令承载区间的尺度趋于无穷，让离散频率变成连续参数——他自己写道，三角函数倍弧的展开“se transforment en intégrales définies”（变成了定积分），从级数到积分的过渡是“en donnant une valeur infinie aux dimensions”。由此得到今天的反演公式：偶函数的情形
$$\frac{\pi}{2}F(x)=\int_0^{\infty}\cos qx\,dq\int_0^{\infty}F(\alpha)\cos q\alpha\,d\alpha,$$
一般函数的情形
$$\pi y(x)=\int_0^{\infty}d\alpha\,y(\alpha)\int_0^{\infty}dq\,\cos q(x-\alpha).$$
他甚至注意到这里的核有“cette singulière propriété”：乘上任意函数再积分，“l'effet de l'intégration est de changer $a$ en $x$ et de multiplier par le nombre $\pi$”——用今天的眼光看，这是 $\delta$ 函数（点质量）的第一次显式出场，比 Dirac 早一个世纪；而它出场的语境正是解方程：热量集中于一点（“foyer”）的解是 Gauss 型函数，一般初值的解就是它的叠加，即本节的卷积公式 $u=f*H_t$。

**从一个方程到一类方程。** 把这个工具变成方法的是 Cauchy：他关于水面波的获奖论文（1815 年投稿、1816 年获奖、1827 年才发表）对空间变量作 Fourier 变换，把偏微分方程化成一族以频率为参数的常微分方程，解出再反演——正是本节的计算流程；1820 年代他又把它系统地用于一般的常系数线性偏微分方程。这一步的意义不限于多解了几个方程：它暴露出方法的内核，即求导在 Fourier 变换下变成乘法。一个常系数线性算子 $P(\partial)$ 被变成乘以多项式 $P(\xi)$——今天称之为算子的象征（symbol）——于是“解方程 $P(\partial)u=f$”在变换后成了代数问题“用 $P(\xi)$ 去除”。Fourier 变换由此从一个解方程的技巧，变成了研究算子本身的工具。

**谱的视角。** $e^{ix\xi}$ 是 $\partial_x^2$ 的“特征函数”，Fourier 变换就是按这组连续谱特征函数的展开——Weyl（1908 年学位论文，1910 年长文）把 Sturm–Liouville 展开理论推进到奇异情形（无穷区间、系数有奇点），表明连续谱展开是一大类微分算子的通性，Fourier 变换只是其中最简单的例子。到 von Neumann（1929）建立无界自伴算子的谱定理，这条线索被收进一般理论：Fourier 变换正是算子 $-\partial_x^2$ 的谱分解。这也可以看作引言里那个观察——“基选得好，是因为它们是算子的特征向量”——的无穷区间版本。

**基本解。** 与谱视角平行的是另一条线索：求“集中源”的响应。Fourier 的“foyer”之后，Green（1828）在静电学中引入以他命名的函数，Kirchhoff（1882）给出波方程的基本解；解一般初值或一般右端的问题就归结为与基本解的卷积。对变系数方程，Levi（1907）对椭圆方程发明了 paramétrix——用冻结系数造出的近似基本解，再做修正——这个想法后来一再复活。

**严格化与除法问题。** 形式演算的合法化走了近一个世纪：逐点理论沿 Dirichlet（1829）–Jordan（1881）的路线移植到积分，$L^2$ 理论由 Plancherel（1910）建立（见 §5.5），Bochner（1932）的专著总结了当时的知识。真正的转折是广义函数：Sobolev（1936）为解双曲方程的 Cauchy 问题引入它，Schwartz 建立完整理论（1950–51 年出书，1950 年获 Fields 奖）——在缓增广义函数空间 $S'$ 上，Fourier 变换是自同构，求导永远可以进行，卷积与乘法永远互换，Fourier 和 Cauchy 的全部形式演算都成了定理。压轴的一笔来自 Cauchy 留下的代数视角：除法 $\hat u=\hat f/P(\xi)$ 在广义函数里是否总可以做？Ehrenpreis 与 Malgrange（1953–54）证明可以——任何常系数线性偏微分算子都有基本解；Hörmander 的学位论文（1955）进而按多项式 $P(\xi)$ 的增长性质给算子分类。Fourier 变换由此给出了一般常系数算子理论的基石。

**变系数与微局部化。** 常系数理论的成功自然引出变系数的问题。Lewy（1957）的著名反例表明朴素的推广会失败：存在光滑系数的线性方程，连局部解都没有。出路是把 Fourier 变换“局部化”：Calderón–Zygmund（1952）的奇异积分理论（变系数椭圆方程的估计），Kohn–Nirenberg（1965）的拟微分算子——把象征 $P(\xi)$ 推广为依赖于 $x$ 的 $a(x,\xi)$，Levi 的 paramétrix 在其中成为系统的代数运算；Hörmander 的 Fourier 积分算子（1971）再进一步，处理双曲方程中波的传播。这一套“微局部分析”是今天线性偏微分算子理论的主体，而它的定义本身——拟微分算子就是“在 Fourier 变换那边乘以一个象征”——表明 Fourier 变换自始至终是这门理论的骨架。故事甚至绕回了起点：Atiyah–Singer 指标定理（1963）的热方程证明（McKean–Singer, 1967），用的正是 Fourier 当年那只热核。

最后说明范围：本节另外两个应用各有自己的历史线索，此处不展开——Poisson 求和公式可以追溯到 Poisson 关于定积分与级数求和的论文（1823），不确定性原理则属于量子力学的历史（Heisenberg 1927 年提出，严格的数学表述与证明见 Kennard 1927、Weyl 1928）。

---

## 概念页索引（第 6—8 章新增）

- [[等周不等式]] — 第 6 章 §6.2（Fourier 方法证明等周不等式）
- [[Weyl分布定理]] — 第 6 章 §6.3（模 1 等分布）
- [[发散傅里叶级数]] — 第 6 章 §6.4（连续函数可以有发散的 Fourier 级数）
- [[热方程]] — 第 6 章 §6.1 与第 8 章 §8.1（Fourier 级数/变换两种解法）
- [[傅里叶变换]] — 第 7 章（定义、性质、求逆、$L^2$ 理论）
- [[缓降函数]] — 第 7 章 §7.1
- [[速降函数]] — 第 7 章 §7.2
- [[傅里叶逆变换]] — 第 7 章 §7.3
- [[Plancherel定理]] — 第 7 章 §7.4
- [[Poisson求和公式]] — 第 8 章 §8.2
- [[海森堡不确定性原理]] — 第 8 章 §8.3
