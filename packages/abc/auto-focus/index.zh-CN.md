---
type: Other
title: auto-focus
subtitle: 自动获得焦点
cols: 1
module: import { AutoFocusModule } from '@delon/abc/auto-focus';
---

允许在HTML元素出现后立即对其进行设置焦点，默认情况下会对 `input`、`textarea` 带有 `[autofocus="autofocus"]` 生效。

## API

### [auto-focus]

| 成员 | 说明 | 类型 | 默认值 |
|----|----|----|-----|
| `[enabled]` | 是否启用 | `boolean` | `true` |
