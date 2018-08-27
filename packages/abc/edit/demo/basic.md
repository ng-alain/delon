---
order: 1
title:
  zh-CN: 基础
  en-US: Basic
---

## zh-CN

一行两列表单。

## en-US

1 rows & 2 columns layout form.

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  template: `
  <form nz-form #f="ngForm" na-edit-wrap gutter="32">
    <na-edit label="App Key" error="请填写">
      <input type="text" nz-input [(ngModel)]="i.ak" name="ak" required>
    </na-edit>
    <na-edit label="App Secret" error="请填写，最多32位">
      <input type="text" nz-input [(ngModel)]="i.sk" name="sk" required maxlength="32">
    </na-edit>
    <na-edit>
      <button nz-button nzType="primary" [disabled]="f.invalid">Save</button>
    </na-edit>
  </form>`,
})
export class DemoComponent {
  i: any = {};
}
```
