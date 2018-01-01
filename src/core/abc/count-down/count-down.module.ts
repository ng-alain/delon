import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountdownModule } from 'ngx-countdown';

import { CountDownComponent } from './count-down.component';

const COMPONENTS = [CountDownComponent];

// region: zorro modules

// import { NzToolTipModule, NzAvatarModule } from 'ng-zorro-antd';

const ZORROMODULES = [ ];

// endregion

@NgModule({
    imports:        [CommonModule, CountdownModule, ...ZORROMODULES],
    declarations:   [...COMPONENTS],
    exports:        [...COMPONENTS]
})
export class AdCountDownModule {
    static forRoot(): ModuleWithProviders {
        return { ngModule: AdCountDownModule, providers: [] };
    }
}
