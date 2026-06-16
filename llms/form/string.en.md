---
title: string
subtitle: Input
type: Widgets
order: 3
---

Default widget, A basic widget for getting the user input is a text field.

## API

### schema

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `[maxLength]` | Maximum length of the input | `number` | - |
| `[readOnly]` | Whether to disable the state | `boolean` | - |

### ui

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `[size]` | Size of the `nz-input` | `string` | - |
| `[type]` | type of the input, e.g: `password` | `string` | - |
| `[placeholder]` | placeholder of the input | `string` | - |
| `[variant]` | Variant | `outlined,borderless,filled,underlined` | `outlined` |
| `[autocomplete]` | autocomplete of the input | `HTML Attribute` | - |
| `[autofocus]` | autofocus of the input | `HTML Attribute` | - |
| `[addOnBefore]` | The label text displayed before (on the left side of) the input field. | `string` | - |
| `[addOnAfter]` | The label text displayed after (on the right side of) the input field. | `string` | - |
| `[addOnBeforeIcon]` | The label icon's ngClass displayed before. | `string` | - |
| `[addOnAfterIcon]` | The label icon's ngClass displayed after. | `string` | - |
| `[prefix]` | The prefix icon for the Input. | `string` | - |
| `[prefixIcon]` | The prefix icon's ngClass for the Input. | `string` | - |
| `[suffix]` | The suffix icon for the Input. | `string` | - |
| `[suffixIcon]` | The suffix icon's ngClass for the Input. | `string` | - |
| `[changeDebounceTime]` | `change` event throttling and sequence control threshold | `number` | - |
| `[changeMap]` | Convert data, equivalent to `switchMap` operation | `(val: string) => Observable<any>` | - |
| `[change]` | The content event for the Input. | `(val: string) => void` | - |
| `[focus]` | The focus event for the Input. | `(e: FocusEvent) => void` | - |
| `[blur]` | The blur event for the Input. | `(e: FocusEvent) => void` | - |
| `[enter]` | The enter event for the Input. | `(e: KeyboardEvent) => void` | - |

---

## Examples

### Basic Usage

Simplest of usage.

```typescript
import { Component, inject } from '@angular/core';

import { DelonFormModule, SFSchema, SFStringWidgetSchema, SFValueChange } from '@delon/form';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'form-string-simple',
  template: `<sf [schema]="schema" (formValueChange)="valueChange($event)" (formSubmit)="submit($event)" />`,
  imports: [DelonFormModule]
})
export class FormStringSimple {
  private readonly msg = inject(NzMessageService);
  schema: SFSchema = {
    properties: {
      name: {
        type: 'string',
        title: 'Name',
        ui: {
          addOnAfter: 'RMB',
          placeholder: 'RMB结算',
          change: val => console.log(val),
          focus: e => console.log('focus', e),
          blur: e => console.log('blur', e),
          enter: e => console.log('enter', e)
        } as SFStringWidgetSchema
      },
      mobile: {
        type: 'string',
        format: 'mobile',
        title: '手机号'
      },
      sfz: {
        type: 'string',
        format: 'id-card',
        title: '身份证号'
      },
      regex: {
        type: 'string',
        pattern: `^[abc]+$`,
        title: '正则表达式',
        ui: {
          placeholder: `^[abc]+$`
        } as SFStringWidgetSchema
      },
      color: {
        type: 'string',
        format: 'color',
        title: '颜色',
        ui: {
          optionalHelp: {
            text: '我是有背景颜色的喔',
            bgColor: '#f50'
          }
        }
      }
    },
    required: ['name']
  };

  submit(value: {}): void {
    this.msg.success(JSON.stringify(value));
  }

  valueChange(res: SFValueChange): void {
    this.msg.info(JSON.stringify(res));
  }
}
```

### Debounce and order

Use `changeDebounceTime` to enable throttling control, use `changeMap` and `change` to debounce fetch and ajax callback order flow.

```typescript
import { Component, ViewChild, inject } from '@angular/core';
import { of } from 'rxjs';

import { DelonFormModule, SFComponent, SFSchema, SFStringWidgetSchema } from '@delon/form';
import { _HttpClient } from '@delon/theme';
import { NzMessageService } from 'ng-zorro-antd/message';

interface UserItem {
  id: number;
  email: string;
}

@Component({
  selector: 'form-string-time',
  template: `<sf #sf [schema]="schema" (formSubmit)="submit($event)" />`,
  imports: [DelonFormModule]
})
export class FormStringTime {
  private readonly msg = inject(NzMessageService);
  private readonly http = inject(_HttpClient);
  @ViewChild('sf') private readonly sf!: SFComponent;

  schema: SFSchema = {
    properties: {
      q: {
        type: 'string',
        title: 'Key',
        ui: {
          changeDebounceTime: 500,
          changeMap: v => (v?.length > 0 ? this.http.get(`/users?q=${v}&ps=6`) : of({ list: [] })),
          change: (res: { list: UserItem[] }) => {
            if (res.list.length <= 0) return;
            const property = this.sf.getProperty('/items')!;
            property.schema.enum = res.list.map(item => item.email);
            property.widget.reset(res.list[0].email);
          }
        } as SFStringWidgetSchema
      },
      items: {
        type: 'string',
        enum: ['a', 'b', 'c']
      }
    }
  };

  submit(value: {}): void {
    this.msg.success(JSON.stringify(value));
  }
}
```
