---
order: 0
title:
  zh-CN: 基础
  en-US: Basic
---

## zh-CN

使用 `ngModel`、`ngModelEnd` 来表示开始与结束值。

## en-US

Start and end values with `ngModel`, `ngModelEnd`.

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
    <nz-range-picker [(ngModel)]="i.start" extend [(ngModelEnd)]="i.end" />
  `,
  imports: [JsonPipe, FormsModule, NzDatePickerModule, RangePickerDirective]
})
export class DemoComponent {
  i: { start?: Date; end?: Date } = {};
}
```
