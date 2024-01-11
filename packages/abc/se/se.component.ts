import { ObserversModule } from '@angular/cdk/observers';
import { NgClass } from '@angular/common';
import {
  AfterContentInit,
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  DestroyRef,
  ElementRef,
  Host,
  Input,
  OnChanges,
  Optional,
  Renderer2,
  TemplateRef,
  ViewChild,
  ViewEncapsulation,
  inject
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormControlName, NgModel, RequiredValidator, Validator, Validators } from '@angular/forms';
import { filter } from 'rxjs';

import { ResponsiveService } from '@delon/theme';
import { isEmpty } from '@delon/util/browser';
import { BooleanInput, InputBoolean, InputNumber, NumberInput } from '@delon/util/decorator';
import { helpMotion } from 'ng-zorro-antd/core/animation';
import { NzFormStatusService } from 'ng-zorro-antd/core/form';
import { NzStringTemplateOutletDirective } from 'ng-zorro-antd/core/outlet';
import type { NzSafeAny } from 'ng-zorro-antd/core/types';
import { NzIconDirective } from 'ng-zorro-antd/icon';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';

import { SEContainerComponent } from './se-container.component';
import { SEError, SEErrorType } from './se.types';

const prefixCls = `se`;
let nextUniqueId = 0;

@Component({
  selector: 'se',
  exportAs: 'se',
  templateUrl: './se.component.html',
  host: {
    '[style.padding-left.px]': 'paddingValue',
    '[style.padding-right.px]': 'paddingValue',
    '[class.se__hide-label]': 'hideLabel',
    '[class.ant-form-item-has-error]': 'invalid',
    '[class.ant-form-item-with-help]': 'showErr'
  },
  preserveWhitespaces: false,
  providers: [NzFormStatusService],
  animations: [helpMotion],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [NgClass, NzStringTemplateOutletDirective, NzToolTipModule, NzIconDirective, ObserversModule]
})
export class SEComponent implements OnChanges, AfterContentInit, AfterViewInit {
  static ngAcceptInputType_col: NumberInput;
  static ngAcceptInputType_required: BooleanInput;
  static ngAcceptInputType_line: BooleanInput;
  static ngAcceptInputType_labelWidth: NumberInput;
  static ngAcceptInputType_noColon: BooleanInput;
  static ngAcceptInputType_hideLabel: BooleanInput;

  private el: HTMLElement;
  private destroy$ = inject(DestroyRef);
  @ContentChild(NgModel, { static: true }) private readonly ngModel?: NgModel;
  @ContentChild(FormControlName, { static: true })
  private readonly formControlName?: FormControlName;
  @ViewChild('contentElement', { static: true }) private readonly contentElement!: ElementRef;
  private clsMap: string[] = [];
  private inited = false;
  private onceFlag = false;
  private errorData: SEError = {};
  private isBindModel = false;
  invalid = false;
  _labelWidth: number | null = null;
  _noColon: boolean | null = null;
  _error?: string | TemplateRef<void>;

  // #region fields

  @Input() optional?: string | TemplateRef<void> | null = null;
  @Input() optionalHelp?: string | TemplateRef<void> | null = null;
  @Input() optionalHelpColor?: string;
  @Input()
  set error(val: SEErrorType) {
    this.errorData = typeof val === 'string' || val instanceof TemplateRef ? { '': val } : val;
  }
  @Input() extra?: string | TemplateRef<void> | null;
  @Input() label?: string | TemplateRef<void> | null;
  @Input() @InputNumber(null) col?: number | null;
  @Input() @InputBoolean() required = false;
  @Input() controlClass?: string | null = '';
  @Input() @InputBoolean(null) line?: boolean | null;
  @Input() @InputNumber(null) labelWidth?: number | null;
  @Input() @InputBoolean(null) noColon?: boolean | null;
  @Input() @InputBoolean() hideLabel = false;

  @Input()
  set id(value: string) {
    this._id = value;
    this._autoId = false;
  }

  _id = `_se-${++nextUniqueId}`;
  _autoId = true;

  // #endregion

  get paddingValue(): number {
    return (this.parent.gutter as number) / 2;
  }

  get showErr(): boolean {
    return this.invalid && !!this._error && !this.compact;
  }

  get compact(): boolean {
    return this.parent.size === 'compact';
  }

  private get ngControl(): NgModel | FormControlName | null | undefined {
    return this.ngModel || this.formControlName;
  }

  constructor(
    el: ElementRef,
    @Optional() @Host() private parent: SEContainerComponent,
    private statusSrv: NzFormStatusService,
    private rep: ResponsiveService,
    private ren: Renderer2,
    private cdr: ChangeDetectorRef
  ) {
    if (parent == null) {
      throw new Error(`[se] must include 'se-container' component`);
    }
    this.el = el.nativeElement;
    parent.errorNotify
      .pipe(
        takeUntilDestroyed(this.destroy$),
        filter(w => this.inited && this.ngControl != null && this.ngControl.name === w.name)
      )
      .subscribe(item => {
        this.error = item.error;
        this.updateStatus(this.ngControl!.invalid!);
      });
  }

  private setClass(): this {
    const { el, ren, clsMap, col, parent, cdr, line, labelWidth, rep, noColon } = this;
    this._noColon = noColon != null ? noColon : parent.noColon;
    this._labelWidth = parent.nzLayout === 'horizontal' ? (labelWidth != null ? labelWidth : parent.labelWidth) : null;
    clsMap.forEach(cls => ren.removeClass(el, cls));
    clsMap.length = 0;
    const parentCol = parent.colInCon || parent.col;
    const repCls = parent.nzLayout === 'horizontal' ? rep.genCls(col != null ? col : parentCol, parentCol) : [];
    clsMap.push(`ant-form-item`, ...repCls, `${prefixCls}__item`);
    if (line || parent.line) {
      clsMap.push(`${prefixCls}__line`);
    }
    clsMap.forEach(cls => ren.addClass(el, cls));
    cdr.detectChanges();
    return this;
  }

  private bindModel(): void {
    if (!this.ngControl || this.isBindModel) return;

    this.isBindModel = true;
    this.ngControl
      .statusChanges!.pipe(takeUntilDestroyed(this.destroy$))
      .subscribe(res => this.updateStatus(res === 'INVALID'));
    if (this._autoId) {
      const controlAccessor = this.ngControl.valueAccessor as NzSafeAny;
      const control = (controlAccessor?.elementRef || controlAccessor?._elementRef)?.nativeElement as HTMLElement;
      if (!!control) {
        if (control.id) {
          this._id = control.id;
        } else {
          control.id = this._id;
        }
      }
    }
    // auto required
    if (this.required !== true) {
      let required = this.ngControl?.control?.hasValidator(Validators.required);
      if (required !== true) {
        const rawValidators = (this.ngControl as NzSafeAny)?._rawValidators as Validator[];
        required = rawValidators.find(w => w instanceof RequiredValidator) != null;
      }
      this.required = required;
      this.cdr.detectChanges();
    }
  }

  private updateStatus(invalid: boolean): void {
    if (this.ngControl?.disabled || this.ngControl?.isDisabled) {
      return;
    }
    this.invalid =
      !this.onceFlag && invalid && this.parent.ingoreDirty === false && !this.ngControl?.dirty ? false : invalid;
    const errors = this.ngControl?.errors;
    if (errors != null && Object.keys(errors).length > 0) {
      const key = Object.keys(errors)[0] || '';
      const err = this.errorData[key];
      this._error = err != null ? err : this.errorData[''] || '';
    }

    this.statusSrv.formStatusChanges.next({ status: this.invalid ? 'error' : '', hasFeedback: false });

    this.cdr.detectChanges();
  }

  checkContent(): void {
    const el = this.contentElement.nativeElement;
    const cls = `${prefixCls}__item-empty`;
    if (isEmpty(el)) {
      this.ren.addClass(el, cls);
    } else {
      this.ren.removeClass(el, cls);
    }
  }

  ngAfterContentInit(): void {
    this.checkContent();
  }

  ngOnChanges(): void {
    this.onceFlag = this.parent.firstVisual;
    if (this.inited) {
      this.setClass().bindModel();
    }
  }

  ngAfterViewInit(): void {
    this.setClass().bindModel();
    this.inited = true;
    if (this.onceFlag) {
      Promise.resolve().then(() => {
        this.updateStatus(this.ngControl?.invalid!);
        this.onceFlag = false;
      });
    }
  }
}
