import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DelonUtilModule } from '@delon/util';

import { XlsxService } from './xlsx.service';
import { XlsxDirective } from './xlsx.directive';
import { XlsxConfig } from './xlsx.config';

const COMPONENTS = [XlsxDirective];

@NgModule({
  imports: [CommonModule, DelonUtilModule],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
})
export class XlsxModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: XlsxModule,
      providers: [XlsxService, XlsxConfig],
    };
  }
}
