---
title: Fourier 合并笔记
created: 2026-09-02
updated: 2026-09-10
type: notes
tags: [fourier-series, notes, 分析III]
confidence: high
---

# Fourier 级数 笔记

> [!info] 涵盖范围
> 第 1—5 章（引言/分离变量、定义与计算、逐点收敛理论、Cesàro/Abel 广义求和、L² 理论）。讲义现为 36 页（sofar.pdf，2026-09 版），课程进行到 §5.5（9 月 26 日课）。第 6—8 章（应用、Fourier 变换、变换的应用）目录中已列出但正文尚未讲授。

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
