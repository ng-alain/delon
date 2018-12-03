import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DelonUtilModule } from '@delon/util';
import { NgZorroAntdModule } from 'ng-zorro-antd';

import { PageHeaderComponent } from './page-header.component';
import { PageHeaderConfig } from './page-header.config';

const COMPONENTS = [PageHeaderComponent];

@NgModule({
  imports: [CommonModule, RouterModule, DelonUtilModule, NgZorroAntdModule],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
})
export class PageHeaderModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: PageHeaderModule, providers: [PageHeaderConfig] };
  }
}
