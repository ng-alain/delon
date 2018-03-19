import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdUtilsModule } from '../utils/utils.module';
import { ZipService } from './zip.service';
import { ZipConfig, DA_ZIP_CONFIG } from './interface';

@NgModule({
    imports:        [CommonModule, AdUtilsModule]
})
export class AdZipModule {
    static forRoot(config?: ZipConfig): ModuleWithProviders {
        return {
            ngModule: AdZipModule,
            providers: [
                ZipService,
                { provide: DA_ZIP_CONFIG, useValue: config }
            ]
        };
    }
}
