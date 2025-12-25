import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NuMonacoEditorComponent } from '@ng-util/monaco-editor';

import { DelonFormModule, WidgetRegistry } from '@delon/form';

import { MonacoEditorWidget } from './widget';

@NgModule({
  imports: [FormsModule, DelonFormModule, NuMonacoEditorComponent, MonacoEditorWidget]
})
export class MonacoEditorWidgetModule {
  constructor(widgetRegistry: WidgetRegistry) {
    widgetRegistry.register(MonacoEditorWidget.KEY, MonacoEditorWidget);
  }
}
