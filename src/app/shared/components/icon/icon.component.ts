import { Component, Input, booleanAttribute } from '@angular/core';

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

  @Input({ transform: booleanAttribute })
  spin = false;

  @Input()
  twoToneColor!: string;

  @Input()
  iconfont!: string;
}
