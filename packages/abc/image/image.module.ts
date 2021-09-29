import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NzModalModule } from 'ng-zorro-antd/modal';

import { ImageDirective } from './image.directive';

const DIRECTIVES = [ImageDirective];

@NgModule({
  imports: [CommonModule, NzModalModule],
  declarations: DIRECTIVES,
  exports: DIRECTIVES
})
export class ImageModule {}
