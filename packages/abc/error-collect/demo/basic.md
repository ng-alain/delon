---
order: 0
title: 基础
---

一般配合 `footer-toolbar` 一起使用。

```ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-demo',
    template: `
    <form nz-form [formGroup]="validateForm">
        <nz-form-item>
            <nz-form-control>
                <input nz-input formControlName="email" id="email">
            </nz-form-control>
        </nz-form-item>
        <error-collect></error-collect>
    </form>
    `
})
export class DemoComponent implements OnInit {
    validateForm: FormGroup;
    constructor(fb: FormBuilder) {
        this.validateForm = fb.group({
            email: [ null, [Validators.required] ]
        });
    }

    get email() { return this.validateForm.controls.email; }

    ngOnInit(): void {
        this.email.markAsDirty();
    }
}
```
