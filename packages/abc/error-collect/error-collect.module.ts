import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ErrorCollectComponent } from './error-collect.component';
import { ErrorCollectConfig } from './error-collect.config';

const COMPONENTS = [ErrorCollectComponent];

@NgModule({
  imports: [CommonModule],
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
