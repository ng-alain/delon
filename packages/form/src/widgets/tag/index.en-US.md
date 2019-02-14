---
title: tag
subtitle: Tag
type: Widgets
---

Tag for categorizing or markup, **Notice:** Just only supported `checkable` tag mode.

## API

### schema

| Property | Description | Type                 | Default |
|----------|-------------|----------------------|---------|
| `[enum]` | Data source | `SFSchemaEnumType[]` | -       |

### ui

| Property          | Description                                         | Type                                   | Default     |
|-------------------|-----------------------------------------------------|----------------------------------------|-------------|
| `[asyncData]`     | Async data source                                   | `() => Observable<SFSchemaEnumType[]>` | -           |
| `[mode]`          | Mode of tag                                         | `'closeable'｜'default'｜'checkable'`    | `'checkable'` |
| `[afterClose]`    | Callback executed when close animation is completed | `() => void`                           | -           |
| `[onClose]`       | Callback executed when tag is closed                | `(e:MouseEvent) => void`               | -           |
| `[checkedChange]` | Checked status change call back                     | `(status: boolean) => void`            | -           |
