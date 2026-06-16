---
type: Business
title: quick-menu
subtitle: 快速菜单
cols: 1
module: import { QuickMenuModule } from '@delon/abc/quick-menu';
---

快速菜单，用于右侧隐式辅助列表。

## API

### quick-menu

| 成员 | 说明 | 类型 | 默认值 |
|----|----|----|-----|
| `[icon]` | 图标 | `string,TemplateRef<void>` | `question-circle` |
| `[top]` | 距离顶部 | `number` | `120` |
| `[width]` | 打开后宽度 | `number` | `200` |
| `[bgColor]` | 背景 | `string` | - |
| `[borderColor]` | 边框颜色 | `string` | - |
| `[expand]` | 当前展开状态，可双向绑定 | `boolean` | - |
| `(expandChange)` | 当前展开状态改变回调函数 | `EventEmitter<boolean>` | - |

---

## 代码示例

### 基础样例

点击右侧问号切换状态菜单。

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
