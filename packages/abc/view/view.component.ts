import {
  Component,
  Input,
  Host,
  ElementRef,
  Renderer2,
  OnChanges,
  TemplateRef,
  ViewChild,
  AfterViewInit,
  HostBinding,
  Optional,
} from '@angular/core';
import { toNumber, toBoolean, isEmpty } from '@delon/util';
import { NaViewComponent } from './view-wrap.component';
import { GenStanRepCls } from '../../core/responsive';

const prefixCls = `na-view`;

@Component({
  selector: 'na-view, [na-view]',
  templateUrl: './view.component.html',
  preserveWhitespaces: false,
})
export class NaViewItemComponent implements AfterViewInit, OnChanges {
  @ViewChild('conEl')
  private conEl: ElementRef;
  private el: HTMLElement;
  private clsMap: string[] = [];

  //#region fields

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
  set default(value: any) {
    this._default = toBoolean(value, null);
  }
  private _default: boolean;

  @Input()
  type: 'primary' | 'success' | 'danger' | 'warning';

  //#endregion

  @HostBinding('style.padding-left.px')
  get paddingLeft(): number {
    return this.parent && this.parent.gutter / 2;
  }

  @HostBinding('style.padding-right.px')
  get paddingRight(): number {
    return this.parent && this.parent.gutter / 2;
  }

  constructor(
    @Host() @Optional() public parent: NaViewComponent,
    el: ElementRef,
    private ren: Renderer2,
  ) {
    if (parent == null) {
      throw new Error(`[na-view] must include 'na-view-wrap' component`);
    }
    this.el = el.nativeElement;
  }

  private setClass() {
    const { el, ren, _col, clsMap, type } = this;
    clsMap.forEach(cls => ren.removeClass(el, cls));
    clsMap.length = 0;
    clsMap.push(...GenStanRepCls(_col != null ? _col : this.parent.col));
    clsMap.push(`${prefixCls}__item`);
    if (this.parent.labelWidth) clsMap.push(`${prefixCls}__item-fixed`);
    if (type) clsMap.push(`${prefixCls}__type-${type}`);
    clsMap.forEach(cls => ren.addClass(el, cls));
  }

  ngAfterViewInit() {
    this.setClass();
    this.checkContent();
  }

  ngOnChanges() {
    this.setClass();
  }

  checkContent() {
    const { _default, conEl } = this;
    if (!(_default != null ? _default : this.parent.default)) return;
    const el = conEl.nativeElement as HTMLElement;
    const cls = `na-view__default`;
    if (el.classList.contains(cls)) {
      el.classList.remove(cls);
    }
    if (isEmpty(el)) {
      el.classList.add(cls);
    }
  }
}
