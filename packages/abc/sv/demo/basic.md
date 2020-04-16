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
  <sv-container>
    <sv-title>title</sv-title>
    <sv label="Firefox">A free, open source, cross-platform, graphical web browser developed by the Mozilla Corporation and hundreds of volunteers.</sv>
    <sv label="Firefox">A free, open source, cross-platform, graphical web browser developed by the Mozilla Corporation and hundreds of volunteers.</sv>
    <sv label="Firefox">A free, open source, cross-platform, graphical web browser developed by the Mozilla Corporation and hundreds of volunteers.</sv>
    <sv label="Default"></sv>
    <sv label="Unit" unit="个">10</sv>
    <sv label="Unit" unit="个"></sv>
  </sv-container>
  `,
})
export class DemoComponent {
}
```
