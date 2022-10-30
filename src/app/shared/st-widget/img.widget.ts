import { ChangeDetectionStrategy, Component } from '@angular/core';

import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'st-widget-img',
  template: `
    <img
      nz-tooltip
      nzTooltipTitle="Click it"
      nz-image
      nzSrc="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
      (click)="show()"
      class="img"
      style="cursor: pointer"
    />
  `,
  host: {
    '(click)': 'show()'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class STImgWidget {
  static readonly KEY = 'img';

  img!: string;

  constructor(private msg: NzMessageService) {}

  show(): void {
    this.msg.info(`正在打开大图${this.img}……`);
  }
}
