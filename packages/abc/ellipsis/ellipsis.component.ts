import {
  Component,
  Input,
  HostBinding,
  Renderer2,
  ElementRef,
} from '@angular/core';
import { toNumber } from '@delon/util';

@Component({
  selector: 'na-ellipsis',
  template: `<ng-content></ng-content>`,
  host: { '[class.na-ellipsis]': 'true' },
})
export class NaEllipsisComponent {
  /** 在按照行数截取下最大的行数，超过则截取省略 */
  @Input()
  @HostBinding('style.-webkit-line-clamp')
  get lines() {
    return this._lines;
  }
  set lines(value: any) {
    this._lines = toNumber(value);
  }
  private _lines = 3;

  constructor(el: ElementRef, render: Renderer2) {
    render.setStyle(el.nativeElement, '-webkit-box-orient', 'vertical');
  }
}
