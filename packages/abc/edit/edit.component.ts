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
} from '@angular/core';
import { FormControlName, NgModel } from '@angular/forms';
import { Subscription } from 'rxjs';

import { ResponsiveService } from '@delon/theme';
import { deepGet, isEmpty, InputBoolean, InputNumber } from '@delon/util';

import { SEContainerComponent } from './edit-container.component';

const prefixCls = `se`;
let nextUniqueId = 0;

@Component({
  selector: 'se',
  templateUrl: './edit.component.html',
  host: {
    '[style.padding-left.px]': 'paddingValue',
    '[style.padding-right.px]': 'paddingValue',
    '[class.ant-form-item-with-help]': 'showErr',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SEComponent implements OnChanges, AfterContentInit, AfterViewInit, OnDestroy {
  private el: HTMLElement;
  private status$: Subscription;
  @ContentChild(NgModel) private readonly ngModel: NgModel;
  @ContentChild(FormControlName) private readonly formControlName: FormControlName;
  @ViewChild('contentElement') private readonly contentElement: ElementRef;
  private clsMap: string[] = [];
  private inited = false;
  private onceFlag = false;
  invalid = false;
  _labelWidth = null;

  // #region fields

  @Input() optional: string;
  @Input() optionalHelp: string;
  @Input() error: string;
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
    return this.invalid && this.parent.size !== 'compact' && !!this.error;
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
    this._labelWidth = labelWidth != null ? labelWidth : parent.labelWidth;
    clsMap.forEach(cls => ren.removeClass(el, cls));
    clsMap.length = 0;
    const repCls =
      parent.nzLayout === 'horizontal'
        ? rep.genCls(col != null ? col : parent.colInCon || parent.col)
        : [];
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

    this.status$ = this.ngControl.statusChanges.subscribe(res =>
      this.updateStatus(res === 'INVALID'),
    );

    if (this._autoId) {
      const control = deepGet(
        this.ngControl.valueAccessor,
        '_elementRef.nativeElement',
      ) as HTMLElement;
      if (control) {
        control.id = this._id;
      }
    }
  }

  private updateStatus(invalid: boolean): void {
    if (this.ngControl.disabled || this.ngControl.isDisabled) {
      return;
    }
    this.invalid = (invalid && this.onceFlag) || (this.ngControl.dirty && invalid);
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
        this.updateStatus(this.ngControl.invalid);
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
