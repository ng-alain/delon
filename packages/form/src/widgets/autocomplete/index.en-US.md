---
title: autocomplete
subtitle: Autocomplete
type: Widgets
---

Input complete automatically.

## Data Source

**Static**

Every filter after data got is filtered by `filterOption`, data source is from `asyncData`, `enum`.

Email postfix is automatically added when it is  `schema.format: 'email'`, by default, it is `['qq.com', '163.com', 'gmail.com', '126.com', 'aliyun.com']`, can adjust the value by setting `enum` or [global config](/docs/global-config/en) `uiEmailSuffixes`。

**Realtime**

Every filter after data got is filtered by `filterOption`, data source is from `asyncData`.

## API

### schema

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `[enum]` | Static data source | `SFSchemaEnumType[]` | - |
| `[readOnly]` | Read only | `boolean` | - |

### ui

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `[asyncData]` | Realtime data | `(input: string) => Observable<SFSchemaEnumType[]>` | - |
| `[size]` | Szie, equals to `nzSize` | `string` | - |
| `[placeholder]` | Placeholder | `string` | - |
| `[filterOption]` | Whether filter by input, by default, only apply to `label` and filter through `indexOf` case insensitive. When it's a function, accept `inputValue` and `option` parameters, return `true` when `option` match search criteria, otherwise, return `false` | `boolean or (inputValue: string, option: SFSchemaEnum) => boolean` | `true` |
| `[type]` | Mode, automatically complete common email postfix, can set new postfix by setting `enum` | `email` | - |
| `[debounceTime]` | debounce time, minimum is `50` by default when it's realtime data source, unit: millisecond | `number` | `0` |
| `[defaultActiveFirstOption]` | Whether active the first item by default | `boolean` | `true` |
| `[backfill]` | Fill selected value into input when keyboard selection options is used | `boolean` | `false` |
| `[nzWidth]` | Customize width, unit is px | `number` | Trigger width of element |
| `[change]` | Change callback | `(item: NzAutocompleteOptionComponent, orgData: SFSchemaEnum) => void` | - |
