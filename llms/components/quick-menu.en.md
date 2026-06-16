---
type: Business
title: quick-menu
subtitle: Quick Menu
cols: 1
module: import { QuickMenuModule } from '@delon/abc/quick-menu';
---

Quick menu for the implicit auxiliary list on the right.

## API

### quick-menu

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `[icon]` | Icon for the quick menu | `string,TemplateRef<void>` | `question-circle` |
| `[top]` | Icon from top | `number` | `120` |
| `[width]` | Width after opening | `number` | `200` |
| `[bgColor]` | Background for the quick menu | `string` | - |
| `[borderColor]` | Border for the quick menu | `string` | - |
| `[expand]` | Current expand status, double binding | `boolean` | - |
| `(expandChange)` | Expand status change callback | `EventEmitter<boolean>` | - |

---

## Examples

### Basic Usage

Click the question icon on the right to switch the status menu.

```typescript
import { Component } from '@angular/core';

import { QuickMenuComponent } from '@delon/abc/quick-menu';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzListModule } from 'ng-zorro-antd/list';

@Component({
  selector: 'components-quick-menu-simple',
  template: `
    <button nz-button type="button" (click)="expand = !expand">{{ expand ? '收缩' : '展开' }}</button>
    <quick-menu [(expand)]="expand">
      <nz-list [nzBordered]="false" [nzSplit]="false">
        <nz-list-item><a href="#">Link1</a></nz-list-item>
        <nz-list-item><a href="#">Link2</a></nz-list-item>
        <nz-list-item><a href="#">Link3</a></nz-list-item>
        <nz-list-item><a href="#">Link4</a></nz-list-item>
        <nz-list-item><a href="#">Link5</a></nz-list-item>
      </nz-list>
    </quick-menu>
  `,
  imports: [NzButtonModule, QuickMenuComponent, NzListModule]
})
export class ComponentsQuickMenuSimple {
  expand = false;
}
```
