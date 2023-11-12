import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { DelonFormModule, WidgetRegistry } from '@delon/form';
import { NzQRCodeModule } from 'ng-zorro-antd/qr-code';

import { QrCodeWidget } from './widget';

@NgModule({
  imports: [FormsModule, DelonFormModule, NzQRCodeModule, QrCodeWidget]
})
export class QrCodeWidgetModule {
  constructor(widgetRegistry: WidgetRegistry) {
    widgetRegistry.register(QrCodeWidget.KEY, QrCodeWidget);
  }
}
