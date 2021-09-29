import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';

import { SettingDrawerItemComponent } from './setting-drawer-item.component';
import { SettingDrawerComponent } from './setting-drawer.component';

const COMPONENTS = [SettingDrawerItemComponent, SettingDrawerComponent];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NzDrawerModule,
    NzToolTipModule,
    NzDividerModule,
    NzTabsModule,
    NzSwitchModule,
    NzAlertModule,
    NzIconModule,
    NzInputModule,
    NzInputNumberModule,
    NzButtonModule
  ],
  declarations: COMPONENTS,
  exports: COMPONENTS
})
export class SettingDrawerModule {}
