---
title: object
subtitle: Object
type: Widgets
order: 1
---

Create an object widget, valid only for `schema.type="object"`.

## API


### schema

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `[properties]` | Defining the properties of an object schema | `{ [key: string]: SFSchema }` | - |
| `[required]` | The data object to be valid should contain all properties with names equal to the elements in the keyword value | `string[]` | - |
| `[maxProperties]` | The data object to be valid should have not more (less) properties than the keyword value | `number` | - |
| `[minProperties]` | The data object to be valid should have not more (less) properties than the keyword value | `number` | - |

### ui

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `[showExpand]` | Whether to show the card body, click to hide the content, only `type ==='card'` | `boolean` | `true` |
| `[expand]` | Expanded state, only `type ==='card'` | `boolean` | `true` |
| `[showTitle]` | Whether to display the title | `boolean` | `false` |
| `[type]` | Render type of object | `card, default` | `default` |
| `[cardSize]` | The same as `nzSize` | `small, default` | `small` |
| `[cardBodyStyle]` | The same as `nzBodyStyle` | `{ [key: string]: string }` | - |
| `[cardBordered]` | The same as `nzBordered` | `boolean` | `false` |
| `[cardExtra]` | The same as `nzExtra` | `string, TemplateRef<void>` | - |
| `[cardActions]` | The same as `nzActions` | `Array<TemplateRef<void>>` | - |

---

## Examples

### Basic Usage

Simplest of usage.

```typescript
import { Component, inject } from '@angular/core';

import { DelonFormModule, SFSchema } from '@delon/form';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'form-object-simple',
  template: `<sf [schema]="schema" (formSubmit)="submit($event)" />`,
  imports: [DelonFormModule]
})
export class FormObjectSimple {
  private readonly msg = inject(NzMessageService);
  schema: SFSchema = {
    properties: {
      name: { type: 'string' },
      age: { type: 'number' }
    },
    required: ['name', 'age'],
    ui: {
      // 指定 `label` 和 `control` 在一行中各占栅格数
      spanLabel: 4,
      spanControl: 5
    }
  };

  submit(value: {}): void {
    this.msg.success(JSON.stringify(value));
  }
}
```

### Rectangular container

A basic card containing a title, content and an extra corner content.

```typescript
import { Component, OnInit, TemplateRef, ViewChild, inject } from '@angular/core';

import { DelonFormModule, SFObjectWidgetSchema, SFSchema } from '@delon/form';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'form-object-card',
  template: `
    @if (schema) {
      <sf [schema]="schema" (formSubmit)="submit($event)" />
    }
    <ng-template #extra>
      <a (click)="msg.success('Success')">More</a>
    </ng-template>
  `,
  imports: [DelonFormModule]
})
export class FormObjectCard implements OnInit {
  readonly msg = inject(NzMessageService);
  @ViewChild('extra', { static: true }) private extra!: TemplateRef<void>;
  schema?: SFSchema;

  ngOnInit(): void {
    this.schema = {
      properties: {
        name: { type: 'string' },
        age: { type: 'number' },
        address1: {
          title: '地址1',
          type: 'object',
          properties: {
            country: { type: 'string' },
            city: { type: 'string' },
            zone: { type: 'string' }
          },
          ui: {
            type: 'card',
            cardExtra: this.extra
          } as SFObjectWidgetSchema
        },
        address2: {
          title: '地址2',
          type: 'object',
          properties: {
            country: { type: 'string' },
            city: { type: 'string' },
            zone: { type: 'string' }
          },
          ui: {
            type: 'card',
            showExpand: false
          } as SFObjectWidgetSchema
        }
      },
      required: ['name', 'age'],
      ui: {
        spanLabelFixed: 150,
        grid: { span: 12, gutter: 16 }
      } as SFObjectWidgetSchema
    };
  }

  submit(value: {}): void {
    this.msg.success(JSON.stringify(value));
  }
}
```
