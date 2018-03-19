import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { G2MiniBarComponent } from './mini-bar.component';

const COMPONENTS = [G2MiniBarComponent];

@NgModule({
    imports:        [CommonModule],
    declarations:   [...COMPONENTS],
    exports:        [...COMPONENTS]
})
export class AdG2MiniBarModule {
    static forRoot(): ModuleWithProviders {
        return { ngModule: AdG2MiniBarModule, providers: [] };
    }
}
