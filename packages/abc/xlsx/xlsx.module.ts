import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdUtilsModule } from '../utils/utils.module';
import { XlsxService } from './xlsx.service';
import { XlsxDirective } from './xlsx.directive';
import { XlsxConfig, DA_XLSX_CONFIG } from './interface';

const COMPONENTS = [ XlsxDirective ];

@NgModule({
    imports:        [CommonModule, AdUtilsModule],
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
