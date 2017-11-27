import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { GlobalFooterComponent } from './global-footer.component';

const COMPONENTS = [GlobalFooterComponent];

// region: zorro modules

// import { NzButtonModule } from 'ng-zorro-antd';

const ZORROMODULES = [ ];

// endregion

@NgModule({
    imports:        [CommonModule, RouterModule, ...ZORROMODULES],
    declarations:   [...COMPONENTS],
    exports:        [...COMPONENTS]
})
export class AdGlobalFooterModule {
    static forRoot(): ModuleWithProviders {
        return { ngModule: AdGlobalFooterModule, providers: [] };
    }
}
