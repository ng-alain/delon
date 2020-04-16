---
type: Layout
order: 1
title: sg
subtitle: Simple Grid
cols: 1
module: SGModule
config: SGConfig
---

A higher-order components of grid systems, that consists of `sg-container` (directive) and `sg` components:

```html
<div nz-row nzGutter="32">
  <nz-col nzXs="24" nzSm="12" nzMd="8" nzLg="6">1</nz-col>
  <nz-col nzXs="24" nzSm="12" nzMd="8" nzLg="6">2</nz-col>
  <nz-col nzXs="24" nzSm="12" nzMd="8" nzLg="6">3</nz-col>
  <nz-col nzXs="24" nzSm="12" nzMd="8" nzLg="6">4</nz-col>
</div>
```

More friendly:

```html
<div sg-container="4">
  <sg>1</sg>
  <sg>2</sg>
  <sg>3</sg>
  <sg>4</sg>
</div>
```

## API

### sg-container

Property | Description | Type | Default
----|------|-----|------
`[gutter]` | specify the distance between two items, unit is `px`, only `nzLayout:horizontal` | `number` | `32`
`[sg-container]` | specify the maximum number of columns to display, the final columns number is determined by col setting combined with [Responsive Rules](/theme/responsive) | `'1','2','3','4','5','6'` | -
`[col]` | specify the maximum number of columns to display, the final columns number is determined by col setting combined with [Responsive Rules](/theme/responsive) | `'1','2','3','4','5','6'` | -

### sg

Property | Description | Type | Default
----|------|-----|------
`[col]` | specify the maximum number of columns to display, the final columns number is determined by col setting combined with [Responsive Rules](/theme/responsive) | `'1','2','3','4','5','6'` | -
