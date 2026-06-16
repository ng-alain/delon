---
title: tag
subtitle: Tag
type: Non-built-in widgets
---

Tag for categorizing or markup, **Notice:** Just only supported `checkable` tag mode.

## How to use

Non-built-in modules need to additionally register `withTagWidget` in [json-schema](https://github.com/ng-alain/ng-alain/blob/master/src/app/shared/json-schema/index.ts#L9).

## API

### schema

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `[enum]` | Data source | `SFSchemaEnumType[]` | - |

### ui

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `[asyncData]` | Async data source | `() => Observable<SFSchemaEnumType[]>` | - |
| `[mode]` | Mode of tag | `'closeable'｜'default'｜'checkable'` | `'checkable'` |
| `[onClose]` | Callback executed when tag is closed | `(e:MouseEvent) => void` | - |
| `[checkedChange]` | Checked status change call back | `(status: boolean) => void` | - |

---

## Examples

### Basic Usage

Simplest of usage.

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
