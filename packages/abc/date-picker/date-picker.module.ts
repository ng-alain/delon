import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';

import { RangePickerShortcutTplComponent } from './range-shortcut.component';
import { RangePickerDirective } from './range.directive';

const COMPONENTS = [RangePickerDirective, RangePickerShortcutTplComponent];

@NgModule({
  imports: [CommonModule, FormsModule, NzDatePickerModule, ...COMPONENTS],
  exports: COMPONENTS
})
export class DatePickerModule {}
