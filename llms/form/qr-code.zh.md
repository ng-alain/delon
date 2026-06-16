---
title: qr-code
subtitle: 二维码
type: Non-built-in widgets
---

当需要将链接转换成为二维码时使用。

## 如何使用

非内置模块，需要额外在 [json-schema](https://github.com/ng-alain/ng-alain/blob/master/src/app/shared/json-schema/index.ts#L9) 注册 `withQrCodeWidget`。

## API

### ui 属性

| 成员 | 说明 | 类型 | 默认值 |
|----|----|----|-----|
| `[color]`    | 二维码颜色        | `string`                          | `#000`    |
| `[bgColor]` | 二维码背景颜色      | `string`                        | `#FFFFFF` |
| `[qrSize]`     | 二维码大小        | `number`                          | `160`     |
| `[padding]`  | 二维码填充        | `number \| number[]`              | `0`       |
| `[icon]`     | 二维码中 icon 地址 | `string`                          | -         |
| `[iconSize]` | 二维码中 icon 大小 | `number`                          | `40`      |
| `[bordered]` | 是否有边框        | `boolean`                         | `true`    |
| `[status]`   | 二维码状态        | `'active'｜'expired' ｜'loading'`   | `active`  |
| `[level]`    | 二维码容错等级      | `'L'｜'M'｜'Q'｜'H'`                 | `M`       |
| `(refresh)`  | 点击"点击刷新"的回调  | `EventEmitter<string>`            | -         |

---

## 代码示例

### 基础样例

最简单的用法。

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
