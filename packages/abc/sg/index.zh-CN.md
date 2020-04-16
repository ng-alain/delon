---
type: Layout
order: 1
title: sg
subtitle: 简易栅格
cols: 1
module: SGModule
config: SGConfig
---

简化栅格系统运用的高阶组件，它由 `sg-container` 容器（指令）和 `sg` 组件组合代替一个响应式布局：

```html
<div nz-row nzGutter="32">
  <nz-col nzXs="24" nzSm="12" nzMd="8" nzLg="6">1</nz-col>
  <nz-col nzXs="24" nzSm="12" nzMd="8" nzLg="6">2</nz-col>
  <nz-col nzXs="24" nzSm="12" nzMd="8" nzLg="6">3</nz-col>
  <nz-col nzXs="24" nzSm="12" nzMd="8" nzLg="6">4</nz-col>
</div>
```

替代：

```html
<div sg-container="4">
  <sg>1</sg>
  <sg>2</sg>
  <sg>3</sg>
  <sg>4</sg>
</div>
```

## API

### sg-container

参数 | 说明 | 类型 | 默认值
----|------|-----|------
`[gutter]` | 间距，当 `nzLayout:horizontal` 时有效 | `number` | `32`
`[sg-container]` | 指定表单元素最多分几列展示，最终一行几列由 col 配置结合[响应式规则](/theme/responsive)决定， | `'1','2','3','4','5','6'` | -
`[col]` | 指定表单元素最多分几列展示，最终一行几列由 col 配置结合[响应式规则](/theme/responsive)决定， | `'1','2','3','4','5','6'` | -

### sg

参数 | 说明 | 类型 | 默认值
----|------|-----|------
`[col]` | 指定表单元素最多分几列展示，最终一行几列由 col 配置结合[响应式规则](/theme/responsive)决定， | `'1','2','3','4','5','6'` | -
