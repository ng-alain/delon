import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  NzListModule,
  NzTagModule,
  NzBadgeModule,
  NzPopoverModule,
  NzSpinModule,
  NzTabsModule,
} from 'ng-zorro-antd';
import { DelonLocaleModule } from '@delon/theme';

import { NoticeIconComponent } from './notice-icon.component';
import { NoticeIconTabComponent } from './notice-icon-tab.component';

const COMPONENTS = [NoticeIconComponent];

@NgModule({
  imports: [
    CommonModule,
    DelonLocaleModule,
    NzListModule,
    NzTagModule,
    NzBadgeModule,
    NzPopoverModule,
    NzSpinModule,
    NzTabsModule,
  ],
  declarations: [...COMPONENTS, NoticeIconTabComponent],
  exports: [...COMPONENTS],
})
export class NoticeIconModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: NoticeIconModule, providers: [] };
  }
}
