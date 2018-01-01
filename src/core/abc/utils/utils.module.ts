import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyService } from './lazy.service';

// import { TrendComponent } from './trend.component';

const COMPONENTS = [];

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
export class AdUtilsModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: AdUtilsModule,
            providers: [
                LazyService
            ]
        };
    }
}
