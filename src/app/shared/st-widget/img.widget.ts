import { ChangeDetectionStrategy, Component } from '@angular/core';
import { STWidget } from '@delon/abc/st';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'st-widget-img',
  template: ` <img nz-tooltip nzTooltipTitle="Client it" [src]="img" class="img" style="cursor: pointer" /> `,
  host: {
    '(click)': 'show()',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class STImgWidget extends STWidget {
  static readonly KEY = 'img';

  img: string;

  constructor(private msg: NzMessageService) {
    super();
  }

  show(): void {
    this.msg.info(`正在打开大图${this.img}……`);
  }
}
