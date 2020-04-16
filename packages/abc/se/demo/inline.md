---
order: 5
title:
  zh-CN: 内联布局
  en-US: Inline Layout
---

## zh-CN

若 `nzLayout: inline` 时强制使用紧凑型，一般用于搜索框。

## en-US

If `nzLayout: inline` is forced to use compact, generally used in the search box.


```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  template: `
  <form nz-form nzLayout="inline" #f="ngForm" se-container>
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
