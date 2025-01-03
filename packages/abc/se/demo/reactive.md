---
order: 2
title:
  zh-CN: 响应式表单
  en-US: Reactive Form
---

## zh-CN

支持响应式表单。

> **注意：**
> - 响应式表单无法自动获取 `Validators.required` 来判断是否需要必填项标识符，因此需要手动标识 `required` 属性。
> - 当需要使用 `patchValue` 赋值时，因为 `dirty` 依然保持为 `false` 的因素，需要对所有表单元素设置 `markAsDirty()` 或者使用 `ingoreDirty` 属性强制忽略 `dirty` 的校验。

## en-US

Support for reactive forms.

> **Note: **
> - Reactive form can't auto obtain `Validators.required` to determine whether a required item identifier is required, so it is necessary to manually identify the `required` attribute.
> - When you need to use `patchValue` to assign values, because `dirty` remains a factor of `false`, you need to set `markAsDirty()` on all form elements or use the `ingoreDirty` attribute to force the `dirty` check to be ignored.

```ts
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { SEModule } from '@delon/abc/se';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-demo',
  template: ` <form nz-form [formGroup]="validateForm" (ngSubmit)="submitForm()" se-container gutter="32" ingoreDirty>
    <se
      label="App Key"
      required
      [error]="{ required: 'Please input your username!', pattern: 'Incorrect format, muse be A' }"
    >
      <input formControlName="userName" nz-input placeholder="Username" />
    </se>
    <se label="App Secret" required error="Please input your Password!">
      <input formControlName="password" nz-input type="password" placeholder="Password" />
    </se>
    <se>
      <button nz-button nzType="primary" [disabled]="!validateForm.valid">Log in</button>
      <button nz-button nzType="link" type="button" (click)="updateValue()">Update value via patchValue</button>
    </se>
  </form>`,
  imports: [SEModule, NzFormModule, NzInputModule, ReactiveFormsModule, NzButtonModule]
})
export class DemoComponent {
  validateForm = new FormGroup({
    userName: new FormControl<string | null>(null, [Validators.required, Validators.pattern(/A/)]),
    password: new FormControl(null, [Validators.required]),
    remember: new FormControl(true)
  });
  constructor(private msg: NzMessageService) {}

  submitForm(): void {
    this.msg.success(JSON.stringify(this.validateForm.value));
  }

  updateValue(): void {
    this.validateForm.patchValue({ userName: 'a' });
  }
}
```
