import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NaNumberToChinesePipe } from './number-to-chinese.pipe';

const PIPES = [NaNumberToChinesePipe];

/**
 * @deprecated Will be removed in 13.0.0, Pls used `CurrencyService.cny` instead
 */
@NgModule({
  imports: [CommonModule],
  declarations: PIPES,
  exports: PIPES,
})
export class NumberToChineseModule {}
