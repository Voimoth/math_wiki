---
title: Fourier · 4 广义求和(Cesàro/Abel)
created: 2026-09-02
updated: 2026-10-03
type: notes
tags: [fourier-series, notes, 分析III]
confidence: high
---

# 4. 其它类型的逐点收敛

本节考虑一些比较奇怪的问题。**还是逐点收敛，但如果做不到原始意义的逐点收敛，还可以换一种"也是合理的"、但不一样的观点来看这个收敛性。**

## 4.1 公理化定义:弱意义收敛

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

## 4.2 Cesàro 求和

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

## 4.3 Abel 求和

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

## 4.4 文献注记:Hardy《Divergent Series》(§4.3)

发散级数理论的系统性经典著作是 **G. H. Hardy《Divergent Series》**(Oxford: Clarendon Press, 1949;Hardy 去世后出版，来自他多年讲授此课程的讲义)。本节开头的公理化定义即取自该书第一章。围绕着我们讲过的内容，自然有三个问题，书里各给出了远为完整的回答。以下定理与章节的编号沿用该书。

**(1) 除了 Cesàro 的 $(C,1)$ 和 Abel 的 $(A)$，还有别的吗？** 有很多，而且各有来头。算术平均可以直接推广：$(C,1)$ 只是 Cesàro 平均 $(C,k)$ 的最低阶，对任何 $k>-1$(甚至非整数 $k$)都有定义(第五章);与之平行的 **Hölder 平均 $(H,k)$** 是反复取普通算术平均。换一个核就得到一个新方法：**Euler 平均 $(E,q)$** 用二项分布式的权(第八章)，**Borel 方法**用 Poisson 分布式的权 $e^{-x}x^n/n!$(第八、九章)，**Nörlund 平均 $(N,p)$** 用任意权序列的卷积(第四章，Cesàro 是其特例)，**Riesz 典型平均**则用任意的"类型"序列。直接从 Fourier 级数理论中还能长出别的方法(§4.17，和我们讲义的关系最直接)：把 $\frac12+\cos\theta+\cos2\theta+\cdots$ 的 Fejér 核换成 $(1+\cos\theta)^m$ 型的核，就得到 **de la Vallée-Poussin 方法 $(VP)$**;放弃核的正性，则有 **Riemann 的 $(R,2)$ 方法**，它是一般三角级数理论(Riemann 的 Habilitationsschrift)的基本工具。最后，**Hausdorff 平均**(第十一章)用"矩量序列"给出统一框架，Cesàro、Hölder、Euler 方法都是它的特例。反过来也有警示：存在一些正则方法，连 $1-1+1-1+\cdots$ 都求不了和(§4.15)。所以光满足我们开头那几条公理，还远远不够确定一个方法的行为。

**(2) 这些方法之间的强弱关系是什么？** 我们只讨论了严格收敛 $\Rightarrow(C,1)\Rightarrow(A)$，且反向不成立;书中的核心结果有：Cesàro 方法随阶数严格增强 $(C,k)\Rightarrow(C,k')$($k'>k$)，且真包含;而 $(H,k)$ 与 $(C,k)$ 总是等价的("等价性定理"，§5.8)。**Abel 方法比所有 Cesàro 方法都强**：$(C,k)\Rightarrow(A)$ 对每个 $k$ 成立(Thm. 55，是我们证的 $k=1$ 情形的推广);并且存在对任何阶 $k$ 都不 Cesàro 可和、却 Abel 可和的级数(Thm. 56，用 $e^{1/(1-x)}$ 的展开构造)。这比我们的例子 $1-2+3-4+\cdots$(只说明 Abel 强于 $(C,1)$)说的多得多。Euler 方法随 $q$ 增强(Thm. 118)，且凡 Euler 可和的级数必 Borel 可和(Thm. 128)。对 Hausdorff 方法，包含与等价关系可以用矩量函数完全刻画(§11.10)。反方向是 **Tauber 定理**：可和性再加上对 $a_n$ 的额外限制，回到普通收敛。从 Tauber 本人的两个定理，到 Littlewood 的 $a_n=O(1/n)$ 条件、Hardy–Littlewood 的深化、"高指标定理"(第七章)，直到 **Wiener 用 Fourier 变换语言给出的统一理论**(第十二章)——这是全书最深的部分。

**(3) 这套理论有厉害的应用吗？** 有，举三个。**素数定理**：Wiener 的 Tauber 定理最出名的应用就是给出素数定理的一个证明(§12.11，书中讲 Ingham 的版本)，Tauber 型定理把素数定理从对 $\zeta(s)$ 函数零点分布的依赖中解放出来，只需用到 $\zeta(s)$ 在 $\Re s=1$ 上无零点。**解析延拓**：Borel 方法的"可和性多边形"(§8.8)能把幂级数求和到收敛圆之外——例如 $\sum z^n$ 的 Euler 和 Borel 和方法在一个比 $|z|<1$ 大得多的区域里给出 $\frac{1}{1-z}$，这可以看作解析延拓的一种求和论实现。**给 Euler 的"算式"一个说法**：借助 Euler–Maclaurin 公式和 $\zeta$ 函数(第十三章)，Euler、Ramanujan 那类计算——比如 $1+2+3+\cdots=\zeta(-1)=-\frac{1}{12}$——可以被严格地定义为一种求和(§13.17)，当然 Hardy 也警告这种定义适用范围窄、用起来要非常小心。

---
