---
order: 3
title:
  zh-CN: 通过 Http
  en-US: Via Http
---

## zh-CN

使用 `HttpClient` 来获取图像资源，自动转化成 Base64，一般用于请求需要授权的图像资源。

## en-US

Use `HttpClient` to request image resources, Automatically converted to Base64, generally used to request image resources that require authorization.

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'demo',
  template: ` <img [_src]="src" useHttp /> `,
})
export class DemoComponent {
  src = 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png';
}
```
