---
title: rate
subtitle: 评分
type: Non-built-in widgets
---

对评价进行展示，对事物进行快速的评级操作。

## 如何使用

非内置模块，需要额外在 [json-schema](https://github.com/ng-alain/ng-alain/blob/master/src/app/shared/json-schema/index.ts#L9) 注册 `withRateWidget`。

## API

### schema 属性

| 成员 | 说明 | 类型 | 默认值 |
|----|----|----|-----|
| `[maximum]` | 总星数 | `number` | `5` |
| `[multipleOf]` | `0.5` 表示允许半选，其它值表示不允许 | `number` | `0.5` |

### ui 属性

| 成员 | 说明 | 类型 | 默认值 |
|----|----|----|-----|
| `[allowClear]` | 是否允许再次点击后清除 | `boolean` | `true` |
| `[autoFocus]` | 自动获取焦点 | `boolean` | `false` |
| `[text]` | 提醒文本模板，`{{value}}` 表示当前值（注意无任何空格） | `string` | - |
| `[tooltips]` | 自定义每项的提示信息 | `string[]` | `[]` |

---

## 代码示例

### 基础样例

最简单的用法。

```typescript
import { Component, inject } from '@angular/core';

import { DelonFormModule, SFSchema } from '@delon/form';
import type { SFRateWidgetSchema } from '@delon/form/widgets/rate';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'form-rate-simple',
  template: ` <sf [schema]="schema" (formSubmit)="submit($event)" /> `,
  imports: [DelonFormModule]
})
export class FormRateSimple {
  private readonly msg = inject(NzMessageService);
  schema: SFSchema = {
    properties: {
      rate: {
        type: 'number',
        title: '评级',
        default: 4.5,
        ui: {
          widget: 'rate'
        } as SFRateWidgetSchema
      },
      // 允许半选
      rate2: {
        type: 'number',
        title: '评级',
        maximum: 5,
        multipleOf: 0.5,
        default: 4.5,
        ui: {
          widget: 'rate',
          text: '{{value}} starts'
        } as SFRateWidgetSchema
      }
    }
  };

  submit(value: {}): void {
    this.msg.success(JSON.stringify(value));
  }
}
```
