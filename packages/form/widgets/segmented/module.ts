import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { DelonFormModule, WidgetRegistry } from '@delon/form';
import { NzSegmentedModule } from 'ng-zorro-antd/segmented';

import { SegmentedWidget } from './widget';

@NgModule({
  imports: [FormsModule, DelonFormModule, NzSegmentedModule, SegmentedWidget]
})
export class SegmentedWidgetModule {
  constructor(widgetRegistry: WidgetRegistry) {
    widgetRegistry.register(SegmentedWidget.KEY, SegmentedWidget);
  }
}
