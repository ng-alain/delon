---
title: string
subtitle: Input
type: Widgets
---

Default widget, A basic widget for getting the user input is a text field.

## API

### schema

| Property      | Description                  | Type      | Default |
| ------------- | ---------------------------- | --------- | ------- |
| `[maxLength]` | Maximum length of the input  | `number`  | -       |
| `[readOnly]`  | Whether to disable the state | `boolean` | -       |

### ui

| Property            | Description                                                            | Type             | Default |
| ------------------- | ---------------------------------------------------------------------- | ---------------- | ------- |
| `[size]`            | Size of the `nz-input`                                                 | `string`         | -       |
| `[type]`            | type of the input, e.g: `password`                                     | `string`         | -       |
| `[placeholder]`     | placeholder of the input                                               | `string`         | -       |
| `[autocomplete]`    | autocomplete of the input                                              | `HTML Attribute` | -       |
| `[autofocus]`       | autofocus of the input                                                 | `HTML Attribute` | -       |
| `[addOnBefore]`     | The label text displayed before (on the left side of) the input field. | `string`         | -       |
| `[addOnAfter]`      | The label text displayed after (on the right side of) the input field. | `string`         | -       |
| `[addOnBeforeIcon]` | The label icon's ngClass displayed before.                             | `string`         | -       |
| `[addOnAfterIcon]`  | The label icon's ngClass displayed after.                              | `string`         | -       |
| `[prefix]`          | The prefix icon for the Input.                                         | `string`         | -       |
| `[prefixIcon]`      | The prefix icon's ngClass for the Input.                               | `string`         | -       |
| `[suffix]`          | The suffix icon for the Input.                                         | `string`         | -       |
| `[suffixIcon]`      | The suffix icon's ngClass for the Input.                               | `string`         | -       |
