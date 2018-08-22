import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NaTagSelectComponent } from './tag-select.component';

const COMPONENTS = [NaTagSelectComponent];

@NgModule({
  imports: [CommonModule],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
})
export class NaTagSelectModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: NaTagSelectModule, providers: [] };
  }
}
