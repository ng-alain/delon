import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'ng-zorro-antd';

import { G2PieComponent } from './pie.component';

const COMPONENTS = [G2PieComponent];

@NgModule({
    imports:        [CommonModule, NgZorroAntdModule],
    declarations:   [...COMPONENTS],
    exports:        [...COMPONENTS]
})
export class AdG2PieModule {
    static forRoot(): ModuleWithProviders {
        return { ngModule: AdG2PieModule, providers: [] };
    }
}
