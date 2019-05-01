import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';

import { RangePickerComponent } from './range.component';

const COMPONENTS = [RangePickerComponent];

@NgModule({
  imports: [CommonModule, FormsModule, NzDatePickerModule],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
})
export class DatePickerModule {}
