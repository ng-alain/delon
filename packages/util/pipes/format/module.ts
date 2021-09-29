import { NgModule } from '@angular/core';

import { FormatMaskPipe } from './mask.pipe';

const PIPES = [FormatMaskPipe];

@NgModule({
  declarations: PIPES,
  exports: PIPES
})
export class FormatPipeModule {}
