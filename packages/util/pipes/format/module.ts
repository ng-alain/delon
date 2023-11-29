import { NgModule } from '@angular/core';

import { FormatMaskPipe } from './mask.pipe';

const PIPES = [FormatMaskPipe];

@NgModule({
  imports: PIPES,
  exports: PIPES
})
export class FormatPipeModule {}
