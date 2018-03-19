import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdErrorCollectModule } from './../error-collect/error-collect.module';
import { FooterToolbarComponent } from './footer-toolbar.component';

const COMPONENTS = [FooterToolbarComponent];

@NgModule({
    imports:        [CommonModule, AdErrorCollectModule],
    declarations:   [...COMPONENTS],
    exports:        [...COMPONENTS]
})
export class AdFooterToolbarModule {
    static forRoot(): ModuleWithProviders {
        return { ngModule: AdFooterToolbarModule, providers: [] };
    }
}
