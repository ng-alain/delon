import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ErrorCollectComponent } from './error-collect.component';

const COMPONENTS = [ErrorCollectComponent];

@NgModule({
    imports:        [CommonModule],
    declarations:   [...COMPONENTS],
    exports:        [...COMPONENTS]
})
export class AdErrorCollectModule {
    static forRoot(): ModuleWithProviders {
        return { ngModule: AdErrorCollectModule, providers: [] };
    }
}
