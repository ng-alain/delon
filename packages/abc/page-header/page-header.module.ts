import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { DelonUtilModule } from '@delon/util';

import { NaPageHeaderComponent } from './page-header.component';
import { NaPageHeaderConfig } from './page-header.config';

const COMPONENTS = [NaPageHeaderComponent];

@NgModule({
  imports: [CommonModule, RouterModule, DelonUtilModule, NgZorroAntdModule],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
})
export class NaPageHeaderModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: NaPageHeaderModule, providers: [NaPageHeaderConfig] };
  }
}
