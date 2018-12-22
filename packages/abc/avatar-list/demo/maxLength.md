---
title:
  zh-CN: 要显示的最大项目
  en-US: Max Items to Show
order: 0
---

`maxLength` attribute specifies the maximum number of items to show while `excessItemsStyle` style the excess
item component.

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  template: `
  <avatar-list size="mini" maxLength="3" [excessItemsStyle]="{ color: '#f56a00', backgroundColor: '#fde3cf' }">
    <avatar-list-item tips="Jake" src="https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png"></avatar-list-item>
    <avatar-list-item tips="Andy" src="https://gw.alipayobjects.com/zos/rmsportal/sfjbOqnsXXJgNCjCzDBL.png"></avatar-list-item>
    <avatar-list-item tips="Niko" src="https://gw.alipayobjects.com/zos/rmsportal/kZzEzemZyKLKFsojXItE.png"></avatar-list-item>
    <avatar-list-item tips="Cipchk" text="Cipchk"></avatar-list-item>
    <avatar-list-item tips="heart-o" icon="heart-o"></avatar-list-item>
  </avatar-list>`
})
export class DemoComponent {
}
```
