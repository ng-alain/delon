---
type: Form
title: error-collect
subtitle: Error Collect
cols: 2
module: import { ErrorCollectModule } from '@delon/abc/error-collect';
---

A simple form exception messages collector that jump to element location via click icon; it must be a standard `form`.

## API

### error-collect

| Property | Description | Type | Default | Global Config |
|----------|-------------|------|---------|---------------|
| `[freq]` | Monitor frequency, unit is milliseconds | `number` | `250` | ✅ |
| `[offsetTop]` | Top offset, unit is `px` | `number` | `145` | ✅ |

---

## Examples

### undefined

```typescript
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { ErrorCollectComponent } from '@delon/abc/error-collect';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';

@Component({
  selector: 'components-error-collect-basic',
  template: `
    <form nz-form [formGroup]="validateForm">
      <nz-form-item>
        <nz-form-control>
          <input nz-input formControlName="email" id="email" />
        </nz-form-control>
      </nz-form-item>
      <error-collect />
    </form>
  `,
  imports: [NzFormModule, ReactiveFormsModule, NzInputModule, ErrorCollectComponent]
})
export class ComponentsErrorCollectBasic implements OnInit {
  validateForm = new FormGroup({
    email: new FormControl(null, [Validators.required])
  });

  get email(): FormControl<string | null> {
    return this.validateForm.controls.email;
  }

  ngOnInit(): void {
    this.email.markAsDirty();
  }
}
```
