---
order: 3
title: Simple
bg: f2f4f5
---

简单的页头。

```ts
import { Component } from '@angular/core';

@Component({
    selector: 'app-demo',
    template: `
    <pro-header [title]="'页面标题'">
        <ng-template #breadcrumb>
            <nz-breadcrumb>
                <nz-breadcrumb-item><a>一级菜单</a></nz-breadcrumb-item>
                <nz-breadcrumb-item><a>二级菜单</a></nz-breadcrumb-item>
                <nz-breadcrumb-item><a>三级菜单</a></nz-breadcrumb-item>
            </nz-breadcrumb>
        </ng-template>
    </pro-header>
    `
})
export class DemoComponent {
}
```
