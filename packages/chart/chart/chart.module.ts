import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DelonUtilModule } from '@delon/util';

import { G2ChartComponent } from './chart.component';

const COMPONENTS = [G2ChartComponent];

@NgModule({
  imports: [CommonModule, DelonUtilModule],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
})
export class G2ChartModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: G2ChartModule, providers: [] };
  }
}
