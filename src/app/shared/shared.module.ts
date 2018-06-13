import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AlainThemeModule } from '@delon/theme';
import { DelonABCModule } from '@delon/abc';
import { DelonACLModule } from '@delon/acl';
import { DelonMockModule } from '@delon/mock';
import { DelonFormModule } from '@delon/form';

// third libs
import { CountdownModule } from 'ngx-countdown';
import { NgZorroAntdModule } from 'ng-zorro-antd';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule,
        ReactiveFormsModule,
        HttpClientModule,
        NgZorroAntdModule,
        AlainThemeModule.forChild(),
        DelonABCModule,
        DelonACLModule,
        DelonMockModule,
        DelonFormModule,
        // third libs
        CountdownModule
    ],
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        NgZorroAntdModule,
        AlainThemeModule,
        DelonABCModule,
        DelonACLModule,
        DelonMockModule,
        DelonFormModule,
        // third libs
        CountdownModule
    ]
})
export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [
            ]
        };
    }
}
