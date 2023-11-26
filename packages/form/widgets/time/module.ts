import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { DelonFormModule, WidgetRegistry } from '@delon/form';
import { NzTimePickerModule } from 'ng-zorro-antd/time-picker';

import { TimeWidget } from './widget';

@NgModule({
  imports: [FormsModule, DelonFormModule, NzTimePickerModule, TimeWidget]
})
export class TimeWidgetModule {
  constructor(widgetRegistry: WidgetRegistry) {
    widgetRegistry.register(TimeWidget.KEY, TimeWidget);
  }
}
