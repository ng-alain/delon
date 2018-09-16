import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { DelonUtilModule } from '@delon/util';

import { SidebarNavComponent } from './sidebar-nav.component';

@NgModule({
  imports: [CommonModule, RouterModule, NgZorroAntdModule, DelonUtilModule],
  declarations: [SidebarNavComponent],
  exports: [SidebarNavComponent],
})
export class SidebarNavModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: SidebarNavModule, providers: [] };
  }
}
