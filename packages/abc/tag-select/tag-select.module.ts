import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DelonLocaleModule } from '@delon/theme';
import { DelonUtilModule } from '@delon/util';

import { TagSelectComponent } from './tag-select.component';

const COMPONENTS = [TagSelectComponent];

@NgModule({
  imports: [CommonModule, DelonLocaleModule, DelonUtilModule],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
})
export class TagSelectModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: TagSelectModule, providers: [] };
  }
}
