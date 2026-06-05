---
title:
  zh-CN: 基础样例
  en-US: Basic Usage
order: 0
---

## zh-CN

搜索表单配合展开/收缩，默认只显示常用字段，不重要的字段折叠起来。

## en-US

Search form with expand/collapse, only show common fields by default, collapse less important fields.

```ts
import { Component } from '@angular/core';

import { DelonFormModule, SFSchema } from '@delon/form';

@Component({
  selector: 'app-demo',
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
export class DemoComponent {
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
