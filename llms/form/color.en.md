---
title: color
subtitle: Color
type: Non-built-in widgets
---

Used when the user needs to customize the color selection.

## How to use

Non-built-in modules need to additionally register `withColorWidget` in [json-schema](https://github.com/ng-alain/ng-alain/blob/master/src/app/shared/json-schema/index.ts#L9).

## API

### ui

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `[format]`       | Format of color       | `rgb`｜`hex`｜`hsb`                 | `hex`     |
| `[defaultValue]` | Default value of color     | `string`｜`NzColor`                  | `false`   |
| `[allowClear]`   | Allow clearing color selected  | `boolean`                         | `false`   |
| `[trigger]`      | ColorPicker trigger mode | `hover`｜`click`                   | `click`   |
| `[showText]`      | Show color text     | `boolean`                         | `false`   |
| `[title]`      | Setting the title of the color picker | `TemplateRef<void>`｜`string`      | -         |
| `(change)`     | Callback when value is changed    | `EventEmitter<{ color: NzColor; format: string }>`            | -         |
| `(formatChange)`      | Callback when `format` is changed      | `EventEmitter<'rgb'｜'hex'｜'hsb'>` | -         |
| `[block]`   | Color Block  | `boolean`                         | `false`  |

---

## Examples

### Basic Usage

Simplest of usage.

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
