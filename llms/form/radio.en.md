---
title: radio
subtitle: Radio
type: Widgets
---

Radio.

## API

### schema

| Property     | Description                  | Type                 | Default |
|--------------|------------------------------|----------------------|---------|
| `[readOnly]` | Whether to disable the state | `boolean`            | -       |
| `[enum]`     | Render radio group           | `SFSchemaEnumType[]` | -       |

### ui

| Property      | Description             | Type                                   | Default   |
|---------------|-------------------------|----------------------------------------|-----------|
| `[asyncData]` | Async data source       | `() => Observable<SFSchemaEnumType[]>` | -         |
| `[size]`      | Size of the `nz-radio`  | `string`                               | -         |
| `[styleType]` | Style of the `nz-radio` | `default, button`                      | `default` |
| `[change]`    | Changed event           | `(res: SFValue) => void`               | -         |
| `[buttonStyle]` | style type of radio button | `'outline'｜'solid'` | `'outline'` |

---

## Examples

### Basic Usage

Simplest of usage.

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
