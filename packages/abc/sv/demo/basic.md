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
      <sv label="Firefox">
        A free, open source, cross-platform, graphical web browser developed by the Mozilla Corporation and hundreds of volunteers.
      </sv>
      <sv label="Firefox">
        A free, open source, cross-platform, graphical web browser developed by the Mozilla Corporation and hundreds of volunteers.
      </sv>
      <sv label="Firefox">
        A free, open source, cross-platform, graphical web browser developed by the Mozilla Corporation and hundreds of volunteers.
      </sv>
      <sv label="Default"></sv>
      <sv label="Unit" unit="个">10</sv>
      <sv label="Unit" unit="个"></sv>
      <sv label="Value">
        <sv-value prefix="约" unit="亿" tooltip="5,011,000,000">50.11</sv-value>
      </sv>
      <sv label="Mulit Value">
        <sv-value>10</sv-value>
        <sv-value>3</sv-value>
      </sv>
      <sv label="Value Size">
        <sv-value>Default</sv-value>
        <sv-value size="small">Samll</sv-value>
        <sv-value size="large">Large</sv-value>
      </sv>
    </sv-container>
  `,
})
export class DemoComponent {}
```
