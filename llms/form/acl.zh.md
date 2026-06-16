---
title: acl
subtitle: ACL
type: Examples
---

结合 `@delon/acl` 权限可以利用一个 Schema 来构建不同角色或权限点的表单。

---

## 代码示例

### 基础样例

最简单的用法。

```typescript
import { Component, inject } from '@angular/core';

import { ACLService } from '@delon/acl';
import { DelonFormModule, SFSchema } from '@delon/form';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'form-acl-simple',
  template: `
    <sf [schema]="schema" (formSubmit)="submit($event)" />
    <button nz-button nzType="primary" (click)="acl.setFull(true)">Full</button>
    <button nz-button nzType="primary" (click)="acl.setFull(false)">Not Full</button>
    <button nz-button nzType="primary" (click)="acl.setRole(['admin'])">Admin Role</button>
    <button nz-button nzType="primary" (click)="acl.setRole(['user'])">User Role</button>
  `,
  imports: [DelonFormModule, NzButtonModule]
})
export class FormAclSimple {
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
