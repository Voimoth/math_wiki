---
title: 傅里叶级数学习路径
created: 2026-08-31
updated: 2026-09-02
type: concept
tags: [learning-path, fourier-series, harmonic-analysis]
sources: [Fourier-合并笔记-2026-09-02.md]
confidence: high
---

# 傅里叶级数学习路径(中法班适配)

> 面向对象:中科大中法班数学系大二,已学一元微积分(含级数)、线性代数、抽象代数基础;未学多元微积分与测度论。
> **主资料**:[[../笔记/Fourier-合并笔记-2026-09-02|Fourier 合并笔记]](讲义 sofar.pdf + 自身手写笔记,覆盖第 1-3 章)。

## 当前进度:已完成第 1-3 章(截至 9 月 2 日课)

1. **物理动机与分离变量法**(讲义 1):波/热/Laplace/薛定谔方程;Dirichlet/Neumann/Newton 边条件;分离变量法导出特征值问题 → 自然引出 Fourier 级数。见 [[separation-of-variables]]。
2. **计算方面**(讲义 2):[[fourier-series]] 定义(实/复形式)、系数公式、算例($f=x$、$f=|x|$)、一般区间 $[a,b]$ 与 $[0,\pi]$ 的 sin/cos 展开——**必须亲手算**。
3. **收敛理论**(讲义 3,核心):[[dirichlet-kernel]] 与卷积表示 → Riemann-Lebesgue 引理 → 局部化原理 → [[convergence-of-fourier-series]](Dini 条件、Dini 定理、光滑性-系数衰减、Zygmund 注记含 Dirichlet-Jordan/逐项积分/Dini-Lipschitz/[[gibbs-phenomenon]])。

## 后续课程(尚未覆盖,讲义第 4-8 章)

- **第 4 章:其它类型的逐点收敛**——Cesàro 求和(Fejér 核)、Abel 求和(Poisson 核、圆盘 Laplace)。讲义与手写笔记末尾已点出入口(Hardy《Divergent Series》，见合并笔记 §3.5 衔接)。
- **第 5 章:L² 理论**——内积空间、正交系、Bessel 不等式、均方收敛(Parseval)、勒让德多项式。
- **第 6 章:应用**——解方程、等周不等式、Weyl 分布定理(*)、发散 Fourier 级数反例(*)。
- **第 7-8 章:Fourier 变换及其应用**——缓降/速降函数、求逆、Plancherel;热核、Poisson 求和、海森堡不等式。

> 待相应课程讲义/笔记进来后再补齐对应概念页(对应旧页已删除,如需可从 git 历史找回)。

## 学习节奏建议

- **以合并笔记章节为推进单位**,每章读完 → 让 agent 对照概念页出 3 道变式题检验。
- 第 1-3 章已学,重点在于:亲手重推 Dirichlet 核、Riemann-Lebesgue 四步证明、Dini 定理证明;算熟 $f=x$、$f=|x|$ 的系数。
- 每周摄入 1-2 篇补充资料(如 Stein-Shakarchi 对应章节:[[stein-shakarchi-fourier-analysis]])更新 wiki。
- 遇到卡点:把卡住的具体步骤(而非整题)贴给 agent 讨论。

## 相关概念

- [[fourier-series]] — 核心对象
- [[convergence-of-fourier-series]] — 第 3 章主线
- [[separation-of-variables]] — 第 1 章方法
- [[dirichlet-kernel]] — 逐点收敛工具
- [[fourier-handout-2026]] — 讲义实体页
