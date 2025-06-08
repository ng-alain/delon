import { Component, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ControlUIWidget, DelonFormModule } from '@delon/form';
import { NzQRCodeModule } from 'ng-zorro-antd/qr-code';

import type { SFQrCodeWidgetSchema } from './schema';

@Component({
  selector: 'sf-qr-code',
  template: `<sf-item-wrap
    [id]="id"
    [schema]="schema"
    [ui]="ui"
    [showError]="showError"
    [error]="error"
    [showTitle]="schema.title"
  >
    <nz-qrcode
      [nzValue]="value"
      [nzPadding]="ui.padding ?? 0"
      [nzColor]="ui.color ?? '#000'"
      [nzBgColor]="ui.bgColor ?? '#FFF'"
      [nzSize]="ui.qrSize ?? 160"
      [nzIcon]="ui.icon ?? ''"
      [nzIconSize]="ui.iconSize ?? 40"
      [nzBordered]="ui.bordered ?? false"
      [nzStatus]="ui.status ?? 'active'"
      [nzLevel]="ui.level ?? 'M'"
      (nzRefresh)="refresh($event)"
    />
  </sf-item-wrap>`,
  encapsulation: ViewEncapsulation.None,
  imports: [FormsModule, DelonFormModule, NzQRCodeModule]
})
export class QrCodeWidget extends ControlUIWidget<SFQrCodeWidgetSchema> {
  static readonly KEY = 'qr-code';

  refresh(qr: string): void {
    this.setValue(qr);
    if (this.ui.refresh) this.ui.refresh(qr);
  }
}
