---
order: 10
title: 复杂布局
---

利用 `col` 可以构建复杂不规则布局。

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  template: `
  <form nz-form #f="ngForm" na-edit-wrap size="compact" gutter="24">
    <na-edit label="ID" col="1">1000</na-edit>
    <na-edit label="Name" required col="3">
      <input type="text" nz-input [(ngModel)]="i.user_name" name="user_name" required>
    </na-edit>
    <na-edit label="Age" required col="3">
      <input type="text" nz-input [(ngModel)]="i.user_age" name="user_age" required>
    </na-edit>
    <na-edit label="Brithday" required col="3">
      <input type="text" nz-input [(ngModel)]="i.user_birthday" name="user_birthday" required>
    </na-edit>
    <na-edit label="App Key" required>
      <input type="text" nz-input [(ngModel)]="i.ak" name="ak" required>
    </na-edit>
    <na-edit label="App Secret" required>
      <input type="text" nz-input [(ngModel)]="i.sk" name="sk" required maxlength="32">
    </na-edit>
    <na-edit label="Phone Number" required>
      <nz-input-group [nzAddOnBefore]="addOnBeforeTemplate">
        <ng-template #addOnBeforeTemplate>
          <nz-select [(ngModel)]="i.phoneNumberPrefix" name="phoneNumberPrefix" style="width: 70px;">
            <nz-option nzLabel="+86" nzValue="+86"></nz-option>
            <nz-option nzLabel="+87" nzValue="+87"></nz-option>
          </nz-select>
        </ng-template>
        <input type="text" nz-input [(ngModel)]="i.phoneNumber" name="phoneNumber" required maxlength="32">
      </nz-input-group>
    </na-edit>
    <na-edit>
      <label nz-checkbox [(ngModel)]="i.agree" name="agree">
        <span>I have read the <a>agreement</a></span>
      </label>
    </na-edit>
    <na-edit col="1">
      <button nz-button nzType="primary" [disabled]="f.invalid">Save</button>
    </na-edit>
  </form>`,
})
export class DemoComponent {
  i: any = {
    phoneNumberPrefix: '+86',
    agree: true
  };
}
```
