import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SimpleTableComponent } from './simple-table.component';
import { SimpleTableRowDirective } from './simple-table-row.directive';
import { SimpleTableConfig } from './simple-table.config';

const COMPONENTS = [SimpleTableComponent, SimpleTableRowDirective];

// region: zorro modules

import { NzTableModule, NzCheckboxModule, NzRadioModule, NzDropDownModule, NzMenuModule, NzPopconfirmModule } from 'ng-zorro-antd';

const ZORROMODULES = [ NzTableModule, NzCheckboxModule, NzRadioModule, NzDropDownModule, NzMenuModule, NzPopconfirmModule ];

// endregion

@NgModule({
    imports:        [CommonModule, FormsModule, ...ZORROMODULES],
    declarations:   [...COMPONENTS],
    exports:        [...COMPONENTS]
})
export class AdSimpleTableModule {
    static forRoot(): ModuleWithProviders {
        return { ngModule: AdSimpleTableModule, providers: [ SimpleTableConfig ] };
    }
}
