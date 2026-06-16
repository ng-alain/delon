---
title: tag
subtitle: 标签
type: Non-built-in widgets
---

进行标记和分类的小标签，**注：** 只支持 `checkable` 标签模式。

## 如何使用

非内置模块，需要额外在 [json-schema](https://github.com/ng-alain/ng-alain/blob/master/src/app/shared/json-schema/index.ts#L9) 注册 `withTagWidget`。

## API

### schema 属性

| 成员 | 说明 | 类型 | 默认值 |
|----|----|----|-----|
| `[enum]` | 数据源 | `SFSchemaEnumType[]` | - |

### ui 属性

| 成员 | 说明 | 类型 | 默认值 |
|----|----|----|-----|
| `[asyncData]` | 异步数据源 | `() => Observable<SFSchemaEnumType[]>` | - |
| `[mode]` | 设定标签工作的模式 | `'closeable'｜'default'｜'checkable'` | `'checkable'` |
| `[onClose]` | 关闭时的回调，在 `nzMode="closable"` 时可用 | `(e:MouseEvent) => void` | - |
| `[checkedChange]` | 设置标签的选中状态的回调 | `(status: boolean) => void` | - |

---

## 代码示例

### 基础样例

最简单的用法。

```typescript
import { Component, inject } from '@angular/core';
import { of, delay } from 'rxjs';

import { DelonFormModule, SFIcon, SFSchema } from '@delon/form';
import type { SFTagWidgetSchema } from '@delon/form/widgets/tag';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'form-tag-simple',
  template: ` <sf [schema]="schema" (formSubmit)="submit($event)" /> `,
  imports: [DelonFormModule]
})
export class FormTagSimple {
  private readonly msg = inject(NzMessageService);
  schema: SFSchema = {
    properties: {
      like: {
        type: 'number',
        title: '兴趣',
        enum: [
          { value: 1, label: '电影' },
          { value: 2, label: '书' },
          { value: 3, label: '旅行' }
        ],
        ui: {
          widget: 'tag'
        } as SFTagWidgetSchema,
        default: [1, 2]
      },
      like1: {
        type: 'number',
        title: '兴趣',
        ui: {
          widget: 'tag',
          asyncData: () =>
            of([
              { value: 1, label: '电影' },
              { value: 2, label: '书' },
              { value: 3, label: '旅行' }
            ]).pipe(delay(10))
        } as SFTagWidgetSchema,
        default: [1, 2]
      },
      icon: {
        type: 'number',
        title: '兴趣',
        enum: [
          { value: 1, label: 'Twitter', prefixIcon: { type: 'twitter' } as SFIcon },
          { value: 2, label: 'Facebook', suffixIcon: { type: 'facebook' } as SFIcon }
        ],
        ui: {
          widget: 'tag'
        } as SFTagWidgetSchema
      }
    }
  };

  submit(value: {}): void {
    this.msg.success(JSON.stringify(value));
  }
}
```
