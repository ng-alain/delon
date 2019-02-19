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
  result: {{i | json}}<br>
  <range-picker [(ngModel)]="i.start" [(ngModelEnd)]="i.end" [shortcut]="true"></range-picker>
  `,
})
export class DemoComponent {
  i: any = {};
}
```
