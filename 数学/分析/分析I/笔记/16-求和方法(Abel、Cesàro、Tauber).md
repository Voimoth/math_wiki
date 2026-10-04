---
title: 分析I · 求和方法：Abel、Cesàro、Tauber
created: 2026-10-03
updated: 2026-10-03
type: notes
tags: [analysis, analysis-I, zh]
sources: [分析I 课程笔记(本人手写扫描)]
confidence: medium
---

# 求和方法：Abel、Cesàro、Tauber

## Abel 求和与 Cesàro 求和

> [!note] Déf.（Abel 意义下可求和）
> 若对 $x\in[0,1]$，$\sum a_nx^n$ 均收敛且 $\lim_{x\to1^-}\sum a_nx^n$ 存在且有限，则称 $\sum_{n=0}^{\infty} a_n$ 在 Abel 意义下可求和，记为
> $$\sum_{n=0}^{\infty} a_n = \lim_{x\to1^-}\sum_{n=0}^{\infty} a_nx^n \quad (A).$$

例：$\sum_{n=0}^{\infty} (-1)^n$ 在 Abel 意义下和：
$$\sum_{k=0}^{\infty} a_kx^k = \sum_{k=0}^{\infty} (-x)^k = \frac{1}{1+x},$$
故其 Abel 和为 $\frac{1}{2}$。

> [!note] Déf.（Cesàro 意义下可求和）
> 设 $S_n = \sum_{k=1}^{n} a_k$，令 $\sigma_n = \frac{1}{n}\sum_{k=1}^{n} S_k$。若 $\sigma_n \xrightarrow{n\to\infty} L$，称 $\sum_{n=1}^{\infty} a_n$ 在 Cesàro 意义下可求和，记为
> $$\sum_{n=1}^{\infty} a_n = L. \quad (C)$$

> [!note] Th.
> $\sum_{n=1}^{\infty} a_n = S \ (C) \Rightarrow \sum_{n=1}^{\infty} a_n = S \ (A)$。

**Démo :** 不妨设 $S=0$，否则把 $a_n$ 换成 $a_n-S$ 即可。注意到 $n\sigma_n - (n-1)\sigma_{n-1} = S_n \Rightarrow S_n = o(n) \Rightarrow a_n = S_n - S_{n-1} = o(n) \Rightarrow |x|<1$ 时 $\sum_{n=1}^{\infty} a_nx^n$ 绝对收敛。
$$\sum_{n=1}^{\infty} a_nx^n = \sum_{n=1}^{\infty} (S_n - S_{n-1})x^n = (1-x)\sum_{n=1}^{\infty} S_nx^n$$
$$= (1-x)\sum_{n=1}^{\infty} \left( n\sigma_n - (n-1)\sigma_{n-1} \right)x^n$$
$$= (1-x)^2\sum_{n=1}^{\infty} n\sigma_nx^n = (1-x)^2\sum_{n=1}^{N} n\sigma_nx^n + (1-x)^2\sum_{n=N+1}^{\infty} n\sigma_nx^n.$$
取足够大的 $N$ 使 $\forall n\geq N$，$\sigma_n \leq \varepsilon$，则
$$\Rightarrow \left| \sum_{n=N+1}^{\infty} a_nx^n \right| \leq \left| \sum_{n=N}^{\infty} a_nx^n \right|\cdot|x|^{N+1} + \left( (1-x)^2\sum_{n=N+1}^{\infty} |n\sigma_n|x^n \right)\cdot \varepsilon$$
$$\left| \sum_{n=N}^{\infty} n\sigma_nx^n \right| |x|^{N+1} \to 0 ,\quad \varepsilon(1-x)^2\sum_{n=N+1}^{\infty} n|x|^n \leq \varepsilon(1-x)^2\sum_{n=0}^{\infty} n|x|^n = \varepsilon,$$
故 $\sum_{n=1}^{\infty} a_nx^n = 0 \ (A)$。

## Tauber 型定理

基本问题："$\sum_{n=0}^{\infty} a_n = S \ (A)$" + "？" $\Rightarrow \sum_{n=0}^{\infty} a_n = S$。

> [!note] Th (Tauber 第一定理)
> 设 $\sum_{n=0}^{\infty} a_n = S \ (A)$。若 $a_n = o\left(\frac{1}{n}\right)$（$n \to +\infty$），则 $\sum_{n=0}^{\infty} a_n$ 收敛于 $S$。

**Démo :** 设 $x \in \,]0, 1[$，$f(x) := \sum_{n=0}^{\infty} a_n x^n$，
$$\left| \sum_{k=0}^{n} a_k - S \right| \leqslant \left| \sum_{k=0}^{n} a_k - f(x) \right| + \left| f(x) - S \right|$$
$$\leqslant \left| \sum_{k=0}^{n} a_k (1 - x^k) + \sum_{k=n+1}^{\infty} a_k x^k \right| + \left| f(x) - S \right|$$
$$\leqslant (1-x) \sum_{k=1}^{n} |a_k| (1 + x + \cdots + x^{k-1}) + \sum_{k=n+1}^{\infty} |a_k| x^k + \left| f(x) - S \right|$$
$$\leqslant (1-x) \sum_{k=1}^{n} k |a_k| + \sum_{k=n+1}^{\infty} \frac{k}{n+1} |a_k| x^k + \left| f(x) - S \right|$$
$$= (1-x) \sum_{k=1}^{n} k |a_k| + \frac{1}{n+1} \sup_{k \geqslant n+1} |k a_k| \cdot \frac{1}{1-x} + \left| f(x) - S \right|.$$
取 $x = 1 - \frac{1}{n}$ $\Rightarrow \left| \sum_{k=0}^{n} a_k - S \right| \leqslant \frac{1}{n} \sum_{k=1}^{n} k |a_k| + \frac{n}{n+1} \sup_{k \geqslant n+1} |k a_k| + \left| f(x) - S \right| \to 0$，$\Rightarrow \sum_{n=0}^{\infty} a_n = S$。

> [!note] Th (Tauber 第二定理)
> 设 $\sum_{n=0}^{\infty} a_n = S \ (A)$。如果 $\sum_{k=0}^{n} k a_k = o(n)$（$n \to +\infty$），则 $\sum_{n=0}^{\infty} a_n = S$。

**Démo :** 令 $b_n := \frac{1}{n} \sum_{k=0}^{n} k a_k \to 0$，则 $n b_n - (n-1) b_{n-1} = n a_n \Rightarrow a_n = b_n - b_{n-1} + \frac{b_{n-1}}{n} \Rightarrow \sum_{n=0}^{\infty} \frac{b_n}{n}$ 在 (A) 收敛于 $S$。又 $\frac{1}{n} b_{n-1} = o\left(\frac{1}{n}\right) \Rightarrow \sum_{n=0}^{\infty} \frac{b_n}{n}$ 收敛（由第一定理）。

> [!note] Th (Hardy, 1910)
> 设 $\sum_{n=0}^{+\infty} a_n = S \ (C)$。若 $a_n = O\left(\frac{1}{n}\right)$，则 $\sum_{n=0}^{+\infty} a_n = S$。

**Démo (Klostermann, 1940)：**

第 1 步（离散 Taylor 公式）：记 $t_n = \sum_{k=1}^n S_k$。当 $h \in \mathbb{Z}_{\geqslant 1}$ 时有
$$t_{n+h} = t_n + S_n \cdot h + \frac{h(h+1)}{2} \xi \quad [?]$$
其中 $\min_{n < k \leqslant n+h} a_k \leqslant \xi \leqslant \max_{n < k \leqslant n+h} a_k$。

**Démo :** $t_{n+h} = t_n + (S_{n+1} + \cdots + S_{n+h}) = t_n + S_n \cdot h + h a_{n+1} + (h-1)a_{n+2} + \cdots + 1 \cdot a_{n+h} = t_n + S_n h + \frac{h(h+1)}{2} \xi$。

第 2 步：不妨设 $S=0$。
$$\sum_{n=0}^{\infty} a_n = 0 \ (C) \Rightarrow \sigma_n = \frac{1}{n} t_n \to 0$$
$a_n = O\left(\frac{1}{n}\right) \Rightarrow |a_n| \leq \frac{C}{n}\ , \ C \in \mathbb{R} \ . \Rightarrow \exists \lim_{n \to \infty} |S| \leq \frac{C}{n}$
$$S_n = \frac{t_{n+h}}{h} - \frac{t_n}{h} - \frac{h+1}{2} \xi \ , \quad t_{n+h} = (n+h)\sigma_{n+h} \Rightarrow \frac{t_{n+h}}{h} = \frac{n}{h}\sigma_{n+h} + \sigma_{n+h} \ , \ \frac{t_n}{h} = \sigma_n$$
$$|S_n| \leq \left| \frac{t_{n+h}}{h} \right| + \left| \frac{t_n}{h} \right| + \frac{h+1}{2} |\xi|$$
$$\leq \frac{2n+h}{h} \sup_{k \geq n} |\sigma_k| + \frac{C(h+1)}{2n}$$
$$= \sup_{k \geq n} |\sigma_k| + \frac{2n}{h} \sup_{k \geq n} |\sigma_k| + \frac{C(h+1)}{2n}.$$
取 $n$ 充分大，$\sup_{k \geq n} |\sigma_k| \leq \varepsilon$，
$$|S_n| \leq \varepsilon + \frac{2n}{h} \varepsilon + \frac{Ch}{2n}$$
令 $h = \left[ 2n \sqrt{\frac{\varepsilon}{C}} \right] + 1$，
$$\Rightarrow |S_n| \leq \varepsilon + 2\sqrt{\varepsilon C} \Rightarrow \lim_{n \to \infty} S_n = 0 \ . \ \#$$

## 级数求和与极限的可交换性

> [!note] Déf.
> 称 $\sum_{j=1}^{\infty} a_{ij} = a_i$ 关于 $i$ 一致收敛，若 $\forall \varepsilon > 0 \ , \ \exists N(\varepsilon) \ ,\,$ 当 $n \geq N \ , \ i \geq 1$ 时，$\left| \sum_{j=1}^{n} a_{ij} - a_i \right| \leq \varepsilon$。

> [!note] Th.
> 设 $\sum_{j=1}^{\infty} a_{ij} = a_i$ 关于 $i$ 一致收敛，当 $j \geq 1$ 时 $\lim_{i \to \infty} a_{ij} = a_j$，则 $\lim_{i \to \infty} a_i$ 存在，$\sum_{j=1}^{\infty} a_j$ 收敛，且二者相等。
> （即：$\lim_{i \to \infty} \sum_{j=1}^{\infty} a_{ij} = \sum_{j=1}^{\infty} \lim_{i \to \infty} a_{ij}$。）

**Démo :** $\forall \varepsilon > 0 \ , \ \exists N_0 \ , \ n \geq N_0$ 时 $\left| \sum_{j=1}^{n} a_{ij} - a_i \right| \leq \varepsilon$。$\forall m, n \geq N_0 \ (m > n) \ , \ \left| \sum_{j=n}^{m} a_{ij} \right| \leq 2\varepsilon \Rightarrow \left| \sum_{j=n}^{m} a_j \right| \leq 2\varepsilon$，即 $\sum_{j=1}^{\infty} a_j$ 的部分和列 Cauchy $\Rightarrow \sum_{j=1}^{\infty} a_j$ 收敛。
且在 $\left| \sum_{j=n}^{m} a_{ij} \right| \leq 2\varepsilon$ 中令 $m \to +\infty$，得 $\left| \sum_{j=n}^{\infty} a_{ij} \right| \leq 2\varepsilon \quad (n \geq N_0)$。
由于 $\lim_{i \to \infty} a_{ij} = a_j \ , \ j \in [1, N_0-1] \ . \ \exists N \ , \ i \geq N$ 时 $|a_{ij} - a_j| \leq \frac{\varepsilon}{N_0}$，
$$\Rightarrow i > N \text{ 时 } \left| \sum_{j=1}^{\infty} a_{ij} - \sum_{j=1}^{\infty} a_j \right| \leq \sum_{j=1}^{N_0-1} |a_{ij} - a_j| + \left| \sum_{j=N_0}^{\infty} a_{ij} \right| + \left| \sum_{j=N_0}^{\infty} a_j \right| \leq 5\varepsilon$$
即 $\lim_{i \to \infty} a_i = \sum_{j=1}^{\infty} a_j$。

> [!note] Cor.
> 设 $\lim_{i \to \infty} a_{ij} = a_j$，$|a_{ij}| \leq b_j$ 且 $\sum_{j=1}^{\infty} b_j$ 收敛，则 $\sum_{j=1}^{\infty} a_j$ 收敛且 $\sum_{j=1}^{\infty} a_j = \lim_{i \to \infty} \sum_{j=1}^{\infty} a_{ij}$。

**Démo :** $|a_{ij}| \leq b_j \Rightarrow |a_j| \leq b_j \Rightarrow \sum_{j=1}^{\infty} a_j$ 绝对收敛。$\left| \sum_{j=1}^{n} a_{ij} - \sum_{j=1}^{\infty} a_{ij} \right| \leq \sum_{j=n+1}^{\infty} |a_{ij}| \leq \sum_{j=n+1}^{\infty} b_j$，故 $\sum_{j=1}^{\infty} a_{ij}$ 一致收敛。 $\#$

> [!note] Cor.
> 设 $\sum_{j=1}^{\infty} |a_{ij}| \leq a_j$ 且 $\sum_{j=1}^{\infty} a_j$ 收敛，则 $\forall i,j$，$\sum_{j=1}^{\infty} a_{ij}$ 收敛，且 $\sum_{i=1}^{\infty} \sum_{j=1}^{\infty} a_{ij} = \sum_{j=1}^{\infty} \sum_{i=1}^{\infty} a_{ij}$。

**Démo :** $\sum_{j=1}^{\infty} |a_{ij}| \leq a_j \Rightarrow |a_{ij}| \leq a_j \Rightarrow \sum_{j=1}^{\infty} a_{ij}$ 绝对收敛。又 $\left| \sum_{j=1}^{\infty} a_{ij} \right| \leq \sum_{j=1}^{\infty} |a_{ij}| \leq a_j$。
$$\sum_{i=1}^{\infty} \sum_{j=1}^{\infty} a_{ij} = \lim_{k \to \infty} \sum_{i=1}^{k} \sum_{j=1}^{\infty} a_{ij} = \lim_{k \to \infty} \sum_{j=1}^{\infty} \sum_{i=1}^{k} a_{ij} \stackrel{\text{一致收敛}}{=} \sum_{j=1}^{\infty} \lim_{k \to \infty} \sum_{i=1}^{k} a_{ij} = \sum_{j=1}^{\infty} \sum_{i=1}^{\infty} a_{ij}$$
$$\Rightarrow \sum_{i=1}^{\infty} \sum_{j=1}^{\infty} a_{ij} = \lim_{k \to \infty} \sum_{i=1}^{k} \sum_{j=1}^{\infty} a_{ij} = \sum_{j=1}^{\infty} \lim_{k \to \infty} \sum_{i=1}^{k} a_{ij} = \sum_{j=1}^{\infty} \sum_{i=1}^{\infty} a_{ij} \ . \ \#$$

例：Riemann–Zeta 函数的乘积表示。$s > 1$，$\zeta(s) = 1 + \frac{1}{2^s} + \cdots + \frac{1}{n^s} + \cdots$。记 $\{p_n\}$ 为全体素数。
$$\frac{1}{1 - p_n^{-s}} = 1 + \frac{1}{p_n^s} + \frac{1}{p_n^{2s}} + \cdots + \frac{1}{p_n^{ks}} + \cdots$$
$$\frac{1}{1 - 2^{-s}} \cdot \frac{1}{1 - 3^{-s}} \cdots \frac{1}{1 - p_n^{-s}} \cdots = 1 + \frac{1}{2^s} + \frac{1}{3^s} + \cdots + \frac{1}{m^s} + \cdots = \zeta(s)$$
即 $\zeta(s) = \prod_{n=1}^{\infty} \frac{1}{1 - p_n^{-s}}$。

## 相关概念

- [[Abel求和]]
- [[Cesàro求和]]
- [[Tauber定理]]
- [[Hardy定理]]
- [[级数求和与极限交换]]
- [[Abel求和公式]]
