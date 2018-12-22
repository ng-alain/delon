import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';

import { RangePickerComponent } from './range.component';

const COMPONENTS = [RangePickerComponent];

@NgModule({
  imports: [CommonModule, FormsModule, NgZorroAntdModule],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
})
export class DatePickerModule {
}
