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
| `[autosize]` | height autosize feature, can be set to `boolean` or an object `{ minRows: 2, maxRows: 6 }` | `boolean丨{ minRows: number, maxRows: number }` | `true` |
| `[borderless]` | Whether hide border | `boolean` | `false` |
| `[maxCharacterCount]` | `textarea` maximum character count displayed | `number` | - |
| `[computeCharacterCount]` | customized `characterCount` computation function | `(v: string) => number` | `v => v.length` |
| `[change]` | The content event for the Input. | `(val: string) => void` | - |
| `[focus]` | The focus event for the Input. | `(e: FocusEvent) => void` | - |
| `[blur]` | The blur event for the Input. | `(e: FocusEvent) => void` | - |
