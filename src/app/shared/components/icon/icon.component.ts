import { Component, Input } from '@angular/core';

import { InputBoolean } from '@delon/util/decorator';
import { NzIconModule } from 'ng-zorro-antd/icon';

@Component({
  selector: 'nz-icon',
  template: `
    <i
      nz-icon
      [nzType]="type"
      [nzTheme]="theme"
      [nzSpin]="spin"
      [nzTwotoneColor]="twoToneColor"
      [nzIconfont]="iconfont"
    ></i>
  `,
  standalone: true,
  imports: [NzIconModule]
})
export class IconComponent {
  @Input()
  type!: string;

  @Input()
  theme: 'fill' | 'outline' | 'twotone' = 'outline';

  @Input()
  @InputBoolean()
  spin = false;

  @Input()
  twoToneColor!: string;

  @Input()
  iconfont!: string;
}
