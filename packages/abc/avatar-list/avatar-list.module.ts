import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';

import { AvatarListItemComponent } from './avatar-list-item.component';
import { AvatarListComponent } from './avatar-list.component';

const COMPONENTS = [AvatarListComponent, AvatarListItemComponent];

/**
 * @deprecated Will be removed in v20, Please use `nz-avatar-group` instead.
 */
@NgModule({
  imports: [CommonModule, NzAvatarModule, NzToolTipModule, ...COMPONENTS],
  exports: COMPONENTS
})
export class AvatarListModule {}
