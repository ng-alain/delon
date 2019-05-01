import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DelonUtilModule } from '@delon/util';
import { NzIconModule } from 'ng-zorro-antd/icon';

import { QuickMenuComponent } from './quick-menu.component';

const COMPONENTS = [QuickMenuComponent];

@NgModule({
  imports: [CommonModule, NzIconModule, DelonUtilModule],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
})
export class QuickMenuModule {}
