import { ModuleWithProviders, NgModule } from '@angular/core';
import { DelonUtilModule } from '@delon/util';

import { NaLodopConfig } from './lodop.config';
import { NaLodopService } from './lodop.service';

@NgModule({
  imports: [DelonUtilModule],
})
export class NaLodopModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: NaLodopModule,
      providers: [NaLodopService, NaLodopConfig],
    };
  }
}
