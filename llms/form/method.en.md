---
title: method
subtitle: Built-in methods
type: Examples
---

`SFComponent` provides some shortcut methods, such as: `setValue`, `setDisabled`, `setRequired`, etc.

---

## Examples

### Basic Usage

Simplest of usage.

```typescript
import { Component, DestroyRef, ViewChild, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { timer } from 'rxjs';

import { DelonFormModule, SFComponent, SFSchema } from '@delon/form';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'form-method-simple',
  template: `
    <p class="mb-md">
      <button nz-button (click)="getUserNameValue()">Get userName value</button>
      <button nz-button (click)="modifyUserNameValue()">Modify userName value</button>
      <button nz-button (click)="toggleUserNameRequired()">Toggle userName required</button>
      <button nz-button (click)="toggleUserNameDisabled()">Toggle userName disabled</button>
      <button nz-button (click)="triggerUserNameAsyncStatus()">userName async status</button>
    </p>
    <sf #sf [schema]="schema" (formSubmit)="submit($event)" />
  `,
  imports: [DelonFormModule, NzButtonModule]
})
export class FormMethodSimple {
  @ViewChild('sf') private readonly sf!: SFComponent;
  private readonly msg = inject(NzMessageService);
  private readonly d$ = inject(DestroyRef);
  schema: SFSchema = {
    properties: {
      userName: { type: 'string', title: '用户名' },
      pwd: { type: 'string', title: '密码' }
    },
    required: ['userName', 'pwd']
  };

  private get userNameRequired(): boolean {
    return (this.sf.getProperty('/userName')?.parent?.schema.required ?? []).includes('userName');
  }

  private get userNameDisabled(): boolean {
    return this.sf.getProperty('/userName')?.schema?.readOnly === true;
  }

  toggleUserNameRequired(): void {
    this.sf.setRequired(`/userName`, !this.userNameRequired);
  }

  toggleUserNameDisabled(): void {
    this.sf.setDisabled(`/userName`, !this.userNameDisabled);
  }

  modifyUserNameValue(): void {
    this.sf.setValue(`/userName`, `Mock text ${+new Date()}`);
  }

  getUserNameValue(): void {
    this.msg.info(this.sf.getValue('/userName'));
  }

  triggerUserNameAsyncStatus(): void {
    this.sf.updateFeedback('/userName', 'validating');
    timer(1000 * 2)
      .pipe(takeUntilDestroyed(this.d$))
      .subscribe(() => {
        this.sf.updateFeedback('/userName', 'success');
      });
  }

  submit(value: {}): void {
    this.msg.success(JSON.stringify(value));
  }
}
```
