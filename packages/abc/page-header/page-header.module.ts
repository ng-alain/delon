import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NzAffixModule, NzBreadCrumbModule } from 'ng-zorro-antd';
import { DelonUtilModule } from '@delon/util';

import { PageHeaderComponent } from './page-header.component';
import { PageHeaderConfig } from './page-header.config';

const COMPONENTS = [PageHeaderComponent];

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    DelonUtilModule,
    NzAffixModule,
    NzBreadCrumbModule,
  ],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
})
export class PageHeaderModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: PageHeaderModule, providers: [PageHeaderConfig] };
  }
}
