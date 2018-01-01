import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NoticeListComponent } from './notice-list.component';
import { NoticeIconComponent } from './notice-icon.component';

const COMPONENTS = [NoticeListComponent, NoticeIconComponent];

import { AdDescListModule } from '../desc-list/desc-list.module';

// region: zorro modules

import { NzPopoverModule, NzBadgeModule, NzSpinModule, NzTabsModule, NzTagModule } from 'ng-zorro-antd';
import { NzListModule, NzIconModule } from 'ng-zorro-antd-extra';

const ZORROMODULES = [
    NzPopoverModule, NzBadgeModule, NzSpinModule, NzTabsModule, NzTagModule,
    NzListModule, NzIconModule
];

// endregion

@NgModule({
    imports:        [CommonModule, AdDescListModule.forRoot(), ...ZORROMODULES],
    declarations:   [...COMPONENTS],
    exports:        [...COMPONENTS]
})
export class AdNoticeIconModule {
    static forRoot(): ModuleWithProviders {
        return { ngModule: AdNoticeIconModule, providers: [] };
    }
}
