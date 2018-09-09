import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'ng-zorro-antd';

import { SGConfig } from './grid.config';
import { SGContainerComponent } from './grid-container.component';
import { SGComponent } from './grid.component';

const COMPONENTS = [SGContainerComponent, SGComponent];

@NgModule({
  imports: [CommonModule, NgZorroAntdModule],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
})
export class SGModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: SGModule, providers: [SGConfig] };
  }
}
