import { ChangeDetectionStrategy, Component, Input, TemplateRef } from '@angular/core';
import { REP_TYPE } from '@delon/theme';
import { toNumber, InputBoolean, InputNumber } from '@delon/util';
import { SEConfig } from './edit.config';

@Component({
  selector: 'se-container, [se-container]',
  templateUrl: './edit-container.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  exportAs: 'seContainer',
})
export class SEContainerComponent {
  // #region fields

  @Input('se-container') @InputNumber(null) colInCon: REP_TYPE;
  @Input() @InputNumber(null) col: REP_TYPE;
  @Input() @InputNumber(null) labelWidth: number;
  @Input() title: string | TemplateRef<void>;

  @Input()
  get gutter(): number {
    return this.nzLayout === 'horizontal' ? this._gutter : 0;
  }
  set gutter(value: number) {
    this._gutter = toNumber(value);
  }
  private _gutter: number;

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

  // #endregion

  constructor(cog: SEConfig) {
    Object.assign(this, { ...new SEConfig(), ...cog });
  }
}
