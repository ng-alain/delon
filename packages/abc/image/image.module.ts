import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ImageDirective } from './image.directive';

const DIRECTIVES = [ImageDirective];

@NgModule({
  imports: [CommonModule],
  declarations: [...DIRECTIVES],
  exports: [...DIRECTIVES],
})
export class ImageModule {}
