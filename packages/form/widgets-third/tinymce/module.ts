import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { TinymceComponent } from 'ngx-tinymce';

import { DelonFormModule, WidgetRegistry } from '@delon/form';

import { TinymceWidget } from './widget';

@NgModule({
  imports: [FormsModule, DelonFormModule, TinymceComponent, TinymceWidget]
})
export class TinymceWidgetModule {
  constructor(widgetRegistry: WidgetRegistry) {
    widgetRegistry.register(TinymceWidget.KEY, TinymceWidget);
  }
}
