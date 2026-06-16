---
title: text
subtitle: 文本
type: Widgets
---

一般用于直接显示文本。

## 规则

- 强制取消 `required` 效果
- 若不指定 `defaultText` 值不存在时自动渲染 `-`

## API

### ui 属性

| 参数 | 说明 | 类型 | 默认值 |
|----|----|----|-----|
| `[defaultText]` | 当值不存在时所指定的文本 | `string` | `-` |
| `[html]` | 是否支持HTML | `boolean` | `true` |

---

## 代码示例

### 基础样例

最简单的用法。

```typescript
import { Component, inject } from '@angular/core';

import { DelonFormModule, SFSchema, SFStringWidgetSchema, SFTextWidgetSchema } from '@delon/form';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'form-text-simple',
  template: ` <sf [schema]="schema" [loading]="loading" (formSubmit)="submit($event)" /> `,
  imports: [DelonFormModule]
})
export class FormTextSimple {
  private readonly msg = inject(NzMessageService);
  loading = false;
  schema: SFSchema = {
    properties: {
      id1: { type: 'number', ui: { widget: 'text' } as SFTextWidgetSchema },
      id2: { type: 'number', ui: { widget: 'text', defaultText: 'default text' } as SFTextWidgetSchema },
      name: {
        type: 'string',
        title: 'Name',
        ui: {
          addOnAfter: 'RMB',
          placeholder: 'RMB结算'
        } as SFStringWidgetSchema
      }
    },
    required: ['name']
  };

  submit(value: {}): void {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
      this.msg.success(JSON.stringify(value));
    }, 1000);
  }
}
```
