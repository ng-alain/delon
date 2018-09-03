import { NgModule, ModuleWithProviders, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';

import { DelonUtilModule } from '@delon/util';

import { STComponent } from './table.component';
import { STRowDirective } from './table-row.directive';
import { NaSTConfig } from './table.config';

const COMPONENTS = [STComponent, STRowDirective];

@NgModule({
  schemas: [NO_ERRORS_SCHEMA],
  imports: [CommonModule, FormsModule, DelonUtilModule, NgZorroAntdModule],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
})
export class NaSTModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: NaSTModule, providers: [NaSTConfig] };
  }
}
