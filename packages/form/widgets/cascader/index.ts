import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { DelonFormModule, WidgetRegistry } from '@delon/form';
import { NzCascaderModule } from 'ng-zorro-antd/cascader';

import { CascaderWidget } from './widget';

export * from './widget';
export * from './schema';

@NgModule({
  imports: [FormsModule, DelonFormModule, NzCascaderModule],
  declarations: [CascaderWidget]
})
export class CascaderWidgetModule {
  constructor(widgetRegistry: WidgetRegistry) {
    widgetRegistry.register(CascaderWidget.KEY, CascaderWidget);
  }
}
