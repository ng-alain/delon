import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DelonUtilModule } from '@delon/util';

import { ImageDirective } from './image.directive';
import { ImageConfig } from './image.config';

const DIRECTIVES = [ImageDirective];

@NgModule({
  imports: [CommonModule, DelonUtilModule],
  declarations: [...DIRECTIVES],
  exports: [...DIRECTIVES],
})
export class ImageModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: ImageModule, providers: [ImageConfig] };
  }
}
