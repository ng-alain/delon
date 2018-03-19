import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';

import { AdLodopConfig } from './lodop.config';
import { LodopService } from './lodop.service';

@NgModule({ })
export class AdLodopModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: AdLodopModule,
            providers: [
                LodopService,
                AdLodopConfig
            ]
        };
    }
}
