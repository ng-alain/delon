---
title: object
subtitle: Object
type: Widgets
order: 1
---

Create an object widget, valid only for `schema.type="object"`.

## API


### schema

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `[properties]` | Defining the properties of an object schema | `{ [key: string]: SFSchema }` | - |
| `[required]` | The data object to be valid should contain all properties with names equal to the elements in the keyword value | `string[]` | - |
| `[maxProperties]` | The data object to be valid should have not more (less) properties than the keyword value | `number` | - |
| `[minProperties]` | The data object to be valid should have not more (less) properties than the keyword value | `number` | - |

### ui

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `[showExpand]` | Whether to show the card body, click to hide the content, only `type ==='card'` | `boolean` | `true` |
| `[expand]` | Expanded state, only `type ==='card'` | `boolean` | `true` |
| `[showTitle]` | Whether to display the title | `boolean` | `false` |
| `[type]` | Render type of object | `card, default` | `default` |
| `[cardSize]` | The same as `nzSize` | `small, default` | `small` |
| `[cardBodyStyle]` | The same as `nzBodyStyle` | `{ [key: string]: string }` | - |
| `[cardBorderless]` | The same as `nzBorderless` | `boolean` | `false` |
| `[cardExtra]` | The same as `nzExtra` | `string, TemplateRef<void>` | - |
| `[cardActions]` | The same as `nzActions` | `Array<TemplateRef<void>>` | - |
