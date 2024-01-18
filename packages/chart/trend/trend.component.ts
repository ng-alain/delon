import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';

import { BooleanInput, InputBoolean } from '@delon/util/decorator';
import { NzIconDirective } from 'ng-zorro-antd/icon';

@Component({
  selector: 'trend',
  exportAs: 'trend',
  template: `
    <ng-content />
    @if (flag) {
      <span class="trend__{{ flag }}"><i nz-icon nzType="caret-{{ flag }}"></i></span>
    }
  `,
  host: {
    '[class.trend]': 'true',
    '[class.trend__grey]': '!colorful',
    '[class.trend__reverse]': 'colorful && reverseColor',
    '[attr.data-flag]': `flag`
  },
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [NzIconDirective]
})
export class TrendComponent {
  static ngAcceptInputType_colorful: BooleanInput;
  static ngAcceptInputType_reverseColor: BooleanInput;

  /** 上升下降标识 */
  @Input() flag?: 'up' | 'down';
  /** 是否彩色标记 */
  @Input() @InputBoolean() colorful = true;
  /** 颜色反转 */
  @Input() @InputBoolean() reverseColor = false;
}
