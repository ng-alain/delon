import { Component, Input, booleanAttribute } from '@angular/core';

import { NzIconDirective } from 'ng-zorro-antd/icon';

@Component({
  selector: 'icon',
  template: `
    <nz-icon
      [nzType]="type"
      [nzTheme]="theme"
      [nzSpin]="spin"
      [nzTwotoneColor]="twoToneColor"
      [nzIconfont]="iconfont"
    />
  `,
  imports: [NzIconDirective]
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
