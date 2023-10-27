import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { QRComponent } from './qr.component';

const COMPONENTS = [QRComponent];

/**
 * @deprecated Will be removed in 18.0.0, please use [nz-qrcode](https://ng.ant.design/components/qr-code) instead.
 */
@NgModule({
  imports: [CommonModule],
  declarations: COMPONENTS,
  exports: COMPONENTS
})
export class QRModule {}
