import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouteReuseStrategy } from '@angular/router';

import { ReuseTabComponent } from './reuse-tab.component';
import { ReuseTabService } from './reuse-tab.service';
import { ReuseTabStrategy } from './reuse-tab.strategy';
import { ReuseTabContextComponent } from './reuse-tab-context.component';
import { ReuseTabContextDirective } from './reuse-tab-context.directive';
import { ReuseTabContextMenuComponent } from './reuse-tab-context-menu.component';

const COMPONENTS = [ReuseTabComponent];
const NOEXPORTS = [ReuseTabContextMenuComponent, ReuseTabContextComponent, ReuseTabContextDirective];

// region: zorro modules

import { NzTabsModule, NzButtonModule, NzMenuModule } from 'ng-zorro-antd';
import { OverlayModule } from '@angular/cdk/overlay';

const ZORROMODULES = [ NzTabsModule, NzButtonModule, NzMenuModule ];

// endregion

@NgModule({
    imports:        [CommonModule, RouterModule, ...ZORROMODULES, OverlayModule],
    declarations:   [...COMPONENTS, ...NOEXPORTS],
    entryComponents: [ ReuseTabContextMenuComponent ],
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
