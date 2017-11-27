import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ProHeaderComponent } from './pro-header.component';

const COMPONENTS = [ProHeaderComponent];

// region: zorro modules

import { NzBreadCrumbModule } from 'ng-zorro-antd';
// import { NzIconModule } from 'ng-zorro-antd-extra';

const ZORROMODULES = [ NzBreadCrumbModule ];

// endregion

@NgModule({
    imports:        [CommonModule, RouterModule, ...ZORROMODULES],
    declarations:   [...COMPONENTS],
    exports:        [...COMPONENTS]
})
export class AdProHeaderModule {
    static forRoot(): ModuleWithProviders {
        return { ngModule: AdProHeaderModule, providers: [] };
    }
}
