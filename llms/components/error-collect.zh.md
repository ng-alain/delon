---
type: Form
title: error-collect
subtitle: 表单异常消息采集器
cols: 2
module: import { ErrorCollectModule } from '@delon/abc/error-collect';
---

一个简单的表单异常消息采集器，点击图标跳转相应的位置；必须是一个标准 `form` 表单。

## API

### error-collect

| 成员 | 说明 | 类型 | 默认值 | 全局配置 |
|----|----|----|-----|------|
| `[freq]` | 监听频率，单位：毫秒 | `number` | `250` | ✅ |
| `[offsetTop]` | 顶部偏移值，单位：`px` | `number` | `145` | ✅ |

---

## 代码示例

### 基础

一般配合 `footer-toolbar` 一起使用。

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
