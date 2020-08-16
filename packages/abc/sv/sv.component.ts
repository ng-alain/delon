import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Host,
  Input,
  OnChanges,
  Optional,
  Renderer2,
  TemplateRef,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { ResponsiveService } from '@delon/theme';
import { BooleanInput, InputBoolean, InputNumber, isEmpty, NumberInput } from '@delon/util';
import { SVContainerComponent } from './sv-container.component';

const prefixCls = `sv`;

@Component({
  selector: 'sv, [sv]',
  exportAs: 'sv',
  templateUrl: './sv.component.html',
  host: {
    '[style.padding-left.px]': 'paddingValue',
    '[style.padding-right.px]': 'paddingValue',
  },
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class SVComponent implements AfterViewInit, OnChanges {
  static ngAcceptInputType_col: NumberInput;
  static ngAcceptInputType_default: BooleanInput;

  @ViewChild('conEl', { static: false })
  private conEl: ElementRef;
  private el: HTMLElement;
  private clsMap: string[] = [];

  // #region fields

  @Input() optional: string | TemplateRef<void>;
  @Input() optionalHelp: string | TemplateRef<void>;
  @Input() label: string | TemplateRef<void>;
  @Input() unit: string | TemplateRef<void>;
  @Input() @InputNumber(null) col: number;
  @Input() @InputBoolean(null) default: boolean;
  @Input() type: 'primary' | 'success' | 'danger' | 'warning';

  // #endregion

  get paddingValue(): number {
    return this.parent && this.parent.gutter / 2;
  }

  get labelWidth(): number | null {
    const { labelWidth, layout } = this.parent;
    return layout === 'horizontal' ? labelWidth : null;
  }

  constructor(
    el: ElementRef,
    @Host() @Optional() public parent: SVContainerComponent,
    private rep: ResponsiveService,
    private ren: Renderer2,
  ) {
    if (parent == null) {
      throw new Error(`[sv] must include 'sv-container' component`);
    }
    this.el = el.nativeElement;
  }

  private setClass(): void {
    const { el, ren, col, clsMap, type, rep } = this;
    clsMap.forEach(cls => ren.removeClass(el, cls));
    clsMap.length = 0;
    clsMap.push(...rep.genCls(col != null ? col : this.parent.col));
    clsMap.push(`${prefixCls}__item`);
    if (this.parent.labelWidth) clsMap.push(`${prefixCls}__item-fixed`);
    if (type) clsMap.push(`${prefixCls}__type-${type}`);
    clsMap.forEach(cls => ren.addClass(el, cls));
  }

  ngAfterViewInit(): void {
    this.setClass();
    this.checkContent();
  }

  ngOnChanges(): void {
    this.setClass();
  }

  checkContent(): void {
    const { conEl } = this;
    const def = this.default;
    if (!(def != null ? def : this.parent.default)) return;
    const el = conEl.nativeElement as HTMLElement;
    const cls = `sv__default`;
    if (el.classList.contains(cls)) {
      el.classList.remove(cls);
    }
    if (isEmpty(el)) {
      el.classList.add(cls);
    }
  }
}
