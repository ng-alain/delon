import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { DelonUtilModule } from '@delon/util';

import { ErrorCollectComponent } from './error-collect.component';
import { ErrorCollectConfig } from './error-collect.config';

const COMPONENTS = [ErrorCollectComponent];

@NgModule({
  imports: [CommonModule, DelonUtilModule],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
})
export class ErrorCollectModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ErrorCollectModule,
      providers: [ErrorCollectConfig],
    };
  }
}
