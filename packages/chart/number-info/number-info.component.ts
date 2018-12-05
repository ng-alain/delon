import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Input,
  OnChanges,
  Renderer2,
  TemplateRef,
} from '@angular/core';
import { updateHostClass, InputNumber } from '@delon/util';

@Component({
  selector: 'number-info',
  templateUrl: './number-info.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NumberInfoComponent implements OnChanges {
  _title = '';
  _titleTpl: TemplateRef<void>;
  /** 标题 */
  @Input()
  set title(value: string | TemplateRef<void>) {
    if (value instanceof TemplateRef) {
      this._title = null;
      this._titleTpl = value;
    } else this._title = value;
  }

  _subTitle = '';
  _subTitleTpl: TemplateRef<void>;
  /** 子标题 */
  @Input()
  set subTitle(value: string | TemplateRef<void>) {
    if (value instanceof TemplateRef) {
      this._subTitle = null;
      this._subTitleTpl = value;
    } else this._subTitle = value;
  }

  _total = '';
  _totalTpl: TemplateRef<void>;
  /** 总量 */
  @Input()
  set total(value: string | TemplateRef<void>) {
    if (value instanceof TemplateRef) {
      this._total = null;
      this._totalTpl = value;
    } else this._total = '' + value;
  }

  _isSubTotal = false;
  _subTotal = '';
  _subTotalTpl: TemplateRef<void>;
  /** 总量后缀 */
  @Input()
  set subTotal(value: string | TemplateRef<void>) {
    if (value instanceof TemplateRef) {
      this._subTotal = null;
      this._subTotalTpl = value;
    } else this._subTotal = value;

    this._isSubTotal = !!value;
  }

  /** 子总量 */
  @Input()
  suffix: string;

  /** 增加状态 */
  @Input()
  status: 'up' | 'down';

  /** 状态样式 */
  @Input()
  theme: 'light' | 'default' = 'light';

  /** 设置数字和描述直接的间距（像素） */
  @Input() @InputNumber() gap = 8;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    private cdr: ChangeDetectorRef,
  ) { }

  _classMap: string[] = [];
  setClass() {
    updateHostClass(
      this.el.nativeElement,
      this.renderer,
      {
        'number-info': true,
        [`number-info__${this.theme}`]: true,
      },
      true,
    );
    this.cdr.detectChanges();
  }

  ngOnChanges(): void {
    this.setClass();
  }
}
