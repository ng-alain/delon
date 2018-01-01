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
    <form [formGroup]="form">
        <div nz-form-control [nzValidateStatus]="name">
            <nz-input formControlName="name" [nzPlaceHolder]="'required'" [nzSize]="'large'"></nz-input>
        </div>
        <footer-toolbar errorCollect>
            <button nz-button [nzType]="'primary'" [nzSize]="'large'">Submit</button>
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
