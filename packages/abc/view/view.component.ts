import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Host,
  HostBinding,
  Input,
  OnChanges,
  Optional,
  Renderer2,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { ResponsiveService } from '@delon/theme';
import { isEmpty, InputBoolean, InputNumber } from '@delon/util';

import { SVContainerComponent } from './view-container.component';

const prefixCls = `sv`;

@Component({
  selector: 'sv, [sv]',
  templateUrl: './view.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SVComponent implements AfterViewInit, OnChanges {
  @ViewChild('conEl')
  private conEl: ElementRef;
  private el: HTMLElement;
  private clsMap: string[] = [];

  //#region fields

  @Input() label: string | TemplateRef<void>;
  @Input() @InputNumber(null) col: number;
  @Input() @InputBoolean(null) default: boolean;
  @Input() type: 'primary' | 'success' | 'danger' | 'warning';

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

  private setClass() {
    const { el, ren, col, clsMap, type, rep } = this;
    clsMap.forEach(cls => ren.removeClass(el, cls));
    clsMap.length = 0;
    clsMap.push(...rep.genCls(col != null ? col : this.parent.col));
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
