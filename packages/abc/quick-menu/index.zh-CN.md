---
type: Business
title: quick-menu
subtitle: 快速菜单
cols: 1
module: import { QuickMenuModule } from '@delon/abc/quick-menu';
---

快速菜单，用于右侧隐式辅助列表。

## API

### quick-menu

| 成员 | 说明 | 类型 | 默认值 |
|----|----|----|-----|
| `[icon]` | 图标 | `string,TemplateRef<void>` | `question-circle` |
| `[top]` | 距离顶部 | `number` | `120` |
| `[width]` | 打开后宽度 | `number` | `200` |
| `[bgColor]` | 背景 | `string` | - |
| `[borderColor]` | 边框颜色 | `string` | - |
| `[expand]` | 当前展开状态，可双向绑定 | `boolean` | - |
| `(expandChange)` | 当前展开状态改变回调函数 | `EventEmitter<boolean>` | - |
