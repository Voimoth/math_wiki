---
title: Fourier · 8 变换的应用
created: 2026-09-02
updated: 2026-10-03
type: notes
tags: [fourier-series, notes, 分析III]
confidence: high
---

# 8. Fourier 变换的应用

**主线**：Fourier 变换的三个应用——求解直线上的热方程、Poisson 求和公式、海森堡不确定性原理。

## 8.1 求解直线上的热方程

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

## 8.2 Poisson 求和公式

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

## 8.3 海森堡不确定性原理

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

## 8.4 历史注记

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
