import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AvatarListComponent } from './avatar-list.component';
import { AvatarListItemComponent } from './avatar-list-item.component';

const COMPONENTS = [AvatarListComponent, AvatarListItemComponent];

// region: zorro modules

import { NzToolTipModule, NzAvatarModule } from 'ng-zorro-antd';

const ZORROMODULES = [ NzToolTipModule, NzAvatarModule ];

// endregion

@NgModule({
    imports:        [CommonModule, ...ZORROMODULES],
    declarations:   [...COMPONENTS],
    exports:        [...COMPONENTS]
})
export class AdAvatarListModule {
    static forRoot(): ModuleWithProviders {
        return { ngModule: AdAvatarListModule, providers: [] };
    }
}
