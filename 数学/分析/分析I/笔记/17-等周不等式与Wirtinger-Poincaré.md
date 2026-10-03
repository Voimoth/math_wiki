---
title: 分析I · 等周不等式与 Wirtinger–Poincaré
created: 2026-10-03
updated: 2026-10-03
type: notes
tags: [analysis, analysis-I, zh]
sources: [分析I 课程笔记(本人手写扫描)]
confidence: medium
---

# 等周不等式与 Wirtinger–Poincaré

> [!note] Th (等周不等式, Isoperimetric ineq.)
> 设 $\Omega \subset \mathbb{R}^2$，其边界 $\sigma$ 为一长度为 $L$ 的 $C^1$ 简单闭曲线，则 $S \leq \frac{L^2}{4\pi}$。等号成立 $\iff$ $\Omega$ 为半径 $\frac{L}{2\pi}$ 的圆。

> [!note] Lem (Wirtinger ineq.)
> 设 $f \in C^1[a,b]$ 且 $f(a) = f(b)$，$\int_a^b f(x)\,dx = 0$，则
> $$\int_a^b f^2\,dx \leq \frac{(b-a)^2}{4\pi^2} \int_a^b (f'(x))^2\,dx.$$
> 等号成立 $\iff$ $f(x) = A \sin \frac{2\pi(x-a)}{b-a} + \mu \cos \frac{2\pi(x-a)}{b-a}$。

**Démo :** 取定 $a=0$，$b=2\pi$。令 $\varphi(x) = f(x+\pi)-f(x)$，则
$$\varphi(0)\varphi(\pi) = (f(\pi)-f(0))(f(2\pi)-f(\pi)) = - (f(\pi)-f(0))^2 \leq 0$$
$$\Rightarrow \exists \theta \in [0,\pi]\ \text{s.t}\ \varphi(\theta)=0, \quad \text{即 } f(\pi+\theta) = f(\theta).$$
考虑 $(f'(x)-f'(0))^2 \cot(x-\theta) = G(x)$，则
$$G'(x) = 2 f'(x) (f'(x)-f'(0)) \cot(x-\theta) - (f'(x)-f'(0))^2 \frac{1}{\sin^2(x-\theta)}$$
$$= - \left( f'(x) - (f'(x)-f'(0))\cot(x-\theta) \right)^2 + f'(x)^2 - (f'(x)-f'(0))^2.$$
在 $[0,2\pi]$ 上积分，则
$$0 = G(2\pi)-G(0) = \int_0^{2\pi} G'(x)\,dx = \int_0^{2\pi} f'^2\,dx - \int_0^{2\pi} (f'(x)-f'(0))^2\,dx - \int_0^{2\pi} \left( f'(x) - (f'(x)-f'(0))\cot(x-\theta) \right)^2 dx,$$
即
$$\int_0^{2\pi} f'^2\,dx \geq \int_0^{2\pi} (f'(x)-f'(0))^2\,dx $$
$$= \int_0^{2\pi} \left( f'^2(x) - 2f'(x)f'(0) + f'(0)^2 \right) dx \geq \int_0^{2\pi} f'^2(x)\,dx.$$
等号成立 $\iff f'(0)=0,\ f'(x) = (f'(x)-f'(0))\cot(x-\theta)$，即 $f' = f'\cot(x-\theta)$，$\frac{df}{f} = \cot(x-\theta)\,dx$
$$\Rightarrow \log f + C = \log \sin(x-\theta) + C \Rightarrow f = C \sin(x-\theta). \ \#$$

> [!note] Th (Poincaré ineq.)
> 设 $f \in C^1[0,\pi]$，$f(0)=f(\pi)=0$，则 $\int_0^\pi f^2(x)\,dx \leq \int_0^\pi (f'(x))^2\,dx$。

**Démo :** 令 $\varphi(x) = \frac{f(x)}{\sin x}$，$x \in \,]0,\pi[$，则
$$\int_\varepsilon^{\pi-\varepsilon} \left( f'^2(x) - f^2(x) \right) dx = \int_\varepsilon^{\pi-\varepsilon} \left( \varphi'^2 \sin^2 x + \varphi^2 \cos^2 x + \varphi\varphi'\sin 2x \right) dx$$
$$= \int_\varepsilon^{\pi-\varepsilon} \varphi'^2 \sin^2 x\,dx + \frac{1}{2}\varphi^2 \sin 2x \bigg|_\varepsilon^{\pi-\varepsilon} = \frac{1}{2}\varphi^2 \sin 2x \bigg|_\varepsilon^{\pi-\varepsilon}.$$
令 $\varepsilon \to 0$ 即得。

> [!info] Rq.
> $f \in C^1([a,b])$ 时有 $\varphi(x) := f\left(\frac{b-a}{\pi}x + a\right) \in C^1([0,\pi])$，可对此应用 Poincaré 不等式。

## 变分法

研究 $\inf_{f \neq 0} \frac{\int_0^\pi f'^2\,dx}{\int_0^\pi f^2\,dx}$，$f \in H_0^1(0,\pi)$。
设 $f=u$ 时取到 $\inf$，令 $L(f) = \frac{\int_0^\pi (f')^2\,dx}{\int_0^\pi f^2\,dx}$，则 $\forall \varphi \in C^\infty([0,\pi])$，$\varphi(0)=\varphi(\pi)=0$，$t \in \,]-\varepsilon,\varepsilon[$，
$$\Rightarrow L(u+t\varphi) \geq L(u) \Rightarrow \frac{d}{dt} L(u+t\varphi) \big|_{t=0} = 0,$$
即
$$0 = \frac{\int_0^\pi u' \varphi'\,dx \int_0^\pi u^2\,dx - \int_0^\pi (u')^2\,dx \int_0^\pi u \varphi\,dx}{\left( \int_0^\pi u^2\,dx \right)^2}$$
$$\Rightarrow \lambda \int_0^\pi u \varphi\,dx = \int_0^\pi u' \varphi'\,dx - \int_0^\pi u'' \varphi\,dx \Rightarrow \forall \varphi, \int_0^\pi (-\lambda u - u'') \varphi\,dx = 0 \Rightarrow -\lambda u - u'' = 0.$$

> [!note] Th (等周不等式, Isoperimetric ineq.)
> 设 $\Omega$ 为 $C^1$，其边界由 $\sigma(t)=(x(t),y(t))$，$t \in [0,L]$ 描述，则 $S \leq \frac{L^2}{4\pi}$，取等 $\Leftrightarrow$ $\Omega$ 是圆盘。

**Démo :** 不妨设 $\int_0^L x(t)\,dt = \int_0^L y(t)\,dt = 0$（可通过平移达到），则
$$2S = \int_0^L (xy' - x'y)\,dt = \int_0^L (x,y) \cdot (y', -x')\,dt$$
$$\leq \left( \int_0^L (x^2+y^2)\,dt \right)^{\frac{1}{2}} \left( \int_0^L (y'^2+x'^2)\,dt \right)^{\frac{1}{2}} \quad (\text{Cauchy–Schwarz})$$
$$= \left( \int_0^L (x^2+y^2)\,dt \right)^{\frac{1}{2}} \left( \int_0^L (x'^2+y'^2)\,dt \right)^{\frac{1}{2}}$$
$$\Rightarrow 4S^2 \leq \left( \int_0^L x'^2\,dt + \int_0^L y'^2\,dt \right) \left( \int_0^L x^2\,dt + \int_0^L y^2\,dt \right)$$
$$\leq \left( \frac{L^2}{4\pi^2} \int_0^L x'^2\,dt + \frac{L^2}{4\pi^2} \int_0^L y'^2\,dt \right) \left( \int_0^L x'^2\,dt + \int_0^L y'^2\,dt \right) \quad (\text{Wirtinger})$$
$$= \frac{L^2}{4\pi^2} \left( \int_0^L (x'^2+y'^2)\,dt \right)^2 = \frac{L^4}{4\pi^2} \Rightarrow S \leq \frac{L^2}{4\pi}.$$

## 相关概念

- [[分析III/Fourier/概念/等周不等式|等周不等式]]
- [[Wirtinger不等式]]
- [[Poincaré不等式]]
- [[最速降线与Euler-Lagrange方程]]
