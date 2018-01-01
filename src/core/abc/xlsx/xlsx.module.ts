import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdUtilsModule } from '../utils/utils.module';
import { XlsxService } from './xlsx.service';
import { XlsxDirective } from './xlsx.directive';
import { XlsxConfig, DA_XLSX_CONFIG } from './interface';

const COMPONENTS = [ XlsxDirective ];

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
export class AdXlsxModule {
    static forRoot(config?: XlsxConfig): ModuleWithProviders {
        return {
            ngModule: AdXlsxModule,
            providers: [
                XlsxService,
                { provide: DA_XLSX_CONFIG, useValue: config }
            ]
        };
    }
}
