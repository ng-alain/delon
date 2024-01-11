import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Host,
  Input,
  OnInit,
  Optional,
  Renderer2,
  TemplateRef,
  ViewEncapsulation
} from '@angular/core';
import { BehaviorSubject, Observable, filter } from 'rxjs';

import type { REP_TYPE } from '@delon/theme';
import { AlainConfigService } from '@delon/util/config';
import { BooleanInput, InputBoolean, InputNumber, NumberInput, toNumber } from '@delon/util/decorator';
import { NzStringTemplateOutletDirective } from 'ng-zorro-antd/core/outlet';
import type { NzSafeAny } from 'ng-zorro-antd/core/types';

import { SEErrorRefresh, SELayout } from './se.types';

@Component({
  selector: 'se-title, [se-title]',
  exportAs: 'seTitle',
  template: '<ng-content />',
  host: {
    '[class.se__title]': 'true'
  },
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  standalone: true
})
export class SETitleComponent implements OnInit {
  private el: HTMLElement;
  constructor(
    @Host()
    @Optional()
    private parent: SEContainerComponent,
    el: ElementRef,
    private ren: Renderer2
  ) {
    if (parent == null) {
      throw new Error(`[se-title] must include 'se-container' component`);
    }
    this.el = el.nativeElement;
  }

  private setClass(): void {
    const { el } = this;
    const gutter = this.parent.gutter as number;
    this.ren.setStyle(el, 'padding-left', `${gutter / 2}px`);
    this.ren.setStyle(el, 'padding-right', `${gutter / 2}px`);
  }

  ngOnInit(): void {
    this.setClass();
  }
}

@Component({
  selector: 'se-container, [se-container]',
  exportAs: 'seContainer',
  template: `
    @if (title) {
      <div se-title>
        <ng-container *nzStringTemplateOutlet="title">{{ title }}</ng-container>
      </div>
    }
    <ng-content />
  `,
  host: {
    '[class.ant-row]': `true`,
    '[class.se__container]': `true`,
    '[class.se__horizontal]': `nzLayout === 'horizontal'`,
    '[class.se__vertical]': `nzLayout === 'vertical'`,
    '[class.se__inline]': `nzLayout === 'inline'`,
    '[class.se__compact]': `size === 'compact'`,
    '[style.margin-left.px]': `margin`,
    '[style.margin-right.px]': `margin`
  },
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [SETitleComponent, NzStringTemplateOutletDirective]
})
export class SEContainerComponent {
  static ngAcceptInputType_gutter: NumberInput;
  static ngAcceptInputType_col: NumberInput;
  static ngAcceptInputType_colInCon: NumberInput;
  static ngAcceptInputType_labelWidth: NumberInput;
  static ngAcceptInputType_firstVisual: BooleanInput;
  static ngAcceptInputType_ingoreDirty: BooleanInput;
  static ngAcceptInputType_line: BooleanInput;
  static ngAcceptInputType_noColon: BooleanInput;

  private errorNotify$ = new BehaviorSubject<SEErrorRefresh>(null as NzSafeAny);
  @Input('se-container') @InputNumber(null) colInCon?: REP_TYPE;
  @Input() @InputNumber(null) col!: REP_TYPE;
  @Input() @InputNumber(null) labelWidth!: number;
  @Input() @InputBoolean() noColon = false;
  @Input() title?: string | TemplateRef<void> | null;

  @Input()
  get gutter(): number {
    return this.nzLayout === 'horizontal' ? this._gutter : 0;
  }
  set gutter(value: number) {
    this._gutter = toNumber(value);
  }
  private _gutter!: number;

  @Input()
  get nzLayout(): SELayout {
    return this._nzLayout;
  }
  set nzLayout(value: SELayout) {
    this._nzLayout = value;
    if (value === 'inline') {
      this.size = 'compact';
    }
  }
  private _nzLayout!: SELayout;

  @Input() size!: 'default' | 'compact';
  @Input() @InputBoolean() firstVisual!: boolean;
  @Input() @InputBoolean() ingoreDirty!: boolean;
  @Input() @InputBoolean() line = false;
  @Input()
  set errors(val: SEErrorRefresh[]) {
    this.setErrors(val);
  }

  get margin(): number {
    return -((this.gutter as number) / 2);
  }

  get errorNotify(): Observable<SEErrorRefresh> {
    return this.errorNotify$.pipe(filter(v => v != null));
  }

  constructor(configSrv: AlainConfigService) {
    configSrv.attach(this, 'se', {
      size: 'default',
      nzLayout: 'horizontal',
      gutter: 32,
      col: 2,
      labelWidth: 150,
      firstVisual: false,
      ingoreDirty: false
    });
  }

  setErrors(errors: SEErrorRefresh[]): void {
    for (const error of errors) {
      this.errorNotify$.next(error);
    }
  }
}
