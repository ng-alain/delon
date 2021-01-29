import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { BooleanInput, InputBoolean } from '@delon/util/decorator';

@Component({
  selector: 'trend',
  exportAs: 'trend',
  templateUrl: './trend.component.html',
  host: {
    '[class.trend]': 'true',
    '[class.trend__grey]': '!colorful',
    '[class.trend__reverse]': 'colorful && reverseColor',
  },
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class TrendComponent {
  static ngAcceptInputType_colorful: BooleanInput;
  static ngAcceptInputType_reverseColor: BooleanInput;

  /** 上升下降标识 */
  @Input() flag: 'up' | 'down';
  /** 是否彩色标记 */
  @Input() @InputBoolean() colorful = true;
  /** 颜色反转 */
  @Input() @InputBoolean() reverseColor = false;
}
