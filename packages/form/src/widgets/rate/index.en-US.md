---
title: rate
subtitle: Rate
type: Widgets
---

A quick rating operation on something.

## API

### schema

| Property       | Description                          | Type     | Default |
| -------------- | ------------------------------------ | -------- | ------- |
| `[maximum]`    | star count                           | `number` | `5`     |
| `[multipleOf]` | `0.5` indicates allow semi selection | `number` | `0.5`   |

### ui

| Property       | Description                                                     | Type      | Default |
| -------------- | --------------------------------------------------------------- | --------- | ------- |
| `[allowClear]` | whether to allow clear when click again                         | `boolean` | `true`  |
| `[autoFocus]`  | get focus when component mounted                                | `boolean` | `false` |
| `[text]`       | Reminder text template, `{{value}}` indicates the current value | `string`  | -       |
