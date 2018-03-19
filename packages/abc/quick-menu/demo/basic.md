---
order: 1
title: 演示
bg: f2f4f5
---

点击右侧问号打开菜单。

```ts
import { Component } from '@angular/core';

@Component({
    selector: 'app-demo',
    template: `
<quick-menu>
    <nz-list [nzBordered]="false" [nzSplit]="false">
        <nz-list-item><a href="#">Link1</a></nz-list-item>
        <nz-list-item><a href="#">Link2</a></nz-list-item>
        <nz-list-item><a href="#">Link3</a></nz-list-item>
        <nz-list-item><a href="#">Link4</a></nz-list-item>
        <nz-list-item><a href="#">Link5</a></nz-list-item>
    </nz-list>
</quick-menu>
    `
})
export class DemoComponent {
}
```
