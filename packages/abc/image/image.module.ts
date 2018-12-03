import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { DelonUtilModule } from '@delon/util';

import { ImageConfig } from './image.config';
import { ImageDirective } from './image.directive';

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
