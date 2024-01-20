import { ChangeDetectionStrategy, Component, OnChanges, SimpleChanges, inject } from '@angular/core';

import { NzImageModule } from 'ng-zorro-antd/image';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';

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
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [NzToolTipModule, NzImageModule]
})
export class STImgWidget implements OnChanges {
  private readonly msg = inject(NzMessageService);
  static readonly KEY = 'img';

  img!: string;

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  show(): void {
    this.msg.info(`正在打开大图${this.img}……`);
  }
}
