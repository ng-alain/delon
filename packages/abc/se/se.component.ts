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
import { Subscription } from 'rxjs';
import { SEContainerComponent } from './se-container.component';

const prefixCls = `se`;
let nextUniqueId = 0;

@Component({
  selector: 'se',
  exportAs: 'se',
  templateUrl: './se.component.html',
  host: {
    '[style.padding-left.px]': 'paddingValue',
    '[style.padding-right.px]': 'paddingValue',
    '[class.ant-form-item-has-error]': 'showErr',
    '[class.ant-form-item-with-help]': 'showErr && !compact',
  },
  preserveWhitespaces: false,
  animations: [helpMotion],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class SEComponent implements OnChanges, AfterContentInit, AfterViewInit, OnDestroy {
  private el: HTMLElement;
  private status$: Subscription;
  @ContentChild(NgModel, { static: true }) private readonly ngModel: NgModel;
  @ContentChild(FormControlName, { static: true })
  private readonly formControlName: FormControlName;
  @ViewChild('contentElement', { static: true }) private readonly contentElement: ElementRef;
  private clsMap: string[] = [];
  private inited = false;
  private onceFlag = false;
  private errorData: { [key: string]: string } = {};
  invalid = false;
  _labelWidth: number | null = null;
  _error: string;

  // #region fields

  @Input() optional: string | TemplateRef<void>;
  @Input() optionalHelp: string | TemplateRef<void>;
  @Input()
  set error(val: string | { [key: string]: string }) {
    this.errorData = typeof val === 'string' ? { '': val } : val;
  }
  @Input() extra: string;
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

  _id = `_se-${nextUniqueId++}`;
  _autoId = true;

  // #endregion

  get paddingValue(): number {
    return this.parent.gutter / 2;
  }

  get showErr(): boolean {
    return this.invalid && !!this._error;
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
    if (!this.ngControl || this.status$) return;

    this.status$ = this.ngControl.statusChanges!.subscribe(res => this.updateStatus(res === 'INVALID'));
    if (this._autoId) {
      const control = (this.ngControl.valueAccessor as NzSafeAny)?._elementRef?.nativeElement as HTMLElement;
      if (control) {
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
    this.invalid = ((invalid && this.onceFlag) || (this.ngControl.dirty && invalid)) as boolean;
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
    if (this.inited) this.setClass().bindModel();
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
    if (this.status$) {
      this.status$.unsubscribe();
    }
  }
}
