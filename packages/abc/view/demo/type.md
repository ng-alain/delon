---
order: 3
title:
  zh-CN: 内容类型
  en-US: Content Type
---

## zh-CN

通常用于展示页，成功、异常、警告等字段展示。

## en-US

Usually used to view pages, success, danger, warning, and other fields.

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
