---
title:
  zh-CN: 基础样例
  en-US: Basic Usage
order: 0
---

## zh-CN

最简单的用法。

## en-US

Simplest of usage.

```ts
import { Component, inject } from '@angular/core';

import { ACLService } from '@delon/acl';
import { DelonFormModule, SFSchema } from '@delon/form';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-demo',
  template: `
    <sf [schema]="schema" (formSubmit)="submit($event)" />
    <button nz-button nzType="primary" (click)="acl.setFull(true)">Full</button>
    <button nz-button nzType="primary" (click)="acl.setFull(false)">Not Full</button>
    <button nz-button nzType="primary" (click)="acl.setRole(['admin'])">Admin Role</button>
    <button nz-button nzType="primary" (click)="acl.setRole(['user'])">User Role</button>
  `,
  standalone: true,
  imports: [DelonFormModule, NzButtonModule]
})
export class DemoComponent {
  private readonly msg = inject(NzMessageService);
  readonly acl = inject(ACLService);
  schema: SFSchema = {
    properties: {
      name: {
        type: 'string',
        title: 'name-user',
        ui: {
          acl: 'user'
        }
      },
      age: {
        type: 'string',
        title: 'age-admin',
        ui: {
          acl: 'admin'
        }
      }
    },
    required: ['name']
  };

  submit(value: {}): void {
    this.msg.success(JSON.stringify(value));
  }
}
```
