---
order: 0
title:
  zh-CN: 快捷键
  en-US: Shortcut
---

## zh-CN

使用 `shortcuts` 自定义快捷面板（支持全局配置）。

## en-US

Use `shortcuts` to customize the shortcut panel (supports global configuration).

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  template: `
    result: {{ i | json }}<br />
    <nz-range-picker [(ngModel)]="i.start" extend [(ngModelEnd)]="i.end" shortcut></nz-range-picker>
  `,
})
export class DemoComponent {
  i: { start?: Date; end?: Date } = {};
}
```
