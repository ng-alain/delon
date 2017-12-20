---
order: 8
title: 水波图
---

水波图是一种比例的展示方式，可以更直观的展示关键值的占比。

```ts
import { Component } from '@angular/core';

@Component({
    selector: 'app-demo',
    template: `
    <div>
        <water-wave
            title="补贴资金剩余"
            [percent]="34"
            [height]="161"></water-wave>
    </div>`
})
export class DemoComponent {
}
```
