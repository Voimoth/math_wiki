---
title: Jordan 标准型（forme de Jordan）
created: 2026-10-03
updated: 2026-10-03
type: concept
tags: [algebre, endomorphisme, jordan, trigonalisation, class-de-similitude]
sources: [代数 II 正课手写笔记]
confidence: medium
---

# Jordan 标准型 (forme de Jordan)

> [!tip] 为什么需要它
> 可三角化只给出「上三角」这个粗糙形状，不唯一。Jordan 型给出可三角化方阵**相似等价类的完全标准形**：矩阵在相似意义下被一组简单的块完全决定，从而回答「两个矩阵是否相似」。

> [!note] 定义
> $k$ 阶 **Jordan 块**（bloc de Jordan）指
> $$J_\lambda(k)=\begin{pmatrix}\lambda&1&&\\&\lambda&\ddots&\\&&\ddots&1\\&&&\lambda\end{pmatrix}=\lambda I_k+N_k\qquad(N_k\ \text{幂零}),$$
> 即对角元全为 $\lambda$、上对角元全为 $1$ 的 $k$ 阶方阵。**Jordan 型**指若干 Jordan 块的分块对角阵
> $$\begin{pmatrix}J_{\lambda_1}(k_1)&&\\&\ddots&\\&&J_{\lambda_r}(k_r)\end{pmatrix},$$
> 允许同一个 $\lambda$ 出现多个块。

> [!note] 定理（唯一性）
> 在 $K$ 上被分裂的多项式零化的方阵，都相似于一个 Jordan 型；且 Jordan 型在不计块排列次序时由相似类唯一确定。
> 于是：两个矩阵相似 $\iff$ 它们有相同的 Jordan 型。

## 直觉
> [!tip] 想法
> 先按特征值把 $E$ 分成广义特征子空间直和（见 [[广义特征子空间]]），在每个 $N_\lambda$ 上 $u-\lambda\,\mathrm{Id}$ 幂零。幂零算子有链状结构 $x,u_0(x),u_0^2(x),\dots$，沿这条链写下矩阵就得到若干个 $J_\lambda(k)$ 拼起来。**块的个数**（对每个 $\lambda$）由相似不变量
> $$\operatorname{rg}(A-\lambda I_n)^m=\sum_{i=m}^n(i-m)k_i\qquad(1\le m\le n)$$
> 唯一决定（$k_i$ 为块 $J_\lambda(i)$ 的个数），这里还有 $n=\sum_i i\,k_i$。

## 例子
> [!example] 例
>
> - $\lambda\neq\mu$：$\operatorname{diag}\bigl(J_\lambda(3),J_\lambda(2),J_\mu(2),J_\mu(1)\bigr)\in M_8(K)$；
> - $n=2$ 可三角化不可对角化：$J_\lambda(2)=\begin{pmatrix}\lambda&1\\0&\lambda\end{pmatrix}$；
> - 可对角化 $\iff$ 所有 Jordan 块都是 $1$ 阶（即 $\dim E_\lambda=m(\lambda)$）。

## 陷阱
> [!warning] 易错
>
> - Jordan 型**只在域上分裂时**存在；不分裂就要先扩域（或改用一般域上的有理标准形/Frobenius 型）。
> - 把 $\beta$ 归一成 $1$ 靠的是「换一组合适的基」，不是相似变换之外的操作；归一后的块才唯一。
> - 两个同阶、同特征多项式的矩阵未必相似——要比较 Jordan 块（等价地比较 $\operatorname{rg}(A-\lambda I)^m$）。

## 与不变因子的换算（代数III 视角）

Jordan 块的大小不来自特征值，而来自 $\ker(A-\lambda I)^k$ 的维数跳：

$$\delta_k=\dim\ker(A-\lambda I)^k,\qquad \#\{\text{大小} \geqslant k \text{ 的块}\}=\delta_k-\delta_{k-1}.$$

把 $A-\lambda I$ 的初等因子 $\{(X-\lambda)^{m_i}\}$ 按 $m_1\geqslant m_2\geqslant\cdots$ 排好，就是该 $\lambda$ 的块大小；反过来，各 $\lambda$ 的块大小给出初等因子，按整除链右对齐拼起来即不变因子。特征多项式不分裂时 Jordan 型不存在，但不变因子仍在，见 [[代数III/概念/Frobenius标准型]]。

## 相关概念
- [[广义特征子空间]]、[[可三角化]]、[[幂零]]、[[相似矩阵]]、[[特征值的重数]]
- [[代数III/概念/模]]
- [[代数I/概念/主理想整环]]

## 相关笔记

- [[13-三角化|代数II · 13-三角化]]
- [[15-幂零自同态与特征子空间分解|代数II · 15-幂零自同态与特征子空间分解]]
