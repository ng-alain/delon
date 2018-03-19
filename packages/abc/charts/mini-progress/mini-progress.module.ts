import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'ng-zorro-antd';

import { G2ProgressComponent } from './mini-progress.component';

const COMPONENTS = [G2ProgressComponent];

@NgModule({
    imports:        [CommonModule, NgZorroAntdModule],
    declarations:   [...COMPONENTS],
    exports:        [...COMPONENTS]
})
export class AdG2MiniProgressModule {
    static forRoot(): ModuleWithProviders {
        return { ngModule: AdG2MiniProgressModule, providers: [] };
    }
}
