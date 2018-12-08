import {
  ChangeDetectionStrategy,
  Component,
  Input,
  TemplateRef,
} from '@angular/core';
import { toNumber, InputBoolean, InputNumber } from '@delon/util';
import { SEConfig } from './edit.config';

@Component({
  selector: 'se-container, [se-container]',
  templateUrl: './edit-container.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SEContainerComponent {
  //#region fields

  @Input() title: string | TemplateRef<void>;

  @Input()
  get gutter(): number {
    return this.nzLayout === 'horizontal' ? this._gutter : 0;
  }
  set gutter(value: number) {
    this._gutter = toNumber(value);
  }
  private _gutter: number;

  @Input('se-container')
  set col(value: number) {
    const a = toNumber(value, 0);
    if (a <= 0) return;
    this._col = toNumber(value, 0);
  }
  get col(): number {
    return this._col;
  }
  private _col: number;

  @Input() @InputNumber(null) labelWidth: number;

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

  @Input() size: 'default' | 'compact';
  @Input() @InputBoolean() firstVisual: boolean;
  @Input() @InputBoolean() line = false;

  //#endregion

  constructor(cog: SEConfig) {
    Object.assign(this, cog);
  }
}
