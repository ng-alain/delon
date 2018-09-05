import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NaNumberToChinesePipe } from './number-to-chinese.pipe';

const PIPES = [NaNumberToChinesePipe];

@NgModule({
  imports: [CommonModule],
  declarations: PIPES,
  exports: PIPES,
})
export class NumberToChineseModule {
  static forRoot(): ModuleWithProviders {
    return { ngModule: NumberToChineseModule, providers: [] };
  }
}
