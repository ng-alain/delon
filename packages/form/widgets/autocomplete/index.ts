import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { DelonFormModule, WidgetRegistry } from '@delon/form';
import { NzAutocompleteModule } from 'ng-zorro-antd/auto-complete';
import { NzInputModule } from 'ng-zorro-antd/input';

import { AutoCompleteWidget } from './widget';

export * from './widget';
export * from './schema';

@NgModule({
  imports: [FormsModule, DelonFormModule, CommonModule, NzInputModule, NzAutocompleteModule],
  declarations: [AutoCompleteWidget]
})
export class AutoCompleteWidgetModule {
  constructor(widgetRegistry: WidgetRegistry) {
    widgetRegistry.register(AutoCompleteWidget.KEY, AutoCompleteWidget);
  }
}
