---
title:
  zh-CN: 基础样例
  en-US: Basic Usage
order: 0
---

## zh-CN

使用 `sf-template` 指令在当前表单自定义复杂部件。

## en-US

Use the `sf-template` directive to custom complex widget in the current form.

```ts
import { Component, ViewChild } from '@angular/core';

import { SFComponent, SFSchema } from '@delon/form';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-demo',
  template: `
    <sf #sf [schema]="schema" (formSubmit)="submit($event)">
      <ng-template sf-template="formName" let-i let-ui="ui" let-schema="schema">
        <div nz-row>
          <div nz-col>
            <input
              nz-input
              [attr.id]="i.id"
              [disabled]="i.disabled"
              [attr.disabled]="i.disabled"
              [nzSize]="i.size"
              [ngModel]="i.value"
              (ngModelChange)="i.setValue($event)"
            />
          </div>
          <div nz-col>
            <button nz-button type="button" nzType="link" (click)="updateQr()">{{ ui.btnText }}</button>
          </div>
        </div>
      </ng-template>
      <ng-template sf-template="qr" let-i let-ui="ui" let-schema="schema">
        <qr [value]="i.value"></qr>
      </ng-template>
    </sf>
  `
})
export class DemoComponent {
  @ViewChild('sf') readonly sf!: SFComponent;
  schema: SFSchema = {
    properties: {
      formName: {
        type: 'string',
        title: 'Custom Title',
        ui: {
          widget: 'custom',
          btnText: 'Update Qr'
        },
        default: 'test'
      },
      qr: {
        type: 'string',
        ui: {
          widget: 'custom'
        },
        default: 'https://ng-alain.com'
      }
    }
  };

  constructor(private msg: NzMessageService) {}

  updateQr(): void {
    const formNameValue = this.sf.getProperty('/formName')?.value;
    const qr = this.sf.getProperty('/qr');
    qr?.setValue(formNameValue, true);
    this.msg.info(`Suc`);
  }

  submit(value: {}): void {
    this.msg.success(JSON.stringify(value));
  }
}
```
