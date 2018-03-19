import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { G2BarComponent } from './bar.component';

const COMPONENTS = [G2BarComponent];

@NgModule({
    imports:        [CommonModule],
    declarations:   [...COMPONENTS],
    exports:        [...COMPONENTS]
})
export class AdG2BarModule {
    static forRoot(): ModuleWithProviders {
        return { ngModule: AdG2BarModule, providers: [] };
    }
}
