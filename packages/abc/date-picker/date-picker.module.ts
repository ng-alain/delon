import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';

import { RangePickerComponent } from './range.component';
import { DatePickerConfig } from './date-picker.config';

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
