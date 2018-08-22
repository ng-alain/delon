import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NaResultComponent } from './result.component';

const COMPONENTS = [NaResultComponent];

@NgModule({
  imports: [CommonModule],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
})
export class NaResultModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: NaResultModule, providers: [] };
  }
}
