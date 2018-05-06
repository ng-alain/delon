import { NgModule, ModuleWithProviders, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SimpleTableComponent } from './simple-table.component';
import { SimpleTableRowDirective } from './simple-table-row.directive';
import { AdSimpleTableConfig } from './simple-table.config';

const COMPONENTS = [SimpleTableComponent, SimpleTableRowDirective];

// region: zorro modules

import { NgZorroAntdModule } from 'ng-zorro-antd';

const ZORROMODULES = [NgZorroAntdModule];

// endregion

@NgModule({
  schemas: [NO_ERRORS_SCHEMA],
  imports: [CommonModule, FormsModule, ...ZORROMODULES],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
})
export class AdSimpleTableModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: AdSimpleTableModule, providers: [AdSimpleTableConfig] };
  }
}
