import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouteReuseStrategy } from '@angular/router';

import { ReuseTabComponent } from './reuse-tab.component';
import { ReuseTabService } from './reuse-tab.service';
import { ReuseTabStrategy } from './reuse-tab.strategy';

const COMPONENTS = [ReuseTabComponent];

// region: zorro modules

import { NzTabsModule, NzButtonModule, NzPopconfirmModule } from 'ng-zorro-antd';

const ZORROMODULES = [ NzTabsModule, NzButtonModule, NzPopconfirmModule ];

// endregion

@NgModule({
    imports:        [CommonModule, RouterModule, ...ZORROMODULES],
    declarations:   [...COMPONENTS],
    exports:        [...COMPONENTS]
})
export class AdReuseTabModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: AdReuseTabModule,
            providers: [
                ReuseTabService,
                { provide: RouteReuseStrategy, useClass: ReuseTabStrategy, deps: [ ReuseTabService ] }
            ]
        };
    }
}
