import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { G2GaugeComponent } from './gauge.component';

const COMPONENTS = [G2GaugeComponent];

@NgModule({
    imports:        [CommonModule],
    declarations:   [...COMPONENTS],
    exports:        [...COMPONENTS]
})
export class AdG2GaugeModule {
    static forRoot(): ModuleWithProviders {
        return { ngModule: AdG2GaugeModule, providers: [] };
    }
}
