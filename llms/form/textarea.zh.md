---
title: textarea
subtitle: 多行文本框
type: Widgets
---

一般用于多行字符串。

## API

### schema 属性

| 成员 | 说明 | 类型 | 默认值 |
|----|----|----|-----|
| `[maxLength]` | 表单最大长度 | `number` | - |
| `[readOnly]` | 禁用状态 | `boolean` | - |

### ui 属性

| 成员 | 说明 | 类型 | 默认值 |
|----|----|----|-----|
| `[size]` | 大小，等同 `nzSize` | `string` | - |
| `[placeholder]` | 在文字框中显示提示讯息 | `string` | - |
| `[autosize]` | 自适应内容高度，可设置对象：`{ minRows: 2, maxRows: 6 }` | `{ minRows?: number; maxRows?: number }` | `{ minRows: 1, maxRows: 0 }` |
| `[variant]` | 变体 | `outlined,borderless,filled,underlined` | `outlined` |
| `[maxCharacterCount]` | `textarea` 数字提示显示的最大值 | `number` | - |
| `[computeCharacterCount]` | 自定义计算 `characterCount` 的函数 | `(v: string) => number` | `v => v.length` |
| `[change]` | 内容变更事件 | `(val: string) => void` | - |
| `[focus]` | 焦点事件 | `(e: FocusEvent) => void` | - |
| `[blur]` | 失焦事件 | `(e: FocusEvent) => void` | - |

---

## 代码示例

### 基础样例

最简单的用法。

```typescript
import { Component, inject } from '@angular/core';

import { DelonFormModule, SFSchema, SFTextareaWidgetSchema } from '@delon/form';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'form-textarea-simple',
  template: ` <sf [schema]="schema" (formSubmit)="submit($event)" /> `,
  imports: [DelonFormModule]
})
export class FormTextareaSimple {
  private readonly msg = inject(NzMessageService);
  schema: SFSchema = {
    properties: {
      remark: {
        type: 'string',
        title: '描述',
        ui: {
          widget: 'textarea',
          autosize: { minRows: 2, maxRows: 6 },
          change: val => console.log('change', val),
          focus: ev => console.log('focus', ev),
          blur: ev => console.log('blur', ev)
        } as SFTextareaWidgetSchema
      },
      max: {
        type: 'string',
        title: 'Max',
        ui: {
          widget: 'textarea',
          maxCharacterCount: 100
        } as SFTextareaWidgetSchema
      }
    }
  };

  submit(value: {}): void {
    this.msg.success(JSON.stringify(value));
  }
}
```
