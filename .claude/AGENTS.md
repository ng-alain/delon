# Agent Workflow Guide

## 开发流程

### 1. 需求分析

- 先探索代码库，理解现有结构和约定
- 查看 CLAUDE.md 了解项目整体规范

### 2. 设计（必须）

**技能**: `/superpowers:brainstorming`

- 参考 NG-ALAIN.md、DEVELOPMENT.md 了解项目和编码规范
- 一次只问一个问题，提供 2-3 个方案对比并给出推荐
- 涉及 UI 时使用视觉伴侣展示方案
- 每一层逐一确认（接口层 → 组件层 → 模板层 → 样式层）
- 确认后输出设计文档到 `docs/superpowers/specs/`（不提交）
- 用户确认 spec 后才能进入下一步

### 3. 实现计划

**技能**: `writing-plans`

- 基于 spec 编写实现计划，包含文件路径、完整代码、测试代码、命令
- 保存到 `docs/superpowers/plans/`（不提交）
- 自检通过后提供给用户确认

### 4. 实现

**技能**: `subagent-driven-development`

- 一个任务一个 subagent，每个只获得它需要的上下文
- 每个任务后做两阶段 review：spec 合规 → 代码质量
- 有问题让 subagent 修复，循环直到通过
- 全部完成后做 final code review

### 5. 测试 & Lint

- 参考 TESTING.md
- 仅跑相关模块测试（`ng test --include="**/<module>/**"`），提交前跑完整套件
- ESLint 0 错误（先用 `eslint --fix`）
- `tsc --noEmit` 通过

### 6. 文档

- 参考 DOCUMENTATION.md
- 中英文同步更新（`*.zh-CN.md` / `*.en-US.md`），`demo/` 提供示例

### 7. Code Review

- 通过 GitHub MCP 查询 CI 状态
- 处理 Gemini Code Assist bot 的建议
- Lint 失败先用 `eslint --fix`

### 8. PR

- 分支命名：`feat-<package>-<feature>`
- 首次提交整理为 feat、test、docs、chore 各一个（`--fixup` + `--autosquash`）
- 后续微调直接追加，不再合并
- `docs/superpowers/`、`.superpowers/` 不纳入版本控制
- 合入在 GitHub 网站操作
