import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DelonLocaleModule } from '@delon/theme';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NoticeIconTabComponent } from './notice-icon-tab.component';
import { NoticeIconComponent } from './notice-icon.component';

const COMPONENTS = [NoticeIconComponent];

@NgModule({
  imports: [
    CommonModule,
    DelonLocaleModule,
    NzBadgeModule,
    NzDropDownModule,
    NzIconModule,
    NzListModule,
    NzSpinModule,
    NzTabsModule,
    NzTagModule,
  ],
  declarations: [...COMPONENTS, NoticeIconTabComponent],
  exports: COMPONENTS,
})
export class NoticeIconModule {}
