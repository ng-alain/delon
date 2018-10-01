---
order: 0
title: 基础
---

浮动固定页脚，常用于表单页。

```ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-demo',
  template: `
  <form nz-form [formGroup]="form">
    <nz-form-control [nzValidateStatus]="name">
      <input nz-input formControlName="name" placeholder="required">
    </nz-form-control>
    <footer-toolbar errorCollect extra="This is extra area">
      <button nz-button nzType="primary">Submit</button>
    </footer-toolbar>
  </form>
    `
})
export class DemoComponent implements OnInit {
  form: FormGroup;
  constructor(fb: FormBuilder) {
    this.form = fb.group({
      name: [ null, Validators.required ]
    });
  }

  get name() { return this.form.controls.name; }

  ngOnInit(): void {
    this.name.markAsDirty();
  }
}
```
