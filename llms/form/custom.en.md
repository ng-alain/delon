---
title: custom
subtitle: Custom
type: Widgets
---

Custom the current dynamic form widget. For more complexity, please refer to [customize](/form/customize) widget.

## Usage

Make sure to specify **sf-template** a valid path value, for example:

```html
<sf>
  <ng-template sf-template="formFieldName" let-i let-ui="ui" let-schema="schema">
  </ng-tempalte>
</sf>
```

## API

| Name          | Description                       | Type             |
| ------------- | --------------------------------- | ---------------- |
| `[$implicit]` | Current widget component instance | `ControlWidget`  |
| `[schema]`    | Schema data of the widget         | `SFSchema`       |
| `[ui]`        | UI data of the widget             | `SFUISchemaItem` |

The widget component instance include `formProperty` property, whose `value` attribute is the only way to communicate with the widget.

The widget component instance contains some shortcut properties and methods, please read for more details [ControlWidget](https://github.com/ng-alain/delon/blob/master/packages/form/src/widget.ts).

---

## Examples

### Basic Usage

Use the `sf-template` directive to custom complex widget in the current form.

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
