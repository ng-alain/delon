import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { DelonLocaleModule } from '@delon/theme';
import { DelonUtilModule } from '@delon/util';

import { ExceptionComponent } from './exception.component';

const COMPONENTS = [ExceptionComponent];

@NgModule({
  imports: [CommonModule, RouterModule, DelonUtilModule, DelonLocaleModule],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
})
export class ExceptionModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: ExceptionModule, providers: [] };
  }
}
