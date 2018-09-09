import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'ng-zorro-antd';

import { G2TimelineComponent } from './timeline.component';

const COMPONENTS = [G2TimelineComponent];

@NgModule({
  imports: [CommonModule, NgZorroAntdModule],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
})
export class G2TimelineModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: G2TimelineModule, providers: [] };
  }
}
