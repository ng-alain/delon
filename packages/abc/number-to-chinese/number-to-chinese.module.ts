import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NaNumberToChinesePipe } from './number-to-chinese.pipe';

const PIPES = [NaNumberToChinesePipe];

@NgModule({
  imports: [CommonModule],
  declarations: PIPES,
  exports: PIPES,
})
export class NumberToChineseModule {}
