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
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SEModule } from '@delon/abc/se';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-demo',
  template: ` <form nz-form #f="ngForm" se-container gutter="32">
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
  </form>`,
  imports: [SEModule, NzFormModule, NzInputModule, FormsModule, NzButtonModule]
})
export class DemoComponent {
  readonly msg = inject(NzMessageService);
  i: { ak?: string; sk?: string } = {};
}
```
