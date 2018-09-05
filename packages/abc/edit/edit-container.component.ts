import { Component, Input, TemplateRef } from '@angular/core';
import { toNumber, toBoolean } from '@delon/util';
import { SEConfig } from './edit.config';

@Component({
  selector: 'se-container, [se-container]',
  templateUrl: './edit-container.component.html',
  preserveWhitespaces: false,
})
export class SEContainerComponent {
  //#region fields

  _title = '';
  _titleTpl: TemplateRef<any>;
  @Input()
  set title(value: string | TemplateRef<any>) {
    if (value instanceof TemplateRef) {
      this._title = null;
      this._titleTpl = value;
    } else {
      this._title = value;
    }
  }

  @Input()
  get gutter() {
    return this.nzLayout === 'horizontal' ? this._gutter : 0;
  }
  set gutter(value: any) {
    this._gutter = toNumber(value);
  }
  private _gutter: number;

  @Input('se-container')
  set col(value: any) {
    const a = toNumber(value, 0);
    if (a <= 0) return;
    this._col = toNumber(value, 0);
  }
  get col() {
    return this._col;
  }
  private _col: number;

  @Input()
  set labelWidth(value: any) {
    this._labelWidth = toNumber(value, null);
  }
  get labelWidth() {
    return this._labelWidth;
  }
  private _labelWidth: number;

  @Input()
  get nzLayout() {
    return this._nzLayout;
  }
  set nzLayout(value: string) {
    this._nzLayout = value;
    if (value === 'inline') {
      this.size = 'compact';
    }
  }
  private _nzLayout: string;

  @Input()
  size: 'default' | 'compact';

  @Input()
  set firstVisual(value: any) {
    this._firstVisual = toBoolean(value);
  }
  get firstVisual() {
    return this._firstVisual;
  }
  private _firstVisual: boolean;

  @Input()
  set line(value: any) {
    this._line = toBoolean(value);
  }
  get line() {
    return this._line;
  }
  private _line = false;

  //#endregion

  constructor(cog: SEConfig) {
    Object.assign(this, cog);
  }
}
