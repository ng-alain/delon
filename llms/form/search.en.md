---
title: search
subtitle: Search
type: Examples
---

Use expand/collapse to save space when there are many search conditions.

Set `mode="search"` to quickly configure search mode, which automatically sets `layout` to `inline`, `liveValidate` to `false`, and changes button text to `Search`.

Combine with <a href="/form/getting-started/en#sf">expandable</a> to mark less important fields as <a href="/form/schema/en#Render-Type">collapse</a>, collapsed by default to keep the UI clean.

---

## Examples

### Basic Usage

Search form with expand/collapse, only show common fields by default, collapse less important fields.

```typescript
import { Component } from '@angular/core';

import { DelonFormModule, SFSchema } from '@delon/form';

@Component({
  selector: 'form-search-simple',
  template: `
    <sf
      mode="search"
      [schema]="schema"
      [expandable]="true"
      (formSubmit)="submit($event)"
      (formReset)="reset()"
    />
  `,
  imports: [DelonFormModule]
})
export class FormSearchSimple {
  schema: SFSchema = {
    properties: {
      name: {
        type: 'string',
        title: '姓名',
        ui: { placeholder: '请输入姓名' }
      },
      email: {
        type: 'string',
        title: '邮箱',
        format: 'email',
        ui: { placeholder: '请输入邮箱' }
      },
      role: {
        type: 'string',
        title: '角色',
        enum: ['管理员', '编辑', '访客'],
        ui: { placeholder: '请选择角色' }
      },
      createdDate: {
        type: 'string',
        title: '创建日期',
        ui: { widget: 'date', collapse: true, width: 200 }
      },
      status: {
        type: 'string',
        title: '状态',
        enum: ['启用', '禁用'],
        ui: { collapse: true, placeholder: '请选择状态', width: 150 }
      },
      remark: {
        type: 'string',
        title: '备注',
        ui: { collapse: true, widget: 'textarea', autosize: true, width: 300 }
      }
    }
  };

  submit(value: {}): void {
    console.log('search', value);
  }

  reset(): void {
    console.log('reset');
  }
}
```
