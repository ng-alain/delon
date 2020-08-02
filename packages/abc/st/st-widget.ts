import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class STWidgetRegistry {
  private _widgets: { [type: string]: any } = {};

  get widgets(): any {
    return this._widgets;
  }

  register(type: string, widget: any): void {
    this._widgets[type] = widget;
  }

  has(type: string): boolean {
    return this._widgets.hasOwnProperty(type);
  }

  get(type: string): any {
    return this._widgets[type];
  }
}
