import {
  Directive,
  AfterViewInit,
  ElementRef,
  Renderer2,
  Input,
} from '@angular/core';
import { toNumber } from '@delon/util';
import { AdSHFConfig } from './config';

@Directive({
  selector: 'shf-wrap, [shf-wrap]',
})
export class SHFWrapDirective implements AfterViewInit {
  @Input('shf-wrap')
  set col(value: any) {
    const a = toNumber(value, 0);
    if (a <= 0) return;
    this._col = toNumber(value, 0);
  }
  get col() {
    return this._col;
  }
  private _col = 2;

  @Input()
  set labelWidth(value: any) {
    this._labelWidth = toNumber(value, 0);
  }
  get labelWidth() {
    return this._labelWidth;
  }
  private _labelWidth = 100;

  @Input() nzLayout = 'horizontal';

  constructor(
    cog: AdSHFConfig,
    private el: ElementRef,
    private ren: Renderer2,
  ) {
    Object.assign(this, cog);
  }

  ngAfterViewInit(): void {
    const el = this.el.nativeElement as HTMLElement;
    this.ren.addClass(el.querySelector('.ant-card-body') || el, 'ad-shf__wrap');
    this.ren.addClass(el, `ad-shf__${this.nzLayout}`);
  }
}
