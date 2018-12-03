import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { DelonUtilModule } from '@delon/util';
import { NgZorroAntdModule } from 'ng-zorro-antd';

import { SEContainerComponent } from './edit-container.component';
import { SEErrorComponent } from './edit-error.component';
import { SETitleComponent } from './edit-title.component';
import { SEComponent } from './edit.component';
import { SEConfig } from './edit.config';

const COMPONENTS = [
  SEContainerComponent,
  SEComponent,
  SEErrorComponent,
  SETitleComponent,
];

@NgModule({
  imports: [CommonModule, DelonUtilModule, NgZorroAntdModule],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
})
export class SEModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: SEModule, providers: [SEConfig] };
  }
}
