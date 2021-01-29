import { NgModule } from '@angular/core';
import { CommasNumberPipe } from './commas.pipe';
import { MegaNumberPipe } from './mega.pipe';
const PIPES = [MegaNumberPipe, CommasNumberPipe];

@NgModule({
  declarations: PIPES,
  exports: PIPES,
})
export class FormatNumberPipeModule {}
