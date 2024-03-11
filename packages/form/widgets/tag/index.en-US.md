---
title: tag
subtitle: Tag
type: Non-built-in widgets
---

Tag for categorizing or markup, **Notice:** Just only supported `checkable` tag mode.

## How to use

Non-built-in modules need to additionally register `withTagWidget` in [json-schema](https://github.com/ng-alain/ng-alain/blob/master/src/app/shared/json-schema/index.ts#L9).

## API

### schema

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `[enum]` | Data source | `SFSchemaEnumType[]` | - |

### ui

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `[asyncData]` | Async data source | `() => Observable<SFSchemaEnumType[]>` | - |
| `[mode]` | Mode of tag | `'closeable'｜'default'｜'checkable'` | `'checkable'` |
| `[onClose]` | Callback executed when tag is closed | `(e:MouseEvent) => void` | - |
| `[checkedChange]` | Checked status change call back | `(status: boolean) => void` | - |
