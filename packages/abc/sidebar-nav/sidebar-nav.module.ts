import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgZorroAntdModule } from 'ng-zorro-antd';

import { NaSidebarNavComponent } from './sidebar-nav.component';

@NgModule({
  imports: [CommonModule, RouterModule, NgZorroAntdModule],
  declarations: [NaSidebarNavComponent],
  exports: [NaSidebarNavComponent],
})
export class NaSidebarNavModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: NaSidebarNavModule, providers: [] };
  }
}
