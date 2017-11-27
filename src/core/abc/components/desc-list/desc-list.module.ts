import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DescListComponent } from './desc-list.component';
import { DescListItemComponent } from './desc-list-item.component';

const COMPONENTS = [DescListComponent, DescListItemComponent];

// region: zorro modules

import { NzGridModule } from 'ng-zorro-antd';

const ZORROMODULES = [ NzGridModule ];

// endregion

@NgModule({
    imports:        [CommonModule, ...ZORROMODULES],
    declarations:   [...COMPONENTS],
    exports:        [...COMPONENTS]
})
export class AdDescListModule {
    static forRoot(): ModuleWithProviders {
        return { ngModule: AdDescListModule, providers: [] };
    }
}
