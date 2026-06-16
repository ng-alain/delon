---
title: mention
subtitle: Mention
type: Non-built-in widgets
---

Mention widget.

## How to use

Non-built-in modules need to additionally register `withMentionWidget` in [json-schema](https://github.com/ng-alain/ng-alain/blob/master/src/app/shared/json-schema/index.ts#L9).

## Note

- You **must** set `valueWith` parameter if there is no `label` property in data.

## Data Source

**Static**

One time fetching data, data source is from `asyncData`, `enum`.

**Realtime**

Every select triggers a HTTP request, data source is from `asyncData`.

## API

### schema

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `[enum]` | Static data source | `SFSchemaEnumType[]` | - |
| `[readOnly]` | Read only | `boolean` | - |
| `[minimum]` | Minimum time of mention | `number` | - |
| `[maximum]` | Maximum time of mention | `number` | - |

### ui

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `[asyncData]` | Asynchronous static data source | `(input: string) => Observable<SFSchemaEnumType[]>` | - |
| `[size]` | Size, equals to `nzSize` | `string` | - |
| `[placeholder]` | Placeholder | `string` | - |
| `[loadData]` | Realtime data | `(option: MentionOnSearchTypes) => Observable<SFSchemaEnumType[]>` | - |
| `[notFoundContent]` | Content when nothing found | `string` | `无匹配结果，轻敲空格完成输入` |
| `[placement]` | Position of suggestion box | `button,top` | `button` |
| `[prefix]` | Character to trigger to popup dropdown list | `'string'` `'string[]'` | `@` |
| `[valueWith]` | Function that maps a suggestion value | `(value: any) => string` | - |
| `[select]` | Callback when option in dropdown list is selected | `(value: any) => void` | - |
| `[inputStyle]` | Input type | `text, textarea` | `text` |
| `[autosize]` | Adaptive content height, can be set object:`{ minRows: 2, maxRows: 6 }` | `{ minRows?: number; maxRows?: number }` | `{ minRows: 1, maxRows: 0 }` |

---

## Examples

### Basic Usage

Simplest of usage.

```typescript
import { Component, inject } from '@angular/core';
import { of, delay } from 'rxjs';

import { DelonFormModule, SFSchema } from '@delon/form';
import type { SFMentionWidgetSchema } from '@delon/form/widgets/mention';
import { MentionOnSearchTypes } from 'ng-zorro-antd/mention';
import { NzMessageService } from 'ng-zorro-antd/message';

const DATA = ['asdf', 'cipchk', '中文', 'にほんご'];

@Component({
  selector: 'form-mention-simple',
  template: ` <sf [schema]="schema" (formSubmit)="submit($event)" /> `,
  imports: [DelonFormModule]
})
export class FormMentionSimple {
  private readonly msg = inject(NzMessageService);
  schema: SFSchema = {
    properties: {
      remark: {
        type: 'string',
        title: '描述',
        enum: DATA,
        minimum: 2,
        maximum: 5,
        ui: {
          widget: 'mention',
          inputStyle: 'textarea'
        } as SFMentionWidgetSchema
      },
      // 异步静态数据源
      async: {
        type: 'string',
        title: 'Async',
        ui: {
          widget: 'mention',
          asynxcData: () => of(DATA).pipe(delay(1000))
        } as SFMentionWidgetSchema
      },
      // 实时数据
      real_time: {
        type: 'string',
        title: 'RealTime',
        ui: {
          widget: 'mention',
          loadData: (option: MentionOnSearchTypes) =>
            of(DATA.filter(item => item.indexOf(option.value) !== -1)).pipe(delay(300))
        } as SFMentionWidgetSchema
      }
    }
  };

  submit(value: {}): void {
    this.msg.success(JSON.stringify(value));
  }
}
```
