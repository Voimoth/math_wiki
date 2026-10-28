# Wiki Log

> 数学与物理知识库的变更记录。数学和物理答疑的可复用内容直接沉淀到对应课程的概念页。

## [2026-10-12] fix | 「开映射」页：开+单射⟹连续（$\mathbb{R}$ 特有）替换原双射注记

- 用户提出「实数上开映射必连续」，此命题为误（处处满射函数即否证）；其真核是「开 + 单射 ⟹ 连续」：原「开 + 双射反而强制单调」注记扩为单射版（同胚到开区间；分解 $U=\bigsqcup U_k$ 后用 $\mathbb{R}$ 连通性收成一支；一般空间反例 $\mathrm{id}$: 平凡拓扑$\to$离散拓扑）。

## [2026-10-12] add | 新建「处处满射函数」页，「开映射」补反例机制

- 追问「为何不连续时命题失效」：新建 [[处处满射函数]]（超限构造、可测/Baire 性质变体、Baire 第 1 类不可能）；[[开映射]] 补「不连续的反例」一节（死掉的原料是最值定理；开 + 双射 ⟹ 同胚）。

## [2026-10-12] add | 新建概念页「开映射」（点集拓扑）

- 答疑沉淀：实数上「连续 + 开映射 ⟹ 严格单调」——单射（$m,M$ 只能在端点取得）、介值定介于、定向传播三步；含反向刻画（连续 + 开 ⟺ 严格单调且像为开区间）、arctan（开不满）与 $x^3$（开闭满，自同胚）的边界例子、$\mathbb{Q}$ 上以 $\sqrt2$ 分支的反例（完备性本质）。
- 互链：[[连续映射]]、[[同胚]] 各加入链，课程索引「连续与同胚」组补 [[开映射]]。

## [2026-10-03] fix | 交换图箭头方向逐个核对（用户发现余积图说反话）

- 用户指出：习题课 02「余积」泛性质图里 $g_X$ 本应从 $X$ 指向 $N$，实际画成 `\nwarrow` 使箭头从 $M$ 指向左上空白。
- **根因**：`\swarrow`/`\searrow`/`\nearrow`/`\nwarrow` 只是方向字符，**写反了照样渲染成功**——上一轮只验了「渲染无错 + 箭头对齐」，没核对「箭头连接谁、指向谁」。锥形图（顶点在上、底部三个对象）正是最容易写反的一类。
- 扫描全库 11 个含斜箭头的图逐个核对，修正 3 处：
  - 代数 I 习题课 02 余积图：`\nwarrow g_X`/`\nearrow g_Y` → `\nearrow g_X`/`\nwarrow g_Y`（现与纤维积图对称）
  - 代数 I 正课 27（交换环特征）：$\mathbb{Z}/I\to K$ 误作 `\swarrow`，改 `\nearrow`
  - 代数 I 正课 23（典范分解）：删去多余的斜箭头 `\stackrel{\exists!\bar\varphi}{\nearrow}`（底行已有 $\cong$），整图改 CD，与正课 25 的环版本统一
- 其余 8 个斜箭头图（01 纤维积、02 积、23 核泛性质与余核、06 复合映射×2、18、代数 III 04/09）核对方向无误。
- 复验：无头浏览器 + MathJax(SVG) 渲染这几张图，`merror` 为 0；纤维积图与余积图并排比对视，箭头对称正确。

## [2026-10-03] fix | 交换图统一改 CD（AMScd）画法

- 问题：库里 8 个真正的交换图用 `\begin{array}` + `\downarrow` 手画——`\downarrow` 只是字符宽、不随两端对象伸展，**竖直箭头悬空且对不齐**；另有图把竖直箭头放错列、`G/N \Big/ H/N` 缺括号易误读。
- 处理：全部改成 `\begin{CD}`（AMScd 方形画法，本库规范）：代数 I 的概念/群的扩张、习题课 08、习题课 25（张量积，三角形改方形）、正课 23（商群）、正课 25×2（商环、同态分解），代数 III 正课 04（半直积）、05（自同构）；代数 III 正课 02 的两个「映射说明」由 `array` 改为 `\begin{aligned}`（本库映射说明统一用 aligned）。
- **验证方法（可复用）**：把全库公式抽成一个 HTML（MathJax 3 CDN + `tex-svg.js`，SVG 输出不依赖字体文件），用无头浏览器打开，读 DOM 的 `merror` 数量（应为 0）并截图目视检查箭头对齐。实测改后 20 处图零渲染错误、箭头精确对齐。
- 顺带修正：修掉两处 `$$` 空块（由本次替换产生），以及正课 23 一处**未闭合的 `$$`**（原稿整理遗留，会让后续内容被吞进数学模式）。全库复查：`$$` 与行内 `$` 配对全部正常，`$$` 内无裸中文（中文都在 `\text{}` 内）。

## [2026-10-03] fix | 代数 I 笔记：wikilink 消歧 + 存疑点逐条定案

- **wikilink 改带路径消歧**：`群`/`商群`/`正规子群`/`同构定理`/`导群`/`群作用`/`模` 七个概念在代数 I 与代数 III 各有同名页，`[[群]]` 这类短链接在 Obsidian 中会解析到不确定的一个。已把两门课内 167 处此类链接改成 `[[代数I/概念/…]]`／`[[代数III/概念/…]]`（学科 `_索引.md` 按课程段落分别加前缀；分析 I 索引里 `[[00-总览]]` 的裸链接也已带路径）。全库复查 0 残留、0 断链。
- **存疑点逐处回原图核对、直接定案（笔记内不再留 `[?]`）**：
  - 转写错已改：`r=bq-a`→`r=a-bq`；`|e|=\dim E=n`；`e_n=(0,\dots,0,1)`；`\mathbb{Q}_p` 为域；`x-y=y(1-xy^{-1})`→`y-x=\dots`；`迪卡尔积`→`笛卡尔积`；`Zermelo 引理`→`Zermelo 定理（良序原理）`。
  - 原稿笔误按数学订正：`a^{-1}b^{-1}=(ab)^{-1}`→`b^{-1}a^{-1}=(ab)^{-1}`；半群定义为「只满足结合」、幺半群为「结合且有中性元」；`G/H\cong G'`→`G/H\cong\operatorname{Im}\varphi`；Sylow 条件 `a\nmid m`→`p\nmid m`；二重极点处 `\lambda_1=…`→`\lambda_2=\frac{P(a)}{Q_2(a)}=\frac{2P(a)}{Q''(a)}`；字典序定义式改 `(a<a')\vee((a=a')\wedge(b\leqslant b'))`；整除注记 ① 改「1 整除任何整数」并补回原稿的「任何数整除 0」为 ②。
  - 结构与记号订正：`\operatorname{Vect}(v_1,v_2,v_3)=\operatorname{Vect}(v_1,v_2)`（删去误加的 `=\mathbb{R}^3`）；可解群的短正合列改 `1\to G^{(n)}\to G^{(n-1)}\to G^{(n-1)}/G^{(n)}\to 1`；`\mathbb{P}^2` 误标改 `\mathbb{P}^1`（`\mathbb{A}^2\setminus\{0\}/\sim` 定义的是射影直线）；等价类定义 ② 与「划分/代表元集」推论改写为通顺表述。
  - 无原稿依据的注记：Eisenstein 判别法补「$p$ 必须是素数，证明用到 $\mathbb{Z}/p\mathbb{Z}$ 是整环」，删去原稿的「把 $p$ 换成合数 $n$ 仍成立」。
- 校对手法：对 11 页重新 300 dpi 转图，用 `vision_analyze` 的 `region` 参数（降采样前裁剪、保留全分辨率）定点精读，逐条定案；页图随后删除。

## [2026-10-03] ingest | 代数 I 全年笔记入库(正课 + 习题课)

- 来源:两份手写扫描件(扫描全能王导出,无文本层)。正课 113 页、习题课 69 页;300 dpi 转图后用视觉模型逐页转写(正课 ok=112/skip=1,习题课 ok=69,零失败)
- **正课:41 篇笔记 + 121 个概念页**(按内容分 10 段并行整理:语言与集合 / 映射与等价关系 / 序与集合论公理 / 组合与线性方程组 / 整数算术 / 群论 / 环论 / 多项式 / 线性代数);`笔记/正课/00-总览.md` 为入口
- **习题课:25 篇**(按主题**提炼知识**而非转写习题:删题号与题目措辞,只保留定义/命题/例子/新课法;分 7 段并行);`笔记/习题课/00-总览.md` 为入口。内容含范畴论初步(纤维积/函子/自然变换)、群论(同态与同构定理/半直积/正合列/可解群/群作用/Sylow/自由群/辫群/Coxeter 群/对称群)、交换环(根理想/局部化/诺特环/准素分解/CRT)、多项式(对称多项式/赋值/费马类比)与模与张量积
- 概念页合计 175 个(去重后),按主题分 10 组列入 `数学/代数/_索引.md`
- 术语统一:合并了 `素元`/`素元素` 两页,删去与 `群的中心`、`正规化子与中心化子` 重复的 `中心与中心化子`
- **存疑点**:正课整理中逐页回原图核对,列出「原稿笔误/自相矛盾」与「辨认不清」两类清单(如消元矩阵系数 `-a^2+2a-2` 与后文 `2-a` 矛盾、`(a*b)^{-1}=a^{-1}*b^{-1}`、Eisenstein 证明「不妨设 p∤b_0」等);原稿笔误一律**保留原写法并标 `[?]`**,未静默改动,清单见 agent 工作目录 `存疑点汇总-正课.md`
- 原 PDF 归档到 `代数 I` 课程资料目录;转写稿/页图等中间产物留在 agent 工作目录,未进 vault

## [2026-09-11] ingest | 代数III 讲义续篇二($A_5$ 单性、60 阶群、$SO(3)$ 分类)
- 来源:`扫描全能王 2026-09-11 12.04.pdf`(10 页,A5 扫描件,无文本层,视觉模型转写:deepseek-flash 整批 ok=10)
- **更新 `代数III笔记.md`**(接在"Conséquence"块之后):
  - **Preuve de la simplicité de $\mathfrak{A}_5$**:元素普查(1+15+20+24=60,含 $\frac{5\binom{4}{2}}{2}=15$、$\binom{5}{3}\cdot 2=20$、$4!=24$ 三个计数);5-循环引理;逐类排除;$n\geqslant6$ 归约到 $n=5$($A_F\simeq A_5$ 单 + 选 3-循环 $\tau$ 造 $\sigma'=\tau\sigma\tau^{-1}\sigma^{-1}$ 使其至少固定 $n-5$ 点)
  - **Complément : groupe simple d'ordre 60**:指数 $\leqslant4$ 被 $|\mathfrak{S}_d|\leqslant24<60$ 排除;$k_5=6$(→24 个 5 阶元)、$k_2=15$;2-Sylow 两两交平凡的证明(中心化子 $C(u)$,用 $4\mid|C(u)|$、$[G:C(u)]=6\Rightarrow|C(u)|\leqslant10$、$8\nmid60$);矛盾 $1+24+45>60$
  - **Application : sous-groupes finis de $SO(3)$**:$N=3,e=(2,3,5)$ 情形(轨道 30/20/12,轴 15/10/6,元素 1+15+20+24=60,逐类排除得 $G\simeq A_5$)
  - **Sous-groupes distingués de $\mathfrak{S}_n$**($n\geqslant5$ 只有 $\{Id\},A_n,\mathfrak{S}_n$)、**Sous-groupes d'indice $n$**($H\simeq\mathfrak{S}_{n-1}$)、**Groupe dérivé**($\mathfrak{D}(\mathfrak{S}_n)=A_n$;$n\geqslant5$ 时 $\mathfrak{D}(A_n)=A_n$)
  - **Complément : retour sur $N=3$, $e=(2,3,4)$**($|G|=24$ 时 $G\simeq\mathfrak{S}_4$,用 $O_2$ 的 4 条轴给出 $G\to\mathfrak{S}_4$ 并证其单)
  - 按要求**展开缩写**:$G_n\to\mathfrak{S}_n$、$A_n\to\mathfrak{A}_n$、$p.p.c.m.$、$Rq./Rapp./Prop./Thm./Rem./Déf$ 均已写全;**原稿用箭头/括号附注的补充(如 $C(u)=G$ 的旁注、$\sigma'$ 的定义补全、5-循环类分裂)已按正常行文顺序并入正文**,不保留旁注形式
- **新建概念页 2 个**:
  - `A5单性与60阶群.md` — 元素普查表;共轭类"含一即含全类"机制;逐类排除的 Sylow 骨架;为什么 $n=4$ 例外;反方向的 60 阶单群分类(指数假设的两处用处)
  - `SO3的有限子群.md` — 极点集 $X$ + Burnside 得 $N\in\{2,3\}$;$N=2$ 循环群;$N=3$ 三种情形($D_{2n}$、$\mathfrak{A}_4/\mathfrak{S}_4/\mathfrak{A}_5$ 对应正四面体/立方体/二十面体)
- **更新 `对称群.md`**:新增 5bis 节($A_n$ 单性两种情形)与两页配套定理——$\mathfrak{S}_n$ 的正规子群、指数 $n$ 子群 $\simeq\mathfrak{S}_{n-1}$、导群 $\mathfrak{D}(\mathfrak{S}_n)=A_n$ 与 $\mathfrak{D}(A_n)=A_n$
- **数学更正(转写后以脚本核验,见下)**:
  - 5-循环在 $\mathfrak{A}_5$ 中不是一个共轭类,而是**两个各 12 个的类**(手写稿"ces 5-cycles ne peuvent pas être conjugués"仅说"不(全)共轭",转写初稿曾误作"24 个全共轭")
  - 已用 Node 枚举 $S_5/A_5$ 全部 120/60 个元素核验:**元素阶分布 1:1, 2:15, 3:20, 5:24**;$\mathfrak{A}_5$ 共轭类 $1,15,20,12,12$;$\mathfrak{A}_4$ 中 2 阶元仅 3 个、$V$ 在 $\mathfrak{A}_4$ 与 $\mathfrak{S}_4$ 中均正规;$\mathfrak{D}(\mathfrak{S}_4)=A_4$(12 阶)、$\mathfrak{D}(\mathfrak{A}_5)=\mathfrak{A}_5$(完美群);$16,21,25$ 均不整除 60
  - 手写稿 $C(u)$ 段经局部裁剪重读确认为 `4 \mid |C(u)|` 与 `[G:C(u)]=6 ⇒ |C(u)| ≤ 10`,**不是** `8 \mid |C(u)|`(转写初稿的 `6 ≤ |C(u)|` 已按原稿保留并补足推理)
- **更新**:`群论学习路径.md`(主线地图延伸到 $A_5$/$SO(3)$,新增"应用"节)、`数学/代数/_索引.md`(补两页,更新关系图)、`代数III笔记.md` frontmatter sources/updated
- 转写页图与临时脚本已清理(页面图与转写中间产物已移至 agent 工作目录)

## [2026-09-10] ingest | 代数III 讲义续篇(Sylow 定理与对称群)
- 来源:`代数III.pdf`(10 页,手写法语,无文本层,视觉模型转写)
- **转写通道修复**:`ds_vision_ustc.ps1` 的密钥正则 `api_key:\s*(sk-...)` 取的是配置中**第一个** sk- 密钥(DeepSeek 的),导致 401;新脚本 `ds_vision_ustc2.ps1` 按 provider 块边界(`^  custom:api-llm-ustc-edu-cn:` 起到下一个 provider 头)**定位 USTC 密钥**。另:4.4MB 原图触发 503,降到 0.6 倍(约 1.1MB)后稳定成功
- **更新 `代数III笔记.md`**(接在第 3 节 $G_1=G/H$ 递推证明之后):
  - Références(Perrin/Krée/Artin/Jacobson)
  - **Sous-groupes de Sylow**:$p$-Sylow 定义;$|\mathrm{GL}_n(\mathbb{F}_p)|$ 的数基证明与上三角单位群给出 $p$-Sylow;关键引理($aSa^{-1}\cap H$ 是 $H$ 的 $p$-Sylow,用 $G/S$ 平移作用 + 轨道计数);Sylow 定理三条(存在/共轭/计数 $k\equiv1 \bmod p$、$k\mid m$)及完整证明;Cayley 定理 + 置换矩阵把存在性归约到 $\mathrm{GL}_n(\mathbb{F}_p)$;应用两例($|G|=63$、$|G|=48$ → 非单)
  - **Groupes symétriques**:符号差定义;$\mathfrak{S}_n$ 的两套生成元($(1i)$ 型与相邻转置);$k$-循环与支撑;循环分解定理($\langle\sigma\rangle$ 轨道证明);共轭类 ⟺ 循环型;$\mathfrak{A}_n$ 由 3-循环生成;3-循环在 $\mathfrak{A}_n$ 中共轭($n\geqslant5$);唯一非平凡同态 $\mathfrak{S}_n\to\mathbb{C}^*$ 即 $\varepsilon$;阶 = 循环长度 p.p.c.m.;$Z(\mathfrak{S}_n)=\{\mathrm{Id}\}$;$\mathfrak{A}_n$ 单性与 $\mathfrak{A}_4$ 例外 $V$
  - **原文符号澄清(重要,已更正)**:转写初稿把该行读作 "Pour $n\geqslant4$",并因它与紧随其后的 "Rem. Pour $n=4$, $\mathfrak{A}_4$ n'est pas simple" 冲突而"修正"为 $n\geqslant5$ —— **这是误改**。对原图该行逐字复核后确认原文是 **$n\neq4$**(等号上的斜杠被误读),即 "Thm. Pour $n\neq4$, $\mathfrak{A}_n$ est simple",与 Rem. 完全自洽:$n=3$ 时 $\mathfrak{A}_3\simeq\mathbb{Z}/3\mathbb{Z}$ 平凡地单,$n=4$ 是唯一例外,$n\geqslant5$ 由 3-循环共轭拼图给出。已把 `代数III笔记.md`、`对称群.md`、`群论学习路径.md` 改回 $n\neq4$
- **新建概念页 2 个**:
  - `Sylow定理.md` — Lagrange 逆命题反例($A_4$ 无 6 阶子群)、$p$-Sylow 定义、$|\mathrm{GL}_n(\mathbb{F}_p)|$ 与显式 $p$-Sylow、关键引理、三条定理与证明、按阶判非单三步模板
  - `对称群.md` — 符号差、生成元、循环与支撑、循环分解、共轭类=循环型(分拆)、$\mathfrak{A}_n$ 由 3-循环生成、3-循环共轭与单性拼图、中心与 $n=4$ 例外
- **更新**:`群论学习路径.md`(新增"Sylow 与对称群"节,主线延伸到 Sylow→对称群)、`数学/代数/_索引.md`(补 Sylow定理/对称群/自同构与群的对称性,更新关系图主线)、`代数III笔记.md` frontmatter 的 sources 与 updated
- **格式统一(2026-09-10 补,全篇)**:整份笔记(前 5 节 + 续篇 Sylow/对称群两节)的块标签全部由粗体(`**Prop :**`)改为 callout 分块——`Déf`/`Définition`/`Thm`/`Théorème`/`Corollaire`/`Lemme`/`Conséquence` → `> [!note]`;`Prop`/`Rem`/`Remarque`/`Notation`/`Intérêt` → `> [!info]`;`Exemple`/`Application` → `> [!example]`。全篇 callout 共 80 处,块内列表与多行 `aligned` 公式逐行加 `>` 前缀(渲染正常)。**保持粗体正文的三类**:`**Preuve :**`(及 `Preuve du thm`/`Preuve de 1) et 2) :`)、`**Conclusion :**`、三个 `**Si $e_1=..$, $e_2=..$, $e_3=..$ :**` 分情况枚举(它们是证明收尾/分支,不是独立陈述块)
- 转写文本已归档为 `代数III-讲义提取.txt`;页面图与临时脚本已清理

## [2026-09-10] ingest | 新版 Fourier 讲义(sofar.pdf,36 页)+ 第 4-5 章概念页建设
- 来源:`sofar (1).pdf`(36 页,2026-09 版,覆盖 §1-§5 并新增 §1.3/§3.6/§4.3/§5.5 历史注记);提取文本已归档为 `Fourier/笔记/sofar_extracted.txt`(替换旧的 17 页版本)
- 讲义实际进度:第 1-3 章(9 月 2 日课)+ 第 4 章 Cesàro/Abel 求和 + 第 5 章 L² 理论(9 月 26 日课);§6-§8 目录已列出但未讲授
- **更新 `Fourier笔记.md`**:补 §1.3 历史注记详注(Bernoulli/Euler 之争、Dirichlet 1837 函数定义、Cantor 唯一性);第 3 章补 §3.6 反例史(du Bois-Reymond/Fejér/Kolmogorov/Lusin→Carleson/Kahane-Katznelson)并补 Zygmund Thm 11·10;新增 **§4 其它类型的逐点收敛**(4.1 公理化弱收敛、4.2 Cesàro、4.3 Abel、4.4 Hardy 注记)与 **§5 L² 理论**(5.1-5.5,含 Legendre 与历史注记);末尾加"三种收敛意义的层级"对照表与概念页索引
- **新建概念页 5 个**:
  - `广义求和与Cesàro求和.md` — 定义 4.1 四条公理、例 4.2($1-1+\cdots\sim\frac12$)、定理 4.3、定理 4.5、定理 4.6/4.7、§4.3 Hardy《Divergent Series》三问注记
  - `Cesàro求和与Fejér核.md` — Fejér 核闭式与三条性质、与 Dirichlet 核对照表、"著名的套路"、两个推论
  - `Abel求和与Poisson核.md` — 定义 4.9、引理 4.10、例 4.11、定理 4.12(含 (4.1) 式与"乘以 $\frac{1}{1-r}$ = 取部分和"的观察)、定理 4.13、定理 4.16(单位圆盘 Dirichlet 问题)
  - `傅里叶系数唯一性.md` — 定理 4.6 三步证明(三角帽函数)、推论 4.7、Remark 4.8;说明它回答了第 3 章 §3.4 的遗留问题
  - `L²理论与Hilbert空间.md` — 内积/范数、$C$ 不完备 vs $\ell^2$ 完备(引理 5.4)、引理 5.8 有限维逼近与 Bessel、完备性(定义 5.9)、定理 5.11/5.13(Parseval)、等距映射 $\mathcal{F}$、完备化套路
  - `勒让德多项式.md` — $L_n$ 定义、正交性、特征值问题 $\lambda_n=n(n+1)$、与三角系的平行表、Sturm-Liouville 历史
- **重建概念页 3 个**(从 git 历史取回旧版后按新讲义重写,纠正旧版硬伤):
  - `正交函数系.md`(旧 orthogonal-system.md)— 删去旧版"法国体系 Fejér 先行"的过度断言,改为按讲义实际顺序叙述
  - `Parseval恒等式.md`(旧 parseval-identity.md)— 删去旧版"先 Bessel 再证等号"的含糊说法,改为按讲义"投影最佳 + 一致逼近"的实际证明链,并补 §5.5 历史(Parseval 1799/Hurwitz 1902 平方误差恒等式)
  - `Cesàro求和与Fejér核.md` 已覆盖旧 fejer-kernel.md 全部内容;旧版把 Fejér 定理条件误述为"只需连续"(漏了周期性)
- **修正旧页的过期表述**:
  - `傅里叶级数收敛.md` — 衔接说明改为三种收敛意义对照表 + §3.4 遗留问题已被定理 4.6 回答
  - `吉布斯现象.md` — 删去"Cesàro/Fejér 属后续章节、当前不在范围内"
  - `傅里叶级数.md` — Remark 2.3(两种展开之谜)指向 §5 的解答;补函数类与端点值两个约定
  - `傅里叶级数入门.md` — 路径 ② 正式接入第 5 章;补 Peter-Weyl 呼应路径 ④
  - `傅里叶文献.md` — 增 Hardy《Divergent Series》与本课讲义条目
  - `傅里叶学习路径.md` — 进度更新为第 1-5 章 + 三种收敛层级表 + 后续 §6-§8
- **修复断链**:删除对已失效实体页 `[[Fourier讲义2026]]` 的引用(3 处)
- 更新:`分析III/_索引.md`(按讲义章节列概念页表)、`数学/分析/_索引.md`(进度与说明)、本 log

## [2026-09-05] update | 分离变量法：非零边界、完备性与不漏解
- 更新：`数学/分析/分析III/Fourier/概念/分离变量法.md`
- 内容：补充非零常数边界的齐次化、稳态与瞬态分解；说明单个可分离模式不等于一般解；补充特征函数完备性、级数验证、唯一性三步严格逻辑；增加分离变量法适用条件与判断表。
- 技能：整理数学/物理答疑与 wiki 沉淀规则，更新 `math-coach`、`fourier-analysis-wiki`、`wiki-writing-conventions`；在 `french-mathematics-tutoring` 中声明通用规则以 `math-coach` 为准。

## [2026-09-05] update | 分离变量法：时间依赖边界与 Duhamel 原理
- 更新：`数学/分析/分析III/Fourier/概念/分离变量法.md`（新增 §2.4，微调 §5 判断清单）
- 内容：时间依赖边界 $u(0,t)=\alpha(t)$ 平移后产生源项（非齐次性守恒，只能从边界转移到方程）；给出特征函数展开 + 系数 ODE + Duhamel 积分的处理框架，说明其与分离变量法同构（谱展开本质）。
- 追加澄清：时间依赖边界的 $v$ 是边界插值函数而非方程特解；机制从"一次性吸收"升级为"逐模式积分"（Duhamel = 无穷维常数变易法）；$e^{-\lambda t}$ 型边界仍可用广义特解一次吸收。
- 再补：通用三项结构（lifting + 初值响应 + 源项响应）；现状注记——$L^2$ 完备性未学，展开合法性仍是形式假设（Dirichlet 定理已覆盖逐点收敛，完备性待后续）。

## [2026-09-05] update | 伽利略群：群的维数概念（本质问答）
- 更新：`物理/理论力学/伽利略群.md`（新增 tip callout，bump updated）
- 内容：群为何有维数（非线性空间但有连续参数族 → 流形/李群）；10 参数分解；唯一分解是维数加法合法的依据；作业题 1 的定位说明。

## [2026-09-05] create | 速度图与圆锥曲线轨道
- 新建：`物理/理论力学/速度图与圆锥曲线轨道.md`；更新 `物理/理论力学/_索引.md`
- 内容：速度图是圆（引擎）；圆+点中垂线构造（椭圆/双曲线）及其在圆上点退化（$2a=R$ 固定，抛物线需 $a\to\infty$，准线趋过圆心是塌缩信号）；抛物线正确构造（焦点=力心、准线不过焦点、$e=1$，两自然选择仅差缩放）；能量桥 $|AC|^2=R^2+2E$ 与轨道类型表；"椭圆=轨道"的切线场论证（弧长参数化唯一性，方向决定形状、大小决定时间表）。
- 追加：2.2「不连续性的真相」——几何画法沿"固定 $2a$、变 $e$"逼近（塌缩），物理沿"固定力心、变能量"逼近（$a\to\infty$ 打开成抛物线），不连续是几何表示在 $e=1$ 的奇点而非物理奇点；小节顺延 2.3。
- 再补：3.1 (b) 彗星速度图几何——入射/出射速度点 = 从 $A$ 向速度圆的切点(两圆 $|v|=v_\infty$ 与 $|v-C|=R$ 正交相切),切线长 $=v_\infty$,切向 = 渐近线方向;近日点速度 $v_{\max}=|AC|+R$。

## [2026-09-08] create | 代数III习题课笔记（2026-08-31）与习题课概念页
- 新建：`数学/代数/代数III/笔记/习题课笔记.md`——2026 秋季习题课《群的例子与代数中的基本概念》（17 页讲义全文结构化：公式恢复 LaTeX，定义/命题/例/注/习题 callout 化，保留讲义编号）
- 新建概念页（来源 `2026-08-31.pdf`）：
  - `经典群.md`——保留线性数据的自同构表（GL/SL/O/SO/Sp/GLn(Z)）、矩阵刻画、等距群 R^n⋊O_n、正多面体旋转群 A4/S4/A5
  - `伽罗瓦群.md`——保持根间全部多项式关系的根置换；完整计算 X^4-4X^2+2 得 C4；Gal(x^3-2/Q)≅S3 提示链
  - `模.md`——End(V) 环、Aut(V)=End(V)^×、左 R-模定义
  - `域上代数.md`——ρ:K→Z(R) 定义（乘法 K-双线性）、M_n(K) 例
  - `自由积.md`——PSL2(Z)≅C2*C3：轨道-稳定子定生成、基本域顶点循环定关系（Poincaré 多边形定理），区分表示的满射与同构
- 更新：`自同构与群的对称性.md`（新增第 5 节 Aut(S,Φ) 一般框架：结构越多对称越少、保内积 vs 保距离陷阱）、`群论学习路径.md`（新增"习题课：对称性视角"节）、`数学/代数/_索引.md`
- 结构：习题课从"对称性"方向进入群论（对象+结构→保持变换群），与 Rosso 讲义主线互补；半直积 ⋊ 仅记号层面出现，正式定义留待后续课程

## [2026-10-03] create | Fourier 全课程(§6–§8)与点集拓扑(§1–§3)入库
- 讲义归档:新 `fourier.pdf`(61 页,2026-09-21 版)替换 旧版 `fourier.pdf`;`sofar.pdf`(37 页,2026-09-30 版)放入 点集拓扑目录(该目录旧 `topo.pdf` 为往届完整版,保留未动)。
- Fourier:`Fourier笔记.md` 续写第 6–8 章(650→1131 行),开头涵盖范围更新为第 1—8 章;新建 11 概念页(傅里叶变换、缓降函数、速降函数、傅里叶逆变换、Plancherel定理、热方程、等周不等式、Weyl分布定理、发散傅里叶级数、Poisson求和公式、海森堡不确定性原理);讲义提取文本 `fourier-讲义-2026-09-21.txt` 入 `笔记/`。
- 点集拓扑:新建笔记 `点集拓扑笔记.md`(§1–§3)与 12 概念页 + 入口页 `点集拓扑学习路径.md`;讲义提取文本 `sofar_extracted.txt` 入 `笔记/`。课程进行到 §3.3(9 月 30 日课),§4 起正文未讲授故未建页。
- 更新:`分析III/_索引.md`、`点集拓扑/_索引.md`、`分析/_索引.md`、`傅里叶学习路径.md`。
- 另:`正规子群.md` 补「指数 2 ⇒ 正规」的作用/同态证法与两种证法对比;`Sylow定理.md` 补 $A_4$ 无 6 阶子群的两个证明(含 2026-10-02 讨论中学习者独立发现、不用正规性的排他式证明)。

## [2026-10-03] create | 理论力学:拉格朗日力学与有心力/GR 测地线概念页
- 依据 hw1–hw5 与课程进度,为理论力学新建 10 个概念页并接入索引:
  - 拉格朗日力学(新分组):`虚功原理.md`、`广义坐标与构型空间.md`、`非惯性系与等效原理.md`、`时间作为广义坐标.md`、`诺特定理.md`
  - 轨道与几何方法:`中心力场与有效势.md`、`轨道方程与比内公式.md`、`轨道进动.md`、`Laplace-Runge-Lenz 矢量.md`、`Schwarzschild时空中的测地线.md`
- 扩充既有页:`Beltrami 恒等式.md`(补旋转极小曲面/悬链面例题)、`测地线方程.md`(补平面与圆柱面低维检验,并链到 GR 页)、`速度图与圆锥曲线轨道.md`(相关概念接入 LRL 矢量与轨道进动)、`伽利略群.md`(把"诺特定理——未创建页面"改为 wikilink)。
- `_索引.md`:新增"拉格朗日力学"分组,把五个新页归位;"轨道与几何方法"补五个新页;更新课程大纲进度行;bump updated。
- 概念页只写概念,题目仅作内嵌例题(如转盘人造重力、旋转极小曲面),不附习题串、不写作来源;所有 wikilink 均指向现存页。


## [2026-10-03] create | 分析II 按讲义从头整理(1 笔记×2 + 41 概念页)
- 依据殷浩《分析 2》上册(78 页)与下册(84 页)讲义重新整理,取代此前的试验稿。
- 笔记:`分析II笔记-上.md`(§1–§8:赋范向量空间、映射与连续、紧性/连通性、向量值函数导数与积分、级数、函数列/函数项级数一致收敛、Stone-Weierstrass);`分析II笔记-下.md`(幂级数、广义积分、含参变量积分、ODE)。
- 概念页 41 个(赋范空间与拓扑 5、极限与连续 5、紧性连通 3、向量值函数与级数 3、一致收敛 7、逼近与反例 4、幂级数 4、广义/含参积分 6、ODE 4)。
- 新增 `分析II/_索引.md`;更新 `分析/_索引.md`。旧试验稿 `笔记/分析II复习.md` 保留未动。


## [2026-10-03] refactor | 笔记统一按章节拆分
- 超长合并笔记按讲义章节拆分为章级文件(原文件名保留为入口页,链接不断):
  `代数III笔记.md`→9 篇;`Fourier笔记.md`→9 篇;`习题课笔记.md`→6 篇;`点集拓扑笔记.md`→4 篇;`分析II笔记.md`(新建入口)→12 篇。
- 修正 分析II 概念页 sources;更新各课程 _索引 描述。

## [2026-10-03] refactor | 章级笔记命名统一为 NN-章名
- 去掉课程前缀(课程从目录可辨):`Fourier-01-引言.md`→`01-引言.md`,`分析II-01-…`→`01-…`,`代数III-01-…`→`01-…`,`点集拓扑-01-…`→`01-…`。
- 习题课笔记整体移入 `代数/代数III/笔记/习题课/`(6 篇 + 入口页),与正课章号不再并列。
- 全库 wikilink 同步更新(6 个文件);无重名、断链仅 log.md 历史底噪。

## [2026-10-03] refactor | 笔记入口页统一 00-总览 + 正课/习题课分置
- 各课程笔记入口页统一为 `00-总览.md`(原 `Fourier笔记.md`/`点集拓扑笔记.md`/`分析II笔记.md`/`代数III笔记.md`/`习题课笔记.md` 均并入);全库 14 个文件的 wikilink 同步改为新路径。
- 代数III:正课 9 篇移入 `笔记/正课/`,习题课 6 篇在 `笔记/习题课/`,两者不再区别对待。
- 删除冗余讲义提取副产物:`fourier-讲义-full.txt`、`fourier-讲义.txt`(乱码)、`Fourier/笔记/sofar_extracted.txt`(旧版);保留现行 `fourier-讲义-2026-09-21.txt` 与 `点集拓扑/笔记/sofar_extracted.txt`。
- 分析II 27 个概念页 sources 改指讲义 PDF。

## [2026-10-03] refactor | vault 自包含化:去本地路径、清提取副产物
- 全库 `sources:` 字段(113 处)改为**讲义名称**(如 `殷浩《分析 2》上册`、`Rosso《群论》讲义`),不再写文件名/路径;正文里的 `/mnt/e/书籍/...`、`C:\...`、`Downloads\...` 一律删除。
- 讲义提取文本(txt)全部移出 vault(6 份 → agent 工作目录);`.gitignore` 增 `*.txt`.
- 原则:本仓库是独立文档库,**不依赖用户本地其它文件**。

## [2026-10-03] refactor | 清空 agent 遗留物、删除 README
- agent 工具脚本搬出 vault:PDF 提取(node+pdfjs,含 node_modules)与两个 extract 脚本 → `~/.hermes/tools/math-wiki-scripts/`(搬家后已实测提取正常)。
- git 钩子存档由 `共享/scripts/git-hooks/` 移至 `共享/git-hooks/`,`.gitattributes` 同步。
- 删除根 `README.md`(用户要求:目录分类已足够清晰,不必额外说明);`.gitignore` 去掉 pdfjs 旧规则。
- vault 现在只剩 md、`.gitignore/.gitattributes`、钩子存档与一张笔记附件 SVG。

## [2026-10-03] ingest | 分析I 手写课堂笔记(79 页)整理入库
- 来源:本人手写分析I 课堂笔记扫描档(79 页,2026-10-03 扫描;原件归档 `书籍/分析/分析I/手写笔记/`)。
- 转写:pdftoppm 300dpi → 视觉模型逐页转写(79/79 成功) → 机械修复(去前言/水印/坏定界符) → 按内容切成 20 章 → 5 个子代理并行规范化整理,可疑处回原图核对。
- 产出:笔记 20 篇(入口 `笔记/00-总览.md`,约 2900 行)+ 概念页 105 个 + 课程索引 `分析I/_索引.md`;一张手绘示意图裁图存 `笔记/附件/`。
- 规范化:callout 分层、LaTeX 修复、禁 emoji/题号/出处;无法辨认处保留 `[?]` 不猜造。
- 同步更新 `数学/分析/_索引.md`。

## [2026-10-03] fix | 分析I 按用户逐条核对修正
- 用户逐条回复存疑点后落实:①p06 等价类性质是「或」(非 \iff);②p30 公共加细取并(∪);③p77 Lemma 1 末句改为 f(e)=e;④p68 括注= (Fredholm 二择一, Hilbert);⑤p70 括注= Lyapunov 泛函(非 Lagrange 恒等式),且积分两项之间是减号(转写误作 +);⑥p42 标注 Lem(转写误作 Semi),并把存疑框改成三条具体细节(2^{2n} 行同式重复 / 取 n=2^k 后首项系数应为 k / pi(2^{k+1})≤2^k 未给理由);⑦p31 f=x sin x 按原稿保留(用户:可能当时就写错)。
- 图示政策:删除 p77 手绘图的裁片附件,改为文字描述(用户要求:不放他的手绘图,优先文字/SVG)。

## [2026-10-03] fix | 分析I 笔记逐行复校（错别字 + 数学）
- 5 个子代理对照原图逐页复校 20 篇笔记，共改 18 个文件。典型：①文字：「落手算」→「纯手算」、「排序混沌」→「推出混沌」、「纵轴」→「对角线」；②语义判读：Lem 曾被误读为 Semi（笔记+概念页均已改回）、证明标记 Démo 曾被误读为 Solovo、Rq 曾被误读为 Rg；③数学：$I_{2n}$ 系数写反、$I_{kn}$ 求和限、Abel 求和公式、分割宽度记号 $\delta(\sigma)$ 与 $S(\sigma)$ 混用、$\underline I/\overline I$ 顺序、$]u^*,v^*[$ 记号、$f(u^*)=U$ 等。
- 用户亲自修正素数定理弱形式推导使其自洽；相应存疑框已删。
- 按用户要求：**笔记内不再放整理者的存疑 warning 框**（只用行内 `[?]`，疑问写进报告）；概念页的「陷阱」框保留。

## [2026-10-03] fix | 分析I 按用户点名修正（井号、渲染宏、例题归属）
- 证明结束符 `\sharp`（♯）按原稿改回井号 `\#`（7 处）；`\sh`→`\sinh`（14 篇，Obsidian 渲染不出 `\sh`）；删 `\cancel`（不支持）与 `\textsuperscript`（代数III 一处）。
- 14 篇分段函数例结论 $2x+O(x^3)$→$2x+o(x^3)$；末例按用户给出的分子写成 $e^{1/n}-(1+\frac1{n(n+1)})=\frac3{2n^2}+O(\frac1{n^2})$（原转写把分子误读为 $\ln(n+1)$、分母误读为 $1+n^2$）。
- 15 篇 p61 例题面按原稿改为 $\prod\sqrt[n]{\log(n+x)-\log n}$；15 篇开头三个渐近展开例（$\sqrt{x^3/(x-1)}$、$e^{x\ln x}$、$I_n$）按内容归属**移入 14 篇**末尾（分文件逻辑修正）。
- 18 篇 $y''+ay'+b=0$ 补回漏写的 $y$；20 篇「由区的定义」→「由 $K$ 的定义」；确认 p51 处为 Prop（非 Rqp）。

## [2026-10-03] status | 分析I 第三轮逐行复校（进行中）
- 状态：5 个子代理正在对照原图逐页复校 20 篇笔记（错别字 + 数学 + MathJax 渲染 + 例题归属），报回后需统一复核并提交。
- 本轮前已完成：①79 页转写入库（20 篇 + 105 概念页 + `分析I/_索引`）；②两轮复校（18 文件）；③用户逐条核对后的修正（`\sharp`→`\#`、`\sh`→`\sinh`、删 `\cancel`、14 篇 O→o 与末例分子、15 篇 p61 题面、15 篇开头三例移入 14 篇、18 篇补 y、20 篇「区」→K）。
- 备查：原图 300dpi 位于 `~/.hermes/cache/a1v3/png/`（临时）；原件已归档 `书籍/分析/分析I/手写笔记/`。

## [2026-10-03] fix | 分析I 第三轮逐行复校（完成）
- 5 个子代理逐页对照原图复校 01–20 篇，共改 6 个文件：02（作业编号）、05（lim f=0、证明结束符统一 `\#`、反函数定理记号）、06（记法 4 项：`\dot f(a)`(Newton)/(常见的)）、08（CM 类、Hölder 等号、达布和记号）、09（分部积分递推、第二中值 G(c)、Iₙ 乘积夹逼、f,g∈R）、13–16（Rqp→Prop、tan 展开 x⁴、ε(u)uⁿ、商展开指标、(−1)ⁿ、Tauber/Hardy 记号、删旁注）、18（f(y)、inf 例、Picard 迭代 φ₁/φ₂）、20（删整理者括号）。
- 父代理复核后修正两处**子代理回退用户信息**的地方：14 篇分段例结论仍为小 `o(x³)`（用户确认）；14 篇末例分子为 $n(n+1)$（用户+原图双向确认），该式展开恰得 $\frac3{2n^2}$，自洽。
- 14 篇 `Snm` → `Démo`（第 4 次形近误读，同一页两处）。
- 清理整理者旁注：05:86、08:77（`f=x\sin x` 按用户"暂留原稿"回原稿 + `[?]`）、20:95、20:143。


## [2026-10-03] add | 代数 II 全年笔记入库（手写扫描件 117 页）
- 输入：`代数II.pdf`（扫描全能王手写扫描件，117 页，中文正文＋法语术语）。流程：转图 300dpi → 视觉模型批量转写（116 页成功、0 失败）→ 机械清洗（去水印）→ 按主题切 10 段 → 10 个子代理并行整理 → 父代理收尾。
- 产出：`数学/代数/代数II/笔记/` 36 篇（01–36：矩阵与线性映射 / 行列式 / K-代数与自同态约化 / 欧几里得空间 / 仿射与欧氏几何 / 等距·谱定理·对偶 / 二次型与二次曲面 / 射影几何）；`概念/` 98 个概念页；新建 `笔记/00-总览.md`；更新 `数学/代数/_索引.md`。
- 跨课程同名消歧：代数II 新建的 `对称群`、`符号差`、`行列式`、`轮换` 与代数I / 代数III 既有页同名，已全部改为带路径链接（`[[代数II/概念/…]]`），并同步修正代数I / 代数III 既有文件与索引中的裸链接（共 33 个文件）。
- 存疑点：各段子代理共报约 40 处（含少数原稿笔误/自相矛盾），待父代理逐条回原图定案后追记。


## [2026-10-03] fix | 代数 II 对照原图复校（3 子代理，完成）
- 逐篇对照原图复核 36 篇笔记 + 98 概念页，16 处 `[?]` 全部定案清零、无残留。
- 主要更正：① 11 篇 p035 例矩阵辨认错（原稿矩阵与结论 χ=(X−2)(X²−X+1) 矛盾），按原图改为 (3 5 −6; 4 7 −9; 3 6 −7)，sympy 复核；② 13 篇 p039 Δ=0 的根为 k=±2i√3（原稿漏 i）；③ 18 篇 p058 权 1/√(1−x²) 对应第一类 Chebyshev（原稿笔误写第二类）；④ 27 篇 (F⊥)⊥=F+E⊥ 的条件订正；⑤ 29 篇退化交错型标准形为辛块⊕0、ᵗM′=−M′；⑥ 20 篇 p066 按字形判读「方向 H 的定向」。
- 复核手段：sympy 逐式验算（求逆、Vandermonde、伴随矩阵、特征多项式）全部通过；格式复扫无禁用宏/emoji/断链。

## [2026-10-03] add | 概率论全年笔记入库 + 对照原图复校（手写扫描件 70 页）
- 输入：`概率.pdf`（扫描全能王，70 页，法文手写，参考 C. Deschamps / F. Moulin《Mathématiques MPSI tout-en-un》）。流程同代数 II：转图 300dpi → 视觉转写（69 页成功、0 失败）→ 清洗 → 切 7 段 → 7 子代理并行 → 父代理收尾 → 4 子代理对照原图复校。
- 产出：`数学/概率/概率论/` 24 篇笔记（01–24：Ch.1 集合与计数 / Ch.2 概率空间 / Ch.3 离散随机变量 / Ch.4 大数定律与中心极限）+ 52 个概念页（法文命名）+ `00-总览.md`；更新 `数学/概率/_索引.md`。
- 整理期修正：合并重复概念页（`continuite-des-probabilites` → `continuite-de-la-probabilite`）；笔记文件名统一为 ASCII 连字符；frontmatter title 统一为「概率论 · NN 法文标题」。
- 复校修正：02 篇补漏字 $u^{-1}$；05 篇删原稿划掉的 dénombrable；07 篇删与 08 重复的连续性节（陈述唯一保留于 08）；11 篇补入原漏收的 p028 下半页（Ch.3 开头：可测函数与 v.a.）；概念页 `tribu`/`tribu-engendree` 标题「部落」误译改「σ-代数」。
- 原稿笔误（笔记已取正确形式）：p004 引理域 ℕ*、p036 二项分布区间与参数、p054 Lᵖ⊆Lʳ 方向、p057 高斯/几何/泊松方差、p060 引理 g(t)。
- 归档：`概率.pdf` → `书籍/数学专业书籍/概率论/`；`代数II.pdf` → `书籍/代数/代数II/手写笔记/`；下载目录已清空。中间产物（转写稿、300dpi 页图）已删。


## [2026-10-03] fix | 两门课笔记补篇文章概念链接段（用户指出笔记与概念页脱节）
- 概率论 24 篇笔记原有 0 个 wikilink、代数 II 有 10 篇缺篇末概念链接段，导致概念页在 Obsidian 里无 backlinks、显得孤立。
- 按既有约定（代数 I 66/66 篇的 `## 相关概念` 段）补齐：代数 II 10 篇 + 概率 24 篇，共 316 个概念页链接（代数 II 183、概率 133），0 断链、无重复段。
- 概率笔记沿用同课概念页的法语段名 `## Voir aussi`；跨课程同名概念页（行列式等）用带路径链接。
- 已把「笔记篇末须有概念链接段」写进 skill math-notes-transcription。


## [2026-10-03] fix | 全库笔记 ↔ 概念页双向互链（用户要求回溯旧文件）
- 笔记 → 概念页：摸底发现代数 III(0/15)、分析 I(5/20)、分析 II(0/12)、分析 III Fourier(0/9)、点集拓扑(0/4) 均缺篇末概念链接段 → 5 个子代理补齐 **60 篇**（全部链接校验存在、跨课程同名用带路径）。
- 概念页 → 出处笔记：利用「笔记篇末段已链概念页」做**逆向映射**自动生成（零额外 API），**526/530** 个概念页加了 `## 相关笔记`（中文课程）/ `## Notes du cours`（概率）节，列出引用它的笔记。剩 4 个为学习路径/元页面（正文本已引用笔记）。
- 14 个「概念页比笔记段更细」的漏链（分析 I 级数判别法 9 个 + 常数变易法、代数 I 对称多项式/高斯整环/多项式的赋值/幂零根）已补进对应笔记的段里，从而获得出处。
- 校验：全库断链 0（log.md 内的历史记录链接与已存在的 .svg 附件除外）；各课程笔记篇末段覆盖 100%。


## [2026-10-03] add | 全库概念页跨课程/跨学科互链（用户要求）
- 用户指出「不同学科之间相关的概念也应该有链接」（例：物理伽利略时空 ↔ 代数仿射空间）。全库摸底：558 个概念页（含物理/理论力学 28 个**平铺**页），原有跨课程链接仅 **88 条**（涉及 73 页）。
- 12 个子代理分两批按课程分片处理（每个只改自己那批页，避免并发写冲突）：批次 1 = 物理 28 + 代数 II 98 + 分析 I 105 + 概率 52 + 分析 II 41 + 分析 III(Fourier+点集拓扑) 40 + 代数 III 19 + 代数 I 前 60；批次 2 = 代数 I 61–175。
- 结果：跨课程/跨学科链接 **88 → 741 条**（434/558 页）；全库断链 0、段内重复 0、无 emoji。
- 主要连接：物理「最小作用量原理 / 最速降线 / 欧拉-拉格朗日方程」↔ 分析 I「最速降线与 Euler-Lagrange 方程」/「变分」；「伽利略群」↔ 代数 II「正交群 / 等距变换 / 半直积」；「仿射空间」↔「参照系 / 卡氏方程」；「测地线方程」↔「弧长参数化 / 曲率」；概率 `fonction-caracteristique`、`theoreme-central-limite` ↔ Fourier「傅里叶变换 / Plancherel 定理」；Fourier「L² 与 Hilbert 空间」↔ 代数 II「数量积 / 正交族 / 谱定理」；概率 `tribu` ↔ 点集拓扑「拓扑空间」；概率 `inegalites-lp` ↔ 分析 I「Hölder / Minkowski 不等式」；`coefficient-binomial` ↔ 代数 I「二项式定理」。
- 判据「不硬凑」：无真正跨课程对应（如代数 I 的「幺半群 / 整除 / p 进赋值」、代数 II 的「Desargues/Pappus/Pascal 定理」）的页面保持 0 条。
- 已把「跨课程/跨学科互链」写入 skill math-notes-transcription。

## [2026-10-04] fix | 补掉全库残留的歧义链接与数学记号误判

- 用户读《纤维积》相关页时发现仍有歧义链接。全库复查（765 篇、约 6000 个 wikilink）：真歧义 **1 处**、
  真断链 **0 处**、数学记号误判 **4 处**。
- `数学/代数/代数II/概念/正交群.md`：裸链 `[[群]]` 在代数 I/III 各有同名页（Obsidian 解析到不确定的一个）
  ⇒ 改 `[[代数I/概念/群]]`。上一轮消歧（167 处）与代数 II 入库那轮（33 文件）都漏了这页。
- 形式幂级数 `$K[[X]]$` 会被 Obsidian 当 wikilink（点一次就生成空页 `X.md`）⇒ 按既有约定改 `$K[\![X]\!]$`：
  `代数II/概念/K-代数.md`（2 处）、`代数II/笔记/09-K-代数与极小多项式.md`（2 处）。
- 复查脚本的正确写法（要剥行内代码、区分路径式/裸名、数学记号单独归类）已补进 skill
  wiki-writing-conventions 的 `references/vault-hygiene-and-git.md`。验收口径：真歧义 0 / 真断链 0 / 数学记号 0。

## [2026-10-04] fix | 消掉「nvim 侧二义」这一整类：概念名与讲义笔记 H1 撞车

- 用户报代数索引里 映射/序关系/多项式环/族/根与重数/有理分式 各指向 ≥2 个文件。Obsidian 里看不出问题，
  差在解析规则：obsidian.nvim 按 `Note.reference_ids = {id, 标题(取 H1), 文件名, stem, aliases}` 匹配，
  而这些概念名同时是同名讲义笔记的 H1（`05-映射.md`、`07-族.md` 等）⇒ 每个词有两个 exact match，
  nvim 会弹候选列表或直接选错文件（实测 `resolve_note("映射")` 返回 `笔记/正课/05-映射.md`）。
- 处置：43 个文件 53 处裸链 → `[[代数I/概念/…]]`（保留别名与锚点），Obsidian 显示不变。提交 `6abcf44`。
- 复查脚本升级为技能自带脚本 `wiki-writing-conventions/scripts/check_wikilinks.py`：一次扫四类
  （裸链二义 / 路径链接二义 / 断链 / 数学记号误判），本次全库 766 篇结果 **0/0/0/0**。

## [2026-10-04] add | 伽罗瓦群.md 新增 §4「通式：为什么一般 n 次方程的伽罗瓦群是 S_n」

- 起因：用户复习时追问「为什么一般五次方程的伽罗瓦群是 $\mathfrak S_5$」——这是线 A 终点链
  （A5 单 ⇒ 不可解 ⇒ 五次无根式解）里被滑过去的一环。
- 新增内容：通式的定义（$K=\mathbb Q(s_1,\ldots,s_n)$、根在 $K$ 上代数无关、$K$ 即对称部分）；
  两条论证（按 §1 定义直接读 / 数次数 $n!$，实质是对称多项式基本定理）；
  与 §2 的 $C_4$ 例子对照（「一般」= 群最大，特殊关系压缩群）；「无根式解」的准确含义
  （不存在统一根式公式；只需一个 $\mathfrak S_5$ 的例子如 $X^5-6X+3$）。

## [2026-10-04] fix | 预览编译全库排查：模板补齐 + 6 篇笔记的行内公式边界

起因：用户报 `A5单性与60阶群` 无法编译预览，并要求排查库里同类问题。
- 根因在**预览模板** `~/.local/share/pandoc/templates/mathwiki.tex`（不是笔记内容）：
  ① 漏抄 pandoc 默认模板的表格导言区 ⇒ **凡含 markdown 表格的笔记全部编译失败**
     （`Environment longtable undefined` / `No counter 'none' defined`：需 longtable + caption + `\newcounter{none}`）；
  ② 缺 `\xeCJKsetup{CJKmath=true}` ⇒ 公式里夹的汉字（如 `$\|余项\|^2$`）在 PDF 里显示为空白；
  ③ Noto Serif 缺 `⟹ → ① ② ↔ ≠ ≤ ∞ ⇔ ⊂ …` 等字形 ⇒ 用 `newunicodechar` 映射到 LaTeX 宏；
  ④ 笔记里用到的 `\llbracket/\rrbracket`（stmaryrd，3 篇）与 `\mapsfrom`（1 篇）LaTeX 默认没有 ⇒ 模板里提供。
- 笔记侧：6 个文件共 16 处 `$...$` 因「闭 `$` 前有空格」没被 pandoc 当公式（如 `$A = $`、`$\sigma = $`，
  渲染成字面美元符；其中一处还会连带编译报错）⇒ 收窄公式边界后正常，语义未变。
- 排查/验收脚本（已随技能保存）：`nvim-config/scripts/check_pdf_compile.py`（全库试编译：失败 + 缺字）
  与 `find_bad_math.py`（找没被解析的 `$...$`）。
- 验收：全库 763 篇（排除 `log.md`/`wikilinks.md`/`templates/`）→ **0 编译失败、0 缺字**；改动 6 篇 rc=0。

## [2026-10-04] add | 群论的目的与历史.md 新增 §4：陪集与正规子群的概念/术语来历（含出处）

- 起因：复习第 1 站时用户问「历史上先有陪集还是先有正规子群」，并要求查实。
- 查证结果（源：Wussing 引 Galois 1832 致 Chevalier 信；MacTutor；Wikipedia Coset / Normal subgroup / History of group theory）：
  概念上两者同段出现——Galois 的「décomposition propre」= 左右陪集分解重合；术语「co-set」首见于 G. A. Miller 1910；
  系统化经 Jordan 1869/1870 → Hölder 1889（商群标准形式）→ Weber/Burnside 教科书。
  仍未坐实：德语 Normalteiler 一词的首用者（已标 [?] 并留了两条查证线索）。
- 本节含一处术语陷阱：英语 distinguished subgroup ≠ 正规子群（= 严格特征子群）。

## [2026-10-04] add | 群论的目的与历史.md 增补「群论发展史」年表（第 0–4 幕）
- 起因：用户要求「好好讲讲数学史」（并明确不必再重复正规子群这类基本概念）。
- 内容：1545 Cardano/Ferrari → 1770 Lagrange 预解式 → 1799 Ruffini → 1824 Abel → 1830–32 Galois（含决斗前夜致 Chevalier 的信）
  → 1842/46 Liouville 发表遗稿 → 1854 Cayley 抽象群定义（当时无人响应）→ 1862/1872 Sylow → 1869/70 Jordan 教科书
  → 1872 Klein → 1882 von Dyck → 1880s–90s Dedekind/Weber/Hölder → 1897 Burnside/Frobenius → 20 世纪单群分类。
- 查证源：Wikipedia（Galois / Lagrange / Cayley / Sylow / History of group theory）、MacTutor。

## [2026-10-08] add | 代数 III 习题课新增 07-半直积的等价定义与同构判别（讲义 §1.3）

- 起因：用户把 2026-10-08 的半直积讲义放进下载目录，要求整理进代数 III 习题课笔记；讲义 PDF 已归档到 `/mnt/e/书籍/代数/代数III/习题课讲义/`（md5 核对一致）。
- 内容：内部判别法与标准定义的等价（含坐标乘法）；五个典型例子（直积、二面体群、Borel 子群、$pq$ 阶群、仿射群）；短正合列的截面、命题「分裂的短正合列就是半直积」；相容同构判别（允许两端分别经自同构，含 $\operatorname{Aut}(N)\times\operatorname{Aut}(H)$ 在 $\operatorname{Hom}(H,\operatorname{Aut}(N))$ 上的轨道解释）与它的适用边界；线性作用下的推论（$\mathrm{GL}_n(\mathbb{F}_q)$ 中共轭到幂次）；改变截面与 $1$-余循环、全形群的拉回图；末附五道习题（判断题、$S_4$、分类 $C_p\rtimes C_2$、$21$ 阶群、2015 丘赛团体赛）。
- 流程：候选稿先在 vault 外写（`~/.hermes/cache/scratch/`）并跑完链接/公式/自然度检查，再由无上下文子代理独立评审（数学断言、两处交换图箭头逐条核对）；依其意见把命题 7.10 的证明移出 callout、删去与系列不一致的 `sources:` 字段、外文括注统一为英文。
- 小节编号按本篇重排为 7.1–7.4，讲义原编号保留在 callout 标题的括注中；新笔记已进 `习题课/00-总览.md`。

## [2026-10-08] update | 半直积.md 概念页补充同构判别、线性作用推论与 Borel 例子

- 起因：用户要求这类可复用内容**直接补进概念页**，不必再问。
- 增补：① 同构判别「同时改变两端的坐标」（$\varphi_2(\beta(h))=\alpha\circ\varphi_1(h)\circ\alpha^{-1}$、$F(n,h)=(\alpha(n),\beta(h))$，并给出 $\operatorname{Aut}(N)\times\operatorname{Aut}(H)$ 在 $\operatorname{Hom}(H,\operatorname{Aut}(N))$ 上的**轨道 = 固定两端的同构类**这一说法）；② 警告：该判别只是「保两端（正规部分与截面）」同构的充要条件、抽象同构的充分条件；③ 推论：线性作用下的判别 $G_M\cong G_{M'}\iff AMA^{-1}=(M')^k$；④ 例子：Borel 子群 $B_n(K)=U_n(K)\rtimes T_n(K)$；⑤ `相关笔记` 加代数 III 07 篇的回链，frontmatter 的 `updated`/`sources` 相应更新。
- 既有段落一字未动（`git diff` 仅 23 增 2 删，删的是 frontmatter 两行）；链接/自然度检查与 `$$` 配对复核全过。
- 另：正课 TD `Exercices USTC Octobre 2026.pdf` 复制进 `/mnt/e/书籍/代数/代数III/TD/`（md5 核对一致），**下载目录保留副本**——用户还没写完，直接从下载打开。

## [2026-10-19] update | 全库记号统一 + 记号约定页 + 概念地图同步

- 起因：扫描档转写出的笔记里同一对象并存多种写法（代数III 一篇内 `\mathrm{GL}`/`GL`/`\text{GL}`/`\mathcal{GL}` 四种），用户要求制定标准、同一门课内统一，并尽量贴合法国书籍习惯。
- 标准：新增 `共享/记号约定.md`（人读，脚本生成）与技能里的 `notation-rules.json`（机器，唯一规则源）。要点：经典群 `\mathrm{GL}_n(K)`、`\mathfrak{S}_n`/`\mathfrak{A}_n`、`\operatorname{Aut}`/`\operatorname{Hom}`、`\ker`/`\operatorname{Im}`、`\mathrm{Id}`、`\operatorname{Vect}`、`\operatorname{Card}`、转置 `{}^{t}A`、自然常数 `\mathrm{e}` 正体（虚数 i 保持斜体）。分课差异（Z vs C、D_{2n} vs D_n、两套换位子、代数II 的对称矩阵 \mathcal{S}_n(K)、力学离心率 e）登记在同一页第 2 节。
- 迁移：按课程分批 commit（代数III、代数I/II、分析I/II/III 与概率论与理论力学），共修正 1300 余处写法；`check_notation.py --check` 现全库 0 违规。
- 概念地图：修复 4 个陈旧/漏链的地图文件（点集拓扑学习路径与其概念页索引补 `开映射`、`处处满射函数`；傅里叶学习路径与其概念页索引补 `傅里叶级数入门`；理论力学索引与变分法学习路径 bump）。新增 `check_concept_sync.py` 与地图登记表，查陈旧、未登记、孤儿页。
- 未完成（下一步）：`群论学习路径` 重写与代数III 概念页补页同步进行中。

## [2026-10-19] add | 代数III 概念页补 10 页；群论学习路径重写

- 起因：概念页落后于讲解，`群论学习路径` 停在 09-08。用户要求「讲义入库/讲解之后必须同步概念页与地图」并写进技能（已落 `wiki-writing-conventions` §6 与 `math-coach` 沉淀机制）。
- 新增（`数学/代数/代数III/概念/`）：`有限阿贝尔群结构`、`特征标与正交关系`、`小阶群分类`、`四元数群`、`线性群与特殊线性群`、`PSLn单性`、`Frobenius标准型`、`Borel子群与旗簇`、`Bruhat分解`、`Weyl群`。每页只写概念（定义/动机/证明要点/陷阱），题号与题目数值不入页。
- 跨课不重复建页：`半直积`、`正合列`、`单位群`、`欧拉函数`、`四元数`、`Jordan标准型` 已在代数I/II 有页，学习路径与索引改为跨课链接。`Jordan 约化与不变因子` 与代数II 的 `Jordan标准型` 同题，未单独建页，内容并入 `Frobenius标准型` 的对照段。
- 重写 `群论学习路径`：改为「线 A 拆群 / 线 B 显形 / 汇合点」两线结构，覆盖讲义第 1–9 章与习题课两条入口，末尾附全部 28 个概念页的一句话清单。
- `数学/代数/_索引.md` 同步新增 12 条（含跨课 2 条）。
- 校验：`check_wikilinks` 0、`check_notation` 0、`check_concept_sync` 0、`lint_natural_chinese` 0。

## [2026-10-19] fix | 代数III 正课两处数学错误更正 + 导群记号统一 + Jordan 页补换算

- 记号：`\mathcal{GL}/\mathcal{SL}` → `\mathrm{GL}/\mathrm{SL}`；`\mathcal{D}` → `\mathfrak{D}`（导群 118 处，代数课程内统一），约定页与技能里的标准表同步重生成。
- 更正 08 讲「Corollaire」：原稿把生成元写反（平延行列式为 1，只生成 $\mathrm{SL}_n$；$\mathrm{GL}_n$ 还须加对角伸缩），已在原处改正并加警告框。
- 更正 08 讲 Prop (*)：原稿作 $\mathfrak{D}(\mathrm{GL}_2)\simeq\mathfrak{D}(\mathrm{SL}_2)$，与紧随的 $\mathfrak{D}(\mathrm{SL}_2)\simeq\mathbb{H}_8$ 及证明矛盾；改为 $\mathfrak{D}(\mathrm{GL}_2(\mathbb{F}_3))\simeq\mathrm{SL}_2(\mathbb{F}_3)$。
- 更正 06 讲「exposant」定义：原稿作 pgcd，应为 ppcm（含幺元时 pgcd 恒为 1），已在原处改正并加注。
- `代数II/概念/Jordan标准型.md` 补「与不变因子的换算（代数III 视角）」一节（$\delta_k$ 跳维数、块大小 ↔ 初等因子 ↔ 不变因子），链到 `Frobenius标准型`。

## [2026-10-21] add | 代数III 习题课 08–10；理论力学 振动与线性代数准备

- 代数III 习题课新增三篇：`08-对称群的生成元与An的共轭类`（2026-09-24 练习：相邻对换生成、Coxeter 关系与 von Dyck、$\mathfrak A_n$ 共轭类分裂、$\operatorname{Out}(\mathfrak S_n)$）、`09-有限Abel群的结构定理`（2026-10-12 讲义：存在性与唯一性两条主线、17 道习题的证明要点）、`10-单位群的结构`（2026-10-15 练习：$p$-进对数/指数、$p$ 奇与 $p=2$ 两种结论）；`00-总览` 接号。
- 理论力学新增五页：`Dirac符号与对偶空间`、`共轭算符与对称算符`、`二次型与广义本征值问题`、`微振动与简正模`、`参数共振`；`_索引` 新增「振动与线性代数准备」组。
- `轨道方程与比内公式` 补「各向同性振子」一节（椭圆中心在力心、等时性、$\omega_r=2\omega_\theta$ 与轨道闭合）。
- 概念页补：`有限阿贝尔群结构` 加「按层计数 $b_k$ 与嵌入判据」「内射（可除）群与分裂判据」；`对称群` 加「$\mathfrak A_n$ 共轭类分裂判据」「$\operatorname{Aut}(\mathfrak S_n)$ 与 $n=6$ 例外」；`群论学习路径`、`变分法学习路径` 同步。
- 检查：wikilinks 0 处、notation 0 处、concept_sync 0 问题、natural-chinese lint 0 命中。

## [2026-10-21] add | 分析III 点集拓扑：§4–§6 概念页与 TD 04/05

- 新增概念页 `乘积拓扑`、`紧性`、`连通性`、`道路连通`（讲义 2026-10-14 版 §4–§6，正文到 §6.2）。
- 新增习题课目录 `点集拓扑/笔记/习题课/`：`00-总览`、`04-紧性`（TD 04，13 题）、`05-连通性`（TD 05，9 题），按 Exercice 编号整理要点。
- 同步 `点集拓扑/笔记/00-总览`、`04-概念页索引`、`点集拓扑学习路径`（进度改 §1–§6.2）、`分析III/_索引`；地图类登记表加入新的习题课总览。
- 资料归档（不在 vault）：`书籍/分析/分析III/点集拓扑/TD/topo_td_04.pdf`、`topo_td_05.pdf`；ENS Paulin 法文讲义 `topo_ens.pdf`（322 页）放 `点集拓扑/`。
- 检查：wikilinks 0 处、notation 0 处、concept_sync 0 问题、natural-chinese lint 0 命中。

## [2026-10-21] fix | 撤销点集拓扑 TD 笔记，只保留概念页

- 用户要求：分析III 的 TD 不整理成笔记，建概念页即可。已删 `点集拓扑/笔记/习题课/`（00-总览、04-紧性、05-连通性），清掉 `笔记/00-总览`、`04-概念页索引`、`点集拓扑学习路径`、`分析III/_索引` 中的引用，并撤出地图类登记表。
- 保留 `乘积拓扑`、`紧性`、`连通性`、`道路连通` 四个概念页（内容取自讲义 §4–§6）。TD 04/05 PDF 仍在 `书籍/分析/分析III/点集拓扑/TD/` 归档。

## [2026-10-21] add | Rosso 讲座（Schur-Weyl / Hecke / 范畴化）笔记与两页概念

- 讲座笔记 `代数III/笔记/讲座/2026-10-21-Rosso-Schur-Weyl与范畴化.md`：六页手写笔记按主题整理（Bruhat 分解与双不变函数→Hecke 代数 Iwahori 关系；Schur-Weyl 分解 $V^{\otimes n}=\oplus S^\lambda\otimes V_\lambda$；对称函数 $m_\lambda/s_\lambda$、$\Delta$、LR 系数；$\bigoplus R[\mathfrak S_n]\to\Lambda(x)$ 的 Hopf 同构＝范畴化的第一个例子；$\mathcal H_q$ 与 $U_q(\mathfrak{gl}_d)$ 的量子 Schur-Weyl），附讲解、最小例子（$d=2,n=2$）、术语表与不确定处 `[?]`。
- 新增概念页 `Schur-Weyl对偶`、`Hopf代数`（代数III/概念），`群论学习路径` 概念清单与 `正课/00-总览`（新增「讲座」组）同步。
- 归档（不在 vault）：`书籍/代数/代数III/讲座/Rosso-2026-10-21-Schur-Weyl讲座笔记.pdf` 与讲座海报 jpg；新一批 39 页手写正课笔记 `手写笔记/2026-10-21-正课手写笔记.pdf`。
- 检查：wikilinks 0、notation 0、concept_sync 0 问题、lint 0 命中。

## [2026-10-21] add | 代数III 正课手写笔记（39 页，2026-10）并入：笔记 10–14

- 新一批手写法文正课笔记 39 页（`书籍/代数/代数III/手写笔记/2026-10-21-正课手写笔记.pdf`）视觉转写后整理为五篇：
  `10-循环自同态的刻画与Frobenius-Jordan对应`（交换子/有限多稳定子空间/bicommutant/Frobenius↔Jordan/Young 型对齐）、
  `11-半双线性形式与Hermite型`（半线性映射、Hermite 对称、非退化、正交关系对称 ⟺ $\varphi=\lambda\psi$、极化恒等式、标准形与 signature）、
  `12-正定形式伴随与正规算子`（Cauchy–Schwarz、范数、伴随、正规算子五等价、Hermite/反 Hermite/酉、正交投影与对称、Gram–Schmidt）、
  `13-酉群极分解与min-max`（QR、$U_n/SU_n$、中心、紧、道路连通、正平方根、极分解、极大紧子群、同时化、Courant–Fischer、Gram 矩阵）、
  `14-张量积的万有性质与两个群论练习`（$n!\mid|\mathrm{GL}_n(\mathbb F_p)|/(p-1)^n$ 用正规化子、$G\times H\simeq G\times H'\Rightarrow H\simeq H'$、张量积万有性质）。
- 新增概念页 `Hermite型与Signature`、`酉群与极分解`；`代数II/概念/伴随自同态` 补「复 Hermite 情形与正规算子」一节（跨课程同一页）。
- 转写修正（原稿笔误，均在原处留 warning/注记）：$P_2\mid\gcd(P,1-P)$ 的写法、极化恒等式漏 $h$、Cauchy–Schwarz 中 $\lambda=te^{-i\theta}$、prehilbertien 定义、Courant–Fischer 的下标偏移、$\mathrm{GL}_n(\mathbb Z/2)$ 应为 $\mathbb Z/p$、$U_n$ 中心证明中 $My=y$ 应为 $uy=y$、Gram–Schmidt 一般步的求和。
- 检查：wikilinks 0、notation 0、concept_sync 0 问题、lint 0 命中；转写稿与 300dpi 图已在收尾时清除（PDF 在资料库可复现）。

## [2026-10-21] fix | 代数III 10–14 篇：删去笔误标注（笔误直接改）、补入 p13 重拍页

- 用户要求：原稿笔误**直接改掉、不在页内标注**。已删除 10–14 篇中全部 `[!warning] 原稿…` / `[!info] 注记（原稿…）` 块（共 9 处），保留改正后的数学；页内不再出现「原稿写作 X」这类整理痕迹。
- p13（半双线性形式页，原扫描失焦）用户已重拍，据此补齐 `11-半双线性形式与Hermite型` 的 §6 Orthogonalité：$A^\perp$ 定义、$\dim V^\perp=\dim E-\dim V$ 及零化子证明、$(1,1)$ 迷向反例、迷向/非迷向子空间、$V$ 非迷向 $\Rightarrow E=V\oplus V^\perp$、三条正交补性质。该页不再有 `[?]`。
- 重拍件归档：`书籍/代数/代数III/手写笔记/2026-10-21-正课手写笔记-p13重拍.jpg`。
- 检查：wikilinks 0、notation 0、concept_sync 0 问题、lint 0 命中；10–14 篇无 `[?]`、无「原稿」字样。

## [2026-10-21] fix | 讲座笔记改回按原稿整理（讲解不入笔记）

- 用户澄清：讲座笔记应**按原稿整理**，不要把他的笔记改写成讲解稿。`笔记/讲座/2026-10-21-Rosso-Schur-Weyl与范畴化.md` 已重写为六页原稿的忠实整理（英文/法文原文、公式 LaTeX 化、[?] 保留），删去此前加进去的「一句话版本」「最小例子」「为什么重要」「术语表」等解读段落。
- 讲解仍留在概念页 `Schur-Weyl对偶`、`Hopf代数`（概念页本就是讲解沉淀），不在讲座笔记里。
- 检查：wikilinks 0、notation 0、concept_sync 0 问题、lint 0 命中。

## [2026-10-21] fix | 讲座笔记全部 [?] 依原图与上下文还原

放大原 PDF（400dpi + 局部裁切）逐处核对，四处 `[?]` 与两处批注全部定案：
- p.1 `F_p-Sylow` → `∃ p-Sylow from any finite group $G\subset\mathfrak{S}_{|G|}$`（原稿写的是存在量词 $\exists$，不是 $\mathbb F_p$；配合 Cayley 嵌入读通）。
- p.4 `$R(x)=\{f,\text{degré borné}\}$：若 $\alpha_1+\cdots+\alpha_n>d$ 则 $x^\alpha=0$`；`$G_\infty=\bigcup_nG_n$`（原稿把 $\mathfrak S_n$ 记作 $G_n$，此处按标准记号写成 $\mathfrak{S}_\infty=\bigcup_n\mathfrak{S}_n$），故 $\Lambda(x)=R(x)^{\mathfrak{S}_\infty}$。
- p.5 $\Delta m_{(2,1)}$ 展开补全为 $m_{(2,1)}(x)+m_{(2)}(x)m_{(1)}(y)+m_{(1)}(x)m_{(2)}(y)+m_{(2,1)}(y)$；`$R[\mathfrak{S}_n]=\mathbb Z[\text{Irr rep}]$`（方括号里是 Irr rep）。
- p.6 `enveloping algebra of $\mathfrak{g}\mathfrak{l}_d(\mathbb C)=M_d(\mathbb C)$`；$T_i$ 三支公式按原图确认（第三支 $e_l\otimes e_k+(q-q^{-1})e_k\otimes e_l$，$k<l$）。
- 用户手写的两条页内批注（关于 $m$ 与 $\Delta$、Irr rep 拼音）已删；文件现无 `[?]`。

## [2026-10-21] fix | 讲座笔记全文校对（400dpi 逐带对照原图），去掉页号

- 逐页分带重读 6 页原稿，修正上一版的实质错误：Bruhat 分解原稿作 $\mathrm{GL}_n(k)=BG_nB$（不是 $B\mathfrak S_nU$）；$\mathcal H_n$ 的定义量词是 $\forall b,b'\in B$；关系编号为 $(\star)$；$\mathcal H_n(q)$ 处原稿写 `relations (⋆)  p←q`（不是 `with p=q`）；$s_\lambda$ 的存在性原稿写 $\exists!$；余乘的"想法"是 $\mathbb N\times\mathbb N\hookrightarrow\mathbb N$，并补上 $\Lambda(x)\otimes\Lambda(y)=R(x,y)^{G_\infty\cdot G_\infty}$；$\Delta m_{(2,1)}$ 补回三行单项展开与四项合并（$m_{(2)}(x)m_{(1)}(y)+m_{(1)}(x)m_{(2)}(y)$）；$A\to\Lambda(x)$ 处补 $\lambda\in\mathrm{Part}_n$；Hecke 末段原稿作 "acts in $\mathbb C^d$" 且对偶对象写作 $\mathcal H_n(q)$。
- 删去 `## p.1`…`## p.6`，改按原稿自带的小标题分节（Symmetric/GL、Bruhat、Schur-Weyl、Hopf、Symmetric functions、realization、Quantization）；补上原稿画的余结合交换图（AMScd）。
- 用户把 `$\exists\,p$` 的 `\,` 删掉（那是 LaTeX 细空格，渲染出来像多余的空格/逗号）；按其版本保留 `$\exists p$`。

## [2026-10-21] fix | 讲座笔记：原稿花体 S 误作 G_n，全文改回 𝔖；格式对齐正课笔记

- 原稿的 $\mathfrak{S}_n$ 是花体手写，字形近似 $G$，转写时被读成 $G_n$。已全部改回：$\mathfrak{S}_n$、$\mathfrak{S}_\infty=\bigcup_n\mathfrak{S}_n$、$\mathfrak{S}_{|G|}$、$R[\mathfrak{S}_n]$、$\mathfrak{S}_i\times\mathfrak{S}_j\hookrightarrow\mathfrak{S}_{i+j}$。
- 格式对齐正课笔记 01–14：frontmatter 同款（title 前缀「代数III(群论) · 讲座」、tags 含 algebre）、正文按 `## N.` 编号分节、定义/命题/定理进 `> [!note]` callout、推导用 `**Détails.**` 正文、结尾 `## 相关概念`。
- 全库排查同类误读：其它页面的 $G_x$（稳定子）、$G_M$（半直积）、$G_i$（正合列）都是合法用法，无「花体 S 记作 G」的残留。
- 检查：notation 0、wikilinks 0、concept_sync 0 问题、lint 0 命中。

## [2026-10-21] fix | 讲座笔记能编译了：pmatrix 花括号错乱 + CD 环境改 array

- 用户报「编译不了，左右大括号没对齐」。真因两处：①三处对角矩阵被 OCR 写成 `\begin{pmatrix}t_1&&{ \\& } ;\ddots&...\end{pmatrix}`（`\\&` 与 `;` 被塞进花括号组），xelatex 报 `! Missing } inserted`；②Hopf 交换图用了 amscd 的 `\begin{CD}`，pandoc 默认模板无此宏包、Obsidian 默认包集也不带。
- 三处对角矩阵改回 `\begin{pmatrix}t_1&&\\&\ddots&\\&&t_n\end{pmatrix}`（原稿前两处确为 $t_n$、第三处为 $t_d$，照抄）；Hopf 图改为 `\begin{array}{ccc}` + `\xrightarrow` + `\big\downarrow`。行内两处对角矩阵改 `\left(\begin{smallmatrix}...\end{smallmatrix}\right)`，不再撑开行距。
- 验证：KaTeX 136 条公式 0 失败、MathJax 0 失败、pandoc→xelatex 编译通过、渲染图逐页看过。
- 编译成品放在 `/mnt/e/书籍/代数/代数III/讲座/2026-10-21-Rosso-Schur-Weyl讲座笔记-整理版.pdf`（vault 内不放 PDF）。

## [2026-10-21] refactor | 全库交换图：`\begin{CD}` 一律改成 `array`（推翻 2026-09 的「本库规范用 AMScd」）

- 12 个文件、18 处 amscd `CD` 环境全部换成 `\begin{array}{c...c}` + `\xrightarrow`/`\xleftarrow`/`\big\downarrow`/`\big\uparrow`/`\Big\Vert`/`=`。涉及：代数 I 概念（群的扩张、自由群）、习题课 08/12/25、正课 23/25；代数 III 概念（同构定理）、习题课 07、正课 01/04/05。
- 理由：`CD` 要 amscd 宏包，而 pandoc 的 LaTeX 模板不带 → 编不出 PDF（`Environment CD undefined`）。**更正上一版的说法**：Obsidian 的 MathJax 是 full bundle、确实带 amsCd（2026-10-03 已实证），CD 在 Obsidian 里一直能正常渲染，所以这不是「Obsidian 报错」而是「单端可用」—— array 是 Obsidian 与 pandoc 的双端交集。已知代价：MathJax 下 array 的竖箭头较短、不如 amscd 的连线条伸展。
- 约定：竖直箭头标签按 amscd 位置习惯放（`@V{lab}VV` 标注在左 → `{\scriptstyle lab}\big\downarrow`，`@VV{lab}V` 标注在右 → `\big\downarrow{\scriptstyle lab}`）；callout 内的图每行保留 `> ` 前缀。
- 验证：12/12 公式引擎校验 0 失败、12/12 pandoc 编译通过、6 个代表图渲染后逐个看过箭头方向与标签位置。

## [2026-10-21] refactor | 全库文字缩写展开（133 个文件，约 1200 处）

- 用户要求「所有笔记里的所有缩写都应该直接展开写，不要保留缩写」。讲座笔记先单独做（9669bf6），其余 133 个文件分 5 批并行展开。
- 展开项：Prop./Th./Thm./Déf./Théor./Lem./Cor./Rem./Rq. → 定义/命题/定理/推论/注记/引理（中文正文）或 Définition/Proposition/Théorème/Corollaire/Remarque/Lemme（法语正文）；s.t.→使得 / such that / tel que、i.e.→即 / c'est-à-dire、e.g.→例如、resp.→分别 / respectivement、ssi→si et seulement si、tq→tel que、iff→当且仅当、reps/repn→representations、f.d.→finite dimensional、h.w.→highest weight、o.n.b.→orthonormal basis、mult.→multiplication、coeff→coefficients、fcts→functions、w.r.t.→with respect to、v.a.→variable(s) aléatoire(s)（按单复数）、sev/s.e.v→sous-espace vectoriel、Démo→证明 / Démonstration、Irr rep / ind rep / Part_n→完整词。
- **callout 标签语言按文件正文语言统一**（去掉公式后中文占比 >15% 判为中文笔记）：子代理首批出现的「中文正文却用 Définition」混排已全部纠正（18 个文件、220 处再统一）。
- **保留项**（判为记号或通行写法，不是文字缩写）：`\iff` 等 LaTeX 命令；etc.；p.s.（presque sûrement）、i.i.d. 两个统计学标准记号；以及「解释缩写本身」的句子（`(if and only if，iff；si et seulement si，ssi)`、`condition nécessaire et suffisante (CNS)`）。
- 验证：133 个文件公式引擎校验全部 0 失败；check_notation 0 违规；check_wikilinks 0 问题；check_concept_sync 0 问题；git diff 增删行数相等（纯行内替换，无结构变动）。
- 2026-10-22 讲座史线：新建 `代数III/概念/表示论简史.md`（Schur–Weyl 线的年表 1890–1999，逐条标出处；三处不可靠处标注：Gordan 的「神学」引文、双中心化子的措辞、$S_\infty$ 属现代框架）。核实用一手源：MacTutor Frobenius 传记（1896-07-16 柏林科学院、与 Dedekind 1896-04-12 起的通信、1898 Frobenius 互反、Schur 是 1901 博士生）、Wikipedia Schur–Weyl duality/Bruhat decomposition/Categorification/Nagayoshi Iwahori/Michio Jimbo、zbMATH 的 Rosso 著作表（1988 CMP 量子群最高权定理、1989 PBW 与 universal R-matrix）。讲座笔记页与 Schur-Weyl 页互链、索引补 4 条（含此前漏登的 Schur-Weyl/Hopf/讲座入口）。用户 2026-10-22 明确：讲座深层机制「一时讲不清楚就算了」，历史只讲到第四幕（Bruhat/Hecke）即收，不要再主动展开量子群与范畴化。

## [2026-10-22] fix | 表达层清理：14 处模板句与英译腔改为直陈（lint_natural_chinese 归零）

- 用户要求「直接改掉」自然中文 lint 的 14 处提示：11 处「本质上是」、1 处「从来不是……而是」、1 处「使……成为可能」、1 处「本节的目的是」。
- 改法：能直接说关系的就去掉包装（「行列式就是『对每一列都线性、且交错』的多重线性函数」、「群表示就是群代数上的模」、「『是不是内点』是相对拓扑的概念」、「Weyl 判据就是测度的 Fourier 唯一性命题」）；需要判断语气的改写断（「史书把一般线性群的出现归到这一步」替代「史书说这一步使一般线性群成为可能」；「Galois 手上没有抽象群，只有根集上的置换」替代「从来不是……而是」）。
- 验证：lint_natural_chinese 0 处 / 804 文件；check_notation 0 违规 / 803 文件；check_concept_sync 0 问题 / 25 登记项；check_wikilinks 0 问题。git diff 为 14 个文件各 1 行替换，无结构变动。

## [2026-10-22] update | 两套标准型的落点：整除链是对齐的产物、Jordan 块的模论来源

- 代数III 标准型复习的三处结论落盘（对话推导，未新增题号与数值例）。
- `代数III/概念/Frobenius标准型.md` 增两条：整除链 $P_r\mid\cdots\mid P_1$ 是初等因子按列对齐、逐行相乘的结果，不是结构定理之外的附加条件；域无关性落在不变因子这一层——扩域只改变不可约分解，初等因子随域变而变，不变因子不变，故相似性不随扩域改变。
- `代数II/概念/Jordan标准型.md` 增一条：Jordan 块 $\lambda\,\mathrm{Id}+N$ 就是 $k[X]/((X-\lambda)^k)$ 上「乘 $X$」的矩阵，即初等因子 $(X-\lambda)^k$ 对应的循环块；域上分裂时循环块全变成 Jordan 块。
- 验证：check_notation 0 违规 / 803 文件；check_concept_sync 0 问题 / 25 登记项；check_wikilinks 0 问题；lint_natural_chinese 0 处 / 2 文件。

## [2026-10-27] ingest | 下载批次整理：分析III 讲义 73 页版、代数III 初等方阵与循环分解、理论力学作业八

- 资料库归档（`/mnt/e/书籍`）：`分析III/点集拓扑/sofar.pdf` 换成 2026-10-21 版（73 页，覆盖 §1–§9.1，替换 10-14 版 56 页）；`分析III-作业合集` 换成第 1–7 周（替换第 1–6 周）；`代数III/习题课讲义/` 入 `2026-10-20_初等方阵`、`2026-10-22_循环分解`、`2026-10-23作业`；`理论力学/作业/hw8-2026`。`~/下载` 已清空。
- 点集拓扑：新增章级笔记 05–09（连通分支与道路连通、分离性与可数性、Urysohn/Tietze、商拓扑、无穷乘积拓扑）；新概念页 [[连通分支]]、[[分离公理]]、[[可数性公理]]、[[Urysohn引理]]、[[Tietze扩张定理]]、[[商拓扑与商映射]]、[[无穷乘积拓扑]]。`_索引`、笔记 `00-总览`、`04-概念页索引`、`点集拓扑学习路径`、`分析III/_索引` 同步到 §9.1。
- 代数III：习题课笔记 11（初等方阵与 $\mathrm{SL}_n$ 的生成，13 题）、12（循环分解与不变因子，5 题）；新概念页 [[Smith标准形]]、[[主同余子群]]；[[Frobenius标准型]] 补「子空间与商仍循环」「交换子维数公式」「升序/降序两种排法」；[[线性群与特殊线性群]] 补「环上的平延」。习题课 `00-总览` 与 `群论学习路径` 同步。
- 验证：check_wikilinks 0 处；check_notation 0 违规（102 文件）；check_concept_sync 0 问题（25 登记项）；lint_natural_chinese 0 处（25 文件）。

## [2026-10-29] ingest | 代数III 循环分解（存在性证明 + Jordan 计算）与点集拓扑口试题带出的四个概念

- 资料库归档（`/mnt/e/书籍`）：`代数III/习题课讲义/` 入 `2026-10-27_循环分解2`、`2026-10-27_循环分解证明`；`分析III/点集拓扑/TD/` 入 `topo_oral_part1` 与其中文解答。`~/下载` 已清空，bookdex 增量已跑（4 本，tier 3，文本层直达，无需 OCR）。
- 代数III：新增习题课笔记 13（有限 Abel 群八步链 + $k[x]$ 类比表）、14（Jordan 型计算流程、扩域/转置相似、$\operatorname{ad}_A$、单值化权滤过）；新概念页 [[Jordan-Chevalley分解]]；[[有限阿贝尔群结构]] 补 $\mathbb Q/\mathbb Z$ 版本、[[代数II/概念/Jordan标准型]] 补计算与 Jordan 基。习题课 `00-总览`、`群论学习路径` 同步。
- 点集拓扑：新概念页 [[余有限拓扑]]、[[箱拓扑]]、[[Hausdorff距离]]、[[Hilbert立方体]]；[[分离公理]] 链到余有限拓扑、[[可数性公理]] 补「紧度量空间可分」、[[紧性]] 补「完备 + 全有界」、[[无穷乘积拓扑]] 链到箱拓扑。`_索引`、`04-概念页索引`、`点集拓扑学习路径` 同步。
- 说明：`分析III` 的 TD 仍不建笔记（只落概念页）。
