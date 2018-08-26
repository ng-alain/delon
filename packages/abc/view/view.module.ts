import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObserversModule } from '@angular/cdk/observers';
import { NgZorroAntdModule } from 'ng-zorro-antd';

import { NaViewComponent } from './view-wrap.component';
import { NaViewItemComponent } from './view.component';
import { NaViewTitleComponent } from './view-title.component';
import { NaViewConfig } from './view.config';

const COMPONENTS = [
  NaViewComponent,
  NaViewItemComponent,
  NaViewTitleComponent,
];

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
