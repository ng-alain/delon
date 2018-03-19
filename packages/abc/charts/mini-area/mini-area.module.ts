import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { G2MiniAreaComponent } from './mini-area.component';

const COMPONENTS = [G2MiniAreaComponent];

@NgModule({
    imports:        [CommonModule],
    declarations:   [...COMPONENTS],
    exports:        [...COMPONENTS]
})
export class AdG2MiniAreaModule {
    static forRoot(): ModuleWithProviders {
        return { ngModule: AdG2MiniAreaModule, providers: [] };
    }
}
