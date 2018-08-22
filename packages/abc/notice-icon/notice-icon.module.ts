import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'ng-zorro-antd';

import { NaNoticeIconComponent } from './notice-icon.component';
import { NaNoticeIconTabComponent } from './notice-icon-tab.component';

const COMPONENTS = [NaNoticeIconComponent];

@NgModule({
  imports: [CommonModule, NgZorroAntdModule],
  declarations: [...COMPONENTS, NaNoticeIconTabComponent],
  exports: [...COMPONENTS],
})
export class NaNoticeIconModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: NaNoticeIconModule, providers: [] };
  }
}
