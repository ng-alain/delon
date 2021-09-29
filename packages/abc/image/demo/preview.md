---
order: 4
title:
  zh-CN: 预览大图
  en-US: Preview image
---

## zh-CN

指定 `previewSrc` 点击预览大图效果，`previewModalOptions` 可以调整 [nzmodalservice](https://ng.ant.design/components/modal/zh#nzmodalservice) 参数。

## en-US

Use `HttpClient` to request image resources, Automatically converted to Base64, generally used to request image resources that require authorization.

Click to preview large image via `previewSrc`, `previewModalOptions` can be adjusted [nzmodalservice](https://ng.ant.design/components/modal/en#nzmodalservice) parameters.

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'demo',
  template: `
    <img [_src]="src" size="46" [previewSrc]="src" />
    <img [_src]="src" size="46" [previewSrc]="src" [previewModalOptions]="{ nzWidth: '80%' }" />
  `,
})
export class DemoComponent {
  src = 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png';
}
```
