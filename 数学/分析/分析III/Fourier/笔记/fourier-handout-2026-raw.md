---
source_url: file:///E:/书籍/分析/fourier.pdf
ingested: 2026-08-31
sha256: not-computed (local file, immutable source)
---

# 分析 2: Fourier 讲义(殷浩 整理)

> 中科大中法班往届学长整理的《分析 2》Fourier 部分讲义,45 页 PDF。
> 原文: `E:\书籍\分析\fourier.pdf`(2026-08-30 更新,775KB)
> 文本提取: `E:\Wiki\raw\papers\fourier-讲义-full.txt`(pdfjs-dist 提取,中文完整)

## 完整目录结构

1. **Fourier 级数引言**(p.2)
   - 1.1 各种物理方程及其解释(波方程/热方程/Laplace/薛定谔;Dirichlet/Neumann/Newton 边条件)
   - 1.2 分离变量法(热方程 $u_t = ku_{xx}$ 实例:特征值 $-n^2\pi^2/l^2$)
2. **Fourier 级数的计算方面**(p.5):系数公式、$f(x)=x$、$f(x)=|x|$ 等实例
3. **Fourier 级数的逐点收敛理论**(p.7):Dirichlet 核、Riemann-Lebesgue、局部化原理、Dini 条件、Dirichlet-Jordan
   - 3.1 函数光滑性和 Fourier 系数的关系(系数衰减 $o(1/n^k)$)
4. **其它类型的逐点收敛**(p.13):Cesàro 求和(Fejér)、Abel 求和(Poisson 核,圆盘 Laplace)
5. **Fourier 级数的 L² 理论**(p.20):内积空间、正交系、有限维逼近(Bessel)、均方收敛(Parseval)、推广(勒让德多项式)
6. **Fourier 级数的应用**(p.26):解方程、等周不等式、Weyl 分布定理(*)、发散 Fourier 级数例子(*)
7. **Fourier 变换**(p.33):缓降/速降函数(Schwartz)、求逆公式、L² 理论(Plancherel)
8. **Fourier 变换的应用**(p.41):直线上的热方程(热核)、Poisson 求和公式、海森堡不确定性原理

## 讲义特点

- 法国体系风格:物理动机 → 分离变量 → 级数理论 → L² → 变换,层层递进
- 证明完整(如 Riemann-Lebesgue 四步证明、Fejér 核非负性)
- 带 (*) 的是进阶内容:Weyl 等分布、发散级数反例、海森堡不确定性原理
- 与 [[傅里叶级数]] 等概念页一一对应,详见 [[Fourier讲义2026]]
