import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { AdLodopConfig } from './lodop.config';
import { LodopService } from './lodop.service';

const COMPONENTS = [  ];

// region: zorro modules

// import { NzBreadCrumbModule } from 'ng-zorro-antd';
// import { NzIconModule } from 'ng-zorro-antd-extra';

const ZORROMODULES = [ ];

// endregion

@NgModule({
    imports:        [CommonModule, ...ZORROMODULES ],
    declarations:   [...COMPONENTS],
    exports:        [...COMPONENTS]
})
export class AdLodopModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: AdLodopModule,
            providers: [
                LodopService,
                AdLodopConfig
            ]
        };
    }
}
