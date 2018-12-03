import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  ElementRef,
  Host,
  HostBinding,
  Input,
  OnChanges,
  OnDestroy,
  Optional,
  Renderer2,
  TemplateRef,
} from '@angular/core';
import { FormControlName, NgControl, NgModel } from '@angular/forms';
import { Subscription } from 'rxjs';

import { ResponsiveService } from '@delon/theme';
import { deepGet, InputBoolean, InputNumber } from '@delon/util';

import { SEContainerComponent } from './edit-container.component';

const prefixCls = `se`;
let nextUniqueId = 0;

@Component({
  selector: 'se',
  templateUrl: './edit.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SEComponent implements OnChanges, AfterViewInit, OnDestroy {
  private el: HTMLElement;
  private status$: Subscription;
  @ContentChild(NgModel)
  private readonly ngModel: NgModel;
  @ContentChild(FormControlName)
  private readonly formControlName: FormControlName;
  private clsMap: string[] = [];
  private inited = false;
  private onceFlag = false;
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
  _labelTpl: TemplateRef<void>;
  @Input()
  set label(value: string | TemplateRef<void>) {
    if (value instanceof TemplateRef) {
      this._label = null;
      this._labelTpl = value;
    } else {
      this._label = value;
    }
  }

  @Input()
  @InputNumber(null)
  col: number;

  @Input()
  @InputBoolean()
  required = false;

  @Input()
  controlClass: string = '';

  @Input()
  set id(value: string) {
    this._id = value;
    this._autoId = false;
  }

  _id = `_se-${nextUniqueId++}`;
  _autoId = true;

  @Input()
  @InputBoolean(null)
  line: boolean;

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

  private get ngControl(): NgControl {
    return this.ngModel || this.formControlName;
  }

  constructor(
    @Optional()
    @Host()
    private parent: SEContainerComponent,
    private rep: ResponsiveService,
    el: ElementRef,
    private ren: Renderer2,
    private cd: ChangeDetectorRef,
  ) {
    if (parent == null) {
      throw new Error(`[se] must include 'se-container' component`);
    }
    this.el = el.nativeElement;
  }

  private setClass(): this {
    const { el, ren, clsMap, col, parent, cd } = this;
    this.labelWidth = parent.labelWidth;
    clsMap.forEach(cls => ren.removeClass(el, cls));
    clsMap.length = 0;
    const repCls =
      parent.nzLayout === 'horizontal'
        ? this.rep.genCls(col != null ? col : parent.col)
        : [];
    clsMap.push(`ant-form-item`, ...repCls, `${prefixCls}__item`);
    if (this.line || parent.line) {
      clsMap.push(`${prefixCls}__line`);
    }
    clsMap.forEach(cls => ren.addClass(el, cls));
    cd.detectChanges();
    return this;
  }

  private bindModel() {
    if (!this.ngControl || this.status$) return;

    this.status$ = this.ngControl.statusChanges.subscribe(res => {
      const status = res !== 'VALID';
      if (!this.onceFlag || this.invalid === status) {
        this.onceFlag = true;
        return;
      }
      this.invalid = status;
      this.cd.detectChanges();
    });
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

  ngOnChanges() {
    this.onceFlag = this.parent.firstVisual;
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
