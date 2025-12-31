import {
  ChangeDetectionStrategy,
  Component,
  TemplateRef,
  ViewEncapsulation,
  booleanAttribute,
  computed,
  inject,
  input,
  numberAttribute
} from '@angular/core';

import type { REP_TYPE } from '@delon/theme';
import { NzStringTemplateOutletDirective } from 'ng-zorro-antd/core/outlet';

import { SEErrorRefresh, SELayout } from './se.types';

@Component({
  selector: 'se-title, [se-title]',
  exportAs: 'seTitle',
  template: '<ng-content />',
  host: {
    class: 'se__title',
    '[style.padding-left.px]': 'paddingValue()',
    '[style.padding-right.px]': 'paddingValue()'
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class SETitleComponent {
  private readonly parentComp = inject(SEContainerComponent, { host: true, optional: true });
  constructor() {
    if (this.parentComp == null) {
      throw new Error(`[se-title] must include 'se-container' component`);
    }
  }
  protected paddingValue = computed(() => this.parentComp!._gutter() / 2);
}

@Component({
  selector: 'se-container, [se-container]',
  exportAs: 'seContainer',
  template: `
    @let tit = title();
    @if (tit) {
      <div se-title>
        <ng-container *nzStringTemplateOutlet="tit">{{ tit }}</ng-container>
      </div>
    }
    <ng-content />
  `,
  host: {
    class: 'ant-row se__container',
    '[class.se__horizontal]': `nzLayout() === 'horizontal'`,
    '[class.se__vertical]': `nzLayout() === 'vertical'`,
    '[class.se__inline]': `nzLayout() === 'inline'`,
    '[class.se__compact]': `_size() === 'compact'`,
    '[style.margin-left.px]': `margin()`,
    '[style.margin-right.px]': `margin()`
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  imports: [SETitleComponent, NzStringTemplateOutletDirective]
})
export class SEContainerComponent {
  readonly colInCon = input(null, {
    transform: (v: unknown) => (v == null ? null : (numberAttribute(v) as REP_TYPE)),
    alias: 'se-container'
  });
  readonly labelWidth = input(150, {
    transform: (v: unknown) => (v == null ? null : (numberAttribute(v) as REP_TYPE))
  });
  readonly col = input(2, {
    transform: (v: unknown) => (v == null ? null : (numberAttribute(v) as REP_TYPE))
  });
  readonly noColon = input(false, { transform: booleanAttribute });
  readonly title = input<string | TemplateRef<void> | null>();
  readonly gutter = input(32, { transform: numberAttribute });
  readonly nzLayout = input<SELayout>('horizontal');
  readonly size = input<'default' | 'compact'>('default');
  readonly firstVisual = input(false, { transform: booleanAttribute });
  readonly ingoreDirty = input(false, { transform: booleanAttribute });
  readonly line = input(false, { transform: booleanAttribute });
  readonly errors = input<SEErrorRefresh[]>([]);

  readonly _gutter = computed(() => (this.nzLayout() === 'horizontal' ? this.gutter() : 0));
  readonly _size = computed(() => (this.nzLayout() === 'inline' ? 'compact' : this.size()));
  protected margin = computed(() => -(this._gutter() / 2));
}
