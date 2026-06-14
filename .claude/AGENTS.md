# Agent Workflow Guide

## 开发流程

先判断任务类型：
- **完整路径**：新功能、UI 变更、API 设计、破坏性变更
- **轻量路径**：重构、迁移、修 Bug、内部优化

### 1. 需求分析
根据 Issue 或用户描述理解问题，探索相关代码，理解结构和约定。查看 CLAUDE.md、NG-ALAIN.md、DEVELOPMENT.md。

### 2. 设计
确定变更方案，用户确认后进入实现。

| 路径 | 做法 |
|------|------|
| **完整路径** | 调用 `/superpowers:brainstorming`，逐层确认（接口→组件→模板→样式），输出 spec 到 `docs/superpowers/specs/`（不提交），调用 `writing-plans` 写实现计划 |
| **轻量路径** | 直接说明改什么、怎么改，⏸ 等待用户确认 |

### 3. 实现
完成代码变更。

| 路径 | 做法 |
|------|------|
| **完整路径** | 调用 `subagent-driven-development`，每任务两阶段 review（spec 合规 → 代码质量），循环直到通过 |
| **轻量路径** | 修 Bug 时先写回归测试（**测试描述带 Issue #**）→ 确认失败 → 写修复代码 → 确认通过；其余场景直接实现后自检 |

### 4. 测试 & Lint
- 参考 TESTING.md，仅跑相关模块测试（提交前跑完整套件）
- ESLint 0 错误 + `npx tsc -p packages/tsconfig.json --noEmit` 通过

### 5. 文档
参考 DOCUMENTATION.md。先判断是否需要：
- 新增组件/功能/属性 → 需更新
- 内部重构/修 Bug → 一般不需要
需要时中英文同步更新，`demo/` 提供示例。

### 6. Code Review
**Agent 完成**：查询 CI 状态确认通过

**人工审查（逐项勾选）**：
- [ ] **语义与逻辑审查**：确认代码变更的语义正确性
- [ ] **破坏性变更评估**：判断是否破坏现有公开 API，确认是否需要 major version bump
- [ ] **公开 API 设计一致性**：审查新增 API（`public` 方法、`output()`、`input()` 等）是否与项目风格一致
- [ ] **架构合理性**：审查是否遵循了项目的分层和职责划分
- [ ] **Gemini Code Assist bot 的建议**：逐条确认采纳或忽略
- [ ] **兼容性**：确认对 Angular 版本、浏览器、SSR 等场景的兼容
- [ ] **文档同步确认**：确认中英文文档、demo 与代码同步更新

### 7. PR
- 分支：有 Issue URL 用 `fix-<id>`，否则 `<type>-<package>-<desc>`
- 标题：遵循 CONTRIBUTING.md 中的 commit 规范
- body 末尾加 `close <issues url>`
- 首次提交整理为 feat、test、docs、chore（`--fixup` + `--autosquash`），后续追加不合并
- `docs/superpowers/`、`.superpowers/` 不纳入版本控制
- 合入在 GitHub 网站操作
