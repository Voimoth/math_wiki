---
title: 分析II笔记(下)
created: 2026-10-03
updated: 2026-10-03
type: notes
tags: [分析II, 幂级数, 广义积分, 含参变量积分, 常微分方程]
sources: [分析II(2).pdf]
confidence: high
---

# 分析II笔记(下)

> 讲义:殷浩《分析 2(下)》。本笔记按讲义章节顺序整理,只保留讲义本身的知识。

## 1. 幂级数

### 1.1 引言:Taylor 定理

根本的事情是:Taylor 的想法在何种意义上是成功的?怎么成功?怎么失败?

### 1.2 收敛区域问题

> [!note] 定义(幂级数)
> 幂级数的定义本质上就是一列数 $(a_n)_{n\in\mathbb N}$。对应的函数项级数
> $$\sum_{n=0}^{\infty} a_n z^n$$
> 叫做幂级数。

> [!info] 注记
> Taylor 级数是幂级数;也可以证明(至少实的)幂级数也是某个光滑函数的 Taylor 级数。但幂级数的来源是多样的,比如微分方程的形式解等。所以应当认为自己在研究幂级数,而 Taylor 只是一个例子。

前面学过的函数项级数理论自然适用。不过其中有些只对 $\mathbb R$ 变量成立,有些对一般的 $A\subset E$ 都对,需要稍微区别。这里讨论的幂级数尽量针对 $\mathbb C$,少数时候只能对 $\mathbb R$。

> [!note] Lemma 1.1(Abel 引理)
> 设 $(a_n)_{n\in\mathbb N}$ 是一列复数,$z_0\in\mathbb C$ 使得 $(a_n z_0^n)_{n\in\mathbb N}$ 有界。则对任意满足 $|z|<|z_0|$ 的 $z\in\mathbb C$,级数 $\sum_n |a_n||z|^n$ 收敛;特别的,$\sum_n a_n z^n$ 收敛。

**Preuve :** 显然
$$|a_n||z|^n = |a_n||z_0|^n\left(\frac{|z|}{|z_0|}\right)^n \le C\left(\frac{|z|}{|z_0|}\right)^n .$$
当 $|z|<|z_0|$ 时 $\sum_{n\ge0} C\left(\frac{|z|}{|z_0|}\right)^n$ 收敛。由比较判别法,以及绝对收敛蕴含收敛即得。$\square$

于是研究集合
$$A = \left\{r\in\mathbb R_+ \mid (|a_n| r^n)_{n\in\mathbb N}\ \text{有界}\right\},\qquad \mathbb R_+=\{x\in\mathbb R\mid x\ge0\}.$$

它不是空集(因为 $0$ 在其中);由 Abel 引理,它还是区间。令 $A$ 的(广义)上确界为 $R$,称为幂级数 $\sum a_n z^n$ 的**收敛半径**(rayon de convergence)。$R$ 是扩充实数,可以是 $0$,也可以是 $+\infty$。

> [!note] Remark 1.2
> 作为引理推论,如果 $|z|>R$,那么 $\sum_{n\ge0} a_n z^n$ 一定不收敛。

**Preuve :** 若收敛,则通项有界,于是 $r=|z|\in A$,与 $R=\sup A$ 的定义矛盾。$\square$

$R$ 可以取 $0$、$+\infty$,也可以取任何正数。

> [!example] 例子 1.3
> $\sum_{n\ge1} n!\,z^n$ 只能在 $z=0$ 收敛:对任何 $z\ne0$,通项的模都趋于无穷。于是 $A=\{0\}$,$R=0$。

> [!example] 例子 1.4
> $\sum_{n\ge1} \frac{1}{n!} z^n$ 对任何 $z\in\mathbb C$ 都收敛:对任何 $r>0$,$\left(\frac{r^n}{n!}\right)$ 有界。这时 $R=\infty$。

> [!example] 例子 1.5
> $\sum_{n\ge0} z^n$:在 $|z|<1$ 收敛,在 $|z|>1$ 发散,故 $R=1$。
> 以上例子在 $\mathbb R$ 上同样成立。

下面讨论 $|z|=R$ 处的情形。实数情形只是两个点的事情,举例表明所有情况皆有可能。

> [!example] 例子 1.6
> $$\sum_{n\ge1} x^n,\qquad \sum_{n\ge1}\frac{1}{n}x^n,\qquad \sum_{n\ge1}\frac{1}{n^2}x^n$$
> 分别展示:两端点都不收敛;一个端点收敛一个不收敛;两个端点都收敛。

复数情形则是一个圆周的事情。

> [!info] 注记
> 圆周上收敛点构成的集合必须是一个 $F_{\sigma\delta}$ 集;而且任何 $F_{\sigma\delta}$ 集(圆周的子集)都可以成为某个收敛半径为 $1$ 的幂级数的收敛集。

**如何计算收敛半径?** 法国书上用 Abel 引理:如果找得到 $z_0$ 使得 $(|a_n z_0^n|)$ 有界,则 $R\ge|z_0|$;如果找得到 $z_0$ 使得 $(|a_n z_0^n|)$ 无界,则 $R\le|z_0|$。

> [!note] Lemma 1.7
> $$R^{-1} = \limsup_{n\to\infty} |a_n|^{1/n},$$
> 并广义地约定 $0^{-1}=\infty$ 与 $\infty^{-1}=0$。

**Preuve :** 极端情况略。只考虑右边是正实数,记为 $\sigma$,往证 $R=\sigma^{-1}$。
若 $x<\sigma^{-1}$,则 $\frac1x > \limsup |a_n|^{1/n}$,故存在 $q$ 使
$$\frac1x > q > \limsup_{n\to\infty}|a_n|^{1/n}\,x .$$
于是对充分大的 $n$ 有 $|a_n|x^n\le q^n$,所以 $\sum |a_n|x^n$ 收敛,进而 $x\le R$。
若 $x>\sigma^{-1}$,则 $\frac1x<\limsup|a_n|^{1/n}$,即 $1<\limsup_n |a_n|x^n$。于是通项不趋于 $0$,$\sum a_n x^n$ 不可能收敛,所以 $x\ge R$。$\square$

> [!example] 例子 1.8
> $$\sum_{n=1}^{\infty}\left(1+\frac{(-1)^n}{n}\right)^{n^2} z^n$$
> 的收敛半径是 $\dfrac1e$。

> [!example] 例子 1.9
> 设 $\alpha>0$,研究级数 $\sum \alpha^{1+2+\cdots+n} z^{n^2}$ 的收敛半径。

补充两个计算方法:

**方法一(比较法).** 设 $\sum a_n z^n$、$\sum b_n z^n$ 是两个幂级数,如果总有 $|a_n|\le|b_n|$,那么 $R_a\ge R_b$。证明直接用计算公式。

> [!example] 例子 1.10
> 算 $\sum \arctan\left(\frac{1}{2^n}\right) z^n$ 的收敛半径(利用 $\arctan 2^{-n}\sim 2^{-n}$)。

**方法二(D'Alembert 判别法).** 有时 $a_n^{1/n}$ 很难计算。这时研究
$$\lim_{n\to\infty}\frac{|a_{n+1}z^{n+1}|}{|a_n z^n|}$$
和 $1$ 的关系。具体证明略。

> [!example] 例子 1.11
> 设 $a_n=\dfrac{\alpha(\alpha-1)\cdots(\alpha-n)}{n!}$,问 $\sum a_n z^n$ 的收敛半径。
> **Preuve :** $\dfrac{a_{n+1}z^{n+1}}{a_n z^n} = \dfrac{(\alpha-n-1)}{n+1}z$,故 $|z|<1$ 收敛,$|z|>1$ 发散。$\square$

**级数的运算和收敛半径的关系。**

> [!note] Proposition 1.12
> 设 $\sum a_n z^n$、$\sum b_n z^n$ 的收敛半径分别为 $R_a,R_b$。则 $\sum (a_n+b_n)z^n$ 的收敛半径 $R$ 大于 $\min(R_a,R_b)$;而且当 $R_a\ne R_b$ 时 $R=\min(R_a,R_b)$。

如果碰巧 $R_a=R_b$,则 $R$ 可能会比它们大不少。

> [!example] 例子 1.13
> 极端的例子:$\sum_{n\ge1} x^n$ 与 $\sum_{n\ge1} -x^n$。不那么极端时,可以把一个加上一个收敛半径大一点的幂级数。

给定两个幂级数 $\sum a_n z^n$ 和 $\sum b_n z^n$,考虑乘积(Cauchy 乘积)
$$c_n = \sum_{k=0}^n a_k b_{n-k}.$$
则 $R_c\ge\min(R_a,R_b)$;但不论 $R_a$ 是否等于 $R_b$,$R_c$ 都可能变大很多。此处需要一点证明:如果 $|z|<\min(R_a,R_b)$,为什么 $\sum c_n z^n$ 一定收敛?需要利用绝对收敛的性质。

> [!example] 例子 1.14
> 举例:$(1-z)\sum_{n\ge0} z^n$。

### 1.3 一致收敛性

之前的证明已经表明,在收敛圆的内部有内闭一致收敛。更确切地说:

- **实情形:** 设 $\sum a_n x^n$ 的收敛半径为 $R>0$。则对任意闭区间 $[a,b]\subset(-R,R)$,该级数在 $[a,b]$ 上一致收敛。
- **复情形:** 设 $\sum a_n z^n$ 的收敛半径为 $R>0$。则对任意紧集 $K\subset\{z:|z|<R\}$,该级数在 $K$ 上一致收敛。

于是无论实或复,幂级数在收敛圆(收敛区间)内部的每一个紧子集上都一致收敛;这正是内闭一致收敛的含义。

**边界处的一致性**(仅对实数讨论)。

> [!note] Lemma 1.15
> 设 $\sum a_n x^n$ 的收敛半径是 $r>0$。则它在 $x=r$(或者 $x=-r$)处收敛,当且仅当,在 $[0,r)$(或者 $(-r,0]$)上一致收敛。

**Preuve :**
必要性(收敛 $\Rightarrow$ 一致收敛):设 $\sum a_n r^n$ 收敛。把通项改写为
$$a_n x^n = a_n r^n\cdot\left(\frac{x}{r}\right)^n .$$
对固定的 $x\in[0,r]$,序列 $\left(\frac{x}{r}\right)^n$ 关于 $n$ 单调递减,且 $0\le\left(\frac{x}{r}\right)^n\le1$,界与 $x$ 无关。由 Abel 判别法,$\sum a_n r^n$ 收敛(与 $x$ 无关),乘以单调一致有界因子 $\left(\frac{x}{r}\right)^n$,故 $\sum a_n x^n$ 在 $[0,r]$ 上一致收敛,从而在 $[0,r)$ 上一致收敛。
充分性(一致收敛 $\Rightarrow$ 收敛):设 $\sum a_n x^n$ 在 $[0,r)$ 上一致收敛。由 Cauchy 一致收敛准则,对任意 $\varepsilon>0$,存在 $N$,当 $m>n\ge N$ 时
$$\sup_{x\in[0,r)}\left|\sum_{k=n+1}^{m} a_k x^k\right|<\varepsilon .$$
幂级数的部分和是有限项之和,每一项 $a_k x^k$ 在 $[0,r]$ 上连续,故部分和在 $[0,r]$ 上连续。对上述 $m>n\ge N$,令 $x\to r^-$ 取极限,由连续性得
$$\left|\sum_{k=n+1}^{m} a_k r^k\right| = \lim_{x\to r^-}\left|\sum_{k=n+1}^{m} a_k x^k\right|\le\varepsilon$$
(用到:若 $|f(x)|\le M$ 对 $x\in[0,r)$ 成立,则 $|\lim_{x\to r^-}f(x)|\le M$)。于是 $\sum a_n r^n$ 满足 Cauchy 收敛准则,故收敛。
$x=-r$ 的情形,令 $t=-x\in[0,r]$,则 $a_n x^n = a_n(-r)^n\left(\frac{t}{r}\right)^n$,对 $\sum a_n(-r)^n$ 用同样的 Abel 判别法即可。$\square$

举例表明可以一致到边,也可不一致。

> [!example] 例子 1.16
> 还是这三个例子
> $$\sum_{n\ge1} x^n,\qquad \sum_{n\ge1}\frac1n x^n,\qquad \sum_{n\ge1}\frac{1}{n^2}x^n,$$
> 分别展示:左右都不能一致收敛;一侧可以一侧不行;两侧都可以一致收敛到边。
> 因为 Lemma 1.15,原来的三个例子肯定能够用在这里。

> [!example] 思考题
> 问函数 $f(x)=\sqrt{\delta+x^2}$ 在 $0$ 处的 Taylor 展开,收敛半径如何?有没有可能给出 $x\mapsto|x|$ 的一致逼近?

### 1.4 内闭一致收敛的性质

> [!note] Theorem 1.17
> 设 $\sum_{n\ge0} a_n z^n$ 是收敛半径为 $R$ 的幂级数,和函数为 $f(z)$,则 $f$ 在 $B(0,R)$(开球)中连续。

> [!note] Theorem 1.18(仅限实幂级数)
> 设 $\sum_{n\ge0} a_n x^n$ 是收敛半径为 $R$ 的幂级数,和函数为 $f(x)$,则 $f$ 在 $(-R,R)$ 中可导,而且
> $$f'(x) = \sum_{n=1}^{\infty} n a_n x^{n-1}.$$
> 注意:幂级数 $\sum_{n\ge1} n a_n x^{n-1}$ 的收敛半径同样是 $R$。

作为推论,$f$ 在 $(-R,R)$ 上是光滑的。

> [!note] Theorem 1.19(仅限实幂级数)
> 设 $\sum_{n\ge0} a_n x^n$ 是收敛半径为 $R$ 的幂级数,和函数为 $f(x)$,则
> $$\int_0^x f(t)\,dt = \sum_{n=0}^{\infty} \frac{a_n}{n+1} x^{n+1}.$$
> 注意:幂级数 $\sum_{n\ge0}\frac{a_n}{n+1}x^{n+1}$ 的收敛半径同样是 $R$。

以上定理的证明都是对应函数项级数(在某些一致收敛条件下)相应定理的推论。利用逐项求导和积分,可以计算很多幂级数的和函数。

> [!example] 例子 1.20(逐项积分法)
> $$\log(1+x) = \sum_{n=1}^{\infty} (-1)^{n+1}\frac{x^n}{n},\qquad |x|<1 .$$
> **Preuve :** 由熟知公式 $\frac{1}{1+x}=\sum_{n=0}^{\infty}(-1)^n x^n$($x\in(-1,1)$),再利用积分
> $$\log(1+x)=\int_0^x\frac{1}{1+t}\,dt = \sum_{n=0}^{\infty}(-1)^n\frac{x^{n+1}}{n+1}.$$
> 可观察:原来的幂级数在端点处不收敛,积分之后的幂级数在右端点收敛了,而且正好等于 $\log2$。作为副产品
> $$\log2=\sum_{n=0}^{\infty}(-1)^n\frac{1}{n+1}. \qquad\square$$

> [!example] 例子 1.21(逐项微分法)
> 求幂级数 $\sum_{n\ge1} n x^n$ 的和函数。
> **Preuve :** 收敛半径是 $1$。
> $$\sum_{n=1}^{\infty} n x^n = x\sum_{n=1}^{\infty} n x^{n-1} = x\left(\sum_{n=1}^{\infty} x^n\right)' = x\left(\frac{1}{1-x}-1\right)' = \frac{x}{(1-x)^2}. \qquad\square$$

> [!example] 例子 1.22(逐项积分法)
> 将 $\arctan x$ 展开为幂级数。
> **Preuve :** 由 $\frac{1}{1+x^2}=\sum_{k=0}^{\infty}(-1)^k x^{2k}$,则
> $$\arctan x=\int_0^x\frac{1}{1+t^2}\,dt=\sum_{k=0}^{\infty}(-1)^k\frac{x^{2k+1}}{2k+1}.$$
> 作为副产品(当然也许要论证 $x=1$ 处以上公式成立):$\dfrac{\pi}{4}=\sum_{k=0}^{\infty}(-1)^k\dfrac{1}{2k+1}$。$\square$

回忆此前研究过的函数 $f(x)=\sum_{n=1}^{\infty}\dfrac{\cos nx}{n}$。当时只知道它在 $x\ne2k\pi$ 上有定义,没有能力判断 $x\to0$ 时的极限(该级数在 $2k\pi$ 附近不是一致收敛的)。现在可以算它的和函数了。

**Preuve :** 先利用 $r^n\cos nx$ 是 $z^n$(其中 $z=re^{ix}$)的实部,计算
$$S(r,x)=\sum_{n=1}^{\infty} r^n\cos nx = \operatorname{Re}\sum_{n=1}^{\infty} z^n = \operatorname{Re}\frac{z}{1-z} = \frac{r\cos x-r^2}{1-2r\cos x+r^2}.$$
再固定 $x$,对 $r\in(0,1)$ 逐项积分:
$$T(r,x)=\sum_{n=1}^{\infty}\frac{r^n\cos nx}{n} = \int_0^r \frac{S(t,x)}{t}\,dt = \int_0^r\frac{\cos x-t}{1-2t\cos x+t^2}\,dt = -\frac12\ln(1-2r\cos x+r^2).$$
最后对 $x\ne2k\pi$,因 $\sum_{n=1}^{\infty}\frac{\cos nx}{n}$ 由 Dirichlet 判别法收敛,可应用阿贝尔定理知道它作为 $r$ 的幂级数在 $r=1$ 附近一致收敛,可以取极限。代入 $T(r,x)$ 得
$$f(x)=\lim_{r\to1^-}-\frac12\ln(1-2r\cos x+r^2)=-\frac12\ln(2-2\cos x)=-\ln\left(2\left|\sin\frac x2\right|\right). \qquad\square$$

> [!note] Theorem 1.23
> 设 $\sum a_n z^n$ 在 $D_o(0,R)$ 中收敛,和函数记为 $f$。则对任何 $0<r<R$,
> $$a_n = \frac{1}{2\pi r^n}\int_0^{2\pi} f(re^{i\theta})e^{-in\theta}\,d\theta .$$
> 特别的,
> $$f(0)=a_0=\frac{1}{2\pi}\int_0^{2\pi} f(re^{i\theta})\,d\theta .$$
> 证明利用内闭一致收敛(略)。这是复解析函数的大定理,提前见到。这是平均值性质,之前对复多项式证明过,现在可以对收敛的复幂级数证明。

> [!note] Theorem 1.24
> 设 $\sum_{n\ge0} a_n x^n$ 有收敛半径 $1$;设和函数为 $f$。
> (1) 如果 $\sum_{n\ge0} a_n$ 收敛于 $A$,则 $\lim_{x\to1^-}f(x)$ 存在且等于 $A$。
> (2) 反之一般不对。但如果加上假设 $a_n=o\left(\frac1n\right)$,则对。

**Preuve :**
(1) 简单,因为端点收敛,所以在 $[0,1]$ 上一致收敛,和函数自然在 $1$ 点连续。
(2) 反之不对的例子:$\sum_{n\ge0}(-1)^n x^n$ 收敛半径是 $1$,和函数是 $\frac{1}{1+x}$,明显在 $x=1$ 左侧有极限,但原级数在 $x=1$ 不收敛。
(2) 的正面证明:设 $s_n=\sum_{k=0}^n a_k$,计算
$$s_n-f(x)=\sum_{k=1}^n a_k(1-x^k)-\sum_{k=n+1}^{\infty}a_k x^k .$$
取 $0<x<1$,用 $1-x^k=(1-x)(1+x+\cdots+x^{k-1})\le k(1-x)$,于是
$$|s_n-f(x)|\le(1-x)\sum_{k=1}^n k|a_k|+\sum_{k=n+1}^{\infty}|a_k|x^k .$$
对任何 $\varepsilon>0$,由 $a_n=o(1/n)$ 可取 $n$ 使 $\forall k>n,\ k|a_k|<\varepsilon$,进而 $\sum_{k=n+1}^{\infty}|a_k|x^k<\varepsilon\sum_{k=n+1}^{\infty}\frac{x^k}{k}\le\frac{\varepsilon}{n(1-x)}$。取 $x=x_n=1-\frac1n$,代入得
$$|s_n-f(x_n)|\le\frac1n\sum_{k=1}^n k|a_k|+\varepsilon.$$
右边第一项是一个收敛于 $0$ 的数列的"平均",也随 $n$ 趋于 $0$。故当 $n$ 充分大时 $|s_n-f(x_n)|<2\varepsilon$。因为 $\lim_n f(x_n)=A$,所以 $\lim_n s_n=A$。$\square$

> [!info] Remark 1.25
> 上述 (2) 中的条件不是最好的,可以改成 $O(1/n)$ 也是对的,但是证明难多了。

> [!info] Remark 1.26
> 这种研究 $\lim_{x\to1^-}\sum_{n\ge0}a_n x^n$ 的方法叫做 Abel 求和。在三角级数部分还会再次看见它。

以上关于幂级数的各种性质,也可以对形如 $\sum_{n\ge0} a_n(z-z_0)^n$ 的级数来讨论。具体内容略。

### 1.5 讨论和 Taylor 定理的关系

> [!note] Remark 1.27(Taylor 级数)
> 如果函数在 $x_0$ 点光滑,那么级数
> $$\sum_{n\ge0}\frac{1}{n!}f^{(n)}(x_0)(x-x_0)^n$$
> 称为 $f$ 在 $x_0$ 处的 Taylor 级数。

**问题.** 设 $f$ 在 $0$ 附近光滑,Taylor 级数会不会收敛于 $f$?

(好消息)如果 $f$ 是幂级数 $\sum_{n\ge0}a_n x^n$ 的和函数,收敛半径大于 $0$,那么 $f$ 的 Taylor 级数一定是收敛(于 $f$ 的)。其实它就是原来那个幂级数:只要对 $f$ 逐项求导(不断的),就可以认出系数 $a_n=\frac{1}{n!}f^{(n)}(0)$。

(坏消息)有例子表明,这个 Taylor 级数 $\sum_{n=0}^{\infty}\frac1{n!}f^{(n)}(0)x^n$ 可能收敛半径为 $0$;也可能收敛半径很大,但是收敛出来的函数不是原来的。

> [!example] 例子 1.28(著名的例子)
> $$f(x)=\begin{cases}0 & x\le0\\ e^{-1/x} & x>0.\end{cases}$$
> 它的 Taylor 级数就是 $a_n=0$ 对应的级数,收敛半径很大,和函数恒为 $0$,在任何邻域内也不等于 $f$。

> [!note] Lemma 1.29(Borel 引理)
> 对任何数列 $a_n\in\mathbb R$,存在光滑函数 $f$ 使得 $f^{(n)}(0)=n!\,a_n$。

> [!info] 注记
> 这个引理的意思是:什么样的级数(不管收敛与否)都可以成为一个光滑函数的 Taylor 级数。

**Preuve :** 一个很朴素的想法是看"函数" $\sum_{n=0}^{\infty}a_n x^n$。如果这个幂级数的收敛半径大于 $0$,那就好了。要点:
- 对我们来说,$a_n x^n$ 有贡献的地方是 $0$ 附近的性质;
- 但它可能太大了;
- 好消息是我们只要取出它在 $0$ 附近的一小块,利用一个截断函数。

取光滑函数 $\varphi$,它在 $(-1,1)$ 上等于 $1$,在 $(-2,2)$ 外为零。对固定的 $n$,取待定的(很小的)$c_n$,考虑
$$u_n(x)=a_n\,\varphi\!\left(\frac{x}{c_n}\right)x^n .$$
断言:可取 $c_n$ 小,使得对 $l<n$ 有
$$\max_{\mathbb R}\big|u_n^{(l)}\big|\le2^{-n}.$$
计算验证:$l=0$ 时,$\max|u_n|\le|a_n|(2c_n)^n$(因为 $|x|>2c_n$ 时 $\varphi(x/c_n)\equiv0$),故可取 $c_n$ 小使结论成立;$l=1$ 时
$$u_n'(x)=a_n n\varphi\!\left(\frac{x}{c_n}\right)x^{n-2}+a_n\varphi'\!\left(\frac{x}{c_n}\right)\frac{1}{c_n}x^n ,$$
从而 $\max|u_n'|\le|a_n|\left(n(2c_n)^{n-2}+C\frac{1}{c_n}(2c_n)^n\right)$,其中 $C=\max_{\mathbb R}|\varphi'|$。同样可取 $c_n$ 小使结论成立。只要 $l<n$,可以继续对高阶导数这样做。
有了断言,考虑级数 $f:=\sum_{n=1}^{\infty}u_n$。可验证对任何 $l\in\mathbb N$,该级数在 $C^l$ 拓扑下收敛(即从函数直到 $l$ 阶导数都一致收敛,这正是要在断言里要求导数也小的原因)。证明完成,因为可以计算 $f^{(k)}(0)$:它等于 $\sum_{n=1}^{\infty}u_n^{(k)}(0)=k!\,a_k$。$\square$

### 1.6 $\mathbb R^n$ 上的幂级数

最后应该说明可以推广而讨论 $\mathbb R^n$ 上的幂级数,甚至 Taylor 级数。只是对应的收敛几何没有这么简单的刻画了(不能简单地说是个圆、一个半径结束)。

### 1.7 幂级数展开

#### 1.7.1 可展开为幂级数的函数

> [!note] Definition 1.30
> 设 $U\subset\mathbb C$ 是 $0$ 的邻域,$f:U\to\mathbb C$。
> - 设 $r>0$,如果存在幂级数 $\sum a_n z^n$ 使得 $\forall z\in D_o(0,r),\ f(z)=\sum_{k=0}^{\infty}a_n z^n$,就说 $f$ 在 $D_o(0,r)$ 上可以展开为幂级数;
> - 如果存在 $r>0$ 使上面成立,就说 $f$ 可以展开为幂级数。

要注意这个定义说的不是一个函数怎么样,而是一个函数在某个圆盘(区间)上是不是可以展开为幂级数。不同的圆盘不一样。

> [!example] 例子 1.31
> 考虑 $f(x)=\dfrac{1}{1+x^2}$,研究它在什么区间上可以展开成幂级数(自行定义实数的版本)。
> 这定义变换了观点:不是先有级数、问收敛的和函数性质,而是先有一个函数,它可以(局部地)写成一个幂级数的形式。

举例(根据以前的讨论):多项式都是;对 $a\ne0\in\mathbb C$,$f(z)=\frac{1}{z-a}$ 是;$x\mapsto\log(1+x)$ 是;$\arctan x$ 是。注意这些展开都是从基本等式出发严格证明过的,并非简单地说 Taylor 级数。

#### 1.7.2 性质

> [!note] Theorem 1.32(幂级数展开的唯一性)
> 如果有两个幂级数 $\sum a_n z^n$ 和 $\sum b_n z^n$ 收敛半径均大于 $0$,而且在 $0$ 附近和函数相等,则 $(a_n)=(b_n)$。

**Preuve :** 先看实的情况。如果 $a_n,b_n$ 都是实数,对应实幂级数在 $0$ 附近一样,可以用逐项求导推出系数必须一样。如果是复数,在 $0$ 附近一样,限制在 $z\in\mathbb R$ 上,分开实部虚部,对应幂级数在 $0$ 附近一样,那么 $(a_n)$ 和 $(b_n)$ 对应的实部虚部必须都一样,进而证毕。$\square$

> [!example] 例子 1.33
> 如果 $f,g$ 都可以展开为幂级数,而且 $fg$ 在 $0$ 附近恒为 $0$。则要么 $f$ 在 $0$ 附近恒为 $0$,要么 $g$ 如此。

**Preuve :** 设 $f,g$ 分别可展开为 $\sum a_n z^n$ 和 $\sum b_n z^n$。如果 $f$ 在 $0$ 附近不恒为 $0$,由展开唯一性一定 $(a_n)$ 不全为 $0$,设最小不为 $0$ 的是 $a_p$;如果 $g$ 在 $0$ 附近不恒为 $0$,类似设为 $b_q$。利用幂级数乘法,$fg$ 的展开一定是 $\sum_n\left(\sum_{k=0}^n a_k b_{n-k}\right)z^n$(要用以前关于绝对收敛级数的 Cauchy 乘法)。只看 $c_{p+q}=a_pb_q$ 就知道 $fg$ 对应的展开不恒为 $0$,与 $fg$ 在 $0$ 附近恒为 $0$ 矛盾。$\square$

这是个很厉害的性质;光滑函数显然不具备这个性质。

> [!note] Proposition 1.34(实变实值幂级数)
> 设 $f=\sum_{n=0}^{\infty}a_n x^n$ 在 $(-r,r)$ 中收敛,设 $a_0=a_1=\cdots=a_{k-1}=0$,$a_k\ne0$。则存在 $\delta>0$,使得(等价无穷小)
> $$f\sim_0 a_k x^k .$$
> 进而当 $x$ 充分小时,$f$ 的符号可以通过 $a_k x^k$ 来判断。

**Preuve :** 当 $x\ne0$ 时,两边同时除以 $x^k$,然后发现 $f/x^k$ 在 $x\to0$ 时有极限 $a_k$。$\square$

> [!note] Lemma 1.35
> 可以展开为幂级数的函数关于线性组合、乘法运算封闭;可以展开为幂级数的函数的导数、原函数也可以展开为幂级数。

> [!info] 问题
> (实)可以展开为幂级数的函数,如果是奇函数、偶函数,则系数有何性质?(利用唯一性作答:设 $f$ 有展开,那么 $f(-x)$ 也有展开,利用唯一性比较系数。)

不是所有的光滑函数都可以展开为幂级数,例子之前见过了。限制在实变实值函数:如果一个函数可以展开为幂级数,那么这个幂级数一定是它的 Taylor 级数(在 $0$ 点的),这可以利用逐项求导来确定。

#### 1.7.3 Bernstein 定理

这是一个判断什么时候光滑函数是"可以展开为幂级数"的函数的定理。

> [!note] Lemma 1.36(Bernstein)
> 设 $f$ 是 $C^{\infty}$ 函数,在区间 $(-a,a)$ 上定义。如果存在 $\rho>0$ 和 $M\in\mathbb R_+$,使得
> $$\forall x\in(-a,a)\quad\forall n\in\mathbb N,\qquad \big|f^{(n)}(x)\big|\le\frac{M\,n!}{\rho^n},$$
> 则 $f$ 在 $0$ 处可以展开成幂级数,收敛半径至少有 $\min\{a,\rho\}$。

**Preuve :** 直接应用 Lagrange 余项公式
$$|R_n(t)|\le\frac{|t|^{n+1}}{(n+1)!}\sup_{x\in[-|t|,|t|]}\big|f^{(n+1)}(x)\big|. \qquad\square$$

> [!note] Theorem 1.37
> 如果 $f$ 在 $0$ 附近定义且光滑,而且 $f$ 的所有阶导数(在某个固定的邻域上)都是非负的,则 $f$ 在 $0$ 附近可以展开成幂级数。

**Preuve :** 取 $\alpha$ 小,使定理条件在 $[-\alpha,2\alpha]$ 上成立。对任何 $x\in[-\alpha,\alpha]$,考虑带 Lagrange 余项的 Taylor 公式
$$f(x+\alpha)=f(x)+\alpha f'(x)+\cdots+\frac{\alpha^n}{n!}f^{(n)}(x)+\frac{f^{(n+1)}(\xi)}{(n+1)!}\alpha^{n+1}.$$
右侧每一项都是非负的,而且利用单调性
$$0\le\frac{\alpha^n}{n!}f^{(n)}(x)\le f(2\alpha).$$
再使用前文定理。$\square$

#### 1.7.4 计算

> [!example] 例子 1.38(实函数,可展开为幂级数的)
> $$e^x=\sum_{n=0}^{\infty}\frac{1}{n!}x^n,\qquad \sin x=x-\frac{1}{3!}x^3+\frac{1}{5!}x^5-\cdots,\qquad \cos x=1-\frac{1}{2!}x^2+\frac{1}{4!}x^4-\cdots$$
> **Preuve :** 不难看出右边的收敛半径是无穷。但这不表示上述等号就对所有的 $x$ 成立。利用带 Lagrange 余项的 Taylor 公式可以证明,不算复杂,主要是 $\sin$ 的各阶导数都很好。$\square$

> [!info] Remark 1.39
> 以上公式也可以对 $z\in\mathbb C$ 来定义,这应当作为 $\sin z$ 的定义出现(既然是定义,就不需要去证明相等了)。不难看出 $e^{iz}=\cos z+i\sin z$ 对 $\forall z\in\mathbb C$。从这定义出发可以证明所有三角函数的公式。理论上这应该是数学分析理论中三角函数的定义(可能的手段之一)。

> [!example] 例子 1.40
> 证明函数 $x\mapsto(1+x)^{\alpha}$ 对 $\alpha\in\mathbb R\setminus\mathbb N$ 可以展开为幂级数。
> **Preuve :** 可以考虑它的 Taylor 级数 $\sum \frac{\alpha(\alpha-1)\cdots(\alpha-n+1)}{n!}x^n$(之前作为例题算过,收敛半径是 $1$)。但这样并不能证明和函数就是原来那个函数,必须使用某种余项来估计。$N$ 次 Taylor 多项式的 Lagrange 余项为 $\frac{\alpha(\alpha-1)\cdots(\alpha-n)}{(n+1)!}(1+\xi x)^{\alpha}x^n$。当 $|x|<1$ 时 $|1+\xi x|<2$。法国教材上说:没有简单的方法证明上述表达式收敛于 $0$,于是介绍了下面的 ODE 方法。
> 易见,如果 $f(x)=(1+x)^{\alpha}$,则 $f$ 是方程
> $$\alpha f(x)=(1+x)f'(x),\qquad f(0)=1$$
> 的解。可以用初等的微积分知识证明满足方程的解至少在 $(-1,\infty)$ 和定义域的交上是唯一的(证明思路:作差 $h=f-g$,$h(0)=0$ 且 $|h'(x)|\le M|h(x)|$,先由连续性得 $|h'|\le CM$,进而 $|h(x)|\le CM|x|$,归纳得 $|h(x)|\le CM^n|x|^n/n!$,令 $n\to\infty$ 即得)。把得到的在 $(-1,1)$ 上的收敛幂级数带进方程,果然是满足的。所以这个展开至少在 $(-1,1)$ 上是有效的。$\square$

> [!example] 例子 1.41
> 求 $\log(1+x)$ 在 $x_0>-1$ 处的展开。
> **Preuve :**
> $$\log(1+x_0+h)=\log(1+x_0)+\log\!\left(1+\frac{h}{1+x_0}\right)=\log(1+x_0)+\sum_{k=1}^{\infty}(-1)^{k+1}\frac{h^k}{(1+x_0)^k}.$$
> 收敛半径是多大?$\square$

> [!example] 例子 1.42
> 利用以上方法,求 $\varphi(t)=\cos(\alpha\arcsin t)$ 在 $0$ 附近的展开。
> **Preuve :** 设法算一个方程。计算
> $$\varphi'(t)=-\sin(\alpha\arcsin t)\,\alpha\,\frac{1}{\sqrt{1-t^2}},$$
> $$\varphi''(t)=-\cos(\alpha\arcsin t)\frac{\alpha^2}{1-t^2}+\sin(\alpha\arcsin t)\,\alpha(1-t^2)^{-3/2}(-t)=-\varphi\frac{\alpha^2}{1-t^2}+\varphi'\frac{t}{1-t^2}.$$
> 总结得到微分方程
> $$(1-t^2)\varphi''-t\varphi'+\alpha^2\varphi=0,\qquad \varphi(0)=1,\ \varphi'(0)=0 .$$
> 这看成二阶常微分方程初值问题,在 $t\in(-1,1)$ 上系数好,所以解是唯一的(这是线性方程,只要考虑 $0$ 解的唯一性,算 $(\varphi^2+(\varphi')^2)$ 的导数可破)。
> 然后只要找一个收敛的幂级数也满足这个方程就好:设 $\sum_{n\ge0}a_n x^n$ 是这个方程的解,代入计算
> $$(1-t^2)\varphi''(t)=\sum_{n=0}^{\infty}\big((n+1)(n+2)a_{n+2}-n(n-1)a_n\big)t^n,\quad t\varphi'(t)=\sum_{n=0}^{\infty}n a_n t^n,\quad \alpha^2\varphi(t)=\sum_{n=0}^{\infty}\alpha^2 a_n t^n,$$
> 代入方程,形式上比较系数,可得
> $$(n+1)(n+2)a_{n+2}=(n^2-\alpha^2)a_n .$$
> 递推公式恰好留下两个数 $a_0,a_1$ 无法决定,这正好和初值问题呼应。由初值条件确定 $a_0=1$、$a_1=0$,进而 $a_{2p+1}\equiv0$,
> $$a^{2p}=\frac{(-4)^p}{(2p)!}\left(\frac{\alpha}{2}\right)^2\left(\left(\frac{\alpha}{2}\right)^2-(p-1)^2\right)\cdots\left(\left(\frac{\alpha}{2}\right)^2-1\right)\left(\frac{\alpha}{2}\right)^2 .$$
> 对幂级数 $\sum_{p\ge0}a_{2p}x^{2p}$ 用 d'Alembert 判别(只用递推不用通项):$\frac{a_{2p+2}x^{2p+2}}{a_{2p}x^{2p}}=\frac{p^2-\alpha^2}{(p+1)(p+2)}x^2\to x^2$,故 $|x|<1$ 收敛,$|x|>1$ 必发散。幂级数在收敛半径里面可以逐项求导,因此可以验证它满足方程。$\square$

> [!example] 例子 1.43
> 求函数 $f(x)=\prod_{k=0}^{\infty}\left(1-x^{2^k}\right)$ 的定义域,并证明它在 $0$ 附近可以展开成幂级数。
> **Preuve :**
> 1. 先研究定义区间,证明为 $(-1,1)$(取对数变成级数,再用等价无穷小)。
> 2. 发现 $f$ 满足方程 $f(x)=(1-x)f(x^2)$。
> 3. 设 $g(x)=\sum_{n=0}^{\infty}a_n x^n$ 满足上述方程,则
> $$\sum_{n=0}^{\infty}a_n x^{2n}-\sum_{n=0}^{\infty}a_n x^{2n+1}=\sum_{n=0}^{\infty}a_n x^n .$$
> 推论是 $a_{2n}=a_n$,$a_{2n+1}=-a_n$。只要知道 $a_0$ 剩下的全部可以求。由 $f$ 的定义显然 $f(0)=1$,因此设 $a_0=1$。可以求出所有的 $a_n$,易见 $|a_n|\equiv1$,但是看不见规律。知道收敛区间是 $(-1,1)$。
> 剩下需证 $g\equiv f$。这本质上是泛函方程满足 $g(0)=f(0)=1$ 的结果:因为对任何 $x\in(-1,1)$,
> $$g(x)=g\!\left(x^{2^{n+1}}\right)\prod_{k=0}^{n}\left(1-x^{2^k}\right),$$
> 令 $n\to\infty$ 可知 $g(x)=f(x)$。$\square$

### 1.8 实解析和复解析简介

首先需要把前面学的推广到任何 $z_0$ 处可以展开成幂级数。

> [!note] Definition 1.44
> 设 $U$ 是 $\mathbb C$ 中的区域。$f:U\to\mathbb C$ 是(复)解析的(analytique),如果在 $U$ 中每一点都可以展开成幂级数,即 $\forall z_0\in U$,存在 $r>0$ 和 $(a_n)_{n\in\mathbb N}$ 使得
> $$f(z)=\sum_{n\ge0}a_n(z-z_0)^n,\qquad \forall z\in B(z_0,r).$$
> 这表明"在每一点的附近",$f$ 都是一个幂级数的和函数;关于这个"附近"的大小,没有限制。类似地可以定义实解析的概念,略。

> [!example] 例子 1.45
> (1) 多项式;
> (2) $x\mapsto e^x$ 是 $\mathbb R$ 上的实解析函数;
> (3) $z\mapsto e^z$ 是 $\mathbb C$ 上的复解析函数。
> 多项式好说。指数函数虽然收敛半径无穷大,但如果 $z_0\ne0$,还是需要重新证明对应的 Taylor 展开收敛(也要说点理由)。直到有下面的定理(小 Rudin 定理 8.4)。

> [!note] Theorem 1.46
> 设 $f(x)=\sum_{n=0}^{\infty}c_n x^n$ 而且收敛半径是 $R$。对于任何 $|a|<R$,$f$ 在 $a$ 处可以展开为幂级数
> $$f(x)=\sum_{n=0}^{\infty}a_n(x-a)^n,$$
> 而且它的收敛半径不小于 $R-|a|$。

**Preuve :**
$$f(x)=\sum_{n=0}^{\infty}c_n[(x-a)+a]^n=\sum_{n=0}^{\infty}c_n\sum_{m=0}^n\binom{n}{m}a^{n-m}(x-a)^m=\sum_{m=0}^{\infty}\left[\sum_{n=m}^{\infty}\binom{n}{m}c_n a^{n-m}\right](x-a)^m .$$
让方括号部分为 $a_m$ 就好了。但这里本质上用到了无穷求和的交换,需要证明(希望对所有 $|x-a|<|R-a|$ 成立)。定义
$$A_{mn}=\begin{cases}\binom{n}{m}c_n a^{n-m} & n\ge m\\ 0 & n<m,\end{cases}$$
则本质上需要验证 $\sum_n\sum_m A_{mn}=\sum_m\sum_n A_{mn}$。由下面的引理,只要验证 $\sum_n\sum_m|A_{mn}|<\infty$。为此
$$\sum_n\sum_m|A_{mn}|=\sum_n|c_n|(|x-a|+|a|)^n<\infty,$$
确实收敛,因为 $|x-a|+|a|<R$。$\square$

> [!note] Lemma 1.47(双指标求和交换)
> 设有双指标数列 $(A_{mn})$,只要
> $$\sum_{n=1}^{\infty}\sum_{m=1}^{\infty}|A_{mn}|<\infty,$$
> 就(有意义)
> $$\sum_{n=1}^{\infty}\sum_{m=1}^{\infty}A_{mn}=\sum_{m=1}^{\infty}\sum_{n=1}^{\infty}A_{mn}.$$
> (这个条件看成累次求和的字面理解:先求 $m$ 的和,对任何 $n$ 得到一个数,然后再对 $n$ 求和,总和有限。)

**Preuve :** 左边等于 $\lim_{N\to\infty}\lim_{M\to\infty}\sum_{n=1}^N\sum_{m=1}^M A_{mn}=\lim_{N\to\infty}\lim_{M\to\infty}S_{MN}$,其中 $S_{MN}=\sum_{n=1}^N\sum_{m=1}^M A_{mn}$。结论的意思是 $\lim_N\lim_M S_{MN}=\lim_M\lim_N S_{MN}$。固定 $M,N$,另一侧极限总存在,只要说明至少有一边是一致收敛的即可。
(1) 固定 $M$,验证 $\lim_{N\to\infty}S_{MN}$ 存在。由有限个极限之和还是极限,只要验证对固定的 $m$,级数 $\sum_{n=1}^{\infty}A_{mn}$ 收敛,进而只要 $\sum_{n=1}^{\infty}|A_{mn}|$ 收敛。作为非负级数可以用比较判别法:$|A_{mn}|\le\sum_{m=1}^{\infty}|A_{mn}|$,由条件得证。
(2) 固定 $N$,$\lim_{M\to\infty}S_{MN}$ 存在:同样只要对任何 $n$,$\sum_{m=1}^{\infty}A_{mn}$ 收敛,这由假设的绝对收敛即得。
(3) 断言 $\lim_{N\to\infty}S_{MN}$ 关于 $M$ 是一致的。实际上
$$|S_{MN_1}-S_{MN_2}|=\left|\sum_{n=N_2+1}^{N_1}\sum_{m=1}^{M}A_{mn}\right|\le\sum_{n=N_2+1}^{N_1}\sum_{m=1}^{\infty}|A_{mn}|,$$
然后对条件用一下 Cauchy 就可以了。
有了 (1)(2)(3),直接用双指标极限交换即可。$\square$

> [!example] 例子 1.48
> 作为 $\mathbb C\setminus\{z_0\}$ 上定义的函数 $f(z)=\dfrac{1}{z-z_0}$ 是复解析的,而且各点处的收敛半径很"合理"。
> **Preuve :** 展开中心为 $z_1$(要求 $z_1\ne z_0$)。将函数改写为关于 $(z-z_1)$ 的表达式:
> $$\frac{1}{z-z_0}=\frac{1}{(z-z_1)+(z_1-z_0)}=\frac{1}{z_1-z_0}\cdot\frac{1}{1+\frac{z-z_1}{z_1-z_0}}.$$
> 令 $w=\frac{z-z_1}{z_1-z_0}$。当 $|w|<1$ 时利用几何级数展开 $\frac{1}{1+w}=\sum_{n=0}^{\infty}(-1)^n w^n$,代入得
> $$\frac{1}{z-z_0}=\frac{1}{z_1-z_0}\sum_{n=0}^{\infty}(-1)^n\left(\frac{z-z_1}{z_1-z_0}\right)^n=\sum_{n=0}^{\infty}\frac{(-1)^n}{(z_1-z_0)^{n+1}}(z-z_1)^n .$$
> 收敛条件为 $|w|<1$,即 $|z-z_1|<|z_1-z_0|$。因此收敛半径为展开中心到奇点的距离:$R=|z_1-z_0|$,收敛圆盘的边界圆周恰好经过奇点 $z_0$。$\square$

> [!example] 例子 1.49
> 作为实数上定义的函数 $f(x)=\dfrac{1}{1+x^2}$ 在 $\mathbb R$ 上是实解析的。它是全局定义的,但是它的收敛半径却不是"很大",主要是复平面上有两个障碍。

> [!info] 注记
> 复解析函数的收敛半径总是可以从它的定义域读出来,而实解析函数不行。后半句是上面例子展示的,前半句需要证明(等复变函数课)。

#### 1.8.1 解析延拓

类似前面的 Proposition 1.34(实和复版本都对)。

> [!note] Proposition 1.50(零点的孤立性)
> 设 $f$ 在 $0$ 点可以展开为幂级数,除非 $f$ 恒等于 $0$,一定存在 $r>0$,使得 $f$ 在 $B(0,r)\setminus\{0\}$ 上没有零点。

**Preuve :** 如果 $f$ 不是恒等于 $0$,则其幂级数展开总有一个系数不是 $0$,不妨设最靠前的一个为 $a_p$,则
$$f(z)=z^p(a_p+a_{p+1}z+\cdots).$$
括号里面是收敛幂级数,连续,而 $a_p\ne0$,所以存在 $r$,使得括号里面在 $B(0,r)$ 里面没有零点。$\square$

> [!note] Corollary 1.51
> 如果 $U\subset\mathbb C$ 是连通开集,$f,g$ 是 $U$ 上的两个解析函数,如果存在 $z_0\in U$ 使得对于任何 $r>0$,$B(z_0,r)\setminus\{z_0\}$ 中都有一个点 $z$ 使得 $f(z)=g(z)$,则 $f\equiv g$。

**Preuve :** 令 $h:=f-g$。
第一步:$h$ 在 $z_0$ 某邻域内恒为零。若不然,由前一命题,存在 $r_0>0$ 使得 $h$ 在 $B(z_0,r_0)\setminus\{z_0\}$ 上无零点。但题设要求对任意 $r>0$ 存在 $z\in B(z_0,r)\setminus\{z_0\}$ 使 $h(z)=0$,取 $r=r_0$ 即得矛盾。故存在 $r_0>0$ 使得 $h\equiv0$ 于 $B(z_0,r_0)$。
第二步:定义零点集 $E:=\{z\in U: h\equiv0\ \text{于}\ z\ \text{的某邻域内}\}$。由第一步 $z_0\in E$,故 $E\ne\varnothing$。
$E$ 为开集:若 $z\in E$,则存在 $r>0$ 使 $h\equiv0$ 于 $B(z,r)\subset U$。对任意 $w\in B(z,r)$,显然 $h\equiv0$ 于 $B(w,r-|w-z|)$,故 $w\in E$。因此 $B(z,r)\subset E$。
$E$ 为闭集(相对于 $U$):设 $z\in U$ 为 $E$ 的聚点,则存在 $z_n\in E$,$z_n\to z$。由定义每个 $z_n$ 都有邻域使 $h\equiv0$,故 $h(z_n)=0$ 对所有 $n$ 成立;由连续性 $h(z)=0$。若 $z\notin E$,则 $h\not\equiv0$ 于 $z$ 的任何邻域,由零点孤立性存在 $\rho>0$ 使 $h$ 在 $B(z,\rho)\setminus\{z\}$ 上无零点;但 $z_n\to z$,对足够大的 $n$ 有 $z_n\in B(z,\rho)\setminus\{z\}$ 且 $h(z_n)=0$,矛盾。故 $z\in E$,即 $E$ 包含其所有在 $U$ 中的聚点,$E$ 为 $U$ 中的相对闭集。
第三步:由连通性得结论。$E\subset U$ 非空、既开又相对闭。因 $U$ 连通,它不能分解为两个非空相对开集的并,故 $E=U$。即 $h\equiv0$ 于 $U$,亦即 $f\equiv g$。
实变版本:若 $U\subset\mathbb R$ 为区间,$f,g$ 为实解析函数,上述论证完全适用,只需将复圆盘替换为实区间,解析性替换为实解析性。$\square$

这给人一种感觉:比如 $f$ 在 $0$ 点可以展开为幂级数,尽管收敛半径不是很大,但它的定义域可以扩大,因为至少这种"扩充"的方式被上述定理"唯一"决定了,扩大到不能再扩大。

## 2. 广义积分

本章总是设 $K=\mathbb R,\mathbb C$。

回忆:$f:[a,b]\to K$ 称为分段连续函数,如果存在分割 $(a_0,\cdots,a_n)$,使得对任何 $i=0,\cdots,n-1$,$f$ 在 $(a_i,a_{i+1})$ 上的限制连续,而且允许一个到 $[a_i,a_{i+1}]$ 的连续延拓(简言之,端点和分点完全不去限制,但端点分点处的单侧极限都要求存在)。
设 $I$ 是一般区间(不是有界闭的那种),则 $f$ 称为在 $I$ 上分段连续的,如果对 $I$ 中任何 $[a,b]$,$f$ 在 $[a,b]$ 上分段连续。这种函数全体记为 $C_M(I,K)$。
如果 $f\in C_M(I,K)$,记(一定存在,差一个常数唯一)它的原函数为 $\int f\,dx$。

### 2.1 推广到 $[a,\infty)$

#### 2.1.1 定义和一般性质

> [!note] Definition 2.1
> 设 $f\in C_M([a,+\infty),K)$。称积分 $\int_a^{\infty}f$ 收敛,如果 $\lim_{x\to\infty}\int_a^x f$ 存在于 $K$。这时用
> $$\int_a^{\infty}f\qquad \text{或者}\qquad \int_a^{\infty}f(t)\,dt$$
> 记之。不然就说积分 $\int_a^{\infty}f$ 发散。

这个极限也明显有一个对应的 Cauchy 表述,我们经常用它来证明不收敛。

> [!example] 例子 2.2
> 证明 $\int_0^{\infty}\cos t\,dt$ 发散。
> **Preuve :** 方法一:既然知道原函数 $F(x)=\int_0^x\cos t\,dt=\sin x$,那么极限不存在,容易直接由定义说明发散。
> 方法二:用 Cauchy。取 $\varepsilon=1/4$,对任何 $N$,取 $x=2k\pi>N$,考虑 $\int_x^{x+\pi/2}\cos t\,dt$。$\square$

> [!warning] 注意
> 很应该和级数类比,但是有不同:$\int_a^{\infty}f$ 收敛,不要求极限 $\lim_{x\to\infty}f(x)=0$。

> [!example] 例子 2.3
> $$\int_0^{\infty}e^{-t}\,dt=1.$$

> [!example] 例子 2.4
> $\int_1^{\infty}\log\left(1+\frac{1}{t^2}\right)dt$ 是否收敛,收敛于多少?
> **Preuve :** 暴力算
> $$F(x)=\int_1^x\log\!\left(1+\frac{1}{t^2}\right)dt = t\log\!\left(1+\frac{1}{t^2}\right)\Big|_1^x+2\int_1^x\frac{1}{1+t^2}\,dt = x\log\!\left(1+\frac{1}{x^2}\right)-\log2+2\left(\arctan x-\frac{\pi}{4}\right),$$
> 取极限得 $\lim_{x\to\infty}F(x)=\dfrac{\pi}{2}-\log2$。
> 若假装分部积分再做一遍(把某些函数在无穷处的值理解为对应的极限,以存在为前提),形式上分部积分的规则对广义积分也可以用。本质上就是前面的计算。$\square$

> [!example] 例子 2.5
> 研究收敛并计算 $\int_{2/\pi}^{\infty}\frac{\cos(1/t)}{t^2\sqrt{\sin(1/t)}}\,dt$。
> **Preuve :** 令 $u=1/t$,则 $dt=-t^2\,du$,积分化为 $\int_0^{\pi/2}\frac{\cos u}{\sqrt{\sin u}}\,du$。当 $u\to0^+$ 时被积函数 $\sim u^{-1/2}$,可积,故收敛。再令 $v=\sin u$,得 $\int_0^1 v^{-1/2}dv=2\sqrt{v}\big|_0^1=2$。$\square$

基本性质,简单罗列:
- 线性性;
- 积分区间可加性:$\int_a^{\infty}=\int_a^b+\int_b^{\infty}$;
- 复值的积分对应实部虚部分别积分;
- 如果 $f$ 非负,则积分非负;
- (在连续性的假设下)变下限积分求导定理。

**书上注记:** $\int_a^{\infty}$ 的积分和级数有点像。

#### 2.1.2 非负函数的情况

类似于数项级数。

> [!note] Proposition 2.6
> 设 $f\in C_M([a,\infty),\mathbb R)$ 是非负函数。
> 1. 积分 $\int_a^{\infty}f$ 收敛,当且仅当,函数 $x\mapsto\int_a^xf(t)dt$ 有界。
> 2. 积分 $\int_a^{\infty}f$ 发散,当且仅当,$\lim_{x\to\infty}\int_a^x f=+\infty$。

于是收敛不收敛就可以比较判别了。

> [!note] Theorem 2.7
> 考虑两个 $[a,\infty)$ 上定义的非负实值函数 $f,g$。
> 1. 如果存在 $b\ge a$,使得对任何 $t>b$ 都有 $f(t)\le g(t)$,则:$\int_a^{\infty}g$ 收敛推出 $\int_a^{\infty}f$ 收敛;$\int_a^{\infty}f$ 发散推出 $\int_a^{\infty}g$ 发散。
> 2. 如果 $f=O(g)$,则 $\int_a^{\infty}g$ 收敛推出 $\int_a^{\infty}f$ 收敛;
> 3. 如果在无穷处 $f\sim g$,则同时收敛和发散。

证明太简单,略。常用的比较:
- $\int_0^{\infty}e^{-\alpha t}dt$ 收敛,当且仅当 $\alpha>0$;
- $\int_a^{\infty}\frac{1}{t^{\alpha}}dt$ 收敛,当且仅当 $\alpha>1$;
- $\int_2^{\infty}\frac{1}{t^{\alpha}(\log t)^{\beta}}dt$ 收敛,当且仅当 $\alpha>1$,或者 $\alpha=1$ 而且 $\beta>1$。

(这些都是可以用定义算的。)

> [!example] 例子 2.8
> 证明对所有的 $\alpha$,$\int_1^{\infty}t^{\alpha}e^{-t}dt$ 收敛。
> **Preuve :** 采用比较判别,声称(当然可以证明)存在 $C(\alpha)>0$ 使得 $\sup_{[1,\infty)}t^{\alpha}e^{-\frac12t}\le C(\alpha)$,对任何 $\alpha\in\mathbb R$。$\square$

> [!example] 例子 2.9
> 对任何 $x\ge0$,令 $f(x)=\int_x^{\infty}\log\left(\frac{t^2+2}{t^2+1}\right)dt$。
> 1. 说明定义合理,证明 $f$ 在 $\mathbb R_+$ 上的连续性。
> 2. 证明 $f$ 在 $\mathbb R_+^*$ 上是 $C^1$ 的,并计算 $f'(x)$。
> 3. 问是不是在 $0$ 处可导?
> **Preuve :** 函数 $t\mapsto\log\frac{t^2+2}{t^2+1}$ 连续。主要讨论在无穷远这个积分是不是收敛的。为此
> $$0\le\log\frac{t^2+2}{t^2+1}=\log\left(1+\frac{1}{1+t^2}\right)\sim_{\infty}\frac{1}{1+t^2}\sim_{\infty}\frac{1}{t^2},$$
> 利用等价无穷小判别(因为非负),可知有定义。函数 $g(y)=\int_y^{\infty}\log\frac{t^2+2}{t^2+1}dt$ 在 $\mathbb R_+$ 上的可导性由之前性质。$x>0$ 时
> $$f'(x)=g'(\sqrt{x})\frac{1}{2\sqrt{x}}=-\log\!\left(\frac{2+x}{1+x}\right)\frac{1}{2\sqrt{x}}.$$
> 利用 $\lim_{x\to0^+}f'(x)=-\infty$ 可以判断 $f$ 在 $0$ 处不可导(没有右导数)。$\square$

#### 2.1.3 可积性

> [!warning] 注意
> 不要把 $\int_a^{\infty}$ 收敛和下面将要定义的"可积"搞混了。这个定义虽然别扭,但是和将来的理论衔接良好。

> [!note] Definition 2.10
> 称 $f\in C_M([a,\infty),K)$ 是在 $[a,\infty)$ 上可积的,或说积分 $\int_a^{\infty}f$ 绝对收敛,如果 $\int_a^{\infty}|f|$ 收敛。

当然可积必然收敛,因为绝对收敛必然收敛。判断可积就是判断绝对可积,就是判断非负函数的可积性,当然可以用(应该用)比较判别法。定理叙述略。

> [!example] 例子 2.11
> 判断 $\int_0^{\infty}\sin(t)\log\left(\frac{t^2+1}{t^2+2}\right)dt$ 的可积性。它在 $0$ 处没问题(被积函数连续到 $0$)。在无穷先加绝对值,就没有 $\sin t$ 了,再比较。$\square$

#### 2.1.4 半收敛(条件收敛)

> [!note] Definition 2.12
> 如果 $f\in C_M([a,\infty),\mathbb C)$ 不是可积的,但是积分 $\int_a^{\infty}f$ 是收敛的,我们称它是半收敛的(semi-convergente)。

一般中文教材称"条件收敛"(与前文绝对收敛相对)。条件收敛的意思和级数里"收敛但不绝对收敛"是一样的,意思是有正负抵消现象。类似的我们也有著名的判别法。

> [!note] Theorem 2.13
> 设 $f,g\in C_M([a,\infty),\mathbb R)$,如果
> (1)(Dirichlet)$x\mapsto\int_a^xf(t)dt$(关于 $x$)有界,而且 $x\mapsto g(x)$ 单调趋于 $0$,则 $\int_a^{\infty}fg$ 收敛。
> (2)(Abel)如果 $\int_a^{\infty}f$ 收敛,而且 $x\mapsto g(x)$ 单调有界,则 $\int_a^{\infty}fg$ 收敛。

**Preuve :** 上述定理关于 $f,g$ 分段连续的假设是因为本书的理论体系。实际上如果懂 Riemann 可积,完全可以把条件改成 $f,g$ 在任何有界闭区间上黎曼可积,定理依旧成立。为减轻技术困难,我们在加强的条件下证明:假设 $f\in C([a,\infty))$ 而且 $g\in C^1([a,\infty))$。
(1) 利用 Cauchy 性质证明收敛。令 $F(x)=\int_a^xf(t)dt$。
$$\int_{x_1}^{x_2}f(t)g(t)dt=\int_{x_1}^{x_2}g(t)\,dF=F(x)g(x)\Big|_{x_1}^{x_2}-\int_{x_1}^{x_2}F(t)g'(t)dt .$$
利用 $F$ 有界性和 $g\to0$,对任何 $\varepsilon>0$,存在 $M_1$ 使得只要 $x_1,x_2>M_1$ 就有 $\left|F(x)g(x)\big|_{x_1}^{x_2}\right|\le\varepsilon/2$。对第二个积分,利用 $g$ 的单调性,$g'$ 定号,$F$ 提到积分号外面再有界;只要 $x_1,x_2$ 充分大,$\left|\int_{x_1}^{x_2}F(t)g'(t)dt\right|\le C\int_{x_1}^{x_2}|g'(t)|dt\le C|g(x_2)-g(x_1)|\le\varepsilon/2$。
(2) Abel 可以通过从 $g$ 中减去一个常数的办法,转化为 Dirichlet。$\square$

> [!example] 例子 2.14
> $\alpha$ 什么时候积分 $\int_1^{\infty}\frac{\sin t}{t^{\alpha}}dt$ 条件收敛、可积?
> **Preuve :** 结论:当 $\alpha>1$ 时可积;当 $\alpha\in(0,1]$ 时条件收敛;当 $\alpha<0$ 时不收敛。
> (1) $\alpha>1$ 绝对可积显然;(2) $\alpha>0$ 时积分收敛,用 Dirichlet;
> (3) $\alpha\in(0,1]$ 不绝对收敛:对任何 $k\in\mathbb N$,
> $$\int_{2k\pi+\pi/4}^{2k\pi+3\pi/4}|\sin t|\frac{1}{t^{\alpha}}dt\ge\frac{\sqrt2}{2}\left(\frac{\pi}{2}\right)\frac{1}{(2k+1)^{\alpha}\pi^{\alpha}}>C\frac{1}{k^{\alpha}} .$$
> 绝对收敛意味着 $\int_1^x\frac{|\sin t|}{t^{\alpha}}dt$ 关于 $x$ 有界;利用 $\sum_{k\ge1}\frac{1}{k^{\alpha}}$ 发散来说明不是绝对收敛的。
> (4) 当 $\alpha<0$ 时不收敛,用 Cauchy 表述。$\square$

> [!example] 例子 2.15
> 证明 $\int_2^{\infty}\log\left(1+\frac{\sin t}{\sqrt{t}}\right)dt$ 发散。
> **Preuve :** 关键点:这个东西是变号的,不能直接用等价无穷小的看法(不然从 $\int_2^{\infty}\frac{\sin t}{\sqrt t}$ 收敛就得到相反的结论了)。
> $$\log\left(1+\frac{\sin t}{\sqrt t}\right)=\frac{\sin t}{\sqrt t}-\frac{1}{2}\frac{\sin^2t}{t}+O\left(\frac{|\sin t|^3}{t^{3/2}}\right).$$
> 不难证明 $\int_2^{\infty}\frac{\sin t}{\sqrt t}$ 收敛,$\int_2^{\infty}\frac{\sin^2t}{t}dt$ 发散。但这样下结论说发散不对,因为完全没有考虑误差。为了严格,我们证明不等式:存在 $C$,使得对任何 $t\in[2,\infty)$,
> $$\left|\log\left(1+\frac{\sin t}{\sqrt t}\right)-\frac{\sin t}{\sqrt t}+\frac{1}{2}\frac{\sin^2t}{t}\right|\le Ct^{-3/2}. \qquad\square$$

#### 2.1.5 积分第二中值定理

这一节可以不需要,但既然想到了还是补充一下。在常和史的书中,这个是作为引理来证明 Dirichlet 和 Abel 的;我们在更好的技术性条件下,使用分部积分代替了。

> [!note] Theorem 2.16(第二积分平均值定理)
> 若函数 $f$ 在 $[a,b]$ 上可积,$g$ 在 $[a,b]$ 上单调,则必存在 $\xi\in[a,b]$ 使得
> $$\int_a^bf(x)g(x)dx=g(a)\int_a^{\xi}f(x)dx+g(b)\int_{\xi}^bf(x)dx .$$

**Preuve :** 定理对黎曼可积的函数成立。先加上 $f$ 连续、$g$ 是 $C^1$ 的,这样可以用分部积分公式(令 $F(x)=\int_a^xf(t)dt$):
$$\int_a^bf(x)g(x)dx=\int_a^bF'(x)g(x)dx=F(b)g(b)-F(a)g(a)-\int_a^bF(x)g'(x)dx .$$
因为 $g'$ 定号(连续,在技术假设下),由积分第一中值(加权推广,就是介值定理的事)得
$$\int_a^bf(x)g(x)dx=\int_a^bf(x)g(b)dx-F(\xi)\int_a^bg'(x)dx=g(a)\int_a^{\xi}f(x)dx+g(b)\int_{\xi}^bf(x)dx .$$
下面这个有一般性技巧。如果 $f,g$ 只是一般的黎曼可积(假装懂,不然就认为是分段连续),可以找到一列 $(f_i,g_i)$,分别是连续和 $C^1$ 的,使得 $\int_a^b|f_i-f|+|g_i-g|dx\to0$,而且 $f_i,g_i$ 一致有界,而且 $g_i(b)=g(b)$、$g_i(a)=g(a)$。然后先对 $(f_i,g_i)$ 用定理,再取极限 $i\to\infty$。$\square$

> [!note] Corollary 2.17
> 如果 $g$ 在 $[a,b]$ 上单调递减而且非负,则存在 $\xi$ 使得
> $$\int_a^bf(x)g(x)dx=g(a)\int_a^{\xi}f(x)dx .$$

**Preuve :** 考虑 $\tilde g(x)=\begin{cases}g(x) & x\in[a,b)\\ 0 & x=b.\end{cases}$ 那么 $\tilde g$ 在 $[a,b]$ 上单调(因为 $g\ge0$)。然后对这个 $f,\tilde g$ 用定理。注意到改变一个点的取值不改变左边的积分,而且 $g(a)=\tilde g(a)$。$\square$

### 2.2 推广到各种区间

反正现在只能做一维的,总共也只有几种可能的推广:
$$(-\infty,a],\quad (-\infty,\infty),\quad (a,b],\quad [a,b),\quad (a,b),\quad (-\infty,b).$$

> [!note] Remark 2.18
> 有些两头可能有问题的。比如 $(a,b)$(中文书会说两个瑕点 $a,b$,这里不这么说,但是在 $[a+\varepsilon,b-\varepsilon]$ 上面自然没问题)称为积分收敛,如果对任何 $c\in(a,b)$,$\int_a^c$ 和 $\int_c^b$ 同时都收敛。

随便举个例子写一下,其余的同理。

> [!note] Definition 2.19
> 设 $f\in C_M([a,b),K)$,称积分 $\int_a^bf$ 收敛,如果 $\lim_{x\to b}\int_a^xf$ 存在于 $K$ 中。这时记这个极限为 $\int_a^bf$ 或 $\int_a^bf(t)dt$。若不然则称积分发散。

按道理说这里也有一个绝对收敛和条件收敛的问题。

> [!note] Definition 2.20
> 称 $f\in C_M([a,b),K)$ 是在 $[a,b)$ 可积的,或者说 $\int_a^bf$ 绝对收敛,如果 $\int_a^b|f|$ 收敛。

> [!note] Remark 2.21
> 这里一般没有人叙述 Abel/Dirichlet 类似的变号判别法。如果觉得被积函数确实变号、这些判别法可能有用,可以考虑使用一个积分的变量代换,比如 $s\mapsto\frac{1}{b-t}$,把这个积分转换为 $[c,\infty)$ 型的。由定义不难看出,这个转换把收敛的广义积分变成收敛的广义积分。

> [!example] 例子 2.22(最重要的例子)
> $$\int_a^b\frac{dt}{(b-t)^{\alpha}}$$
> 收敛,当且仅当, $\alpha<1$。直接计算即可。

> [!example] 例子 2.23(典型的例子)
> 研究 $\int_0^1\sin\left(\frac1t\right)dt$。
> **Preuve :** 用定义应该研究 $x\mapsto\int_x^1\sin\left(\frac1t\right)dt$。变量代换 $s=1/t$,则 $\int_x^1\sin\frac1t\,dt=\int_1^{1/x}\sin s\,\frac{1}{s^2}ds$。右边 $x\to0$ 极限明显存在(用之前的判别法)。$\square$
> 看变化之后的积分,发现它是绝对可积的,进而想到原来也应该是绝对可积的。的确,这个题目基本没有价值:被积函数有界,那么在 $0$ 上的积分"绝对可积"是显然的,根本不需要换元。

> [!example] 例子 2.24
> 讨论 $\int_0^{1/2}\cos t\,|\log t|^{\alpha}dt$,$\alpha\in\mathbb R$。
> **Preuve :** 主要出问题的地方在 $0$ 附近。当 $t\to0$ 时 $\log t\to\infty$。如果 $\alpha\le0$,那么 $t\mapsto|\log t|^{\alpha}$ 在零点有极限,整个函数都在 $C_M([0,1/2])$ 里面,积分收敛不成问题。当 $\alpha>0$ 时,考虑绝对收敛 $|\cos t||\log t|^{\alpha}\le C(\alpha)t^{-0.1}$,右边在 $(0,1/2]$ 上的积分收敛,进而比较判别。$\square$

> [!example] 例子 2.25
> 研究积分 $\int_1^{\infty}\sin t\,\log\left(\frac{t^2+1}{t^2-1}\right)dt$。
> **Preuve :** 可以分成 $\infty$ 处和 $1$ 处讨论。在 $\infty$ 附近 $\log\frac{t^2+1}{t^2-1}=\log\left(1+\frac{2}{t^2-1}\right)\sim\frac{2}{t^2-1}\sim\frac{2}{t^2}$,积分绝对可积。在 $1$ 附近,
> $$\sin t\log\frac{t^2+1}{t^2-1}=\sin t\log(t^2+1)-\sin t\log(1+t)-\sin t\log(t-1),$$
> 只有第三项可能是问题,但 $|\sin t\log(t-1)|\le C(t-1)^{-0.1}$,进而也是可积的。$\square$

### 2.3 基本性质和计算

对于收敛的(广义)积分,很多性质和普通积分一样。总结如下。
1. 线性性。$I$ 是区间,这个积分不能对所有 $C_M(I,K)$ 有定义。使得积分收敛的集合(是个线性子空间),积分是在这个子空间上定义的线性函数。
2. 非负性。如果被积函数非负,那么积分非负。积分如果要等于 $0$,则(需要技术条件)被积函数恒为 $0$。
3. 绝对值性:$\left|\int_If\right|\le\int_I|f|$。
4. 积分区间的可加性。大区间可积则小区间可积;合适的约定积分上下限的情况下 $\int_x^yf=\int_x^zf+\int_z^yf$。形式上甚至不去管是普通的积分还是广义的积分。
5. 分部积分还是可以做,而且外观还是和普通积分一样(因为不碰 Riemann 积分的原因,这里要求的条件还是很强的)。

> [!note] Proposition 2.26
> 设 $f,g$ 是两个 $I$ 上定义的 $C^1$ 函数,$a,b$(扩充实数)是 $I$ 的端点。如下三个积分中如果两个存在(可积)
> $$\int_a^b f'g,\qquad [fg]\big|_a^b,\qquad \int_a^bfg',$$
> 则第三个也存在,而且
> $$\int_a^b f'g=[fg]\big|_a^b-\int_a^b fg' .$$

证明需要分情况讨论,然后走定义,看成极限。取极限之前就是普通积分对应的分部积分公式。

> [!example] 例子 2.27
> 计算 $I=\int_0^1\frac{\log(1-t^2)}{t^2}dt$。
> **Preuve :** 用不是很"法式严密"的记号写。若取 $d(1/t)$,得
> $$\int_0^1\frac{\log(1-t^2)}{t^2}dt=\log(1-t^2)\frac{1}{t}\Big|_0^1-\int_0^1\frac{1}{t}\frac{-2t}{1-t^2}dt .$$
> 观察发现上面两项都有问题:第一项在 $t\to1^-$ 时极限是无穷,第二项在 $1$ 附近的广义积分明显不收敛。这表明上述计算不对,其实也不是完全不对,只是出现了无穷减无穷的情况。
> 所以同样是做分部积分,下面的操作高明(悄悄地把无穷处理了):
> $$\int_0^1\frac{\log(1-t^2)}{t^2}dt=\int_0^1\log(1-t^2)\,d\!\left(1-\frac1t\right)=\log(1-t^2)\left(1-\frac1t\right)\Big|_0^1-\int_0^1\left(1-\frac1t\right)\frac{-2t}{1-t^2}dt=\int_0^1\frac{-2}{1+t}dt=-2\log2 .$$
> 蓝色部分按照极限理解等于 $0$。$\square$

6. 变量代换。

> [!note] Proposition 2.28
> 设 $f\in C((a,b),K)$ 和 $\varphi:(\alpha,\beta)\to(a,b)$,其中 $-\infty\le a<b\le\infty$ 和 $-\infty\le\alpha<\beta\le\infty$。要求 $\varphi$ 是 $C^1$ 的、严格单调的(不论增减)、双射。则(广义)积分
> $$\int_a^bf(t)\,dt\qquad\text{和}\qquad \int_{\alpha}^{\beta}f(\varphi(u))\varphi'(u)\,du$$
> 的收敛性是一样的,而且当它们收敛时
> $$\int_a^bf(t)\,dt=\int_{\alpha}^{\beta}f(\varphi(u))\,|\varphi'(u)|\,du .$$

**Preuve :** 从假设可以看出 $\varphi$ 在 $\alpha,\beta$ 处的极限分别为 $a,b$ 或者 $b,a$。不妨考虑后一种,
$$\int_{\varphi(\alpha_i)}^{\varphi(\beta_i)}f(t)\,dt=\int_{\alpha_i}^{\beta_i}f(\varphi(u))\varphi'(u)\,du,$$
其中 $\alpha_i\downarrow\alpha$ 而且 $\beta_i\uparrow\beta$(记住这时 $\varphi'<0$;加上绝对值,左边的积分上下限换一下位置)。$\square$

> [!note] Remark 2.29
> 这个公式在普通积分情形下本质上是 NL 公式的推论,不要求双射。现在的问题是:此时是不是也可以不要求双射,只要求对应上下界的极限?

> [!example] 例子 2.30
> 证明 $\int_0^{\infty}\frac{\log t}{1+t^2}dt$ 收敛,并计算(利用变量代换 $u\mapsto\frac1u$)。
> **Preuve :** 两个端点都要分析收敛性(略)。做代换
> $$\int_0^{\infty}\frac{\log t}{1+t^2}dt=\int_{\infty}^0\frac{\log u}{1+u^2}\frac{1}{(-u^2)}du=-\int_0^{\infty}\frac{\log u}{1+u^2}du,$$
> 所以这个东西必须是 $0$。$\square$

### 2.4 渐近分析

这一节的主题是:如果一个反常积分收敛了,收敛得有多快?如果一个反常积分发散了,那么发散得有多快(趋于无穷有多快)?定理就不讲了,直接看例子。

> [!example] 例子 2.31
> 设函数 $f:x\mapsto\int_0^x\log(\log(1+t))$ 在 $0$ 处的一个简单的等价(无穷小)。
> **Preuve :** 反常积分 $\int_0^1\log\log(1+t)\,dt$ 是可积的。收敛得多快的问题,利用展开
> $$\log(\log(1+t))=\log\left(t-\frac12t^2+\frac13t^3+o(t^3)\right)=\log t+\log\left(1-\frac12t+o(t)\right)=\log t-\frac12t+o(t).$$
> 直接用小 $o$ 带上积分是危险的,比较可靠的是做成不等式。比如声称:存在 $C$,使得对任何 $t\in(0,1]$ 有 $|\log(\log(1+t))-\log t|\le C$(可以考虑用求导法证明这个不等式)。然后求一个简单等价
> $$x\mapsto\int_0^x\log t\,dt=(t\log t-t)\Big|_0^x\sim x\log x .$$
> 再论证 $\int_0^x\left(\log\log(1+t)-\log t\right)dt=O(x)=o(x\log x)$。最终结论是简单等价量 $x\log x$。$\square$

## 3. 含参变量积分

设 $I$ 是一个区间(也许闭,也许开,也许无界),$f:I\to K$ 的积分表示为 $\int_If$。如果 $f$ 依赖于一个参数 $\alpha$,$f_{\alpha}:I\to K$,则有映射 $\alpha\mapsto\int_I f_{\alpha}$。研究这个映射的性质是本章的内容。

> [!info] Remark 3.1
> 其实以前学过类似的东西:函数项级数就可以理解为"含有参数的级数"。我们打算研究的内容和主要结果也和那个时候类似。

具体的参数,可以是序列指标,也可以是连续的变量。积分可以是黎曼积分,也可以是反常积分。

> [!info] 说明
> 这一段其实是非常纠结的一段。按照常和史的处理方式,基本上就是在各种场合不断重申"一致收敛"在极限交换中的作用,需要花费很多课时,而且因为技术的原因效果并不好。这还不涉及讨论多元的含参变量(广义)积分。法国教材采用了一种变通的办法:把将来的大定理讲出来并用它研究性质,但是跳过证明。我们必须在两种思路中选:先按传统办法讲个思路,理解"一致收敛"如何处理这种问题,然后再讲法国人的定理。

### 3.1 含参的 Riemann 积分

> [!info] 核心
> 问题的本质还是极限号交换次序问题。好多次了,每次都是上某种一致性条件。当然这种一致性不成立的时候,是有反例的,应该能随时给出反例。

本节假装懂黎曼可积,不行的话就是 $C_M([a,b],\mathbb R)$。

#### 3.1.1 积分号和极限

> [!example] 例子 3.2
> 此处应该有积分号和极限号不交换的例子。

> [!note] Theorem 3.3
> 设 $f_n:[a,b]\to\mathbb R$ 是黎曼可积的,如果 $f_n$ 一致收敛于 $f$,则 $f$ 也是黎曼可积的,而且 $\int_a^b|f_n-f|\to0$。特别的
> $$\lim_{n\to\infty}\int_a^b f_n=\int_a^b f .$$

证明过于简单,略。

> [!note] Remark 3.4
> 唯一需要注意的是,为什么 $f$ 是黎曼可积的?(可以用 Darboux 和的理论,也可以用刚讲的 Lebesgue 定理。)如果你用 $f_n\in C_M([a,b],\mathbb R)$,反而麻烦了,因为就算是一致收敛的极限也许不在 $C_M$ 中。

> [!note] Definition 3.5
> 称一列函数 $f_n$ 是一致黎曼可积的,如果对任何 $\varepsilon>0$,存在不依赖于 $n$ 的 $\delta>0$,使得只要是划分 $\pi$ 的宽度 $\|\pi\|<\delta$,都有 $\sum_{i=1}^m\omega_i(f_n)\Delta x_i<\varepsilon$。

本着用一致性来解决问题的精神,猜想下面的定理:

> [!note] Theorem 3.6
> 设 $f_n:[a,b]\to\mathbb R$ 一致黎曼可积,而且 $f_n$ 逐点收敛于 $f$。则 $f$ 也黎曼可积,而且 $\int_a^b|f_n-f|\to0$。
> (首先,说明这个定理可以推出前面那个用一致收敛做假设的定理;其次,这个证明作为思考题;最后,发现这个定理的条件很难验证,也就是说从实用的角度去看,这个"强"的定理未必好用。)

> [!note] Theorem 3.7
> 设 $f(x,y)$ 在 $[a,b]\times[c,d]$ 上连续,则函数 $y\mapsto\int_a^bf(x,y)dx$ 是连续函数。

证明就是一句话:当 $y_n\to y_0$ 时,$f(x,y_n)$ 作为 $x$ 的函数一致收敛于 $f(x,y_0)$。

> [!note] Remark 3.8
> 我们学过赋范向量空间 $E$ 上的连续函数。这里是 $\mathbb R^2$。回忆(强调)这不同于关于两个变量分别(作为一元函数)连续,这个事情对下文很重要。

#### 3.1.2 两重积分号

> [!note] Theorem 3.9
> 设 $f(x,y)$ 在 $[a,b]\times[c,d]$ 上连续,则以下积分有意义且相等
> $$\int_c^d\left(\int_a^b f(x,y)dx\right)dy=\int_a^b\left(\int_c^d f(x,y)dy\right)dx .$$

**证明思路 :** (一种证明办法,用方块阶梯函数来逼近,因为连续,只要方块足够小,就是一致逼近。)
1. 对任意 $\varepsilon$,把 $[a,b]\times[c,d]$ 分成小矩形,使 $f$ 在每个矩形(记为 $R_{ij}$)上的振幅小于 $\varepsilon$。
2. 注意 $R_{ij}$ 的边界。例如可规定共享的水平线段归上面的矩形,共享的垂直线段归左边的。
3. 定义"阶梯函数" $h$,使它在每个 $R_{ij}$ 上为常数,例如取 $h=f$ 在 $R_{ij}$ 的中心处的值。
4. 只需估计 $\int_a^b\int_c^d|f-h|\,dy\,dx$,希望它小于 $C\varepsilon$。另一半同理,再由 $\varepsilon$ 的任意性得证。
5. 精确地说,考虑函数 $x\mapsto\int_c^d|f-h|dy$。可断言除有限多个值外,这个函数小于 $\varepsilon(d-c)$。$\square$

> [!note] Remark 3.10
> 以上这个证明没有问题,但对我们的课程安排有点问题:我们本质上没有讲过二元的积分,只是补充了计算方法,当时说到我们只处理连续函数。所以上面用到的分块常值积分的性质都是"想象"的。
> 我们还可以有一个证明,利用 Stone-Weierstrass 定理:对任何 $\varepsilon>0$,存在形如 $g=\sum_{i=1}^N u_i(x)v_i(y)$ 的函数,使得 $\max_{[a,b]\times[c,d]}|f-g|\le\varepsilon$,其中 $u_i,v_i$ 都是一元连续函数。

**Preuve :** 考虑集合
$$A=\left\{\sum_{i=1}^N u_i(x)v_i(y)\ \Big|\ N\in\mathbb N,\ u_i\in C([a,b]),\ v_i\in C([c,d])\right\}.$$
验证 $A$ 满足 Stone-Weierstrass 定理的条件:
(1) $A$ 是 $C([a,b]\times[c,d])$ 的线性子空间,显然;
(2) $A$ 对乘法封闭:设 $f=\sum_{i=1}^N u_i(x)v_i(y)$、$g=\sum_{j=1}^M\tilde u_j(x)\tilde v_j(y)$,则 $fg=\sum_{i=1}^N\sum_{j=1}^M(u_i\tilde u_j)(x)(v_i\tilde v_j)(y)\in A$;
(3) $A$ 包含常值函数:取 $u(x)\equiv1$、$v(y)\equiv c$ 即可;
(4) $A$ 分离点:设 $(x_1,y_1)\ne(x_2,y_2)$。若 $x_1\ne x_2$,取 $g(x,y)=x$;若 $x_1=x_2$ 而 $y_1\ne y_2$,取 $g(x,y)=y$。
由 Stone-Weierstrass 定理,$A$ 在 $C([a,b]\times[c,d])$ 中按上确界范数稠密。即对任意 $\varepsilon>0$,存在 $g\in A$ 使得 $\max_{[a,b]\times[c,d]}|f-g|\le\varepsilon$。
对于 $g=\sum_{i=1}^N u_i(x)v_i(y)$,由于每个 $u_i,v_i$ 都连续,累次积分显然可以交换:
$$\int_c^d\left(\int_a^b g(x,y)dx\right)dy=\sum_{i=1}^N\left(\int_c^dv_i(y)dy\right)\left(\int_a^bu_i(x)dx\right)=\int_a^b\left(\int_c^d g(x,y)dy\right)dx .$$
现在对一般的 $f$,记 $I_1(f)=\int_c^d\left(\int_a^bf(x,y)dx\right)dy$、$I_2(f)=\int_a^b\left(\int_c^df(x,y)dy\right)dx$。由 $f$ 在紧集上连续故有界,设 $|f|\le M$。取 $g\in A$ 使 $\max|f-g|\le\varepsilon$,则 $|I_1(f)-I_1(g)|\le\varepsilon(b-a)(d-c)$,同理 $|I_2(f)-I_2(g)|\le\varepsilon(b-a)(d-c)$。于是 $|I_1(f)-I_2(f)|\le2\varepsilon(b-a)(d-c)$。令 $\varepsilon\to0$ 即得。$\square$

> [!example] 例子 3.11
> 计算 $I=\int_0^1\frac{x^b-x^a}{\log x}dx$,$0<a<b$。
> **Preuve :** 观察 $\frac{x^b-x^a}{\log x}=\int_a^bx^u\,du$。于是
> $$I=\int_0^1\!\!\int_a^b x^u\,du\,dx=\int_a^b\!\!\int_0^1 x^u\,dx\,du=\int_a^b\frac{du}{u+1}=\log\frac{b+1}{a+1}. \qquad\square$$

#### 3.1.3 对参数求导

> [!note] Theorem 3.12
> 设 $f(x,y)$ 和 $\frac{\partial f}{\partial y}(x,y)$ 在 $[a,b]\times[c,d]$ 上连续,则 $\varphi(y)=\int_a^bf(x,y)dx$ 是连续可导的,而且
> $$\varphi'(y)=\int_a^b\frac{\partial f}{\partial y}(x,y)dx .$$

**Preuve :** 利用 Newton-Leibniz 公式把命题转化为交换积分号的问题。由已知定理 $\varphi$ 连续。计算
$$\varphi(y)-\varphi(c)=\int_a^b\big(f(x,y)-f(x,c)\big)dx=\int_a^b\!\!\int_c^y\frac{\partial f}{\partial y}(x,t)\,dt\,dx .$$
因为 $\frac{\partial f}{\partial y}$ 在 $[a,b]\times[c,y]$ 上连续,用前面的定理(交换两重积分)得
$$\varphi(y)-\varphi(c)=\int_c^y\left(\int_a^b\frac{\partial f}{\partial y}(x,t)dx\right)dt .$$
括号里是 $t$ 的连续函数(再用一次已知定理)。因此由 Newton-Leibniz 知 $\varphi$ 可导,其导数如定理所述。$\square$

> [!example] 例子 3.13
> 计算 $\int_0^1\frac{x^b-x^a}{\log x}dx$,其中 $0<a<b$。
> **Preuve :** 正好还有一种解法。将 $a$ 看作常数,$b$ 看作参数:
> $$\frac{dI}{db}=\int_0^1x^b\,dx=\frac{1}{b+1}.$$
> 又因为 $I(a)=0$,所以 $I=\log\frac{b+1}{a+1}$。$\square$

> [!example] 例子 3.14(卷积)
> 设 $\varphi:\mathbb R\to\mathbb R$ 光滑,支集在 $(-1,1)$;又设 $f:\mathbb R\to\mathbb R$ 连续。令 $g(y)=\int_{-\infty}^{\infty}f(x)\varphi(x-y)dx$。求证 $g$ 是 $C^{\infty}$ 函数。
> **Preuve :** 这个事情是逐点的,所以不妨考虑一个固定点附近,比如 $y_0$。考虑一个很大的 $M$,$g(y)=\int_{-M}^Mf(x)\varphi(x-y)dx$。这时用归纳法证明这个积分可以求进去,本质上就是要求当前的被积函数和它关于 $y$ 的导数都在矩形 $[-M,M]\times[y_0-\varepsilon,y_0+\varepsilon]$ 上二元连续。$\square$

#### 3.1.4 积分上下限含有参数

要处理形如 $\varphi(y)=\int_{u(y)}^{v(y)}f(x,y)dx$ 的函数。

这个事情现在不太好严格叙述。可以考虑提条件,但就算提好了条件,也涉及到多元函数的问题。我们算是"学习"过多元求导的链式法则,所以就假装可以。比如需要求导的话,可以猜在合适的条件下
$$\varphi'(y)=\int_{u(y)}^{v(y)}\partial_y f(x,y)\,dx+f(u(y),y)u'(y)-f(v(y),y)v'(y).$$

本质上理解为多元函数(含多参数的积分)$F(u,v,y)=\int_v^uf(x,y)dx$,则 $\varphi(y)=F(u(y),v(y),y)$,是复合函数求导的问题,这个事情将来才学。连续性的讨论也可以类似,还是看成以上的复合。

### 3.2 含参变量反常积分

设 $f:[a,\infty)\times[\alpha,\beta]\to\mathbb R$ 是二元连续的,而且对任何 $u\in[\alpha,\beta]$,反常积分 $\int_a^{\infty}f(x,y)dx$ 收敛,记为 $\varphi(u)$。研究 $\varphi$ 的性质就是本节的内容。

> [!info] 注记
> - 我们不打算讨论瑕积分。在这个精神指导下认为是"同理"。
> - 我们给出的定理将来都是要淘汰的,只是又一次展示如何利用一致收敛作为条件来解决这种极限号交换的问题。
> - 我们学的定理条件都给足,确保在有界闭区间上对应的性质不是问题,进而主要集中于反常积分"一致收敛"的问题。

> [!note] Definition 3.15
> 若对任何 $\varepsilon>0$,存在 $M>0$,$\forall u\in[\alpha,\beta]$,$\forall A>M$
> $$\left|\int_A^{\infty}f(x,y)\,dx\right|\le\varepsilon,$$
> 则称反常积分关于 $u$ 在 $[\alpha,\beta]$ 上一致收敛。

#### 3.2.1 判定

包含以下四点:用定义;用 Cauchy 条件(去否定);用 Weierstrass;用 Abel-Dirichlet。

**1. 用定义,和 Cauchy 条件。**

> [!example] 例子 3.16
> 讨论 $\int_0^{\infty}ue^{-xu}dx$ 在 $u\ge0$ 时的一致收敛性。
> **Preuve :** 这个题目简单,可以直接算
> $$\int_A^{\infty}ue^{-ux}dx=\int_A^{\infty}e^{-xu}d(xu)=e^{-uA}.$$
> 于是结论是在 $[\delta,\infty)$ 上一致(对任何 $\delta>0$);在 $(0,\delta]$ 上不一致。$\square$

> [!info] 点
> 不要盲目做题,要分析参数的变化对被积函数大小(将来是符号的、抵消)的影响,进而分析参数如何变化对收敛有利、如何变化不利,然后再想如何用判别法和不等式去实现。

> [!example] 例子 3.17
> 证明 $\int_1^{\infty}\frac{1}{x}\sin ux\,dx$ 关于 $u\in(0,1]$ 不一致收敛。这是反面用 Cauchy 证明不一致的典型题目,关键是要把常数的依赖关系和为什么"存在"讲清楚。
> **Preuve :** 反面的 Cauchy:存在 $\varepsilon>0$,对任何 $M$,都存在 $B>A>M$ 和 $u$ 使得 $\left|\int_A^B\frac1x\sin ux\,dx\right|>\varepsilon$。
> 取 $\varepsilon=\frac{\sqrt2}{2}\log2$,$A=M+1$,$B=2A$,$u=\frac{\pi}{4A}$,则当 $x\in(A,B)$ 时 $ux\in(\pi/4,\pi/2)$,故 $\sin ux\ge\frac{\sqrt2}{2}$。于是
> $$\int_A^B\frac1x\sin ux\,dx\ge\frac{\sqrt2}{2}\int_A^{2A}\frac1x\,dx=\frac{\sqrt2}{2}\log2 . \qquad\square$$

**2. Weierstrass。**

> [!note] Theorem 3.18
> 如果对任何 $u$ 都有 $|f(x,u)|\le Cg(x)$(对 $x\ge A$),而且 $\int_A^{\infty}g(x)dx$ 收敛,则 $\int_A^{\infty}f(x,u)dx$ 关于 $u$(绝对)一致收敛。

> [!example] 例子 3.19
> (1) $\int_{-\infty}^{\infty}\frac{\sin^2x}{x^2}e^{itx}dx$ 关于 $t\in\mathbb R$ 一致;
> (2) $\int_0^{\infty}e^{-(\alpha+u^2)t}\sin t\,dt$($\alpha>0$)关于 $u\in\mathbb R$ 一致。(简单,略。)

> [!example] 例子 3.20
> $\int_0^{\infty}e^{-u^2t}\sin t\,du$ 关于 $t\in[0,\infty)$ 一致。
> **Preuve :** $t\to0$ 时有两个趋势:一方面 $e^{-u^2t}$ 关于 $u$ 积分收敛得越来越慢,一方面 $\sin t$(因为 $t$ 很小)提供了一些希望。具体要分析。回忆之前做过 $\int_0^{\infty}te^{-ut}du$ 关于 $t=0$ 附近不一致。只有 $t$ 很小才有麻烦,这时不如把 $\sin t$ 看成 $t$。
> 记 $C=\int_0^{\infty}e^{-y^2}dy$。对任意 $\varepsilon>0$,因为 $\lim_{t\to0^+}\frac{\sin t}{\sqrt t}=0$,可取 $t_0\in(0,1)$ 使得 $\frac{\sin t}{\sqrt t}\cdot C<\varepsilon$ 对 $\forall t\in(0,t_0)$。又因为 $\int_0^{\infty}e^{-u^2t_0}du$ 收敛,可取 $M>0$ 使 $\int_M^{\infty}e^{-u^2t_0}du<\varepsilon$。
> 当 $t=0$ 时被积函数恒为零,显然 $\int_M^{\infty}\cdots du=0<\varepsilon$。当 $t\ge t_0$ 时,利用 $|\sin t|\le1$ 与 $e^{-u^2t}\le e^{-u^2t_0}$ 得 $\int_M^{\infty}e^{-u^2t}\sin t\,du\le\int_M^{\infty}e^{-u^2t_0}du<\varepsilon$。当 $t\in(0,t_0)$ 时,换元 $y=u\sqrt t$ 得
> $$\int_M^{\infty}e^{-u^2t}\sin t\,du=\frac{\sin t}{\sqrt t}\int_{M\sqrt t}^{\infty}e^{-y^2}dy\le\frac{\sin t}{\sqrt t}C<\varepsilon .$$
> 综上,该积分关于 $t\in[0,\infty)$ 一致收敛。$\square$

**3. Abel-Dirichlet 一致版本。** 只要在常规的版本上在合适的地方加入一致就可以了。叙述证明略。典型例题:

> [!example] 例子 3.21
> 研究 $\int_1^{\infty}\frac1x\sin\alpha x\,dx$ 的一致收敛性。

#### 3.2.2 性质

性质部分包含三个话题:极限和反常积分交换;积分和反常积分交换;求导和反常积分交换。

**1. 极限和反常积分。** 设有函数列 $f_n:[a,\infty)\to\mathbb R$,对每个 $n$,$\int_a^{\infty}f_n(x)dx$ 收敛,而且 $f_n(x)\to f(x)$(逐点)。再假设 $\int_a^{\infty}f(x)dx$ 收敛。问:$\lim_{n\to\infty}\int_a^{\infty}f_n(x)dx=\int_a^{\infty}f(x)dx$?

反例们:
1. 之前用于 $[0,1]$ 的反例现在显然可以用(这个反例无界)。
2. 设 $f_n$ 为 $[n,n+1]$ 的特征函数(这个反例有界,而且在任何 $[0,A]$ 上一致收敛,即内闭一致收敛)。
3. 就算是假设 $f_n$ 在 $[0,\infty)$ 上一致收敛于 $f$ 都没有用。看例子:$f_n(x)=\begin{cases}\frac1n & x\in[0,n]\\ 0 & x>n.\end{cases}$

这些反例很有用,牢记在心:每次试图证明一个这样的命题时,就想这几个例子。如果证明可以排除这些现象的发生,那么证明就快要成功了。从某种意义上说(对于非负的函数列)这三个例子已经很有代表性了。

> [!note] Theorem 3.22
> 设 $f_n$ 和 $f$ 如上,设 $f_n$ 在任何 $[0,M]$ 上一致收敛于 $f$,而且广义积分 $\int_0^{\infty}f_ndx$ 一致收敛。则
> $$\lim_{n\to\infty}\int_0^{\infty}f_ndx=\int_0^{\infty}fdx .$$
> 证明是标准的 $\varepsilon/3$ 证明,略。由这个定理的条件,是可以(而且应该)证明 $\int_a^{\infty}fdx$ 收敛的。

有连续参数版本:

> [!note] Theorem 3.23
> 设 $f:[a,\infty)\times[\alpha,\beta]\to\mathbb R$ 连续,又设广义积分 $\int_a^{\infty}f(x,u)dx$ 关于 $u\in[\alpha,\beta]$ 一致收敛,则
> $$\varphi(u):=\int_a^{\infty}f(x,u)dx$$
> 在 $[\alpha,\beta]$ 上连续。

**Preuve :** 有两种证明。一种是考虑连续是逐点性质,然后转化为序列极限来证明;另一种是转化为函数列一致收敛的极限来看:$\varphi_n(u):=\int_a^nf(x,u)dx$ 是一列连续函数,而广义积分一致收敛等价于说 $\varphi_n$ 在 $[\alpha,\beta]$ 上一致收敛于 $\varphi$。用之前的定理就够了。$\square$

> [!example] 例子 3.24
> 证明函数 $\alpha\mapsto\int_0^{\infty}\frac{\arctan x}{x^{\alpha}(2+x^4)}dx$ 在 $(-2,2)$ 上是连续的。
> **Preuve :** 如果 $\alpha\le1$,至少 $0$ 附近没有问题(二元连续没有问题),因为 $\frac{\arctan x}{x^{\alpha}}=\frac{\arctan x}{x}x^{1-\alpha}$。如果考虑 $1<\alpha<2$,同样的式子说明可积性没有问题,但这就是一个瑕积分了;要证明就需要考虑这个地方也是所谓一致收敛的。无穷那边一直都有问题,都需要说明一致收敛。
> 连续是逐点,所以可以假设有 $\varepsilon>0$,使得 $-2+\varepsilon<\alpha<2-\varepsilon$,则:
> 在 $\infty$ 附近 $\left|\frac{\arctan x}{x^{\alpha}(2+x^4)}\right|\le C\frac{1}{x^2}$;
> 在 $0$ 附近 $\left|\frac{\arctan x}{x^{\alpha}(2+x^4)}\right|\le C\frac{\arctan x}{x}x^{1-\alpha}\le C\frac{1}{x^{1-\varepsilon}}$。
> 用比较判别说明一致收敛。$\square$

**2. 反常积分和黎曼积分交换。**

> [!note] Theorem 3.25
> 设 $f:[a,\infty)\times[\alpha,\beta]\to\mathbb R$ 连续,$\varphi(u):=\int_a^{\infty}f(x,u)dx$ 关于 $u\in[\alpha,\beta]$ 一致收敛。则
> $$\int_{\alpha}^{\beta}\varphi(u)du=\int_a^{\infty}\left(\int_{\alpha}^{\beta}f(x,u)du\right)dx .$$

**Preuve :** 由之前的定理,$\varphi(u)$ 是连续函数,故此左边的积分存在没有问题。右边内层积分作为 $x$ 的连续函数,也是之前的定理保证的。但右边那个反常积分收敛,确是需要证明的。
$$(\text{rhs})=\lim_{M\to\infty}\int_a^M\!\!\int_{\alpha}^{\beta}f(x,u)du\,dx=\lim_{M\to\infty}\int_{\alpha}^{\beta}\left(\int_a^Mf(x,u)dx\right)du=\int_{\alpha}^{\beta}\left(\lim_{M\to\infty}\int_a^Mf(x,u)dx\right)du .$$
最后一步之所以可以,是因为广义积分一致收敛,本身就是括号里部分一致收敛的意思。$\square$

> [!example] 例子 3.26
> 设 $a>0,b>0,c\in\mathbb R$,计算积分 $\int_0^{\infty}\frac{e^{-ax}-e^{-bx}}{x}\cos cx\,dx$。
> **Preuve :** 利用观察 $\frac{e^{-ax}-e^{-bx}}{x}=\int_a^be^{-ux}du$。
> $$\text{原式}=\int_0^{\infty}\!\!\int_a^b e^{-ux}\cos cx\,du\,dx=\int_a^b\left(\int_0^{\infty}e^{-ux}\cos cx\,dx\right)du=\int_a^b\frac{u}{u^2+c^2}du=\frac12\log\frac{b^2+c^2}{a^2+c^2}.$$
> 蓝色部分积分,应该利用分部积分技巧 $\int_0^{\infty}e^{-ux}\cos cx\,dx=\frac1c\int_0^{\infty}e^{-ux}d(\sin cx)=\frac uc\int_0^{\infty}e^{-ux}\sin cx\,dx=-\frac{u}{c^2}\int_0^{\infty}e^{-ux}d(\cos cx)=\frac{u}{c^2}-\frac{u^2}{c^2}\int_0^{\infty}e^{-ux}\cos cx\,dx$。当然,需要说明积分为什么可以交换次序。$\square$

**3. 反常积分和求导。**

> [!note] Theorem 3.27
> 设 $f,\frac{\partial f}{\partial u}$ 在 $[a,\infty)\times[\alpha,\beta]$ 上连续;$\varphi(u)=\int_a^{\infty}f(x,u)dx$ 收敛,再加上 $\int_a^{\infty}\frac{\partial f}{\partial u}dx$ 关于 $u\in[\alpha,\beta]$ 一致收敛,则 $\varphi(u)$ 可导,而且
> $$\varphi'(u)=\int_a^{\infty}\frac{\partial f}{\partial u}(x,u)dx .$$

**Preuve :**
$$\varphi(u)-\varphi(\alpha)=\int_a^{\infty}\big(f(x,u)-f(x,\alpha)\big)dx=\int_a^{\infty}\left(\int_{\alpha}^u\frac{\partial f}{\partial u}(x,s)ds\right)dx .$$
(因为假设给够了,所以 NL 公式可以用。)然后利用前一个定理(注意一致收敛部分)
$$\varphi(u)-\varphi(\alpha)=\int_{\alpha}^u\left(\int_a^{\infty}\frac{\partial f}{\partial u}(x,s)dx\right)ds .$$
还是利用之前的定理,括号里面是 $s$ 的连续函数,使得变上限求导可行。由一元微分定理,$\varphi$ 可导,而且 $\varphi'(u)$ 如定理要求。$\square$

**(*) 反常积分和反常积分交换。** 这个问题简略讲:把条件给得足够强,那么就转化为有限区间上的两个积分号去交换次序。抄一个定理看看,很难看的定理。

> [!note] Theorem 3.28
> 如果 $f$ 满足
> - 在 $[a,\infty)\times[\alpha,\infty)$ 上连续;
> - 积分 $\int_a^{\infty}f(x,u)dx$ 和 $\int_{\alpha}^{\infty}f(x,u)du$,分别在区间 $[\alpha,\beta]$ 和 $[a,b]$ 上一致收敛;
> - 积分 $\int_a^{\infty}\!\!\int_{\alpha}^{\infty}|f(x,u)|\,du\,dx$ 存在有限。
> 则以下两个积分都存在,而且相等
> $$\int_a^{\infty}\left(\int_{\alpha}^{\infty}f(x,u)du\right)dx=\int_{\alpha}^{\infty}\left(\int_a^{\infty}f(x,u)dx\right)du .$$

**Preuve :** 第一步用条件推出左边的存在性(右边还没有证明)。利用 Theorem 3.25,对任何 $\beta>\alpha$,
$$\int_{\alpha}^{\beta}\left(\int_a^{\infty}f(x,u)dx\right)du=\int_a^{\infty}\left(\int_{\alpha}^{\beta}f(x,u)du\right)dx .$$
上式左边在 $\beta\to\infty$ 时的极限正好是待证等式的左边,因此只需证明 $\lim_{\beta\to\infty}\int_a^{\infty}\left(\int_{\beta}^{\infty}f(x,u)du\right)dx=0$。
对任何 $\varepsilon>0$,由条件存在 $b_0>a$ 使得 $\int_{b_0}^{\infty}\left(\int_{\alpha}^{\infty}|f(x,u)|du\right)dx<\varepsilon/2$。把 $\int_a^{\infty}\left(\int_{\beta}^{\infty}f(x,u)du\right)dx$ 分解为 $\int_a^{b_0}\left(\int_{\beta}^{\infty}f(x,u)du\right)dx+\int_{b_0}^{\infty}\left(\int_{\beta}^{\infty}f(x,u)du\right)dx:=I_1+I_2$。由不等式立即 $|I_2|\le\varepsilon/2$。对 $I_1$,对固定的 $b_0$,利用 $\int_a^{\infty}f(x,u)du$ 在 $[a,b_0]$ 上一致收敛,知道存在 $\beta_0$,使得对任何 $\beta>\beta_0$ 有 $\left|\int_{\beta}^{\infty}f(x,u)du\right|\le\frac{\varepsilon}{2(b_0-a)}$ 对任何 $x\in[a,b_0]$;进而 $|I_1|\le\varepsilon/2$。$\square$

> [!warning] 点
> 这个证明几乎是抄的一本旧版的常庚哲和史济怀。本来比 AI 提供的好,但是打字完了发现一个漏洞(以上证明不完备)。你看出来了吗?

### 3.3 控制收敛定理

这是法国书上的几个定理。

#### 3.3.1 极限形式

又分为几个表现形式:函数列极限,级数,关于参数连续,关于参数极限。

> [!note] Theorem 3.29(函数列形式)
> 设 $(f_n)_{n\in\mathbb N}$ 是区间 $I\subset\mathbb R$ 上定义的分段连续函数。假设
> - 序列 $(f_n)$ 在 $I$ 上简单收敛于另一个分段连续函数 $f$;
> - 存在一个可积 $\varphi:I\to\mathbb R$,使得 $\forall n\in\mathbb N,\ \forall t\in I,\ |f_n(t)|\le\varphi(t)$。
> 则 $f_n$ 和 $f$ 都是可积的,而且 $\lim_{n\to\infty}\int_If_n=\int_If$。

> [!info] 注记
> 回忆之前关于广义含参积分和极限号交换的三种反例,对比观察控制条件是如何去除这些反例的。
> - 该结果最早由 C. Arzelà 于 1885 年在纯 Riemann 框架下证明,但早期证明普遍冗长且存在漏洞。其根本困难在于 Riemann 可积函数类对逐点极限不封闭,故极限函数的可积性不可省略。现代初等证明(如 Lewin, 1986)不依赖 Lebesgue 测度论:通过反证法,由 Darboux 下和构造出一列总长度有正下界的简单集合,再利用区间紧性(Lewin 引理)保证存在一点属于无穷多个集合,从而与该点处逐点趋于零矛盾。
> - $f$ 是 $C_M(I,\mathbb R)$ 的假设是技术性的,因为简单收敛不保证这个,只好假设上。就算是 Riemann 积分也是一样的,逐点收敛的极限不一定是 Riemann 可积的,这本身就是一种缺陷。
> - 这个定理把普通积分、反常积分一起处理了。

> [!note] Theorem 3.30(级数形式)
> 设 $\sum u_n$ 是 $I$ 上的函数级数。假设
> - $u_n$ 在 $I$ 上可积(可积!);
> - 级数 $\sum u_n$ 简单收敛,和函数 $\sum_{n=1}^{\infty}u_n$ 是 $I$ 上分段连续的;
> - $\sum_n\left(\int_I|u_n|\right)$ 收敛(作为数项级数)。
> 则 $\sum_{n=1}^{\infty}u_n$ 在 $I$ 上可积,而且
> $$\int_I\left(\sum_{n=1}^{\infty}u_n\right)=\sum_{n=1}^{\infty}\left(\int_Iu_n\right).$$

不好办,这个定理甚至不能简单理解成前面那个定理的推论。如果我们想象一个控制函数,那么合理的选择是 $\sum_{n=1}^{\infty}|u_n|$。问题是我们的条件(和技术)不好证明这个函数是可积的,甚至不好证明它是分段连续(Riemann 可积)的。所以从这点看,这个定理不是前面定理的简单推论。而且它实际上比控制收敛定理好用,因为验证 $\sum\left(\int_I|u_n|\right)$ 收敛相对容易。(如果我们把求和理解为某种抽象的积分的话,这个定理更像是将来会被称为 Tonelli 定理的东西。)

下面这个函数列连续的版本倒是第一个控制收敛定理的推论,只要考虑点列刻画就可以了。

> [!note] Theorem 3.31
> 设 $A$ 是 NVSE 的非空子集,$I\subset\mathbb R$,$f:A\times I\to K$。假设
> - 对任何 $t\in I$,函数 $x\mapsto f(x,t)$ 在 $A$ 上连续;
> - 对任何 $x\in A$,函数 $t\mapsto f(x,t)$ 分段连续在 $I$ 上;
> - 存在一个 $\varphi:I\to\mathbb R$ 在 $I$ 上可积,而且 $\forall(x,t)\in A\times I,\ |f(x,t)|\le\varphi(t)$。
> 则函数 $g:x\mapsto\int_If(x,t)dt$ 是 $A$ 上的连续函数。

> [!example] 例子 3.32(一致收敛 vs 控制收敛)
> 回顾前面我们曾用一致收敛证明:若 $f$ 在 $[a,b]\times[c,d]$ 上连续,则 $g(y)=\int_a^bf(x,y)dx$ 在 $[c,d]$ 上连续。
> 证法一(一致收敛):取 $y_n\to y_0$,由 $f$ 在紧集上一致连续知 $f(\cdot,y_n)\Rightarrow f(\cdot,y_0)$,故积分与极限可交换,即 $\lim_ng(y_n)=g(y_0)$。
> 证法二(控制收敛):仍取 $y_n\to y_0$。令 $f_n(x)=f(x,y_n)$、$f(x)=f(x,y_0)$。因 $f$ 在紧集上有界,存在 $M$ 使得 $|f(x,y)|\le M$ 恒成立。取 $\varphi(x)\equiv M$(在 $[a,b]$ 上可积),则 $|f_n|\le\varphi$ 且 $f_n\to f$ 逐点成立。由控制收敛定理,$\lim_n\int f_n=\int f$,即 $g(y_n)\to g(y_0)$。

> [!info] 点
> 在紧区间连续情形下两种方法皆简便。区别在于:一致收敛法依赖 $f$ 的二元一致连续性,而控制收敛法仅需逐点收敛加一个可积的控制函数。对于含参反常积分,前者的条件往往难以验证,后者的优势更大。

> [!example] 例子 3.33(具体函数例子)
> 证明 $g(x)=\int_0^{\infty}\frac{e^{ixt}}{1+t^3}dt$($x\in\mathbb R$)连续。
> 证法一(一致收敛):由于 $\left|\frac{e^{ixt}}{1+t^3}\right|\le\frac{1}{1+t^3}$ 且 $\int_0^{\infty}\frac{dt}{1+t^3}$ 收敛,由 Weierstrass 判别法,该积分关于 $x\in\mathbb R$ 绝对一致收敛。被积函数对 $x$ 连续,故 $g$ 在 $\mathbb R$ 上连续。
> 证法二(控制收敛):固定 $x_0\in\mathbb R$,取任意 $x_n\to x_0$。令 $f_n(t)=\frac{e^{ix_nt}}{1+t^3}$、$f(t)=\frac{e^{ix_0t}}{1+t^3}$。则 $f_n(t)\to f(t)$ 逐点成立。取 $\varphi(t)=\frac{1}{1+t^3}$,在 $[0,\infty)$ 上可积,且 $|f_n(t)|\le\varphi(t)$ 对一切 $n,t$ 成立。由控制收敛定理,$\lim_ng(x_n)=\lim_n\int_0^{\infty}f_n=\int_0^{\infty}f=g(x_0)$。由点列刻画,$g\in C(\mathbb R)$。

> [!warning] 警告
> 并不是说控制收敛定理可以完全覆盖之前的讨论。很明显,对于收敛但不是绝对收敛的含参变量情况,无法使用控制收敛定理。比如 $f(\alpha)=\int_1^{\infty}\frac1x\sin(\alpha x)dx$ 关于 $\alpha\in(1,2)$ 连续,这个题目控制收敛定理没法用。

#### 3.3.2 参数求导

这里与其说有一个定理,不如说有一个方法:导数实际上是差商的极限,如果取极限的时候能够找到控制函数不就好了。我们不叙述定理本身,直接看例题。

> [!example] 例子 3.34
> 证明函数 $g:x\mapsto\int_0^{\infty}\frac{e^{ixt}}{1+t^3}dt$ 在 $\mathbb R$ 上是 $C^1$ 的。
> **Preuve :**
> 1. 有定义(连续性见前面例题)。
> 2. 为证明可导,固定 $x\in\mathbb R$,考虑 $\frac1h\int_0^{\infty}\frac{e^{i(x+h)t}-e^{ixt}}{1+t^3}dt$,希望这个函数在 $h\to0$ 时有极限。为此准备控制函数
> $$\left|\frac1h\frac{e^{i(x+h)t}-e^{ixt}}{1+t^3}\right|\le\frac{t}{1+t^3}$$
> (微分中值不等式)。因为右边是可积的,所以由控制收敛定理,可导成立(极限取进去),而且 $g'(x)=\int_0^{\infty}\frac{ite^{ixt}}{1+t^3}dt$。
> 3. 再考虑 $g'$ 为什么连续,再次使用控制收敛定理。$\square$

下面的例题处理著名的 Dirichlet 积分。

> [!example] 例子 3.35
> 计算 $\int_0^{\infty}\frac{\sin x}{x}dx$。(该积分称为 Dirichlet 积分或 sinc 积分,其值为 $\pi/2$,是条件收敛而非绝对收敛的经典范例。)
> **Preuve :** 这个积分容易判断收敛。为了计算,考虑 $I(\alpha)=\int_0^{\infty}e^{-\alpha x}\frac{\sin x}{x}dx$。
> 1. 这个积分关于 $\alpha\in[0,\infty)$ 是一致收敛的。在 $(0,\infty)$ 上的收敛性可以用控制收敛,在 $0$ 处需要使用 Abel 判别法,利用一致收敛对应定理解决。
> 2. 想证明在 $\alpha\in(0,\infty)$ 上可导。研究极限
> $$\int_0^{\infty}\frac{1}{h}\left(e^{-(\alpha+h)x}-e^{-\alpha x}\right)\frac{\sin x}{x}dx=\int_0^{\infty}-e^{-\xi x}\sin x\,dx,$$
> 其中 $\xi$ 在 $\alpha$ 附近,而且随着 $h\to0$ 趋于 $\alpha$。只要 $\alpha>0$,$h$ 充分小,以上被积函数可以被 $x\mapsto e^{-\alpha x/2}$ 控制,进而控制收敛可以用。进而 $I$ 可导,而且 $I'(\alpha)=-\int_0^{\infty}e^{-\alpha x}\sin x\,dx$。
> 又用分部积分的技巧,可以算出 $I'(\alpha)=-\frac{1}{1+\alpha^2}$。于是 $I(\alpha)=-\arctan\alpha+C$。
> 3. 发现 $\lim_{\alpha\to\infty}I(\alpha)=0$(利用 $|\sin x|\le x$,直接计算)。
> 4. 于是 $I(\alpha)=\frac{\pi}{2}-\arctan\alpha$,$I(0)=\pi/2$。$\square$

### 3.4 Gamma 函数和 Beta 函数

考虑如下形式的含参广义积分
$$\Gamma(s)=\int_0^{\infty}t^{s-1}e^{-t}dt,\qquad B(p,q)=\int_0^1t^{p-1}(1-t)^{q-1}dt .$$

这两个函数有很多性质,常和史专门有一节。我们截取其中著名的几个,就当做习题。

> [!example] 例子 3.36
> $\Gamma$ 在 $(0,\infty)$ 上定义,而且连续,而且有各阶导数。
> **Preuve :** 定义:$t^{s-1}e^{-t}$ 在 $0$ 附近 $\sim t^{s-1}$,$s>0$ 时 $(0,1]$ 上可积;在无穷远 $t^{s-1}e^{-t}=o(e^{-t/2})$ 可积。连续:取 $s_0>0$ 及紧邻域 $[\alpha,\beta]\ni s_0$。对任意 $s_n\to s_0$,在 $(0,1]$ 上 $|t^{s_n-1}e^{-t}|\le t^{\alpha-1}$ 可积,在 $[1,\infty)$ 上 $|t^{s_n-1}e^{-t}|\le t^{\beta-1}e^{-t}$ 可积;由控制收敛定理,极限与积分可交换,得 $\Gamma(s_n)\to\Gamma(s_0)$。可导:$\partial_s^k(t^{s-1}e^{-t})=t^{s-1}e^{-t}(\log t)^k$。在 $[\alpha,\beta]$ 上,$t\le1$ 时 $|t^{s-1}e^{-t}(\log t)^k|\le t^{\alpha-1}|\log t|^k$,因 $t^{\alpha-1}|\log t|^k=o(t^{\alpha-1-\varepsilon})$ 在 $0$ 附近可积;$t\ge1$ 时 $\le t^{\beta-1}e^{-t}(\log t)^k=o(e^{-t/2})$ 可积。由控制收敛定理,逐次求导合法,故 $\Gamma$ 在 $(0,\infty)$ 上光滑。$\square$

> [!example] 例子 3.37
> $\Gamma$ 函数有以下三条性质:
> 1. 对任意 $s>0$,$\Gamma(s)>0$,而且 $\Gamma(1)=1$;
> 2. $\Gamma(s+1)=s\Gamma(s)$,对任何 $s>0$;
> 3. $\log\Gamma(s)$ 是 $(0,\infty)$ 上的凸函数。
> **Preuve :** 1. 被积函数恒正,故 $\Gamma(s)>0$;$\Gamma(1)=\int_0^{\infty}e^{-t}dt=1$。
> 2. 分部积分:$\Gamma(s+1)=\int_0^{\infty}t^se^{-t}dt=\left[-t^se^{-t}\right]_0^{\infty}+s\int_0^{\infty}t^{s-1}e^{-t}dt=s\Gamma(s)$。边界项 $t^se^{-t}$ 在 $t\to0^+$ 时因 $s>0$ 趋于 $0$,在 $t\to\infty$ 时趋于 $0$。
> 3. 取 $s_1,s_2>0$,$\lambda\in(0,1)$,由 Hölder 不等式(指数 $1/\lambda$ 和 $1/(1-\lambda)$)
> $$\Gamma(\lambda s_1+(1-\lambda)s_2)=\int_0^{\infty}(t^{s_1-1}e^{-t})^{\lambda}(t^{s_2-1}e^{-t})^{1-\lambda}dt\le\Gamma(s_1)^{\lambda}\Gamma(s_2)^{1-\lambda}.$$
> 取对数即得 $\log\Gamma$ 的凸性。$\square$
> (满足以上三个条件的只有 $\Gamma$ 函数了。)

> [!example] 例子 3.38
> 对任何 $p>0,q>0$,有
> $$B(p,q)=\frac{\Gamma(p)\Gamma(q)}{\Gamma(p+q)} .$$
> **Preuve :**
> $$\Gamma(x)\Gamma(y)=\left(\int_0^{\infty}u^{x-1}e^{-u}du\right)\left(\int_0^{\infty}v^{y-1}e^{-v}dv\right)=\int_0^{\infty}\!\!\int_0^{\infty}u^{x-1}v^{y-1}e^{-(u+v)}du\,dv .$$
> 令 $u=st$,$v=s(1-t)$,其中 $s>0$、$0<t<1$。雅可比行列式 $\frac{\partial(u,v)}{\partial(s,t)}=\begin{vmatrix}t & s\\ 1-t & -s\end{vmatrix}=-s$,即 $du\,dv=s\,ds\,dt$。代入变量替换:
> $$\Gamma(x)\Gamma(y)=\int_0^{\infty}\!\!\int_0^1(st)^{x-1}[s(1-t)]^{y-1}e^{-s}\cdot s\,ds\,dt=\left(\int_0^{\infty}s^{x+y-1}e^{-s}ds\right)\left(\int_0^1t^{x-1}(1-t)^{y-1}dt\right)=\Gamma(x+y)B(x,y).$$
> 因此 $B(x,y)=\frac{\Gamma(x)\Gamma(y)}{\Gamma(x+y)}$。$\square$

> [!example] 例子 3.39
> Beta 函数满足
> 1. $B(p,q)$ 在 $(0,\infty)^2$ 上有定义而且光滑;
> 2. $B(p,q)=B(q,p)$;
> 3. $B(p+1,q+1)=\frac{pq}{(p+q+1)(p+q)}B(p,q)$,对任何 $p,q>0$。
> **Preuve :** 1. $B(p,q)$ 在 $0$ 附近 $\sim t^{p-1}$($p>0$ 可积),在 $1$ 附近 $\sim(1-t)^{q-1}$($q>0$ 可积),故有定义。光滑性:固定 $(p_0,q_0)$ 及紧邻域 $[\alpha,\beta]\times[\gamma,\delta]\ni(p_0,q_0)$,$k$ 阶偏导产生 $(\log t)^k$ 或 $(\log(1-t))^k$ 因子,在 $0$ 附近用 $t^{\alpha-1-\varepsilon}$ 控制,在 $1$ 附近用 $(1-t)^{\gamma-1-\varepsilon}$ 控制,由控制收敛定理逐次求导合法。
> 2. 换元 $u=1-t$,$du=-dt$,即得 $B(p,q)=B(q,p)$。
> 3. 利用上述公式及 $\Gamma(s+1)=s\Gamma(s)$:$B(p+1,q+1)=\frac{\Gamma(p+1)\Gamma(q+1)}{\Gamma(p+q+2)}=\frac{p\Gamma(p)\cdot q\Gamma(q)}{(p+q+1)(p+q)\Gamma(p+q)}=\frac{pq}{(p+q+1)(p+q)}B(p,q)$。$\square$

## 4. ODE

常微分方程,大概的意思是:一个函数 $f:I\subset\mathbb R\to\mathbb R$,满足一个等式
$$F(x,f,f',\cdots,f^{(n)})=0 .$$
这里 $n$ 是 $n$ 阶常微分方程,$f$ 是未知函数。暂时不考虑方程组。写这个一般一点的情况仅仅是意思一下,我们能够研究的方程是很小的一类。

主要研究两个问题:解集合的结构(有没有,有多少);如何找到解。

### 4.1 一阶线性方程

这是最简单的一类。设 $a,b$ 是两个 $I$ 上定义的 $K$ 值连续函数。要找所有(可导的)函数 $f$,使得 $\forall x\in I,\ f'(x)+a(x)f(x)=b(x)$。

> [!info] Remark 4.1
> 这里"连续"是某种技术上的安排。不连续也不是说不可以解方程。但我们满足于这么多,使得下面的证明难度适中、结论合理。

我们说我们求解了一阶线性常微分方程
$$y'+a(x)y=b(x). \tag{4.1}$$
- 一阶是因为这里只涉及到一阶导数;
- 线性是因为将要证明,解空间是一个仿射空间;
- 方程,没有"组",是因为未知数是一个;
- 常微,而不是偏微,因为定义域是实数的区间;
- $y'$ 前面的系数必须整理成 $1$,如果是非零函数就除去。如果有零点,那么这个方程不是我们现在学的;
- $b$ 称为方程的"非齐次项"(second membre),如果 $b$ 恒为 $0$,就称方程是"齐次"一阶线性微分方程。

#### 4.1.1 解空间的结构

> [!note] Definition 4.2
> - 方程 (4.1) 在 $I$ 上的解,定义为所有满足方程的函数 $f:I\to K$。(法国人的定义:解是所有的函数。)
> - $b$(法国人叫)second membre(非齐次项)。
> - (4.1) 对应的齐次方程指的是
> $$y'+a(x)y=0. \tag{4.2}$$

> [!note] Proposition 4.3
> 齐次方程 (4.2) 的解的集合 $S_0$ 包含 $0$ 函数,而且关于线性组合运算封闭。也就是说 $\forall(f_1,f_2)\in S_0^2,\ \forall(\lambda_1,\lambda_2)\in K^2,\ \lambda_1f_1+\lambda_2f_2\in S_0$。
> 简单,略。(这就说明是线性空间了,至于维数现在不清楚。)

> [!note] Proposition 4.4
> 设 $f_1$ 是方程 (4.1) 的一个特解,而且 $S_0$ 如上。则方程 (4.1) 的解集是 $S=\{f_1+g: g\in S_0\}$。

这就说明了"仿射空间"的意思。定理中 $f_1$ 不是"特殊的":如果你选择了不同的解,最终定义的 $S$ 是一样的。

**Preuve :** 先验算,集合 $S$ 中的函数都是解;再假设还有一个别的解,则它必须在 $S$ 中。$\square$

所以,想要求解 (4.1),需要:先求 $S_0$,再找哪怕一个 (4.1) 的解。

#### 4.1.2 求解

> [!note] Proposition 4.5
> 方程 (4.2) 的解空间 $S_0$ 是一维的。设 $\varphi$ 是 $a$ 在 $I$ 上的原函数,则
> $$f_0(x)=e^{-\varphi(x)}$$
> 是 $S_0$ 中的一个非零解。

至此 $S_0$ 的结构和计算都解决了。

**Preuve :** $f_0$ 是解,可以直接验证,略。下面设 $f$ 是任何另外一个解,计算
$$\left(e^{\varphi(x)}f(x)\right)'=e^{\varphi(x)}f'(x)+e^{\varphi(x)}a(x)f(x)=0 .$$
进而 $x\mapsto e^{\varphi(x)}f(x)$ 是常值,进而有 $\lambda\in K$ 使得 $f\equiv\lambda f_0$。$\square$

下一步需要找到 (4.1) 的一个特解。下面介绍著名的常数变异法(variation de la constante)。

> [!info] Remark 4.6
> 不用问为什么这么做是合理的。你觉得合理最好,不觉得也没关系。反正它确实帮助你找到了一个解,而解的理论告诉你:这就足够了。

设一个解是 $f(x)=\lambda(x)e^{-\varphi(x)}$,其中 $\varphi$ 如上。代入方程
$$f'+a(x)f=\lambda'(x)e^{-\varphi(x)}=b(x).$$
于是 $\lambda'(x)=e^{\varphi(x)}b(x)$。于是可以取(任意固定一个 $x_0\in I$,不同的选择会给你不同的特解,但之前的理论说了随便哪一个都可以)
$$\lambda(x)=\int_{x_0}^xe^{\varphi(t)}b(t)dt .$$
于是特解
$$f(x)=e^{-\varphi(x)}\int_{x_0}^xe^{\varphi(t)}b(t)dt .$$

> [!info] 凑微分法(另一观点)
> $y'+a(x)y$,如果乘上 $e^{\varphi(x)}$ 就会变成一个函数的全微分,即 $(e^{\varphi}y)'=e^{\varphi}(y'+a(x)y)=e^{\varphi}b$。于是直接求原函数,就可以算出 $e^{\varphi}y$,进而 $y$。

> [!example] 例子 4.7
> 求解方程:
> - $y'+\cos x\,y=0$ 在 $\mathbb R$ 上。
> - $y'+\frac1xy=\frac{x-1}{x}$,在 $(1,\infty)$ 上;
> - $y'+y=\cos x$ 在 $\mathbb R$ 上;
> 法国人觉得这个例子很有教育意义:当第二项是非齐次项为多项式与指数函数之积时,它允许找到一个特解;这翻译了一个更普遍的想法:如果非齐次项有某种形式,那么寻找一个同形式的特解是自然的(但不一定成功)。

> [!example] 例子 4.8
> 设 $(a,\lambda)\in K^2$,而 $P$ 是一个 $n$ 次多项式。考虑方程 $y'+ay=P(x)e^{\lambda x}$。
> 1. 证明存在一个形如 $x\mapsto Q(x)e^{\lambda x}$ 的解,其中 $Q$ 是一个 $n$ 次多项式,如果 $\lambda+a\ne0$;是一个 $n+1$ 次多项式,如果不然。
> 2. 证明如果 $\lambda=-a$,则存在一个形如 $x\mapsto R(x)e^{-ax}$ 的解,其中 $R$ 是一个没有常数项的 $n+1$ 次多项式。

#### 4.1.3 物理模型

有很多物理现象是用一阶线性方程来描述的,大多呈现如下样子:
$$y'+\frac1\tau y=\frac{A(t)}{\tau}.$$
他举了几个例子:温度变化,RC 电路,下落雨滴,化学反应。

> [!info] 点
> 精华是数学的解和物理现象之间的相互印证。

解这个方程:两边同时乘以 $e^{t/\tau}$ 得 $\left(e^{t/\tau}y\right)'=e^{t/\tau}\frac{A(t)}{\tau}$。假设 $0$ 在感兴趣的区间,
$$y(t)=e^{-t/\tau}\int_0^te^{s/\tau}\frac{A(s)}{\tau}ds .$$
在具体的物理问题中,有时候 $A(t)=e^{\lambda t}$,有时候 $A(t)=a\cos(\omega t)$。

#### 4.1.4 初值问题

物理问题中常常用时间表示 $t$,总是关心这种问题:已知系统在某个时候的状态,能不能预测未来的状态。这种问题常微中叫初值问题。针对一阶线性方程,对应的初值问题是
$$\begin{cases}y'+a(x)y=b(x)\\ y(t_0)=y_0.\end{cases}$$

> [!note] Theorem 4.9
> 设方程的系数在区间 $I$ 上连续,对任何 $t_0\in I$、$y_0\in K$,以上初值问题存在唯一解。

**Preuve :** 存在性:如果不考虑初值问题,我们能够计算解,所以设 $f$ 是一个解。设 $\varphi$ 是 $a$ 的一个原函数(如前)。只要选择合适的常数 $c$ 使得 $f(x_0)+ce^{-\varphi(x_0)}=y_0$。这个 $c$ 永远存在,因为 $e^{-\varphi}$ 永远非零。验证 $y=f+ce^{-\varphi}$ 为所求。
唯一性:如果有两个初值问题的解,作差,得到一个齐次方程的解,而且这个解在 $t_0$ 处取 $0$。对比所有齐次方程的解的公式,发现只要一个点为 $0$,就必须完全是 $0$。$\square$

### 4.2 二阶线性常系数方程

这一节考虑定义在 $I\subset\mathbb R$ 上的二阶线性常系数方程
$$y''+ay'+by=c(x). \tag{4.3}$$
这里 $a,b\in K$ 是常数。

#### 4.2.1 解的结构

还是把 $c$ 叫做非齐次项,对应的齐次方程
$$y''+ay'+by=0. \tag{4.4}$$

> [!note] Proposition 4.10
> (4.4) 的解集是一个 $K$ 线性空间,记为 $S_0$。(略。)

> [!note] Proposition 4.11
> 设 $f$ 是 (4.3) 的一个特解,则其全体解集合 $S=\{f+f_0: f_0\in S_0\}$。(略。)

> [!note] Remark 4.12
> 目前并不知道 $S_0$ 的维数,也不知道有没有特解。

#### 4.2.2 齐次方程的解(仅对常系数)

不讲道理,先猜:解形如 $f(x)=e^{\lambda x}$,对某 $\lambda\in K$。带入方程,发现 $f''(x)+af'(x)+b=(\lambda^2+a\lambda+b)e^{\lambda x}$。这说明 $f$ 是解,当且仅当
$$\lambda^2+a\lambda+b=0 .$$

> [!note] Proposition 4.13
> 如果 $a,b\in\mathbb C$,令 $\lambda_1,\lambda_2$ 是方程 $\lambda^2+a\lambda+b=0$ 的两个根。则 (4.4) 的所有解为:
> - 当 $\lambda_1\ne\lambda_2$ 时,$x\mapsto c_1e^{\lambda_1x}+c_2e^{\lambda_2x}$,$(c_1,c_2)\in\mathbb C^2$;
> - 当 $\lambda_1=\lambda_2=\lambda$ 时,$x\mapsto(c_1+c_2x)e^{\lambda x}$,$(c_1,c_2)\in\mathbb C^2$。

> [!note] Proposition 4.14
> 如果 $a,b\in\mathbb R$,则需要讨论:
> - 如果 $\lambda^2+a\lambda+b=0$ 有两个不同实根 $\lambda_1,\lambda_2$,则所有解为 $x\mapsto c_1e^{\lambda_1x}+c_2e^{\lambda_2x}$,$(c_1,c_2)\in\mathbb R^2$;
> - 如果 $\lambda_1=\lambda_2=\lambda$,则所有解为 $x\mapsto(c_1+c_2x)e^{\lambda x}$,$(c_1,c_2)\in\mathbb R^2$;
> - 如果有共轭复根 $\alpha\pm\beta i$,则所有解为 $x\mapsto c_1e^{\alpha x}\cos\beta x+c_2e^{\alpha x}\sin\beta x$,$(c_1,c_2)\in\mathbb R^2$。

> [!info] Remark 4.15
> 注意这两个定理有某种相容性,因为实数毕竟也是复数。

考虑证明的话,不难验证所有给出的这些解都是真的解。难度在于说明,为什么只有这些解。

**Preuve :** 模仿将来唯一性定理的证明。只对复的情况,实的情况类似。复的定理分了两种情况,我们断言:对任何 $t_0$,任何 $A,B\in K$,一定存在 $c_1,c_2$,使得
(1) 如果 $\lambda_1\ne\lambda_2$:$\ c_1e^{\lambda_1t_0}+c_2e^{\lambda_2t_0}=A$,$\ c_1\lambda_1e^{\lambda_1t_0}+c_2\lambda_2e^{\lambda_2t_0}=B$(简单的线性代数);
(2) 如果 $\lambda_1=\lambda_2=\lambda$:$\ c_1e^{\lambda t_0}+c_2t_0e^{\lambda t_0}=A$,$\ c_1\lambda e^{\lambda t_0}+c_2(1+\lambda t_0)e^{\lambda t_0}=B$。
于是如果 $f$ 是任何一个其它的解,通过考虑 $A=f(t_0)$、$B=f'(t_0)$ 解出的 $c_1,c_2$,验证 $f-c_1e^{\lambda_1t}-c_2e^{\lambda_2t}$ 或 $f-c_1e^{\lambda t}-c_2te^{\lambda t}$,发现它们分别是解,而且保证 $f(t_0)=f'(t_0)=0$。
于是只需要证明这样的 (4.4) 的解 $f$,如果满足 $f(t_0)=f'(t_0)=0$,则它恒为 $0$。为此计算,对任何 $t\in I$
$$\left(|f|^2+|f'|^2\right)'\le2|f'||f|+2|f''||f'|\le C(|f|^2+|f'|^2),$$
微积分知识,可以结束证明。$\square$

#### 4.2.3 非齐次方程

我们可以证明对于一般的 $c(x)$,(4.3) 有解,进而解空间的结构已经清楚了。

> [!note] Theorem 4.16
> 设 $a,b\in K$,$c:I\to K$ 连续。则方程 (4.3) 有解。(复系数有解,实系数的也自然有解。)

**Preuve :** 方法一:设 $\lambda^2+a\lambda+b=0$ 的两个根是 $\lambda_1,\lambda_2$(复数,实数也对),则原方程可以写成
$$\left(\frac{d}{dt}+\lambda_1\right)\left(\frac{d}{dt}+\lambda_2\right)f(x)=c(t).$$
这就变成一个双一次的方程了。总是可以先求解 $\frac{d}{dt}g+\lambda_2g=c(t)$,再求 $\frac{d}{dt}f+\lambda_1f=g(t)$。所以存在不是问题。
方法二:设 $\lambda$ 是特征方程的一个根,总是可以验算 $f(x)=e^{\lambda x}z(x)$ 是 (4.3) 的解,当且仅当
$$z''(x)+(2\lambda+a)z'(x)=c(x)e^{-\lambda x}.$$
这个方程我们会解:把 $z'$ 看成未知函数,它是一阶线性方程,一定存在解,进而积分知道有 $z(x)$ 满足原方程。$\square$

有了这个定理,则解的结构完全清楚了:齐次方程解空间二维线性空间,非齐次方程解空间二维仿射空间。如果愿意跟随证明,这里也算有一个解的公式,比较复杂不用记忆。针对几个特殊的形式知道一点具体的结论。

> [!example] 例子 4.17
> $y''+ay'+by=e^{\lambda x}$。只要能猜出一个特解,剩下的就都知道了。分为以下三种情况(特征方程指 $\lambda^2+a\lambda+b=0$):
> - 如果 $\lambda$ 不是特征方程的根,那么猜 $f(t)=ce^{\lambda t}$,带入方程求出 $c$;
> - 如果 $\lambda$ 是特征方程的单根,猜 $f(t)=cte^{\lambda t}$,带入计算 $c$;
> - 如果 $\lambda$ 是特征方程的重根,猜 $f(t)=ct^2e^{\lambda t}$。

> [!info] Remark 4.18
> 其实右边如果形如 $P(x)e^{\lambda x}$ 都是可以做的。

> [!example] 例子 4.19
> 求解下列方程:
> $$y''-4y'+3y=e^{-x},\qquad y''-4y'+3y=e^{x},\qquad y''-2y'+y=e^{x}.$$

#### 4.2.4 初值问题和物理

> [!note] Theorem 4.20
> 对所有的 $(t_0,y_0,y_1)\in I\times K^2$,存在一个唯一的 $f$ 满足 (4.3) 和 $f(t_0)=y_0$、$f'(t_0)=y_1$。

**Preuve :** 首先解是有的,然后通过加减齐次方程的解来调整初值正好。这里展现了解空间维数和初值条件个数之间的一个对应关系。$\square$

我们解一个著名的方程
$$y''+2\lambda y'+\omega_0^2y=f(x),$$
其中 $\lambda>0$ 表示阻力,$\omega_0\in\mathbb R_+$ 弹簧固有频率。判别式 $\Delta=4\lambda^2-4\omega_0^2$。先考虑齐次方程的解。
- 当 $\lambda^2>\omega_0^2$ 时,没有周期现象
$$x\mapsto e^{-\lambda x}\left(Ae^{-\sqrt{\lambda^2-\omega_0^2}\,x}+Be^{\sqrt{\lambda^2-\omega_0^2}\,x}\right);$$
- 当 $\lambda^2=\omega_0^2$ 时,$x\mapsto e^{-\lambda x}(A+Bx)$;
- 当 $\lambda^2<\omega_0^2$ 时
$$x\mapsto e^{-\lambda x}\left(A\cos\left(\sqrt{\omega_0^2-\lambda^2}\,x\right)+B\sin\left(\sqrt{\omega_0^2-\lambda^2}\,x\right)\right).$$

再考虑非齐次方程。假设一个特殊的非齐次项(如果有周期性外力)$y''+2\lambda y'+\omega_0^2y=A\cos\omega t$。考虑方程 $y''+2\lambda y'+\omega_0^2y=Ae^{i\omega t}$,原方程是这个方程的实部。考虑特解 $y(t)=Ce^{i\omega t}$(这里使用了外力的频率)。解得 $\left(-\omega^2+2\lambda\omega i+\omega_0^2\right)C=A$,进而
$$C=\frac{A}{\omega_0^2-\omega^2+2\lambda\omega i}.$$
回到原方程,取实部:
$$y(t)=\frac{A}{(\omega_0^2-\omega^2)^2+4\lambda^2\omega^2}\left[(\omega_0^2-\omega^2)\cos\omega t+2\lambda\omega\sin\omega t\right].$$
考虑特殊情况 $\lambda=0$(没有阻力):$y(t)=\frac{A}{\omega_0^2-\omega^2}\cos\omega t$。考虑到对应齐次方程的解,可得非齐次方程通解
$$y(t)=\frac{A}{\omega_0^2-\omega^2}\cos\omega t+c_1\cos\omega_0t+c_2\sin\omega_0t .$$
考虑对应初值问题 $y(0)=y'(0)=0$ 的解
$$y(t)=\frac{A}{\omega_0^2-\omega^2}\left(\cos\omega t-\cos\omega_0t\right).$$
形式上考虑当 $\omega\to\omega_0$ 时,$y(t)\to\frac{At}{2\omega_0}\sin\omega_0t$。这算是"共振"现象的数学解释。(在这个所谓的解释中,还暗含有下面的意思:方程可以依赖于一些参数,考虑参数变化时(初值问题)的解也随之变化,这种变化是连续的。这个命题将来会在 ODE 课上系统学习。)

> [!note] Remark 4.21
> 如果一开始就假设 $\omega=\omega_0$ 和 $\lambda=0$ 呢?那么 $C$ 就算不出来了。可见我们猜的解形式不对。那怎么猜就对了呢?

### 4.3 解方程方法补充

这一节不在法国书上,甚至模糊掉方程和解的定义,只谈如何计算,给出一点特别的方法。

#### 4.3.1 分离变量法

> [!example] 例子 4.22
> $\dfrac{dy}{dx}=-\dfrac{x}{y}$。
> **Preuve :** 推出 $y\,dy=-x\,dx$,进而 $x^2+y^2=C$。$\square$
> 可以试图"理解"这些事情,但无法严密地 justify。

> [!example] 例子 4.23
> $(1+x^2)y\,dy+\sqrt{1-y^2}\,dx=0$。
> **Preuve :** 当 $1-y^2\ne0$ 时,$-\dfrac{y\,dy}{\sqrt{1-y^2}}=\dfrac{dx}{1+x^2}$,进而 $\sqrt{1-y^2}=\arctan x+C$,这里的 $C$ 是某个待定的常数。因为这些方程不是线性的,进而这个 $C$ 和之前的线性组合系数还是不一样的,但也确实和方程的阶数有关。
> 注意到 $y=\pm1$ 也是原方程的解,应该补上。$\square$

#### 4.3.2 齐次方程

名字也许有点 misleading,主要是说 $P(x,y)dx+Q(x,y)dy=0$ 中 $\frac PQ$ 是 $0$ 次齐次函数,也就是说它可以写成 $\varphi(y/x)$ 的形式。于是等价于求解
$$\frac{dy}{dx}=\varphi\left(\frac yx\right).$$
变量代换 $u=\frac yx$,$\frac{dy}{dx}=u+x\frac{du}{dx}$,进而 $u+x\frac{du}{dx}=\varphi(u)$。这现在变成了可分离变量的形式,进而算是"会解"。

> [!example] 例子 4.24
> $\dfrac{dy}{dx}=\dfrac{x+y}{x-y}$。思考:如果 $\dfrac{dy}{dx}=\dfrac{x+y+2}{x-y-3}$ 怎么办?

#### 4.3.3 伯努利方程

形如($n\ne0,1$)
$$\frac{dy}{dx}+P(x)y=Q(x)y^n .$$
只要令 $u=y^{1-n}$ 就可以转化为关于 $u$ 的线性方程
$$\frac{du}{dx}+(1-n)P(x)u=(1-n)Q(x).$$

### 4.4 一阶线性方程组理论

设 $E$ 是有限维向量空间,$L(E)$ 表示 $E$ 到自身的线性映射。设 $a:I\to L(E)$ 和 $b:I\to E$ 是两个连续映射。

> [!note] Definition 4.25
> 若有可导的映射 $\varphi:I\to E$ 使得 $\forall t\in I,\ \varphi'(t)=a(t)\varphi(t)+b(t)$,则称 $\varphi$ 是一阶线性微分方程(组)
> $$x'=a(t)x+b(t)$$
> 的解。

上述中 $b$ 称为非齐次项,若 $b=0$ 则称其为齐次方程(解释"齐次"两个字的由来)。注:如果已知 $a$ 和 $b$ 是 $C^k$ 的,则解 $\varphi$ 是 $C^{k+1}$ 的(归纳法可证;但根据定义,$a,b$ 至少连续,$\varphi$ 至少要可导)。

> [!example] 例子 4.26
> 电磁场中的电荷。假设三维空间中有磁场 $\vec B(\vec x,t)$ 和电场 $\vec E(\vec x,t)$。设有带电粒子,电荷 $q$,质量 $m$,则它的速度满足方程
> $$\vec v'=\frac qm\vec v\times\vec B+\frac qm\vec E .$$

> [!example] 例子 4.27
> 草原生态系统。$a(t)$ 和 $b(t)$ 分别表示狼和兔子的数量,则
> $$\begin{cases}a'(t)=\lambda b(t)\\ b'(t)=-\mu a(t)+\eta b(t),\end{cases}$$
> 其中 $\lambda,\mu,\eta$ 是正常数。

方程组的分量形式:在 $E$ 中取固定的(不依赖于 $t$)基,则 $E\equiv K^n$,$L(E)\equiv M_n(K)$。这时方程变成
$$X'(t)=A(t)\cdot X(t)+B(t),$$
其中 $X,A,B$ 分别是 $x,a,b$ 的分量表示。

#### 4.4.1 解空间的结构

毕竟是线性方程,解空间的结构如前。设 $E,I,a,b$ 如前,定义映射 $L:C^1(I,E)\to C^0(I,E)$,$L(x):=x'-ax$。易见:
- $L$ 是线性映射;
- 齐次方程所有解的集合 $S_0=\ker L$ 是 $C^1(I,E)$ 的子空间;
- 设 $\varphi$ 是非齐次方程的一个特解,则非齐次方程的解集 $S=\varphi+S_0$。

目前,还不知道 $\dim S_0$ 是多少,也不知道特解 $\varphi$ 是不是有。

#### 4.4.2 初值问题(Cauchy 问题)

取定 $(t_0,x_0)\in I\times E$,则一个初值条件是 $\varphi(t_0)=x_0$。Cauchy 问题:求方程满足指定初值条件的解。

> [!info] 点
> 现在跟之前不一样:之前先研究解空间的结构和解法,找到了足够多的解,然后所谓初值问题只不过是意识到我们知道的解足够多,每个初值分配一个。现在"求解"变得更难了,我们反过来从初值问题入手,研究解的结构。简单说,就是通过初值问题来理解"解空间"的结构。解空间毕竟抽象,而初值的取值很具体。

> [!note] Proposition 4.28
> 设 $(x_0,t_0)\in I\times E$,$\varphi\in C(I,E)$ 是 Cauchy 问题 $x'=a(t)x+b(t)$、$x(t_0)=x_0$ 的解,当且仅当
> $$\forall t\in I,\qquad \varphi(t)=x_0+\int_{t_0}^t a(s)\varphi(s)ds+\int_{t_0}^tb(s)ds .$$
> (注意 $a,b$ 的连续性是假设的一部分。)证明过于简单,直接验证。

> [!note] Theorem 4.29(线性方程组初值问题的存在唯一性)
> 对任何 $(t_0,x_0)\in I\times E$,Cauchy 问题 $x'=ax+b$、$x(t_0)=x_0$ 存在唯一解。

**Preuve :** 利用前面的定理,只要求解积分方程。
(1) 定义迭代序列,令 $u_0(t)\equiv x_0$,令
$$u_{n+1}(t)=x_0+\int_{t_0}^t\left(a(s)u_n(s)+b(s)\right)ds . \tag{4.5}$$
(2) 希望证明 $(u_n)_{n\in\mathbb N}$ 在 $I$ 上内闭一致收敛。固定 $I$ 中有界闭区间 $K$(包含 $t_0$)。置 $\omega_n=u_n-u_{n-1}$($n=1,2,\cdots$),$\omega_0=u_0$。想说明 $\sum_{n\ge0}\omega_n$ 在 $K$ 上一致收敛。计算 $\omega_{n+1}=\int_{t_0}^ta(s)\omega_n(s)ds$。取 $M\in\mathbb R$ 满足 $\|x_0\|,\ \sup_K\|a(s)\|,\ \sup_K\|b(s)\|,\ 1\le M$。断言
$$|\omega_n|(t)\le2\frac{M^{n+1}}{n!}|t-t_0|^n,\qquad n=1,2,3,\cdots . \tag{4.6}$$
$n=1$ 时:$|\omega_1(t)|=|(u_1-u_0)(t)|=\left|\int_{t_0}^t(a(s)x_0+b(s))ds\right|\le2M^2|t-t_0|$,成立;若 (4.6) 对 $n$ 成立,则 $|\omega_{n+1}(t)|\le\int_{t_0}^tM|\omega_n(s)|ds\le2\frac{M^{n+2}}{(n+1)!}|t-t_0|^{n+1}$。总之断言成立,进而保证 $\sum_{n\ge0}\omega_n$ 在 $I$ 上有定义,而且内闭一致收敛。
(3) 记 $u_n$ 的极限为 $u$。利用 $u_n$(内闭)一致收敛于 $u$,直接对 (4.5) 取极限,可知 $u$ 是积分方程的解(在 $I$ 上)。
(4) 唯一性:设 $u_1,u_2$ 是两个解,置 $\omega=u_1-u_2$,则 $\omega(t)=\int_{t_0}^ta(s)\omega(s)ds$。重复上面的证明得 $\|\omega(t)\|\le M^{m+1}\frac{1}{n!}|t-t_0|^n$,令 $n\to\infty$ 得 $\|\omega(t)\|\equiv0$。$\square$

> [!info] Remark 4.30
> 唯一性当然还有另一种熟知的证明,不妨设有内积(这在有限维不是问题):$\frac{d}{dt}(\omega,\omega)=2(\frac{d\omega}{dt},\omega)=2(a(t)\omega(t),\omega(t))\le2M\|\omega(t)\|^2$。剩下的是数学分析。

作为存在唯一性定理的推论,我们了解了解集的结构。根据上述定理,知道 $S_0$ 和 $S$ 是非空的集合。

> [!note] Theorem 4.31
> 任何固定的 $t_0\in I$、$x_0\in E$,令 $\Phi(x_0)$ 表示方程初值问题 $x'=ax+b$、$x(t_0)=x_0$ 的解,则 $\Phi:E\to S$ 是线性空间同构。(考虑到 $S$ 是仿射空间,这个线性同构需要广义一点理解;到 $S_0$ 是真同构。)证明略。

> [!example] 例子 4.32
> 考虑 $\mathbb R^3$ 中的均匀磁场 $\vec B$,没有电场。带电粒子的速度满足 $\vec v'=\frac qm\vec B\times\vec v$。不妨设 $\frac qm=1$。
> 根据理论,解空间的维数是 $3$,具体解法还没有学。但不难通过设坐标系使得 $\vec B=(a,0,0)$,进而可以写出三个无关解
> $$\vec v(t)=\begin{pmatrix}x_1\\ x_2\\ x_3\end{pmatrix}=\begin{pmatrix}1\\ 0\\ 0\end{pmatrix},\qquad \begin{pmatrix}0\\ \cos at\\ \sin at\end{pmatrix},\qquad \begin{pmatrix}0\\ -\sin at\\ \cos at\end{pmatrix}.$$

> [!info] 点
> 这是解的结构的一个大用处。既然知道需要几个什么样的解、而且只有这么多解,那么怎么求就不那么重要了。猜也行,蒙也行,只要最后验证满足解空间的理论要求就好了。

设某方程齐次问题的解空间为 $S_0$,设 $\varphi_1,\cdots,\varphi_m$ 是基。这里由定义:不存在不全为零的 $a_1,\cdots,a_m$ 使得 $\sum_ia_i\varphi_i$ 是零函数。以上是定义,但我们有一个看上去更强的性质其实是等价的(仅针对齐次方程解空间的基):
$$\forall t\in I,\qquad \varphi_1(t),\cdots,\varphi_m(t)\ \text{构成}\ E\ \text{的基}.$$
这个东西是初值问题解的唯一性的推论。

关于变系数的一阶方程组,我们没有简单的解的公式(哪怕是对齐次方程)。但已经证明了解的存在性和解集的结构。下面一段意思是,"如果"你知道齐次方程的解,那么可以利用常数变异法得到一个特解,进而完全解决问题。

#### 4.4.3 常数变异法

设 $\varphi_1,\cdots,\varphi_n$ 是齐次方程 $X'(t)=A(t)\cdot X(t)$ 的一组解基。研究非齐次方程 $X'(t)=A(t)\cdot X(t)+B(t)$。设 $\varphi(t)=\sum_i\lambda_i(t)\varphi_i(t)$ 是非齐次方程的解(由上面讲到的关于每个 $t$ 都无关的性质,这个假设是合理的)。代入方程计算
$$\sum_i\lambda_i'(t)\varphi_i(t)=B(t).$$
因为 $(\varphi_i(t))_{i=1,\cdots,m}$ 是 $E$ 的基,则 $\lambda_i'(t)$ 是可以解出来的,公式就不写了。然后在相差一个常数的意义下 $\lambda_i$ 也知道了。这里涉及到 $n$ 个未定常数是情理之中的,可以不用管,因为解的理论只要找到一个特解就够了。

> [!example] 例子 4.33
> 在前面的例子基础上加上一个跟时间无关的均匀电场,比如考虑
> $$\begin{pmatrix}x_1'\\ x_2'\\ x_3'\end{pmatrix}=\begin{pmatrix}0\\ -ax_3\\ ax_2\end{pmatrix}+\begin{pmatrix}0\\ 1\\ 0\end{pmatrix}.$$
> **Preuve :** 利用常数变异,设解为
> $$\begin{pmatrix}x_1\\ x_2\\ x_3\end{pmatrix}=\lambda_1(t)\begin{pmatrix}1\\ 0\\ 0\end{pmatrix}+\lambda_2(t)\begin{pmatrix}0\\ \cos at\\ \sin at\end{pmatrix}+\lambda_3(t)\begin{pmatrix}0\\ -\sin at\\ \cos at\end{pmatrix}.$$
> 带入方程得 $\lambda_1'(t)\begin{pmatrix}1\\0\\0\end{pmatrix}+\lambda_2'(t)\begin{pmatrix}0\\ \cos at\\ \sin at\end{pmatrix}+\lambda_3'(t)\begin{pmatrix}0\\ -\sin at\\ \cos at\end{pmatrix}=\begin{pmatrix}0\\ 1\\ 0\end{pmatrix}$。解得 $\begin{pmatrix}\lambda_1'\\ \lambda_2'\\ \lambda_3'\end{pmatrix}=\begin{pmatrix}0\\ \cos at\\ -\sin at\end{pmatrix}$,进而 $\begin{pmatrix}\lambda_1\\ \lambda_2\\ \lambda_3\end{pmatrix}=\begin{pmatrix}c_1\\ \frac1a\sin at+c_2\\ \frac1a\cos at+c_3\end{pmatrix}$。这里有三个未定的常数 $c_1,c_2,c_3$,合理。$\square$

#### 4.4.4 一阶常系数方程组

这一节的关键是:具体的算法(至少理论上有公式,可以算)。前一节只有理论,没有如何求解的表达式。而且我们观察到,之所以过去"方程"的公式"方程组"不能用,主要是矩阵的交换性出了问题,以至于 $e^{A(t)}$ 的导数没有公式。现在如果 $A(t)$ 和 $t$ 没有关系,那么这个问题其实不存在。所以其实可以直接表示。

方程 $X'(t)=AX(t)+B(t)$ 的初值条件 $X(t_0)=X_0$ 的解
$$X(t)=\exp((t-t_0)A)X_0+\int_{t_0}^t\exp((t-s)A)B(s)ds .$$

根据解的唯一性,只要验算就好了,这个过程中利用到了公式
$$\exp((t+s)A)=\exp(tA)\cdot\exp(sA),\qquad \exp(-tA)=(\exp(tA))^{-1},$$
和 $(\exp(tA))'=\exp(tA)A=A\exp(tA)$。

下面谈理论上的算法。一组观点:
- 如果 $A$ 中的系数是 $\mathbb C$ 的,那么就在 $\mathbb C$ 中求解,解空间的维数也是作为 $\mathbb C$ 向量空间的维数;
- 本质上,找一个相似变换 $B=P^{-1}AP$,若 $X(t)$ 是 $X'(t)=AX(t)$ 的解,则 $Y(t)=P^{-1}X(t)$ 是 $Y'=BY$ 的解;反之也对。所以只要对相似标准型算就好了;
- 如果 $A$ 有对角的分块,则方程组可以分成两个不相关的子问题(decouple);
- 当然如果 $A$ 完全对角化,那么就变成了 $n$ 个不相关的方程,就解决了;
- 如何处理一个标准的 Jordan 块?

> [!example] 例子 4.34
> 解 $X'=AX$,若
> $$A=\begin{pmatrix}1 & -1 & 2\\ 2 & -1 & 3\\ 0 & 0 & 1\end{pmatrix}.$$
> **Preuve :** 先算特征多项式 $(\lambda-1)(\lambda^2+1)$。再算特征向量,对应 $1,i,-i$ 分别是
> $$\begin{pmatrix}1\\ 4\\ 2\end{pmatrix},\qquad \begin{pmatrix}1\\ 1-i\\ 0\end{pmatrix},\qquad \begin{pmatrix}1\\ i+1\\ 0\end{pmatrix}.$$
> 所以一组基(复向量空间)
> $$e^t\begin{pmatrix}1\\ 4\\ 2\end{pmatrix},\qquad e^{it}\begin{pmatrix}1\\ 1-i\\ 0\end{pmatrix},\qquad e^{-it}\begin{pmatrix}1\\ i+1\\ 0\end{pmatrix}.$$
> 取实部和虚部,可知实空间的通解
> $$C_1\begin{pmatrix}e^t\\ 4e^t\\ 2e^t\end{pmatrix}+C_2\begin{pmatrix}\cos t\\ \cos t+\sin t\\ 0\end{pmatrix}+C_3\begin{pmatrix}\sin t\\ \sin t-\cos t\\ 0\end{pmatrix}. \qquad\square$$

> [!note] Remark 4.35
> 上面的解题稍微有点跳。有可逆矩阵 $P$ 使得 $P^{-1}AP$ 对角,$P$ 看成三列,每一列恰好是特征向量。对角化之后,方程组解耦(decouple)了,很容易解。结束之后还需要再乘以 $P$,这个操作这里一次性写了。或者,你可以不去理解这个过程,反正找到了三个无关的解。

> [!example] 例子 4.36
> 设有一个 Jordan 块
> $$\begin{pmatrix}\lambda & 1 & \\ & \lambda & 1\\ & & \lambda\end{pmatrix}.$$
> **Preuve :** 对应的有复向量 $V_1,V_2,V_3$ 满足方程
> $$AV_1=\lambda V_1,\qquad AV_2=\lambda V_2+V_1,\qquad AV_3=\lambda V_3+V_2 .$$
> 我们找三个线性无关的(齐次方程组的解),设 $u_1(t)V_1+u_2(t)V_2+u_3(t)V_3$ 是解,代入方程计算
> $$u_3'=\lambda u_3,\qquad u_2'=\lambda u_2+u_3,\qquad u_1'=\lambda u_1+u_2 .$$
> 所以,按次序解出 $u_3,u_2,u_1$ 可得
> $$u_1(t)=c_3e^{\lambda t}+c_2te^{\lambda t}+\frac{c_1}{2}t^2e^{\lambda t},\qquad u_2(t)=c_2e^{\lambda t}+c_1te^{\lambda t},\qquad u_3(t)=c_1e^{\lambda t}.$$
> 这里看见三个常数是合理的,因为解空间是三维的。我们把基提出来,得三个无关解
> $$e^{\lambda t}V_1,\qquad te^{\lambda t}V_1+e^{\lambda t}V_2,\qquad \frac12t^2e^{\lambda t}V_1+te^{\lambda t}V_2+e^{\lambda t}V_3 . \tag{4.7}
> \qquad\square$$

> [!note] Remark 4.37
> 如果 $\lambda$ 是实数这就可以了,表示对应 $\lambda$ 的这个不变子空间的三个解。如果 $\lambda$ 是复数,则由共轭不变性,可以观察到,对应 $\bar V_1,\bar V_2,\bar V_3$ 还有一个 Jordan 块
> $$\begin{pmatrix}\bar\lambda & 1 & \\ & \bar\lambda & 1\\ & & \bar\lambda\end{pmatrix},$$
> 对应的可以算出它对应的三个无关解 $e^{\bar\lambda t}\bar V_1$,$te^{\bar\lambda t}\bar V_1+e^{\bar\lambda t}\bar V_2$,$\frac12t^2e^{\bar\lambda t}\bar V_1+te^{\bar\lambda t}\bar V_2+e^{\bar\lambda t}\bar V_3$。这分别是 (4.7) 中三个解的共轭,所以它们的实部虚部共计 $6$ 个向量值函数都是解。

#### 4.4.5 $n$ 阶线性方程(组)

其实方程组也是一样的,要点就是 $n$ 阶的方程可以换成低阶的方程组,用维数换阶数。比如方程
$$x^{(n)}+\sum_{k=0}^{n-1}a_k(t)x^{(k)}=b(t). \tag{E}$$
设系数 $a_k,b\in C(I,K)$。

> [!note] Definition 4.38
> $n$ 次可导的函数 $\varphi:I\to K$ 称为上述方程的一个解,如果
> $$\forall t\in I,\qquad \varphi^{(n)}(t)+\sum_{k=0}^{n-1}a_k(t)\varphi^{(k)}(t)=b(t).$$

考虑方程组,记为 $(E_M)$
$$\begin{cases}x_0'(t)=x_1(t)\\ x_1'(t)=x_2(t)\\ \cdots\\ x_{n-1}'(t)=-\sum_{k=0}^{n-1}a_k(t)x_k(t)+b(t).\end{cases}$$

> [!note] Theorem 4.39
> $\varphi$ 是方程 $(E)$ 的解,当且仅当 $\Phi(t)=(\varphi(t),\cdots,\varphi^{(n-1)}(t))$ 是 $(E_M)$ 的解。
> - 由此我们可以得到 $(E)$ 的解空间的结构(也分为齐次和非齐次讨论);
> - 由此我们可以定义 $n$ 阶方程的初值问题,并看出它和对应方程组的初值问题是等价的;
> - 由此,也有对应 Cauchy 问题解的存在唯一性;
> - 同样,如果对应的 $a_k$ 是常数,那么这个会转化为常系数的一阶方程组,进而理论上有可解性(意思是,可以算);
> - 同样可以常数变异。

但是对于齐次常系数的 $n$ 阶方程,我们有别的看法。考虑对应的特征多项式
$$P(\lambda)=\lambda^n+\cdots+a_1\lambda+a_0 .$$
不妨在复数中考虑分解
$$P(\lambda)=(\lambda-\lambda_1)^{m_1}\cdots(\lambda-\lambda_l)^{m_l}.$$
如果 $m_i=1$,那么(直接验证)有一个解 $e^{\lambda_it}$;如果 $m_i=l$,那么我们验证有 $l$ 个无关解
$$e^{\lambda_it},\ te^{\lambda_it},\ \cdots,\ t^{l-1}e^{\lambda_it}.$$
不需要讲道理,上面已经提供了 $n$ 阶齐次常系数方程的解空间的基,进而可以认为会解了。非齐次方程理论上有常数变异法;实际上如果右边是 $e^{\lambda t}$ 形式的话,我们可以猜。

### 4.5 二阶线性方程理论

首先回忆常系数的情况我们已经"会解"了。对于一般的情况,上一节已经把理论讲好了,知道齐次方程有两个无关解(并不知道怎么算);如果知道的话,那么可以用常数变异法求解非齐次方程。这一节除去更多的理论之外,还教一个"若已知一个解,求另一个解"的办法。

设方程为(定义在 $I$ 上)
$$x''+a(t)x'+a_0(t)x=b(t).$$
依旧假设系数至少是连续的。

#### 4.5.1 Wronskien 行列式

> [!note] Definition 4.40
> 设 $\varphi_1,\varphi_2$ 是齐次方程的两个解,则 $(\varphi_1,\varphi_2)$ 的 Wronskien 定义为
> $$W_{\varphi_1,\varphi_2}:I\longrightarrow K,\qquad t\mapsto\det\begin{pmatrix}\varphi_1(t) & \varphi_2(t)\\ \varphi_1'(t) & \varphi_2'(t)\end{pmatrix}.$$
> $W_{\varphi_1,\varphi_2}$ 是函数,但是它表达了 $\varphi_1,\varphi_2$ 是不是"无关"解。

> [!note] Lemma 4.41
> 在 $I$ 上 $W_{\varphi_1,\varphi_2}$ 要么不取零值,要么恒为零。

**Preuve :** 直接计算,利用方程,对任何 $t\in I$
$$W_{\varphi_1,\varphi_2}'=(\varphi_1\varphi_2'-\varphi_2\varphi_1')'=\varphi_1\varphi_2''-\varphi_2\varphi_1''=a_1(\varphi_1'\varphi_2-\varphi_1\varphi_2')=-a_1W_{\varphi_1,\varphi_2}.$$
剩下的可以理解为是常微学过的定理,也可以用数学分析的著名套路。$\square$

> [!note] Remark 4.42
> 这个结论,可以说巧,也可以说情理之中。它本身是和初值问题解的唯一性紧密联系的。

> [!example] 例子 4.43
> 证明 $\varphi_1:t\mapsto\cos t$,$\varphi_2:t\mapsto t$ 不可能是一个二阶线性齐次 ODE 的两个解。(因为上述引理的结论不成立。)

#### 4.5.2 Wronskien 的用法

上述讨论说明了一个事实:虽然 $W$ 是依靠 $\varphi_1,\varphi_2$ 来定义的,但是它满足一个一阶的微分方程
$$W'=-aW .$$
如此我们可以先解出 $W$,然后再利用方程
$$\left(\frac{\varphi_2}{\varphi_1}\right)'=\frac{W}{\varphi_1^2}.$$
如果知道 $\varphi_1$,则可以求解上述一阶方程知道 $\varphi_2/\varphi_1$,进而 $\varphi_2$。

> [!example] 例子 4.44
> 求解方程 $x''+\frac{1}{t}x'-\frac{1}{t^2}x=0$。分母不能为 $0$,则要么在区间 $(0,\infty)$ 上算,要么在 $(-\infty,0)$ 上算。
> **Preuve :** 猜出一个解 $x(t)=t$。Wronskien 满足方程 $W'+\frac1tW=0$,求解(常数不重要)得 $W(t)=\frac1t$。进而 $\left(\frac{\varphi_2}{\varphi_1}\right)'=\frac{W}{\varphi_1^2}=\frac{1}{t^3}$,解得 $\frac{\varphi_2}{\varphi_1}=-\frac{1}{2t^2}$,即 $\varphi_2=-\frac{1}{2t}$。$\square$

> [!note] Remark 4.45
> 解题过程中好多常数取得很随意,本来也是,只要找到两个无关的解。具体是哪个不重要。

#### 4.5.3 常数变异法

借上面题目齐次方程的结果。

> [!example] 例子 4.46
> 求解
> $$x''+\frac1tx'-\frac{1}{t^2}x=\frac{4\log t}{t}.$$
> **Preuve :** 可以将齐次方程的无关解取成 $\varphi_1(t)=t$、$\varphi_2(t)=\frac1t$。设一个特解为 $\varphi(t)=\lambda_1(t)\varphi_1(t)+\lambda_2(t)\varphi_2(t)$。把二阶方程写成方程组
> $$(\varphi)'=\varphi',\qquad (\varphi')'=-\frac1t\varphi'+\frac{1}{t^2}\varphi+\frac{4\log t}{t}.$$
> 带入方程得 $\lambda_1'\varphi_1+\lambda_2'\varphi_2=0$、$\lambda_1'\varphi_1'+\lambda_2'\varphi_2'=\frac{4\log t}{t}$。带入 $\varphi_1,\varphi_2$,解(线性方程组)得
> $$\lambda_1'=\frac{2\log t}{t}\ \Longrightarrow\ \lambda_1(t)=(\log t)^2,\qquad \lambda_2'=-2t\log t\ \Longrightarrow\ \lambda_2=\frac{t^2}{2}-t^2\log t .$$
> 综合可知 $\varphi=(\log t)^2t+\frac{t}{2}-t\log t$ 是一个特解。$\square$

#### 4.5.4 如何找齐次方程的一个解

首先声明:Il n'existe pas méthode systématique pour déterminer une telle solution(不存在确定这样一个解的系统方法)。本节的目的是展示一些技巧,这些技巧甚至对于一些高阶方程也可能有用。

**(1) 找简单的函数(多项式、指数、三角)。**

> [!example] 例子 4.47
> $(t^2+2t-1)x''+(t^2-3)x'-(2t+2)x=0$。
> 1. 如果有一个多项式 $P$ 是方程的非零解,求证 $P$ 是二次的。
> 2. 找到所有多项式解。
> **Preuve :** 第一问,如果是多项式,带入计算,紧盯最高项的系数。这里最高次项只能是 $t^2x''-2tx$ 贡献的,进而发现只能是 $2$ 次的。第二问待定系数暴力计算,可得所有解是 $t\mapsto\lambda(t^2-1)$,其中 $\lambda\in\mathbb R$。$\square$

**(2) 幂级数法。** 这个方法当然是很自然的,但是如果你想要严格的话,注意收敛。

> [!example] 例子 4.48
> 考虑方程 $tx''+2x'+tx=0$。注意这个方程原则上要躲开 $t=0$ 讨论;现在幂级数法可以在这个点计算,但谈论所有解时要小心。
> **Preuve :** 假设 $x(t)=\sum_{n=0}^{\infty}a_nt^n$。带入计算
> $$tx''=\sum_{n\ge1}(n+1)na_{n+1}t^n,\qquad 2x'=\sum_{n\ge1}2(n+1)a_{n+1}t^n+2a_1,\qquad tx=\sum_{n\ge1}a_{n-1}t^n .$$
> 可以整理得到递推公式 $a_{n+1}(n+1)(n+2)+a_{n-1}=0$。从方程中直接看出 $a_1=0$,但是 $a_0$ 不能确定(很正常,解很多)。进而推出 $a_{2n+1}=0$、$a_{2n}=\frac{(-1)^n}{(2n+1)!}a_0$。综上 $x(t)=a_0\sum_{n=0}^{\infty}\frac{(-1)^n}{(2n+1)!}t^{2n}$。不难看出这个幂级数收敛半径无穷,进而上面所有的形式计算都是有效的。如果再观察一下 $x(t)=a_0\frac{\sin t}{t}$,这就帮我们找到了一个 $\mathbb R$ 上定义的解。我们应该有办法在 $(0,\infty)$ 和 $(-\infty,0)$ 上求出另外一个解。$\square$

**(3) 变量代换法。** 这个所谓"方法"明显上不封顶。

> [!example] 例子 4.49
> 在 $(0,\infty)$ 上求解 $t^2x''+3tx'+4x=t\log t$,$t\in(0,\infty)$。
> **Preuve :** 考虑变量代换 $t=e^u$,把 $x$ 看成是 $u$ 的函数 $f(u)=x(e^u)$。计算 $f'=tx'$、$f''=tx'+t^2x''$,进而方程变为 $f''+2f'+4f=e^uu$。这就会算了。$\square$

> [!note] Remark 4.50
> 这方法适用于一大类称为 Euler 方程的
> $$a_nt^nx^{(n)}+a_{n-1}t^{n-1}x^{(n-1)}+\cdots+a_0x=h(t).$$

#### 4.5.5 退化方程(*)

我们之前关于 $n$ 次方程的理论至少要求首项系数为 $1$(当然,非零就好了)。如果可以等于 $0$ 呢?比如我们也算见过一些 $ty''$ 开头的例子(用级数法的)。如果我们遇到
$$a_n(t)x^{(n)}+\cdots+a_0(t)x=b,$$
其中 $a_n(t)$ 有零点怎么办?先考虑,分成不等于 $0$ 的区间,在每个区间上求解。在整个区间上,继续保持成立的性质:
- 解的叠加原理(线性性);
- 齐次方程的解集合 $S_0$ 还是一个线性空间;
- 非齐次方程的解空间也还是形如 $\varphi+S_0$,其中 $\varphi$ 表示一个特解。

不一定成立的性质:
- $S_0$ 的维数不一定和方程的阶数一致了;
- Cauchy 问题的解的存在唯一性无法保证了,可能没有解,也可能有无穷多个解。

> [!example] 例子 4.51
> $tx'-2x=t^3$。
> **Preuve :** 在 $(0,\infty)$ 和 $(-\infty,0)$ 上,这个方程是学过的类型,会解,而且解的理论成立。在 $(0,\infty)$ 上,解集为 $\mu t^2+t^3$($\mu\in\mathbb R$);在 $(-\infty,0)$ 上,解集为 $\lambda t^2+t^3$($\lambda\in\mathbb R$)。总结一下:如果考虑定义在 $\mathbb R$ 上的解,那么(有点多)对任何 $(\lambda,\mu)\in\mathbb R^2$,
> $$f(t)=\begin{cases}\mu t^2+t^3 & t\ge0\\ \lambda t^2+t^3 & t<0\end{cases}$$
> 都是。进而 $\dim S_0=\dim S=2$。(发现不论如何 $x(0)=0$,这从方程看是显然的。)$\square$
> 以上例子可以说明好多问题:
> - 解集维数可以不是方程阶数;
> - 初值问题解可以不唯一;
> - 初值问题解可以不存在,比如 $x(0)=1$ 就没有解。

上面例子解集的维数变大了,下面的例子解集的维数变小了。

> [!example] 例子 4.52
> $(1-t)x'-x=t$。
> **Preuve :** 我们可以在 $(-\infty,1)$ 和 $(1,\infty)$ 上分别解。得到的解形式上一样,但是各自依赖于一个常数
> $$t\mapsto\frac{\lambda+t^2}{2(1-t)},\qquad t\mapsto\frac{\mu+t^2}{2(1-t)} .$$
> 对于这两个开区间解都结束了,复合预期。如果非要讨论 $\mathbb R$ 上的解,考虑到两边在 $t=1$ 连续,唯一的机会就是 $\lambda=\mu=-1$。如此则在 $\mathbb R$ 上定义的解只有唯一的一个。$\square$

> [!info] 问题
> 法国书上没有继续讲了,我们想问:能不能不解方程就观察出来什么时候解变多了、什么时候解变少了?能够首先把你的想法表述成一个严格的数学命题,然后证明它么?
