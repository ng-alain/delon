import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NaTrendComponent } from './trend.component';

const COMPONENTS = [NaTrendComponent];

@NgModule({
  imports: [CommonModule],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
})
export class NaTrendModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: NaTrendModule, providers: [] };
  }
}
