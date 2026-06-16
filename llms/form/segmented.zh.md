---
title: segmented
subtitle: 分段控制器
type: Non-built-in widgets
---

- 用于展示多个选项并允许用户选择其中单个选项；
- 当切换选中选项时，关联区域的内容会发生变化。

## 如何使用

非内置模块，需要额外在 [json-schema](https://github.com/ng-alain/ng-alain/blob/master/src/app/shared/json-schema/index.ts#L9) 注册 `withSegmentedWidget`。

## API

### ui 属性

| 成员 | 说明 | 类型 | 默认值 |
|----|----|----|-----|
| `[block]` | 将宽度调整为父元素宽度的选项 | `boolean` | false |  |
| `[asyncData]` | 异步数据 | `() => Observable<NzSegmentedOptions>` | - |  |
| `(valueChange)` | 当前选中项目变化时触发回调 | `(data: { index: number; item: SFValue }) => void` | - |  |

---

## 代码示例

### 基础样例

最简单的用法。

```typescript
import { Component, inject } from '@angular/core';
import { delay, of } from 'rxjs';

import { DelonFormModule, SFSchema } from '@delon/form';
import { SFSegmentedWidgetSchema, SegmentedWidget } from '@delon/form/widgets/segmented';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzSegmentedOptions } from 'ng-zorro-antd/segmented';

@Component({
  selector: 'form-segmented-simple',
  template: `<sf [schema]="schema" (formSubmit)="submit($event)" />`,
  imports: [DelonFormModule]
})
export class FormSegmentedSimple {
  private readonly msg = inject(NzMessageService);
  schema: SFSchema = {
    properties: {
      base: {
        type: 'string',
        title: 'Base',
        default: 2,
        enum: ['Daily', 'Weekly', 'Monthly', 'Quarterly', 'Yearly'],
        ui: {
          widget: SegmentedWidget.KEY,
          valueChange: console.log
        } as SFSegmentedWidgetSchema
      },
      asyncData: {
        type: 'string',
        title: 'Async Data',
        ui: {
          widget: SegmentedWidget.KEY,
          asyncData: () =>
            of([
              { label: 'Label1', value: 'a' },
              { label: 'Label2', value: 'b' },
              { label: 'Label3', value: 'c', disabled: true }
            ] as NzSegmentedOptions).pipe(delay(1000)),
          valueChange: console.log
        } as SFSegmentedWidgetSchema
      }
    }
  };

  submit(value: {}): void {
    this.msg.success(JSON.stringify(value));
  }
}
```
