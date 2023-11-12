import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { DelonFormModule, WidgetRegistry } from '@delon/form';
import { NzAutocompleteModule } from 'ng-zorro-antd/auto-complete';
import { NzInputModule } from 'ng-zorro-antd/input';

import { AutoCompleteWidget } from './widget';

@NgModule({
  imports: [FormsModule, DelonFormModule, CommonModule, NzInputModule, NzAutocompleteModule, AutoCompleteWidget]
})
export class AutoCompleteWidgetModule {
  constructor(widgetRegistry: WidgetRegistry) {
    widgetRegistry.register(AutoCompleteWidget.KEY, AutoCompleteWidget);
  }
}
