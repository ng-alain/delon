import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ExceptionComponent } from './exception.component';

const COMPONENTS = [ExceptionComponent];

// region: zorro modules

import { NzButtonModule } from 'ng-zorro-antd';

const ZORROMODULES = [ NzButtonModule ];

// endregion

@NgModule({
    imports:        [CommonModule, RouterModule, ...ZORROMODULES],
    declarations:   [...COMPONENTS],
    exports:        [...COMPONENTS]
})
export class AdExceptionModule {
    static forRoot(): ModuleWithProviders {
        return { ngModule: AdExceptionModule, providers: [] };
    }
}
