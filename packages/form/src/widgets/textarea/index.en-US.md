---
title: textarea
subtitle: Textarea
type: Widgets
---

Textarea.

## API

### schema

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `[maxLength]` | Maximum length of the input | `number` | - |
| `[readOnly]` | Whether to disable the state | `boolean` | - |

### ui

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `[size]` | Size of the `nz-input` | `string` | - |
| `[placeholder]` | placeholder of the input | `string` | - |
| `[autosize]` | height autosize feature, can be set object `{ minRows: 2, maxRows: 6 }` | `{ minRows?: number; maxRows?: number }` | `{ minRows: 1, maxRows: 0 }` |
| `[variant]` | Variant | `outlined,borderless,filled,underlined` | `outlined` |
| `[maxCharacterCount]` | `textarea` maximum character count displayed | `number` | - |
| `[computeCharacterCount]` | customized `characterCount` computation function | `(v: string) => number` | `v => v.length` |
| `[change]` | The content event for the Input. | `(val: string) => void` | - |
| `[focus]` | The focus event for the Input. | `(e: FocusEvent) => void` | - |
| `[blur]` | The blur event for the Input. | `(e: FocusEvent) => void` | - |
