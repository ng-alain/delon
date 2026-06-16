---
title: search
subtitle: 搜索
type: Examples
---

搜索条件较多时，使用展开/收缩来节省空间。

通过 `mode="search"` 快速设置搜索模式，会自动将 `layout` 设置为 `inline`、`liveValidate` 设置为 `false`、按钮文本改为 `搜索`。

配合 <a href="/form/getting-started/zh#sf">expandable</a> 将不重要的字段标记为 <a href="/form/schema/zh#%E6%B8%B2%E6%9F%93%E7%B1%BB">collapse</a>，默认折叠以保持界面简洁。

---

## 代码示例

### 基础样例

搜索表单配合展开/收缩，默认只显示常用字段，不重要的字段折叠起来。

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
