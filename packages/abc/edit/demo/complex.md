---
order: 10
title:
  zh-CN: 不规则布局
  en-US: Irregular Layout
---

## zh-CN

利用 `col` 可以构建复杂不规则布局。

## en-US

Use `col` to build complex irregular layouts.

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  template: `
  <form nz-form #f="ngForm" se-container size="compact" gutter="24">
    <se label="ID" col="1">1000</se>
    <se label="Name" required col="3">
      <input type="text" nz-input [(ngModel)]="i.user_name" name="user_name" required>
    </se>
    <se label="Age" required col="3">
      <nz-select [(ngModel)]="i.user_age" name="user_age" nzAllowClear nzPlaceHolder="Choose">
        <nz-option [nzValue]="1" nzLabel="1"></nz-option>
        <nz-option [nzValue]="2" nzLabel="2"></nz-option>
        <nz-option [nzValue]="3" nzLabel="3"></nz-option>
        <nz-option [nzValue]="4" nzLabel="4"></nz-option>
        <nz-option [nzValue]="5" nzLabel="5"></nz-option>
      </nz-select>
    </se>
    <se label="Brithday" required col="3">
      <nz-date-picker [(ngModel)]="i.user_birthday" name="user_birthday" nzShowTime></nz-date-picker>
    </se>
    <se label="App Key" required>
      <input type="text" nz-input [(ngModel)]="i.ak" name="ak" required>
    </se>
    <se label="App Secret" required>
      <input type="text" nz-input [(ngModel)]="i.sk" name="sk" required maxlength="32">
    </se>
    <se label="Phone Number" required>
      <nz-input-group [nzAddOnBefore]="addOnBeforeTemplate">
        <ng-template #addOnBeforeTemplate>
          <nz-select [(ngModel)]="i.phoneNumberPrefix" name="phoneNumberPrefix" style="width: 70px;">
            <nz-option nzLabel="+86" nzValue="+86"></nz-option>
            <nz-option nzLabel="+87" nzValue="+87"></nz-option>
          </nz-select>
        </ng-template>
        <input type="text" nz-input [(ngModel)]="i.phoneNumber" name="phoneNumber" required maxlength="32">
      </nz-input-group>
    </se>
    <se>
      <label nz-checkbox [(ngModel)]="i.agree" name="agree">
        <span>I have read the <a>agreement</a></span>
      </label>
    </se>
    <se col="1">
      <textarea [(ngModel)]="i.comment" name="comment" nz-input rows="2" placeholder="write any thing"></textarea>
    </se>
    <se col="1">
      <button nz-button nzType="primary" [disabled]="f.invalid">Save</button>
    </se>
  </form>`,
})
export class DemoComponent {
  i: any = {
    phoneNumberPrefix: '+86',
    agree: true,
    user_age: 3
  };
}
```
