---
order: 0
title: 基础样例
---

结合 `nz-checkable-tag` 的 `tag-select` 组件，方便的应用于筛选类目的业务场景中。

```ts
import { Component } from '@angular/core';

@Component({
    selector: 'app-demo',
    template: `
<tag-select>
    <nz-checkable-tag *ngFor="let i of categories; let idx = index" [nzChecked]="i.value">{{i.text}}</nz-checkable-tag>
</tag-select>
    `
})
export class DemoComponent {
    categories = [
        { id: 0, text: '全部', value: false },
        { id: 1, text: '类目一', value: false },
        { id: 2, text: '类目二', value: false },
        { id: 3, text: '类目三', value: false },
        { id: 4, text: '类目四', value: false },
        { id: 5, text: '类目五', value: false },
        { id: 6, text: '类目六', value: false },
        { id: 7, text: '类目七', value: false },
        { id: 8, text: '类目八', value: false },
        { id: 9, text: '类目九', value: false },
        { id: 10, text: '类目十', value: false },
        { id: 11, text: '类目十一', value: false },
        { id: 12, text: '类目十二', value: false }
    ];
}
```
