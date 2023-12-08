---
title:
  zh-CN: 基础样例
  en-US: Basic Usage
order: 0
---

## zh-CN

最简单的用法。

## en-US

Simplest of usage.

```ts
import { Component, inject } from '@angular/core';

import { DelonFormModule, SFSchema } from '@delon/form';
import type { SFColorWidgetSchema } from '@delon/form/widgets/color';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-demo',
  template: `<sf [schema]="schema" (formSubmit)="submit($event)" />`,
  standalone: true,
  imports: [DelonFormModule]
})
export class DemoComponent {
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
