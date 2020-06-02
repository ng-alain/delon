---
title: mention
subtitle: Mention
type: Widgets
---

Mention widget.

## Note

- You **must** set `valueWith` parameter if there is no `label` property in data.

## Data Source

**Static**

One time fetching data, data source is from `asyncData`, `enum`.

**Realtime**

Every select triggers a HTTP request, data source is from `asyncData`.

## API

### schema

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `[enum]` | Static data source | `SFSchemaEnumType[]` | - |
| `[readOnly]` | Read only | `boolean` | - |
| `[minimum]` | Minimum time of mention | `number` | - |
| `[maximum]` | Maximum time of mention | `number` | - |

### ui

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `[asyncData]` | Asynchronous static data source | `(input: string) => Observable<SFSchemaEnumType[]>` | - |
| `[size]` | Size, equals to `nzSize` | `string` | - |
| `[placeholder]` | Placeholder | `string` | - |
| `[loadData]` | Realtime data | `(option: MentionOnSearchTypes) => Observable<SFSchemaEnumType[]>` | - |
| `[notFoundContent]` | Content when nothing found | `string` | `无匹配结果，轻敲空格完成输入` |
| `[placement]` | Position of suggestion box | `button,top` | `button` |
| `[prefix]` | Character to trigger to popup dropdown list | `'string'` `'string[]'` | `@` |
| `[valueWith]` | Function that maps a suggestion value | `(any) => string` | `(value: string) => string` |
| `[select]` | Callback when option in dropdown list is selected | `(value: any) => void` | - |
| `[inputStyle]` | Input type | `text, textarea` | `text` |
| `[autosize]` | Adaptive content height, set to `true|false` or object:`{ minRows: 2, maxRows: 6 }` | `boolean,AutoSizeType` | `true` |
