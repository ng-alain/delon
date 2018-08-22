import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NaQRConfig } from './qr.config';
import { NaQRComponent } from './qr.component';
import { NaQRService } from './qr.service';

const COMPONENTS = [NaQRComponent];

@NgModule({
  imports: [CommonModule],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
})
export class NaQRModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: NaQRModule, providers: [NaQRConfig, NaQRService] };
  }
}
