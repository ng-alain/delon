import { ChangeDetectionStrategy, Component } from '@angular/core';

import { CellWidgetData } from '@delon/abc/cell';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'cell-widget-test',
  template: ` <img nz-tooltip nzTooltipTitle="Client it" [src]="data.value" class="img" style="cursor: pointer" /> `,
  host: {
    '(click)': 'show()'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CellTestWidget {
  static readonly KEY = 'test';

  data!: CellWidgetData;

  constructor(private msg: NzMessageService) {}

  show(): void {
    this.msg.info(`正在打开大图${this.data.options?.widget?.data}……`);
  }
}
