import {
  Component,
  Input,
  HostBinding,
  ViewEncapsulation,
  Renderer2,
  ElementRef,
} from '@angular/core';
import { coerceNumberProperty } from '@angular/cdk/coercion';

@Component({
  selector: 'ellipsis',
  template: `<ng-content></ng-content>`,
  host: { '[class.ad-ellipsis]': 'true' },
})
export class EllipsisComponent {
  /** 在按照行数截取下最大的行数，超过则截取省略 */
  @Input()
  @HostBinding('style.-webkit-line-clamp')
  get lines() {
    return this._lines;
  }
  set lines(value: any) {
    this._lines = coerceNumberProperty(value);
  }
  private _lines = 3;

  constructor(el: ElementRef, render: Renderer2) {
    render.setStyle(el.nativeElement, '-webkit-box-orient', 'vertical');
  }
}
