import { ModuleWithProviders, NgModule } from '@angular/core';
import { DelonUtilModule } from '@delon/util';

import { LodopConfig } from './lodop.config';
import { LodopService } from './lodop.service';

@NgModule({
  imports: [DelonUtilModule],
})
export class LodopModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: LodopModule,
      providers: [LodopService, LodopConfig],
    };
  }
}
