import {
  AfterContentInit,
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  ElementRef,
  Host,
  Input,
  OnChanges,
  OnDestroy,
  Optional,
  Renderer2,
  TemplateRef,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { FormControlName, NgModel, RequiredValidator, Validator } from '@angular/forms';
import { ResponsiveService } from '@delon/theme';
import { InputBoolean, InputNumber, isEmpty } from '@delon/util';
import { helpMotion } from 'ng-zorro-antd/core/animation';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
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
    '[class.ant-form-item-has-error]': 'invalid',
    '[class.ant-form-item-with-help]': 'showErr',
  },
  preserveWhitespaces: false,
  animations: [helpMotion],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class SEComponent implements OnChanges, AfterContentInit, AfterViewInit, OnDestroy {
  private el: HTMLElement;
  private unsubscribe$ = new Subject<void>();
  @ContentChild(NgModel, { static: true }) private readonly ngModel: NgModel;
  @ContentChild(FormControlName, { static: true })
  private readonly formControlName: FormControlName;
  @ViewChild('contentElement', { static: true }) private readonly contentElement: ElementRef;
  private clsMap: string[] = [];
  private inited = false;
  private onceFlag = false;
  private errorData: SEError = {};
  private isBindModel = false;
  invalid = false;
  _labelWidth: number | null = null;
  _error: string | TemplateRef<void>;

  // #region fields

  @Input() optional: string | TemplateRef<void>;
  @Input() optionalHelp: string | TemplateRef<void>;
  @Input()
  set error(val: SEErrorType) {
    this.errorData = typeof val === 'string' || val instanceof TemplateRef ? { '': val } : val;
  }
  @Input() extra: string | TemplateRef<void>;
  @Input() label: string | TemplateRef<void>;
  @Input() @InputNumber(null) col: number;
  @Input() @InputBoolean() required = false;
  @Input() controlClass: string = '';
  @Input() @InputBoolean(null) line: boolean;
  @Input() @InputNumber(null) labelWidth: number;

  @Input()
  set id(value: string) {
    this._id = value;
    this._autoId = false;
  }

  _id = `_se-${++nextUniqueId}`;
  _autoId = true;

  // #endregion

  get paddingValue(): number {
    return this.parent.gutter / 2;
  }

  get showErr(): boolean {
    return this.invalid && !!this._error && !this.compact;
  }

  get compact(): boolean {
    return this.parent.size === 'compact';
  }

  private get ngControl(): NgModel | FormControlName {
    return this.ngModel || this.formControlName;
  }

  constructor(
    el: ElementRef,
    @Optional() @Host() private parent: SEContainerComponent,
    private rep: ResponsiveService,
    private ren: Renderer2,
    private cdr: ChangeDetectorRef,
  ) {
    if (parent == null) {
      throw new Error(`[se] must include 'se-container' component`);
    }
    this.el = el.nativeElement;
    parent.errorNotify
      .pipe(
        takeUntil(this.unsubscribe$),
        filter(w => this.inited && this.ngControl != null && this.ngControl.name === w.name),
      )
      .subscribe(item => {
        this.error = item.error;
        this.updateStatus(this.ngControl.invalid!);
      });
  }

  private setClass(): this {
    const { el, ren, clsMap, col, parent, cdr, line, labelWidth, rep } = this;
    this._labelWidth = parent.nzLayout === 'horizontal' ? (labelWidth != null ? labelWidth : parent.labelWidth) : null;
    clsMap.forEach(cls => ren.removeClass(el, cls));
    clsMap.length = 0;
    const repCls = parent.nzLayout === 'horizontal' ? rep.genCls(col != null ? col : parent.colInCon || parent.col) : [];
    clsMap.push(`ant-form-item`, ...repCls, `${prefixCls}__item`);
    if (line || parent.line) {
      clsMap.push(`${prefixCls}__line`);
    }
    clsMap.forEach(cls => ren.addClass(el, cls));
    cdr.detectChanges();
    return this;
  }

  private bindModel() {
    if (!this.ngControl || this.isBindModel) return;

    this.isBindModel = true;
    this.ngControl.statusChanges!.pipe(takeUntil(this.unsubscribe$)).subscribe(res => this.updateStatus(res === 'INVALID'));
    if (this._autoId) {
      const control = (this.ngControl.valueAccessor as NzSafeAny)?._elementRef?.nativeElement as HTMLElement;
      if (control.id) {
        this._id = control.id;
      } else {
        control.id = this._id;
      }
    }
    // auto required
    if (this.required !== true) {
      const rawValidators = (this.ngControl as NzSafeAny)?._rawValidators as Array<Validator>;
      this.required = rawValidators.find(w => w instanceof RequiredValidator) != null;
      this.cdr.detectChanges();
    }
  }

  private updateStatus(invalid: boolean): void {
    if (this.ngControl.disabled || this.ngControl.isDisabled) {
      return;
    }
    this.invalid = !this.onceFlag && invalid && this.parent.ingoreDirty === false && !this.ngControl.dirty ? false : invalid;
    const errors = this.ngControl.errors;
    if (errors != null && Object.keys(errors).length > 0) {
      const key = Object.keys(errors)[0] || '';
      const err = this.errorData[key];
      this._error = err != null ? err : this.errorData[''] || '';
    }

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

  ngOnChanges() {
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
        this.updateStatus(this.ngControl.invalid!);
        this.onceFlag = false;
      });
    }
  }

  ngOnDestroy(): void {
    const { unsubscribe$ } = this;
    unsubscribe$.next();
    unsubscribe$.complete();
  }
}
