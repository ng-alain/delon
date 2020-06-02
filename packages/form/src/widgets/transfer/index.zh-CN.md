---
title: transfer
subtitle: 穿梭框
type: Widgets
---

双栏穿梭选择框。

## 注意事项

- `default` 值被当成 `direction: 'right'` 表示右栏中

## API

### schema 属性

| 成员 | 说明 | 类型 | 默认值 |
|----|----|----|-----|
| `[enum]` | 数据源 | `SFSchemaEnumType[]` | - |

### ui 属性

| 成员 | 说明 | 类型 | 默认值 |
|----|----|----|-----|
| `[asyncData]` | 异步数据源 | `() => Observable<SFSchemaEnumType[]>` | - |
| `[titles]` | 标题集合，顺序从左至右 | `string[]` | `['', '']` |
| `[operations]` | 操作文案集合，顺序从下至上 | `string[]` | `['', '']` |
| `[listStyle]` | 两个穿梭框的自定义样式，以`ngStyle`写法标题 | `object` | - |
| `[itemUnit]` | 单数单位 | `string` | `项目` |
| `[itemsUnit]` | 复数单位 | `string` | `项目` |
| `[showSearch]` | 是否显示搜索框 | `boolean` | `false` |
| `[filterOption]` | 接收 `inputValueoption` 两个参数，当 `option` 符合筛选条件时，应返回 `true`，反之则返回 `false`。 | - | - |
| `[searchPlaceholder]` | 搜索框的默认值 | `string` | - |
| `[notFoundContent]` | 当列表为空时显示的内容 | `string` | - |
| `[canMove]` | 穿梭时二次校验。 | `function` | - |
| `[change]` | 选项在两栏之间转移时的回调函数 | `(options: TransferChange) => void` | - |
| `[searchChange]` | 搜索框内容时改变时的回调函数 | `(options: TransferSearchChange) => void` | - |
| `[selectChange]` | 选中项发生改变时的回调函数 | `(options: TransferSelectChange) => void` | - |
