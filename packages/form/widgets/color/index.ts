import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { DelonFormModule, WidgetRegistry } from '@delon/form';
import { NzColorPickerModule } from 'ng-zorro-antd/color-picker';

import { ColorWidget } from './widget';

export * from './widget';
export * from './schema';

@NgModule({
  imports: [FormsModule, CommonModule, DelonFormModule, NzColorPickerModule],
  declarations: [ColorWidget]
})
export class ColorWidgetModule {
  constructor(widgetRegistry: WidgetRegistry) {
    widgetRegistry.register(ColorWidget.KEY, ColorWidget);
  }
}
