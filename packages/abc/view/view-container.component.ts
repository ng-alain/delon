import {
  Component,
  Input,
  ElementRef,
  Renderer2,
  OnInit,
  OnChanges,
} from '@angular/core';
import { toNumber, updateHostClass } from '@delon/util';
import { NaSVConfig } from './view.config';

const prefixCls = `sv`;

@Component({
  selector: 'sv-container, [sv-container]',
  templateUrl: './view-container.component.html',
  preserveWhitespaces: false,
})
export class SVContainerComponent implements OnInit, OnChanges {
  private el: HTMLElement;
  //#region fields

  @Input()
  size: 'small' | 'large';

  /** 列表项间距，单位为 `px` */
  @Input()
  get gutter() {
    return this._gutter;
  }
  set gutter(value: any) {
    this._gutter = toNumber(value);
  }
  private _gutter: number;

  @Input()
  layout: 'horizontal' | 'vertical';

  @Input()
  set labelWidth(value: any) {
    this._labelWidth = toNumber(value, null);
  }
  get labelWidth() {
    return this._labelWidth;
  }
  private _labelWidth: number;

  /** 指定信息最多分几列展示，最终一行几列由 col 配置结合响应式规则决定 */
  @Input()
  get col() {
    return this._col;
  }
  set col(value: any) {
    this._col = toNumber(value);
  }
  private _col: number;

  @Input() default: boolean;

  //#endregion

  constructor(el: ElementRef, private ren: Renderer2, cog: NaSVConfig) {
    this.el = el.nativeElement;
    Object.assign(this, cog);
  }

  private setClass() {
    const { el, ren, size, layout } = this;
    updateHostClass(el, ren, {
      [`${prefixCls}__wrap`]: true,
      [`${prefixCls}__${size}`]: true,
      [`${prefixCls}__${layout}`]: true,
      [`clearfix`]: true
    });
  }

  ngOnInit() {
    this.setClass();
  }

  ngOnChanges() {
    this.setClass();
  }
}
