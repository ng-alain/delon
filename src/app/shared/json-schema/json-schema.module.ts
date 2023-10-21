import { NgModule } from '@angular/core';

import { DelonFormModule, WidgetRegistry } from '@delon/form';
import { CascaderWidgetModule } from '@delon/form/widgets/cascader';
import { MentionWidgetModule } from '@delon/form/widgets/mention';
import { RateWidgetModule } from '@delon/form/widgets/rate';
import { SliderWidgetModule } from '@delon/form/widgets/slider';
import { TagWidgetModule } from '@delon/form/widgets/tag';
import { TransferWidgetModule } from '@delon/form/widgets/transfer';
import { TreeSelectWidgetModule } from '@delon/form/widgets/tree-select';
import { TinymceWidget } from '@delon/form/widgets-third/tinymce/tinymce.widget';

import { SharedModule } from '../shared.module';

export const SCHEMA_THIRDS_COMPONENTS = [TinymceWidget];

@NgModule({
  declarations: SCHEMA_THIRDS_COMPONENTS,
  imports: [
    SharedModule,
    DelonFormModule.forRoot(),
    CascaderWidgetModule,
    TransferWidgetModule,
    MentionWidgetModule,
    RateWidgetModule,
    SliderWidgetModule,
    TreeSelectWidgetModule,
    TagWidgetModule
  ],
  exports: [...SCHEMA_THIRDS_COMPONENTS]
})
export class JsonSchemaModule {
  constructor(widgetRegistry: WidgetRegistry) {
    widgetRegistry.register(TinymceWidget.KEY, TinymceWidget);
  }
}
