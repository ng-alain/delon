import {
  Component,
  Input,
  TemplateRef,
  OnChanges,
  ElementRef,
  Renderer2,
  ContentChild,
  Host,
  Optional,
  AfterViewInit,
  ChangeDetectorRef,
  ChangeDetectionStrategy,
  OnDestroy,
  HostBinding,
} from '@angular/core';
import { NgModel } from '@angular/forms';
import { Subscription } from 'rxjs';

import { toNumber, toBoolean, deepGet } from '@delon/util';

import { NaEditWrapComponent } from './edit-wrap.component';
import { GenStanRepCls, REP_MAX_COL } from '../core/responsive';

const prefixCls = `na-edit`;
let nextUniqueId = 0;

@Component({
  selector: 'na-edit',
  templateUrl: './edit.component.html',
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NaEditComponent implements OnChanges, AfterViewInit, OnDestroy {
  private el: HTMLElement;
  private status$: Subscription;
  @ContentChild(NgModel)
  private readonly ngModel: NgModel;
  private clsMap: string[] = [];
  private inited = false;
  invalid = false;
  labelWidth = null;

  // #region fields

  @Input()
  optional: string;

  @Input()
  optionalHelp: string;

  @Input()
  error: string;

  @Input()
  extra: string;

  _label = '';
  _labelTpl: TemplateRef<any>;
  @Input()
  set label(value: string | TemplateRef<any>) {
    if (value instanceof TemplateRef) {
      this._label = null;
      this._labelTpl = value;
    } else {
      this._label = value;
    }
  }

  @Input()
  set col(value: any) {
    this._col = toNumber(value, null);
  }
  private _col: number;

  @Input()
  set required(value: any) {
    this._required = toBoolean(value);
  }
  get required() {
    return this._required;
  }
  private _required = false;

  @Input()
  controlClass: string = '';

  @Input()
  set id(value: string) {
    this._id = value;
    this._autoId = false;
  }

  _id = `_na-edit-${nextUniqueId++}`;
  _autoId = true;

  // #endregion

  @HostBinding('style.padding-left.px')
  get paddingLeft(): number {
    return this.parent.gutter / 2;
  }

  @HostBinding('style.padding-right.px')
  get paddingRight(): number {
    return this.parent.gutter / 2;
  }

  @HostBinding('class.ant-form-item-with-help')
  get showErr(): boolean {
    return this.invalid && this.parent.size !== 'compact' && !!this.error;
  }

  constructor(
    @Optional()
    @Host()
    private parent: NaEditWrapComponent,
    el: ElementRef,
    private ren: Renderer2,
    private cd: ChangeDetectorRef,
  ) {
    if (parent == null) {
      throw new Error(`[na-edit] must include 'na-edit-wrap' component`);
    }
    this.el = el.nativeElement;
  }

  private setClass(): this {
    const { el, ren, clsMap, _col, parent, cd } = this;
    this.labelWidth = parent.labelWidth;
    clsMap.forEach(cls => ren.removeClass(el, cls));
    clsMap.length = 0;
    const repCls =
      parent.nzLayout === 'horizontal'
        ? GenStanRepCls(_col != null ? _col : parent.col, REP_MAX_COL)
        : [];
    clsMap.push(`ant-form-item`, ...repCls, `${prefixCls}__item`);
    clsMap.forEach(cls => ren.addClass(el, cls));
    cd.detectChanges();
    return this;
  }

  private bindModel() {
    if (!this.ngModel || this.status$) return;

    this.status$ = this.ngModel.statusChanges.subscribe(res => {
      const status = res !== 'VALID';
      if (this.invalid === status) return;
      this.invalid = status;
      this.cd.detectChanges();
    });
    if (this._autoId) {
      const control = deepGet(
        this.ngModel.valueAccessor,
        '_elementRef.nativeElement',
      ) as HTMLElement;
      if (control) {
        control.id = this._id;
      }
    }
  }

  ngOnChanges() {
    if (this.inited) this.setClass().bindModel();
  }

  ngAfterViewInit(): void {
    this.setClass().bindModel();
    this.inited = true;
  }

  ngOnDestroy(): void {
    if (this.status$) {
      this.status$.unsubscribe();
    }
  }
}
