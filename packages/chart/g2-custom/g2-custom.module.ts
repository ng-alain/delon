import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DelonUtilModule } from '@delon/util';

import { G2CustomComponent } from './g2-custom.component';

const COMPONENTS = [G2CustomComponent];

@NgModule({
  imports: [CommonModule, DelonUtilModule],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
})
export class G2CustomModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: G2CustomModule, providers: [] };
  }
}
