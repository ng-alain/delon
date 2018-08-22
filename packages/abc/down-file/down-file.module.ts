import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NaDownFileDirective } from './down-file.directive';

const DIRECTIVES = [NaDownFileDirective];

@NgModule({
  imports: [CommonModule],
  declarations: [...DIRECTIVES],
  exports: [...DIRECTIVES],
})
export class NaDownFileModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: NaDownFileModule, providers: [] };
  }
}
