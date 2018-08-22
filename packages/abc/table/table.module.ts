import { NgModule, ModuleWithProviders, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';

import { DelonUtilModule } from '@delon/util';

import { NaTableComponent } from './table.component';
import { NaTableRowDirective } from './table-row.directive';
import { NaTableConfig } from './table.config';

const COMPONENTS = [NaTableComponent, NaTableRowDirective];

@NgModule({
  schemas: [NO_ERRORS_SCHEMA],
  imports: [CommonModule, FormsModule, DelonUtilModule, NgZorroAntdModule],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
})
export class NaTableModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: NaTableModule, providers: [NaTableConfig] };
  }
}
