import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DelonUtilModule } from '@delon/util';

import { ZipService } from './zip.service';
import { NaZipConfig, DA_ZIP_CONFIG } from './interface';

@NgModule({
  imports: [CommonModule, DelonUtilModule],
})
export class NaZipModule {
  static forRoot(config?: NaZipConfig): ModuleWithProviders {
    return {
      ngModule: NaZipModule,
      providers: [ZipService, { provide: DA_ZIP_CONFIG, useValue: config }],
    };
  }
}
