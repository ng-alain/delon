import { ChangeDetectionStrategy, Component, Input, TemplateRef, ViewEncapsulation } from '@angular/core';
import { REP_TYPE } from '@delon/theme';
import { AlainConfigService, AlainSEConfig, InputBoolean, InputNumber, toNumber } from '@delon/util';
import { NzSafeAny } from 'ng-zorro-antd/core/types/any';
import { BehaviorSubject, Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { SEErrorRefresh, SELayout } from './se.types';

@Component({
  selector: 'se-container, [se-container]',
  exportAs: 'seContainer',
  template: `
    <se-title *ngIf="title">
      <ng-container *nzStringTemplateOutlet="title">{{ title }}</ng-container>
    </se-title>
    <ng-content></ng-content>
  `,
  host: {
    '[class.ant-row]': `true`,
    '[class.se__container]': `true`,
    '[class.se__horizontal]': `nzLayout === 'horizontal'`,
    '[class.se__vertical]': `nzLayout === 'vertical'`,
    '[class.se__inline]': `nzLayout === 'inline'`,
    '[class.se__compact]': `size === 'compact'`,
    '[style.margin-left.px]': `-(gutter / 2)`,
    '[style.margin-right.px]': `-(gutter / 2)`,
  },
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class SEContainerComponent {
  private errorNotify$ = new BehaviorSubject<SEErrorRefresh>(null as NzSafeAny);
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
  set nzLayout(value: SELayout) {
    this._nzLayout = value;
    if (value === 'inline') {
      this.size = 'compact';
    }
  }
  private _nzLayout: SELayout;

  @Input() size: 'default' | 'compact';
  @Input() @InputBoolean() firstVisual: boolean;
  @Input() @InputBoolean() ingoreDirty: boolean;
  @Input() @InputBoolean() line = false;
  @Input()
  set errors(val: SEErrorRefresh[]) {
    this.setErrors(val);
  }

  get errorNotify(): Observable<SEErrorRefresh> {
    return this.errorNotify$.pipe(filter(v => v != null));
  }

  constructor(configSrv: AlainConfigService) {
    configSrv.attach<AlainSEConfig, 'se'>(this, 'se', {
      size: 'default',
      nzLayout: 'horizontal',
      gutter: 32,
      col: 2,
      labelWidth: 150,
      firstVisual: false,
      ingoreDirty: false,
    });
  }

  setErrors(errors: SEErrorRefresh[]): void {
    for (const error of errors) {
      this.errorNotify$.next(error);
    }
  }
}
