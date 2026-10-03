---
title: Hardy定理
created: 2026-10-03
updated: 2026-10-03
type: concept
tags: [analysis, analysis-I, summability, tauberian, zh]
sources: [分析I 课程笔记(本人手写扫描)]
confidence: medium
---

# Hardy 定理

Cesàro 可求和 + 通项 $O(1/n)$ 的 Tauber 型定理，是 [[Tauber定理]] 中把 $o(1/n)$ 放宽到 $O(1/n)$ 的结果。

> [!note] Th (Hardy, 1910)
> 设 $\sum_{n=0}^{+\infty}a_n=S\ (C,1)$。若 $a_n=O\!\left(\frac1n\right)$，则 $\sum_{n=0}^{+\infty}a_n=S$。

## 为什么（Klostermann 1940 的证明思路）

不妨设 $S=0$。记 $t_n=\sum_{k=1}^n S_k$，则 Cesàro 可求和即 $\sigma_n=\frac1n t_n\to0$。证明用两步：

1. **离散 Taylor 公式**：当 $h\in\mathbb{Z}_{\ge1}$ 时
$$t_{n+h}=t_n+S_n\cdot h+\frac{h(h+1)}2\xi,\qquad \min_{n<k\le n+h}a_k\le\xi\le\max_{n<k\le n+h}a_k,$$
即把 $t_{n+h}-t_n=\sum_{j=1}^h S_{n+j}$ 按 $S_{n+j}=S_n+\sum a_i$ 展开、用一个加权平均 $\xi$ 概括含 $a$ 的部分。
2. 解出 $S_n=\frac{t_{n+h}}h-\frac{t_n}h-\frac{h+1}2\xi$，代入 $\frac{t_{n+h}}h=\frac nh\sigma_{n+h}+\sigma_{n+h}$、$\frac{t_n}h=\sigma_n$，并用 $|a_k|\le\frac Cn$ 控制 $\xi$，得
$$|S_n|\le\sup_{k\ge n}|\sigma_k|+\frac{2n}h\sup_{k\ge n}|\sigma_k|+\frac{Ch}{2n}.$$
取 $n$ 大使 $\sup_{k\ge n}|\sigma_k|\le\varepsilon$，再令 $h=\left[2n\sqrt{\varepsilon/C}\right]+1$（平衡两项），得 $|S_n|\le\varepsilon+2\sqrt{\varepsilon C}\to0$。

## 概念要点

- 与 [[Tauber定理]] 对比：Tauber 的条件是 $a_n=o(1/n)$，Hardy 把它放宽到 $O(1/n)$（且用 $(C,1)$ 起手）。**放宽条件的代价是证明更精细**——需要用离散 Taylor 公式与一个可调的窗口 $h$ 来换取收敛。
- 证明中的关键是「用 $\sigma_n\to0$ 的同时，用 $a_n=O(1/n)$ 控制窗口内的项」，二者缺一不可。

> [!warning] 陷阱
> 窗口 $h$ 的选择是证明的核心：$h$ 太大使 $\frac Ch{2n}$ 项变大，太小使 $\frac{2n}h\sup|\sigma_k|$ 项变大；$h\asymp n\sqrt{\varepsilon/C}$ 同时平衡二者。

## 相关概念

- [[Tauber定理]]
- [[Cesàro求和]]
- [[Abel求和]]
