---
order: 9
title:
  zh-CN: 批量重置错误消息
  en-US: Bulk reset error value
---

## zh-CN

利用 `errors` 可以批量对所有 `se` 组件重置 `error` 值。

## en-US

Using `errors` you can reset `error` values for all `se` components in batches.

```ts
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SEErrorRefresh } from '@delon/abc/se';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-demo',
  template: `
    <h3>Operating</h3>
    <div class="mb-md">
      <button nz-button (click)="resetErrors()">Reset all errors</button>
    </div>
    <form nz-form #f="ngForm" se-container [errors]="ngModelErrors" gutter="32">
      <se label="App Key" [error]="{ required: '请填写', pattern: '只能包含a-z, 0-9之间' }">
        <input
          type="text"
          nz-input
          [(ngModel)]="i.ak"
          name="ak"
          required
          pattern="^[a-z0-9]*$"
          placeholder="必填项，且只能包含a-z, 0-9之间"
        />
      </se>
      <ng-template #appSecretRequired> 请填写，密钥<a (click)="msg.success('success')">生成</a>地址。 </ng-template>
      <se label="App Secret" [error]="{ required: appSecretRequired, pattern: '只能包含0-9之间' }">
        <input
          type="text"
          nz-input
          [(ngModel)]="i.sk"
          name="sk"
          required
          maxlength="32"
          pattern="^[0-9]*$"
          placeholder="必填项，且只能包含0-9之间"
        />
      </se>
      <se>
        <button nz-button nzType="primary" [disabled]="f.invalid">Save</button>
      </se>
    </form>
    <h3>Reactive</h3>
    <form nz-form [formGroup]="validateForm" se-container gutter="32" [errors]="reactiveErrors">
      <se label="App Key" [error]="{ required: 'Please input your username!', pattern: 'Incorrect format, muse be A' }">
        <input formControlName="userName" nz-input placeholder="Username" />
      </se>
      <se label="App Secret" error="Please input your Password!">
        <input formControlName="password" nz-input type="password" placeholder="Password" />
      </se>
      <se>
        <button nz-button nzType="primary" [disabled]="!validateForm.valid">Log in</button>
      </se>
    </form>
  `,
})
export class DemoComponent {
  validateForm: FormGroup;
  i: any = {};
  ngModelErrors: SEErrorRefresh[] = [];
  reactiveErrors: SEErrorRefresh[] = [];

  constructor(fb: FormBuilder, public msg: NzMessageService) {
    this.validateForm = fb.group({
      userName: [null, [Validators.required, Validators.pattern(/A/)]],
      password: [null, [Validators.required]],
      remember: [true],
    });
  }

  resetErrors(): void {
    this.ngModelErrors = [{ name: 'ak', error: 'Required field, and can only contain a-z, 0-9' }];
    this.reactiveErrors = [
      { name: 'userName', error: 'Required username' },
      { name: 'password', error: 'Required password' },
    ];
  }
}
```
