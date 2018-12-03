import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { DelonUtilModule } from '@delon/util';

import { G2MiniBarComponent } from './mini-bar.component';

const COMPONENTS = [G2MiniBarComponent];

@NgModule({
  imports: [CommonModule, DelonUtilModule],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
})
export class G2MiniBarModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: G2MiniBarModule, providers: [] };
  }
}
