import { NgModule } from '@angular/core';

import { SettingDrawerItemComponent } from './setting-drawer-item.component';
import { SettingDrawerComponent } from './setting-drawer.component';

const COMPONENTS = [SettingDrawerItemComponent, SettingDrawerComponent];

@NgModule({
  imports: COMPONENTS,
  exports: COMPONENTS
})
export class SettingDrawerModule {}
