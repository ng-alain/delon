import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NgxTinymceModule } from 'ngx-tinymce';

import { DelonFormModule, WidgetRegistry } from '@delon/form';

import { TinymceWidget } from './widget';

export * from './widget';
export * from './schema';

@NgModule({
  imports: [FormsModule, DelonFormModule, NgxTinymceModule],
  declarations: [TinymceWidget]
})
export class TinymceWidgetModule {
  constructor(widgetRegistry: WidgetRegistry) {
    widgetRegistry.register(TinymceWidget.KEY, TinymceWidget);
  }
}
