import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';

import { DatePickerConfig } from './date-picker.config';
import { RangePickerComponent } from './range.component';

const COMPONENTS = [RangePickerComponent];

@NgModule({
  imports: [CommonModule, FormsModule, NgZorroAntdModule],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
})
export class DatePickerModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: DatePickerModule,
      providers: [DatePickerConfig],
    };
  }
}
