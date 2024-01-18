import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';

import { AvatarListItemComponent } from './avatar-list-item.component';
import { AvatarListComponent } from './avatar-list.component';

const COMPONENTS = [AvatarListComponent, AvatarListItemComponent];

@NgModule({
  imports: [CommonModule, NzAvatarModule, NzToolTipModule, ...COMPONENTS],
  exports: COMPONENTS
})
export class AvatarListModule {}
