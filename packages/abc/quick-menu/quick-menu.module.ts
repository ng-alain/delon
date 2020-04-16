import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DelonUtilModule } from '@delon/util';
import { NzOutletModule } from 'ng-zorro-antd/core/outlet';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { QuickMenuComponent } from './quick-menu.component';

const COMPONENTS = [QuickMenuComponent];

@NgModule({
  imports: [CommonModule, NzIconModule, DelonUtilModule, NzOutletModule],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
})
export class QuickMenuModule {}
