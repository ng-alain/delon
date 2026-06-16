---
title: radio
subtitle: 单选框
type: Widgets
---

单选框。

## API

### schema 属性

| 参数         | 说明     | 类型                 | 默认值 |
|--------------|--------|----------------------|--------|
| `[enum]`     | 数据源   | `SFSchemaEnumType[]` | -      |
| `[readOnly]` | 禁用状态 | `boolean`            | -      |

### ui 属性

| 参数          | 说明               | 类型                                   | 默认值    |
|---------------|------------------|----------------------------------------|-----------|
| `[asyncData]` | 异步数据源         | `() => Observable<SFSchemaEnumType[]>` | -         |
| `[size]`      | 大小，等同 `nzSize` | `string`                               | -         |
| `[styleType]` | radio 的样式       | `default, button`                      | `default` |
| `[change]`    | 值变更事件         | `(res: SFValue) => void`               | -         |
| `[buttonStyle]` | RadioButton 的风格样式，目前有描边和填色两种风格 | `'outline'｜'solid'` | `'outline'` |

---

## 代码示例

### 基础样例

最简单的用法。

```typescript
import { Component, inject } from '@angular/core';
import { of, delay } from 'rxjs';

import { DelonFormModule, SFRadioWidgetSchema, SFSchema } from '@delon/form';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'form-radio-simple',
  template: ` <sf [schema]="schema" (formSubmit)="submit($event)" /> `,
  imports: [DelonFormModule]
})
export class FormRadioSimple {
  private readonly msg = inject(NzMessageService);
  schema: SFSchema = {
    properties: {
      btn: {
        type: 'string',
        title: 'Button',
        enum: ['A', 'B', 'C'],
        ui: {
          widget: 'radio',
          styleType: 'button',
          buttonStyle: 'solid'
        } as SFRadioWidgetSchema,
        default: 'A'
      },
      // 异步数据
      async: {
        type: 'string',
        title: 'Async',
        ui: {
          widget: 'radio',
          asyncData: () =>
            of([
              { label: '男', value: 'M' },
              { label: '女', value: 'F' },
              { label: '未知', value: 'N' }
            ]).pipe(delay(100)),
          change: console.log
        } as SFRadioWidgetSchema,
        default: 'N'
      }
    }
  };

  submit(value: {}): void {
    this.msg.success(JSON.stringify(value));
  }
}
```
