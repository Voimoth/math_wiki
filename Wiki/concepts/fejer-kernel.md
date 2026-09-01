---
title: Fejér 核与 Cesàro 平均
created: 2026-08-31
updated: 2026-08-31
type: concept
tags: [fourier-series, convergence, proof-technique]
sources: []
confidence: high
---

# Fejér 核与 Cesàro 平均 (Fejér Kernel & Cesàro Means)

## 定义

**Cesàro 平均**(部分和的算术平均):

$$\sigma_N(f)(x) = \frac{S_0(f)(x) + S_1(f)(x) + \cdots + S_{N-1}(f)(x)}{N}$$

**Fejér 核**(Dirichlet 核的算术平均):

$$F_N(t) = \frac{1}{N}\sum_{k=0}^{N-1} D_k(t) = \frac{1}{N}\left(\frac{\sin(Nt/2)}{\sin(t/2)}\right)^2$$

相应地有卷积表示:

$$\sigma_N(f)(x) = \frac{1}{2\pi}\int_{-\pi}^{\pi} f(x-t)\,F_N(t)\,dt = (f * F_N)(x)$$

## 关键性质(对比 Dirichlet 核)

| 性质 | $D_N$(Dirichlet) | $F_N$(Fejér) |
|---|---|---|
| 符号 | 振荡(有正有负) | **非负** $F_N \geq 0$ |
| $L^1$ 范数 | $\sim \log N \to \infty$ | **有界**(= 1,归一化) |
| 主瓣 | 高而振荡 | 高而平滑 |
| 推论 | 点态收敛需额外条件 | **Fejér 定理**直接成立 |

## Fejér 定理(核心结果)

若 $f$ 在 $[-\pi,\pi]$ 上连续且 $f(-\pi) = f(\pi)$,则 Cesàro 平均**一致收敛**到 $f$:

$$\sigma_N(f) \xrightarrow{\text{unif.}} f$$

**推论(Weierstrass 三角逼近定理)**:连续周期函数可由三角多项式一致逼近。这是分析学的基础定理之一,也是傅里叶级数理论"最干净"的成果。

## 直觉

- Cesàro 平均 = "把震荡的部分和抹平"。$D_N$ 的负瓣在平均后抵消,剩下的 $F_N$ 非负——处理起来像概率密度,逼近性质完美。
- 好比:一个人(部分和)可能情绪化振荡,但一群人平均(σ_N)就稳定了。
- $F_N$ 仍"集中到 0":$F_N(0) \sim N$,宽度 $\sim 1/N$,非负 + 归一化 + 集中 = 完美的逼近恒等式(approximate identity)。

## 证明要点

- $F_N$ 的非负性:由 $D_k$ 的闭式表达式求和,分子变成 $\sin^2(Nt/2)$——平方项保证非负。
- Fejér 定理:对连续 $f$ 用"一致连续 + 三角不等式"标准三段式:核在 0 附近集中(主瓣贡献 $f(x)$) + 远处核小(尾部可忽略)。
- 由 Fejér 定理证 Weierstrass:$\sigma_N$ 本身就是三角多项式,一致收敛即逼近。

## 学习提示

- 中法班(法国体系)的经典路径:**先证 Fejér 定理**(工具简单),再推 Weierstrass 三角逼近,最后才处理 Dirichlet 核的点态收敛。这个顺序体现"先易后难"的法国教学法。
- 掌握一对公式:$S_N = f*D_N$、$\sigma_N = f*F_N$。
- 常见误区:忘记 Cesàro 平均可能"拯救"发散级数——$S_N$ 发散时 $\sigma_N$ 仍可收敛。这是理解 [[convergence-of-fourier-series]] 各定理关系的钥匙。
- 记号注意:有的教材定义 $\sigma_N$ 含 $S_0$ 到 $S_{N-1}$,有的含 $S_0$ 到 $S_N$,系数差一,不影响结论。

## 相关概念

- [[dirichlet-kernel]] — 被平均的对象,符号振荡
- [[convergence-of-fourier-series]] — Fejér 定理在此框架中的位置
- [[fourier-series]] — 本概念的对象
