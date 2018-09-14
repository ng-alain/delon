import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzToolTipModule } from 'ng-zorro-antd';
import { DelonUtilModule } from '@delon/util';

import { SEConfig } from './edit.config';
import { SEContainerComponent } from './edit-container.component';
import { SEComponent } from './edit.component';
import { SEErrorComponent } from './edit-error.component';
import { SETitleComponent } from './edit-title.component';

const COMPONENTS = [
  SEContainerComponent,
  SEComponent,
  SEErrorComponent,
  SETitleComponent,
];

@NgModule({
  imports: [CommonModule, DelonUtilModule, NzToolTipModule],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
})
export class SEModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: SEModule, providers: [SEConfig] };
  }
}
