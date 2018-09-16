import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DelonUtilModule } from '@delon/util';

import { G2WaterWaveComponent } from './water-wave.component';

const COMPONENTS = [G2WaterWaveComponent];

@NgModule({
  imports: [CommonModule, DelonUtilModule],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
})
export class G2WaterWaveModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: G2WaterWaveModule, providers: [] };
  }
}
