import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { G2ChartComponent } from './chart.component';

const COMPONENTS = [G2ChartComponent];

@NgModule({
    imports:        [CommonModule],
    declarations:   [...COMPONENTS],
    exports:        [...COMPONENTS]
})
export class AdG2ChartModule {
    static forRoot(): ModuleWithProviders {
        return { ngModule: AdG2ChartModule, providers: [] };
    }
}
