import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NoticeIconComponent } from './notice-icon.component';
import { NoticeIconTabComponent } from './notice-icon-tab.component';

const COMPONENTS = [ NoticeIconComponent ];

// region: zorro modules

import { NgZorroAntdModule } from 'ng-zorro-antd';

const ZORROMODULES = [ NgZorroAntdModule ];

// endregion

@NgModule({
    imports:        [CommonModule, ...ZORROMODULES],
    declarations:   [...COMPONENTS, NoticeIconTabComponent ],
    exports:        [...COMPONENTS]
})
export class AdNoticeIconModule {
    static forRoot(): ModuleWithProviders {
        return { ngModule: AdNoticeIconModule, providers: [] };
    }
}
