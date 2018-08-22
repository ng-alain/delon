import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DelonUtilModule } from '@delon/util';

import { NaImageDirective } from './image.directive';
import { NaImageConfig } from './image.config';

const DIRECTIVES = [NaImageDirective];

@NgModule({
  imports: [CommonModule, DelonUtilModule],
  declarations: [...DIRECTIVES],
  exports: [...DIRECTIVES],
})
export class NaImageModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: NaImageModule, providers: [NaImageConfig] };
  }
}
