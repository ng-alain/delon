---
title: checkbox
subtitle: Checkbox
type: Widgets
---

Checkbox.

## API

### schema

Property        | Description                                 | Type                 | Default
----------------|---------------------------------------------|----------------------|--------
`[readOnly]`    | Whether to disable the state                | `boolean`            | -
`[enum]`        | Render checkbox group when the value exists | `SFSchemaEnumType[]` | -
`[title]`       | Text of the single checkbox                 | `string`             | -
`[description]` | Help text of the single checkbox            | `string`             | -

### ui

Property | Description | Type | Default
-------- | ----------- | ---- | -------
`[asyncData]` | Async data source, render checkbox group when the value exists  | `() => Observable<SFSchemaEnumType[]>` | -
`[span]` | Raster number of cells to occupy | `number` | -
`[styleType]` | Style of the `nz-checkbox` | `default, button` | `default`
`[checkAll]` | Whether to select all  | `boolean` | -
`[checkAllText]` | Select all button text  | `string` | `全选`
`[change]` | Changed event, Parameter: single checkbox is `boolean`, otherwise `SFSchemaEnum[]` | `(res: boolean | SFSchemaEnum[]) => void` | -

---

## Examples

### Basic Usage

Simplest of usage.

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
