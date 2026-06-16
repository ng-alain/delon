---
title: color
subtitle: 颜色
type: Non-built-in widgets
---

当用户需要自定义颜色选择的时候使用。

## 如何使用

非内置模块，需要额外在 [json-schema](https://github.com/ng-alain/ng-alain/blob/master/src/app/shared/json-schema/index.ts#L9) 注册 `withColorWidget`。


## API

### ui 属性

| 成员 | 说明 | 类型 | 默认值 |
|----|----|----|-----|
| `[format]`       | 颜色格式       | `rgb`｜`hex`｜`hsb`                 | `hex`    |
| `[defaultValue]` | 颜色默认的值     | `string`｜`NzColor`                  | -        |
| `[allowClear]`   | 允许清除选择的颜色  | `boolean`                         | `false`  |
| `[trigger]`      | 颜色选择器的触发模式 | `hover`｜`click`                   | `click`  |
| `[showText]`      | 显示颜色文本     | `boolean`                         | `false`  |
| `[title]`      | 设置颜色选择器的标题 | `TemplateRef<void>`｜`string`      | -        |
| `(change)`     | 颜色变化的回调    | `EventEmitter<{ color: NzColor; format: string }>` | -        |
| `(formatChange)`      | 颜色格式变化的回调  | `EventEmitter<'rgb'｜'hex'｜'hsb'>` | -        |
| `[block]`   | 是否颜色块  | `boolean`                         | `false`  |

---

## 代码示例

### 基础样例

最简单的用法。

```typescript
import { Component, inject } from '@angular/core';

import { DelonFormModule, SFSchema } from '@delon/form';
import type { SFColorWidgetSchema } from '@delon/form/widgets/color';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'form-color-simple',
  template: `<sf [schema]="schema" (formSubmit)="submit($event)" />`,
  imports: [DelonFormModule]
})
export class FormColorSimple {
  private readonly msg = inject(NzMessageService);
  schema: SFSchema = {
    properties: {
      base: {
        type: 'string',
        title: 'Base',
        ui: {
          widget: 'color',
          title: 'Pls choose a color',
          change: console.log
        } as SFColorWidgetSchema
      },
      showText: {
        type: 'string',
        title: 'Show Text',
        ui: {
          widget: 'color',
          showText: true,
          trigger: 'hover',
          change: console.log
        } as SFColorWidgetSchema
      },
      defaultValue: {
        type: 'string',
        title: 'Default Value',
        ui: {
          widget: 'color',
          showText: true,
          defaultValue: '#0a0',
          change: console.log
        } as SFColorWidgetSchema
      },
      clearColor: {
        type: 'string',
        title: 'Clear Color',
        ui: {
          widget: 'color',
          allowClear: true,
          change: console.log
        } as SFColorWidgetSchema
      },
      disabled: {
        type: 'string',
        title: 'Disabled',
        ui: {
          widget: 'color',
          showText: true
        } as SFColorWidgetSchema,
        readOnly: true
      },
      rgb: {
        type: 'string',
        title: 'RGB',
        ui: {
          widget: 'color',
          format: 'rgb',
          showText: true,
          change: console.log,
          formatChange: console.log
        } as SFColorWidgetSchema
      },
      block: {
        type: 'string',
        title: 'Block Color',
        ui: {
          widget: 'color',
          block: true
        } as SFColorWidgetSchema,
        default: '#f50'
      }
    }
  };

  submit(value: {}): void {
    this.msg.success(JSON.stringify(value));
  }
}
```
