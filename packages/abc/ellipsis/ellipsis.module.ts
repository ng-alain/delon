import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NaEllipsisComponent } from './ellipsis.component';

const COMPONENTS = [NaEllipsisComponent];

@NgModule({
  imports: [CommonModule],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
})
export class NaEllipsisModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: NaEllipsisModule, providers: [] };
  }
}
