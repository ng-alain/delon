import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { DelonFormModule, WidgetRegistry } from '@delon/form';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTagModule } from 'ng-zorro-antd/tag';

import { TagWidget } from './widget';

export * from './widget';
export * from './schema';

@NgModule({
  imports: [FormsModule, DelonFormModule, NzTagModule, NzIconModule, CommonModule],
  declarations: [TagWidget]
})
export class TagWidgetModule {
  constructor(widgetRegistry: WidgetRegistry) {
    widgetRegistry.register(TagWidget.KEY, TagWidget);
  }
}
