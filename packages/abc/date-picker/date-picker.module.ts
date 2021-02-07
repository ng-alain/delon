import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { RangePickerShortcutTplComponent } from './range-shortcut.component';
import { RangePickerComponent } from './range.component';
import { RangePickerDirective } from './range.directive';

const COMPONENTS = [RangePickerComponent, RangePickerDirective, RangePickerShortcutTplComponent];

@NgModule({
  imports: [CommonModule, FormsModule, NzDatePickerModule],
  declarations: COMPONENTS,
  exports: COMPONENTS,
})
export class DatePickerModule {}
