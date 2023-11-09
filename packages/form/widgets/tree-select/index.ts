import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { DelonFormModule, WidgetRegistry } from '@delon/form';
import { NzTreeSelectModule } from 'ng-zorro-antd/tree-select';

import { TreeSelectWidget } from './widget';

export * from './widget';
export * from './schema';

@NgModule({
  imports: [FormsModule, DelonFormModule, NzTreeSelectModule],
  declarations: [TreeSelectWidget]
})
export class TreeSelectWidgetModule {
  constructor(widgetRegistry: WidgetRegistry) {
    widgetRegistry.register(TreeSelectWidget.KEY, TreeSelectWidget);
  }
}
