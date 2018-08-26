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
} from '@angular/core';
import { toNumber, updateHostClass, isEmpty } from '@delon/util';
import { NaViewComponent } from './view-wrap.component';

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
    this._col = toNumber(value);
  }
  private _col: number;

  @Input()
  default: boolean;

  @Input()
  type: 'primary' | 'success' | 'danger' | 'warning';

  //#endregion

  constructor(
    @Host() public parent: NaViewComponent,
    el: ElementRef,
    private ren: Renderer2,
  ) {
    if (parent == null) {
      throw new Error(`[na-view] must include 'na-view-wrap' component`);
    }
    this.el = el.nativeElement;
  }

  private setClass() {
    const { gutter, col } = this.parent;
    const { el, ren, _col } = this;
    const count = typeof _col !== 'undefined' ? _col : col;
    const maxCol = 6;
    const responsive = {
      1: { xs: 24 },
      2: { xs: 24, sm: 12 },
      3: { xs: 24, sm: 12, md: 8 },
      4: { xs: 24, sm: 12, md: 8, lg: 6 },
      5: { xs: 24, sm: 12, md: 8, lg: 6, xl: 4 },
      6: { xs: 24, sm: 12, md: 8, lg: 6, xl: 4, xxl: 2 },
    }[count > maxCol ? maxCol : count];
    const antColClass = 'ant-col';
    updateHostClass(el, ren, {
      [`${antColClass}-xs-${responsive.xs}`]: !!responsive.xs,
      [`${antColClass}-sm-${responsive.sm}`]: !!responsive.sm,
      [`${antColClass}-md-${responsive.md}`]: !!responsive.md,
      [`${antColClass}-lg-${responsive.lg}`]: !!responsive.lg,
      [`${antColClass}-xl-${responsive.xl}`]: !!responsive.xl,
      [`${antColClass}-xxl-${responsive.xxl}`]: !!responsive.xxl,
      [`${prefixCls}__item`]: true,
      [`${prefixCls}__item-fixed`]: this.parent.labelWidth,
      [`${prefixCls}__type-${this.type}`]: this.type,
    });
    this.ren.setStyle(el, 'padding-left', `${gutter / 2}px`);
    this.ren.setStyle(el, 'padding-right', `${gutter / 2}px`);
  }

  ngAfterViewInit() {
    this.setClass();
    this.checkContent();
  }

  ngOnChanges() {
    this.setClass();
  }

  checkContent() {
    const cls = `na-view__default`;
    const d =
      typeof this.default !== 'undefined' ? this.default : this.parent.default;
    if (!d) return;
    const el = this.conEl.nativeElement as HTMLElement;
    if (isEmpty(el)) {
      this.ren.addClass(el, cls);
    } else {
      this.ren.removeClass(el, cls);
    }
  }
}
