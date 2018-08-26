---
order: 1
title:
  zh-CN: 内容类型
  en-US: Content Type
---

一般用于展示页，对正常、异常、警告等字段展示。

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  template: `
  <na-view-wrap col="4">
    <na-view label="primary" type="primary">hhhh</na-view>
    <na-view label="success" type="success">hhhh</na-view>
    <na-view label="warning" type="warning">hhhh</na-view>
    <na-view label="danger" type="danger">hhhh</na-view>
  </na-view-wrap>
  `,
})
export class DemoComponent {
}
```
