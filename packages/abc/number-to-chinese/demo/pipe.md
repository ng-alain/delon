---
order: 0
title: 管道
---

使用 `n2c` 便于直接在模板中渲染。

```ts
import { Component } from '@angular/core';

@Component({
    selector: 'app-demo',
    template: `
    <p>100.12 | n2c => {{ 100.12 | n2c }}</p>
    <p>100 | n2c:false => {{ 100 | n2c:false }}</p>
    <p>-100.56 | n2c => {{ -100.56 | n2c }}</p>
    <p>-100.56 | n2c:true:'欠' => {{ -100.56 | n2c:true:'欠' }}</p>
    `
})
export class DemoComponent {
}
```
