import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QRConfig } from './qr.config';
import { QRComponent } from './qr.component';
import { QRService } from './qr.service';

const COMPONENTS = [QRComponent];

@NgModule({
  imports: [CommonModule],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
})
export class QRModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: QRModule, providers: [QRConfig, QRService] };
  }
}
