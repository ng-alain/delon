import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObserversModule } from '@angular/cdk/observers';
import { NgZorroAntdModule } from 'ng-zorro-antd';

import { NaViewWrapComponent } from './view-wrap.component';
import { NaViewComponent } from './view.component';
import { NaViewTitleComponent } from './view-title.component';
import { NaViewConfig } from './view.config';

const COMPONENTS = [NaViewWrapComponent, NaViewComponent, NaViewTitleComponent];

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
