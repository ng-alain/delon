---
title: qr-code
subtitle: QRCode
type: Non-built-in widgets
---

Used when the link needs to be converted into a QR Code.

## How to use

Non-built-in modules need to additionally register `withQrCodeWidget` in [json-schema](https://github.com/ng-alain/ng-alain/blob/master/src/app/shared/json-schema/index.ts#L9).

## API

### ui

| Property | Description | Type | Default |
|----------|-------------|------|---------|
| `[color]`           | QR code Color                       | `string`                        | `#000`    |
| `[bgColor]` | QR code background color            | `string`                        | `#FFFFFF` |
| `[qrSize]`            | QR code Size                        | `number`                        | `160`     |
| `[padding]`         | QR code Padding                     | `number \| number[]`            | `0`       |
| `[icon]`            | Icon address in QR code             | `string`                        | -         |
| `[iconSize]`        | The size of the icon in the QR code | `number`                        | `40`      |
| `[bordered]`        | Whether has border style            | `boolean`                       | `true`    |
| `[status]`          | QR code status                      | `'active'｜'expired' ｜'loading'` | `active`  |
| `[level]`           | Error Code Level                    | `'L'｜'M'｜'Q'｜'H'`               | `M`       |
| `(refresh)`         | callback                            | `EventEmitter<string>`          | -         |

---

## Examples

### Basic Usage

Simplest of usage.

```typescript
import { Component, inject } from '@angular/core';

import { DelonFormModule, SFSchema } from '@delon/form';
import type { SFQrCodeWidgetSchema } from '@delon/form/widgets/qr-code';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'form-qr-code-simple',
  template: `<sf [schema]="schema" (formSubmit)="submit($event)" />`,
  imports: [DelonFormModule]
})
export class FormQrCodeSimple {
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
