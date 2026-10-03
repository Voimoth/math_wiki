---
title: Fejér 核与 Cesàro 平均
created: 2026-08-31
updated: 2026-09-10
type: concept
tags: [fourier-series, convergence, proof-technique]
sources: [殷浩《分析 3》Fourier 讲义]
confidence: high
---

# Fejér 核与 Cesàro 平均 (Fejér Kernel & Cesàro Means)

> [!question] 本页要回答什么？
> Dirichlet 核的毛病出在哪?把它取算术平均能修好什么?为什么"非负"这一条如此值钱?

> 讲义 §4.1。Cesàro 求和的公理化动机见 [[广义求和与Cesàro求和]]。

## 1. 定义

**Cesàro 平均**(部分和的算术平均):
$$\sigma_N(f)(x) = \frac{S_0(f)(x)+S_1(f)(x)+\cdots+S_{N-1}(f)(x)}{N}.$$

**Fejér 核**(Dirichlet 核的算术平均):
$$F_N(\varphi) = \frac{D_0(\varphi)+\cdots+D_{N-1}(\varphi)}{N}
= \frac{1}{2\pi N}\left(\frac{\sin\frac{N\varphi}{2}}{\sin\frac{\varphi}{2}}\right)^2.$$

> 约定提醒:讲义在此处把系数 $\frac{1}{2\pi}$ **吸进了核的定义**,即 $D_N(\varphi)=\frac{1}{2\pi}\frac{\sin(N+\frac12)\varphi}{\sin\frac\varphi2}$，$S_N=\int_{-\pi}^{\pi}f(\theta-\varphi)D_N(\varphi)\,d\varphi$。别的教材常把 $\frac{1}{2\pi}$ 留在积分号外——用前先看约定。

相应地有卷积表示:
$$\sigma_N(\theta) = \int_{-\pi}^{\pi} f(\theta-\varphi)F_N(\varphi)\,d\varphi.$$

## 2. 关键性质(与 Dirichlet 核对比)

Fejér 核的三条性质(**Fejér 定理证明的全部输入**):

1. $\displaystyle\int_{-\pi}^{\pi}F_N(\theta)\,d\theta = 1$(归一化);
2. $F_N \ge 0$(**非负**);
3. 对任何 $\delta>0$，$\displaystyle\lim_{N\to\infty}\sup_{\delta\le|\varphi|\le\pi}F_N(\varphi) = 0$(质量集中到 0 附近)。

| 性质 | $D_N$(Dirichlet) | $F_N$(Fejér) |
|---|---|---|
| 符号 | 振荡(有正有负) | **恒非负** |
| 主瓣峰高 | $\sim 2N+1$ 线性增长 | 同样线性增长 |
| 主瓣宽度 | $\sim\frac{2\pi}{N+1/2}$ 收缩 | 同样收缩 |
| 旁瓣 | 保持正负振荡(阴影为负值区) | 恒正且**迅速衰减** |
| $L^1$ 范数 | $\|D_N\|_1\sim\log N\to\infty$ | **有界**(归一化后 = 1) |
| 推论 | 点态收敛需额外条件 | Fejér 定理**无条件成立**(只需连续) |

> [!tip] 一句话直觉
> $F_N$ 是"非负 + 归一化 + 集中"的核——这正是**近似恒等元(approximate identity)**的理想形态。$D_N$ 之所以麻烦,全因为它有负瓣且 $\|D_N\|_1$ 发散。

## 3. Fejér 定理(定理 4.3)

**定理**：设 $f$ 是 $2\pi$ 周期、可积或绝对可积。则 $f$ 的 Fourier 级数的 Cesàro 求和在 $f$ 的**连续点**处收敛于 $f$;进一步,若 $f$ **处处连续**,则 $\sigma_N \rightrightarrows f$，即**一致收敛**。

> [!tip] 证明 = "著名的套路"
> 有了上面的三条性质,剩下的证明是讲义反复提到的"著名的套路":
>
> 把误差写成
> $$\sigma_N(\theta)-f(\theta) = \int_{-\pi}^{\pi}\bigl[f(\theta-\varphi)-f(\theta)\bigr]F_N(\varphi)\,d\varphi$$
> (用了归一化 $\int F_N=1$)，然后对给定的 $\varepsilon>0$:
> - 由 $f$ **一致连续**取 $\delta>0$ 使 $|\varphi|<\delta$ 时 $|f(\theta-\varphi)-f(\theta)|<\varepsilon$;这一段用 $\int F_N=1$ 与 $F_N\ge0$ 控制为 $\varepsilon$;
> - 剩下 $\delta\le|\varphi|\le\pi$ 上由 $f$ 有界(设 $|f|\le M$)与 $\sup_{\delta\le|\varphi|}|F_N|\to0$ 控制为 $4M\pi\sup F_N<\varepsilon$(取 $N$ 充分大)。
>
> **写这个套路的意义**在于:过程中会发现所需的 $N$ **与 $\theta$ 的位置无关**——只用到了一致连续。这正是"**一致**逼近"四个字的实际含义;也解释了为什么条件只是"连续"就能得到一致收敛(对比:第 3 章 Dirichlet 核的逐点收敛需要 Dini 型条件)。

## 4. 两个推论

**推论一(定理 4.5,Weierstrass 三角逼近)**：$2\pi$ 周期的连续函数可以被三角多项式一致逼近。

因为 $\sigma_N(f)$ 本身就是三角多项式(有限线性组合)，而 $\sigma_N\rightrightarrows f$。

> 这个定理此前用抽象的 **Stone–Weierstrass 定理**证过一次;Fejér 定理给出**第二个、完全初等的证明**。同一结论的双重证明,恰好说明"抽象逼近定理"与"具体核方法"是同一件事的两面。此推论还是 [[L²理论与Hilbert空间]] 中 Parseval 等式的关键输入。

**推论二(定理 4.6,唯一性定理)**：若 $2\pi$ 周期可积函数 $f$ 的所有 Fourier 系数为零，则 $f$ 在每个连续点处为 0(连续时 $f\equiv 0$)。

> 若预先知道 $f$ 连续,证明只有一行:Fejér 定理给出 $\sigma_N(f)\rightrightarrows f$，而系数全零又给出 $\sigma_N(f)\equiv 0$，故 $f\equiv 0$。一般(不假定连续)情形的三步证明见 [[傅里叶系数唯一性]]。

## 5. 直觉

- Cesàro 平均 = "把振荡的部分和抹平"。$D_k$ 的负瓣在平均后**逐点抵消**(从 $D_k$ 的闭式求和的分子中留下 $1-\cos N\varphi$，即 $\sin^2\frac{N\varphi}{2}$——平方项保证非负)。
- 非负性的价值:核像**概率密度**，加权平均是"真正的平均",三角不等式可以无顾虑地用;而 $D_N$ 的负瓣会让加权平均"反向拉",导致几乎处处收敛的反例(Kolmogorov)与 Gibbs 过冲。
- $F_N$ 同样"集中到 0":$F_N(0)\sim N$，宽度 $\sim 1/N$。

## 6. 学习提示

- **必须掌握一对公式**:$S_N = f * D_N$ 与 $\sigma_N = f * F_N$。第 3 章与第 4 章的全部差别就在这两个核的差别上。
- **顺序与位置**:Fejér 定理在本讲义中**排在第 4 章**，第 3 章先讲了 Dirichlet 核与 Dini 条件。所以路径是"先严格逐点收敛(带条件) → 再用 Cesàro 平均无条件一致收敛(但换了求和方式)"，而不是"Fejér 先行"。两章的结论各管各的,不可互相替代。
- **常见误区**:①把 $\sigma_N\rightrightarrows f$ 误当成 $S_N\rightrightarrows f$——第 4 章的一致收敛是关于 **Cesàro 平均**的,$S_N$ 的逐点收敛仍需第 3 章条件;②忘记"$f$ 处处连续"这个前提(只在连续点收敛时,$\sigma_N$ 也可能仅仅是逐点)。
- **记号注意**:$\sigma_N$ 含 $S_0$ 到 $S_{N-1}$ 还是 $S_0$ 到 $S_N$，系数差一,不影响结论。

## 相关概念

- [[广义求和与Cesàro求和]] — 公理化动机与第 4 章主线
- [[狄利克雷核]] — 被平均的对象,符号振荡
- [[傅里叶级数收敛]] — 第 3 章的严格收敛理论(对比)
- [[傅里叶系数唯一性]] — 推论二
- [[L²理论与Hilbert空间]] — 定理 4.5 是 Parseval 的关键输入
- [[吉布斯现象]] — Cesàro 平均可**消除** Gibbs 现象
