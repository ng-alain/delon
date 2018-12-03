import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { DelonUtilModule } from '@delon/util';

import { QRComponent } from './qr.component';
import { QRConfig } from './qr.config';
import { QRService } from './qr.service';

const COMPONENTS = [QRComponent];

@NgModule({
  imports: [CommonModule, DelonUtilModule],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
})
export class QRModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: QRModule, providers: [QRConfig, QRService] };
  }
}
