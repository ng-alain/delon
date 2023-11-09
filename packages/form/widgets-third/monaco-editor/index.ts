import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NuMonacoEditorModule } from '@ng-util/monaco-editor';

import { DelonFormModule, WidgetRegistry } from '@delon/form';

import { MonacoEditorWidget } from './widget';

export * from './widget';
export * from './schema';

@NgModule({
  imports: [FormsModule, DelonFormModule, NuMonacoEditorModule],
  declarations: [MonacoEditorWidget]
})
export class MonacoEditorWidgetModule {
  constructor(widgetRegistry: WidgetRegistry) {
    widgetRegistry.register(MonacoEditorWidget.KEY, MonacoEditorWidget);
  }
}
