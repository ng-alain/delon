import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PageHeaderComponent } from './page-header.component';
import { AdPageHeaderConfig } from './page-header.config';

const COMPONENTS = [PageHeaderComponent];

// region: zorro modules

import { NgZorroAntdModule } from 'ng-zorro-antd';

const ZORROMODULES = [ NgZorroAntdModule ];

// endregion

@NgModule({
    imports:        [CommonModule, RouterModule, ...ZORROMODULES],
    declarations:   [...COMPONENTS],
    exports:        [...COMPONENTS]
})
export class AdPageHeaderModule {
    static forRoot(): ModuleWithProviders {
        return { ngModule: AdPageHeaderModule, providers: [ AdPageHeaderConfig ] };
    }
}
