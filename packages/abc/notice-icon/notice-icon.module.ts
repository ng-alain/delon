import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { DelonLocaleModule } from '@delon/theme';

import { NoticeIconComponent } from './notice-icon.component';
import { NoticeIconTabComponent } from './notice-icon-tab.component';

const COMPONENTS = [NoticeIconComponent];

@NgModule({
  imports: [CommonModule, DelonLocaleModule, NgZorroAntdModule],
  declarations: [...COMPONENTS, NoticeIconTabComponent],
  exports: [...COMPONENTS],
})
export class NoticeIconModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: NoticeIconModule, providers: [] };
  }
}
