---
type: Layout
title: footer-toolbar
subtitle: 底部工具栏
cols: 1
module: import { FooterToolbarModule } from '@delon/abc/footer-toolbar';
---

固定在底部的工具栏。

## 何时使用

固定在内容区域的底部，不随滚动条移动，常用于长页面的数据搜集和提交工作。

## API

### footer-toolbar

| 成员 | 说明 | 类型 | 默认值 |
|----|----|----|-----|
| `ng-content` | 工具栏内容，向右对齐 | `-` | - |
| `[errorCollect]` | 是否需要 `error-collect`，务必包裹在 `<form>` 元素内 | `boolean` | `false` |
| `[extra]` | 额外信息，向左对齐 | `string,TemplateRef<void>` | - |

---

## 代码示例

### 基础

浮动固定页脚，常用于表单页。

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
