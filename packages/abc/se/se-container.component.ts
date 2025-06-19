import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  OnInit,
  Renderer2,
  TemplateRef,
  ViewEncapsulation,
  booleanAttribute,
  inject,
  numberAttribute
} from '@angular/core';
import { BehaviorSubject, Observable, filter } from 'rxjs';

import type { REP_TYPE } from '@delon/theme';
import { AlainConfigService } from '@delon/util/config';
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
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class SETitleComponent implements OnInit {
  private readonly parentComp = inject(SEContainerComponent, { host: true, optional: true });
  private readonly el: HTMLElement = inject(ElementRef).nativeElement;
  private readonly ren = inject(Renderer2);
  constructor() {
    if (this.parentComp == null) {
      throw new Error(`[se-title] must include 'se-container' component`);
    }
  }

  private setClass(): void {
    const { el } = this;
    const gutter = this.parentComp!.gutter as number;
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
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  imports: [SETitleComponent, NzStringTemplateOutletDirective]
})
export class SEContainerComponent {
  private errorNotify$ = new BehaviorSubject<SEErrorRefresh>(null as NzSafeAny);
  @Input({ alias: 'se-container', transform: (v: unknown) => (v == null ? null : numberAttribute(v)) })
  colInCon?: REP_TYPE;
  @Input({ transform: (v: unknown) => (v == null ? null : numberAttribute(v)) }) col!: REP_TYPE;
  @Input({ transform: (v: unknown) => (v == null ? null : numberAttribute(v)) }) labelWidth!: number;
  @Input({ transform: booleanAttribute }) noColon = false;
  @Input() title?: string | TemplateRef<void> | null;

  @Input({ transform: numberAttribute })
  get gutter(): number {
    return this.nzLayout === 'horizontal' ? this._gutter : 0;
  }
  set gutter(value: number) {
    this._gutter = value;
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
  @Input({ transform: booleanAttribute }) firstVisual!: boolean;
  @Input({ transform: booleanAttribute }) ingoreDirty!: boolean;
  @Input({ transform: booleanAttribute }) line = false;
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
