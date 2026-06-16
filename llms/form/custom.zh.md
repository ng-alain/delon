---
title: custom
subtitle: 自定义
type: Widgets
---

定制当前动态表单小部件。更复杂请参考[定制小部件](/form/customize)。

## 如何使用

务必指定 **sf-template** 是有效路径值，例如：

```html
<sf>
  <ng-template sf-template="formFieldName" let-i let-ui="ui" let-schema="schema">
  </ng-template>
</sf>
```

## API

| 参数          | 说明            | 类型             |
| ------------- | --------------- | ---------------- |
| `[$implicit]` | 当前上下文      | `ControlWidget`  |
| `[schema]`    | 当前节点 Schema | `SFSchema`       |
| `[ui]`        | 当前节点 UI     | `SFUISchemaItem` |

上下文包括 `formProperty` 属性，它是传递数据的唯一中间层，因此维护 `formProperty.value` 是唯一与自定义组件通信的媒介。

上下文还包含了一些快捷属性和方法，有关更多细节请阅读 [Widget](https://github.com/ng-alain/delon/blob/master/packages/form/src/widget.ts) 的定义。

---

## 代码示例

### 基础样例

使用 `sf-template` 指令在当前表单自定义复杂部件。

```typescript
import { Component, ViewChild, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { DelonFormModule, SFComponent, SFSchema } from '@delon/form';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzQRCodeModule } from 'ng-zorro-antd/qr-code';

@Component({
  selector: 'form-custom-simple',
  template: `
    <sf #sf [schema]="schema" (formSubmit)="submit($event)">
      <ng-template sf-template="formName" let-i let-ui="ui" let-schema="schema">
        <div nz-row>
          <div nz-col>
            <input
              nz-input
              [attr.id]="i.id"
              [disabled]="i.disabled"
              [attr.disabled]="i.disabled"
              [nzSize]="i.size"
              [ngModel]="i.value"
              (ngModelChange)="i.setValue($event)"
            />
          </div>
          <div nz-col>
            <button nz-button type="button" nzType="link" (click)="updateQr()">{{ ui.btnText }}</button>
          </div>
        </div>
      </ng-template>
      <ng-template sf-template="qr" let-i let-ui="ui" let-schema="schema">
        <nz-qrcode [nzValue]="i.value" />
      </ng-template>
    </sf>
  `,
  imports: [DelonFormModule, FormsModule, NzGridModule, NzInputModule, NzButtonModule, NzQRCodeModule]
})
export class FormCustomSimple {
  private readonly msg = inject(NzMessageService);
  @ViewChild('sf') readonly sf!: SFComponent;
  schema: SFSchema = {
    properties: {
      formName: {
        type: 'string',
        title: 'Custom Title',
        ui: {
          widget: 'custom',
          btnText: 'Update Qr'
        },
        default: 'test'
      },
      qr: {
        type: 'string',
        ui: {
          widget: 'custom'
        },
        default: 'https://ng-alain.com'
      }
    }
  };

  updateQr(): void {
    const formNameValue = this.sf.getProperty('/formName')?.value;
    const qr = this.sf.getProperty('/qr');
    qr?.setValue(formNameValue, true);
    this.msg.info(`Suc`);
  }

  submit(value: {}): void {
    this.msg.success(JSON.stringify(value));
  }
}
```
