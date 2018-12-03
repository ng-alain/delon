import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { DelonUtilModule } from '@delon/util';

import { XlsxConfig } from './xlsx.config';
import { XlsxDirective } from './xlsx.directive';
import { XlsxService } from './xlsx.service';

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
