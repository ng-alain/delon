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
} from '@angular/core';
import { NgModel } from '@angular/forms';
import { updateHostClass, toNumber } from '@delon/util';
import { Subscription } from 'rxjs';

import { SHFWrapDirective } from './wrap.directive';

@Component({
  selector: 'shf-item',
  templateUrl: './item.component.html',
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SHFItemComponent implements OnChanges, AfterViewInit, OnDestroy {
  private status$: Subscription;
  @ContentChild(NgModel) private readonly ngModel: NgModel;
  invalid = false;

  // region: fields

  @Input() tip: string;

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
    this._span = 24 / toNumber(value, 2);
  }
  get col() {
    return this._span;
  }
  private _span: number;

  @Input()
  set labelWidth(value: any) {
    this._labelWidth = toNumber(value, 0);
  }
  get labelWidth() {
    return this._labelWidth;
  }
  private _labelWidth: number;

  @Input() controlClass: string = '';

  // endregion

  private get isHorizontal(): boolean {
    return !this.wrap || (this.wrap && this.wrap.nzLayout === 'horizontal');
  }

  constructor(
    @Optional()
    @Host()
    private wrap: SHFWrapDirective,
    private el: ElementRef,
    private ren: Renderer2,
    private cd: ChangeDetectorRef,
  ) {}

  private fixLabelWidth(): this {
    const w = this.wrap;
    if (typeof this.col === 'undefined') {
      this.col = w ? w.col : 2;
    }
    if (typeof this.labelWidth === 'undefined') {
      this.labelWidth = w ? w.labelWidth : 100;
    }

    if (!this.isHorizontal) this._labelWidth = null;
    return this;
  }

  setClassMap(): void {
    const classMap = {
      [`ant-form-item`]: true,
      [`ant-col-${this.col}`]: this.isHorizontal,
      [`ad-shf__item`]: true,
    };
    updateHostClass(this.el.nativeElement, this.ren, classMap);
    this.cd.detectChanges();
  }

  ngOnChanges() {
    this.fixLabelWidth().setClassMap();
  }

  ngAfterViewInit(): void {
    this.fixLabelWidth().setClassMap();

    if (this.ngModel) {
      this.status$ = this.ngModel.statusChanges.subscribe(res => {
        const status = res !== 'VALID';
        if (this.invalid === status) return;
        this.invalid = status;
        this.cd.detectChanges();
      });
    }
  }

  ngOnDestroy(): void {
    if (this.status$) {
      this.status$.unsubscribe();
    }
  }
}
