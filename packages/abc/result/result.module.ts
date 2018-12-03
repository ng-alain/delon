import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { NgZorroAntdModule } from 'ng-zorro-antd';

import { ResultComponent } from './result.component';

const COMPONENTS = [ResultComponent];

@NgModule({
  imports: [CommonModule, NgZorroAntdModule],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
})
export class ResultModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: ResultModule, providers: [] };
  }
}
