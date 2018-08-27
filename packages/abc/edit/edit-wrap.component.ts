import { Component, Input } from '@angular/core';
import { toNumber, toBoolean } from '@delon/util';
import { NaEditConfig } from './edit.config';

@Component({
  selector: 'na-edit-wrap, [na-edit-wrap]',
  templateUrl: './edit-wrap.component.html',
  preserveWhitespaces: false,
})
export class NaEditWrapComponent {
  //#region fields

  @Input()
  get gutter() {
    return this.nzLayout === 'horizontal' ? this._gutter : 0;
  }
  set gutter(value: any) {
    this._gutter = toNumber(value);
  }
  private _gutter: number;

  @Input('na-edit-wrap')
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
    this._labelWidth = toNumber(value, 0);
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

  //#endregion

  constructor(cog: NaEditConfig) {
    Object.assign(this, cog);
  }
}
