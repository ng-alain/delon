import { CdkObserveContent } from '@angular/cdk/observers';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  TemplateRef,
  ViewEncapsulation,
  afterNextRender,
  booleanAttribute,
  computed,
  inject,
  input,
  numberAttribute,
  viewChild
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
  template: `
    @if (!hideLabel()) {
      @let _label = label();
      <div
        class="sv__label"
        [class.sv__label-empty]="!_label"
        [class.sv__label-width]="labelWidth() != null"
        [class.sv__no-colon]="_noColon()"
        [style.width.px]="labelWidth()"
      >
        <span class="sv__label-text">
          <ng-container *nzStringTemplateOutlet="_label">{{ _label }}</ng-container>
        </span>
        @let _optional = optional();
        @if (_optional || optionalHelp()) {
          <span class="sv__label-optional" [class.sv__label-optional-no-text]="!_optional">
            <ng-container *nzStringTemplateOutlet="_optional">{{ _optional }}</ng-container>
            @if (optionalHelp()) {
              <nz-icon
                nz-tooltip
                [nzTooltipTitle]="optionalHelp()"
                [nzTooltipColor]="optionalHelpColor()"
                nzType="question-circle"
              />
            }
          </span>
        }
      </div>
    }
    <div class="sv__detail">
      <span (cdkObserveContent)="checkContent()" #conEl>
        <ng-content />
      </span>
      @let _unit = unit();
      @if (_unit) {
        <span class="sv__unit" *nzStringTemplateOutlet="_unit">{{ _unit }}</span>
      }
    </div>
  `,
  host: {
    '[style.padding-left.px]': 'paddingValue()',
    '[style.padding-right.px]': 'paddingValue()',
    '[class]': 'cls()'
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  imports: [NzStringTemplateOutletDirective, NzTooltipDirective, NzIconDirective, CdkObserveContent]
})
export class SVComponent {
  private readonly parentComp = inject(SVContainerComponent, { host: true, optional: true });
  private readonly rep = inject(ResponsiveService);
  private readonly conEl = viewChild.required<ElementRef<HTMLElement>>('conEl');
  protected _noColon = computed(() => {
    const noColon = this.noColon();
    const parent = this.parentComp!;
    return parent.bordered() ? true : noColon != null ? noColon : parent.noColon();
  });

  // #region fields

  readonly optional = input<string | TemplateRef<void> | null>();
  readonly optionalHelp = input<string | TemplateRef<void> | null>();
  readonly optionalHelpColor = input<string>();
  readonly label = input<string | TemplateRef<void> | null>();
  readonly unit = input<string | TemplateRef<void> | null>();
  readonly col = input(null, { transform: (v: unknown) => (v == null ? null : numberAttribute(v)) });
  readonly default = input(null, { transform: (v: unknown) => (v == null ? null : booleanAttribute(v)) });
  readonly type = input<'primary' | 'success' | 'danger' | 'warning' | null>();
  readonly noColon = input(null, { transform: (v: unknown) => (v == null ? null : booleanAttribute(v)) });
  readonly hideLabel = input(false, { transform: booleanAttribute });

  // #endregion

  protected paddingValue = computed(() => {
    const parent = this.parentComp!;
    if (parent.bordered()) return null;
    return parent.gutter() / 2;
  });

  protected labelWidth = computed(() => {
    const { labelWidth, layout } = this.parentComp!;
    return layout() === 'horizontal' ? labelWidth() : null;
  });

  protected cls = computed(() => {
    const parent = this.parentComp!;
    const parentCol = parent.colInCon() ?? parent.col();
    const col = this.col();
    const ret = [...this.rep.genCls(col != null ? col : parentCol, parentCol)];
    ret.push(`${prefixCls}__item`);
    if (parent.labelWidth()) ret.push(`${prefixCls}__item-fixed`);
    const type = this.type();
    if (type) ret.push(`${prefixCls}__type-${type}`);
    return ret;
  });

  constructor() {
    if (this.parentComp == null) {
      throw new Error(`[sv] must include 'sv-container' component`);
    }

    afterNextRender(() => {
      this.checkContent();
    });
  }

  checkContent(): void {
    const def = this.default();
    if (!(def != null ? def : this.parentComp?.default())) {
      return;
    }
    const el = this.conEl().nativeElement;
    const cls = `sv__default`;
    if (el.classList.contains(cls)) {
      el.classList.remove(cls);
    }
    if (isEmpty(el)) {
      el.classList.add(cls);
    }
  }
}
