import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SidebarNavComponent } from './sidebar-nav.component';

const COMPONENTS = [SidebarNavComponent];

// region: zorro modules

import { NzToolTipModule } from 'ng-zorro-antd';

const ZORROMODULES = [ NzToolTipModule ];

// endregion

@NgModule({
    imports:        [CommonModule, RouterModule, ...ZORROMODULES],
    declarations:   [...COMPONENTS],
    exports:        [...COMPONENTS]
})
export class AdSidebarNavModule {
    static forRoot(): ModuleWithProviders {
        return { ngModule: AdSidebarNavModule, providers: [] };
    }
}
