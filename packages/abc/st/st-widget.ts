import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class STWidgetRegistry {
  private _widgets: { [type: string]: any } = {};

  get widgets() {
    return this._widgets;
  }

  register(type: string, widget: any) {
    this._widgets[type] = widget;
  }

  has(type: string) {
    return this._widgets.hasOwnProperty(type);
  }

  get(type: string): any {
    return this._widgets[type];
  }
}
