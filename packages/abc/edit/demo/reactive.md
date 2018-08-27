---
order: 2
title:
  zh-CN: 响应式表单
  en-US: Reactive From
---

## zh-CN

支持响应式表单。

## en-US

Support for reactive forms.

```ts
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd';

@Component({
  selector: 'app-demo',
  template: `
  <form nz-form [formGroup]="validateForm" (ngSubmit)="submitForm()" na-edit-wrap gutter="32">
    <na-edit label="App Key" error="Please input your username!">
      <input formControlName="userName" nz-input placeholder="Username">
    </na-edit>
    <na-edit label="App Secret" error="Please input your Password!">
      <input formControlName="password" nz-input type="password" placeholder="Password">
    </na-edit>
    <na-edit>
      <button nz-button nzType="primary" [disabled]="!validateForm.valid">Log in</button>
    </na-edit>
  </form>`,
})
export class DemoComponent {
  validateForm: FormGroup;
  constructor(fb: FormBuilder, private msg: NzMessageService) {
    this.validateForm = fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true],
    });
  }

  submitForm(): void {
    this.msg.success(JSON.stringify(this.validateForm.value));
  }
}
```
