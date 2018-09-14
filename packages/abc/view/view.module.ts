import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObserversModule } from '@angular/cdk/observers';

import { SVConfig } from './view.config';
import { SVContainerComponent } from './view-container.component';
import { SVTitleComponent } from './view-title.component';
import { SVComponent } from './view.component';

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
