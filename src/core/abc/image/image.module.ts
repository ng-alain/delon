import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ImageDirective } from './image.directive';
import { ImageConfig } from './image.config';

const DIRECTIVES = [ImageDirective];

@NgModule({
    imports:        [CommonModule],
    declarations:   [...DIRECTIVES],
    exports:        [...DIRECTIVES]
})
export class AdImageModule {
    static forRoot(): ModuleWithProviders {
        return { ngModule: AdImageModule, providers: [ ImageConfig ] };
    }
}
