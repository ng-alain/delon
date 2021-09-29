---
title: mention
subtitle: 提及
type: Widgets
---

提及组件。

## 注意事项

- 若数据中不包括 `label` 属性，则**务必**指定 `valueWith` 参数。

## 数据源说明

**静态**

指一次性获取数据，数据来源于 `asyncData`、`enum`。

**实时**

指每一次选择会触发HTTP请求，数据来源于 `loadData`。

## API

### schema 属性

| 成员 | 说明 | 类型 | 默认值 |
|----|----|----|-----|
| `[enum]` | 静态数据源 | `SFSchemaEnumType[]` | - |
| `[readOnly]` | 禁用状态 | `boolean` | - |
| `[minimum]` | 最少提及次数 | `number` | - |
| `[maximum]` | 最多提及次数 | `number` | - |

### ui 属性

| 成员 | 说明 | 类型 | 默认值 |
|----|----|----|-----|
| `[asyncData]` | 异步静态数据源 | `(input: string) => Observable<SFSchemaEnumType[]>` | - |
| `[size]` | 大小，等同 `nzSize` | `string` | - |
| `[placeholder]` | 在文字框中显示提示讯息 | `string` | - |
| `[loadData]` | 实时数据 | `(option: MentionOnSearchTypes) => Observable<SFSchemaEnumType[]>` | - |
| `[notFoundContent]` | 未找到时的内容 | `string` | `无匹配结果，轻敲空格完成输入` |
| `[placement]` | 建议框位置 | `button,top` | `button` |
| `[prefix]` | 触发弹出下拉框的字符 | `'string'` `'string[]'` | `@` |
| `[valueWith]` | 建议选项的取值方法 | `(value: any) => string` | - |
| `[select]` | 下拉框选择建议时回调 | `(value: any) => void` | - |
| `[inputStyle]` | 文本框类型 | `text, textarea` | `text` |
| `[autosize]` | 自适应内容高度，可设置为 `true|false` 或对象：`{ minRows: 2, maxRows: 6 }` | `boolean,AutoSizeType` | `true` |
