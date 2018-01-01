import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooterToolbarComponent } from './footer-toolbar.component';
import { AdErrorCollectModule } from './../error-collect/error-collect.module';

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
