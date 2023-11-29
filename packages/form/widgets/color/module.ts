import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { DelonFormModule, WidgetRegistry } from '@delon/form';
import { NzColorPickerModule } from 'ng-zorro-antd/color-picker';

import { ColorWidget } from './widget';

@NgModule({
  imports: [FormsModule, CommonModule, DelonFormModule, NzColorPickerModule, ColorWidget]
})
export class ColorWidgetModule {
  constructor(widgetRegistry: WidgetRegistry) {
    widgetRegistry.register(ColorWidget.KEY, ColorWidget);
  }
}
