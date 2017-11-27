---
order: 1
title: 通知图标
---

通常用在导航工具栏上。

```ts
import { Component } from '@angular/core';

@Component({
    selector: 'app-demo',
    template: `
    <notice-icon count="5" dot class="mr-lg"></notice-icon>
    <notice-icon count="5"></notice-icon>
    `
})
export class DemoComponent {
}
```
