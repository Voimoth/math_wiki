---
title: 代数 III 习题课 · 3 PSL₂(ℤ) 的 Möbius 作用与群表示
created: 2026-09-08
updated: 2026-10-03
type: notes
tags: [group-theory, algebre, td]
confidence: high
---

# 3 例：$\mathrm{PSL}_2(\mathbb Z)$ 的 Möbius 作用与群表示

先回顾这个群的定义。记
$$\mathrm{SL}_2(\mathbb Z)=\left\{\begin{pmatrix}a&b\\c&d\end{pmatrix}\,\middle|\,a,b,c,d\in\mathbb Z,\ ad-bc=1\right\}$$
它是所有整数系数、行列式为 $1$ 的 $2\times2$ 矩阵组成的群。其中心为
$$Z(\mathrm{SL}_2(\mathbb Z))=\{I,-I\},$$
因此定义
$$\mathrm{PSL}_2(\mathbb Z)=\mathrm{SL}_2(\mathbb Z)/\{I,-I\}.$$
换句话说，在 $\mathrm{PSL}_2(\mathbb Z)$ 中，矩阵 $A$ 与 $-A$ 表示同一个元素。

这个例子说明如何利用一个群作用来确定生成元，并进一步确定生成元之间的全部关系。这里要区分两个问题：证明 $S,T$ 生成一个群，只能得到一个表示的满射；要证明“没有其他关系”，还需要另外证明这个满射是单射。

## 3.1 作用与基本变换

记 $G=\mathrm{PSL}_2(\mathbb Z)$。矩阵
$$A=\begin{pmatrix}a&b\\c&d\end{pmatrix}\in\mathrm{SL}_2(\mathbb Z)$$
通过 Möbius 变换（Möbius transformation）作用在上半平面
$$\mathbb H=\{z\in\mathbb C\mid\operatorname{Im}z>0\}$$
上：
$$A(z)=\frac{az+b}{cz+d}.$$
矩阵 $A$ 与 $-A$ 给出同一个变换，这正是从 $\mathrm{SL}_2(\mathbb Z)$ 得到 $\mathrm{PSL}_2(\mathbb Z)$ 的原因。

考虑两个变换
$$S(z)=-\frac1z,\qquad T(z)=z+1,$$
它们分别由矩阵
$$S=\begin{pmatrix}0&-1\\1&0\end{pmatrix},\qquad T=\begin{pmatrix}1&1\\0&1\end{pmatrix}$$
给出。我们还记
$$R=ST.$$

## 3.2 利用作用证明生成性

为了证明 $S,T$ 生成 $G$，将作用扩展到上半平面的边界
$$\mathbb P^1(\mathbb Q)=\mathbb Q\cup\{\infty\}.$$
如果
$$A=\begin{pmatrix}a&b\\c&d\end{pmatrix},$$
那么
$$A(\infty)=\begin{cases}a/c,&c\neq0,\\\infty,&c=0.\end{cases}$$

令 $H=\langle S,T\rangle\leq G$，并取基点 $\infty$。我们先看它的轨道。有
$$S(\infty)=0,\qquad T^nS(\infty)=n\quad(n\in\mathbb Z).$$
更一般地，$S$ 和 $T$ 在有理数上的作用为
$$S(x)=-\frac1x,\qquad T(x)=x+1.$$
这两个操作正好对应欧几里得算法的基本步骤。因此，对任意有理数 $p/q$，反复使用欧几里得算法，就能把 $p/q$ 写成由这些操作得到的形式。等价地，有限连分数展开给出某个由 $S,T$ 构成的词 $h$，使得
$$h(\infty)=\frac pq.$$
于是
$$H\cdot\infty=\mathbb P^1(\mathbb Q).$$

接下来计算 $\infty$ 的稳定子群（stabilizer）。若 $g\in G$ 固定 $\infty$，取其在 $\mathrm{SL}_2(\mathbb Z)$ 中的一个代表
$$g=\begin{pmatrix}a&b\\c&d\end{pmatrix}.$$
由 $g(\infty)=\infty$ 可知 $c=0$。再由 $ad-bc=1$ 可知 $a=d=1$ 或 $a=d=-1$。在 $\mathrm{PSL}_2(\mathbb Z)$ 中可以把整个矩阵乘以 $-1$，所以
$$g=\begin{pmatrix}1&n\\0&1\end{pmatrix}=T^n$$
对某个 $n\in\mathbb Z$ 成立。因此
$$\operatorname{Stab}_G(\infty)=\langle T\rangle.$$

现在任取 $g\in G$。因为 $g(\infty)\in\mathbb P^1(\mathbb Q)$，而 $H\cdot\infty=\mathbb P^1(\mathbb Q)$，所以存在 $h\in H$ 使得
$$h(\infty)=g(\infty).$$
于是
$$h^{-1}g(\infty)=\infty,$$
从而 $h^{-1}g\in\operatorname{Stab}_G(\infty)=\langle T\rangle$。因此存在 $n\in\mathbb Z$ 使得
$$h^{-1}g=T^n,\qquad\text{即}\qquad g=hT^n\in\langle S,T\rangle.$$
这就证明了
$$\mathrm{PSL}_2(\mathbb Z)=\langle S,T\rangle.$$

> [!info] 注（与二面体群类比）
> 这个证明与二面体群的情形非常类似。对于正 $n$ 边形，选定一个顶点 $v_0$ 后，任意对称性先由 $v_0$ 的像确定位置，再由稳定子群确定是旋转还是反射。这里选取的基点是 $\infty$：先由 $S,T$ 把 $\infty$ 送到 $g(\infty)$，剩下的差别由稳定子群 $\langle T\rangle$ 描述。

## 3.3 基本关系与表示的满射

直接计算得到
$$S^2=\begin{pmatrix}-1&0\\0&-1\end{pmatrix}=-I.$$
由于 $-I$ 在 $\mathrm{PSL}_2(\mathbb Z)$ 中等于单位元，所以
$$S^2=1.$$
另一方面，
$$R=ST=\begin{pmatrix}0&-1\\1&1\end{pmatrix},\qquad R^3=-I,$$
从而
$$(ST)^3=R^3=1.$$
因此，如果定义抽象群
$$P=\langle s,t\mid s^2=1,\ (st)^3=1\rangle,$$
则存在同态
$$\varphi:P\longrightarrow G,\qquad s\longmapsto S,\quad t\longmapsto T.$$
上一小节已经证明 $S,T$ 生成 $G$，所以
$$\varphi:P\twoheadrightarrow\mathrm{PSL}_2(\mathbb Z)$$
是满射。

> [!warning] 注意
> 这里应当特别注意：证明 $S,T$ 生成 $G$，只证明了表示是满射；它还没有证明 $P$ 中没有更多元素被映到单位元。要证明“没有其他关系”，必须证明 $\varphi$ 的核是平凡的。

## 3.4 利用基本域说明没有其他关系

上半平面中的一个标准基本域（fundamental domain）是
$$\mathcal F=\left\{z\in\mathbb H\,\middle|\,|\operatorname{Re}z|\leq\frac12,\ |z|\geq1\right\}.$$
它的内部在 $G$ 的作用下平铺上半平面：
$$\mathbb H=\bigcup_{g\in G}g\mathcal F,$$
并且不同的内部 $g\mathcal F^\circ$ 互不相交。

基本域的边界通过 $S$ 和 $T$ 识别。变换 $T$ 把两条竖直边识别起来，而 $S$ 把单位圆边界的两半识别起来。边界上有两个特殊点：
$$i,\qquad \rho=\exp(2\pi i/3)=\frac{-1+i\sqrt3}{2},$$
其中 $S$ 固定 $i$，而 $R=ST$ 固定 $\rho$：
$$S(i)=i,\qquad R(\rho)=\rho.$$
在 $i$ 附近，两个基本域拼在一起；绕过这个点两次才回到原来的位置，于是得到关系 $S^2=1$。在 $\rho$ 附近，三个基本域拼在一起；绕过这个点三次才回到原来的位置，于是得到关系 $R^3=1$。

这也可以用约化词来描述。由关系
$$S^2=1,\qquad R^3=1$$
可以把任意词约化为如下形式：相邻的字母分别来自 $\langle S\rangle=\{1,S\}$ 和 $\langle R\rangle=\{1,R,R^2\}$，并且不出现两个相邻的非平凡字母属于同一个子群。例如，约化词具有交替形式
$$R^{\varepsilon_1}SR^{\varepsilon_2}S\cdots,\qquad \varepsilon_j\in\{1,2\},$$
或者以 $S$ 开头、以 $R$ 的幂结尾的类似形式。

从基本域平铺的角度看，约化词表示从 $\mathcal F$ 出发，依次穿过一系列相邻基本域。如果约化词不是空词，那么这条路径不会由于在 $i$ 附近绕两次或在 $\rho$ 附近绕三次而立即回到原处。因此它不可能把 $\mathcal F$ 的内部送回自身。换句话说，非空约化词在 $G$ 中不可能等于单位元。

严格地说，这个结论是双曲多边形的 Poincaré 多边形定理（Poincaré polygon theorem）在这里的应用：边界配对给出生成元，顶点周围的循环分别给出 $S^2=1$ 和 $R^3=1$，除此之外没有其他关系。因此
$$\mathrm{PSL}_2(\mathbb Z)\cong\langle S,T\mid S^2=1,\ (ST)^3=1\rangle.$$

令 $R=ST$，则这个表示也可以写成
$$\mathrm{PSL}_2(\mathbb Z)\cong\langle S,R\mid S^2=1,\ R^3=1\rangle\cong C_2*C_3.$$
这里的 $*$ 表示自由积（free product）。因此，$\mathrm{PSL}_2(\mathbb Z)$ 不是由两个生成元生成的自由群；准确地说，它是二阶循环群和三阶循环群的自由积。

> [!exercise] 练习 3.5（$\mathrm{PSL}_2(\mathbb R)$ 在上半平面的作用）
> 按 §3 的记号，$\mathrm{PSL}_2(\mathbb R)$ 通过 Möbius 变换作用在 $\mathbb H=\{z\in\mathbb C\mid\operatorname{Im}z>0\}$ 上。证明这个作用是传递的，并求稳定子群 $\operatorname{Stab}_{\mathrm{PSL}_2(\mathbb R)}(i)$，证明它同构于 $\mathrm{SO}(2)$。

> [!exercise] 练习 3.6（$\mathrm{PSL}_2(\mathbb Z)$ 的基本域）
> 记 $S=\begin{pmatrix}0&-1\\1&0\end{pmatrix}$，$T=\begin{pmatrix}1&1\\0&1\end{pmatrix}$，$\omega=\exp(2\pi i/3)$。证明：若 $g\in\mathrm{PSL}_2(\mathbb Z)$ 固定某个 $z\in\mathbb H$ 且 $g\neq1$，则 $z$ 在 $\mathrm{PSL}_2(\mathbb Z)$ 的作用下等价于 $i$ 或 $\omega$；等价地，在标准基本域 $\mathcal F$ 中只有 $i$ 与 $\omega$ 的稳定子群非平凡。求出 $\operatorname{Stab}_{\mathrm{PSL}_2(\mathbb Z)}(i)$ 与 $\operatorname{Stab}_{\mathrm{PSL}_2(\mathbb Z)}(\omega)$，并证明它们分别由 $S$ 与 $ST$ 生成。

## 相关概念

- [[自由积]]
- [[代数III/概念/群作用]]
- [[代数III/概念/商群]]
- [[经典群]]
- [[代数III/概念/群]]
