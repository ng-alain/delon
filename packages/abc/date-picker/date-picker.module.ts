import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';

import { NaRangePickerComponent } from './range.component';
import { NaDatePickerConfig } from './date-picker.config';

const COMPONENTS = [NaRangePickerComponent];

@NgModule({
  imports: [CommonModule, FormsModule, NgZorroAntdModule],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
})
export class NaDatePickerModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: NaDatePickerModule,
      providers: [NaDatePickerConfig],
    };
  }
}
