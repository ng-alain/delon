import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { DelonFormModule, WidgetRegistry } from '@delon/form';
import { NzSliderModule } from 'ng-zorro-antd/slider';

import { SliderWidget } from './widget';

@NgModule({
  imports: [FormsModule, DelonFormModule, NzSliderModule, SliderWidget]
})
export class SliderWidgetModule {
  constructor(widgetRegistry: WidgetRegistry) {
    widgetRegistry.register(SliderWidget.KEY, SliderWidget);
  }
}
