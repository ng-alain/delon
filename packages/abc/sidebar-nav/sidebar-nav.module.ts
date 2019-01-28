import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DelonUtilModule } from '@delon/util';
import { NgZorroAntdModule } from 'ng-zorro-antd';

import { SidebarNavComponent } from './sidebar-nav.component';

@NgModule({
  imports: [CommonModule, RouterModule, NgZorroAntdModule, DelonUtilModule],
  declarations: [SidebarNavComponent],
  exports: [SidebarNavComponent],
})
export class SidebarNavModule {}
