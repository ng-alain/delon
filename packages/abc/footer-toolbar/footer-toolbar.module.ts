import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NaErrorCollectModule } from './../error-collect/error-collect.module';
import { NaFooterToolbarComponent } from './footer-toolbar.component';

const COMPONENTS = [NaFooterToolbarComponent];

@NgModule({
  imports: [CommonModule, NaErrorCollectModule],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
})
export class NaFooterToolbarModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: NaFooterToolbarModule, providers: [] };
  }
}
