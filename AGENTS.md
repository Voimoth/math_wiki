# /mnt/e/notes 工作约定

数学与物理笔记库。git 远端为私有仓库 `math_wiki`（`git@github.com:Voimoth/math_wiki.git`），凭证走 GCM，免密；**每次变更即提交并推送**。

他以 nvim 阅读（obsidian.nvim + render-markdown，配置见 skill nvim-config）；页面语法仍按 Obsidian 的 callout 与 frontmatter。

## 铁律

- 概念页只写概念：不夹题号，不夹题目数值。
- 一概念一文件。
- 理论力学的概念页平铺，不建层级。
- 不用 emoji。
- 目录与记号约定以 skill wiki-writing-conventions 为准，动笔前先加载。

## 改写纪律

- 他会直接改页面。改写前先 `git diff`，把「他的改动」和「插件重排」分开，不覆盖他的内容。
- 提交历史条目不回溯修改。
- 转写他人笔记严格按原稿：笔误直接改，不留「原稿作 X」式注记，不掺讲解、例子、术语表或自创结构。

## 改完必须跑的检查（四项都为零）

脚本在 skill `wiki-writing-conventions/scripts/`：

- `check_notation.py`
- `check_concept_sync.py`
- `check_wikilinks.py`
- `lint_natural_chinese.py`

## 不写进这里的东西

- 答疑讲解不塞进概念页；辅导进度写 `共享/辅导进度.md`（唯一账本，技能里只留指针）。
- 应付学校任务的材料不入库。
