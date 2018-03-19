import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyService } from './lazy.service';

@NgModule({
    imports:        [CommonModule]
})
export class AdUtilsModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: AdUtilsModule,
            providers: [
                LazyService
            ]
        };
    }
}
