import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { DelonFormModule, WidgetRegistry } from '@delon/form';
import { NzRateModule } from 'ng-zorro-antd/rate';

import { RateWidget } from './widget';

export * from './widget';
export * from './schema';

@NgModule({
  imports: [FormsModule, DelonFormModule, NzRateModule, CommonModule],
  declarations: [RateWidget]
})
export class RateWidgetModule {
  constructor(widgetRegistry: WidgetRegistry) {
    widgetRegistry.register(RateWidget.KEY, RateWidget);
  }
}
