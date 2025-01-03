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
import type { SFQrCodeWidgetSchema } from '@delon/form/widgets/qr-code';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-demo',
  template: `<sf [schema]="schema" (formSubmit)="submit($event)" />`,
  imports: [DelonFormModule]
})
export class DemoComponent {
  private readonly msg = inject(NzMessageService);
  schema: SFSchema = {
    properties: {
      base: {
        type: 'string',
        title: 'Base',
        default: 'https://ng-alain.com/',
        ui: {
          widget: 'qr-code',
          refresh: console.log
        } as SFQrCodeWidgetSchema
      },
      icon: {
        type: 'string',
        title: 'With Icon',
        default: 'https://ng-alain.com/',
        ui: {
          widget: 'qr-code',
          icon: 'https://ng-alain.com/assets/logo-color.svg',
          bordered: true
        } as SFQrCodeWidgetSchema
      },
      color: {
        type: 'string',
        title: 'Color',
        default: 'https://ng-alain.com/',
        ui: {
          widget: 'qr-code',
          color: '#f50'
        } as SFQrCodeWidgetSchema
      }
    }
  };

  submit(value: {}): void {
    this.msg.success(JSON.stringify(value));
  }
}
```
