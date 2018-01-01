import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EllipsisComponent } from './ellipsis.component';

const COMPONENTS = [EllipsisComponent];

// region: zorro modules

const ZORROMODULES = [ ];

// endregion

@NgModule({
    imports:        [CommonModule, ...ZORROMODULES],
    declarations:   [...COMPONENTS],
    exports:        [...COMPONENTS]
})
export class AdEllipsisModule {
    static forRoot(): ModuleWithProviders {
        return { ngModule: AdEllipsisModule, providers: [] };
    }
}
