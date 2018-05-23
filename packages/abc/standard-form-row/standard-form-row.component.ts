import {
  Component,
  Input,
  ElementRef,
  OnChanges,
  SimpleChanges,
  Renderer2,
  SimpleChange,
} from '@angular/core';
import { toBoolean, updateHostClass } from '@delon/util';

@Component({
  selector: 'standard-form-row',
  template: `
  <div *ngIf="title" class="label"><span>{{title}}</span></div>
  <div class="control"><ng-content></ng-content></div>
  `,
  preserveWhitespaces: false,
})
export class StandardFormRowComponent implements OnChanges {
  @Input() title: string;

  /** 是否整行 */
  @Input()
  get block() {
    return this._block;
  }
  set block(value: any) {
    this._block = toBoolean(value);
  }
  private _block: boolean;

  /** 是否最后一行 */
  @Input()
  get last() {
    return this._last;
  }
  set last(value: any) {
    this._last = toBoolean(value);
  }
  private _last: boolean;

  /** 是否网格布局 */
  @Input()
  get grid() {
    return this._grid;
  }
  set grid(value: any) {
    this._grid = toBoolean(value);
  }
  private _grid: boolean;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  setClass() {
    const classMap = {
      ['ad-standard-form-row']: true,
      ['block']: this.block,
      ['grid']: this.grid,
      ['last']: this.last,
    };
    updateHostClass(this.el.nativeElement, this.renderer, classMap);
  }

  ngOnChanges(
    changes: { [P in keyof this]?: SimpleChange } & SimpleChanges,
  ): void {
    this.setClass();
  }
}
