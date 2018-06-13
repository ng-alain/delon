---
order: 1
title: 基础
---

一行两列表单。

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  template: `
  <form nz-form #f="ngForm" shf-wrap>
    <shf-item label="App Key">
      <input type="text" nz-input [(ngModel)]="i.ak" name="ak" required>
    </shf-item>
    <shf-item label="App Secret">
      <input type="text" nz-input [(ngModel)]="i.sk" name="sk" required maxlength="32">
    </shf-item>
    <shf-item>
      <button nz-button nzType="primary" [disabled]="f.invalid">Save</button>
    </shf-item>
  </form>`,
})
export class DemoComponent {
  i: any = {};
}
```
