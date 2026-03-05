import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  inject,
  input,
  numberAttribute
} from '@angular/core';

import { ResponsiveService } from '@delon/theme';
import type { NzSafeAny } from 'ng-zorro-antd/core/types';

import { SGContainerComponent } from './sg-container.component';

const prefixCls = `sg`;

@Component({
  selector: 'sg',
  exportAs: 'sg',
  template: `<ng-content />`,
  host: {
    '[style.padding-left.px]': 'paddingValue()',
    '[style.padding-right.px]': 'paddingValue()',
    '[class]': 'cls()'
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class SGComponent {
  private readonly rep = inject(ResponsiveService);
  private readonly parentComp = inject(SGContainerComponent, { host: true, optional: true })!;

  protected paddingValue = computed(() => this.parentComp.gutter() / 2);

  readonly col = input(null, {
    transform: (v: unknown) => (v == null ? null : (numberAttribute(v, null as NzSafeAny) as number))
  });

  readonly cls = computed(() => {
    const col = this.col();
    const parent = this.parentComp;
    const parentCol = parent.colInCon() ?? parent.col()!;
    const arr = this.rep.genCls(col != null ? col : parentCol, parentCol);
    return arr.concat(`${prefixCls}__item`);
  });

  constructor() {
    if (this.parentComp == null) {
      throw new Error(`[sg] must include 'sg-container' component`);
    }
  }
}
