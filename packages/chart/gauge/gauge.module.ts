import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DelonUtilModule } from '@delon/util';

import { G2GaugeComponent } from './gauge.component';

const COMPONENTS = [G2GaugeComponent];

@NgModule({
  imports: [CommonModule, DelonUtilModule],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
})
export class G2GaugeModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: G2GaugeModule, providers: [] };
  }
}
