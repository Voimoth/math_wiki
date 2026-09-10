---
title: Abel 求和与 Poisson 核
created: 2026-09-10
updated: 2026-09-10
type: concept
tags: [fourier-series, convergence, proof-technique, harmonic-analysis]
sources: [Fourier笔记.md]
confidence: high
---

# Abel 求和与 Poisson 核 (Abel Summation & Poisson Kernel)

> [!question] 本页要回答什么？
> 除了取算术平均,还能怎样"救"一个发散级数?为什么 Abel 求和比 Cesàro 求和更强?这条看似纯技术的路,为什么顺带解出了一个几何问题?

> 讲义 §4.2。

## 1. 动机:同一个 $1-1+1-\cdots$ 的第三种算法

对发散的 $1-1+1-1+\cdots$，讲义已用**公理**(例 4.2)与 **Cesàro 求和**(部分和在 $1,0$ 间交替,算术平均趋于 $\frac12$)各算出 $\frac12$。第三种思路:利用
$$1+x+x^2+\cdots = \frac{1}{1-x},$$
令 $x\to-1$:左边逐项趋于待求级数,右边有极限 $\frac12$。三种看上去完全不同的想法给出同一个值——**这不是巧合**,正是广义求和理论的相容性(Hardy《Divergent Series》)。

## 2. 定义与首要性质

**定义 4.9(Abel 可和)**：称级数 $\sum_k c_k$ **Abel 可和于 $s$**，若对任何 $0\le r<1$，级数
$$A(r) = \sum_{k=1}^{\infty} c_k r^k$$
收敛，且 $\displaystyle\lim_{r\to 1^-}A(r) = s$。

> [!tip] 定义背后的意思
> 加上这个额外的 $r^k$(对大的 $k$ 强烈压制)$，明显是有利于收敛的。这是一个"渐进式放大"的技巧:先用参数把级数拖进收敛域算出来,再把参数推向边界。

**引理 4.10**：若 $\sum_k c_k$ 收敛，则它在 Abel 求和意义上收敛到同一个数。

证明要点:回忆级数收敛的 **Abel 判别法**——原级数收敛时 $A(r)$ 对 $0\le r<1$ 一致收敛(因为 $c_k$ 作为 $r$ 的函数是常值;而 $r^k$ 关于 $k$ 单调、关于 $r$ 一致有界)，于是由一致收敛的函数项级数性质，$r\to 1$ 可以与求和交换。

**反之不成立。**

**例子 4.11**：$1-2+3-4+\cdots = \sum_{k\ge0}(-1)^k(k+1)$ 是 Abel 可和的，Abel 和为 $\frac14$。

由幂级数求和技巧
$$A(r) = \sum_{k\ge0}(-1)^k(k+1)r^k = \frac{1}{(1+r)^2},$$
令 $r\to 1^-$ 得 $\frac14$。

此外,这个级数的部分和是 $1,-1,2,-2,\dots$，前 $n$ 项和为 $(-1)^{n+1}\lceil n/2\rceil$;前 $2m$ 个部分和的算术平均恒为 $0$，前 $2m-1$ 个的算术平均为 $\frac{m}{2m-1}\to\frac12$。两个子列极限不同,故算术平均没有极限——**它不是 Cesàro 可和的**。这一点下文比较 $C$ 与 $A$ 时还要用到。

## 3. 定理 4.12:Cesàro 与 Abel 的强弱关系

**定理 4.12**：对给定级数 $\sum c_n$，
$$\text{严格收敛} \Longrightarrow \text{Cesàro 可和} \Longrightarrow \text{Abel 可和},$$
且**这两个推出都不可逆**。

**不可逆的两个反例**:
- Abel 不可推出 Cesàro:例 4.11($1-2+3-4+\cdots$ Abel 可和于 $\frac14$，但不 Cesàro 可和)。
- Cesàro 不可推出严格收敛:$1-1+1-\cdots$。

**证明要点($C\Rightarrow A$ 的核心)**。设 $S_n=c_1+\cdots+c_n$，$\sigma_n=\frac{S_1+\cdots+S_n}{n}$。先建立一个**形式恒等式**(只说明两边系数相同,不谈收敛):
$$\sum c_n r^n = (1-r)^2\sum (n\sigma_n)r^n. \tag{4.1}$$
看法:由 $\frac{1}{1-r}=\sum_{n\ge0}r^n$，一个幂级数乘以 $\frac{1}{1-r}$ 后第 $n$ 个系数恰是原来前 $n$ 个系数之和(系数卷积)——即**乘以 $\frac{1}{1-r}$ 就是"取部分和"**。故
$$\sum_{n\ge1}S_nr^n = \frac{1}{1-r}\sum_{n\ge1}c_nr^n,$$
而 $n\sigma_n=S_1+\cdots+S_n$ 又是 $(S_n)$ 的部分和,再操作一次得 $\sum n\sigma_nr^n = \frac{1}{(1-r)^2}\sum c_nr^n$，两边乘以 $(1-r)^2$ 即 (4.1)。

现设 Cesàro 收敛，$\sigma_n\to\sigma$。不妨设 $\sigma=0$。对 $\varepsilon>0$ 取 $N$ 使 $n>N$ 时 $|\sigma_n|<\varepsilon$。把 (4.1) 右边的和按 $n\le N$ 与 $n>N$ 两段:
- 前一段是**有限和**，$(1-r)^2\to0$，取 $\delta$ 小使 $1-\delta<r<1$ 时其绝对值 $\le\varepsilon$;
- 后一段用 $|\sigma_n|<\varepsilon$ 与 $\sum_{n\ge1}nr^n=\frac{r}{(1-r)^2}$ 估计:
$$\left|(1-r)^2\sum_{n>N}(n\sigma_n)r^n\right| \le \varepsilon(1-r)^2\sum_{n>N}nr^n \le \varepsilon(1-r)^2\cdot\frac{r}{(1-r)^2} \le \varepsilon.$$
两段相加得 $\le 2\varepsilon$，即 $\lim_{r\to1^-}A(r)=\sigma$。

最后,级数 $1-2+3-4+\cdots$ 说明反向不成立。

> [!tip] 看得出"取部分和 = 乘 $\frac{1}{1-r}$"这个观察的价值吗
> 它把"部分和""算术平均""Abel 加权"三种操作统一成"乘幂级数因子",于是三者的强弱关系变成了因子之间的比较。这是广义求和理论里最常用的一招。

## 4. 定理 4.13:Fourier 级数的 Abel 求和

**定理 4.13**：设 $f$ 可积或绝对可积。若 $f$ 在 $x_0$ 点连续，则它的 Fourier 级数的 **Abel 求和**在 $x_0$ 点收敛于 $f(x_0)$;另外，若 $f$ 连续，则**一致收敛**。

> [!info] Remark 4.14
> 这里需要灵活一下 Abel 求和的定义。Fourier 级数的**复形式是双头**的($\sum_{-\infty}^{\infty}$)，实形式需要把 $\sin$ 与 $\cos$ 看成一个项。所以这里的"$r^k$"是 $r^{|n|}$。

**证明**。因 $f$ 可积，Fourier 系数 $c_n$ 有界，故函数项级数
$$\sum_{-\infty}^{\infty} r^{|n|}c_ne^{in\theta}$$
对任何 $0\le r<1$ 一致收敛(把 $r,\theta$ 都当参数,关于 $0\le r<1-\delta$ 也一致收敛)。记和函数为 $A(r,\theta)$，仿照前文算卷积:
$$A(r,\theta) = \sum_{-\infty}^{\infty}r^{|n|}\left(\frac{1}{2\pi}\int_{-\pi}^{\pi}f(\phi)e^{-in\phi}d\phi\right)e^{in\theta}
= \frac{1}{2\pi}\int_{-\pi}^{\pi}f(\varphi)P_r(\theta-\varphi)\,d\varphi,$$
其中
$$P_r(\theta) = \sum_{-\infty}^{\infty}r^{|n|}e^{in\theta}
= 1 + \sum_{n\ge1}z^n + \sum_{n\ge1}(\bar z)^n
= 1 + \frac{z}{1-z} + \frac{\bar z}{1-\bar z}
= \frac{1-r^2}{1-2r\cos\theta+r^2},\qquad z = re^{i\theta}.$$
称 $P_r$ 为 **Poisson 核**。它与 Fejér 核有同样的三条性质:
$$\frac{1}{2\pi}\int_{-\pi}^{\pi}P_r(\theta)\,d\theta = 1,\qquad P_r(\theta)\ge 0,\qquad \forall\delta>0:\ \lim_{r\to1}\max_{\delta\le|\theta|\le\pi}P_r(\theta) = 0.$$
于是又可以引用**"著名的套路"**(见 [[Cesàro求和与Fejér核]] §3)。$\square$

> [!tip] Remark 4.15:这个定理可以不证
> 它由前面的结论组合即得:在 $f$ 的连续点 $x_0$ 处，Fejér 定理给出 Cesàro 可和于 $f(x_0)$，再由定理 4.12(Cesàro 可和 $\Rightarrow$ Abel 可和)立得;连续情形同理——定理 4.12 证明中的估计只用到对 $|\sigma_N-\sigma|$ 的控制,关于 $\theta$ 是一致的,故 $A(r,\theta)$ 一致收敛于 $f$。
>
> **讲义保留 Poisson 核的直接证明,是因为它顺手给出了下一个定理所需的显式表达式。**

## 5. 定理 4.16:顺带解出单位圆盘的 Dirichlet 问题

**定理 4.16**：设 $f$ 是 $2\pi$ 周期连续函数，$a_n,b_n$ 是其 Fourier 系数。令
$$u(r,\theta) = \frac{a_0}{2} + \sum_{n\ge1}r^n(a_n\cos n\theta + b_n\sin n\theta),\qquad r<1,$$
并补充定义 $u(1,\theta)=f(\theta)$。则 $u$ 是 Dirichlet 问题
$$\begin{cases}\Delta u = 0, & x^2+y^2<1,\\ u(1,\theta)=f(\theta)\end{cases}$$
的解，即:$u$ 在开圆盘内是 $C^\infty$ 的**调和函数**，并在闭圆盘上**连续**。

> [!info] (*) 这个定理其实有更多内涵
> 它实际上已经解出了平面**单位圆盘上的 Dirichlet 问题**——这是位势论/PDE 的基本问题,在这里作为 Fourier 收敛理论的副产品出现。

**证明**。$f$ 连续故可积，系数有界:记 $M=\frac{1}{\pi}\int_{-\pi}^{\pi}|f(x)|dx$，则 $|a_n|,|b_n|\le M$。于是对任何 $r_0<1$，在 $r\le r_0$ 上，定义 $u$ 的级数以及**逐项求导任意次**之后的级数都被收敛的数项级数 $2M\sum_n n^k r_0^n$ 控制，因而一致收敛。所以 $u$ 在开圆盘内是 $C^\infty$，且 $\Delta$ 可以逐项作用(逐项求导在原点附近也没问题:$r\le r_0$ 时级数是 $z,\bar z$ 的幂级数)。

每一项 $r^n\cos n\theta = \operatorname{Re}z^n$ 与 $r^n\sin n\theta=\operatorname{Im}z^n$ 都是**调和**的——用平面 Laplace 算子的极坐标形式
$$\Delta u = \partial_r^2u + \frac{1}{r}\partial_ru + \frac{1}{r^2}\partial_\theta^2u$$
直接验算即可。因此 $\Delta u=0$ 于开圆盘内成立。

边值条件就是定理 4.13:$f$ 连续时 $u(r,\theta)\to f(\theta)$($r\to1$)关于 $\theta$ 一致。注意这不只是径向极限:当 $(r,\theta)\to(1,\theta_0)$ 时,
$$|u(r,\theta)-f(\theta_0)| \le \sup_\theta|u(r,\theta)-f(\theta)| + |f(\theta)-f(\theta_0)| \longrightarrow 0,$$
即 $u$ **沿任何路径**趋于边界点都有正确的极限。故补充定义 $u(1,\theta)=f(\theta)$ 之后,$u$ 在闭圆盘上连续。$\square$

> [!tip] 一句话总结这条路的回报
> Poisson 核的一个积分表示,同时给出了"Abel 求和定理"和"圆盘 Dirichlet 问题的解"。这种"分析工具顺带解决几何/物理问题"的现象,正是 Fourier 分析威力的典型体现。

## 6. 学习提示

- **三个求和方式的三层关系**要背牢:严格收敛 $\Rightarrow$ Cesàro $\Rightarrow$ Abel，反向都不可逆;反例分别是 $1-1+1-\cdots$(C 可和不严格)、$1-2+3-4+\cdots$(A 可和不 C)。
- **两个核要并列掌握**:$D_N$ ↔ 部分和，$F_N$ ↔ Cesàro，$P_r$ ↔ Abel。三者的共同点是"归一化 + 集中到 0";差别在于 $D_N$ 有负瓣而 $F_N,P_r$ 非负。**非负性正是定理 4.3、4.13 无条件成立的原因**。
- **证明技巧(4.1)值得单独记**:乘以 $\frac{1}{1-r}$ = 取部分和;这解释了为什么 Abel 比 Cesàro 强一档(多乘一个 $\frac{1}{1-r}$ 因子)。
- **常见误区**:①把 $P_r$ 与 $F_N$ 混为一谈(两者都非负、都归一,但一个是离散 $N$ 极限,一个是连续 $r\to1$);②写双头级数时忘了 $r^{|n|}$。

## 相关概念

- [[广义求和与Cesàro求和]] — 公理化动机与 Hardy 书注记
- [[Cesàro求和与Fejér核]] — Fejér 核,比 Abel 弱一档
- [[狄利克雷核]] — 三种核的对照起点
- [[傅里叶级数收敛]] — 严格收敛理论
- [[分离变量法]] — 圆盘 Laplace 问题与第 1 章的热方程/调和函数主题呼应
