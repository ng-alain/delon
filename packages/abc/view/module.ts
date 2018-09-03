import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObserversModule } from '@angular/cdk/observers';
import { NgZorroAntdModule } from 'ng-zorro-antd';

import { SVContainerComponent } from './container.component';
import { NaViewComponent } from './view.component';
import { SVTitleComponent } from './title.component';
import { NaViewConfig } from './config';

const COMPONENTS = [SVContainerComponent, NaViewComponent, SVTitleComponent];

@NgModule({
  imports: [CommonModule, ObserversModule, NgZorroAntdModule],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
})
export class NaViewModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: NaViewModule, providers: [NaViewConfig] };
  }
}
