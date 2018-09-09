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
  <form nz-form [formGroup]="validateForm" (ngSubmit)="submitForm()" se-container gutter="32">
    <se label="App Key" error="Please input your username!">
      <input formControlName="userName" nz-input placeholder="Username">
    </se>
    <se label="App Secret" error="Please input your Password!">
      <input formControlName="password" nz-input type="password" placeholder="Password">
    </se>
    <se>
      <button nz-button nzType="primary" [disabled]="!validateForm.valid">Log in</button>
    </se>
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
