import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EllipsisComponent } from './ellipsis.component';

const COMPONENTS = [EllipsisComponent];

@NgModule({
    imports:        [CommonModule],
    declarations:   [...COMPONENTS],
    exports:        [...COMPONENTS]
})
export class AdEllipsisModule {
    static forRoot(): ModuleWithProviders {
        return { ngModule: AdEllipsisModule, providers: [] };
    }
}
