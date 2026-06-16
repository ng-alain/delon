---
title: boolean
subtitle: 开关
type: Widgets
order: 4
---

开关选择器

## API

### schema 属性

| 参数         | 说明     | 类型      | 默认值 |
| ------------ | -------- | --------- | ------ |
| `[readOnly]` | 禁用状态 | `boolean` | -      |

### ui 属性

| 参数                  | 说明                | 类型            | 默认值    |
| --------------------- | ------------------- | --------------- | --------- |
| `[size]`              | 大小，等同 `nzSize` | `default,small` | `default` |
| `[checkedChildren]`   | 选中时的内容        | `string`        | -         |
| `[unCheckedChildren]` | 非选中时的内容      | `string`        | -         |
| `[loading]` | 加载中的开关 | `boolean` | `false` |

---

## 代码示例

### 基础样例

最简单的用法。

```typescript
import { Component, inject } from '@angular/core';

import { DelonFormModule, SFSchema } from '@delon/form';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'form-boolean-simple',
  template: ` <sf [schema]="schema" (formSubmit)="submit($event)" /> `,
  imports: [DelonFormModule]
})
export class FormBooleanSimple {
  private readonly msg = inject(NzMessageService);
  schema: SFSchema = {
    properties: {
      status: {
        type: 'boolean',
        title: '是否启用'
      },
      // 指定内容文本
      enabled: {
        type: 'boolean',
        title: '是否启用',
        ui: {
          checkedChildren: '开',
          unCheckedChildren: '关'
        }
      }
    }
  };

  submit(value: {}): void {
    this.msg.success(JSON.stringify(value));
  }
}
```
