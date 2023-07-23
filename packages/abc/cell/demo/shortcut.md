---
title:
  zh-CN: 快捷项
  en-US: Shortcut
order: 1
---

## zh-CN

支持 `currency` 快捷属性。

## en-US

Support `currency` shortcutes.

```ts
import { Component } from '@angular/core';
@Component({
  selector: 'app-demo',
  template: `
    <div nz-row nzGutter="16" class="mt-md">
      <div nz-col nzSpan="8"> currency => <cell [currency]="1000" unit="$"></cell> </div>
    </div>
  `
})
export class DemoComponent {}
```
