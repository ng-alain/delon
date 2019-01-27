import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DelonUtilModule } from '@delon/util';
import { NgZorroAntdModule } from 'ng-zorro-antd';

import { PageHeaderComponent } from './page-header.component';

const COMPONENTS = [PageHeaderComponent];

@NgModule({
  imports: [CommonModule, RouterModule, DelonUtilModule, NgZorroAntdModule],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
})
export class PageHeaderModule {}
