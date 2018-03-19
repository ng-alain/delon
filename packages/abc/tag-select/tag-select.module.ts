import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TagSelectComponent } from './tag-select.component';

const COMPONENTS = [TagSelectComponent];

@NgModule({
    imports:        [CommonModule],
    declarations:   [...COMPONENTS],
    exports:        [...COMPONENTS]
})
export class AdTagSelectModule {
    static forRoot(): ModuleWithProviders {
        return { ngModule: AdTagSelectModule, providers: [] };
    }
}
