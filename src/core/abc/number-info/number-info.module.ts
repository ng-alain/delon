import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NumberInfoComponent } from './number-info.component';

const COMPONENTS = [NumberInfoComponent];

// region: zorro modules

// import { NzButtonModule } from 'ng-zorro-antd';
import { NzIconModule } from 'ng-zorro-antd-extra';

const ZORROMODULES = [ NzIconModule ];

// endregion

@NgModule({
    imports:        [CommonModule, ...ZORROMODULES],
    declarations:   [...COMPONENTS],
    exports:        [...COMPONENTS]
})
export class AdNumberInfoModule {
    static forRoot(): ModuleWithProviders {
        return { ngModule: AdNumberInfoModule, providers: [] };
    }
}
