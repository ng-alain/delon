import { ChangeDetectionStrategy, Component } from '@angular/core';

import type { CellWidgetData, CellWidgetInstance } from '@delon/abc/cell';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';

@Component({
  selector: 'cell-widget-test',
  template: ` <img nz-tooltip nzTooltipTitle="Client it" [src]="data.value" class="img" style="cursor: pointer" /> `,
  host: {
    '(click)': 'show()'
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [ NzToolTipModule ]
})
export class CellTestWidget implements CellWidgetInstance {
  static readonly KEY = 'test';

  readonly data!: CellWidgetData;

  constructor(private msg: NzMessageService) {}

  show(): void {
    this.msg.info(`click`);
  }
}
