---
type: Layout
title: footer-toolbar
subtitle: FooterToolbar
cols: 1
module: import { FooterToolbarModule } from '@delon/abc/footer-toolbar';
---

A toolbar fixed at the bottom.

## Usage

It is fixed at the bottom of the content area and does not move along with the scroll bar, which is usually used for data collection and submission for long pages.

## API

### footer-toolbar

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `ng-content` | toolbar content, align to the right | `-` | - |
| `[errorCollect]` | Whether `error-collect`, make sure to wrap inside the `<form>` element | `boolean` | `false` |
| `[extra]` | extra information, align to the left | `string,TemplateRef<void>` | - |

---

## Examples

### undefined

```typescript
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { FooterToolbarComponent } from '@delon/abc/footer-toolbar';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';

@Component({
  selector: 'components-footer-toolbar-basic',
  template: `
    <form nz-form [formGroup]="form">
      <nz-form-item>
        <nz-form-control [nzValidateStatus]="name">
          <input nz-input formControlName="name" placeholder="required" />
        </nz-form-control>
      </nz-form-item>
      <footer-toolbar errorCollect extra="This is extra area">
        <button nz-button nzType="primary">Submit</button>
      </footer-toolbar>
    </form>
  `,
  imports: [NzFormModule, ReactiveFormsModule, NzInputModule, FooterToolbarComponent, NzButtonModule]
})
export class ComponentsFooterToolbarBasic implements OnInit {
  form = new FormGroup({
    name: new FormControl(null, [Validators.required])
  });

  get name(): FormControl<string | null> {
    return this.form.controls.name;
  }

  ngOnInit(): void {
    this.name.markAsDirty();
  }
}
```
