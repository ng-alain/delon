import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TagSelectComponent } from './tag-select.component';

const COMPONENTS = [TagSelectComponent];

// region: zorro modules

// import { NzBreadCrumbModule } from 'ng-zorro-antd';
// import { NzIconModule } from 'ng-zorro-antd-extra';

const ZORROMODULES = [ ];

// endregion

@NgModule({
    imports:        [CommonModule, ...ZORROMODULES],
    declarations:   [...COMPONENTS],
    exports:        [...COMPONENTS]
})
export class AdTagSelectModule {
    static forRoot(): ModuleWithProviders {
        return { ngModule: AdTagSelectModule, providers: [] };
    }
}
