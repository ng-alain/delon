import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DelonUtilModule } from '@delon/util';

import { ImageDirective } from './image.directive';

const DIRECTIVES = [ImageDirective];

@NgModule({
  imports: [CommonModule, DelonUtilModule],
  declarations: [...DIRECTIVES],
  exports: [...DIRECTIVES],
})
export class ImageModule { }
