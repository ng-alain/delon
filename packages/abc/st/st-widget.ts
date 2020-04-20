import { Injectable } from '@angular/core';

export class STWidget {}

@Injectable({ providedIn: 'root' })
export class STWidgetRegistry {
  private _widgets: { [type: string]: STWidget } = {};

  get widgets() {
    return this._widgets;
  }

  register(type: string, widget: STWidget) {
    this._widgets[type] = widget;
  }

  has(type: string) {
    return this._widgets.hasOwnProperty(type);
  }

  get(type: string): STWidget | undefined {
    return this._widgets[type];
  }
}
