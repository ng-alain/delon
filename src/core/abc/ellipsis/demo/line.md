---
order: 1
title: 按照行数省略
---

一个简单的CSS3的文本自动省略号，通过设置 `lines` 属性指定最大行数，如果超过这个行数的文本会自动截取。

```ts
import { Component } from '@angular/core';

@Component({
    selector: 'app-demo',
    template: `
    <ellipsis lines="3" style="width: 200px">
        <p>There were injuries alleged in three <a href="#cover">cases in 2015</a>, and a fourth incident in September, according to the safety recall report. After meeting with US regulators in October, the firm decided to issue a voluntary recall.</p>
    </ellipsis>
    `
})
export class DemoComponent {
}
```
