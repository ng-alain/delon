import { CdkObserveContent } from '@angular/cdk/observers';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  OnChanges,
  Renderer2,
  TemplateRef,
  ViewChild,
  ViewEncapsulation,
  booleanAttribute,
  inject,
  numberAttribute
} from '@angular/core';

import { ResponsiveService } from '@delon/theme';
import { isEmpty } from '@delon/util/browser';
import { NzStringTemplateOutletDirective } from 'ng-zorro-antd/core/outlet';
import { NzIconDirective } from 'ng-zorro-antd/icon';
import { NzTooltipDirective } from 'ng-zorro-antd/tooltip';

import { SVContainerComponent } from './sv-container.component';

const prefixCls = `sv`;

@Component({
  selector: 'sv, [sv]',
  exportAs: 'sv',
  templateUrl: './sv.component.html',
  host: {
    '[style.padding-left.px]': 'paddingValue',
    '[style.padding-right.px]': 'paddingValue'
  },
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [NzStringTemplateOutletDirective, NzTooltipDirective, NzIconDirective, CdkObserveContent]
})
export class SVComponent implements AfterViewInit, OnChanges {
  private readonly el: HTMLElement = inject(ElementRef).nativeElement;
  private readonly parent = inject(SVContainerComponent, { host: true, optional: true });
  private readonly rep = inject(ResponsiveService);
  private readonly ren = inject(Renderer2);

  @ViewChild('conEl', { static: false })
  private readonly conEl!: ElementRef<HTMLElement>;
  private clsMap: string[] = [];
  _noColon = false;

  // #region fields

  @Input() optional?: string | TemplateRef<void> | null;
  @Input() optionalHelp?: string | TemplateRef<void> | null;
  @Input() optionalHelpColor?: string;
  @Input() label?: string | TemplateRef<void> | null;
  @Input() unit?: string | TemplateRef<void> | null;
  @Input({ transform: (v: unknown) => (v == null ? null : numberAttribute(v)) }) col?: number | null;
  @Input({ transform: (v: unknown) => (v == null ? null : booleanAttribute(v)) }) default?: boolean | null;
  @Input() type?: 'primary' | 'success' | 'danger' | 'warning';
  @Input({ transform: (v: unknown) => (v == null ? null : booleanAttribute(v)) }) noColon?: boolean | null;
  @Input({ transform: booleanAttribute }) hideLabel = false;

  // #endregion

  get paddingValue(): number | null {
    if (this.parent!.bordered) return null;
    return this.parent!.gutter / 2;
  }

  get labelWidth(): number | null | undefined {
    const { labelWidth, layout } = this.parent!;
    return layout === 'horizontal' ? labelWidth : null;
  }

  constructor() {
    if (this.parent == null) {
      throw new Error(`[sv] must include 'sv-container' component`);
    }
  }

  private setClass(): void {
    const { ren, col, clsMap, type, rep, noColon } = this;
    const parent = this.parent!;
    const el = this.el;
    this._noColon = parent.bordered ? true : noColon != null ? noColon : parent.noColon;
    clsMap.forEach(cls => ren.removeClass(el, cls));
    clsMap.length = 0;
    const parentCol = parent.colInCon || parent.col;
    clsMap.push(...rep.genCls(col != null ? col : parentCol, parentCol));
    clsMap.push(`${prefixCls}__item`);
    if (parent.labelWidth) clsMap.push(`${prefixCls}__item-fixed`);
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
    if (!(def != null ? def : this.parent?.default)) {
      return;
    }
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
