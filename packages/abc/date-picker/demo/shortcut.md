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
import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { RangePickerDirective } from '@delon/abc/date-picker';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';

@Component({
  selector: 'app-demo',
  template: `
    result: {{ i | json }}<br />
    <nz-range-picker [(ngModel)]="i.start" extend [(ngModelEnd)]="i.end" shortcut />
  `,
  imports: [JsonPipe, FormsModule, NzDatePickerModule, RangePickerDirective]
})
export class DemoComponent {
  i: { start?: Date; end?: Date } = {};
}
```
