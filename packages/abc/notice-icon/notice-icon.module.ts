import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DelonLocaleModule } from '@delon/theme';
import { NgZorroAntdModule } from 'ng-zorro-antd';

import { NoticeIconTabComponent } from './notice-icon-tab.component';
import { NoticeIconComponent } from './notice-icon.component';

const COMPONENTS = [NoticeIconComponent];

@NgModule({
  imports: [CommonModule, DelonLocaleModule, NgZorroAntdModule],
  declarations: [...COMPONENTS, NoticeIconTabComponent],
  exports: [...COMPONENTS],
})
export class NoticeIconModule { }
