---
type: Layout
order: 1
title: sg
subtitle: Simple Grid
cols: 1
module: import { SGModule } from '@delon/abc/sg';
---

A higher-order components of grid systems, that consists of `sg-container` (directive) and `sg` components:

```html
<div nz-row [nzGutter]="32">
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

| Property | Description | Type | Default | Global Config |
|----------|-------------|------|---------|---------------|
| `[gutter]` | specify the distance between two items, unit is `px`, only `nzLayout:horizontal` | `number` | `32` | ✅ |
| `[sg-container]` | specify the maximum number of columns to display, the final columns number is determined by col setting combined with [Responsive Rules](/theme/responsive) | `'1','2','3','4','5','6'` | - | - |
| `[col]` | specify the maximum number of columns to display, the final columns number is determined by col setting combined with [Responsive Rules](/theme/responsive) | `'1','2','3','4','5','6'` | `2` | ✅ |

### sg

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `[col]` | specify the maximum number of columns to display, the final columns number is determined by col setting combined with [Responsive Rules](/theme/responsive) | `'1','2','3','4','5','6'` | - |

---

## Examples

### Basic

1 rows & 4 columns layout.

```typescript
import { Component } from '@angular/core';

import { SGModule } from '@delon/abc/sg';

@Component({
  selector: 'components-sg-basic',
  template: ` <div sg-container="4">
    @for (i of ls; track $index) {
      <sg [col]="$index === 5 ? 2 : null">
        <div class="item">{{ $index + 1 }}</div>
      </sg>
    }
  </div>`,
  styles: [
    `
      :host .sg__item {
        padding: 5px 0;
        text-align: center;
        border-radius: 0;
        min-height: 30px;
        margin-top: 8px;
        margin-bottom: 8px;
        color: #fff;
      }
      :host .item {
        background: #00a0e9;
        height: 120px;
        line-height: 120px;
        font-size: 13px;
      }
    `
  ],
  imports: [SGModule]
})
export class ComponentsSgBasic {
  ls = Array(11).fill(0);
}
```
