import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'ng-zorro-antd';

import { G2CardComponent } from './card.component';

const COMPONENTS = [G2CardComponent];

@NgModule({
    imports:        [CommonModule, NgZorroAntdModule],
    declarations:   [...COMPONENTS],
    exports:        [...COMPONENTS]
})
export class AdG2CardModule {
    static forRoot(): ModuleWithProviders {
        return { ngModule: AdG2CardModule, providers: [] };
    }
}
