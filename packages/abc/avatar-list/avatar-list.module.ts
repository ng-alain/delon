import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'ng-zorro-antd';

import { AvatarListComponent } from './avatar-list.component';
import { AvatarListItemComponent } from './avatar-list-item.component';

const COMPONENTS = [AvatarListComponent, AvatarListItemComponent];

@NgModule({
  imports: [CommonModule, NgZorroAntdModule],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
})
export class AvatarListModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: AvatarListModule, providers: [] };
  }
}
