import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgZorroAntdModule } from 'ng-zorro-antd';

import { SidebarNavComponent } from './sidebar-nav.component';

@NgModule({
    imports:        [CommonModule, RouterModule, NgZorroAntdModule],
    declarations:   [SidebarNavComponent],
    exports:        [SidebarNavComponent]
})
export class AdSidebarNavModule {
    static forRoot(): ModuleWithProviders {
        return { ngModule: AdSidebarNavModule, providers: [] };
    }
}
