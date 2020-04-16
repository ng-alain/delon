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
  <sv-container col="4">
    <sv label="primary" type="primary">hhhh</sv>
    <sv label="success" type="success">hhhh</sv>
    <sv label="warning" type="warning">hhhh</sv>
    <sv label="danger" type="danger">hhhh</sv>
  </sv-container>
  `,
})
export class DemoComponent {
}
```
