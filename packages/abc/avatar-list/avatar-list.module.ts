import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NaAvatarListComponent } from './avatar-list.component';
import { NaAvatarListItemComponent } from './avatar-list-item.component';

const COMPONENTS = [NaAvatarListComponent, NaAvatarListItemComponent];

// region: zorro modules

import { NgZorroAntdModule } from 'ng-zorro-antd';

const ZORROMODULES = [NgZorroAntdModule];

// endregion

@NgModule({
  imports: [CommonModule, ...ZORROMODULES],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
})
export class NaAvatarListModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: NaAvatarListModule, providers: [] };
  }
}
