import { NgModule } from '@angular/core';
import { SharedModule } from '../shared.module';

import { DelonFormModule, WidgetRegistry } from '@delon/form';
import { MarkdownWidget } from '../../../../packages/form/widgets-third/markdown/markdown.widget';
import { TinymceWidget } from '../../../../packages/form/widgets-third/tinymce/tinymce.widget';
import { UeditorWidget } from '../../../../packages/form/widgets-third/ueditor/ueditor.widget';

export const SCHEMA_THIRDS_COMPONENTS = [TinymceWidget, UeditorWidget, MarkdownWidget];

@NgModule({
  declarations: SCHEMA_THIRDS_COMPONENTS,
  entryComponents: SCHEMA_THIRDS_COMPONENTS,
  imports: [SharedModule, DelonFormModule.forRoot()],
  exports: [...SCHEMA_THIRDS_COMPONENTS],
})
export class JsonSchemaModule {
  constructor(widgetRegistry: WidgetRegistry) {
    widgetRegistry.register(TinymceWidget.KEY, TinymceWidget);
    widgetRegistry.register(UeditorWidget.KEY, UeditorWidget);
    widgetRegistry.register(MarkdownWidget.KEY, MarkdownWidget);
  }
}
