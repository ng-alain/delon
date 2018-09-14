import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzToolTipModule, NzAvatarModule } from 'ng-zorro-antd';

import { AvatarListComponent } from './avatar-list.component';
import { AvatarListItemComponent } from './avatar-list-item.component';

const COMPONENTS = [AvatarListComponent, AvatarListItemComponent];

@NgModule({
  imports: [CommonModule, NzToolTipModule, NzAvatarModule],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
})
export class AvatarListModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: AvatarListModule, providers: [] };
  }
}
