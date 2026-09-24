import { ChangeDetectionStrategy, Component, ViewEncapsulation, booleanAttribute, input } from '@angular/core';

import { NzIconDirective } from 'ng-zorro-antd/icon';

@Component({
  selector: 'trend',
  exportAs: 'trend',
  template: `
    <ng-content />
    @if (flag()) {
      <span class="trend__{{ flag() }}"><nz-icon nzType="caret-{{ flag() }}" /></span>
    }
  `,
  host: {
    '[class.trend]': 'true',
    '[class.trend__grey]': '!colorful()',
    '[class.trend__reverse]': 'colorful() && reverseColor()',
    '[attr.data-flag]': `flag()`
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  imports: [NzIconDirective]
})
export class TrendComponent {
  /** 上升下降标识 */
  readonly flag = input<'up' | 'down'>();
  /** 是否彩色标记 */
  readonly colorful = input(true, { transform: booleanAttribute });
  /** 颜色反转 */
  readonly reverseColor = input(false, { transform: booleanAttribute });
}
