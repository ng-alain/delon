import { Component } from '@angular/core';

import type { NuMonacoEditorEvent } from '@ng-util/monaco-editor';

import { ControlUIWidget } from '@delon/form';

import type { MonacoEditorWidgetSchema } from './schema';

@Component({
  selector: 'sf-widget-monaco-editor',
  template: `
    <sf-item-wrap
      [id]="id"
      [schema]="schema"
      [ui]="ui"
      [showError]="showError"
      [error]="error"
      [showTitle]="schema.title"
    >
      <nu-monaco-editor
        [ngModel]="value"
        (ngModelChange)="_change($event)"
        [options]="ui.options ?? {}"
        [disabled]="disabled"
        [model]="ui.model"
        [autoFormat]="ui.autoFormat ?? true"
        [height]="ui.height ?? '200px'"
        [delay]="ui.delay ?? 0"
        (event)="_event($event)"
      />
    </sf-item-wrap>
  `
})
export class MonacoEditorWidget extends ControlUIWidget<MonacoEditorWidgetSchema> {
  static readonly KEY = 'monaco-editor';

  _change(value: string): void {
    this.setValue(value);
    if (this.ui.change) this.ui.change(value);
  }

  _event(ev: NuMonacoEditorEvent): void {
    if (this.ui.event) this.ui.event(ev);
  }
}
