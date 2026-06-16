---
title: checkbox
subtitle: 多选框
type: Widgets
---

一组可选项中进行多项选择时

## API

### schema 属性

成员 | 说明 | 类型 | 默认值
----|------|-----|------
`[enum]` | 数据源，当数据源存在于表示一组多选框 | `SFSchemaEnumType[]` | -
`[readOnly]` | 禁用状态  | `boolean` | -
`[title]` | 无 `enum` 时表示多选框文本内容  | `string` | -
`[description]` | 无 `enum` 时表示多选框后帮助信息  | `string` | -

### ui 属性

成员 | 说明 | 类型 | 默认值
----|------|-----|------
`[asyncData]` | 异步数据源  | `() => Observable<SFSchemaEnumType[]>` | -
`[span]` | 指定每个选框单元格数量 | `number` | -
`[styleType]` | radio的样式  | `default, button` | `default`
`[checkAll]` | 是否需要全选  | `boolean` | -
`[checkAllText]` | 全选按钮文本  | `string` | `全选`
`[change]` | 值变更事件，参数：单个多选框为 `boolean`，否则为 `SFSchemaEnum[]` | `(res: boolean | SFSchemaEnum[]) => void` | -

---

## 代码示例

### 基础样例

最简单的用法。

```typescript
import { Component, inject } from '@angular/core';
import { of, delay } from 'rxjs';

import { DelonFormModule, SFCheckboxWidgetSchema, SFSchema } from '@delon/form';
import type { SFCascaderWidgetSchema } from '@delon/form/widgets/cascader';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'form-checkbox-simple',
  template: ` <sf [schema]="schema" (formSubmit)="submit($event)" /> `,
  imports: [DelonFormModule]
})
export class FormCheckboxSimple {
  private readonly msg = inject(NzMessageService);
  schema: SFSchema = {
    properties: {
      // 单个多选框
      single: {
        type: 'boolean',
        title: '同意本协议',
        description: '《用户协议》',
        ui: {
          widget: 'checkbox'
        } as SFCascaderWidgetSchema,
        default: true
      },
      // 多选框组
      mulit: {
        type: 'string',
        title: 'Mulit',
        enum: ['Apple', 'Pear', 'Orange'],
        ui: {
          widget: 'checkbox',
          span: 8, // 指定每一项 8 个单元的布局
          checkAll: true
        } as SFCheckboxWidgetSchema,
        default: ['Apple']
      },
      // 异步数据
      async: {
        type: 'string',
        title: 'Async',
        ui: {
          widget: 'checkbox',
          asyncData: () =>
            of([
              { label: 'Apple', value: 'Apple' },
              { label: 'Pear', value: 'Pear' },
              { label: 'Orange', value: 'Orange' }
            ]).pipe(delay(200))
        } as SFCheckboxWidgetSchema,
        default: ['Apple']
      }
    }
  };

  submit(value: {}): void {
    this.msg.success(JSON.stringify(value));
  }
}
```
