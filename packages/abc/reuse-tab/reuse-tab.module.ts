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

import { OverlayModule } from '@angular/cdk/overlay';
import { NgZorroAntdModule } from 'ng-zorro-antd';

@NgModule({
    imports:        [CommonModule, RouterModule, NgZorroAntdModule, OverlayModule],
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
