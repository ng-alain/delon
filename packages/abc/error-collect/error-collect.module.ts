import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NaErrorCollectComponent } from './error-collect.component';
import { NaErrorCollectConfig } from './error-collect.config';

const COMPONENTS = [NaErrorCollectComponent];

@NgModule({
  imports: [CommonModule],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
})
export class NaErrorCollectModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: NaErrorCollectModule,
      providers: [NaErrorCollectConfig],
    };
  }
}
