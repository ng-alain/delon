import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { DelonUtilModule } from '@delon/util';

import { ZipConfig } from './zip.config';
import { ZipService } from './zip.service';

@NgModule({
  imports: [CommonModule, DelonUtilModule],
})
export class ZipModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ZipModule,
      providers: [ZipConfig, ZipService],
    };
  }
}
