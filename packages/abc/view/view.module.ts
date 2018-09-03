import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObserversModule } from '@angular/cdk/observers';
import { NgZorroAntdModule } from 'ng-zorro-antd';

import { NaSVConfig } from './view.config';
import { SVContainerComponent } from './view-container.component';
import { SVTitleComponent } from './view-title.component';
import { SVComponent } from './view.component';

const COMPONENTS = [SVContainerComponent, SVComponent, SVTitleComponent];

@NgModule({
  imports: [CommonModule, ObserversModule, NgZorroAntdModule],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
})
export class NaSVModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: NaSVModule, providers: [NaSVConfig] };
  }
}
