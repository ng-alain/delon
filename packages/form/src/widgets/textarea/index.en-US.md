---
title: textarea
subtitle: Textarea
type: Widgets
---

Textarea.

## API

### schema

| Property      | Description                  | Type      | Default |
| ------------- | ---------------------------- | --------- | ------- |
| `[maxLength]` | Maximum length of the input  | `number`  | -       |
| `[readOnly]`  | Whether to disable the state | `boolean` | -       |

### ui

| Property        | Description                                                                                | Type                                            | Default |
| --------------- | ------------------------------------------------------------------------------------------ | ----------------------------------------------- | ------- |
| `[size]`        | Size of the `nz-input`                                                                     | `string`                                        | -       |
| `[placeholder]` | placeholder of the input                                                                   | `string`                                        | -       |
| `[autosize]`    | height autosize feature, can be set to `boolean` or an object `{ minRows: 2, maxRows: 6 }` | `boolean丨{ minRows: number, maxRows: number }` | `true`  |
