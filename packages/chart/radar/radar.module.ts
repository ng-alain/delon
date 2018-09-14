import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzGridModule } from 'ng-zorro-antd';
import { DelonUtilModule } from '@delon/util';

import { G2RadarComponent } from './radar.component';

const COMPONENTS = [G2RadarComponent];

@NgModule({
  imports: [CommonModule, DelonUtilModule, NzGridModule],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
})
export class G2RadarModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: G2RadarModule, providers: [] };
  }
}
