---
title: select
subtitle: Select
type: Widgets
order: 6
---

Select.

## API

### schema

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `[enum]` | Data source | `SFSchemaEnumType[]` | - |
| `[readOnly]` | Read only | `boolean` | - |

### ui

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `[asyncData]` | Asynchronous static data source | `() => Observable<SFSchemaEnumType[]>` | - |
| `[size]` | Size, equals to `nzSize` | `string` | - |
| `[compareWith]` | Same with [SelectControlValueAccessor](https://angular.io/api/forms/SelectControlValueAccessor#caveat-option-selection) | `(o1: any, o2: any) => boolean` | `(o1: any, o2: any) => o1===o2` |
| `[placeholder]` | Placeholder | `string` | - |
| `[autoClearSearchValue]` | Whether clear search box when an option is selected, only valid when `mode` is `multiple` or `tags`. | `boolean` | `true` |
| `[allowClear]` | Allow clear | `boolean` | `false` |
| `[borderless]` | Whether has border | `boolean` | `false` |
| `[autoFocus]` | Focused by default | `boolean` | `false` |
| `[dropdownClassName]` | className property of dropdown list | `string` | - |
| `[dropdownMatchSelectWidth]` | Dropdown list and select have same width | `boolean` | `true` |
| `[dropdownStyle]` | style property of dropdown list | `object` | - |
| `[serverSearch]` | Whether using server search, won't fliter nz-option in frontend when it is true | `boolean` | `false` |
| `[searchDebounceTime]` | Debounce time of server search | `number` | `300` |
| `[searchLoadingText]` | Loading text of searching | `string` | - |
| `[onSearch]` | Callback when search content is changed, parameter is search content, must return `Promise` object | `(text: string) => Promise<SFSchemaEnum[]>` | - |
| `[maxMultipleCount]` | Maximum selected labels | `number` | `Infinity` |
| `[mode]` | Set mode for nz-select, suggest to add `default: null` for `tags`, otherwise, it would initialize an empty label. | `multiple,tags,default` | `default` |
| `[notFoundContent]` | Content when dropdown list is empty | `string` | - |
| `[showSearch]` | Enable search for signle select mode | `boolean` | `false` |
| `[showArrow]` | Whether to show the drop-down arrow | `boolean` | `true`(for single select), `false`(for multiple select) |
| `[tokenSeparators]` | Separator for automatic word segmentation when it is tags and multiple mode | `string[]` | `[]` |
| `[maxTagCount]` | Maximum count of tag | `number` | - |
| `[change]` | Callback function when selected nz-option is changed | `(ngModel:any丨any[], orgData: SFSchemaEnum丨SFSchemaEnum[])=>void` | - |
| `[openChange]` | Callback function when dropdown list is open or closed | `(status: boolean) => void` | - |
| `[scrollToBottom]` | Callback function when dropdown list is scrolled to bottom, can be used to trigger dynamic load | `() => void` | - |
