import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { DelonUtilModule } from '@delon/util';

import { AdLodopConfig } from './lodop.config';
import { LodopService } from './lodop.service';

@NgModule({
  imports: [DelonUtilModule],
})
export class AdLodopModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AdLodopModule,
      providers: [LodopService, AdLodopConfig],
    };
  }
}
