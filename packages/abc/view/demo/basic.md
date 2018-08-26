---
order: 1
title:
  zh-CN: 基本
  en-US: Basic
---

## zh-CN

基本查看页。

## en-US

The simplest view page.

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  template: `
  <na-view-wrap>
    <na-view-title>title</na-view-title>
    <na-view label="Firefox">A free, open source, cross-platform, graphical web browser developed by the Mozilla Corporation and hundreds of volunteers.</na-view>
    <na-view label="Firefox">A free, open source, cross-platform, graphical web browser developed by the Mozilla Corporation and hundreds of volunteers.</na-view>
    <na-view label="Firefox">A free, open source, cross-platform, graphical web browser developed by the Mozilla Corporation and hundreds of volunteers.</na-view>
    <na-view label="Default"></na-view>
  </na-view-wrap>
  `,
})
export class DemoComponent {
}
```
