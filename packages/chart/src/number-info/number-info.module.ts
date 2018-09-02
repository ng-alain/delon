import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NaNumberInfoComponent } from './number-info.component';

const COMPONENTS = [NaNumberInfoComponent];

@NgModule({
  imports: [CommonModule],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
})
export class NaNumberInfoModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: NaNumberInfoModule, providers: [] };
  }
}
