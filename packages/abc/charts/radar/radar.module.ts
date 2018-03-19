import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'ng-zorro-antd';

import { G2RadarComponent } from './radar.component';

const COMPONENTS = [G2RadarComponent];

@NgModule({
    imports:        [CommonModule, NgZorroAntdModule],
    declarations:   [...COMPONENTS],
    exports:        [...COMPONENTS]
})
export class AdG2RadarModule {
    static forRoot(): ModuleWithProviders {
        return { ngModule: AdG2RadarModule, providers: [] };
    }
}
