import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StandardFormRowComponent } from './standard-form-row.component';

const COMPONENTS = [StandardFormRowComponent];

@NgModule({
    imports:        [CommonModule],
    declarations:   [...COMPONENTS],
    exports:        [...COMPONENTS]
})
export class AdStandardFormRowModule {
    static forRoot(): ModuleWithProviders {
        return { ngModule: AdStandardFormRowModule, providers: [] };
    }
}
