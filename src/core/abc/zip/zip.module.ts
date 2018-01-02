import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdUtilsModule } from '../utils/utils.module';
import { ZipService } from './zip.service';
import { ZipConfig, DA_ZIP_CONFIG } from './interface';

const COMPONENTS = [  ];

// region: zorro modules

// import { NzBreadCrumbModule } from 'ng-zorro-antd';
// import { NzIconModule } from 'ng-zorro-antd-extra';

const ZORROMODULES = [ ];

// endregion

@NgModule({
    imports:        [CommonModule, ...ZORROMODULES, AdUtilsModule],
    declarations:   [...COMPONENTS],
    exports:        [...COMPONENTS]
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
