import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { LayoutDefaultHeaderItemComponent } from './layout-header-item.component';
import { LayoutDefaultHeaderComponent } from './layout-header.component';

import { LayoutDefaultNavComponent } from './layout-nav.component';
import { LayoutDefaultSideComponent } from './layout-side.component';
import { LayoutDefaultComponent } from './layout.component';

const COMPONENTS = [
  LayoutDefaultComponent,
  LayoutDefaultNavComponent,
  LayoutDefaultSideComponent,
  LayoutDefaultHeaderComponent,
  LayoutDefaultHeaderItemComponent,
];

@NgModule({
  imports: [CommonModule, RouterModule, NzToolTipModule, NzIconModule, NzAvatarModule, NzDropDownModule],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
})
export class LayoutDefaultModule {}
