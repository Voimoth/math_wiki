---
title: Laplace-Runge-Lenz 矢量
created: 2026-10-03
updated: 2026-10-08
type: concept
tags: [mechanics, kepler, symmetry, conserved-quantity]
confidence: high
---

# Laplace-Runge-Lenz 矢量（vecteur de Laplace-Runge-Lenz）

> [!question] 问题
> 开普勒问题除了能量和角动量，还有没有别的守恒量？它为什么能让轨道精确闭合、让速度图成为圆？

## 定义

对单位质量的平方反比场（$k=GM$）定义
$$\vec A=\dot{\vec r}\times\vec L-k\,\hat r,\qquad \vec L=\vec r\times\dot{\vec r}.$$

> [!note] $\vec A$ 是守恒量
> 直接求导可证 $\dfrac{d\vec A}{dt}=0$——**只对 $F=-k/r^2$ 成立**，对一般有心力不守恒。这是"隐藏对称性"（动力学对称，非时空对称）的标志。

> [!tip] $\vec A$ 里的 $k$ 与用哪个角动量
> $k$ 就是势 $V=-k/r$ 的系数（引力情形 $k=GM\mu$，$\mu$ 为运动天体质量），**不是质量**——量纲自动钉住配对：$[\dot{\vec r}\times\vec L]=$ 能量·长度 $=[k]$。
> - 用**总**角动量 $\vec L=\mu\vec r\times\dot{\vec r}$ ⇒ 配 $k=GM\mu$；
> - 用**单位质量**角动量 $\vec l=\vec r\times\dot{\vec r}$ ⇒ 配 $k=GM$（本页用这一套）。
> 两套只差一个整体因子 $\mu$，速度图的半径/偏移形状相同。排斥场（$k<0$，库仑力或卢瑟福散射）同样守恒，方向沿长轴指向近点。

## 几何含义

- $\vec A\cdot\vec L=0$：$\vec A$ 落在轨道平面内，且指向**近心点**方向；
- 大小与能量：$A^2=k^2+2EL^2$，离心率 $e=A/k$；
- $\vec A$ 方向恒定 $\iff$ 轨道主轴不动 $\iff$ **轨道闭合**（对任意 $E$）。这就是 $1/r$ 势"所有束缚轨道都闭合"的代数原因。
- **为什么偏偏是 $1/r^2$**：写 $\ddot{\vec r}=f(r)\hat r$，则
  $$\frac{d\vec A}{dt}=\Big[-f(r)\,r^2-k\Big]\frac{d\hat r}{dt},$$
  要它恒为零必须 $f(r)\propto1/r^2$。于是「$\vec A$ 守恒」与「轨道闭合」是同一件事的两面；任何非常数修正（GR 的 $3u^2$、$\delta V=\beta/r^2$）立刻破坏它，这正是轨道进动的来源。同类还有各向同性谐振子（额外守恒量是对称无迹张量），Bertrand 定理说只有这两类势能对所有束缚轨道闭合。

## 用 $\vec L\times\vec A$ 证明速度图是圆

$$\vec L\times\vec A=\vec L\times(\dot{\vec r}\times\vec L)-k\,\vec L\times\hat r.$$
由 $\vec L\perp\dot{\vec r}$ 得第一项 $=L^2\dot{\vec r}$；又 $\vec L\times\hat r=L\,\hat e_\theta$。于是
$$\dot{\vec r}=\frac{\vec L\times\vec A}{L^2}+\frac{k}{L}\,\hat e_\theta .$$
$\vec A$ 固定、$\hat e_\theta$ 随极角转动，故 $\dot{\vec r}$ 的端点画一个圆，即**速度图是圆**：

- 圆心在 $\dfrac{\vec L\times\vec A}{L^2}$，半径 $R=\dfrac{k}{L}$；
- 速度空间原点（力心）到圆心的距离 $=\dfrac{|\vec A|}{L}=eR$。

这与 [[速度图与圆锥曲线轨道]] 里用 $d\vec v/d\theta$ 得到的结果一致，但 $\vec A$ 的路线更直接地把"半径"与"偏心距"一次读出。

> [!tip] 想法：守恒量 $\times$ 守恒量给出几何
> 角动量 $\vec L$ 与 LRL 矢量 $\vec A$ 叉乘，恰好消去轨道的时间信息、只剩速度端点的位置——守恒量之间的代数关系被翻译成了速度空间的几何。

> [!warning] 陷阱
> $\vec A$ 与 $\vec L$ 一起给出 $SO(4)$ 型对称性（量子力学里氢原子能级简并的根源）。它是"只对 $1/r$ 势成立"的特殊积分，不要误当成任意有心力的普遍守恒量。

## 相关概念

- [[速度图与圆锥曲线轨道]] — 圆锥曲线轨道与速度圆
- [[中心力场与有效势]] — 有心力守恒量与闭合条件
- [[轨道方程与比内公式]] — 另一条得到圆锥曲线轨道的路线
- [[混合积与向量积]] — 定义与证明用叉乘、$\vec L\cdot\vec A=0$ 用混合积
- [[经典群]] — 守恒量 $\vec L,\vec A$ 给出 $SO(4)$ 型对称（隐藏对称）