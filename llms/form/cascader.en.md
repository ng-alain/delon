---
title: cascader
subtitle: Cascader
type: Non-built-in widgets
---

Usually, it's used in province/city/district, company hierarchy, category of things, etc.

## How to use

Non-built-in modules need to additionally register `withCascaderWidget` in [json-schema](https://github.com/ng-alain/ng-alain/blob/master/src/app/shared/json-schema/index.ts#L9).

## Note

- Value of `default` or `formData` should always be an array, for example, city cascade may only save leaf node `value`, but you need to manually provide the whole data chain `value` array

## Data Source

**Static**

One time fetching data, data source is from `asyncData`, `enum`.

**Realtime**

Every select triggers a HTTP request, data source is from `asyncData`; includes three parameters `(node: NzCascaderOption, index: number, me: CascaderWidget) => PromiseLike<any>`, `me` indicates instance of the current widget.

## API

### schema

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `[enum]` | Static data source | `SFSchemaEnumType[]` | - |
| `[readOnly]` | Read only | `boolean` | - |

### ui

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `[asyncData]` | Asynchronous static data source | `(node: NzCascaderOption, index: number, me: CascaderWidget) => PromiseLike<any>` | - |
| `[size]` | Size, equals to `nzSize` | `string` | - |
| `[placeholder]` | Placeholder | `string` | - |
| `[showSearch]` | Whether support search | `bool` | `false` |
| `[allowClear]` | Whether show clear button | `bool` | `true` |
| `[clearValue]` | Default value when cleared | `any` | `undefined` |
| `[clearText]` | Title of clear button | `string` | `清除` |
| `[showArrow]` | Whether show arrow | `bool` | `true` |
| `[showInput]` | Whether show input | `bool` | `true` |
| `[menuClassName]` | Custom floating layer class name | `string` | - |
| `[menuStyle]` | Custom floating layer style | `string` | - |
| `[columnClassName]` | Custom style of data column in popup menu | `string` | - |
| `[notFoundContent]` | Content when dropdown list is empty | `string` | - |
| `[data]` | Initial data, is used in first column data, sub column is loaded by `children` option, or loaded by `load` asynchronous event | `Array` | - |
| `[enableCache]` | Whether cache asynchronous loaded data, should set it to false if data is changed in every asynchronous load | `bool` | `true` |
| `[expandTrigger]` | How is sub menu expanded, options: 'click' or 'hover' | `string` | `click` |
| `[changeOnSelect]` | When it is set to true, the value is changed when each level of menu option is selected, see details from above demo | `bool` | `false` |
| `[changeOn]` | Custom function to determine if it should have a change when a menu option is selected, will have a change when return value is true | `(option: NzCascaderOption, level: number) => boolean` | - |
| `[triggerAction]` | Trigger action to show menu | `('click', 'hover')[]` | `['click']` |
| `[valueProperty]` | Property of `value` | `string` | `value` |
| `[labelProperty]` | Property of `label` | `string` | `label` |
| `[multiple]` | Support multiple | `boolean` | `false` |
| `(visibleChange)` | Asynchronous load event | `(value: boolean) => void` | - |
| `(change)` | Selected value changed event | `(values: any[]) => void` | - |
| `(selectionChange)` | Select option changed event | `(values: NzCascaderOption[]) => void` | - |
| `(clear)` | Content clear event | `() => void` | - |

---

## Examples

### Basic Usage

Simplest of usage.

```typescript
import { Component, inject } from '@angular/core';

import { DelonFormModule, SFSchema } from '@delon/form';
import type { SFCascaderWidgetSchema } from '@delon/form/widgets/cascader';
import type { NzSafeAny } from 'ng-zorro-antd/core/types';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'form-cascader-simple',
  template: ` <sf [schema]="schema" (formSubmit)="submit($event)" /> `,
  imports: [DelonFormModule]
})
export class FormCascaderSimple {
  private readonly msg = inject(NzMessageService);
  schema: SFSchema = {
    properties: {
      static: {
        type: 'number',
        title: 'Static',
        enum: [
          {
            value: 110000,
            label: '北京',
            parent: 0,
            children: [
              {
                value: 110100,
                label: '北京市',
                parent: 110000,
                children: [
                  {
                    value: 110101,
                    label: '东城区',
                    parent: 110100,
                    isLeaf: true
                  },
                  {
                    value: 110105,
                    label: '朝阳区',
                    parent: 110100,
                    isLeaf: true
                  }
                ]
              }
            ]
          }
        ],
        ui: 'cascader',
        default: [110000, 110100, 110105]
      },
      async: {
        type: 'number',
        title: 'RealTime',
        ui: {
          widget: 'cascader',
          multiple: true,
          asyncData: (node, index) => {
            return new Promise(resolve => {
              setTimeout(() => {
                (node as NzSafeAny).children = [
                  { value: 110000, label: '北京', parent: 0 },
                  { value: 110100, label: '北京市', parent: 110000 },
                  { value: 110101, label: '东城区', parent: 110100 },
                  { value: 110105, label: '朝阳区', parent: 110100 },
                  { value: 310000, label: '上海', parent: 0 },
                  { value: 310100, label: '上海市', parent: 310000 },
                  { value: 310101, label: '黄浦区', parent: 310100 },
                  { value: 310104, label: '徐汇区', parent: 310100 }
                ].filter((w: NzSafeAny) => {
                  w.isLeaf = index === 1;
                  return w.parent === (node.value ?? 0);
                });
                resolve();
              }, 300);
            });
          }
        } as SFCascaderWidgetSchema,
        default: [110000, 110100, 110105]
      }
    }
  };

  submit(value: Record<string, unknown>): void {
    this.msg.success(JSON.stringify(value));
  }
}
```
