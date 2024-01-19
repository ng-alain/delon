import { ComponentRef, Injectable, ViewContainerRef, inject } from '@angular/core';

import type { NzSafeAny } from 'ng-zorro-antd/core/types';

import { FormProperty } from './model/form.property';
import { SFUISchemaItem } from './schema/ui';
import type { Widget } from './widget';

export class WidgetRegistry {
  private _widgets: { [type: string]: Widget<FormProperty, SFUISchemaItem> } = {};

  private defaultWidget!: Widget<FormProperty, SFUISchemaItem>;

  get widgets(): { [type: string]: Widget<FormProperty, SFUISchemaItem> } {
    return this._widgets;
  }

  setDefault(widget: NzSafeAny): void {
    this.defaultWidget = widget;
  }

  register(type: string, widget: NzSafeAny): void {
    this._widgets[type] = widget;
  }

  has(type: string): boolean {
    return this._widgets.hasOwnProperty(type);
  }

  getType(type: string): Widget<FormProperty, SFUISchemaItem> {
    if (this.has(type)) {
      return this._widgets[type];
    }
    return this.defaultWidget;
  }
}

@Injectable()
export class WidgetFactory {
  private readonly registry = inject(WidgetRegistry);

  createWidget(container: ViewContainerRef, type: string): ComponentRef<Widget<FormProperty, SFUISchemaItem>> {
    if (!this.registry.has(type)) {
      if (typeof ngDevMode === 'undefined' || ngDevMode) {
        console.warn(`No widget for type "${type}"`);
      }
    }

    const componentClass = this.registry.getType(type) as NzSafeAny;
    return container.createComponent(componentClass);
  }
}
