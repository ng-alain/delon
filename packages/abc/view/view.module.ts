import { ObserversModule } from '@angular/cdk/observers';
import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';

import { SVContainerComponent } from './view-container.component';
import { SVTitleComponent } from './view-title.component';
import { SVComponent } from './view.component';
import { SVConfig } from './view.config';

const COMPONENTS = [SVContainerComponent, SVComponent, SVTitleComponent];

@NgModule({
  imports: [CommonModule, ObserversModule],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
})
export class SVModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: SVModule, providers: [SVConfig] };
  }
}
