---
title: string
subtitle: Input
type: Widgets
order: 3
---

Default widget, A basic widget for getting the user input is a text field.

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
| `[type]` | type of the input, e.g: `password` | `string` | - |
| `[placeholder]` | placeholder of the input | `string` | - |
| `[borderless]` | Whether hide border | `boolean` | `false` |
| `[autocomplete]` | autocomplete of the input | `HTML Attribute` | - |
| `[autofocus]` | autofocus of the input | `HTML Attribute` | - |
| `[addOnBefore]` | The label text displayed before (on the left side of) the input field. | `string` | - |
| `[addOnAfter]` | The label text displayed after (on the right side of) the input field. | `string` | - |
| `[addOnBeforeIcon]` | The label icon's ngClass displayed before. | `string` | - |
| `[addOnAfterIcon]` | The label icon's ngClass displayed after. | `string` | - |
| `[prefix]` | The prefix icon for the Input. | `string` | - |
| `[prefixIcon]` | The prefix icon's ngClass for the Input. | `string` | - |
| `[suffix]` | The suffix icon for the Input. | `string` | - |
| `[suffixIcon]` | The suffix icon's ngClass for the Input. | `string` | - |
| `[changeDebounceTime]` | `change` event throttling and sequence control threshold | `number` | - |
| `[changeMap]` | Convert data, equivalent to `switchMap` operation | `(val: string) => Observable<any>` | - |
| `[change]` | The content event for the Input. | `(val: string) => void` | - |
| `[focus]` | The focus event for the Input. | `(e: FocusEvent) => void` | - |
| `[blur]` | The blur event for the Input. | `(e: FocusEvent) => void` | - |
| `[enter]` | The enter event for the Input. | `(e: KeyboardEvent) => void` | - |
