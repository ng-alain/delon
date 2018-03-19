import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { GlobalFooterComponent } from './global-footer.component';

const COMPONENTS = [GlobalFooterComponent];

@NgModule({
    imports:        [CommonModule, RouterModule],
    declarations:   [...COMPONENTS],
    exports:        [...COMPONENTS]
})
export class AdGlobalFooterModule {
    static forRoot(): ModuleWithProviders {
        return { ngModule: AdGlobalFooterModule, providers: [] };
    }
}
