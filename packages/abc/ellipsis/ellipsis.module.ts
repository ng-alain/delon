import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DelonUtilModule } from '@delon/util';

import { EllipsisComponent } from './ellipsis.component';

const COMPONENTS = [EllipsisComponent];

@NgModule({
  imports: [CommonModule, DelonUtilModule],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
})
export class EllipsisModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: EllipsisModule, providers: [] };
  }
}
