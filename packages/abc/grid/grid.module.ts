import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { DelonUtilModule } from '@delon/util';

import { SGContainerComponent } from './grid-container.component';
import { SGComponent } from './grid.component';
import { SGConfig } from './grid.config';

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
