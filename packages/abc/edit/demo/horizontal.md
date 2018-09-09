---
order: 4
title:
  zh-CN: 水平排列
  en-US: Horizontal Layout
---

## zh-CN

一行一列表单。

## en-US

Horizontal layout form.

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  template: `
  <form nz-form #f="ngForm" se-container="1" labelWidth="150">
    <se label="App Key" error="请填写" optional="(选填)" optionalHelp="通过控制台-查看KEY获取" extra="额外提示信息">
      <input type="text" nz-input [(ngModel)]="i.ak" name="ak" required>
    </se>
    <se label="App Secret" error="请填写，最多32位">
      <input type="text" nz-input [(ngModel)]="i.sk" name="sk" required maxlength="32">
    </se>
    <se>
      <button nz-button nzType="primary" [disabled]="f.invalid">Save</button>
    </se>
  </form>`,
})
export class DemoComponent {
  i: any = {};
}
```
