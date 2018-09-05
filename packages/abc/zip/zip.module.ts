import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DelonUtilModule } from '@delon/util';

import { ZipService } from './zip.service';
import { ZipConfig, DA_ZIP_CONFIG } from './interface';

@NgModule({
  imports: [CommonModule, DelonUtilModule],
})
export class ZipModule {
  static forRoot(config?: ZipConfig): ModuleWithProviders {
    return {
      ngModule: ZipModule,
      providers: [ZipService, { provide: DA_ZIP_CONFIG, useValue: config }],
    };
  }
}
