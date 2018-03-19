import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DownFileDirective } from './down-file.directive';

const DIRECTIVES = [DownFileDirective];

@NgModule({
    imports:        [CommonModule],
    declarations:   [...DIRECTIVES],
    exports:        [...DIRECTIVES]
})
export class AdDownFileModule {
    static forRoot(): ModuleWithProviders {
        return { ngModule: AdDownFileModule, providers: [] };
    }
}
