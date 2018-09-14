import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DelonUtilModule } from '@delon/util';

import { SGConfig } from './grid.config';
import { SGContainerComponent } from './grid-container.component';
import { SGComponent } from './grid.component';

const COMPONENTS = [SGContainerComponent, SGComponent];

@NgModule({
  imports: [CommonModule, DelonUtilModule],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
})
export class SGModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: SGModule, providers: [SGConfig] };
  }
}
